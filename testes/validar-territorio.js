// Validação estrutural de um arquivo de território (territorios/<id>.js)
// contra o cadastro metodológico.
//
// Uso, a partir da pasta do painel:
//   node testes/validar-territorio.js campo-grande-ms
// Termina com código 1 se houver ERRO.
"use strict";
const fs = require("fs");
const path = require("path");

const raiz = path.resolve(__dirname, "..");
const tid = process.argv[2];
const erros = [], avisos = [], ok = [];
const erro = (m) => erros.push(m);
const confere = (c, mo, me) => (c ? ok.push(mo) : erro(me));

const window = {};
new Function("window", fs.readFileSync(path.join(raiz, "metodologia/metodologia.js"), "utf8"))(window);
new Function("window", fs.readFileSync(path.join(raiz, "territorios", tid + ".js"), "utf8"))(window);
const M = window.METODOLOGIA;
const T = window.TERRITORIOS && window.TERRITORIOS[tid];
if (!T) { console.log("ERRO território não registrado em window.TERRITORIOS[" + tid + "]"); process.exit(1); }

const fatores = new Map();
M.eixos.forEach((e) => e.fatores.forEach((f) => fatores.set(f.id, { e, f })));

// 1. Identificação mínima
const t = T.territorio || {};
confere(t.id === tid, "id do território coincide com o nome do arquivo", "id do território difere do arquivo");
["nome", "uf", "rotulo", "tipo"].forEach((c) => { if (!t[c]) erro("território sem campo " + c); });
confere(T.situacao && T.situacao.status && T.situacao.aviso, "situação do diagnóstico declarada (" + (T.situacao || {}).status + ")", "território sem situação/aviso");
confere(T.documento_fonte && T.documento_fonte.arquivo && fs.existsSync(path.join(raiz, T.documento_fonte.arquivo)),
  "documento-fonte presente: " + (T.documento_fonte || {}).arquivo, "documento-fonte ausente");
if (T.metodologia.versao !== M.versao) avisos.push(`território gerado com metodologia ${T.metodologia.versao}; cadastro atual ${M.versao}`);
else ok.push("território gerado com a versão vigente da metodologia (" + M.versao + ")");

// 2. Diagnósticos validados
const camposMetodologicos = ["fator", "icone", "ods", "nome_ods", "definicao", "ordem"];
const codigos = new Map();
const verificaBloco = (b, rotulo) => {
  if (!b.texto || !b.texto.trim()) erro(rotulo + ": texto vazio");
  camposMetodologicos.forEach((c) => { if (c in b) erro(rotulo + ": campo metodológico duplicado no território (" + c + ")"); });
  ["fontes_citadas", "referencias_normativas", "periodos_citados"].forEach((c) => {
    if (!Array.isArray(b[c])) return erro(rotulo + ": campo " + c + " ausente");
    b[c].forEach((x) => { if (!b.texto.includes(x)) erro(rotulo + `: "${x}" (${c}) não aparece literalmente no texto`); });
  });
  const o = b.origem || {};
  if (!o.codigo_documento || !o.nome_no_documento || !o.eixo_documento) erro(rotulo + ": origem incompleta");
  (b.fatores_relacionados || []).forEach((r) => { if (!fatores.has(r)) erro(rotulo + ": fator relacionado inexistente no cadastro (" + r + ")"); });
  if (codigos.has(o.codigo_documento)) erro(rotulo + ": código do documento usado duas vezes (" + o.codigo_documento + ")");
  codigos.set(o.codigo_documento, rotulo);
};
const D = T.diagnosticos || {};
let semId = 0;
Object.keys(D).forEach((id) => {
  if (!fatores.has(id)) { semId++; return erro("diagnóstico ligado a id inexistente no cadastro: " + id); }
  verificaBloco(D[id], id);
  const c = D[id].correspondencia || {};
  if (c.situacao !== "validada" || !["identificador_no_documento", "nome_identico", "variacao_nominal"].includes(c.tipo)) erro(id + ": correspondência sem situação/tipo válidos");
  if (c.tipo === "identificador_no_documento" && D[id].origem.codigo_documento !== id) erro(id + ": identificador no documento difere da chave do diagnóstico");
  if (c.tipo === "variacao_nominal" && !c.observacao) erro(id + ": variação nominal sem justificativa");
  if (fatores.get(id).e.ordem !== D[id].origem.eixo_documento) erro(id + ": diagnóstico de outro eixo do documento");
});
confere(semId === 0, `${Object.keys(D).length} diagnósticos ligados a ids existentes no cadastro`, "diagnósticos com id inexistente");

// 3. Pendentes
const P = T.pendentes_validacao || [];
P.forEach((b, i) => {
  const r = "pendente " + ((b.origem || {}).codigo_documento || i);
  verificaBloco(b, r);
  const c = b.correspondencia || {};
  if (c.situacao !== "pendente de validação" || !c.motivo) erro(r + ": sem situação ou motivo");
  (c.candidatos || []).forEach((x) => { if (!fatores.has(x)) erro(r + ": candidato inexistente " + x); });
  if ("id_fator" in b) erro(r + ": pendente não pode estar ligado a fator");
});
ok.push(`${P.length} diagnósticos pendentes de validação, com motivo registrado e sem ligação a fator`);

// 4. Cobertura do documento
const declarados = (T.eixos_documento || []).reduce((s, e) => s + (e.fatores_no_documento || 0), 0);
confere(codigos.size === declarados, `todos os ${declarados} fatores do documento estão no arquivo (validados ou pendentes), sem repetição`,
  `fatores do documento: ${declarados}; no arquivo: ${codigos.size}`);

// 5. Fatores do cadastro sem diagnóstico (informativo)
const sem = [...fatores.keys()].filter((id) => !D[id]);
avisos.push(`${sem.length} fatores do cadastro sem diagnóstico validado neste território`);

console.log(`TERRITÓRIO ${t.rotulo}: ${Object.keys(D).length} validados, ${P.length} pendentes, ${sem.length} fatores sem diagnóstico`);
console.log("\nVERIFICAÇÕES APROVADAS (" + ok.length + ")"); ok.forEach((m) => console.log("  OK     " + m));
console.log("\nAVISOS (" + avisos.length + ")"); avisos.forEach((m) => console.log("  AVISO  " + m));
console.log("\nERROS (" + erros.length + ")"); erros.forEach((m) => console.log("  ERRO   " + m));
process.exit(erros.length ? 1 : 0);
