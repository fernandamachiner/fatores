// Teste dos cenários de falha e de ausência de dados territoriais
// (Playwright + Chromium).
//
// Cria uma cópia temporária do painel com territórios fictícios de teste e
// verifica que:
//   1. território não cadastrado: o painel informa o erro e não exibe
//      diagnóstico de nenhum outro território;
//   2. arquivo de dados ausente: o painel informa a falha de carregamento;
//   3. arquivo que registra outro território: o painel recusa os dados;
//   4. território com diagnóstico parcial: fator sem diagnóstico mostra
//      aviso de ausência, sem usar o texto de outro fator nem de outro
//      território; versão de matriz divergente gera alerta;
//   5. território padrão: fatores relacionados abrem no popup, o botão de
//      retorno volta ao fator anterior e o popup fecha com Esc.
// Os cenários rodam por file:// e por servidor http.
//
// Uso, a partir da pasta do painel:
//   node testes/testar-falhas-territorio.js
"use strict";
const fs = require("fs");
const os = require("os");
const path = require("path");
const http = require("http");
const { chromium } = require("playwright");

const raiz = path.resolve(__dirname, "..");
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "painel-falhas-"));

// cópia do painel (os ícones entram por link simbólico)
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

// territórios fictícios de teste
const carregar = (arq) => { const w = {}; new Function("window", fs.readFileSync(arq, "utf8"))(w); return w; };
const cg = carregar(path.join(raiz, "territorios/campo-grande-ms.js")).TERRITORIOS["campo-grande-ms"];
const parcial = JSON.parse(JSON.stringify(cg));
parcial.territorio = { id: "teste-parcial", nome: "Território de teste", uf: "", tipo: "teste", rotulo: "Território de teste" };
parcial.situacao = { status: "teste", territorio_de_exemplo: false, aviso: "Território fictício usado apenas em teste." };
parcial.metodologia.versao = "0.9";
parcial.diagnosticos = {};
["E1-F01", "E1-F02", "E1-F03"].forEach((id) => {
  parcial.diagnosticos[id] = { texto: "Texto fictício de teste do fator " + id + ".", fontes_citadas: [], referencias_normativas: [], periodos_citados: [], fatores_relacionados: ["E1-F04"], origem: {}, correspondencia: {} };
});
fs.writeFileSync(path.join(tmp, "territorios/teste-parcial.js"),
  "window.TERRITORIOS = window.TERRITORIOS || {};\nwindow.TERRITORIOS[\"teste-parcial\"] = " + JSON.stringify(parcial) + ";\n");
// arquivo que registra outro território (o de Campo Grande) sob outro nome no índice
fs.copyFileSync(path.join(raiz, "territorios/campo-grande-ms.js"), path.join(tmp, "territorios/teste-id-errado.js"));
const indice = carregar(path.join(raiz, "territorios/indice.js")).TERRITORIOS_INDICE;
indice.territorios.push(
  { id: "teste-parcial", rotulo: "Território de teste", arquivo: "territorios/teste-parcial.js" },
  { id: "teste-id-errado", rotulo: "Território com arquivo errado", arquivo: "territorios/teste-id-errado.js" },
  { id: "teste-arquivo-ausente", rotulo: "Território sem arquivo", arquivo: "territorios/nao-existe.js" }
);
fs.writeFileSync(path.join(tmp, "territorios/indice.js"), "window.TERRITORIOS_INDICE = " + JSON.stringify(indice, null, 2) + ";\n");

// servidor http estático simples
const tipos = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".png": "image/png", ".svg": "image/svg+xml" };
const servidor = http.createServer((req, res) => {
  const p = path.join(tmp, decodeURIComponent(req.url.split("?")[0]).replace(/^\/$/, "/index.html"));
  fs.readFile(p, (err, buf) => {
    if (err) { res.writeHead(404); res.end(); return; }
    res.writeHead(200, { "Content-Type": tipos[path.extname(p)] || "application/octet-stream" }); res.end(buf);
  });
});

const resultados = [];
const registra = (base, cenario, ok, detalhe) => resultados.push({ base, cenario, ok, detalhe });
const trechoCG = (id) => cg.diagnosticos[id].texto.slice(0, 60);

async function abrirFator(page, eixo, fid) {
  await page.locator(".eixo-botao").nth(eixo - 1).click();
  await page.locator(`.fator-botao[data-fator-id="${fid}"]`).click();
  await page.waitForSelector("#overlay-popup:not([hidden])");
}
const conteudoPopup = (page) => page.evaluate(() => ({
  territorio: document.getElementById("popup-territorio").textContent,
  texto: document.getElementById("popup-texto").textContent,
  aviso: (document.querySelector("#popup-texto .popup-aviso") || {}).className || "",
  corpo: document.body.textContent,
  icones: document.querySelector(".popup-icones-trio").offsetParent !== null,
  ods: document.getElementById("popup-ods").offsetParent !== null,
}));

async function cenarios(browser, base) {
  const nova = async (q) => {
    const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
    const erros = [];
    page.on("pageerror", (e) => erros.push(String(e)));
    await page.goto(base + q);
    await page.waitForSelector(".territorio-pronto, .territorio-erro", { timeout: 20000 });
    return { page, erros };
  };

  // 1. território não cadastrado
  let { page, erros } = await nova("?territorio=inexistente");
  let st = await page.textContent("#territorio-status");
  await abrirFator(page, 1, "E1-F01");
  let c = await conteudoPopup(page);
  registra(base, "território não cadastrado (popup mantém ícones e ODS)", /não está cadastrado/.test(st) && /aviso-erro/.test(c.aviso) && !c.corpo.includes(trechoCG("E1-F01")) && !(await page.evaluate(() => window.TERRITORIOS)) && c.icones && c.ods && !erros.length,
    st.trim());
  await page.close();

  // 2. arquivo de dados ausente
  ({ page, erros } = await nova("?territorio=teste-arquivo-ausente"));
  st = await page.textContent("#territorio-status");
  await abrirFator(page, 2, "E2-F07");
  c = await conteudoPopup(page);
  registra(base, "arquivo de dados ausente", /Não foi possível carregar/.test(st) && /aviso-erro/.test(c.aviso) && !c.corpo.includes(trechoCG("E2-F07")), st.trim());
  await page.close();

  // 3. arquivo que registra outro território
  ({ page, erros } = await nova("?territorio=teste-id-errado"));
  st = await page.textContent("#territorio-status");
  await abrirFator(page, 2, "E2-F07");
  c = await conteudoPopup(page);
  registra(base, "arquivo com dados de outro território", /não contém os diagnósticos deste território/.test(st) && /aviso-erro/.test(c.aviso) && !c.corpo.includes(trechoCG("E2-F07")), st.trim());
  await page.close();

  // 4. diagnóstico parcial e versão divergente
  ({ page, erros } = await nova("?territorio=teste-parcial"));
  st = await page.textContent("#territorio-status");
  const alerta = await page.locator(".territorio-alerta").count();
  await abrirFator(page, 1, "E1-F01");
  c = await conteudoPopup(page);
  const comTexto = c.texto === "Texto fictício de teste do fator E1-F01." && c.territorio.includes("Território de teste") && !c.icones && !c.ods;
  // abre o fator relacionado E1-F04, que não tem diagnóstico neste território
  await page.locator('.popup-chip[data-fator-id="E1-F04"]').click();
  const c4 = await conteudoPopup(page);
  const ausente = /aviso-ausente/.test(c4.aviso) && /Não há diagnóstico situacional cadastrado para este fator em Território de teste/.test(c4.texto) && !c4.corpo.includes(trechoCG("E1-F04"));
  registra(base, "fator com diagnóstico em território parcial", comTexto, c.texto);
  registra(base, "fator sem diagnóstico (sem texto substituto)", ausente, c4.texto);
  registra(base, "alerta de versão de matriz divergente", alerta === 1, st.trim());
  await page.close();

  // 5. território padrão: relacionados, retorno e fechamento
  ({ page, erros } = await nova(""));
  st = await page.textContent("#territorio-status");
  await abrirFator(page, 2, "E2-F07");
  const primeiro = await page.locator(".popup-chip").first().getAttribute("data-fator-id");
  await page.locator(".popup-chip").first().click();
  const titulo2 = await page.textContent("#popup-titulo");
  const voltarTxt = await page.textContent("#popup-voltar");
  await page.click("#popup-voltar");
  const titulo3 = await page.textContent("#popup-titulo");
  const voltarOculto = await page.locator("#popup-voltar").isHidden();
  await page.keyboard.press("Escape");
  const fechado = await page.locator("#overlay-popup[hidden]").count();
  registra(base, "território padrão carregado", /Campo Grande\/MS/.test(st), st.trim());
  registra(base, "navegação por fator relacionado e retorno", primeiro && titulo2 !== "Dengue" && /Voltar a Dengue/.test(voltarTxt) && titulo3 === "Dengue" && voltarOculto && fechado === 1 && !erros.length,
    `${primeiro} -> ${titulo2} -> ${titulo3}`);
  await page.close();
}

(async () => {
  await new Promise((r) => servidor.listen(0, "127.0.0.1", r));
  const porta = servidor.address().port;
  const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
  await cenarios(browser, "file://" + path.join(tmp, "index.html"));
  await cenarios(browser, `http://127.0.0.1:${porta}/index.html`);
  await browser.close();
  servidor.close();
  fs.rmSync(tmp, { recursive: true, force: true });
  let falhas = 0;
  for (const r of resultados) {
    if (!r.ok) falhas++;
    console.log(`${r.ok ? "OK   " : "FALHA"} [${r.base.startsWith("file") ? "file://" : "http"}] ${r.cenario}: ${r.detalhe.replace(/\s+/g, " ").slice(0, 150)}`);
  }
  console.log(`\n${resultados.length - falhas} de ${resultados.length} verificações aprovadas`);
  process.exit(falhas ? 1 : 0);
})();
