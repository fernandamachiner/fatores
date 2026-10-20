# Etapa 4. Adaptação da aplicação para múltiplos territórios

## Entradas utilizadas

A etapa partiu do código-fonte versionado no repositório do painel, do cadastro metodológico (metodologia/metodologia.js, Matriz de Fatores v1.0.2), do arquivo de dados de Campo Grande/MS produzido na Etapa 3 (territorios/campo-grande-ms.js, gerado do diagnóstico ajustado em 20/10/2026) e do relatório da Etapa 1. A auditoria havia identificado a função abrirPopup, em app.js, como o único ponto em que o texto do fator era apresentado (fator.definicao, no elemento popup-descricao). Havia identificado também a necessidade de manter o carregamento por script, para que o painel continue abrindo sem servidor.

## Alterações

### Índice de territórios (territorios/indice.js, novo)

O arquivo lista os territórios disponíveis (id, rótulo e caminho do arquivo de dados) e define o território padrão, Campo Grande/MS. O território ativo é o padrão ou o indicado no endereço (index.html?territorio=campo-grande-ms). O índice é o único ponto de cadastro de um novo território na interface, e o seletor da Etapa 5 vai usá-lo.

### Carregamento do território ativo (app.js)

Na inicialização, o painel monta a roda e os fatores a partir do cadastro metodológico, como antes, e carrega o arquivo de dados do território ativo por uma tag script inserida dinamicamente. A técnica não exige servidor nem dependências e funciona tanto pelo GitHub Pages quanto abrindo o index.html direto do computador.

O território só é considerado pronto se o arquivo carregado registrar exatamente o identificador solicitado. São tratados como erro, com mensagem na faixa do cabeçalho:
- território não cadastrado no índice;
- falha de carregamento do arquivo;
- arquivo que não contém o território solicitado;
- tempo de carregamento excedido.

Em nenhum desses casos o painel exibe dados de outro território, e Campo Grande/MS não é usado como alternativa. Se o diagnóstico foi organizado por versão da matriz diferente da usada pelo painel, um alerta é exibido junto ao nome do território.

### Apresentação do fator (app.js, index.html e style.css)

A função abrirPopup passou a delegar a mostrarFator, que localiza o fator pelo identificador no cadastro e o diagnóstico pelo mesmo identificador nos dados do território ativo. O popup mantém os elementos metodológicos (os três ícones de resiliência, vulnerabilidade e ameaça, o selo ODS e o nome), e o lugar da antiga descrição em linguagem simples passou a ser ocupado pelos seguintes elementos:

- definição de referência do cadastro, em linha discreta acima do diagnóstico, como no documento de diagnóstico;
- rótulo Diagnóstico situacional seguido do nome do território ativo, para que o leitor saiba sempre a que localidade o texto se refere;
- texto integral do diagnóstico, preservando a divisão em parágrafos;
- fontes citadas no texto e referências normativas;
- fatores relacionados citados no texto, como botões na cor do respectivo eixo, que abrem o fator no próprio popup. Um botão de retorno leva de volta ao fator anterior.

Quando o fator não tem diagnóstico no território ativo, o popup informa: Não há diagnóstico situacional cadastrado para este fator em [território]. Nenhum texto substituto é usado. Enquanto o território carrega, ou se o carregamento falhou, o popup informa a situação no lugar do texto.

Todos os textos são inseridos como texto puro (textContent), sem interpretação de HTML. O popup foi ampliado de 420 para 680 pixels, e o texto do diagnóstico ficou alinhado à esquerda para leitura de textos longos. A identidade visual foi mantida (cores dos eixos, selos, ícones, tipografia e marca d'água). O cabeçalho ganhou uma faixa com o território ativo e o selo território de exemplo, cujo aviso aparece ao passar o mouse. O texto do quadro Como usar este guia foi ajustado para mencionar o diagnóstico do território.

### Publicação (.nojekyll, novo)

O repositório publicado (fernandamachiner/fatores, público, branch main) é servido pelo GitHub Pages com o processamento padrão do Jekyll. O arquivo vazio .nojekyll faz o Pages servir os arquivos exatamente como estão, sem esse processamento, que é o recomendado para aplicações estáticas. Assim, os relatórios .md não são convertidos e arquivos futuros com nome iniciado por sublinhado não são omitidos.

### Testes

O teste de navegação (testes/testar-navegacao.js) passou a aguardar o carregamento do território. Em cada um dos 150 popups, ele confere que o diagnóstico, as fontes e os fatores relacionados exibidos são idênticos aos do arquivo de dados. Também passou a registrar respostas com erro do servidor, como o 404 por caminho ou caixa de letra incorreta, e não apenas falhas de conexão.

O novo testes/testar-falhas-territorio.js cria, numa cópia temporária, territórios fictícios de teste e verifica os cenários de falha e de ausência. O validador da metodologia passou a exigir a ordem metodologia.js, indice.js e app.js no index.html. O validador do território passou a exigir que o território esteja no índice com o caminho correto.

## Comportamento verificado

Ao selecionar um fator, a aplicação:
1. identifica o fator pelo identificador do card;
2. consulta os dados do território ativo;
3. localiza o diagnóstico pelo mesmo identificador;
4. exibe o texto integral, as fontes e os fatores relacionados;
5. informa a ausência de diagnóstico, quando for o caso;
6. permite voltar ao fator anterior e fechar o popup pelo botão, por clique fora ou pela tecla Esc.

A navegação entre eixos e fatores é a mesma da versão original.

## Resultado dos testes

O registro completo está em relatorios/etapa4-resultado-testes.txt.

- **Navegação completa:** testada abrindo direto do computador e por servidor http, com o painel no subcaminho /fatores/, como no endereço publicado. O teste percorreu os 6 eixos, abriu e fechou os 150 popups pelas três formas de fechamento e conferiu que os 150 diagnósticos exibidos são idênticos aos dados, assim como as fontes e os fatores relacionados. Não houve falha, erro de console, falha de conexão nem resposta com erro do servidor.
- **Cenários de falha e ausência:** as 16 verificações foram aprovadas (8 cenários, pelas duas formas de abertura). São eles: território não cadastrado, arquivo de dados ausente, arquivo com dados de outro território, fator com diagnóstico em território parcial, fator sem diagnóstico sem texto substituto, alerta de versão divergente, território padrão carregado e navegação por fator relacionado com retorno.
- **Controles por mutação:** para comprovar que o teste detecta os comportamentos proibidos, cópias do painel receberam dois defeitos introduzidos de propósito. Uma usava o texto de outro fator quando faltava diagnóstico; outra carregava o território padrão quando o solicitado não existia. O teste falhou nos dois casos, como esperado.
- **Textos na interface:** nenhum trecho dos 150 diagnósticos aparece em index.html, app.js, style.css ou indice.js. Os textos vêm exclusivamente do arquivo do território.
- **Celular:** em tela de 390 pixels, o popup do diagnóstico mais longo (E2-F05) ocupa 350 pixels, sem rolagem horizontal, e o texto integral é acessível por rolagem.
- **Validadores:** o cadastro confere com a planilha nas 1.200 células, o arquivo do território está íntegro e os 150 textos permanecem idênticos ao documento-fonte.

## Compatibilidade com o GitHub Pages

O que foi verificado:
- caminhos relativos;
- funcionamento num subcaminho, como /fatores/;
- servidor com distinção entre maiúsculas e minúsculas, sem nenhuma resposta 404;
- ausência de arquivos ou pastas iniciados por ponto ou sublinhado que o Jekyll omitiria (além do .nojekyll e do .gitignore);
- ausência de marcações Liquid nos arquivos .md e .html;
- tamanho total compatível com os limites do serviço (cerca de 18 MB).

O que não foi verificado: a configuração de publicação no repositório (branch e pasta de origem do Pages), que não está acessível sem permissão no repositório. A página pública do repositório indica o branch main e não mostra workflow próprio de publicação. A publicação efetiva depende de enviar os arquivos ao repositório e conferir o endereço publicado depois do envio.

## Pendências

1. **Publicação:** os arquivos ainda não foram enviados ao repositório fernandamachiner/fatores. No envio, é preciso:
   - incluir o .nojekyll e as pastas metodologia, territorios, testes e relatorios;
   - remover do repositório o data.js e o aplicacao-6-eixos-standalone.zip, que não são mais usados;
   - depois, abrir o endereço publicado e conferir um eixo e um fator.
2. **Seletor de territórios:** a escolha do território ainda só é possível pelo endereço. O seletor visual é o objeto da Etapa 5.
3. **Conteúdo territorial além dos fatores:** o arquivo de Campo Grande/MS também traz contradição central e foco pedagógico de cada eixo, resumo executivo, síntese estratégica (nós críticos, potencialidades e matriz de prioridades) e notas metodológicas, que a interface ainda não exibe. Cabe decidir se e onde exibi-los.
4. **Definição de referência no popup:** foi mantida como linha discreta acima do diagnóstico, como no documento. Se a coordenação preferir apenas o diagnóstico, a retirada é uma alteração de uma linha.
5. **Redação do documento-fonte:** permanecem os dois pontos de redação registrados na Etapa 3 (E2-F01 e E2-F26). A correção deve ser feita no documento, com nova geração do arquivo do território.
