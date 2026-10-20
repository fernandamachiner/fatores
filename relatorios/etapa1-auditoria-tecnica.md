# Etapa 1. Auditoria técnica do Painel de Fatores Territoriais

Base examinada: eixo-fatores-diagnostico-main.zip (646 arquivos) e DOC-20261008-WA0072.docx (Diagnóstico Situacional, território de exemplo Campo Grande/MS). Nenhum arquivo do projeto foi alterado.

Origem do código: o arquivo eixo-fatores-diagnostico-main.zip anexado ao chat foi tratado como código-fonte do site publicado. Os arquivos index.html, app.js, data.js e style.css anexados ao projeto têm o mesmo conteúdo da versão principal do zip, e o conteúdo exibido no endereço publicado (título, cabeçalho e texto do quadro Como usar este guia) também coincide com essa versão. A cópia aninhada aplicacao-6-eixos-standalone.zip corresponde a uma versão anterior.

## 1. Resumo da arquitetura atual

A aplicação é um site estático em HTML, CSS e JavaScript puro (ES5, sem framework, sem dependências externas, sem etapa de build e sem chamadas de rede). O ponto de entrada é index.html, que carrega style.css no cabeçalho e, ao final do body, data.js seguido de app.js por tags script convencionais. data.js declara a variável global EIXOS_DATA, e app.js, encapsulado em uma IIFE em modo estrito, lê essa variável e constrói dinamicamente a interface.

O conteúdo é organizado em três níveis apresentados em uma única tela. O primeiro nível é a roda dos seis eixos, desenhada como SVG inline no próprio index.html, sobre a qual app.js posiciona seis botões transparentes. O segundo nível é a coluna de fatores do eixo selecionado, gerada a partir de data.js. O terceiro nível é um popup modal com o nome do fator, o selo ODS, a descrição em linguagem simples e o trio de ícones de classificação (resiliência, vulnerabilidade, ameaça).

Como os dados são carregados por script e não por fetch, a aplicação funciona tanto em servidor (GitHub Pages) quanto aberta diretamente do disco pelo protocolo file://, o que sustenta o uso offline previsto em LEIA-ME.txt, ABRIR.bat e ABRIR.command. Essa propriedade condiciona as decisões das etapas seguintes.

## 2. Arquivos relevantes e suas funções

| Arquivo | Função | Situação |
|---|---|---|
| index.html (256 linhas) | Estrutura da página, cabeçalho com logo PICAPS, SVG inline da roda com títulos e cores dos eixos, contêineres da coluna de fatores, rodapé conceitual e popup | Em uso, será alterado |
| app.js (256 linhas) | Toda a lógica: montagem da roda, abertura de eixo, cards de fatores, popup, fechamento e retorno | Em uso, será alterado |
| data.js (1.169 linhas, 51 KB) | Variável global EIXOS_DATA com 6 eixos e 159 fatores, incluindo descrições | Em uso, será desmembrado |
| style.css (616 linhas) | Variáveis de cor, layout responsivo, estados de seleção, popup, marca d'água | Em uso, ajustes pontuais |
| assets/icons/ (628 PNG, cerca de 20 MB) | 157 códigos de ícone, cada um em 4 variantes: base, _verde, _amarelo, _vermelho | Em uso, preservar |
| assets/logo-picaps.png | Logo do cabeçalho | Em uso |
| assets/marca-dagua-fundo.svg, assets/mapa-mundi-silhueta.png | Fundo em marca d'água, referenciados em style.css | Em uso |
| assets/roda-eixos.svg, selo-ods-2030.svg, icone-bussola.svg, icone-interdependencia.svg, icone-pessoas.svg, icone-rede.svg, icone-sistemica.svg | Versões avulsas de artes que hoje estão inline no index.html | Não referenciados |
| aplicacao-6-eixos-standalone.zip (18,6 MB) | Cópia anterior da aplicação, com título 6 Eixos Estratégicos - Vigiante, rótulos da roda em outro tamanho e texto de instrução diferente | Não referenciado, versão desatualizada |
| LEIA-ME.txt, ABRIR.bat, ABRIR.command | Documentação de uso e atalhos para abertura offline | Em uso, LEIA-ME será atualizado |

## 3. Localização dos dados dos eixos e fatores

Os seis eixos estão definidos em data.js como objetos com os campos id (texto Eixo 1 a Eixo 6), titulo, foco, cor (hexadecimal), ordem (1 a 6) e fatores. A distribuição é de 29 fatores no Eixo 1 (O Suor que não nos Sustenta), 39 no Eixo 2 (A Vida em Risco), 19 no Eixo 3 (Nossos Corpos Silenciados), 25 no Eixo 4 (A Terra de Quem?), 31 no Eixo 5 (A Cidade Negada) e 16 no Eixo 6 (A Voz na Mesa), totalizando 159.

Cada fator possui cinco campos: fator (nome), icone (código do arquivo de ícone, no formato NN.NN), definicao (descrição em linguagem simples), ods (número) e nome_ods (rótulo exibido no popup). Não existe identificador próprio do fator. O código de ícone, que seria o candidato natural, não é único: 03.09 é usado por Acidentes em estradas (Eixo 2) e por Vias obstruídas e danificadas (Eixo 5), e 03.11 é usado por Acesso a medicamentos e por Cobertura vacinal (ambos no Eixo 2). Além disso, em 27 fatores o prefixo do código de ícone difere do número do ODS (por exemplo, Enchentes e alagamentos usa o ícone 14.01 e está classificado no ODS 13), o que confirma que o código pertence ao catálogo de iconografia e não à classificação ODS. Nomes de fatores não se repetem.

A definição dos eixos não está restrita a data.js. Títulos, cores (gradientes grad-eixo-1 a grad-eixo-6 e arcos grad-anel-0 a grad-anel-5) e pictogramas de cada eixo estão gravados no SVG inline de index.html, e as coordenadas de cada círculo estão fixadas no vetor POSICOES_EIXO de app.js, associadas ao eixo pela posição no array. A metodologia está, portanto, distribuída em três arquivos, com a cor de cada eixo duplicada entre data.js e index.html.

A integridade dos ícones foi verificada: os 157 códigos referenciados possuem as quatro variantes, não há ícone ausente nem ícone órfão.

## 4. Localização das descrições atuais

As descrições em linguagem simples estão no campo definicao de cada fator em data.js. São exibidas exclusivamente no popup, pela função abrirPopup em app.js, que atribui fator.definicao ao elemento p#popup-descricao por textContent. Esse mecanismo é seguro contra injeção de HTML, mas não preserva parágrafos, listas ou citações de fonte. Foi identificado um espaço duplo na definição do fator Alimentos (02.01).

O popup tem largura máxima de 420 px, texto centralizado, altura limitada a 88% da janela e rolagem vertical. Esse formato foi dimensionado para descrições de uma ou duas frases.

## 5. Fluxo de navegação da aplicação

Ao carregar a página, montarRoda percorre EIXOS_DATA e cria seis botões transparentes sobre a arte SVG, posicionados por POSICOES_EIXO. Passar o mouse ou focar um botão pelo teclado aplica zoom ao grupo SVG correspondente (classe ativo em .eixo-grafico[data-eixo]), revertido ao sair. O clique chama abrirEixo, que marca o botão como selecionado, monta o cabeçalho com a cor do eixo, a etiqueta EIXO N, o título e o foco, gera um card por fator com ícone base, nome e selo ODS e adiciona a classe tem-selecao ao contêiner, o que reduz a roda e exibe a coluna de fatores à direita (empilhada abaixo de 760 px).

O clique em um card chama abrirPopup, que carrega as três variantes coloridas do ícone, o rótulo ODS na cor do eixo, o nome e a descrição, exibe o overlay e bloqueia a rolagem da página. O popup fecha pelo botão de fechar, por clique fora da caixa ou pela tecla Esc. O botão Ver todos os eixos remove a seleção e restaura a roda.

O estado de navegação existe apenas em variáveis de memória (eixoSelecionadoOrdem). Não há parâmetro de URL, histórico de navegação ou persistência, de modo que recarregar a página retorna à roda.

## 6. Recursos que precisam ser preservados

A separação entre metodologia e território não deve alterar a identidade visual e o comportamento já validados. Precisam ser mantidos a roda SVG com zoom por hover, foco e seleção, a transição da roda para a coluna de fatores sem troca de página, os cards com ícone base, nome e selo ODS na cor do eixo, o trio de ícones resiliência, vulnerabilidade e ameaça no popup, os três modos de fechamento do popup, o retorno à roda, o rodapé conceitual (Conectados para Transformar, princípios e selo Agenda 2030), a marca d'água cartográfica, o logo PICAPS, a responsividade nos quatro pontos de quebra e em telas de toque, os atributos de acessibilidade existentes (aria-label nos eixos, role dialog e aria-modal no popup, foco no botão de fechar) e o funcionamento offline por file://, sem servidor e sem internet.

A descrição em linguagem simples também deve ser preservada como conteúdo metodológico. Ela é genérica, válida para qualquer território, e pertence à estrutura fixa, não ao diagnóstico de Campo Grande/MS.

## 7. Riscos técnicos identificados

O risco de maior impacto não é de código, mas de correspondência de conteúdo. O documento de diagnóstico está organizado segundo uma versão da matriz com 126 fatores (21, 26, 19, 25, 21 e 14 por eixo), enquanto o painel contém 159. O documento referencia códigos do tipo E1-20, E3-13 e E4-22, inexistentes em data.js. Uma comparação automatizada dos nomes resultou em 68 correspondências exatas, 21 muito próximas, 27 ambíguas e 10 sem correspondente (por exemplo, Desnutrição, Igualdade de oportunidades, Manejo ambientalmente saudável de produtos químicos, Regulação da pesca e Transparência ativa das instituições). Em vários casos, mais de um diagnóstico do documento converge para o mesmo fator do painel (quatro deles para Gestão sustentável dos recursos naturais), e sete fatores do Eixo 6 do documento, nomeados como interface com governança, correspondem a fatores que no painel pertencem aos Eixos 2, 3 e 4. Estima-se que cerca de 94 dos 159 fatores do painel recebam diagnóstico e cerca de 65 permaneçam sem texto. A associação feita apenas por nome, sem tabela de correspondência validada, comprometeria a fidelidade exigida na Etapa 3.

A ausência de identificador estável de fator impede usar o código de ícone como chave dos diagnósticos, em razão das duplicidades 03.09 e 03.11. Será necessário criar identificadores próprios na Etapa 2.

A substituição de data.js por arquivos JSON carregados com fetch funcionaria no GitHub Pages, mas quebraria a abertura local por file://, pois navegadores bloqueiam fetch de arquivos locais. O formato dos dados territoriais precisa preservar o carregamento por script.

A associação entre eixo e posição na roda depende da ordem do array, e títulos e cores dos eixos estão duplicados no SVG inline. Qualquer reordenação ou renomeação na estrutura metodológica que não seja replicada no SVG produzirá inconsistência visual silenciosa.

Os diagnósticos têm entre 53 e 128 palavras por fator, contra uma ou duas frases nas descrições atuais. O popup de 420 px com texto centralizado prejudicará a leitura e exigirá ajuste de largura e alinhamento, sem alterar o padrão visual.

O documento é identificado como Proposta de Estrutura e Território de Exemplo. Essa condição precisa constar nos metadados do território e ser visível na interface, para que os textos não sejam lidos como diagnóstico oficial do município.

No plano de manutenção, o zip aninhado de 18,6 MB e sete SVGs avulsos não são utilizados, aumentam o repositório e induzem a edição do arquivo errado. Nomes de arquivos no GitHub Pages são sensíveis a maiúsculas e minúsculas, o que deve ser observado na nomeação dos arquivos de território.

## 8. Plano de implementação recomendado

A abordagem recomendada é evolutiva: manter index.html, style.css e a lógica de app.js, substituindo apenas a origem dos textos do popup e acrescentando o seletor. Não há justificativa para reconstruir a aplicação.

Na Etapa 2, data.js dá lugar a metodologia/metodologia.js, que registra window.METODOLOGIA com versão da matriz, eixos (identificador E1 a E6, ordem, título, foco, cor) e fatores com identificador estável no formato E1-01, preservando fator, icone, ods, nome_ods e definicao. Um teste automatizado compara as cores e os títulos com o SVG inline.

Na Etapa 3, o documento gera territorios/campo-grande-ms.js, que registra em window.TERRITORIOS o objeto do território com metadados (nome, UF, tipo, documento-fonte, data, status Proposta de estrutura, resumo executivo e notas metodológicas) e um mapa de diagnósticos indexado pelo identificador do fator, com o texto integral, o nome do fator tal como aparece no documento e o tipo de correspondência (exata, aproximada ou consolidada). Antes disso, uma tabela de correspondência (CSV) entre os 126 fatores do documento e os 159 do painel precisa ser revisada por você, especialmente os 37 casos ambíguos ou sem correspondente.

Na Etapa 4, app.js passa a ler a estrutura de METODOLOGIA e o diagnóstico do território ativo. O popup exibe o diagnóstico situacional como conteúdo principal e mantém a descrição em linguagem simples como referência secundária. Quando não houver diagnóstico, informa explicitamente a ausência. O popup é ampliado e o texto alinhado à esquerda.

Na Etapa 5, um arquivo territorios/indice.js lista os territórios disponíveis, o cabeçalho recebe um seletor e o território escolhido é carregado por inserção dinâmica de script, compatível com file://. O parâmetro de URL ?territorio=campo-grande-ms permite compartilhar o link de cada localidade, e os cards indicam quais fatores possuem diagnóstico.

Na Etapa 6, um script de validação em Node verifica unicidade de identificadores, existência dos ícones, chaves de diagnóstico válidas e fidelidade textual ao .docx, e testes em navegador (Playwright) percorrem os seis eixos, todos os popups e a troca de território, em servidor local e em file://.

Na Etapa 7, LEIA-ME.txt é atualizado e um guia ADICIONAR-TERRITORIO acompanha um modelo de arquivo territorial vazio.

Arquivos a modificar: index.html, app.js, style.css, LEIA-ME.txt. Arquivo a substituir: data.js. Arquivos novos: metodologia/metodologia.js, territorios/indice.js, territorios/campo-grande-ms.js, tabela de correspondência, scripts de teste e guia de manutenção. Arquivos a remover do repositório, mediante sua confirmação: aplicacao-6-eixos-standalone.zip e os sete SVGs avulsos.
