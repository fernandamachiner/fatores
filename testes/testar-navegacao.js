// Teste de navegação no navegador (Playwright + Chromium).
//
// Percorre os 6 eixos, abre o popup de todos os fatores e registra o que a
// interface exibe, conferindo que o diagnóstico, as fontes e os fatores
// relacionados exibidos são idênticos aos do arquivo do território ativo. Gera um JSON com esse registro, que pode ser comparado
// entre versões do painel para provar que a navegação foi preservada.
//
// Uso:
//   node testes/testar-navegacao.js <url ou caminho do index.html> <saida.json>
// Exemplos:
//   node testes/testar-navegacao.js index.html resultado-file.json
//   node testes/testar-navegacao.js http://localhost:8000/ resultado-http.json
//
// Requer o pacote playwright (npm install playwright) e um Chromium.
"use strict";
const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

(async () => {
  const [, , alvo, saida] = process.argv;
  const url = /^https?:/.test(alvo) ? alvo : "file://" + path.resolve(alvo);
  const browser = await chromium.launch(
    process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {}
  );
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  const errosConsole = [];
  page.on("console", (m) => { if (m.type() === "error") errosConsole.push(m.text()); });
  page.on("pageerror", (e) => errosConsole.push(String(e)));
  const falhasRede = [];
  page.on("requestfailed", (r) => falhasRede.push(r.url()));
  // respostas com erro (por exemplo, 404 por caminho ou maiúscula/minúscula errada)
  page.on("response", (r) => { if (r.status() >= 400) falhasRede.push(r.status() + " " + r.url()); });

  await page.goto(url);
  const registro = { url, eixos: [], falhas: [] };
  // aguarda o carregamento do território ativo (pronto ou erro)
  await page.waitForSelector(".territorio-pronto, .territorio-erro", { timeout: 20000 });
  registro.territorio = await page.evaluate(() => ({
    status: document.getElementById("territorio-status").className,
    texto: document.getElementById("territorio-status").textContent,
  }));
  if (!/territorio-pronto/.test(registro.territorio.status)) registro.falhas.push("território não carregou: " + registro.territorio.texto);
  const falha = (m) => registro.falhas.push(m);

  const nBotoes = await page.locator(".eixo-botao").count();
  if (nBotoes !== 6) falha(`esperados 6 botões de eixo, encontrados ${nBotoes}`);
  const modosFechar = ["botao", "esc", "fora"];
  let contadorPopup = 0;

  for (let i = 0; i < nBotoes; i++) {
    const botao = page.locator(".eixo-botao").nth(i);
    // hover aplica zoom no grupo SVG correspondente
    await botao.hover();
    const zoom = await page.locator(`.eixo-grafico.ativo[data-eixo="${i + 1}"]`).count();
    if (zoom !== 1) falha(`eixo ${i + 1}: zoom por hover não aplicado`);
    await botao.click();
    if (!(await page.locator("#layout-eixos.tem-selecao").count())) falha(`eixo ${i + 1}: coluna de fatores não abriu`);

    const cab = await page.locator("#eixo-cabecalho").evaluate((el) => ({
      tag: el.querySelector(".eixo-tag").textContent,
      titulo: el.querySelector("h2").textContent,
      foco: el.querySelector("p").textContent,
      cor: getComputedStyle(el).backgroundColor,
    }));
    const eixo = { aria: await botao.getAttribute("aria-label"), ...cab, fatores: [] };

    const nCards = await page.locator(".fator-botao").count();
    for (let j = 0; j < nCards; j++) {
      const card = page.locator(".fator-botao").nth(j);
      const dadosCard = await card.evaluate((el) => ({
        id: el.getAttribute("data-fator-id"),
        nome: el.querySelector(".fator-nome").textContent,
        selo: el.querySelector(".fator-ods-selo").textContent,
        icone: el.querySelector("img").getAttribute("src"),
      }));
      await card.scrollIntoViewIfNeeded();
      await card.click();
      await page.waitForSelector("#overlay-popup:not([hidden])");
      // aguarda o carregamento das 3 imagens do popup
      await page.waitForFunction(() =>
        ["popup-icone-resiliencia", "popup-icone-vulnerabilidade", "popup-icone-ameaca"]
          .every((id) => { const im = document.getElementById(id); return im.complete; })
      );
      const pop = await page.evaluate(() => {
        const im = (id) => { const e = document.getElementById(id); return { src: e.getAttribute("src"), ok: e.naturalWidth > 0, alt: e.alt }; };
        const ativo = (window.TERRITORIOS_INDICE || {}).padrao;
        return {
          titulo: document.getElementById("popup-titulo").textContent,
          ods: document.getElementById("popup-ods").textContent,
          definicao: document.getElementById("popup-definicao").textContent,
          territorio: document.getElementById("popup-territorio").textContent,
          diagnostico: [...document.querySelectorAll("#popup-texto > p")].map((p) => p.textContent).join("\n\n"),
          aviso: (document.querySelector("#popup-texto .popup-aviso") || {}).textContent || "",
          fontes: [...document.querySelectorAll("#popup-referencias li")].map((li) => li.textContent),
          relacionados: [...document.querySelectorAll("#popup-relacionados .popup-chip")].map((b) => b.getAttribute("data-fator-id")),
          resiliencia: im("popup-icone-resiliencia"),
          vulnerabilidade: im("popup-icone-vulnerabilidade"),
          ameaca: im("popup-icone-ameaca"),
          focoNoFechar: document.activeElement && document.activeElement.id === "popup-fechar",
        };
      });
      // o texto exibido deve ser idêntico ao diagnóstico do arquivo do território
      const esperado = await page.evaluate((fid) => {
        const ids = Object.keys(window.TERRITORIOS || {});
        const t = ids.length === 1 ? window.TERRITORIOS[ids[0]] : null;
        const d = t && t.diagnosticos[fid];
        return d ? { texto: d.texto, fontes: d.fontes_citadas.concat(d.referencias_normativas), rel: d.fatores_relacionados } : null;
      }, dadosCard.id);
      if (esperado) {
        if (pop.diagnostico !== esperado.texto) falha(`diagnóstico exibido difere dos dados: ${dadosCard.id}`);
        if (JSON.stringify(pop.fontes) !== JSON.stringify(esperado.fontes)) falha(`fontes exibidas diferem dos dados: ${dadosCard.id}`);
        if (JSON.stringify(pop.relacionados) !== JSON.stringify(esperado.rel)) falha(`fatores relacionados diferem dos dados: ${dadosCard.id}`);
      } else if (!pop.aviso) {
        falha(`fator sem diagnóstico não exibiu aviso: ${dadosCard.id}`);
      }
      ["resiliencia", "vulnerabilidade", "ameaca"].forEach((k) => { if (!pop[k].ok) falha(`imagem não carregou: ${pop[k].src}`); });
      if (pop.titulo !== dadosCard.nome) falha(`popup com título diferente do card: ${dadosCard.nome}`);
      if (!pop.definicao.trim()) falha(`popup sem definição de referência: ${dadosCard.nome}`);

      // alterna as três formas de fechar
      const modo = modosFechar[contadorPopup++ % 3];
      if (modo === "botao") await page.click("#popup-fechar");
      else if (modo === "esc") await page.keyboard.press("Escape");
      else await page.mouse.click(5, 5);
      if (!(await page.locator("#overlay-popup[hidden]").count())) falha(`popup não fechou (${modo}): ${dadosCard.nome}`);

      eixo.fatores.push({ ...dadosCard, popup: { titulo: pop.titulo, ods: pop.ods, definicao: pop.definicao, territorio: pop.territorio, diagnostico: pop.diagnostico, aviso: pop.aviso, fontes: pop.fontes, relacionados: pop.relacionados, icones: [pop.resiliencia.src, pop.vulnerabilidade.src, pop.ameaca.src], alts: [pop.resiliencia.alt, pop.vulnerabilidade.alt, pop.ameaca.alt], focoNoFechar: pop.focoNoFechar } });
    }
    registro.eixos.push(eixo);

    await page.click("#btn-voltar");
    if (await page.locator("#layout-eixos.tem-selecao").count()) falha(`eixo ${i + 1}: botão voltar não fechou a coluna`);
  }

  // layout de celular: a coluna de fatores deve abrir abaixo da roda
  await page.setViewportSize({ width: 390, height: 844 });
  await page.locator(".eixo-botao").first().click();
  await page.waitForTimeout(600); // transição de 0,35 s da coluna
  const celular = await page.evaluate(() => {
    const r = document.querySelector(".coluna-roda").getBoundingClientRect();
    const f = document.querySelector(".coluna-fatores").getBoundingClientRect();
    const transbordam = [...document.querySelectorAll("body *")]
      .filter((el) => el.getBoundingClientRect().right > window.innerWidth + 1)
      .map((el) => el.id || el.getAttribute("class") || el.tagName.toLowerCase());
    return { empilhado: f.top >= r.bottom - 1, larguraPagina: document.documentElement.scrollWidth, larguraTela: window.innerWidth, transbordam: [...new Set(transbordam)].slice(0, 8) };
  });
  if (!celular.empilhado) falha("layout de celular: coluna de fatores não ficou abaixo da roda");
  registro.avisos = [];
  if (celular.larguraPagina > celular.larguraTela) {
    registro.avisos.push(`layout de celular: rolagem horizontal (${celular.larguraPagina}px em tela de ${celular.larguraTela}px), elementos: ${celular.transbordam.join(", ")}`);
  }

  registro.totais = { eixos: registro.eixos.length, fatores: registro.eixos.reduce((s, e) => s + e.fatores.length, 0), popupsAbertos: contadorPopup,
    comDiagnostico: registro.eixos.reduce((s, e) => s + e.fatores.filter((f) => f.popup.diagnostico).length, 0) };
  registro.errosConsole = errosConsole;
  registro.falhasRede = falhasRede;
  fs.writeFileSync(saida, JSON.stringify(registro, null, 2));
  console.log(`${url}\n  ${registro.territorio.texto}\n  eixos: ${registro.totais.eixos} | fatores: ${registro.totais.fatores} | popups abertos e fechados: ${contadorPopup} | diagnósticos exibidos idênticos aos dados: ${registro.totais.comDiagnostico}`);
  console.log(`  falhas: ${registro.falhas.length} | erros de console: ${errosConsole.length} | falhas de rede: ${falhasRede.length}`);
  registro.falhas.concat(errosConsole, falhasRede).forEach((m) => console.log("   - " + m));
  registro.avisos.forEach((m) => console.log("  AVISO " + m));
  await browser.close();
  process.exit(registro.falhas.length || errosConsole.length || falhasRede.length ? 1 : 0);
})();
