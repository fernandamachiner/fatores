(function () {
  "use strict";

  // EIXOS_DATA vem de data.js (carregado antes deste script)
  var dados = window.EIXOS_DATA || [];

  var layoutEixos = document.getElementById("layout-eixos");
  var roda = document.getElementById("roda");
  var dica = document.getElementById("dica");
  var eixoCabecalho = document.getElementById("eixo-cabecalho");
  var gradeFatores = document.getElementById("grade-fatores");
  var btnVoltar = document.getElementById("btn-voltar");

  var botoesEixo = []; // preenchido em montarRoda(), usado para destacar o selecionado
  var eixoSelecionadoOrdem = null; // null = nenhum eixo aberto no momento

  var overlay = document.getElementById("overlay-popup");
  var popupFechar = document.getElementById("popup-fechar");
  var popupIconeResiliencia = document.getElementById("popup-icone-resiliencia");
  var popupIconeVulnerabilidade = document.getElementById("popup-icone-vulnerabilidade");
  var popupIconeAmeaca = document.getElementById("popup-icone-ameaca");
  var popupOds = document.getElementById("popup-ods");
  var popupTitulo = document.getElementById("popup-titulo");
  var popupDescricao = document.getElementById("popup-descricao");

  function caminhoIcone(codigo) {
    return "assets/icons/" + codigo + ".png";
  }

  // as 3 variantes coloridas de cada ícone (classificação de risco),
  // usadas só no popup de detalhe do fator:
  //   _verde     = resiliência
  //   _amarelo   = vulnerabilidade
  //   _vermelho  = ameaça
  function caminhoIconeVariante(codigo, variante) {
    return "assets/icons/" + codigo + "_" + variante + ".png";
  }

  // ---------- Nível 1: monta a roda com os 6 eixos ----------

  // Posições (em % do lado do container) dos 6 círculos desenhados na arte
  // SVG inline (ver <svg class="roda-svg"> em index.html, viewBox 0 0 200
  // 200 → % = valor/2). O botão clicável fica transparente, sobreposto
  // exatamente ao círculo correspondente na arte.
  var POSICOES_EIXO = [
    { x: 32.5, y: 19.69 }, // Eixo 1
    { x: 67.5, y: 19.69 }, // Eixo 2
    { x: 85, y: 50 },      // Eixo 3
    { x: 67.5, y: 80.31 }, // Eixo 4
    { x: 32.5, y: 80.31 }, // Eixo 5
    { x: 15, y: 50 },      // Eixo 6
  ];

  // Dá um zoom-in na imagem do eixo selecionado, dentro do próprio SVG
  // (em vez de desenhar um círculo/anel de destaque ao redor do botão).
  // Também traz esse grupo pro final do SVG (último a ser desenhado), pra
  // garantir que ele fique por cima dos eixos vizinhos enquanto aumenta.
  function ativarZoomEixo(ordemEixo) {
    var grupos = roda.querySelectorAll(".eixo-grafico");
    grupos.forEach(function (g) {
      var ativo = g.getAttribute("data-eixo") === String(ordemEixo);
      g.classList.toggle("ativo", ativo);
      if (ativo) {
        g.parentNode.appendChild(g); // manda pro topo da pilha de desenho
      }
    });
  }

  function desativarZoomEixos() {
    roda.querySelectorAll(".eixo-grafico.ativo").forEach(function (g) {
      g.classList.remove("ativo");
    });
  }

  function montarRoda() {
    dados.forEach(function (eixo, i) {
      var pos = POSICOES_EIXO[i] || { x: 50, y: 50 };

      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "eixo-botao";
      btn.style.left = pos.x + "%";
      btn.style.top = pos.y + "%";
      btn.setAttribute(
        "aria-label",
        "Eixo " + eixo.ordem + ": " + eixo.titulo + ". Foco: " + eixo.foco
      );
      btn.title = "EIXO " + eixo.ordem + " — " + eixo.titulo;

      // Passar o mouse (ou focar via teclado) dá o mesmo zoom-in de quando
      // o eixo está selecionado, só que temporário: ao tirar o mouse/foco,
      // volta a mostrar com zoom o eixo que estiver de fato selecionado
      // (ou nenhum, se não houver seleção).
      btn.addEventListener("mouseenter", function () {
        ativarZoomEixo(eixo.ordem);
      });
      btn.addEventListener("mouseleave", function () {
        ativarZoomEixo(eixoSelecionadoOrdem);
      });
      btn.addEventListener("focus", function () {
        ativarZoomEixo(eixo.ordem);
      });
      btn.addEventListener("blur", function () {
        ativarZoomEixo(eixoSelecionadoOrdem);
      });

      btn.addEventListener("click", function () {
        abrirEixo(eixo, btn);
      });

      roda.appendChild(btn);
      botoesEixo.push(btn);
    });
  }

  // ---------- Nível 2: fatores de um eixo ----------

  function abrirEixo(eixo, botaoClicado) {
    botoesEixo.forEach(function (b) {
      b.classList.toggle("selecionado", b === botaoClicado);
    });
    eixoSelecionadoOrdem = eixo.ordem;
    ativarZoomEixo(eixo.ordem);

    eixoCabecalho.innerHTML = "";
    eixoCabecalho.style.background = eixo.cor;

    var tag = document.createElement("div");
    tag.className = "eixo-tag";
    tag.textContent = "EIXO " + eixo.ordem;
    eixoCabecalho.appendChild(tag);

    var h2 = document.createElement("h2");
    h2.textContent = eixo.titulo;
    eixoCabecalho.appendChild(h2);

    var p = document.createElement("p");
    p.textContent = "Foco: " + eixo.foco;
    eixoCabecalho.appendChild(p);

    gradeFatores.innerHTML = "";
    eixo.fatores.forEach(function (fator) {
      var card = document.createElement("button");
      card.type = "button";
      card.className = "fator-botao";

      var badge = document.createElement("div");
      badge.className = "fator-icone-badge";
      badge.style.background = corClara(eixo.cor);

      var img = document.createElement("img");
      img.src = caminhoIcone(fator.icone);
      img.alt = fator.fator;
      img.loading = "lazy";
      badge.appendChild(img);
      card.appendChild(badge);

      var nome = document.createElement("div");
      nome.className = "fator-nome";
      nome.textContent = fator.fator;
      card.appendChild(nome);

      var selo = document.createElement("span");
      selo.className = "fator-ods-selo";
      selo.style.background = eixo.cor;
      selo.textContent = "ODS " + pad2(fator.ods);
      card.appendChild(selo);

      card.addEventListener("click", function () {
        abrirPopup(fator, eixo);
      });

      gradeFatores.appendChild(card);
    });

    layoutEixos.classList.add("tem-selecao");
  }

  function pad2(n) {
    n = String(n);
    return n.length < 2 ? "0" + n : n;
  }

  function corClara(hex) {
    // gera um tom bem claro da cor do eixo para o fundo do círculo do ícone
    var rgb = hexParaRgb(hex);
    if (!rgb) return "#eef2f5";
    var mistura = 0.85; // 0 = cor pura, 1 = branco
    var r = Math.round(rgb.r + (255 - rgb.r) * mistura);
    var g = Math.round(rgb.g + (255 - rgb.g) * mistura);
    var b = Math.round(rgb.b + (255 - rgb.b) * mistura);
    return "rgb(" + r + "," + g + "," + b + ")";
  }

  function hexParaRgb(hex) {
    var m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!m) return null;
    return {
      r: parseInt(m[1], 16),
      g: parseInt(m[2], 16),
      b: parseInt(m[3], 16),
    };
  }

  // ---------- Nível 3: popup do fator (sem navegação) ----------

  function abrirPopup(fator, eixo) {
    popupIconeResiliencia.src = caminhoIconeVariante(fator.icone, "verde");
    popupIconeResiliencia.alt = fator.fator + " – Resiliência";

    popupIconeVulnerabilidade.src = caminhoIconeVariante(fator.icone, "amarelo");
    popupIconeVulnerabilidade.alt = fator.fator + " – Vulnerabilidade";

    popupIconeAmeaca.src = caminhoIconeVariante(fator.icone, "vermelho");
    popupIconeAmeaca.alt = fator.fator + " – Ameaça";

    popupOds.textContent = fator.nome_ods || ("ODS " + pad2(fator.ods));
    popupOds.style.background = eixo.cor;
    popupTitulo.textContent = fator.fator;
    popupDescricao.textContent = fator.definicao || "";

    overlay.hidden = false;
    document.body.style.overflow = "hidden";
    popupFechar.focus();
  }

  function fecharPopup() {
    overlay.hidden = true;
    document.body.style.overflow = "";
  }

  popupFechar.addEventListener("click", fecharPopup);
  overlay.addEventListener("click", function (ev) {
    if (ev.target === overlay) fecharPopup();
  });
  document.addEventListener("keydown", function (ev) {
    if (ev.key === "Escape" && !overlay.hidden) fecharPopup();
  });

  // ---------- Voltar a ver só a roda (desmarca o eixo selecionado) ----------

  function fecharColunaFatores() {
    layoutEixos.classList.remove("tem-selecao");
    botoesEixo.forEach(function (b) {
      b.classList.remove("selecionado");
    });
    eixoSelecionadoOrdem = null;
    desativarZoomEixos();
  }

  btnVoltar.addEventListener("click", fecharColunaFatores);

  // ---------- Inicialização ----------

  montarRoda();
})();
