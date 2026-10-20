# Etapa 7. Documentação e replicação territorial

## Entradas utilizadas

A etapa partiu do código validado na Etapa 6, no ramo etapa-6-validacao (pedido de incorporação nº 2). As demais entradas foram o cadastro metodológico (metodologia/metodologia.js, Matriz de Fatores v1.0.2), o cadastro de territórios (territorios/indice.js) e o território de exemplo, Campo Grande/MS: documento-fonte, meta.json, fontes.json e arquivo de dados gerado.

## Entregáveis

| Entregável | Arquivo |
|---|---|
| Manual de cadastro de territórios | docs/manual-cadastro-territorios.md |
| Formato dos dados territoriais | docs/formato-dados-territoriais.md |
| Modelo de documento de diagnóstico | territorios/modelos/modelo-diagnostico.docx, gerado da metodologia vigente por territorios/ferramentas/gerar_modelo_documento.py |
| Modelos de metadados e de fontes | territorios/modelos/modelo.meta.json, modelo.fontes.json e exemplo.fontes.json |
| Checklist de validação | docs/checklist-validacao.md |
| Verificação em um comando | testes/verificar_territorio.py |
| Procedimento de publicação | seção 10 do manual e verificação automática no GitHub (.github/workflows/verificar-territorios.yml) |
| Arquivos que podem ou não ser alterados | seção 11 do manual |
| Erros comuns e soluções | seção 12 do manual |
| Território demonstrativo simulado | testes/exemplo-simulado/ (documento, meta.json, fontes.json e script de preenchimento) |
| Teste do procedimento | testes/testar-procedimento-cadastro.py |

O LEIA-ME.txt passou a resumir o procedimento e a remeter ao manual.

## Arquitetura e alterações complementares

O princípio de manutenção foi confirmado pelo teste do procedimento. A inclusão de um território consiste em criar o documento, os dois arquivos de configuração e o arquivo de dados gerado, e em acrescentar uma entrada no cadastro. O teste executou a inclusão completa do território demonstrativo e conferiu, por hash, que index.html, app.js, style.css, a planilha, o registro, o cadastro metodológico e o arquivo de Campo Grande/MS permaneceram idênticos.

A documentação exigiu quatro complementos nas ferramentas e um na interface. Nenhum altera a metodologia ou os diagnósticos.

O gerador de territórios (territorios/ferramentas/gerar_territorio.py) passou a:
- reconhecer a frase Sem diagnóstico disponível, com motivo opcional, e registrar esses fatores e os omitidos do documento em fatores_sem_diagnostico. Antes, um fator sem texto interrompia a geração e não havia forma de declarar a ausência no documento;
- recusar documentos com linhas de instrução do modelo e metadados com trechos do modelo entre < >, além de conferir o id do meta.json e a existência do documento-fonte, com mensagens em linguagem simples;
- aceitar títulos com o estilo Título 1, além de Heading 1, para documentos editados em Word em português.

O arquivo de Campo Grande/MS, gerado de novo, difere do publicado apenas pelo campo novo fatores_sem_diagnostico, vazio. Os 150 textos continuam idênticos ao documento.

O validador do território e o conferidor de fidelidade passaram a tratar os fatores declarados sem diagnóstico. O validador do cadastro ganhou um modo de teste (PERMITIR_SIMULADO=1) para que o território demonstrativo possa ser verificado sem ser aceito no cadastro publicado.

O metadado documento_fonte passou a prever período de referência, responsáveis e data de elaboração. O período de cada dado continua sendo extraído automaticamente dos anos citados no texto.

Na interface, o aviso de fator sem diagnóstico passou a exibir o motivo, quando informado no documento. A mudança é de uma condição em app.js e não exige alteração ao incluir territórios.

A verificação automática no GitHub foi criada para que a inclusão possa ser feita pelo site, sem instalar Python ou Node.js. A cada pedido de incorporação, ela:
- gera os arquivos dos territórios a partir dos documentos e grava no próprio pedido o arquivo gerado;
- valida a metodologia, o cadastro e cada território com diagnóstico;
- executa os testes do seletor, das falhas e do procedimento.

A verificação não publica o site. A publicação continua a cargo do GitHub Pages, a partir do main.

## Única situação que exige alteração além dos dados

Uma mudança na metodologia (novo fator, nome, ODS ou definição) exige gerar de novo o modelo de documento. Exige também atualizar e gerar de novo os documentos dos territórios já cadastrados, porque o gerador exige identidade entre o documento e a metodologia vigente. Essa exigência é intencional: impede que um diagnóstico fique ligado a um fator cuja definição mudou sem revisão.

## Território demonstrativo

O Território demonstrativo (simulado), com o identificador demonstrativo-simulado, foi preparado exatamente como o manual descreve, a partir do modelo. Ele tem 12 fatores com texto simulado (2 por eixo), 1 fator declarado sem diagnóstico com motivo e 137 declarados sem diagnóstico. Os textos começam por [DADOS SIMULADOS] e demonstram fonte entre parênteses, fonte no corpo do texto, norma, ano citado e fator relacionado. O território não integra o cadastro publicado.

As evidências estão em relatorios/etapa7-evidencias/: o popup de um diagnóstico simulado e o aviso de fator sem diagnóstico com o motivo informado.

## Resultado dos testes

O registro completo está em relatorios/etapa7-resultado-testes.txt.

- **Procedimento de cadastro** (testes/testar-procedimento-cadastro.py): 17 de 17 verificações aprovadas.
  - geração do arquivo;
  - registro de 12 diagnósticos, 138 ausências e 1 motivo;
  - fontes, normas, períodos e período de referência;
  - verificação completa em um comando, com abertura no navegador;
  - Campo Grande/MS aprovado depois do novo cadastro;
  - nenhum arquivo intocável alterado;
  - recusa do território simulado no cadastro publicado;
  - detecção, com a mensagem prevista no manual, de dez erros comuns: instrução do modelo não apagada, nome de fator alterado, definição alterada, fator vazio, id divergente, trecho entre < > no meta.json, nome do .docx com maiúsculas diferentes, fonte inexistente no texto, caminho com maiúsculas no cadastro e território não cadastrado.
- **Verificação em um comando para Campo Grande/MS:** cinco passos aprovados, com 150 diagnósticos idênticos aos dados no navegador.
- **Regressão:** navegação completa por file:// e por http em /fatores/; seletor com 36 de 36 verificações; falhas com 16 de 16; metodologia conferida com a planilha nas 1.200 células; auditorias da Etapa 6 sem novos reprovados. Permanece o item de contraste dos Eixos 1, 4 e 6, que aguarda decisão.
- **Verificação automática no GitHub:** executada no pedido de incorporação nº 2. A primeira execução falhou no teste do procedimento, porque a cópia temporária do painel não encontrava o pacote do navegador instalado no repositório. A falha foi corrigida e reproduzida localmente nas mesmas condições. A execução seguinte (commit 55951e6) foi aprovada em todas as etapas: geração dos arquivos, validação da metodologia e do cadastro, verificação de Campo Grande/MS, seletor, falhas e procedimento de cadastro.

## Critério de conclusão

O manual descreve em passos numerados todo o procedimento:
- copiar e preencher o modelo;
- preencher dois arquivos de configuração;
- enviar os arquivos pelo site do GitHub;
- acrescentar uma entrada no cadastro;
- acompanhar a verificação automática;
- publicar.

Esses passos não exigem programação. O caminho pelo computador (seção 7, caminho B) requer Python e Node.js e é opcional. O procedimento foi executado de ponta a ponta com o território demonstrativo, e os erros mais prováveis foram provocados e detectados com mensagens que remetem à solução.

## Pendências

1. **Contraste nos Eixos 1, 4 e 6:** decisão sobre a identidade visual (Etapa 6).
2. **Primeira localidade real:** o procedimento ainda não foi aplicado a uma segunda localidade real. Recomenda-se acompanhar a primeira inclusão e ajustar o manual com as dúvidas da equipe.
3. **Pendências de conteúdo e de metodologia:** as pendências da Etapa 6 sobre o documento de Campo Grande/MS e a metodologia seguem registradas no relatório daquela etapa.
4. **Versões das ações do GitHub:** a verificação automática usa versões das ações do GitHub que emitem aviso de atualização do Node.js. Não afeta o funcionamento atual, mas convém atualizá-las quando houver novas versões estáveis.
