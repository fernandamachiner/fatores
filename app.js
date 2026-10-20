(function () {
  "use strict";

  // Eixos e fatores vêm do cadastro metodológico central
  // (metodologia/metodologia.js, carregado antes deste script).
  var METODOLOGIA = window.METODOLOGIA || { eixos: [] };
  var dados = METODOLOGIA.eixos;

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
  var popupDefinicao = document.getElementById("popup-definicao");
  var popupTerritorio = document.getElementById("popup-territorio");
  var popupTexto = document.getElementById("popup-texto");
  var popupReferencias = document.getElementById("popup-referencias");
  var popupRelacionados = document.getElementById("popup-relacionados");
  var popupVoltar = document.getElementById("popup-voltar");
  var territorioStatus = document.getElementById("territorio-status");

  // índice id do fator -> { fator, eixo }, para localizar fatores
  // relacionados citados nos diagnósticos
  var FATORES = {};
  dados.forEach(function (eixo) {
    eixo.fatores.forEach(function (fator) {
      FATORES[fator.id] = { fator: fator, eixo: eixo };
    });
  });

  // ---------- Território ativo ----------
  //
  // Os diagnósticos não ficam na interface: vêm do arquivo de dados do
  // território (territorios/<id>.js), listado em territorios/indice.js e
  // carregado aqui por uma tag <script> inserida dinamicamente, o que
  // funciona tanto em servidor (GitHub Pages) quanto abrindo o index.html
  // direto do computador. O estado só passa a "pronto" se o arquivo
  // carregado registrar exatamente o território solicitado; em nenhum caso
  // os dados de um território são usados no lugar de outro.

  var territorio = {
    estado: "carregando", // carregando | pronto | erro
    id: null,
    rotulo: null,
    dados: null,
    mensagem: ""
  };

  function territorioSolicitado() {
    var indice = window.TERRITORIOS_INDICE;
    var param = null;
    try {
      param = new URLSearchParams(window.location.search).get("territorio");
    } catch (e) {
      param = null;
    }
    if (!indice || !indice.territorios || !indice.territorios.length) {
      return { erro: "O índice de territórios (territorios/indice.js) não foi carregado." };
    }
    var id = param || indice.padrao;
    var item = null;
    indice.territorios.forEach(function (t) {
      if (t.id === id) item = t;
    });
    if (!item) {
      return { erro: "O território solicitado (" + id + ") não está cadastrado na plataforma.", id: id };
    }
    return { item: item };
  }

  function atualizarStatusTerritorio() {
    territorioStatus.className = "territorio-status territorio-" + territorio.estado;
    territorioStatus.innerHTML = "";
    if (territorio.estado === "carregando") {
      territorioStatus.textContent = "Carregando dados do território…";
      return;
    }
    if (territorio.estado === "erro") {
      territorioStatus.textContent = territorio.mensagem;
      return;
    }
    var rotulo = document.createElement("strong");
    rotulo.textContent = "Território: " + territorio.rotulo;
    territorioStatus.appendChild(rotulo);
    var sit = territorio.dados.situacao || {};
    if (sit.territorio_de_exemplo) {
      var ex = document.createElement("span");
      ex.className = "territorio-selo";
      ex.textContent = "território de exemplo";
      territorioStatus.appendChild(ex);
    }
    if (sit.aviso) territorioStatus.title = sit.aviso;
    var versaoT = territorio.dados.metodologia && territorio.dados.metodologia.versao;
    if (versaoT && versaoT !== METODOLOGIA.versao) {
      var av = document.createElement("span");
      av.className = "territorio-alerta";
      av.textContent = "Diagnóstico organizado pela Matriz v" + versaoT + "; painel usa a v" + METODOLOGIA.versao + ".";
      territorioStatus.appendChild(av);
    }
  }

  function falhaTerritorio(msg) {
    territorio.estado = "erro";
    territorio.dados = null;
    territorio.mensagem = msg;
    atualizarStatusTerritorio();
  }

  function carregarTerritorio() {
    var sol = territorioSolicitado();
    if (sol.erro) {
      territorio.id = sol.id || null;
      falhaTerritorio(sol.erro + " Nenhum diagnóstico será exibido.");
      return;
    }
    var item = sol.item;
    territorio.id = item.id;
    territorio.rotulo = item.rotulo;
    territorio.estado = "carregando";
    atualizarStatusTerritorio();

    var concluido = false;
    var script = document.createElement("script");
    script.src = item.arquivo;
    script.onload = function () {
      concluido = true;
      var t = window.TERRITORIOS && window.TERRITORIOS[item.id];
      if (!t || !t.territorio || t.territorio.id !== item.id) {
        falhaTerritorio("O arquivo de dados de " + item.rotulo + " não contém os diagnósticos deste território. Nenhum diagnóstico será exibido.");
        return;
      }
      territorio.dados = t;
      territorio.rotulo = t.territorio.rotulo || item.rotulo;
      territorio.estado = "pronto";
      atualizarStatusTerritorio();
      if (!overlay.hidden && fatorAberto) mostrarFator(fatorAberto, false);
    };
    script.onerror = function () {
      concluido = true;
      falhaTerritorio("Não foi possível carregar os dados de " + item.rotulo + " (" + item.arquivo + "). Nenhum diagnóstico será exibido.");
    };
    setTimeout(function () {
      if (!concluido) falhaTerritorio("O carregamento dos dados de " + item.rotulo + " excedeu o tempo limite. Nenhum diagnóstico será exibido.");
    }, 15000);
    document.head.appendChild(script);
  }

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
    dados.forEach(function (eixo) {
      // a posição na roda segue a ordem metodológica do eixo (1 a 6),
      // e não a posição do eixo na lista
      var pos = POSICOES_EIXO[eixo.ordem - 1] || { x: 50, y: 50 };

      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "eixo-botao";
      btn.setAttribute("data-eixo-id", eixo.id);
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
      // identificador estável do fator, usado para ligar o diagnóstico
      // territorial nas próximas etapas
      card.setAttribute("data-fator-id", fator.id);

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
        abrirPopup(fator);
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

  // ---------- Nível 3: popup do fator ----------
  //
  // Mostra os dados metodológicos do fator (ícones, ODS, nome, definição de
  // referência) e o diagnóstico situacional do território ativo, localizado
  // pelo id do fator. Os fatores relacionados citados no diagnóstico podem
  // ser abertos no próprio popup; o botão de retorno volta ao fator anterior.

  var fatorAberto = null; // id do fator exibido no popup
  var historicoPopup = []; // ids dos fatores visitados antes, dentro do popup

  function aviso(texto, classe) {
    var div = document.createElement("div");
    div.className = "popup-aviso " + (classe || "");
    div.textContent = texto;
    return div;
  }

  function listaReferencias(titulo, itens) {
    var bloco = document.createElement("div");
    bloco.className = "popup-ref-bloco";
    var h = document.createElement("h4");
    h.textContent = titulo;
    bloco.appendChild(h);
    var ul = document.createElement("ul");
    itens.forEach(function (x) {
      var li = document.createElement("li");
      li.textContent = x;
      ul.appendChild(li);
    });
    bloco.appendChild(ul);
    return bloco;
  }

  function preencherDiagnostico(fid) {
    popupTexto.innerHTML = "";
    popupReferencias.innerHTML = "";
    popupRelacionados.innerHTML = "";

    if (territorio.estado === "carregando") {
      popupTerritorio.textContent = "Diagnóstico situacional";
      popupTexto.appendChild(aviso("Carregando os dados do território…", "aviso-carregando"));
      return;
    }
    if (territorio.estado === "erro") {
      popupTerritorio.textContent = "Diagnóstico situacional";
      popupTexto.appendChild(aviso(territorio.mensagem, "aviso-erro"));
      return;
    }

    popupTerritorio.textContent = "Diagnóstico situacional · " + territorio.rotulo;
    var diag = (territorio.dados.diagnosticos || {})[fid];
    if (!diag || !diag.texto) {
      popupTexto.appendChild(aviso("Não há diagnóstico situacional cadastrado para este fator em " + territorio.rotulo + ".", "aviso-ausente"));
      return;
    }

    // texto integral; parágrafos separados por linha em branco
    diag.texto.split(/\n\s*\n/).forEach(function (par) {
      var p = document.createElement("p");
      p.textContent = par;
      popupTexto.appendChild(p);
    });

    // as fontes citadas permanecem nos dados do território, mas não são
    // listadas no popup: já aparecem no próprio texto do diagnóstico
    if (diag.referencias_normativas && diag.referencias_normativas.length) {
      popupReferencias.appendChild(listaReferencias("Referências normativas", diag.referencias_normativas));
    }

    var rel = (diag.fatores_relacionados || []).filter(function (r) { return FATORES[r]; });
    if (rel.length) {
      var h = document.createElement("h4");
      h.textContent = "Fatores relacionados";
      popupRelacionados.appendChild(h);
      var lista = document.createElement("div");
      lista.className = "popup-chips";
      rel.forEach(function (r) {
        var info = FATORES[r];
        var b = document.createElement("button");
        b.type = "button";
        b.className = "popup-chip";
        b.setAttribute("data-fator-id", r);
        b.style.borderColor = info.eixo.cor;
        var cod = document.createElement("span");
        cod.className = "popup-chip-id";
        cod.style.background = info.eixo.cor;
        cod.textContent = r;
        b.appendChild(cod);
        b.appendChild(document.createTextNode(" " + info.fator.fator));
        b.addEventListener("click", function () {
          historicoPopup.push(fatorAberto);
          mostrarFator(r, true);
        });
        lista.appendChild(b);
      });
      popupRelacionados.appendChild(lista);
    }
  }

  function mostrarFator(fid, rolarParaTopo) {
    var info = FATORES[fid];
    if (!info) return;
    var fator = info.fator, eixo = info.eixo;
    fatorAberto = fid;

    // com o diagnóstico de um território carregado, o popup omite os ícones
    // de resiliência, vulnerabilidade e ameaça e o selo ODS do topo; sem
    // território (carregando ou erro), mantém a apresentação metodológica
    overlay.querySelector(".popup").classList.toggle("popup-modo-territorio", territorio.estado === "pronto");

    popupIconeResiliencia.src = caminhoIconeVariante(fator.icone, "verde");
    popupIconeResiliencia.alt = fator.fator + " – Resiliência";
    popupIconeVulnerabilidade.src = caminhoIconeVariante(fator.icone, "amarelo");
    popupIconeVulnerabilidade.alt = fator.fator + " – Vulnerabilidade";
    popupIconeAmeaca.src = caminhoIconeVariante(fator.icone, "vermelho");
    popupIconeAmeaca.alt = fator.fator + " – Ameaça";

    popupOds.textContent = fator.nome_ods || ("ODS " + pad2(fator.ods));
    popupOds.style.background = eixo.cor;
    popupTitulo.textContent = fator.fator;
    popupDefinicao.textContent = fator.definicao || "";
    preencherDiagnostico(fid);

    if (historicoPopup.length) {
      var anterior = FATORES[historicoPopup[historicoPopup.length - 1]];
      popupVoltar.textContent = "← Voltar a " + anterior.fator.fator;
      popupVoltar.hidden = false;
    } else {
      popupVoltar.hidden = true;
    }
    if (rolarParaTopo) overlay.querySelector(".popup").scrollTop = 0;
  }

  function abrirPopup(fator) {
    historicoPopup = [];
    mostrarFator(fator.id, true);
    overlay.hidden = false;
    document.body.style.overflow = "hidden";
    popupFechar.focus();
  }

  popupVoltar.addEventListener("click", function () {
    var anterior = historicoPopup.pop();
    if (anterior) mostrarFator(anterior, true);
  });

  function fecharPopup() {
    overlay.hidden = true;
    document.body.style.overflow = "";
    fatorAberto = null;
    historicoPopup = [];
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
  carregarTerritorio();
})();
