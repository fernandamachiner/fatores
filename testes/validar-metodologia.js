// Validação do cadastro metodológico central (metodologia/metodologia.js).
//
// Uso, a partir da pasta do painel:
//   node testes/validar-metodologia.js
//   node testes/validar-metodologia.js --original caminho/do/data.js
//
// Com --original, compara campo a campo com o data.js anterior à separação.
// Termina com código 1 se houver ERRO. AVISOS não interrompem.
"use strict";
const fs = require("fs");
const path = require("path");

const raiz = path.resolve(__dirname, "..");
const args = process.argv.slice(2);
const iOrig = args.indexOf("--original");
const caminhoOriginal = iOrig >= 0 ? args[iOrig + 1] : null;

const erros = [];
const avisos = [];
const ok = [];
const erro = (m) => erros.push(m);
const aviso = (m) => avisos.push(m);
const confere = (cond, msgOk, msgErro) => (cond ? ok.push(msgOk) : erro(msgErro));

function carregar(arquivo, nomeGlobal) {
  const window = {};
  new Function("window", fs.readFileSync(arquivo, "utf8") + ";return window;")(window);
  return window[nomeGlobal];
}

const M = carregar(path.join(raiz, "metodologia/metodologia.js"), "METODOLOGIA");
confere(M && Array.isArray(M.eixos), "window.METODOLOGIA carregado", "window.METODOLOGIA ausente ou sem eixos");
const eixos = M.eixos;
const todos = [];
eixos.forEach((e) => e.fatores.forEach((f) => todos.push({ e, f })));

// 1. Eixos
confere(eixos.length === 6, "6 eixos cadastrados", "esperados 6 eixos, encontrados " + eixos.length);
const ordens = eixos.map((e) => e.ordem).join(",");
confere(ordens === "1,2,3,4,5,6", "ordem dos eixos 1 a 6", "ordem dos eixos inesperada: " + ordens);
eixos.forEach((e) => {
  if (e.id !== "E" + e.ordem) erro(`eixo ${e.ordem}: id ${e.id} não segue o formato E<ordem>`);
  ["titulo", "foco", "cor"].forEach((c) => { if (!e[c]) erro(`eixo ${e.id}: campo ${c} vazio`); });
  if (!/^#[0-9A-Fa-f]{6}$/.test(e.cor)) erro(`eixo ${e.id}: cor inválida ${e.cor}`);
});

// 2. Identificadores dos fatores
const camposFator = ["id", "ordem", "fator", "icone", "ods", "nome_ods", "definicao"];
const vistosId = new Map();
todos.forEach(({ e, f }, k) => {
  if (!f.id) return erro(`fator sem id: ${f.fator}`);
  if (vistosId.has(f.id)) erro(`id repetido ${f.id}: ${vistosId.get(f.id)} / ${f.fator}`);
  vistosId.set(f.id, f.fator);
  if (!new RegExp("^" + e.id + "-F\\d{2,}$").test(f.id)) erro(`id ${f.id} não pertence ao eixo ${e.id} ou fora do formato`);
  Object.keys(f).forEach((c) => { if (!camposFator.includes(c)) erro(`fator ${f.id}: campo não metodológico "${c}"`); });
  camposFator.forEach((c) => { if (f[c] === undefined || f[c] === "") erro(`fator ${f.id}: campo ${c} vazio`); });
  if (!/^\d{2}\.\d{2}$/.test(f.icone)) erro(`fator ${f.id}: código de ícone fora do padrão NN.NN (${f.icone})`);
});
confere(vistosId.size === todos.length, `${todos.length} fatores com id único`, "há ids repetidos ou ausentes");
eixos.forEach((e) => {
  const seq = e.fatores.map((f) => f.ordem).join(",");
  const esperado = e.fatores.map((_, i) => i + 1).join(",");
  if (seq !== esperado) erro(`eixo ${e.id}: campo ordem dos fatores fora de sequência`);
});

// 3. Nomes
const nomes = new Map();
todos.forEach(({ f }) => {
  const k = f.fator.trim().toLowerCase();
  if (nomes.has(k)) erro(`nome de fator repetido: ${f.fator} (${nomes.get(k)} e ${f.id})`);
  nomes.set(k, f.id);
});
confere(nomes.size === todos.length, "nomes de fatores sem repetição", "nomes de fatores repetidos");

// 4. Ícones
const pastaIcones = path.join(raiz, "assets/icons");
const arquivosIcones = new Set(fs.readdirSync(pastaIcones));
let faltando = 0;
todos.forEach(({ f }) => ["", "_verde", "_amarelo", "_vermelho"].forEach((s) => {
  if (!arquivosIcones.has(f.icone + s + ".png")) { faltando++; erro(`ícone ausente: ${f.icone}${s}.png (${f.id})`); }
}));
confere(faltando === 0, "todas as 4 variantes de ícone presentes para cada fator", "ícones ausentes");
const usoIcone = new Map();
todos.forEach(({ f }) => usoIcone.set(f.icone, (usoIcone.get(f.icone) || []).concat(f.id)));
usoIcone.forEach((ids, cod) => { if (ids.length > 1) aviso(`código de ícone ${cod} compartilhado por ${ids.join(", ")}`); });

// 5. Coerência ODS
const rotuloOds = new Map();
todos.forEach(({ f }) => {
  if (!f.nome_ods.startsWith("ODS " + String(f.ods).padStart(2, "0"))) erro(`fator ${f.id}: nome_ods não corresponde ao número ${f.ods}`);
  if (rotuloOds.has(f.ods) && rotuloOds.get(f.ods) !== f.nome_ods) erro(`ODS ${f.ods} com rótulos diferentes: ${rotuloOds.get(f.ods)} / ${f.nome_ods}`);
  rotuloOds.set(f.ods, f.nome_ods);
});
ok.push("rótulos ODS coerentes com o número do ODS");

// 6. Coerência com a roda SVG do index.html
const html = fs.readFileSync(path.join(raiz, "index.html"), "utf8");
eixos.forEach((e) => {
  const grad = new RegExp(`id="grad-eixo-${e.ordem}"[^>]*>\\s*<stop[^>]*/>\\s*<stop offset="100%" stop-color="([^"]+)"`).exec(html);
  if (!grad) erro(`SVG: gradiente grad-eixo-${e.ordem} não encontrado`);
  else if (grad[1].toLowerCase() !== e.cor.toLowerCase()) erro(`SVG: cor do eixo ${e.id} difere (${grad[1]} no SVG, ${e.cor} no cadastro)`);
  const grupo = new RegExp(`<g class="eixo-grafico" data-eixo="${e.ordem}">([\\s\\S]*?)(?=<g class="eixo-grafico"|</svg>)`).exec(html);
  if (!grupo) return erro(`SVG: grupo do eixo ${e.ordem} não encontrado`);
  const textos = [...grupo[1].matchAll(/<text[^>]*>([^<]*)<\/text>/g)].map((m) => m[1]);
  if (textos[0] !== "EIXO " + e.ordem) erro(`SVG: rótulo do eixo ${e.ordem} difere (${textos[0]})`);
  const tituloSvg = textos.slice(1).join(" ");
  if (tituloSvg !== e.titulo) erro(`SVG: título do eixo ${e.id} difere ("${tituloSvg}" no SVG, "${e.titulo}" no cadastro)`);
});
ok.push("cores e títulos dos eixos conferidos contra a roda SVG");

// 7. Script carregado pelo index.html
confere(/<script src="metodologia\/metodologia\.js"><\/script>\s*<script src="app\.js"><\/script>/.test(html),
  "index.html carrega metodologia.js antes de app.js", "index.html não carrega metodologia.js antes de app.js");

// 8. Comparação com o data.js original
if (caminhoOriginal) {
  const original = new Function(fs.readFileSync(caminhoOriginal, "utf8") + ";return EIXOS_DATA;")();
  let campos = 0, divergencias = 0;
  const cmp = (a, b, onde) => { campos++; if (a !== b) { divergencias++; erro(`divergência em ${onde}: "${b}" (original) / "${a}" (cadastro)`); } };
  if (original.length !== eixos.length) erro("número de eixos difere do original");
  original.forEach((eo, i) => {
    const e = eixos[i];
    cmp(e.id_original, eo.id, `eixo ${i + 1}.id`);
    ["titulo", "foco", "cor", "ordem"].forEach((c) => cmp(e[c], eo[c], `eixo ${i + 1}.${c}`));
    if (eo.fatores.length !== e.fatores.length) erro(`eixo ${e.id}: ${e.fatores.length} fatores no cadastro, ${eo.fatores.length} no original`);
    eo.fatores.forEach((fo, j) => {
      const f = e.fatores[j];
      if (!f) return erro(`fator ausente: ${fo.fator}`);
      ["fator", "icone", "ods", "nome_ods", "definicao"].forEach((c) => cmp(f[c], fo[c], `${f.id}.${c}`));
      Object.keys(fo).forEach((c) => { if (!(c in f)) erro(`${f.id}: campo original "${c}" perdido`); });
    });
  });
  confere(divergencias === 0, `comparação com o original: ${campos} campos idênticos, mesma ordem`, `comparação com o original: ${divergencias} divergências`);
}

// Resumo
console.log("CADASTRO: " + eixos.length + " eixos, " + todos.length + " fatores");
eixos.forEach((e) => console.log(`  ${e.id}  ${String(e.fatores.length).padStart(2)} fatores  ${e.titulo}`));
console.log("\nVERIFICAÇÕES APROVADAS (" + ok.length + ")");
ok.forEach((m) => console.log("  OK     " + m));
console.log("\nAVISOS (" + avisos.length + ")");
avisos.forEach((m) => console.log("  AVISO  " + m));
console.log("\nERROS (" + erros.length + ")");
erros.forEach((m) => console.log("  ERRO   " + m));
process.exit(erros.length ? 1 : 0);
