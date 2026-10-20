// Validação do cadastro de territórios (territorios/indice.js).
//
// Uso, a partir da pasta do painel:
//   node testes/validar-cadastro-territorios.js
// Termina com código 1 se houver ERRO.
// Com a variável PERMITIR_SIMULADO=1 (usada apenas em testes), territórios
// simulados no cadastro geram aviso em vez de erro.
"use strict";
const fs = require("fs");
const path = require("path");

const raiz = path.resolve(__dirname, "..");
const erros = [], ok = [], avisos = [];
const erro = (m) => erros.push(m);
const permiteSimulado = process.env.PERMITIR_SIMULADO === "1";
const simulado = (m) => (permiteSimulado ? avisos.push(m) : erros.push(m));

const w = {};
new Function("window", fs.readFileSync(path.join(raiz, "territorios/indice.js"), "utf8"))(w);
const I = w.TERRITORIOS_INDICE;
if (!I || !Array.isArray(I.territorios) || !I.territorios.length) {
  console.log("ERRO cadastro de territórios ausente ou vazio");
  process.exit(1);
}
const situacoes = ["diagnostico", "sem-diagnostico", "simulado"];
const ids = new Set();
const rotulos = new Set();
I.territorios.forEach((t) => {
  const r = "território " + (t.id || "(sem id)");
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(t.id || "")) erro(r + ": id fora do formato (minúsculas, números e hífens)");
  if (ids.has(t.id)) erro(r + ": id repetido");
  ids.add(t.id);
  if (!t.rotulo) erro(r + ": sem rótulo");
  if (rotulos.has(t.rotulo)) erro(r + ": rótulo repetido (" + t.rotulo + ")");
  rotulos.add(t.rotulo);
  if (!t.tipo) erro(r + ": sem tipo");
  if (!situacoes.includes(t.situacao)) return erro(r + ": situação inválida (" + t.situacao + ")");
  if (t.situacao === "simulado") simulado(r + ": território simulado no cadastro publicado; dados simulados ficam apenas em testes/dados-simulados");
  if (t.situacao === "sem-diagnostico") {
    if (t.arquivo !== null) erro(r + ": território sem diagnóstico deve ter arquivo null");
    else ok.push(r + ": cadastrado sem diagnóstico");
    return;
  }
  if (t.arquivo !== "territorios/" + t.id + ".js") return erro(r + ": arquivo deve ser territorios/" + t.id + ".js (encontrado " + t.arquivo + ")");
  const arq = path.join(raiz, t.arquivo);
  if (!fs.existsSync(arq)) return erro(r + ": arquivo de dados inexistente (" + t.arquivo + ")");
  // nomes em disco com a mesma caixa (o GitHub Pages distingue maiúsculas)
  if (!fs.readdirSync(path.dirname(arq)).includes(path.basename(arq))) erro(r + ": diferença de maiúsculas/minúsculas no nome do arquivo");
  const wd = {};
  try { new Function("window", fs.readFileSync(arq, "utf8"))(wd); } catch (e) { return erro(r + ": arquivo com erro de sintaxe: " + e.message); }
  const regs = Object.keys(wd.TERRITORIOS || {});
  if (regs.length !== 1 || regs[0] !== t.id) return erro(r + ": o arquivo deve registrar apenas window.TERRITORIOS[\"" + t.id + "\"] (registra: " + regs.join(", ") + ")");
  const T = wd.TERRITORIOS[t.id];
  if ((T.territorio || {}).id !== t.id) erro(r + ": territorio.id do arquivo difere do cadastro");
  if ((T.territorio || {}).rotulo !== t.rotulo) erro(r + ": rótulo do arquivo (" + (T.territorio || {}).rotulo + ") difere do cadastro (" + t.rotulo + ")");
  if (T.situacao && T.situacao.simulado && t.situacao !== "simulado") erro(r + ": arquivo marcado como simulado, mas cadastrado como " + t.situacao);
  if (t.situacao === "simulado" && !(T.situacao && T.situacao.simulado)) erro(r + ": cadastrado como simulado, mas o arquivo não está marcado como simulado");
  ok.push(r + ": arquivo presente, registra o id correto, rótulo coerente, " + Object.keys(T.diagnosticos || {}).length + " diagnósticos");
});
const padrao = I.territorios.find((t) => t.id === I.padrao);
if (!padrao) erro("território padrão (" + I.padrao + ") não está no cadastro");
else if (padrao.situacao !== "diagnostico") erro("território padrão sem diagnóstico");
else ok.push("território padrão: " + padrao.rotulo);

console.log("CADASTRO DE TERRITÓRIOS: " + I.territorios.length + " território(s)");
ok.forEach((m) => console.log("  OK     " + m));
if (avisos.length) { console.log("\nAVISOS (" + avisos.length + ")"); avisos.forEach((m) => console.log("  AVISO  " + m)); }
console.log("\nERROS (" + erros.length + ")");
erros.forEach((m) => console.log("  ERRO   " + m));
process.exit(erros.length ? 1 : 0);
