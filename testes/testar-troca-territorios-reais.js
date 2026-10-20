// Troca entre territórios reais cadastrados (Campo Grande/MS e Distrito Federal),
// em tela de computador e de celular, conferindo os textos de cada um.
// Uso, a partir da pasta do painel: node testes/testar-troca-territorios-reais.js <pasta para captura>
const { chromium } = require("playwright");
const fs = require("fs");
const carrega = (a) => { const w = {}; new Function("window", fs.readFileSync(a, "utf8"))(w); return w.TERRITORIOS; };
const cg = carrega("territorios/campo-grande-ms.js")["campo-grande-ms"], df = carrega("territorios/distrito-federal.js")["distrito-federal"];
(async () => {
  const b = await chromium.launch(); const r = [];
  for (const vp of [{ width: 1280, height: 900 }, { width: 390, height: 844 }]) {
    const p = await b.newPage({ viewport: vp }); const erros = []; p.on("pageerror", (e) => erros.push(String(e)));
    await p.goto("file://" + process.cwd() + "/index.html");
    const pronto = () => p.waitForFunction(() => document.body.getAttribute("data-territorio-estado") === "pronto");
    await pronto();
    const abre = async (fid) => { await p.locator(".eixo-botao").nth(Number(fid[1]) - 1).click(); await p.locator(`.fator-botao[data-fator-id="${fid}"]`).click(); await p.waitForSelector("#overlay-popup:not([hidden])"); const t = [...await p.locator("#popup-texto > p").allTextContents()].join("\n\n"); const terr = await p.textContent("#popup-territorio"); await p.keyboard.press("Escape"); return { t, terr }; };
    let x = await abre("E2-F07"); r.push(["CG inicial", x.t === cg.diagnosticos["E2-F07"].texto && /Campo Grande\/MS/.test(x.terr)]);
    await p.selectOption("#seletor-territorio", "distrito-federal"); await pronto();
    x = await abre("E2-F07"); r.push(["DF após troca", x.t === df.diagnosticos["E2-F07"].texto && /Distrito Federal/.test(x.terr) && !x.t.includes("Campo Grande")]);
    if (vp.width === 1280 && process.argv[2]) { await p.locator(".eixo-botao").nth(1).click(); await p.locator('.fator-botao[data-fator-id="E2-F07"]').click(); await p.waitForTimeout(300); await p.screenshot({ path: process.argv[2] + "/df-popup.png" }); await p.keyboard.press("Escape"); }
    await p.selectOption("#seletor-territorio", "campo-grande-ms"); await pronto();
    x = await abre("E5-F24"); r.push(["volta a CG", x.t === cg.diagnosticos["E5-F24"].texto]);
    const larg = await p.evaluate(() => document.documentElement.scrollWidth);
    r.push(["sem erros e sem rolagem horizontal (" + vp.width + "px)", !erros.length && larg <= vp.width]);
    await p.close();
  }
  await b.close(); r.forEach(([n, ok]) => console.log((ok ? "OK    " : "FALHA ") + n)); process.exit(r.every((x) => x[1]) ? 0 : 1);
})();
