# Inclusão do território Distrito Federal

## Documento recebido

O documento Diagnostico_Situacional_DistritoFederal_RAs_Matriz_v1.0.2.docx foi recebido em 20/10/2026 e copiado sem alteração para territorios/fontes/. Ele segue o formato padrão da plataforma: 150 fatores, cada um com tabela de identificação, definição de referência idêntica à Matriz de Fatores v1.0.2 e um parágrafo de diagnóstico. Também traz resumo executivo, abertura dos seis eixos, síntese estratégica e notas metodológicas. A escala de referência é o Distrito Federal, com recortes por Região Administrativa, agrupadas pelos grupos de renda da PDAD 2021, e pelas sete regiões de saúde.

## Arquivos incluídos

- territorios/fontes/Diagnostico_Situacional_DistritoFederal_RAs_Matriz_v1.0.2.docx: documento-fonte;
- territorios/correspondencias/distrito-federal.meta.json: identificação. O id é distrito-federal e o rótulo, Distrito Federal. Título, responsáveis e data foram extraídos do próprio documento;
- territorios/correspondencias/distrito-federal.fontes.json: fontes e normas, com o mesmo critério de Campo Grande/MS. Inclui 56 expressões entre parênteses que indicam fonte, 8 fontes citadas no corpo do texto, em 7 fatores, e 5 referências normativas em 4 fatores;
- territorios/distrito-federal.js: dados gerados, com 150 diagnósticos, 129 deles com fonte registrada e 4 com referência normativa;
- territorios/indice.js: nova entrada, com situação diagnostico. Campo Grande/MS continua como território padrão.

## Ajuste na ferramenta de geração

O resumo executivo do documento tem uma subseção com estilo Título 2 (Recorte territorial: Regiões Administrativas por grupo de renda), com uma segunda tabela. O gerador passou a aceitar subseções no resumo executivo e a registrá-las em resumo_executivo.secoes. O arquivo de Campo Grande/MS, gerado de novo, ficou idêntico ao publicado. O manual e a descrição do formato foram atualizados.

## Decisões aplicadas

- **Linha ODS mobilizados da abertura dos eixos:** excluída dos dados pela mesma regra adotada para Campo Grande/MS em 20/10/2026. O painel não exibe esse campo, e o documento-fonte não foi alterado. A decisão está registrada no meta.json e pode ser revista pela coordenação.
- **Período de referência:** registrado como não declarado como período único, porque o documento indica o ano de cada dado sem um período geral.

## Verificações executadas

- **Verificação em um comando** (testes/verificar_territorio.py distrito-federal): metodologia, cadastro, estrutura, fidelidade e navegação aprovados. No navegador, 6 eixos e 150 popups, com diagnósticos idênticos aos dados.
- **Fidelidade:** 150 de 150 textos idênticos ao documento. As 6 linhas ODS mobilizados foram excluídas por decisão, e nenhum outro conteúdo do documento ficou fora do arquivo.
- **Auditoria de conteúdo** (relatorios/distrito-federal-auditoria-conteudo.json):
  - associação, ausências, integridade das referências e truncamento aprovados;
  - 1.968 ocorrências numéricas idênticas ao documento, fator a fator;
  - todos os textos com dados quantitativos têm fonte registrada.
- **Troca entre territórios reais** (testes/testar-troca-territorios-reais.js): Campo Grande/MS, Distrito Federal e volta a Campo Grande/MS, com os textos corretos de cada território, sem erros e sem rolagem horizontal, em tela de 1.280 e de 390 pixels.
- **Regressão:** seletor (36 de 36, agora comparado com o cadastro em vigor), falhas e ausências (16 de 16), procedimento de cadastro (17 de 17) e validador do cadastro, sem erros.

## Pontos para a coordenação

1. **Confirmação de dados de imprensa:** as notas metodológicas do próprio documento informam que dados obtidos de reportagens e sistematizações de terceiros foram atribuídos ao órgão produtor e devem ser confirmados nas bases primárias antes da publicação final. Também informam que alguns valores por região de saúde, lidos de gráficos do RDQA, devem ser conferidos. O aviso do território no painel reproduz essa ressalva. A decisão de publicar antes dessa confirmação é da coordenação.
2. **Lacunas de informação:** 54 de 150 diagnósticos declaram lacuna de informação, e 6 fatores são tratados pelo documento como de baixa aplicabilidade territorial. É o caso, por exemplo, de E4-F13, sobre oceanos e mares.
3. **Escalas de dados:** 34 textos citam referências de escala nacional, como comparações com a média do país. O documento indica a escala de cada dado.
