// Auditoria funcional e técnica da interface (Etapa 6), com Playwright + Chromium.
//
// Complementa testar-navegacao.js, testar-seletor-territorios.js e
// testar-falhas-territorio.js com verificações que eles não cobrem:
//   D2  referências a arquivos (HTML, CSS, cadastro, ícones), com grafia exata
//   D4  compatibilidade com o GitHub Pages (nomes, tamanhos, .nojekyll)
//   D5  recursos gráficos: os 592 ícones decodificam no navegador; imagens e
//       fundos carregam; textos alternativos e nomes acessíveis
//   C9  tamanhos de tela (320 a 1920 px): rolagem horizontal, popup dentro da
//       tela, botão de fechar visível, texto mais longo legível até o fim
//   C5  navegação por teclado: abrir eixo, abrir fator, fechar e retorno do foco
//   D1/D3 erros de JavaScript e respostas com erro em toda a execução
//   axe-core (opcional): regras automáticas de acessibilidade (WCAG 2 A/AA)
//
// O painel é servido por http no subcaminho /fatores/, como no GitHub Pages.
// Uso, a partir da pasta do painel:
//   node testes/auditoria-interface.js [saida.json] [pasta-de-capturas]
// Variável opcional AXE_PATH: caminho de axe.min.js (pacote axe-core).
"use strict";
const fs = require("fs");
const path = require("path");
const http = require("http");
const { chromium } = require("playwright");

const raiz = path.resolve(__dirname, "..");
const saida = process.argv[2] || path.join(raiz, "relatorios/etapa6-auditoria-interface.json");
const pastaCapturas = process.argv[3] || null;
if (pastaCapturas) fs.mkdirSync(pastaCapturas, { recursive: true });

const achados = [];
const achado = (bloco, item, situacao, descricao, evidencia) => achados.push({ bloco, item, situacao, descricao, evidencia: evidencia || null });
const carregar = (arq) => { const w = {}; new Function("window", fs.readFileSync(path.join(raiz, arq), "utf8"))(w); return w; };
const M = carregar("metodologia/metodologia.js").METODOLOGIA;
const IND = carregar("territorios/indice.js").TERRITORIOS_INDICE;

// ---------- D2. referências estáticas a arquivos ----------
function existeExato(rel) {
  const partes = rel.split("/");
  let dir = raiz;
  for (const p of partes) {
    if (!fs.existsSync(dir) || !fs.readdirSync(dir).includes(p)) return false;
    dir = path.join(dir, p);
  }
  return true;
}
const html = fs.readFileSync(path.join(raiz, "index.html"), "utf8");
const css = fs.readFileSync(path.join(raiz, "style.css"), "utf8");
const refs = new Set();
for (const m of html.matchAll(/\b(?:src|href)="([^"#][^"]*)"/g)) if (!/^(https?:|data:|mailto:)/.test(m[1])) refs.add(m[1]);
for (const m of css.matchAll(/url\(\s*["']?([^"')#]+)["']?\s*\)/g)) if (!/^(https?:|data:)/.test(m[1])) refs.add(m[1]);
IND.territorios.forEach((t) => { if (t.arquivo) refs.add(t.arquivo); });
const icones = [];
M.eixos.forEach((e) => e.fatores.forEach((f) => ["", "_verde", "_amarelo", "_vermelho"].forEach((s) => icones.push("assets/icons/" + f.icone + s + ".png"))));
const iconesUnicos = [...new Set(icones)];
const faltando = [...refs, ...iconesUnicos].filter((r) => !existeExato(r));
const externos = [...html.matchAll(/\b(?:src|href)="(https?:[^"]+)"/g)].map((m) => m[1]);
achado("D", "D2 referências a arquivos inexistentes (análise estática)", faltando.length ? "reprovado" : "aprovado",
  faltando.length ? "arquivos referenciados e ausentes: " + faltando.join(", ")
    : `${refs.size} referências do index.html, do style.css e do cadastro de territórios e ${iconesUnicos.length} arquivos de ícone (148 códigos × 4 variantes) existem com a grafia exata; ${externos.length} referências externas`,
  { referencias: [...refs], icones: iconesUnicos.length, externos });

// arquivos sem uso em assets/ (informativo)
const usados = new Set([...refs, ...iconesUnicos]);
const semUso = [];
(function varrer(d) {
  for (const n of fs.readdirSync(path.join(raiz, d))) {
    const r = d + "/" + n;
    if (fs.statSync(path.join(raiz, r)).isDirectory()) varrer(r); else if (!usados.has(r)) semUso.push(r);
  }
})("assets");
if (semUso.length) achado("D", "D2 arquivos sem uso na pasta assets", "pendente", "arquivos presentes e não referenciados pela aplicação: " + semUso.join(", "), { semUso });

// ---------- D4. compatibilidade com o GitHub Pages ----------
const todos = [];
(function varrer(d) {
  for (const n of fs.readdirSync(path.join(raiz, d))) {
    if (d === "." && (n === ".git" || n === "node_modules" || n === ".github")) continue;
    const r = d === "." ? n : d + "/" + n;
    const st = fs.statSync(path.join(raiz, r));
    if (st.isDirectory()) varrer(r); else todos.push({ r, tam: st.size });
  }
})(".");
const grandes = todos.filter((f) => f.tam > 50 * 1024 * 1024);
const total = todos.reduce((s, f) => s + f.tam, 0);
const ignoradosJekyll = todos.filter((f) => f.r.split("/").some((p) => /^[_.]/.test(p)) && ![".nojekyll", ".gitignore"].includes(f.r));
const caixa = new Map(); const colisoes = [];
todos.forEach((f) => { const k = f.r.toLowerCase(); if (caixa.has(k)) colisoes.push(f.r + " / " + caixa.get(k)); caixa.set(k, f.r); });
const nojekyll = fs.existsSync(path.join(raiz, ".nojekyll"));
const workflows = fs.existsSync(path.join(raiz, ".github/workflows"));
const absolutos = [...refs].filter((r) => r.startsWith("/"));
const okD4 = nojekyll && !grandes.length && !ignoradosJekyll.length && !colisoes.length && !absolutos.length && total < 1024 * 1024 * 1024;
achado("D", "D4 compatibilidade dos arquivos com o GitHub Pages", okD4 ? "aprovado" : "reprovado",
  `${todos.length} arquivos, ${(total / 1048576).toFixed(1)} MB no total; maior arquivo ${(Math.max(...todos.map((f) => f.tam)) / 1048576).toFixed(1)} MB; .nojekyll ${nojekyll ? "presente" : "ausente"}; ` +
  `${ignoradosJekyll.length} arquivos com nome iniciado por ponto ou sublinhado; ${colisoes.length} colisões de maiúsculas/minúsculas; ${absolutos.length} caminhos absolutos; ` +
  `${workflows ? "há" : "não há"} workflow próprio de publicação (publicação pelo branch)`,
  { arquivos: todos.length, total_bytes: total, grandes, ignoradosJekyll, colisoes, absolutos });

// ---------- servidor http no subcaminho /fatores/ ----------
const tipos = { ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".css": "text/css", ".png": "image/png", ".svg": "image/svg+xml", ".json": "application/json" };
const servidor = http.createServer((req, res) => {
  const u = decodeURIComponent(req.url.split("?")[0]);
  if (u === "/favicon.ico") { res.writeHead(204); res.end(); return; }
  if (!u.startsWith("/fatores/")) { res.writeHead(404); res.end(); return; }
  const rel = u.slice("/fatores/".length) || "index.html";
  if (!existeExato(rel.replace(/\/$/, "") || "index.html")) { res.writeHead(404); res.end(); return; } // servidor sensível a maiúsculas
  fs.readFile(path.join(raiz, rel), (err, buf) => {
    if (err) { res.writeHead(404); res.end(); return; }
    res.writeHead(200, { "Content-Type": tipos[path.extname(rel)] || "application/octet-stream" }); res.end(buf);
  });
});

const errosJs = [], respostasErro = [], requisicoes = new Set();
function vigiar(page) {
  page.on("pageerror", (e) => errosJs.push(String(e)));
  page.on("console", (m) => { if (m.type() === "error") errosJs.push(m.text()); });
  page.on("requestfailed", (r) => respostasErro.push("falha " + r.url()));
  page.on("response", (r) => { requisicoes.add(r.url()); if (r.status() >= 400) respostasErro.push(r.status() + " " + r.url()); });
}
const pronto = (page) => page.waitForFunction(() => { const e = document.body.getAttribute("data-territorio-estado"); return e && e !== "carregando"; }, null, { timeout: 20000 });

(async () => {
  await new Promise((r) => servidor.listen(0, "127.0.0.1", r));
  const base = `http://127.0.0.1:${servidor.address().port}/fatores/`;
  const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
  const evid = {};

  // ---------- D5. recursos gráficos ----------
  let page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  vigiar(page);
  await page.goto(base);
  await pronto(page);
  const graf = await page.evaluate(async (lista) => {
    const testa = (src) => new Promise((ok) => { const im = new Image(); im.onload = () => ok(im.naturalWidth > 0 ? null : src); im.onerror = () => ok(src); im.src = src; });
    const falhas = (await Promise.all(lista.map(testa))).filter(Boolean);
    const logo = document.querySelector(".topo-logo-picaps");
    const fundo = getComputedStyle(document.body).backgroundImage;
    const urls = [...fundo.matchAll(/url\("([^"]+)"\)/g)].map((m) => m[1]);
    const falhasFundo = (await Promise.all(urls.map(testa))).filter(Boolean);
    return { falhas, logo: logo && logo.naturalWidth > 0, fundo: urls.length, falhasFundo };
  }, iconesUnicos);
  evid.recursos = graf;
  achado("D", "D5 recursos gráficos carregam e decodificam no navegador", !graf.falhas.length && graf.logo && graf.fundo && !graf.falhasFundo.length ? "aprovado" : "reprovado",
    `${iconesUnicos.length - graf.falhas.length} de ${iconesUnicos.length} ícones decodificados; logotipo ${graf.logo ? "carregado" : "não carregado"}; ${graf.fundo - graf.falhasFundo.length} de ${graf.fundo} imagens de fundo carregadas` +
    (graf.falhas.length ? "; falhas: " + graf.falhas.join(", ") : ""), graf);

  // nomes acessíveis e textos alternativos
  await page.locator(".eixo-botao").nth(1).click();
  const nomes = await page.evaluate(() => {
    const semNome = [...document.querySelectorAll("button, select, [role=button]")].filter((b) => !b.hidden && b.offsetParent !== null).filter((b) => !(b.getAttribute("aria-label") || b.textContent.trim() || (b.id && document.querySelector(`label[for="${b.id}"]`))));
    const imgsSemAlt = [...document.querySelectorAll("img")].filter((i) => !i.hasAttribute("alt"));
    return { semNome: semNome.map((b) => b.outerHTML.slice(0, 80)), imgsSemAlt: imgsSemAlt.map((i) => i.outerHTML.slice(0, 80)) };
  });
  achado("D", "D5 nomes acessíveis de botões, seletor e imagens", !nomes.semNome.length && !nomes.imgsSemAlt.length ? "aprovado" : "reprovado",
    !nomes.semNome.length && !nomes.imgsSemAlt.length ? "todos os botões, o seletor de território e as imagens têm nome acessível ou atributo alt" : JSON.stringify(nomes), nomes);

  // axe-core (opcional)
  if (process.env.AXE_PATH && fs.existsSync(process.env.AXE_PATH)) {
    const axeSrc = fs.readFileSync(process.env.AXE_PATH, "utf8");
    const rodaAxe = async (rotulo) => {
      await page.addScriptTag({ content: axeSrc });
      const r = await page.evaluate(async () => {
        const res = await window.axe.run(document, { runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"] } });
        return res.violations.map((v) => ({ id: v.id, impacto: v.impact, descricao: v.help, ocorrencias: v.nodes.length, exemplos: v.nodes.slice(0, 4).map((n) => n.target.join(" ") + (n.any[0] && n.any[0].data && n.any[0].data.contrastRatio ? " (contraste " + n.any[0].data.contrastRatio + ")" : "")) }));
      });
      return { rotulo, violacoes: r };
    };
    const axe = [];
    await page.click("#btn-voltar");
    axe.push(await rodaAxe("tela inicial"));
    // os seis eixos têm cores diferentes: cada um é analisado aberto e com
    // o popup de um fator que cite fatores relacionados
    const comRel = carregar("territorios/campo-grande-ms.js").TERRITORIOS["campo-grande-ms"].diagnosticos;
    for (const e of M.eixos) {
      await page.locator(".eixo-botao").nth(e.ordem - 1).click();
      await page.waitForTimeout(450);
      axe.push(await rodaAxe("eixo " + e.ordem + " aberto"));
      const f = e.fatores.find((x) => comRel[x.id] && comRel[x.id].fatores_relacionados.length) || e.fatores[0];
      await page.locator(`.fator-botao[data-fator-id="${f.id}"]`).click();
      await page.waitForSelector("#overlay-popup:not([hidden])");
      axe.push(await rodaAxe("popup de " + f.id));
      await page.keyboard.press("Escape");
      await page.click("#btn-voltar");
    }
    evid.axe = axe;
    const regras = new Map();
    axe.forEach((a) => a.violacoes.forEach((v) => { const x = regras.get(v.id) || { ...v, telas: [] }; x.telas.push(a.rotulo + " (" + v.ocorrencias + ")"); regras.set(v.id, x); }));
    if (!regras.size) achado("D", "D5 acessibilidade automática (axe-core, WCAG 2.1 A/AA)", "aprovado", "nenhuma violação nas 13 telas analisadas (tela inicial, cada eixo aberto e um popup por eixo)", axe);
    regras.forEach((v) => achado("D", "D5 acessibilidade automática: " + v.id, v.impacto === "critical" || v.impacto === "serious" ? "reprovado" : "pendente",
      `${v.descricao}; impacto ${v.impacto}; ${v.telas.join(", ")}; exemplos: ${v.exemplos.join("; ")}`, v));
  } else {
    achado("D", "D5 acessibilidade automática (axe-core)", "pendente", "axe-core não disponível nesta execução (variável AXE_PATH)");
  }
  await page.close();

  // ---------- C5. navegação por teclado ----------
  page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  vigiar(page);
  await page.goto(base);
  await pronto(page);
  const tecl = {};
  await page.focus("#seletor-territorio");
  tecl.seletorFocavel = await page.evaluate(() => document.activeElement.id === "seletor-territorio");
  await page.locator(".eixo-botao").nth(0).focus();
  await page.keyboard.press("Enter");
  tecl.eixoAbre = await page.locator("#layout-eixos.tem-selecao").count() === 1;
  const card = page.locator(".fator-botao").first();
  await card.focus();
  const idCard = await card.getAttribute("data-fator-id");
  await page.keyboard.press("Enter");
  tecl.popupAbre = await page.locator("#overlay-popup:not([hidden])").count() === 1;
  tecl.focoNoFechar = await page.evaluate(() => document.activeElement.id === "popup-fechar");
  await page.keyboard.press("Escape");
  tecl.popupFecha = await page.locator("#overlay-popup[hidden]").count() === 1;
  tecl.focoRetorna = await page.evaluate((id) => document.activeElement && document.activeElement.getAttribute("data-fator-id") === id, idCard);
  // foco preso no popup: Tab a partir do último elemento não deve sair do diálogo
  await card.focus(); await page.keyboard.press("Enter");
  for (let i = 0; i < 25; i++) await page.keyboard.press("Tab");
  tecl.focoDentroDoPopup = await page.evaluate(() => !!document.activeElement.closest(".popup"));
  await page.keyboard.press("Escape");
  evid.teclado = tecl;
  const tecOk = tecl.seletorFocavel && tecl.eixoAbre && tecl.popupAbre && tecl.focoNoFechar && tecl.popupFecha;
  achado("C", "C5 navegação por teclado: abrir eixo, abrir fator, fechar", tecOk ? "aprovado" : "reprovado",
    `seletor focável ${tecl.seletorFocavel}; Enter abre eixo ${tecl.eixoAbre}; Enter abre fator ${tecl.popupAbre}; foco no botão fechar ${tecl.focoNoFechar}; Esc fecha ${tecl.popupFecha}`, tecl);
  achado("C", "C5 retorno do foco ao fator após fechar o popup", tecl.focoRetorna ? "aprovado" : "reprovado",
    tecl.focoRetorna ? "o foco volta ao card do fator que abriu o popup" : "ao fechar o popup, o foco não volta ao card do fator; quem navega por teclado ou leitor de tela perde a posição na lista", tecl);
  achado("C", "C5 foco mantido dentro do popup aberto", tecl.focoDentroDoPopup ? "aprovado" : "reprovado",
    tecl.focoDentroDoPopup ? "a tecla Tab percorre apenas os elementos do popup enquanto ele está aberto" : "com o popup aberto, a tecla Tab leva o foco para elementos da página por trás do diálogo", tecl);
  await page.close();

  // ---------- C9. tamanhos de tela ----------
  const telas = [[320, 568], [360, 740], [390, 844], [768, 1024], [1024, 768], [1366, 768], [1920, 1080]];
  const longo = Object.entries(carregar("territorios/campo-grande-ms.js").TERRITORIOS["campo-grande-ms"].diagnosticos).sort((a, b) => b[1].texto.length - a[1].texto.length)[0][0];
  const eixoLongo = Number(longo[1]);
  const resTelas = [];
  for (const [w, h] of telas) {
    page = await browser.newPage({ viewport: { width: w, height: h } });
    vigiar(page);
    await page.goto(base);
    await pronto(page);
    const r = { tela: w + "x" + h };
    const largura = () => page.evaluate(() => document.documentElement.scrollWidth);
    r.inicial = await largura();
    r.seletor = await page.evaluate(() => { const b = document.getElementById("seletor-territorio").getBoundingClientRect(); return b.left >= 0 && b.right <= window.innerWidth && b.width > 0; });
    r.alvoEixoMin = await page.evaluate(() => Math.min(...[...document.querySelectorAll(".eixo-botao")].map((b) => Math.min(b.getBoundingClientRect().width, b.getBoundingClientRect().height))));
    await page.locator(".eixo-botao").nth(eixoLongo - 1).click();
    await page.waitForTimeout(450);
    r.eixoAberto = await largura();
    if (pastaCapturas) await page.screenshot({ path: path.join(pastaCapturas, `tela-${w}x${h}-eixo.png`) });
    await page.locator(`.fator-botao[data-fator-id="${longo}"]`).scrollIntoViewIfNeeded();
    await page.locator(`.fator-botao[data-fator-id="${longo}"]`).click();
    await page.waitForSelector("#overlay-popup:not([hidden])");
    Object.assign(r, await page.evaluate(() => {
      const p = document.querySelector(".popup"), b = p.getBoundingClientRect(), f = document.getElementById("popup-fechar").getBoundingClientRect();
      const dentro = b.left >= 0 && b.top >= 0 && b.right <= window.innerWidth + 0.5 && b.bottom <= window.innerHeight + 0.5;
      const fecharVisivel = f.top >= b.top && f.right <= b.right + 0.5 && f.width > 0;
      p.scrollTop = p.scrollHeight;
      const ultimo = [...document.querySelectorAll("#popup-texto > p")].pop().getBoundingClientRect();
      return { popupDentro: dentro, fecharVisivel, fimLegivel: ultimo.bottom <= p.getBoundingClientRect().bottom + 1, popupLarg: Math.round(b.width), alvoFechar: Math.round(Math.min(f.width, f.height)), larguraComPopup: document.documentElement.scrollWidth };
    }));
    if (pastaCapturas) await page.screenshot({ path: path.join(pastaCapturas, `tela-${w}x${h}-popup.png`) });
    await page.keyboard.press("Escape");
    r.ok = r.inicial <= w && r.eixoAberto <= w && r.larguraComPopup <= w && r.seletor && r.popupDentro && r.fecharVisivel && r.fimLegivel;
    resTelas.push(r);
    await page.close();
  }
  evid.telas = resTelas;
  const falhaTela = resTelas.filter((r) => !r.ok);
  achado("C", "C9 apresentação em diferentes tamanhos de tela", falhaTela.length ? "reprovado" : "aprovado",
    `${telas.length} tamanhos (${telas.map((t) => t.join("x")).join(", ")}): sem rolagem horizontal na tela inicial, com eixo aberto e com popup; seletor dentro da tela; popup do diagnóstico mais longo (${longo}) dentro da tela, com botão de fechar visível e texto legível até o fim por rolagem` +
    (falhaTela.length ? "; falhas em " + falhaTela.map((r) => r.tela).join(", ") : ""), resTelas);
  const alvosPequenos = resTelas.filter((r) => r.alvoFechar < 24 || r.alvoEixoMin < 24);
  achado("C", "C9 tamanho dos alvos de toque", alvosPequenos.length ? "pendente" : "aprovado",
    `menor botão de eixo ${Math.min(...resTelas.map((r) => r.alvoEixoMin)).toFixed(0)} px; botão de fechar do popup ${Math.min(...resTelas.map((r) => r.alvoFechar))} px (referência WCAG 2.2: mínimo de 24 px)`, resTelas.map((r) => ({ tela: r.tela, eixo: r.alvoEixoMin, fechar: r.alvoFechar })));

  await browser.close();
  servidor.close();

  // ---------- D1/D3. erros em toda a execução ----------
  achado("D", "D1 erros de JavaScript durante a auditoria de interface", errosJs.length ? "reprovado" : "aprovado",
    errosJs.length ? errosJs.slice(0, 10).join(" | ") : "nenhum erro de script ou de console em todas as páginas abertas nesta auditoria", errosJs);
  achado("D", "D3 respostas com erro ou requisições falhas", respostasErro.length ? "reprovado" : "aprovado",
    respostasErro.length ? respostasErro.slice(0, 10).join(" | ") : `${requisicoes.size} endereços distintos requisitados no subcaminho /fatores/, todos com resposta bem-sucedida, em servidor sensível a maiúsculas/minúsculas`, { respostasErro, requisicoes: requisicoes.size });

  fs.writeFileSync(saida, JSON.stringify({ achados, evidencias: evid }, null, 2));
  achados.forEach((a) => console.log(`${a.situacao.toUpperCase().padEnd(10)} ${a.item} | ${a.descricao.slice(0, 400)}`));
  const n = (s) => achados.filter((a) => a.situacao === s).length;
  console.log(`\nreprovados: ${n("reprovado")} | pendentes: ${n("pendente")} | aprovados: ${n("aprovado")}`);
  process.exit(n("reprovado") ? 1 : 0);
})();
