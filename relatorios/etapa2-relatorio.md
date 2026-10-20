# Etapa 2. Estrutura metodológica dos fatores territoriais

> Atualização de 19 e 20/10/2026: a metodologia vigente é a Matriz de Fatores v1.0.2, com 150 fatores, definida pela coordenação como versão final. A planilha metodologia/planilha/Fatores_organizacao.xlsx passou a ser a fonte oficial, e o cadastro é gerado a partir dela. Este relatório registra a construção do cadastro intermediário de 159 fatores, cujas versões são citadas aqui como 1.0.0, 1.0.1 e 1.0.2 e não devem ser confundidas com a Matriz de Fatores v1.0.2 vigente. Essas versões intermediárias foram eliminadas. A situação vigente está em relatorios/revisao-metodologia-v1.0.2.md.

## Entradas utilizadas

A etapa partiu do relatório da Etapa 1 (relatorios/etapa1-auditoria-tecnica.md), do código-fonte de eixo-fatores-diagnostico-main.zip, versão confirmada como idêntica à publicada, e do data.js como referência metodológica. A planilha Fatores_organização_Fernanda.xlsx, citada no LEIA-ME original como fonte do data.js, não estava disponível (pendência P7). O estado original foi registrado em um repositório git local antes de qualquer alteração, o que garante a rastreabilidade de cada mudança.

## Decisões da coordenação metodológica

Em 19/10/2026 foram decididos os pontos a seguir, registrados no próprio cadastro. A matriz de 159 fatores do painel é a estrutura oficial, e o diagnóstico de Campo Grande/MS, organizado em 126 fatores, será vinculado a ela por tabela de correspondência na Etapa 3. Os ícones compartilhados permanecem até a entrega dos novos ícones pela equipe de design da Fiocruz. A descrição de E2-F37 Sirenes e alertas de emergências foi substituída, o que levou o cadastro à versão 1.0.1. Na versão 1.0.2 foram corrigidos os erros de redação apontados na revisão, com exceção do termo ensino primário, mantido por decisão da coordenação, e a descrição de E1-F11 Iniciativas de economia solidária foi substituída. Ao todo, 31 campos de 30 fatores foram alterados por 32 registros autorizados, já que a descrição de E1-F14 recebeu duas correções sucessivas. A rolagem horizontal do rodapé em celulares também foi corrigida no style.css.

O cadastro passou a ter dois campos de governança. O campo decisoes guarda deliberações que não alteram valores. O campo alteracoes guarda cada mudança de valor com o identificador do fator, o campo alterado, o valor anterior, o valor novo, a data e a autorização. O validador reaplica o histórico sobre o data.js original, campo a campo e na ordem registrada. Cada alteração precisa partir exatamente do valor deixado pela anterior, e o resultado precisa coincidir com o cadastro. Qualquer diferença sem registro, histórico fora de sequência ou registro para campo inexistente é tratado como erro.

## Estrutura criada

O cadastro central é metodologia/metodologia.js, que registra o objeto global window.METODOLOGIA. O formato JavaScript, e não JSON, foi mantido porque preserva o carregamento por tag script e, com isso, a abertura direta do index.html sem servidor e sem internet, conforme o risco apontado na Etapa 1. Nenhuma tecnologia nova foi introduzida.

O objeto contém nome, versão (1.0.0), origem, regra de formação dos identificadores e a lista de eixos. Cada eixo mantém titulo, foco, cor e ordem do original e recebe dois campos: id, no formato E1 a E6, e id_original, que preserva o rótulo Eixo 1 a Eixo 6. Cada fator mantém fator, icone, ods, nome_ods e definicao com os valores originais, sem nenhuma alteração, e recebe dois campos: id e ordem.

O identificador estável do fator segue o formato E<ordem do eixo>-F<posição do fator no eixo, com dois dígitos>, por exemplo E2-F07 para Dengue. A criação de um identificador novo foi necessária porque o código do ícone, único código preexistente, não identifica o fator de forma unívoca (03.09 e 03.11 são compartilhados por dois fatores cada). O código do ícone foi preservado no campo icone e continua determinando as imagens exibidas. A regra de manutenção, registrada no próprio arquivo e no LEIA-ME, é que o id nunca muda, nunca é reaproveitado e, para fatores novos, assume o próximo número livre do eixo. O prefixo F distingue esses identificadores dos códigos E1-20 usados no documento de diagnóstico, que pertencem a outra numeração.

O cadastro contém apenas campos metodológicos. O validador rejeita qualquer campo adicional no fator, o que impede a inclusão de diagnósticos territoriais nesse arquivo.

## Alterações na aplicação

| Arquivo | Alteração |
|---|---|
| metodologia/metodologia.js | Novo. Cadastro central com 6 eixos e 159 fatores |
| index.html | A tag script de data.js foi substituída por metodologia/metodologia.js. Nenhuma outra linha foi alterada |
| app.js | Passa a ler window.METODOLOGIA.eixos. A posição de cada eixo na roda passou a ser obtida pela ordem metodológica do eixo, e não pela posição na lista. Os botões de eixo recebem data-eixo-id e os cards de fator recebem data-fator-id, ponto de ligação com os diagnósticos da Etapa 4 |
| data.js | Removido. O conteúdo integral está em metodologia.js, e a versão original permanece no histórico do git |
| LEIA-ME.txt | Seções de conteúdo e de atualização ajustadas ao novo arquivo, com as regras de identificadores |
| style.css | Correção da rolagem horizontal do rodapé em telas de até 480 px (versão 1.0.2) |
| testes/validar-metodologia.js | Novo. Validação de integridade e comparação com o original |
| testes/testar-navegacao.js | Novo. Teste de navegação em navegador real |
| relatorios/ | Relatórios das Etapas 1 e 2, tabela de correspondência e resultado dos testes |

As imagens em assets e os atalhos ABRIR.bat e ABRIR.command não foram alterados. O style.css recebeu apenas a correção do rodapé em celulares, na versão 1.0.2.

## Correspondência com a estrutura original

| Eixo | id | Título preservado | Fatores no original | Fatores no cadastro | Identificadores |
|---|---|---|---|---|---|
| Eixo 1 | E1 | O Suor que não nos Sustenta | 29 | 29 | E1-F01 a E1-F29 |
| Eixo 2 | E2 | A Vida em Risco | 39 | 39 | E2-F01 a E2-F39 |
| Eixo 3 | E3 | Nossos Corpos Silenciados | 19 | 19 | E3-F01 a E3-F19 |
| Eixo 4 | E4 | A Terra de Quem? | 25 | 25 | E4-F01 a E4-F25 |
| Eixo 5 | E5 | A Cidade Negada | 31 | 31 | E5-F01 a E5-F31 |
| Eixo 6 | E6 | A Voz na Mesa | 16 | 16 | E6-F01 a E6-F16 |
| Total | | | 159 | 159 | 159 identificadores únicos |

A correspondência fator a fator, com identificador, eixo original, posição original, nome, código de ícone, ODS e rótulo ODS, está em relatorios/etapa2-correspondencia-fatores.csv (separador ponto e vírgula, codificação UTF-8, abre diretamente no Excel).

## Testes executados

A validação do cadastro (testes/validar-metodologia.js) aprovou as dez verificações. Confirmou 6 eixos na ordem 1 a 6 e 159 fatores com identificador único e no formato previsto, sem nomes repetidos. Também confirmou as quatro variantes de ícone para todos os fatores, a coerência entre número e rótulo ODS, a coincidência de cores e títulos dos eixos com a roda SVG do index.html e o carregamento do cadastro antes do app.js. Na comparação com o data.js original, 824 dos 825 campos (5 por eixo e 5 por fator) estão idênticos e na mesma ordem, e o único campo diferente é a descrição de E2-F37, aceita por constar do histórico de alterações autorizadas. Um teste de controle com uma correção não registrada (Valorizarização) foi rejeitado pelo validador. Os dois avisos emitidos referem-se aos ícones compartilhados (pendência P2).

Para verificar que o validador de fato detecta falhas, foi executado um teste negativo em uma cópia do projeto com quatro erros introduzidos de propósito: identificador repetido, código de ícone inexistente, cor de eixo alterada e nome de fator alterado. O validador acusou os quatro erros e encerrou com código de falha.

O teste de navegação (testes/testar-navegacao.js, Playwright com Chromium) foi executado na versão original e na nova. Em cada execução, o teste aplica o hover nos seis eixos, abre cada eixo, percorre os 159 cards e abre e fecha os 159 popups, alternando as três formas de fechamento. Também usa o botão de retorno e confere o empilhamento das colunas em tela de celular. Não houve falha, erro de console ou recurso não carregado em nenhuma das três execuções: versão original por file://, versão nova por file:// e versão nova por servidor http. O registro completo do que a interface exibiu inclui aria-label dos eixos, cabeçalho e cor de cada eixo, nome, selo ODS e ícone de cada card, título, rótulo ODS, descrição, três ícones e textos alternativos de cada popup. Na versão 1.0.0, esse registro foi idêntico ao da versão original nas duas formas de abertura. Na versão 1.0.1, a única diferença registrada na interface é a nova descrição exibida no popup de Sirenes e alertas de emergências. A navegação original foi preservada integralmente.

O teste também registrou um defeito preexistente, presente na versão publicada: em tela de 390 px, o cartão de princípios do rodapé provoca rolagem horizontal. O defeito não foi corrigido nesta etapa e está listado entre as pendências técnicas.

Os resultados completos estão em relatorios/etapa2-resultado-testes.txt.

## Como repetir os testes

Na pasta do painel, com Node.js instalado:

    node testes/validar-metodologia.js
    npm install playwright && npx playwright install chromium
    node testes/testar-navegacao.js index.html resultado.json

## Pendências

As pendências metodológicas estão em relatorios/etapa2-pendencias-metodologicas.md. P1 e P2 foram decididas, e P3, P6 e P6a foram corrigidas. Seguem abertas P4 (fatores com possível sobreposição, a tratar na tabela de correspondência da Etapa 3), P5 (classificação ODS de 27 fatores) e P7 (planilha de origem).
