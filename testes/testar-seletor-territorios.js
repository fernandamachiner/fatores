// Teste do seletor de territórios (Playwright + Chromium).
//
// Cria uma cópia temporária do painel cujo cadastro de territórios contém,
// além de Campo Grande/MS, entradas de teste explicitamente identificadas:
//   simulado-teste         dados simulados (testes/dados-simulados), 12 fatores
//   teste-sem-diagnostico  localidade cadastrada sem diagnóstico (arquivo null)
//   teste-arquivo-ausente  arquivo de dados inexistente
//   teste-id-errado        arquivo que registra outro território
// Nenhum desses dados é publicado: o cadastro real (territorios/indice.js)
// não é alterado.
//
// Verifica, por file:// e por servidor http no subcaminho /fatores/:
//   - seleção de cada território cadastrado e atualização do nome exibido;
//   - diagnósticos exibidos idênticos aos dados do território selecionado;
//   - eixos e fatores idênticos em todos os territórios;
//   - aviso de fator sem diagnóstico e de território sem diagnóstico;
//   - falhas de carregamento sem dados de outra localidade;
//   - volta a Campo Grande/MS; troca rápida de seleção sem mistura;
//   - abertura direta pelo endereço e território inexistente no endereço;
//   - funcionamento em tela de celular.
//
// Uso, a partir da pasta do painel:
//   node testes/testar-seletor-territorios.js
// Variável opcional MUTACAO=corrida|substituicao introduz um defeito de
// propósito no app.js da cópia, para comprovar que o teste o detecta.
"use strict";
const fs = require("fs");
const os = require("os");
const path = require("path");
const http = require("http");
const { chromium } = require("playwright");

const raiz = path.resolve(__dirname, "..");
const base = fs.mkdtempSync(path.join(os.tmpdir(), "painel-seletor-"));
const tmp = path.join(base, "fatores");

function copiar(orig, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const nome of fs.readdirSync(orig)) {
    if (nome === ".git" || nome === "node_modules") continue;
    const o = path.join(orig, nome), d = path.join(dest, nome);
    if (nome === "icons" && path.basename(orig) === "assets") { fs.symlinkSync(o, d); continue; }
    if (fs.statSync(o).isDirectory()) copiar(o, d); else fs.copyFileSync(o, d);
  }
}
copiar(raiz, tmp);

const carregar = (arq) => { const w = {}; new Function("window", fs.readFileSync(arq, "utf8"))(w); return w; };
const M = carregar(path.join(raiz, "metodologia/metodologia.js")).METODOLOGIA;
const cg = carregar(path.join(raiz, "territorios/campo-grande-ms.js")).TERRITORIOS["campo-grande-ms"];
const sim = carregar(path.join(raiz, "testes/dados-simulados/simulado-teste.js")).TERRITORIOS["simulado-teste"];

fs.copyFileSync(path.join(raiz, "testes/dados-simulados/simulado-teste.js"), path.join(tmp, "territorios/simulado-teste.js"));
fs.copyFileSync(path.join(raiz, "territorios/campo-grande-ms.js"), path.join(tmp, "territorios/teste-id-errado.js"));
const indice = carregar(path.join(raiz, "territorios/indice.js")).TERRITORIOS_INDICE;
indice.territorios.push(
  { id: "simulado-teste", rotulo: "Território simulado (teste)", tipo: "teste", uf: "", situacao: "simulado", arquivo: "territorios/simulado-teste.js" },
  { id: "teste-sem-diagnostico", rotulo: "Localidade sem diagnóstico (teste)", tipo: "teste", uf: "", situacao: "sem-diagnostico", arquivo: null },
  { id: "teste-arquivo-ausente", rotulo: "Localidade sem arquivo (teste)", tipo: "teste", uf: "", situacao: "diagnostico", arquivo: "territorios/nao-existe.js" },
  { id: "teste-id-errado", rotulo: "Localidade com arquivo errado (teste)", tipo: "teste", uf: "", situacao: "diagnostico", arquivo: "territorios/teste-id-errado.js" }
);
fs.writeFileSync(path.join(tmp, "territorios/indice.js"), "window.TERRITORIOS_INDICE = " + JSON.stringify(indice, null, 2) + ";\n");

// mutações de controle
const mut = process.env.MUTACAO;
if (mut) {
  const arq = path.join(tmp, "app.js");
  let s = fs.readFileSync(arq, "utf8");
  if (mut === "corrida") s = s.replace("if (token !== carregamentoAtual) return;\n      var t =", "var t =");
  if (mut === "substituicao") s = s.replace('falhaTerritorio("Não foi possível carregar os dados de "', 'return aceitarDados(cadastro.porId[cadastro.padrao], cacheTerritorios[cadastro.padrao]); falhaTerritorio("Não foi possível carregar os dados de "');
  if (s === fs.readFileSync(arq, "utf8")) { console.log("mutação não aplicada"); process.exit(2); }
  fs.writeFileSync(arq, s);
}

// servidor http estático; o painel fica no subcaminho /fatores/
const tipos = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".png": "image/png", ".svg": "image/svg+xml", ".ico": "image/x-icon" };
const servidor = http.createServer((req, res) => {
  const rel = decodeURIComponent(req.url.split("?")[0]);
  if (rel === "/favicon.ico") { res.writeHead(204); res.end(); return; }
  const p = path.join(base, rel.endsWith("/") ? rel + "index.html" : rel);
  fs.readFile(p, (err, buf) => {
    if (err) { res.writeHead(404); res.end(); return; }
    res.writeHead(200, { "Content-Type": tipos[path.extname(p)] || "application/octet-stream" }); res.end(buf);
  });
});

const resultados = [];
const registra = (b, cenario, ok, detalhe) => resultados.push({ b, cenario, ok: !!ok, detalhe: String(detalhe || "") });
const trecho = (t, id) => t.diagnosticos[id].texto.slice(0, 70);

async function esperaEstado(page) {
  await page.waitForFunction(() => {
    const e = document.body.getAttribute("data-territorio-estado");
    return e && e !== "carregando";
  }, null, { timeout: 20000 });
}
async function selecionar(page, id) {
  await page.selectOption("#seletor-territorio", id);
  await esperaEstado(page);
}
async function popup(page, eixo, fid) {
  await page.locator(".eixo-botao").nth(eixo - 1).click();
  await page.locator(`.fator-botao[data-fator-id="${fid}"]`).click();
  await page.waitForSelector("#overlay-popup:not([hidden])");
  const r = await page.evaluate(() => ({
    territorio: document.getElementById("popup-territorio").textContent,
    texto: [...document.querySelectorAll("#popup-texto > p")].map((p) => p.textContent).join("\n\n"),
    aviso: (document.querySelector("#popup-texto .popup-aviso") || {}).className || "",
    avisoTexto: (document.querySelector("#popup-texto .popup-aviso") || {}).textContent || "",
    corpo: document.body.textContent,
    icones: document.querySelector(".popup-icones-trio").offsetParent !== null,
    relacionados: [...document.querySelectorAll("#popup-relacionados .popup-chip")].map((b) => b.getAttribute("data-fator-id")),
  }));
  await page.keyboard.press("Escape");
  return r;
}
async function estado(page) {
  return page.evaluate(() => ({
    id: document.body.getAttribute("data-territorio"),
    estado: document.body.getAttribute("data-territorio-estado"),
    status: document.getElementById("territorio-status").textContent,
    seletor: document.getElementById("seletor-territorio").value,
    opcoes: [...document.querySelectorAll("#seletor-territorio option")].map((o) => o.textContent),
    url: location.href,
  }));
}
// estrutura metodológica exibida: eixos, cabeçalhos e cards de todos os fatores
async function estrutura(page) {
  const out = [];
  const n = await page.locator(".eixo-botao").count();
  for (let i = 0; i < n; i++) {
    await page.locator(".eixo-botao").nth(i).click();
    out.push(await page.evaluate(() => ({
      titulo: document.querySelector("#eixo-cabecalho h2").textContent,
      foco: document.querySelector("#eixo-cabecalho p").textContent,
      fatores: [...document.querySelectorAll(".fator-botao")].map((c) => [c.getAttribute("data-fator-id"), c.querySelector(".fator-nome").textContent, c.querySelector(".fator-ods-selo").textContent, c.querySelector("img").getAttribute("src")].join("|")),
    })));
  }
  await page.click("#btn-voltar");
  return JSON.stringify(out);
}
const estruturaEsperada = JSON.stringify(M.eixos.map((e) => ({ titulo: e.titulo, n: e.fatores.length, ids: e.fatores.map((f) => f.id) })));
const confereEstrutura = (s) => JSON.stringify(JSON.parse(s).map((e) => ({ titulo: e.titulo, n: e.fatores.length, ids: e.fatores.map((x) => x.split("|")[0]) }))) === estruturaEsperada;

async function cenarios(browser, b) {
  const nova = async (q, viewport) => {
    const page = await browser.newPage({ viewport: viewport || { width: 1280, height: 900 } });
    const erros = [];
    page.on("pageerror", (e) => erros.push(String(e)));
    await page.goto(b + (q || ""));
    await esperaEstado(page);
    return { page, erros };
  };

  // 1. inicial: Campo Grande/MS, cadastro no seletor
  let { page, erros } = await nova();
  let st = await estado(page);
  registra(b, "seletor lista os territórios do cadastro com os nomes registrados",
    JSON.stringify(st.opcoes) === JSON.stringify(["Campo Grande/MS", "Território simulado (teste) (dados simulados)", "Localidade sem diagnóstico (teste) (sem diagnóstico)", "Localidade sem arquivo (teste)", "Localidade com arquivo errado (teste)"]),
    st.opcoes.join(" ; "));
  const estCG = await estrutura(page);
  registra(b, "estrutura metodológica completa (6 eixos, 150 fatores)", confereEstrutura(estCG), "");
  let p = await popup(page, 2, "E2-F07");
  registra(b, "Campo Grande/MS inicial: nome e diagnóstico", st.seletor === "campo-grande-ms" && /Território: Campo Grande\/MS/.test(st.status) && p.texto === cg.diagnosticos["E2-F07"].texto && /Campo Grande\/MS$/.test(p.territorio), st.status);

  // 2. território simulado
  await selecionar(page, "simulado-teste");
  st = await estado(page);
  const estSim = await estrutura(page);
  const p1 = await popup(page, 1, "E1-F01");
  const p2 = await popup(page, 2, "E2-F07");
  registra(b, "simulado: nome atualizado e identificado como simulado", st.id === "simulado-teste" && /Território: Território simulado \(teste\)/.test(st.status) && /dados simulados, não é diagnóstico real/.test(st.status), st.status);
  registra(b, "simulado: diagnóstico do território selecionado", p1.texto === sim.diagnosticos["E1-F01"].texto && /dados simulados/.test(p1.territorio) && JSON.stringify(p1.relacionados) === JSON.stringify(sim.diagnosticos["E1-F01"].fatores_relacionados), p1.territorio);
  registra(b, "simulado: fator sem diagnóstico avisa e não usa Campo Grande", /aviso-ausente/.test(p2.aviso) && !p2.corpo.includes(trecho(cg, "E2-F07")), p2.avisoTexto);
  registra(b, "simulado: eixos e fatores idênticos aos de Campo Grande", estSim === estCG, "");
  registra(b, "simulado: endereço atualizado", b.startsWith("file") || /\?territorio=simulado-teste$/.test(st.url), st.url);

  // 3. território sem diagnóstico
  await selecionar(page, "teste-sem-diagnostico");
  st = await estado(page);
  const estSem = await estrutura(page);
  p = await popup(page, 1, "E1-F01");
  registra(b, "sem diagnóstico: informa a ausência em todos os fatores", st.estado === "sem-dados" && /sem diagnóstico cadastrado/.test(st.status) && /aviso-sem-dados/.test(p.aviso) && /ainda não possui diagnóstico situacional/.test(p.avisoTexto) && !p.corpo.includes(trecho(sim, "E1-F01")) && !p.corpo.includes(trecho(cg, "E1-F01")) && p.icones, st.status + " / " + p.avisoTexto);
  registra(b, "sem diagnóstico: eixos e fatores preservados", estSem === estCG, "");

  // 4. arquivo ausente e 5. arquivo de outro território
  for (const [id, re] of [["teste-arquivo-ausente", /Não foi possível carregar os dados de Localidade sem arquivo/], ["teste-id-errado", /não contém os diagnósticos deste território/]]) {
    await selecionar(page, id);
    st = await estado(page);
    p = await popup(page, 2, "E2-F07");
    registra(b, "falha de carregamento (" + id + ") sem dados de outra localidade", st.estado === "erro" && re.test(st.status) && /aviso-erro/.test(p.aviso) && !p.corpo.includes(trecho(cg, "E2-F07")) && st.seletor === id, st.status);
  }

  // 6. volta a Campo Grande/MS
  await selecionar(page, "campo-grande-ms");
  st = await estado(page);
  p = await popup(page, 1, "E1-F01");
  registra(b, "volta a Campo Grande/MS", st.estado === "pronto" && /Território: Campo Grande\/MS/.test(st.status) && p.texto === cg.diagnosticos["E1-F01"].texto && !p.corpo.includes(trecho(sim, "E1-F01")), st.status);
  registra(b, "sem erros de script na sequência de trocas", !erros.length, erros.join(" | "));
  await page.close();

  // 7. troca rápida: simulado (não carregado) e logo Campo Grande/MS
  ({ page, erros } = await nova());
  await page.evaluate(() => {
    const s = document.getElementById("seletor-territorio");
    s.value = "simulado-teste"; s.dispatchEvent(new Event("change"));
    s.value = "campo-grande-ms"; s.dispatchEvent(new Event("change"));
  });
  await page.waitForTimeout(1500); // o arquivo simulado termina de carregar depois da troca
  st = await estado(page);
  p = await popup(page, 1, "E1-F01");
  registra(b, "troca rápida de seleção sem mistura de dados", st.id === "campo-grande-ms" && st.estado === "pronto" && p.texto === cg.diagnosticos["E1-F01"].texto && !p.corpo.includes(trecho(sim, "E1-F01")), st.status + " / " + p.territorio);
  await page.close();

  // 8. abertura direta pelo endereço
  ({ page, erros } = await nova("?territorio=simulado-teste"));
  st = await estado(page);
  p = await popup(page, 1, "E1-F02");
  registra(b, "abertura pelo endereço seleciona o território", st.seletor === "simulado-teste" && p.texto === sim.diagnosticos["E1-F02"].texto, st.status);
  await page.close();

  // 9. território inexistente no endereço, depois seleção válida
  ({ page, erros } = await nova("?territorio=nao-cadastrado"));
  st = await estado(page);
  const okErro = st.estado === "erro" && /não está cadastrado/.test(st.status) && st.seletor === "" && st.opcoes[0] === "Selecione um território";
  await selecionar(page, "campo-grande-ms");
  const st2 = await estado(page);
  registra(b, "território inexistente no endereço, seguido de seleção válida", okErro && st2.estado === "pronto" && st2.opcoes[0] === "Campo Grande/MS", st.status + " -> " + st2.status);
  await page.close();

  // 10. celular
  ({ page, erros } = await nova("", { width: 390, height: 844 }));
  await selecionar(page, "simulado-teste");
  const cel = await page.evaluate(() => {
    const r = document.getElementById("seletor-territorio").getBoundingClientRect();
    return { esq: r.left, dir: r.right, larg: window.innerWidth, pagina: document.documentElement.scrollWidth };
  });
  p = await popup(page, 1, "E1-F01");
  registra(b, "celular (390 px): seletor visível, sem rolagem horizontal, troca funciona", cel.esq >= 0 && cel.dir <= cel.larg && cel.pagina <= cel.larg && p.texto === sim.diagnosticos["E1-F01"].texto, JSON.stringify(cel));
  await page.close();
}

(async () => {
  await new Promise((r) => servidor.listen(0, "127.0.0.1", r));
  const porta = servidor.address().port;
  const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
  await cenarios(browser, "file://" + path.join(tmp, "index.html"));
  await cenarios(browser, `http://127.0.0.1:${porta}/fatores/`);
  await browser.close();
  servidor.close();
  fs.rmSync(base, { recursive: true, force: true });
  let falhas = 0;
  for (const r of resultados) {
    if (!r.ok) falhas++;
    console.log(`${r.ok ? "OK   " : "FALHA"} [${r.b.startsWith("file") ? "file://" : "http"}] ${r.cenario}${r.detalhe ? ": " + r.detalhe.replace(/\s+/g, " ").slice(0, 140) : ""}`);
  }
  console.log(`\n${resultados.length - falhas} de ${resultados.length} verificações aprovadas${mut ? " (mutação: " + mut + ")" : ""}`);
  process.exit(falhas ? 1 : 0);
})();
