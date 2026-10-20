# Etapa 5. Seleção e carregamento de territórios

## Entradas utilizadas

A etapa partiu do código produzido na Etapa 4, com os ajustes do popup de 20/10/2026, do cadastro metodológico (metodologia/metodologia.js, Matriz de Fatores v1.0.2, 6 eixos e 150 fatores), do arquivo de dados de Campo Grande/MS (territorios/campo-grande-ms.js, 150 diagnósticos) e do índice de territórios criado na Etapa 4 (territorios/indice.js), que nesta etapa foi convertido em cadastro centralizado das localidades.

## Arquitetura de carregamento no ambiente de publicação

O painel é publicado como site estático no GitHub Pages e também é distribuído para uso direto do computador (ABRIR.bat e ABRIR.command, protocolo file://). Nesse segundo ambiente, o navegador bloqueia a leitura de arquivos locais por fetch ou XMLHttpRequest, de modo que o carregamento de dados por requisição JSON funcionaria apenas no servidor. Por isso foi mantida a técnica adotada na Etapa 4: cada arquivo de território é um script que registra seus dados em window.TERRITORIOS e é inserido dinamicamente quando a localidade é selecionada. A técnica foi verificada nos dois ambientes, com o painel servido no subcaminho /fatores/, como no endereço publicado, e com nomes de arquivo conferidos quanto a maiúsculas e minúsculas, já que o GitHub Pages as distingue.

## Cadastro das localidades (territorios/indice.js)

Cada localidade tem identificador único (minúsculas, números e hífens), rótulo exibido, tipo, UF, situação e caminho do arquivo de dados. A situação admite três valores. Diagnostico indica localidade com arquivo de dados. Sem-diagnostico indica localidade cadastrada que ainda não tem diagnóstico, com arquivo nulo, e o painel informa a ausência. Simulado identifica dados fictícios de teste, que não podem constar do cadastro publicado. O cadastro publicado contém apenas Campo Grande/MS, território padrão, porque não há outra localidade com diagnóstico real disponível e a regra da etapa veda a criação de dados fictícios para territórios reais.

A aplicação confere o cadastro ao iniciar (formato e unicidade dos identificadores, campos obrigatórios, coerência entre situação e arquivo, existência do território padrão) e exclui do seletor entradas inválidas, registrando o problema no console. O novo validador testes/validar-cadastro-territorios.js faz a mesma conferência antes da publicação e verifica também que cada arquivo existe com a grafia exata, registra somente o próprio identificador, usa o mesmo rótulo do cadastro e não está marcado como simulado.

## Seletor e atualização dos diagnósticos (index.html, app.js, style.css)

O cabeçalho recebeu um campo Território com lista de seleção, preenchida a partir do cadastro e com os rótulos ali registrados. Localidades sem diagnóstico aparecem com a indicação sem diagnóstico, e entradas simuladas, quando presentes em ambiente de teste, com a indicação dados simulados. Abaixo do seletor, a faixa de status identifica o território ativo e exibe os selos território de exemplo, sem diagnóstico cadastrado ou dados simulados, não é diagnóstico real.

A seleção de uma localidade não recria a roda, os eixos nem os cards de fatores, que continuam montados a partir da metodologia. Muda apenas a fonte dos diagnósticos consultados pelo popup. O endereço é atualizado com o parâmetro territorio, o que permite compartilhar o link de uma localidade e reabri-la diretamente. Um território inexistente no endereço gera mensagem de erro e uma opção provisória Selecione um território, sem carregar dados de outra localidade.

As salvaguardas contra mistura de dados são as seguintes:
- os dados da localidade anterior deixam de ser usados no momento da troca, antes do novo carregamento;
- cada carregamento começa com window.TERRITORIOS vazio e só aceita o arquivo que registra exatamente o identificador solicitado;
- respostas de carregamentos anteriores são descartadas, o que impede que uma troca rápida de seleção apresente os dados da localidade escolhida antes;
- dados já validados ficam em cache interno por identificador, sem acesso por outras localidades;
- falhas de carregamento, arquivo com dados de outro território e tempo excedido resultam em aviso, nunca em substituição pelo território padrão.

No popup, a localidade sem diagnóstico exibe a mensagem [localidade] ainda não possui diagnóstico situacional cadastrado na plataforma, e o fator sem diagnóstico numa localidade com dados parciais mantém o aviso da Etapa 4. Nesses casos e nas falhas, o popup mantém a apresentação metodológica (ícones e selo ODS), reservando o modo de diagnóstico para localidades com dados carregados. Em telas de até 480 pixels, o seletor ocupa a largura disponível.

## Dados simulados para teste

O segundo território usado nos testes é o arquivo testes/dados-simulados/simulado-teste.js, identificado no cabeçalho do arquivo, nos metadados (situacao.simulado verdadeiro) e em cada texto como dados simulados, com rótulo Território simulado (teste). Contém textos fictícios para 12 fatores, dois por eixo, o que permite testar também o aviso de fator sem diagnóstico. O arquivo é copiado apenas para a cópia temporária usada pelo teste e não integra o cadastro publicado.

## Instruções para cadastrar outra localidade

O procedimento foi incluído na seção CADASTRAR OUTRA LOCALIDADE do LEIA-ME.txt, com modelos dos arquivos de metadados e de fontes em territorios/modelos/. Em síntese, uma localidade sem diagnóstico é cadastrada com uma única entrada em territorios/indice.js. Uma localidade com diagnóstico exige o documento .docx no formato padrão, o preenchimento do arquivo de metadados, a geração do arquivo de dados pelo gerador da Etapa 3, a inclusão no cadastro e a execução dos validadores. Nenhum desses passos altera index.html, app.js ou style.css. O detalhamento e o teste completo do procedimento com um segundo documento são objeto da Etapa 7.

## Resultado dos testes

O registro completo está em relatorios/etapa5-resultado-testes.txt.

- Teste do seletor (testes/testar-seletor-territorios.js): 36 verificações aprovadas, 18 por file:// e 18 por servidor http no subcaminho /fatores/. A cópia de teste teve cinco entradas no cadastro: Campo Grande/MS, território simulado, localidade sem diagnóstico, localidade com arquivo ausente e localidade cujo arquivo registra outro território. Foram verificados a lista do seletor com os nomes do cadastro, a seleção de cada entrada, a atualização do nome no cabeçalho e no popup, os diagnósticos idênticos aos dados da localidade selecionada, a igualdade dos 6 eixos e 150 fatores (títulos, focos, identificadores, nomes, selos e ícones) entre territórios, os avisos de fator e de localidade sem diagnóstico, as duas falhas de carregamento sem exibição de dados de outra localidade, o retorno a Campo Grande/MS, a troca rápida de seleção, a abertura pelo endereço, o território inexistente no endereço seguido de seleção válida e o uso em tela de 390 pixels.
- Controles por mutação: duas cópias receberam defeitos introduzidos de propósito. A primeira aceitava respostas de carregamentos anteriores, e o teste acusou a mistura na troca rápida. A segunda substituía uma falha de carregamento pelos dados de Campo Grande/MS, e o teste acusou a substituição.
- Regressão da Etapa 4: navegação completa com 150 popups e diagnósticos idênticos aos dados, por file:// e por http em /fatores/, sem falhas, erros de console ou respostas com erro; 16 de 16 cenários de falha e ausência aprovados.
- Validadores: cadastro de territórios sem erros, metodologia conferida com a planilha nas 1.200 células, arquivo de Campo Grande/MS íntegro e 150 diagnósticos idênticos ao documento-fonte. Nenhum trecho de diagnóstico aparece em index.html, app.js, style.css ou indice.js.
- O validador do cadastro foi testado numa cópia com entradas inválidas e acusou território simulado no cadastro, rótulo divergente do arquivo e identificador fora do formato.

## Pendências

1. Publicação: os arquivos desta etapa e das anteriores ainda não foram enviados ao repositório fernandamachiner/fatores. A configuração do GitHub Pages no repositório e o funcionamento no endereço publicado só poderão ser conferidos após o envio.
2. Segunda localidade real: o seletor publicado exibirá apenas Campo Grande/MS até que outra localidade seja cadastrada, com ou sem diagnóstico. A coordenação pode cadastrar desde já localidades previstas com a situação sem-diagnostico.
3. Rótulos longos: em telas estreitas, rótulos extensos são truncados dentro da lista de seleção. Recomenda-se rótulos curtos no padrão Localidade/UF.
4. Conteúdo territorial além dos fatores (contradição central e foco de cada eixo, resumo executivo, síntese estratégica) segue sem exibição, conforme registrado na Etapa 4.
