# Manual de cadastro de territórios

Plataforma de diagnóstico situacional territorial - 6 Eixos Estratégicos (PICAPS)

Este manual explica como incluir um novo município, comunidade ou outra localidade no painel publicado em https://fernandamachiner.github.io/fatores/. A inclusão não exige programação: os seis eixos e os 150 fatores são os mesmos para todos os territórios e ficam num cadastro único. Cada nova localidade entra com os próprios arquivos de dados e com uma linha no cadastro de territórios.

Documentos complementares:
- docs/formato-dados-territoriais.md: formato de cada arquivo, campo por campo;
- docs/checklist-validacao.md: lista de conferência antes da publicação;
- territorios/modelos/: modelos para copiar e preencher;
- testes/exemplo-simulado/: um território demonstrativo completo, com dados simulados.

## 1. Como a plataforma está organizada

A plataforma separa três camadas, cada uma com uma pasta própria.

A metodologia fica na pasta metodologia/ e é a mesma para todos os territórios. Ela contém os 6 eixos e os 150 fatores, cada um com identificador (por exemplo, E2-F07), nome, ícone, ODS e definição de referência. A fonte oficial é a planilha metodologia/planilha/Fatores_organizacao.xlsx, e o painel usa o arquivo metodologia/metodologia.js, gerado a partir dela.

Os dados de cada território ficam na pasta territorios/. Cada localidade tem um documento de diagnóstico em Word (.docx), dois arquivos curtos de configuração e um arquivo de dados gerado automaticamente a partir do documento.

A interface (index.html, app.js e style.css) monta a roda dos eixos e os cartões dos fatores a partir da metodologia. Ela lê os diagnósticos do território escolhido no seletor e é a mesma para todos os territórios.

O diagnóstico se liga ao fator pelo identificador. Por isso o documento de cada território precisa usar exatamente os identificadores, nomes, ODS e definições da metodologia vigente. O modelo de documento já vem preenchido com essas informações.

## 2. Arquivos necessários para uma nova localidade

Para um território identificado como dourados-ms, por exemplo:

| Arquivo | O que é | Quem produz |
|---|---|---|
| territorios/fontes/Diagnostico_Dourados_MS.docx | documento de diagnóstico, escrito a partir do modelo | equipe do território |
| territorios/correspondencias/dourados-ms.meta.json | identificação da localidade e do documento | equipe, a partir do modelo |
| territorios/correspondencias/dourados-ms.fontes.json | fontes e normas citadas em cada fator | equipe, a partir do modelo (pode começar vazio) |
| territorios/dourados-ms.js | arquivo de dados lido pelo painel | gerado automaticamente; não se edita à mão |
| territorios/indice.js | cadastro de todas as localidades do seletor | acrescenta-se uma entrada |

Uma localidade que ainda não tem diagnóstico precisa apenas da entrada no cadastro (seção 8).

## 3. Escolher o identificador da localidade

O identificador aparece no nome dos arquivos e no endereço do painel (por exemplo, ...github.io/fatores/?territorio=dourados-ms). Regras:
- usar apenas letras minúsculas sem acento, números e hífens;
- para municípios, usar o padrão nome-uf (dourados-ms, ponta-pora-ms);
- para comunidades, incluir o município (aldeia-jaguapiru-dourados-ms);
- não mudar depois de publicado, porque os links compartilhados deixariam de funcionar.

O rótulo é o nome que aparece no seletor, com acentos e maiúsculas (Dourados/MS). Convém mantê-lo curto, porque em celulares rótulos longos são cortados.

## 4. Escrever o diagnóstico no modelo

1. Copie o arquivo territorios/modelos/modelo-diagnostico.docx e renomeie a cópia, por exemplo Diagnostico_Dourados_MS.docx. Evite espaços e acentos no nome do arquivo.
2. Abra no Word, no LibreOffice ou no Google Docs (neste caso, baixe depois como .docx).
3. O modelo já traz, para cada fator, uma tabela com identificador, nome e ODS e a linha Definição de referência. Não altere essas tabelas nem essas linhas: o gerador compara cada uma com a metodologia e recusa o documento se houver diferença.
4. Abaixo da definição de cada fator, substitua a linha laranja que começa por [PREENCHER pelo diagnóstico daquele fator na localidade. O texto pode ter um ou mais parágrafos.
5. Preencha ou apague as demais linhas [PREENCHER: título da capa, resumo executivo, tabela de abertura de cada eixo (contradição central e foco pedagógico), introdução dos eixos, síntese estratégica e notas metodológicas. Todas essas partes são opcionais.
6. Não mude os títulos dos eixos nem os títulos Resumo executivo, Síntese estratégica e Notas metodológicas e fontes. Eles precisam continuar com o estilo Título 1 do Word. Dentro do resumo executivo, da síntese e das notas, podem ser usados subtítulos com o estilo Título 2.
7. Antes de salvar a versão final, procure no documento (Ctrl+L ou Ctrl+F) por PREENCHER. Não pode restar nenhuma ocorrência.

### Como associar o diagnóstico ao fator

A associação é feita pela posição do texto no documento: tudo o que estiver entre a linha Definição de referência de um fator e a tabela do fator seguinte pertence àquele fator. Não é preciso escrever o identificador no texto. Se o diagnóstico de um fator mencionar outro fator, escreva o identificador do outro entre parênteses, por exemplo (E2-F14). O painel transforma essa menção num botão que leva ao fator relacionado.

### Como indicar fatores sem diagnóstico disponível

Quando não houver informação sobre um fator, escreva como único parágrafo do fator uma destas frases:
- Sem diagnóstico disponível.
- Sem diagnóstico disponível: tema não discutido nas oficinas do território.

O motivo é opcional e aparece no painel junto com o aviso de ausência. Não apague a tabela do fator. Se a tabela for apagada, o fator também aparece no painel como sem diagnóstico, mas sem motivo, e o documento deixa de mostrar à equipe quais fatores faltam.

### Como registrar fontes e períodos de referência

No texto, cite a fonte e o ano de cada dado, por exemplo: Em 2025, foram registrados 1.200 casos (Secretaria Municipal de Saúde). O ano de cada dado é reconhecido automaticamente e guardado como período citado no fator.

O período de referência do diagnóstico como um todo (por exemplo, 2020 a 2026) é informado no arquivo meta.json (seção 5).

Para que as fontes apareçam listadas nos dados do território, registre-as no arquivo fontes.json (seção 6). Esse registro é recomendado, mas não obrigatório. Sem ele, as fontes continuam visíveis no texto do diagnóstico.

### Diagnósticos com lacuna de informação

Quando um dado ainda precisar ser levantado, o texto pode dizer isso, por exemplo: o número de famílias atendidas ainda precisa ser levantado junto à assistência social. O painel exibe o texto como está no documento. A plataforma não completa nem altera diagnósticos.

## 5. Preencher os metadados (meta.json)

1. Copie territorios/modelos/modelo.meta.json para territorios/correspondencias/ com o nome dourados-ms.meta.json (o identificador seguido de .meta.json).
2. Abra num editor de texto simples (Bloco de Notas, TextEdit ou o editor do próprio GitHub). Não use o Word.
3. Substitua todos os trechos entre < >, mantendo as aspas, as vírgulas e as chaves do arquivo.

Campos a preencher:
- territorio.id: o identificador (igual ao nome do arquivo);
- territorio.nome, uf e tipo: nome da localidade, sigla da UF e tipo (município, comunidade, distrito);
- territorio.rotulo: o nome exibido no seletor, igual ao que será usado no cadastro (seção 8);
- situacao.aviso: frase exibida ao passar o mouse sobre o nome do território, por exemplo: Os textos referem-se exclusivamente a Dourados/MS;
- documento_fonte.arquivo: o caminho do .docx, exatamente com as mesmas maiúsculas e acentos do nome do arquivo;
- documento_fonte.titulo, periodo_referencia, responsaveis e data_elaboracao: identificação do documento.

Os campos situacao.status, territorio_de_exemplo, matriz_declarada_no_documento e campos_excluidos_da_abertura_dos_eixos podem ficar como estão no modelo. Em decisoes, registre decisões tomadas sobre o documento, como no arquivo de Campo Grande/MS.

## 6. Registrar fontes e normas (fontes.json)

1. Copie territorios/modelos/modelo.fontes.json para territorios/correspondencias/dourados-ms.fontes.json.
2. Ele pode ficar vazio na primeira versão.

Para registrar fontes, use um destes três campos, sempre copiando o trecho exatamente como aparece no texto:
- parenteses_que_sao_fonte: textos entre parênteses que indicam fonte e podem aparecer em vários fatores, como SES-MS ou Sesau. Em todo fator onde aparecerem entre parênteses, serão registrados como fonte;
- fontes_no_texto: fontes escritas no corpo do texto, por fator, por exemplo "E2-F07": ["boletim municipal"];
- referencias_normativas: leis, decretos e planos citados, por fator, por exemplo "E4-F07": ["Lei Complementar nº 341/2018"].

O arquivo territorios/modelos/exemplo.fontes.json mostra os três usos. O gerador recusa uma fonte ou norma que não apareça literalmente no texto do fator, o que evita registrar referências que o diagnóstico não cita.

## 7. Gerar o arquivo de dados do território

O arquivo territorios/dourados-ms.js é produzido pelo gerador a partir do documento e dos dois arquivos de configuração. Há dois caminhos.

### Caminho A: pelo site do GitHub, sem instalar nada

A verificação automática do repositório gera o arquivo e executa todos os testes quando os arquivos são enviados num pedido de incorporação (seção 10). Nesse caminho, basta enviar o .docx, o meta.json, o fontes.json e a alteração do cadastro.

### Caminho B: no computador

Requisitos: Python 3 com o pacote python-docx (pip install python-docx) e Node.js. Abra um terminal na pasta do painel, a que contém o index.html, e execute:

    python3 territorios/ferramentas/gerar_territorio.py dourados-ms

No Windows, use python em vez de python3. Se tudo estiver certo, o gerador informa quantos diagnósticos foram gerados e quantos fatores ficaram sem diagnóstico. Se houver problema, ele lista os erros (seção 12) e não grava o arquivo.

## 8. Registrar o território no cadastro

Abra territorios/indice.js num editor de texto e acrescente uma entrada dentro da lista territorios, depois da última, separada por vírgula:

    {
      id: "dourados-ms",
      rotulo: "Dourados/MS",
      tipo: "município",
      uf: "MS",
      situacao: "diagnostico",
      arquivo: "territorios/dourados-ms.js"
    }

Regras:
- id e rotulo iguais aos do meta.json;
- arquivo sempre no formato territorios/<id>.js, todo em minúsculas;
- situacao "diagnostico" quando houver arquivo de dados.

Para uma localidade que ainda não tem diagnóstico, use situacao "sem-diagnostico" e arquivo null. O seletor passa a mostrá-la, e o painel informa que ainda não há diagnóstico. Não use a situação "simulado" no cadastro publicado: ela é reservada a testes.

O território padrão, aberto quando o endereço não indica outro, é definido no início do arquivo (padrao: "campo-grande-ms"). Só o altere por decisão da coordenação.

## 9. Validar e testar antes de publicar

No computador (caminho B), execute:

    python3 testes/verificar_territorio.py dourados-ms

O comando executa cinco verificações e mostra OK ou ERRO em cada uma:
1. **Metodologia:** a metodologia está íntegra.
2. **Cadastro:** o cadastro de territórios é válido.
3. **Arquivo de dados:** o arquivo do território está completo e coerente com a metodologia.
4. **Fidelidade:** cada texto é idêntico ao do documento.
5. **Navegador:** os 6 eixos, os 150 fatores e os diagnósticos do território abrem corretamente. O teste no navegador requer o pacote playwright. Sem ele, o passo aparece como NÃO EXECUTADO.

No caminho A, as mesmas verificações e os testes do seletor rodam automaticamente no pedido de incorporação.

Depois, faça a conferência visual da parte C do checklist: abra o index.html com o endereço ?territorio=dourados-ms, ou o link de pré-visualização, e leia alguns diagnósticos.

## 10. Publicar no GitHub Pages

O site é publicado pelo GitHub Pages a partir do branch main do repositório fernandamachiner/fatores. Tudo o que entra no main é publicado em um a dois minutos. Por isso, as alterações entram primeiro num ramo separado e passam por um pedido de incorporação.

Pelo site do GitHub:
1. **Abrir o repositório:** acesse https://github.com/fernandamachiner/fatores, com uma conta que tenha permissão de escrita.
2. **Enviar o documento:** abra a pasta territorios/fontes, clique em Add file e depois em Upload files. Envie o .docx. Em Commit changes, escolha Create a new branch for this commit and start a pull request, dê um nome ao ramo (por exemplo, territorio-dourados-ms) e confirme.
3. **Enviar os demais arquivos:** no mesmo ramo (escolha-o no seletor de branch, no alto da página), envie o meta.json e o fontes.json para territorios/correspondencias.
4. **Atualizar o cadastro:** ainda no mesmo ramo, abra territorios/indice.js, clique no lápis (Edit this file), acrescente a entrada da seção 8 e confirme em Commit changes, mantendo o mesmo ramo.
5. **Acompanhar a verificação:** abra o pedido de incorporação (aba Pull requests) e aguarde a verificação automática Verificar territórios, que leva de 5 a 10 minutos. Ela gera territorios/dourados-ms.js e o grava no próprio ramo.
   - Visto verde: todas as verificações passaram.
   - X vermelho: clique em Details para ver qual passo falhou e a mensagem de erro, corrija o arquivo indicado no mesmo ramo e aguarde nova verificação.
6. **Revisar:** confira na aba Files changed se apenas arquivos do novo território e o indice.js foram alterados (seção 11).
7. **Publicar:** clique em Merge pull request e confirme. O GitHub Pages republica o site.
8. **Acompanhar a publicação:** na aba Actions, aguarde a execução pages build and deployment ficar verde.
9. **Conferir o site:** abra https://fernandamachiner.github.io/fatores/?territorio=dourados-ms. Se aparecer a versão antiga, recarregue a página sem cache (Ctrl+Shift+R).

Pelo computador, com git: crie um ramo, inclua os arquivos (inclusive o territorios/dourados-ms.js gerado), envie o ramo e abra o pedido de incorporação no GitHub. Os passos 5 a 9 são os mesmos.

## 11. Arquivos que podem e que não podem ser alterados

Ao incluir um território, podem ser criados ou alterados:
- territorios/fontes/<documento do território>.docx;
- territorios/correspondencias/<id>.meta.json e <id>.fontes.json;
- territorios/<id>.js, apenas pelo gerador;
- territorios/indice.js, apenas para acrescentar ou atualizar a entrada do território.

Não devem ser alterados ao incluir um território:
- index.html, app.js e style.css: a interface é a mesma para todos os territórios;
- a pasta metodologia/ (planilha, registro.json e metodologia.js): mudanças na metodologia afetam todos os territórios e seguem o procedimento do LEIA-ME.txt, com decisão da coordenação;
- assets/: ícones e imagens;
- arquivos de outros territórios (por exemplo, territorios/campo-grande-ms.js e o documento de Campo Grande/MS);
- territorios/ferramentas/, testes/ e .github/: ferramentas e verificações;
- territorios/modelos/: devem ser copiados, não editados.

Nenhuma alteração adicional de código é necessária para incluir um território, porque a interface lê a lista de localidades do cadastro e carrega o arquivo de dados indicado em cada entrada. Há uma única situação que exige outra mudança: quando a metodologia muda (novo fator, novo nome, nova definição). Nesse caso, o modelo de documento deve ser gerado de novo (python3 territorios/ferramentas/gerar_modelo_documento.py), e os documentos dos territórios já cadastrados precisam ser atualizados e gerados de novo, porque o gerador exige identidade com a metodologia vigente.

## 12. Erros comuns e como resolver

| Mensagem ou sintoma | Causa | Como resolver |
|---|---|---|
| texto de instrução do modelo ainda no documento | sobrou alguma linha [PREENCHER | procure PREENCHER no Word e apague ou substitua a linha |
| E1-F01: nome difere do cadastro | o nome do fator na tabela foi alterado | copie de novo a tabela do fator a partir do modelo atual |
| E1-F01: definição de referência difere do cadastro | a linha Definição de referência foi editada | copie de novo a linha a partir do modelo atual |
| E1-F01: ODS difere do cadastro / está no Eixo N do documento | tabela de fator alterada ou movida para outro eixo | use a tabela do modelo, no eixo correto |
| E6-F01: sem parágrafo de diagnóstico | o fator ficou sem texto | escreva o diagnóstico ou Sem diagnóstico disponível. |
| Sem diagnóstico disponível deve ser o único parágrafo do fator | a frase de ausência foi escrita junto com um texto | deixe só o texto ou só a frase |
| título não previsto no formato | um parágrafo comum foi formatado como Título 1 | volte o parágrafo ao estilo Normal |
| título de nível 2 fora da síntese, das notas ou do resumo executivo | subtítulo dentro de um eixo | use estilo Normal dentro dos eixos |
| tabela inesperada dentro do fator | tabela inserida no meio do diagnóstico | transforme o conteúdo em texto ou leve a tabela para as notas |
| ainda tem trechos do modelo entre < > | campo do meta.json não preenchido | substitua todos os trechos entre < > |
| o id em ...meta.json difere do id informado | id no arquivo diferente do nome do arquivo | iguale o id, o nome dos arquivos e o cadastro |
| documento-fonte não encontrado | nome do .docx no meta.json diferente do arquivo enviado (inclusive maiúsculas e acentos) | iguale os nomes, de preferência sem acentos e sem espaços |
| fonte não encontrada literalmente / referência normativa não encontrada | o trecho registrado no fontes.json não está escrito igual no texto | copie o trecho do próprio texto, com a mesma grafia |
| arquivo deve ser territorios/<id>.js | caminho no cadastro com maiúsculas ou nome diferente | use territorios/<id>.js, todo em minúsculas |
| território ausente de territorios/indice.js | o arquivo foi gerado, mas a entrada não foi acrescentada ao cadastro | acrescente a entrada (seção 8) |
| território simulado no cadastro publicado | uso da situação simulado | use diagnostico ou sem-diagnostico |
| Unexpected token, erro de sintaxe ao validar o cadastro | vírgula, aspas ou chave faltando no indice.js ou num .json | compare com o exemplo da seção 8; cada entrada é separada por vírgula |
| no painel: Não foi possível carregar os dados | arquivo de dados não enviado ou caminho errado no cadastro | confira se territorios/<id>.js existe no repositório com o nome exato |
| no painel: o território não aparece no seletor | cadastro com erro, como id repetido ou campo faltando | execute a verificação e corrija o erro indicado |
| no site publicado ainda aparece a versão anterior | publicação em andamento ou página em cache | aguarde o pages build and deployment ficar verde e recarregue com Ctrl+Shift+R |

## 13. Exemplo completo com dados simulados

A pasta testes/exemplo-simulado/ contém um território fictício, Território demonstrativo (simulado), com o identificador demonstrativo-simulado, preparado exatamente como descrito neste manual:
- o documento Diagnostico_Territorio_Demonstrativo_SIMULADO.docx foi produzido a partir do modelo, com 12 fatores preenchidos (2 por eixo), um fator declarado sem diagnóstico com motivo e os demais declarados sem diagnóstico;
- demonstrativo-simulado.meta.json e demonstrativo-simulado.fontes.json, este com os três modos de registrar fontes e normas;
- montar_exemplo.py, que mostra como o documento foi preenchido.

Todos os textos começam por [DADOS SIMULADOS] e não descrevem nenhuma localidade real. Por isso o território não está no cadastro publicado.

O teste testes/testar-procedimento-cadastro.py executa este manual com o exemplo numa cópia temporária do painel:
1. copia os arquivos para as pastas indicadas;
2. gera o arquivo de dados;
3. cadastra o território;
4. executa a verificação completa, com abertura no navegador;
5. confere que nenhum arquivo da interface, da metodologia ou de Campo Grande/MS foi alterado;
6. provoca dez dos erros comuns da seção 12 e confirma que cada um é detectado com a mensagem descrita.
