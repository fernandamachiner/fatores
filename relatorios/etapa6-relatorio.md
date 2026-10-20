# Etapa 6. Testes e validação da plataforma territorial

## Escopo e entradas

A auditoria foi executada em 20/10/2026 sobre o ramo etapa-6-validacao, criado a partir do main do repositório fernandamachiner/fatores depois da incorporação do pedido nº 1 (commit ea49544, Etapas 2 a 5). As entradas foram:
- o código da aplicação (index.html, app.js, style.css);
- o cadastro metodológico (metodologia/metodologia.js, Matriz de Fatores v1.0.2) e a planilha oficial de que ele é gerado;
- o cadastro de territórios e o arquivo de Campo Grande/MS, único território com dados;
- o documento de diagnóstico situacional de Campo Grande/MS (territorios/fontes/Diagnostico_Situacional_CampoGrande_MS_Matriz_v1.0.2.docx), lido diretamente do XML do Word, de forma independente do gerador;
- a versão publicada antes da adaptação (commit 32b0599, data.js com 159 fatores), usada como estrutura original de comparação.

Além dos testes das etapas anteriores, foram criados dois instrumentos de auditoria:
- testes/auditoria_conteudo.py cobre os blocos A e B, com evidências em relatorios/etapa6-auditoria-conteudo.json;
- testes/auditoria-interface.js cobre os blocos C e D: referências a arquivos, compatibilidade com o GitHub Pages, decodificação dos 592 ícones, sete tamanhos de tela, navegação por teclado e regras automáticas de acessibilidade WCAG 2.1 A/AA (axe-core). As evidências estão em relatorios/etapa6-auditoria-interface.json.

O site publicado foi auditado no próprio endereço https://fernandamachiner.github.io/fatores/, por navegador. O registro integral das execuções está em relatorios/etapa6-resultado-testes.txt.

Nenhum diagnóstico foi alterado. As inconsistências metodológicas e de conteúdo foram registradas, sem correção por suposição.

## Síntese

A aplicação apresenta corretamente os 6 eixos e os 150 fatores. Ela carrega os dados do território selecionado e permite navegar pelos 150 diagnósticos sem perda de conteúdo, tanto na cópia local quanto no endereço publicado. Os testes reprovaram quatro itens:
- retorno do foco ao fechar o popup;
- foco que escapava do popup aberto;
- contraste dos códigos dos fatores relacionados;
- requisição de ícone da página inexistente.

Os quatro foram corrigidos e retestados. Permanece reprovado o contraste do texto branco sobre as cores dos Eixos 1, 4 e 6, que depende de decisão sobre a identidade visual. Os demais itens pendentes são de conteúdo ou de metodologia e já tinham decisão registrada, ou dependem da coordenação.

## A. Validação metodológica

| Teste | Resultado observado | Situação | Problema | Correção recomendada | Evidência |
|---|---|---|---|---|---|
| A1 Presença dos seis eixos | 6 eixos no cadastro, na planilha e na roda SVG, com títulos, cores e contagens coincidentes | aprovado | nenhum | nenhuma | auditoria-conteudo A1; validar-metodologia |
| A2 Conferência de todos os fatores | 150 fatores no cadastro e na planilha; 1.200 células (nome, definição, ícone, ODS, eixo, ID e ordem) idênticas | aprovado | nenhum | nenhuma | conferir_metodologia_planilha: 0 divergências |
| A3 Nomes comparados com a estrutura original | a versão original tinha 159 fatores e a atual tem 150. Há 146 nomes coincidentes. Dos 13 nomes exclusivos da original, 4 diferem da atual apenas na grafia: travessão, barra e Corrupção e o suborno. Os outros 9 correspondem a fatores retirados ou fundidos na Matriz v1.0.2 | aprovado | diferenças decorrem da adoção da planilha final como fonte oficial, por decisão registrada em 19 e 20/10/2026 | nenhuma | auditoria-conteudo A3b (listas completas) |
| A4 Códigos e identificadores | 150 IDs únicos no formato E&lt;eixo&gt;-F&lt;nn&gt;, cada um no próprio eixo. Os 8 números vagos estão registrados como desativados, e nenhum foi reutilizado | aprovado | nenhum | nenhuma | auditoria-conteudo A4; registro.json |
| A5 Duplicações e omissões | nenhum nome, definição ou campo obrigatório repetido ou vazio | aprovado | nenhum | nenhuma | auditoria-conteudo A5 |
| A5 Nomes próximos | 16 pares de nomes semelhantes (por exemplo, E1-F02 Alimentos e E1-F06 Disponibilidade de alimentos) | pendente | possível sobreposição conceitual, mantida em aberto por decisão da coordenação | conferência pela coordenação metodológica | auditoria-conteudo A5 nomes_proximos |
| A5 Ícones compartilhados | 03.09 em E2-F11 e E5-F02; 03.11 em E2-F13 e E2-F14 | pendente | dois pares de fatores com o mesmo ícone, mantidos por decisão de 19/10/2026 | substituir quando o design da Fiocruz entregar os novos ícones | auditoria-conteudo A5 |
| A5 ODS diferente do código do ícone | 27 fatores | pendente | classificação ODS mantida sem definição, por decisão de 19/10/2026 | revisão da classificação pela coordenação | auditoria-conteudo A5 |

## B. Validação dos diagnósticos (Campo Grande/MS)

| Teste | Resultado observado | Situação | Problema | Correção recomendada | Evidência |
|---|---|---|---|---|---|
| B1 Associação entre fator e diagnóstico | 150 diagnósticos, cada um ligado ao ID do cadastro e ao mesmo ID, nome e eixo no documento | aprovado | nenhum | nenhuma | auditoria-conteudo B1; conferir_fidelidade |
| B2 Diagnósticos ausentes | nenhum fator sem diagnóstico e nenhum fator do documento fora dos dados | aprovado | nenhum | nenhuma | auditoria-conteudo B2 |
| B3 Integridade das referências | fontes (77 textos) e normas (16 textos) aparecem literalmente no texto; os fatores relacionados coincidem com os IDs citados em cada texto e existem no cadastro | aprovado | nenhum | nenhuma | auditoria-conteudo B3 |
| B3 Lacunas de informação declaradas | 65 de 150 textos declaram dado a extrair, levantar, verificar ou produzir | pendente | conteúdo do documento-fonte; o painel o exibe como está | completar o documento nas próximas revisões do diagnóstico e gerar de novo o arquivo do território | auditoria-conteudo B3 declaram_lacuna |
| B3 Dados quantitativos sem fonte citada | 8 textos com números ou percentuais sem fonte nomeada: E1-F06, E1-F11, E1-F16, E1-F21, E2-F31, E3-F09, E4-F07, E5-F20 | pendente | rastreabilidade incompleta no documento-fonte | indicar a fonte no documento (por exemplo, a origem dos dados do vendaval de setembro de 2026 em E1-F06, E4-F07 e E5-F20) | auditoria-conteudo B3 |
| B4 Dados quantitativos comparados com o documento | 1.736 ocorrências numéricas (valores, percentuais, anos e números de lei), idênticas fator a fator | aprovado | nenhum | nenhuma | auditoria-conteudo B4 |
| B5 Mistura entre territórios nos dados | o arquivo registra apenas campo-grande-ms; todos os textos vêm do documento de Campo Grande/MS | aprovado | nenhum | nenhuma | auditoria-conteudo B5; testes C6 |
| B5 Dados de outras escalas nos textos | 38 textos citam dados estaduais, 13 nacionais e 2 outras localidades (E2-F05, E4-F06); 4 textos não nomeiam o município (E1-F03, E1-F05, E2-F39, E4-F16) | pendente | trechos do próprio documento, não mistura de arquivos; o leitor precisa distinguir dado municipal de dado estadual ou nacional | explicitar a escala do dado no documento quando não for municipal | auditoria-conteudo B5 |
| B6 Textos truncados | 150 textos idênticos aos parágrafos do documento, todos terminados em pontuação final (de 621 a 1.061 caracteres); no navegador, o texto mais longo (E2-F05) é legível até o fim nos sete tamanhos de tela | aprovado | nenhum | nenhuma | auditoria-conteudo B6; auditoria-interface C9 |
| Redação no documento-fonte | E2-F26 sem espaço após ponto (disponível.A relevância); E2-F01 com enumeração sem conjunção | pendente | erro de digitação no documento, preservado por fidelidade | corrigir no .docx e gerar de novo o arquivo do território | auditoria-conteudo redacao_documento |

## C. Testes funcionais

| Teste | Resultado observado | Situação | Problema | Correção recomendada | Evidência |
|---|---|---|---|---|---|
| C1 a C5 Abrir a aplicação, selecionar os eixos, navegar pelos fatores, abrir e fechar os diagnósticos | 6 eixos, 150 popups abertos e fechados pelas três formas (botão, Esc, clique fora), diagnósticos idênticos aos dados. Sem falhas e sem erros, por file:// e por http em /fatores/ | aprovado | nenhum | nenhuma | testar-navegacao (file e http) |
| C1 a C5 no endereço publicado | 6 eixos, 150 fatores, 150 diagnósticos idênticos aos dados no popup, Matriz v1.0.2, seletor com Campo Grande/MS | aprovado | nenhum | nenhuma | navegador em fernandamachiner.github.io/fatores; etapa6-evidencias/site-publicado-campo-grande.jpg |
| C5 Navegação por teclado | seletor focável; Enter abre eixo e fator; foco vai ao botão fechar; Esc fecha | aprovado | nenhum | nenhuma | auditoria-interface C5 |
| C5 Retorno do foco ao fechar | na primeira execução, o foco não voltava ao card do fator | aprovado após correção | quem navega por teclado ou leitor de tela perdia a posição na lista | corrigido: o foco volta ao elemento que abriu o popup | auditoria-interface C5 (reteste) |
| C5 Foco dentro do popup | na primeira execução, a tecla Tab levava o foco para a página por trás do diálogo | aprovado após correção | diálogo modal sem contenção de foco | corrigido: Tab e Shift+Tab circulam entre os elementos do popup | auditoria-interface C5 (reteste) |
| C6 Alternância entre territórios | seleção de cada entrada do cadastro de teste, atualização do nome, diagnósticos da localidade, eixos e fatores idênticos, retorno a Campo Grande/MS, troca rápida sem mistura, abertura pelo endereço: 36 de 36 | aprovado | nenhum | nenhuma | testar-seletor-territorios; controles por mutação detectados |
| C6 Alternância no endereço publicado | um território inexistente no endereço gera erro sem dados; a seleção de Campo Grande/MS carrega os dados e atualiza o endereço | aprovado | nenhum | nenhuma | navegador no endereço publicado |
| C7 Fatores sem diagnóstico | aviso específico, sem texto substituto de outro fator ou território; localidade sem diagnóstico informada | aprovado | nenhum | nenhuma | testar-falhas-territorio (16 de 16); testar-seletor-territorios |
| C8 Falhas de carregamento | território não cadastrado, arquivo ausente, arquivo de outro território: aviso e nenhum dado exibido | aprovado | nenhum | nenhuma | testar-falhas-territorio; testar-seletor-territorios |
| C9 Tamanhos de tela | 320x568, 360x740, 390x844, 768x1024, 1024x768, 1366x768 e 1920x1080: sem rolagem horizontal; seletor e popup dentro da tela; botão de fechar visível; texto mais longo legível até o fim | aprovado | nenhum | nenhuma | auditoria-interface C9 |
| C9 Alvos de toque | menor botão de eixo com 82 px; botão de fechar com 27 px (referência mínima de 24 px) | aprovado | nenhum | nenhuma | auditoria-interface C9 |

## D. Testes técnicos

| Teste | Resultado observado | Situação | Problema | Correção recomendada | Evidência |
|---|---|---|---|---|---|
| D1 Erros de JavaScript | nenhum erro de script ou de console em todas as páginas abertas, localmente e no endereço publicado | aprovado | nenhum | nenhuma | auditoria-interface D1; console do navegador no endereço publicado |
| D2 Referências a arquivos inexistentes | 8 referências do HTML, do CSS e do cadastro e 592 arquivos de ícone existem com a grafia exata. No site publicado, o navegador pedia /favicon.ico na raiz do domínio (404) | aprovado após correção | requisição automática do ícone da página, sem efeito na navegação | corrigido: index.html declara o ícone da página (logotipo PICAPS) | auditoria-interface D2; navegador no endereço publicado |
| D3 Erros de carregamento de dados | 601 endereços requisitados no subcaminho /fatores/ em servidor sensível a maiúsculas, todos com sucesso; no endereço publicado, metodologia, cadastro e dados de Campo Grande/MS respondem 200 | aprovado | nenhum | nenhuma | auditoria-interface D3; navegador no endereço publicado |
| D4 Compatibilidade com a publicação | publicação pelo branch main sem workflow próprio. A implantação do commit ea49544 no ambiente github-pages foi concluída com sucesso em 20/10/2026, 02:36. .nojekyll presente; 0 nomes ignorados pelo Jekyll; 0 colisões de maiúsculas; 17,9 MB. O data.js e o zip antigo não estão mais no site (404) | aprovado | nenhum | nenhuma | API de implantações do GitHub; auditoria-interface D4 |
| D5 Recursos gráficos | 592 de 592 ícones decodificados localmente e no endereço publicado; logotipo e imagens de fundo carregados; botões, seletor e imagens com nome acessível | aprovado | nenhum | nenhuma | auditoria-interface D5; navegador no endereço publicado |
| D5 Contraste dos códigos dos fatores relacionados | na primeira execução, o texto branco tinha contraste de 2,56 sobre o laranja do Eixo 1 e de 4,17 sobre o verde-azulado do Eixo 6 | aprovado após correção | legibilidade abaixo de 4,5:1 (WCAG 2.1 AA) | corrigido: o fundo do código usa a cor do eixo escurecida apenas o necessário (mínimo de 4,52:1) | auditoria-interface D5 (reteste) |
| D5 Contraste do texto sobre as cores dos eixos | o texto branco do cabeçalho do eixo e dos selos ODS tem contraste de 2,56 no Eixo 1 (#F0871E), 3,32 no Eixo 4 (#4C9F38) e 4,17 no Eixo 6 (#158A8A) | reprovado, não corrigido | legibilidade abaixo de 4,5:1 nesses três eixos; a característica já existia no painel original | decisão da coordenação sobre a identidade visual. As opções são escurecer essas três cores apenas nos fundos com texto, usar texto escuro sobre o laranja e o verde, ou manter e registrar a exceção | auditoria-interface D5 axe-core |

## Correções realizadas nesta etapa

Todas as correções foram feitas no código da interface, sem alterar diagnósticos, metodologia ou cadastro de territórios:
1. **Foco ao fechar:** o foco volta ao elemento que abriu o popup.
2. **Foco no popup aberto:** o foco fica contido no popup enquanto ele está aberto.
3. **Códigos dos fatores relacionados:** o fundo usa a cor do eixo escurecida para alcançar contraste de 4,5:1.
4. **Cabeçalho do eixo:** foi retirada a transparência do rótulo e do foco do eixo, que reduzia o contraste.
5. **Ícone da página:** passou a ser declarado no index.html.

Os testes afetados foram repetidos e aprovados:
- navegação completa;
- seletor;
- falhas e ausências;
- auditoria de interface.

Também foi ajustado o instrumento de auditoria de conteúdo, que passou a ler a estrutura original no commit 32b0599, porque o data.js deixou de existir no main.

## Problemas não resolvidos

1. **Contraste nos Eixos 1, 4 e 6:** o texto branco sobre as cores desses eixos tem contraste insuficiente. Depende de decisão sobre a identidade visual.
2. **Lacunas de informação:** 65 diagnósticos declaram lacuna, 8 apresentam dados quantitativos sem fonte citada e há os erros de redação em E2-F01 e E2-F26. Todos são conteúdo do documento-fonte e devem ser tratados nele, com nova geração do arquivo do território.
3. **Pendências metodológicas com decisão registrada:** nomes próximos entre fatores, ícones compartilhados e classificação ODS de 27 fatores.
4. **Teste com território real:** a alternância foi testada com dados explicitamente simulados, porque o cadastro publicado contém só Campo Grande/MS. O teste com uma segunda localidade real ficará possível quando houver outro diagnóstico.
5. **Publicação das correções:** as correções desta etapa estão no ramo etapa-6-validacao e só chegam ao endereço publicado depois da incorporação ao main.
