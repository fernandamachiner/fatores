# Etapa 3. Organização do diagnóstico territorial de Campo Grande/MS

## Entradas utilizadas

A etapa utilizou o cadastro metodológico produzido na Etapa 2 (metodologia/metodologia.js, versão 2.0.0, 6 eixos e 150 fatores, definida pela coordenação como versão final após a revisão das semelhanças entre fatores), o documento DOC-20261008-WA0072.docx, identificado no próprio texto como PROPOSTA DE ESTRUTURA, DIAGNÓSTICO SITUACIONAL, TERRITÓRIO DE EXEMPLO: CAMPO GRANDE/MS, e o código-fonte versionado no repositório do painel. O documento foi copiado sem alteração para territorios/fontes/, para que cada texto possa ser rastreado até a origem.

## Leitura do documento

O documento tem 147 parágrafos com conteúdo: três de identificação, o resumo executivo, seis capítulos de eixo com parágrafo introdutório, 126 parágrafos de fator e três parágrafos de notas metodológicas e fontes. Não há tabelas nem imagens. Cada fator ocupa um único parágrafo, iniciado pelo nome em negrito e itálico seguido de dois-pontos. A extração (territorios/ferramentas/extrair_docx.py) encontrou 21, 26, 19, 25, 21 e 14 fatores por eixo, exatamente as quantidades declaradas nas introduções dos capítulos.

O documento numera os fatores como E<eixo>-<posição> e usa essa numeração em referências cruzadas. As 13 referências encontradas no texto e nas notas (por exemplo, E1-18 remete a E3-13, Acesso a direitos fundamentais, Registro de Nascimento e RG, e as notas metodológicas remetem a E4-14 e E4-15, vida marinha e oceanos) coincidem com a posição dos fatores, o que confirma a numeração. Esses códigos foram preservados como codigo_documento e não se confundem com os identificadores do cadastro (E1-F01 a E6-F16).

## Critérios de correspondência

Cada um dos 126 fatores do documento recebeu uma de três classificações, registradas na tabela editável territorios/correspondencias/campo-grande-ms.csv.

Nome idêntico (65 fatores): o nome no documento coincide com o nome atual ou original de um fator do cadastro, desconsiderando acentos, caixa e pontuação, no mesmo eixo.

Variação nominal (34 fatores): no mesmo eixo, um único fator do cadastro reúne os elementos do nome usado no documento, que difere por omissão ou acréscimo de qualificador, parêntese ou complemento, e a leitura do texto confirma que ele trata desse mesmo objeto. Cada caso tem a diferença descrita no campo observacao. Exemplos: Formalização (CLT, MEI, ECOSOL) e E1-F10 Formalização de emprego (CLT, MEI, ECOSOL); Transparência ativa das instituições e E6-F09 Instituições públicas e privadas em todos os níveis (transparência ativa).

Pendente de validação (27 fatores): o documento não permite confirmar a associação. Os motivos são fator sem correspondente nominal no cadastro (13), leituras de governança do Eixo 6 sobre fatores de outros eixos que já têm diagnóstico (6), fator retirado na versão 2.0.0 da metodologia (5), fator candidato já diagnosticado por outro texto (1), um texto que corresponde a dois fatores (1) e qualificador divergente (1). Nenhuma associação foi feita apenas por semelhança de assunto. Um exemplo do critério conservador é E1-13 Empreendedorismo, criatividade e inovação: o cadastro tem Empreendedorismo solidário, criatividade e inovação, e o texto trata do ecossistema de empreendedorismo em geral, por isso o caso ficou pendente.

Nenhum fator do cadastro recebeu mais de um texto validado, e nenhuma validação liga um texto a fator de outro eixo.

## Estrutura dos dados

Os diagnósticos ficam em territorios/campo-grande-ms.js, que registra window.TERRITORIOS["campo-grande-ms"]. O formato JavaScript mantém a abertura do painel sem servidor, como na metodologia. O arquivo não repete nenhum dado do cadastro (nome, ícone, ODS ou descrição do fator), e o validador recusa esses campos. Os diagnósticos se ligam aos fatores apenas pelo identificador.

O arquivo contém identificação do território (id, nome, UF, tipo e rótulo), situação (proposta de estrutura, território de exemplo e aviso de que os textos não se generalizam para outras localidades), versão da metodologia usada, dados do documento-fonte, resumo executivo, introduções dos eixos, notas metodológicas, lista de fontes gerais declaradas nas notas, os 99 diagnósticos validados indexados pelo identificador do fator e os 27 pendentes de validação, sem ligação a fator. Cada diagnóstico tem:

- texto: cópia integral do parágrafo, sem o nome do fator;
- fontes_citadas: trechos literais que atribuem um dado ou uma constatação a sistema de informação, base, pesquisa, indicador, plano, relatório, publicação ou à cartografia social;
- referencias_normativas: leis, plano diretor, estatuto e políticas citados;
- periodos_citados: anos e intervalos que aparecem literalmente no texto;
- origem: código e nome no documento, eixo e número do parágrafo no .docx;
- correspondencia: situação, tipo e justificativa (validados) ou categoria, candidatos e motivo (pendentes).

As fontes foram revisadas uma a uma. Instituições citadas apenas como atores, sistemas citados como ferramenta de gestão (por exemplo, SISREG) e documentos citados como inexistentes (o Plano Municipal de Adaptação às Mudanças Climáticas, que o texto informa não existir) não foram registrados como fonte. O documento não declara período de referência por fator. Por isso o campo se chama periodos_citados e não indica o período de referência dos dados, o que seria inferência. A distinção entre problemas, vulnerabilidades, potencialidades e desafios não é marcada estruturalmente no documento, mas está expressa na redação. Preservá-la exigiu manter os textos integrais, sem resumo nem classificação adicional.

O arquivo é gerado a partir do .docx e dos arquivos editáveis em territorios/correspondencias/ (tabela de correspondência, fontes e metadados) por territorios/ferramentas/gerar_territorio.py. Uma decisão sobre pendente é aplicada alterando a tabela e gerando o arquivo novamente, sem edição manual de textos.

## Resultado

| Eixo | Fatores no cadastro | Com diagnóstico validado | Sem diagnóstico |
|---|---|---|---|
| E1 O Suor que não nos Sustenta | 29 | 20 | 9 |
| E2 A Vida em Risco | 38 | 21 | 17 |
| E3 Nossos Corpos Silenciados | 18 | 14 | 4 |
| E4 A Terra de Quem? | 24 | 19 | 5 |
| E5 A Cidade Negada | 29 | 20 | 9 |
| E6 A Voz na Mesa | 12 | 5 | 7 |
| Total | 150 | 99 | 51 |

Dos 99 diagnósticos validados, 31 citam ao menos uma fonte ou referência normativa. Oito diagnósticos apresentam dados quantitativos sem fonte citada no próprio texto: E1-F08 Geração de emprego e renda, E1-F10 Formalização de emprego, E1-F13 Desemprego, E1-F21 Industrialização inclusiva e sustentável, E1-F27 Economia circular e E2-F07 Dengue, entre os validados, e E2-5 e E2-20, entre os pendentes. Esses textos foram mantidos como estão. As notas metodológicas do documento listam as fontes gerais, registradas em fontes_gerais_do_documento, mas não permitem atribuir cada dado a uma delas.

Durante a leitura foram observados dois pontos no texto do documento, reproduzidos sem correção por exigência de fidelidade. O diagnóstico de E2-F04 Mortalidade neonatal define o componente neonatal como óbitos nas primeiras 28 horas de vida, quando a definição usual é 28 dias. O diagnóstico de E1-F16 Ambientes de trabalho seguros contém sem sempre haver, aparentemente em lugar de nem sempre haver. A correção, se desejada, deve ser feita no documento-fonte, com nova geração do arquivo.

## Atualização para a metodologia 2.0.0

Em 19/10/2026 a coordenação definiu a versão final da matriz, com 150 fatores. A revisão retirou nove fatores sobrepostos (E2-F24, E3-F15, E4-F23, E5-F07, E5-F31, E6-F10, E6-F12, E6-F13 e E6-F14), passou a definição de E3-F15 para E3-F08 Direitos fundamentais e transformou E5-F21 em Tecnologias de informação e comunicação. A correspondência de Campo Grande/MS foi refeita com essa versão.

Quatro pendentes passaram a ter um único candidato, com os elementos do nome presentes no fator, e foram validados como variação nominal: E4-24 para E4-F01, E6-1 para E6-F07, E5-8 para E5-F21 e E6-2 para E6-F02. O E6-2 era validado por nome idêntico com E6-F14, que foi retirado.

Quatro diagnósticos validados perderam o fator e passaram a pendentes. E2-21 Gestão de riscos e emergências estava ligado ao E2-F24; o fator remanescente, E2-F32, já tem o diagnóstico do E2-22. E3-13 Acesso a direitos fundamentais, Registro de Nascimento e RG estava ligado ao E3-F15; o fator que recebeu sua definição, E3-F08, já tem o diagnóstico do E3-14. E6-3 Apoio a instituições públicas, privadas e sociedade civil, parcerias sociotécnicas e E6-4 Parcerias multissetoriais estavam ligados ao E6-F13 e ao E6-F12. Esses dois textos e o E6-5 Parcerias multissetoriais para os ODS disputam agora o único fator de parcerias remanescente, E6-F04.

Resultado: 99 diagnósticos validados, 27 pendentes e 51 fatores sem diagnóstico. Nenhum diagnóstico está ligado a identificador desativado, e os 126 textos continuam idênticos ao documento.

## Validação

O validador estrutural (testes/validar-territorio.js) aprovou as sete verificações, também com a metodologia 2.0.0:
- identificação e situação do território;
- presença do documento-fonte;
- versão vigente da metodologia;
- ligação dos 99 diagnósticos a identificadores existentes no cadastro;
- registro de motivo, sem ligação a fator, nos 27 pendentes;
- presença dos 126 fatores do documento no arquivo, sem repetição.

O validador também exige que cada fonte, referência normativa e período registrados apareçam literalmente no texto.

A conferência de fidelidade (testes/conferir_fidelidade_territorio.py) lê o .docx diretamente do XML do Word, sem usar o extrator do projeto. Ela confirmou que os 126 textos são idênticos aos parágrafos de origem e que os 147 parágrafos com conteúdo do documento estão representados no arquivo.

Em teste de controle, uma cópia do arquivo recebeu três erros introduzidos de propósito: um número alterado no texto (2,8% para 3,8%), uma fonte inexistente no texto e um identificador de fator inexistente. Os dois testes detectaram os três erros e encerraram com código de falha.

O painel ainda não carrega o arquivo do território. A ligação com a interface é objeto da Etapa 4.

## Tabela de conferência

A tabela completa está também em relatorios/etapa3-conferencia-fatores.csv. Os diagnósticos pendentes estão em relatorios/etapa3-pendentes-validacao.md e os fatores sem diagnóstico em relatorios/etapa3-fatores-sem-diagnostico.md.

| Eixo | ID | Fator | Diagnóstico localizado | Fonte documental | Correspondência validada | Pendências |
|---|---|---|---|---|---|---|
| E1 O Suor que não nos Sustenta | E1-F01 | Cuidado com crianças e grupos vulneráveis | não |  | não se aplica | Sem análise correspondente no documento. |
| E1 O Suor que não nos Sustenta | E1-F02 | Alimentos | sim: E1-21 Alimentos (parágrafo 51 do .docx) | SISVAN | sim, nome idêntico |  |
| E1 O Suor que não nos Sustenta | E1-F03 | Agricultura familiar | sim: E1-1 Agricultura Familiar (parágrafo 11 do .docx) | Perfil Socioeconômico de Campo Grande (PLANURB, 2023) | sim, nome idêntico |  |
| E1 O Suor que não nos Sustenta | E1-F04 | Produção de alimentos – hortas, hortos, quintais e outros que produzem alimentos | sim: E1-16 Produção de alimentos, hortas, hortos, quintais (parágrafo 41 do .docx) | cartografia social PICAPS | sim, variação nominal | O documento omite e outros que produzem alimentos. |
| E1 O Suor que não nos Sustenta | E1-F05 | Produção orgânica | sim: E1-17 Produção Orgânica (parágrafo 43 do .docx) | nenhuma fonte citada no texto | sim, nome idêntico |  |
| E1 O Suor que não nos Sustenta | E1-F06 | Disponibilidade de alimentos | não |  | não se aplica | Sem análise correspondente no documento. |
| E1 O Suor que não nos Sustenta | E1-F07 | Trabalho de assistência e doméstico não remunerado | sim: E1-20 Trabalho de assistência e doméstico não remunerado (parágrafo 49 do .docx) | nenhuma fonte citada no texto | sim, nome idêntico |  |
| E1 O Suor que não nos Sustenta | E1-F08 | Geração de emprego e renda | sim: E1-3 Geração de emprego e renda (parágrafo 15 do .docx) | nenhuma fonte citada no texto | sim, nome idêntico |  |
| E1 O Suor que não nos Sustenta | E1-F09 | Empreendedorismo solidário, criatividade e inovação | não |  | não se aplica | Candidato do pendente E1-13. |
| E1 O Suor que não nos Sustenta | E1-F10 | Formalização de emprego (CLT, MEI, ECOSOL) | sim: E1-4 Formalização (CLT, MEI, ECOSOL) (parágrafo 17 do .docx) | nenhuma fonte citada no texto | sim, variação nominal | O documento omite de emprego; o parêntese (CLT, MEI, ECOSOL) é idêntico. |
| E1 O Suor que não nos Sustenta | E1-F11 | Iniciativas de economia solidária | sim: E1-9 Iniciativas de Economia Solidária (parágrafo 27 do .docx) | nenhuma fonte citada no texto | sim, nome idêntico |  |
| E1 O Suor que não nos Sustenta | E1-F12 | Disponibilidade de emprego | não |  | não se aplica | Sem análise correspondente no documento. |
| E1 O Suor que não nos Sustenta | E1-F13 | Desemprego | sim: E1-2 Desemprego (parágrafo 13 do .docx) | nenhuma fonte citada no texto | sim, nome idêntico |  |
| E1 O Suor que não nos Sustenta | E1-F14 | Trabalho infantil | sim: E1-6 Trabalho infantil (parágrafo 21 do .docx) | nenhuma fonte citada no texto | sim, nome idêntico |  |
| E1 O Suor que não nos Sustenta | E1-F15 | Trabalho em condições análogas às de escravidão | sim: E1-5 Trabalho em condições análogas às de escravo (parágrafo 19 do .docx) | Ministério do Trabalho e Emprego | sim, variação nominal | Escravo no documento, escravidão no cadastro. |
| E1 O Suor que não nos Sustenta | E1-F16 | Ambientes de trabalho seguros | sim: E1-7 Ambientes de trabalho seguros (parágrafo 23 do .docx) | nenhuma fonte citada no texto | sim, nome idêntico |  |
| E1 O Suor que não nos Sustenta | E1-F17 | Ações solidárias locais | não |  | não se aplica | Sem análise correspondente no documento. |
| E1 O Suor que não nos Sustenta | E1-F18 | Condições de trabalho | não |  | não se aplica | Sem análise correspondente no documento. |
| E1 O Suor que não nos Sustenta | E1-F19 | Promoção de políticas de investimento local | sim: E1-14 Promoção de políticas de investimento local (parágrafo 37 do .docx) | IVS do IPEA | sim, nome idêntico |  |
| E1 O Suor que não nos Sustenta | E1-F20 | Acesso a serviços bancários | sim: E1-18 Acesso a serviços bancários (parágrafo 45 do .docx) | nenhuma fonte citada no texto | sim, nome idêntico |  |
| E1 O Suor que não nos Sustenta | E1-F21 | Industrialização inclusiva e sustentável | sim: E1-10 Industrialização inclusiva e sustentável (parágrafo 29 do .docx) | nenhuma fonte citada no texto | sim, nome idêntico |  |
| E1 O Suor que não nos Sustenta | E1-F22 | Crédito para micro, pequenas empresas e cooperativas | sim: E1-11 Crédito para micro, pequenas empresas e cooperativas (parágrafo 31 do .docx) | nenhuma fonte citada no texto | sim, nome idêntico |  |
| E1 O Suor que não nos Sustenta | E1-F23 | Atividades econômicas sustentáveis | sim: E1-19 Atividades econômicas sustentáveis, indústrias ecologicamente corretas (parágrafo 47 do .docx) | nenhuma fonte citada no texto | sim, variação nominal | O documento acrescenta indústrias ecologicamente corretas. |
| E1 O Suor que não nos Sustenta | E1-F24 | Cobrança de preços abusivos por itens básicos | não |  | não se aplica | Sem análise correspondente no documento. |
| E1 O Suor que não nos Sustenta | E1-F25 | Regulamentação e monitoramento dos mercados e instituições (monopólios e preço justo) | sim: E1-12 Regulamentação e monitoramento dos mercados (parágrafo 33 do .docx) | nenhuma fonte citada no texto | sim, variação nominal | O documento omite e instituições (monopólios e preço justo). |
| E1 O Suor que não nos Sustenta | E1-F26 | Sistemas sustentáveis de produção de alimentos | sim: E1-15 Sistemas sustentáveis de produção de alimentos (consumo) (parágrafo 39 do .docx) | SISVAN; cartografia social PICAPS | sim, variação nominal | O documento acrescenta (consumo); a descrição do fator abrange produção e consumo. |
| E1 O Suor que não nos Sustenta | E1-F27 | Economia circular | sim: E1-8 Economia circular (parágrafo 25 do .docx) | nenhuma fonte citada no texto | sim, nome idêntico |  |
| E1 O Suor que não nos Sustenta | E1-F28 | Trabalho informal | não |  | não se aplica | Sem análise correspondente no documento. |
| E1 O Suor que não nos Sustenta | E1-F29 | Crédito para adaptação climática e reconstrução | não |  | não se aplica | Sem análise correspondente no documento. |
| E2 A Vida em Risco | E2-F01 | Área inundada | não |  | não se aplica | Sem análise correspondente no documento. |
| E2 A Vida em Risco | E2-F02 | Insegurança alimentar | não |  | não se aplica | Candidato do pendente E2-12. |
| E2 A Vida em Risco | E2-F03 | Mortalidade materna | sim: E2-2 Mortalidade materna (parágrafo 58 do .docx) | SES-MS, 2023; Plano Municipal de Saúde 2022-2025 | sim, nome idêntico |  |
| E2 A Vida em Risco | E2-F04 | Mortalidade neonatal | sim: E2-3 Mortalidade neonatal (parágrafo 60 do .docx) | nenhuma fonte citada no texto | sim, nome idêntico |  |
| E2 A Vida em Risco | E2-F05 | Mortalidade infantil | sim: E2-1 Mortalidade infantil (parágrafo 56 do .docx) | PRMS Campo Grande (2018–2021) | sim, nome idêntico |  |
| E2 A Vida em Risco | E2-F06 | Doenças decorrentes de contaminação e poluição do ar, da água e do solo | sim: E2-17 Doenças decorrentes de contaminação ambiental (parágrafo 88 do .docx) | SINAN | sim, variação nominal | Contaminação ambiental no documento; contaminação e poluição do ar, da água e do solo no cadastro. |
| E2 A Vida em Risco | E2-F07 | Dengue | sim: E2-10 Dengue (parágrafo 74 do .docx) | nenhuma fonte citada no texto | sim, nome idêntico |  |
| E2 A Vida em Risco | E2-F08 | Doenças transmissíveis (AIDS, tuberculose, hanseníase, negligenciadas) | sim: E2-9 Doenças Transmissíveis (AIDS, tuberculose, hanseníase, negligenciadas) (parágrafo 72 do .docx) | Informe Técnico em Saúde Única da SES-MS (2025) | sim, nome idêntico |  |
| E2 A Vida em Risco | E2-F09 | Doenças não transmissíveis (crônicas) | sim: E2-8 Doenças não transmissíveis (crônicas) (parágrafo 70 do .docx) | PRMS Campo Grande (2018–2021) | sim, nome idêntico |  |
| E2 A Vida em Risco | E2-F10 | Uso de drogas e álcool | sim: E2-11 Uso abusivo de drogas e álcool (parágrafo 76 do .docx) | cartografia social; Plano Municipal de Saúde 2022-2025 | sim, variação nominal | O documento acrescenta abusivo. |
| E2 A Vida em Risco | E2-F11 | Acidentes em estradas | sim: E2-24 Acidentes em estradas (parágrafo 102 do .docx) | INFOSIGA; DATASUS | sim, nome idêntico |  |
| E2 A Vida em Risco | E2-F12 | Saúde sexual e reprodutiva | sim: E2-7 Saúde sexual e reprodutiva (parágrafo 68 do .docx) | nenhuma fonte citada no texto | sim, nome idêntico |  |
| E2 A Vida em Risco | E2-F13 | Acesso a medicamentos | não |  | não se aplica | Candidato do pendente E2-5. |
| E2 A Vida em Risco | E2-F14 | Cobertura vacinal | não |  | não se aplica | Candidato do pendente E2-5. |
| E2 A Vida em Risco | E2-F15 | Serviços de saúde | sim: E2-6 Serviços de saúde (parágrafo 66 do .docx) | nenhuma fonte citada no texto | sim, nome idêntico |  |
| E2 A Vida em Risco | E2-F16 | Profissionais de saúde | sim: E2-4 Profissionais de saúde (parágrafo 62 do .docx) | SCNES | sim, nome idêntico |  |
| E2 A Vida em Risco | E2-F17 | Tornado/Vendaval | não |  | não se aplica | Sem análise correspondente no documento. |
| E2 A Vida em Risco | E2-F18 | Saúde mental | não |  | não se aplica | Sem análise correspondente no documento. |
| E2 A Vida em Risco | E2-F19 | Saúde do idoso | não |  | não se aplica | Sem análise correspondente no documento. |
| E2 A Vida em Risco | E2-F20 | Acesso à água e saneamento | sim: E2-14 Acesso à água e saneamento (parágrafo 82 do .docx) | SNIS 2022; Ranking Trata Brasil; PLANSAB | sim, nome idêntico |  |
| E2 A Vida em Risco | E2-F21 | Contaminação e poluição do ar, da água e do solo | sim: E2-16 Contaminação e poluição do ar, da água e do solo (parágrafo 86 do .docx) | nenhuma fonte citada no texto | sim, nome idêntico |  |
| E2 A Vida em Risco | E2-F22 | Participação das comunidades locais na gestão da água e saneamento | sim: E2-15 Participação das comunidades na gestão da água (parágrafo 84 do .docx) | nenhuma fonte citada no texto | sim, variação nominal | O documento omite locais e e saneamento. |
| E2 A Vida em Risco | E2-F23 | Gestão da água e saneamento | sim: E2-13 Gestão da água e saneamento, uso e escassez (parágrafo 80 do .docx) | SNIS/Trata Brasil 2023 | sim, variação nominal | O documento acrescenta uso e escassez; a descrição do fator trata do uso e de evitar a falta de água. |
| E2 A Vida em Risco | E2-F25 | Qualidade do ar | sim: E2-18 Qualidade do ar (parágrafo 90 do .docx) | nenhuma fonte citada no texto | sim, nome idêntico |  |
| E2 A Vida em Risco | E2-F26 | Rota de fuga | não |  | não se aplica | Sem análise correspondente no documento. |
| E2 A Vida em Risco | E2-F27 | Segurança | sim: E2-25 Segurança (parágrafo 104 do .docx) | cartografia social; Índice de Vulnerabilidade Social do IPEA | sim, nome idêntico |  |
| E2 A Vida em Risco | E2-F28 | Violência | sim: E2-26 Violência (parágrafo 106 do .docx) | Agência Brasil (2024); SINAN-Violências | sim, nome idêntico |  |
| E2 A Vida em Risco | E2-F29 | Comunicação e gestão pós-desastre | não |  | não se aplica | Sem análise correspondente no documento. |
| E2 A Vida em Risco | E2-F30 | Seca/Estiagem | não |  | não se aplica | Sem análise correspondente no documento. |
| E2 A Vida em Risco | E2-F31 | Acesso a serviços essenciais de energia, abastecimento de água, coleta de lixo etc. | não |  | não se aplica | Sem análise correspondente no documento. |
| E2 A Vida em Risco | E2-F32 | Gestão de riscos e emergências (defesa civil, bombeiros, brigadas e outros coletivos) | sim: E2-22 Gestão de riscos, defesa civil, bombeiros e brigadas (parágrafo 98 do .docx) | nenhuma fonte citada no texto | sim, variação nominal | Mesmos elementos (gestão de riscos, defesa civil, bombeiros, brigadas); o cadastro acrescenta e emergências e outros coletivos. Também é candidato do pendente E2-21, E6-13. |
| E2 A Vida em Risco | E2-F33 | Pontos de riscos e desastres no território | sim: E2-23 Pontos de riscos e desastres no território (parágrafo 100 do .docx) | nenhuma fonte citada no texto | sim, nome idêntico |  |
| E2 A Vida em Risco | E2-F34 | Enchentes e alagamentos | não |  | não se aplica | Sem análise correspondente no documento. |
| E2 A Vida em Risco | E2-F35 | Infestações e pragas (mosquito, carrapato, escorpião, animais peçonhentos etc.) | não |  | não se aplica | Sem análise correspondente no documento. |
| E2 A Vida em Risco | E2-F36 | Pontos de deslizamento de terra | não |  | não se aplica | Sem análise correspondente no documento. |
| E2 A Vida em Risco | E2-F37 | Sirenes e alertas de emergências | não |  | não se aplica | Sem análise correspondente no documento. |
| E2 A Vida em Risco | E2-F38 | Queimada/Incêndio | não |  | não se aplica | Sem análise correspondente no documento. |
| E2 A Vida em Risco | E2-F39 | Ponto de encontro em emergências | não |  | não se aplica | Sem análise correspondente no documento. |
| E3 Nossos Corpos Silenciados | E3-F01 | Pobreza | sim: E3-18 Pobreza (parágrafo 145 do .docx) | IVS do IPEA | sim, nome idêntico |  |
| E3 Nossos Corpos Silenciados | E3-F02 | Discriminação e violência contra mulheres e meninas | sim: E3-1 Discriminação e violência contra mulheres e meninas (parágrafo 111 do .docx) | SINAN; boletins estaduais de 2023 | sim, nome idêntico |  |
| E3 Nossos Corpos Silenciados | E3-F03 | Casamentos prematuros, forçados e de crianças | sim: E3-6 Casamentos prematuros, forçados e de crianças (parágrafo 121 do .docx) | nenhuma fonte citada no texto | sim, nome idêntico |  |
| E3 Nossos Corpos Silenciados | E3-F04 | Igualdade de oportunidades para promover o empoderamento das mulheres | sim: E3-5 Igualdade de oportunidades para empoderamento das mulheres (parágrafo 119 do .docx) | nenhuma fonte citada no texto | sim, variação nominal | O documento omite promover. Também é candidato do pendente E3-4, E3-12. |
| E3 Nossos Corpos Silenciados | E3-F05 | Propriedade e controle sobre a terra para as mulheres | sim: E3-9 Propriedade e controle sobre a terra para as mulheres (parágrafo 127 do .docx) | Estatuto da Cidade | sim, nome idêntico |  |
| E3 Nossos Corpos Silenciados | E3-F06 | Ação do Estado na coordenação e coerência de políticas para igualdade de gênero | sim: E3-11 Ação do Estado na coordenação de políticas para igualdade de gênero (parágrafo 131 do .docx) | nenhuma fonte citada no texto | sim, variação nominal | O documento omite e coerência. Também é candidato do pendente E6-8. |
| E3 Nossos Corpos Silenciados | E3-F07 | Tráfico de pessoas | sim: E3-7 Tráfico de pessoas (parágrafo 123 do .docx) | nenhuma fonte citada no texto | sim, nome idêntico |  |
| E3 Nossos Corpos Silenciados | E3-F08 | Direitos fundamentais | sim: E3-14 Direitos fundamentais (parágrafo 137 do .docx) | nenhuma fonte citada no texto | sim, nome idêntico | Também é candidato do pendente E3-13, E3-15. |
| E3 Nossos Corpos Silenciados | E3-F09 | Monitoramento dos vulneráveis (idosos, PCDs e crianças) | não |  | não se aplica | Sem análise correspondente no documento. |
| E3 Nossos Corpos Silenciados | E3-F10 | Empoderamento e inclusão social, econômica e política | sim: E3-8 Empoderamento e inclusão social, econômica e política (parágrafo 125 do .docx) | nenhuma fonte citada no texto | sim, nome idêntico |  |
| E3 Nossos Corpos Silenciados | E3-F11 | Acessibilidade e inclusão | não |  | não se aplica | Sem análise correspondente no documento. |
| E3 Nossos Corpos Silenciados | E3-F12 | Serviços públicos e políticas de proteção social | sim: E3-16 Serviços públicos e políticas de proteção social (parágrafo 141 do .docx) | nenhuma fonte citada no texto | sim, nome idêntico | Também é candidato do pendente E3-17, E6-12. |
| E3 Nossos Corpos Silenciados | E3-F13 | Migração | sim: E3-19 Migração (parágrafo 147 do .docx) | FERNANDES & OLIVEIRA, 2024 | sim, nome idêntico |  |
| E3 Nossos Corpos Silenciados | E3-F14 | Acolhimento de vulneráveis e população em situação de rua | não |  | não se aplica | Candidato do pendente E3-15, E3-17. |
| E3 Nossos Corpos Silenciados | E3-F16 | Discriminação racial | sim: E3-2 Discriminação racial, todas as formas (parágrafo 113 do .docx) | Censo 2022 | sim, variação nominal | O documento acrescenta todas as formas. |
| E3 Nossos Corpos Silenciados | E3-F17 | Racismo ambiental | não |  | não se aplica | Sem análise correspondente no documento. |
| E3 Nossos Corpos Silenciados | E3-F18 | Igualdade racial | sim: E3-3 Igualdade racial (parágrafo 115 do .docx) | Política Nacional de Saúde Integral da População Negra (PNSIPN) | sim, nome idêntico | Também é candidato do pendente E3-4. |
| E3 Nossos Corpos Silenciados | E3-F19 | Igualdade de direitos à propriedade e controle da terra (comunidades tradicionais e quilombolas) | sim: E3-10 Igualdade de direitos à terra para comunidades tradicionais e quilombolas (parágrafo 129 do .docx) | Lei nº 7.227/2024 | sim, variação nominal | Direitos à terra no documento; direitos à propriedade e controle da terra no cadastro. |
| E4 A Terra de Quem? | E4-F01 | Acesso a recursos financeiros para gestão, conservação sustentável da biodiversidade (investimentos públicos e privados) | sim: E4-24 Recursos financeiros para gestão da biodiversidade (parágrafo 198 do .docx) | nenhuma fonte citada no texto | sim, variação nominal | O nome no documento reúne recursos financeiros, gestão e biodiversidade, presentes em E4-F01 Acesso a recursos financeiros para gestão, conservação sustentável da biodiversidade (investimentos públicos e privados). Associação resultante da versão 2.0.0 da metodologia, que eliminou a sobreposição entre candidatos. Também é candidato do pendente E6-14. |
| E4 A Terra de Quem? | E4-F02 | Gestão de bancos de sementes | sim: E4-11 Sementes, plantas e animais, bancos de sementes (parágrafo 172 do .docx) | nenhuma fonte citada no texto | sim, variação nominal | O nome no documento inclui bancos de sementes, e o texto trata de conservação de sementes crioulas e bancos comunitários. |
| E4 A Terra de Quem? | E4-F03 | Plantas medicinais (uso e plantio) | sim: E4-22 Plantas medicinais (uso e plantio) (parágrafo 194 do .docx) | nenhuma fonte citada no texto | sim, nome idêntico |  |
| E4 A Terra de Quem? | E4-F04 | Proteção e restauração de ecossistemas hídricos | sim: E4-9 Proteção e restauração de ecossistemas hídricos (parágrafo 168 do .docx) | nenhuma fonte citada no texto | sim, nome idêntico |  |
| E4 A Terra de Quem? | E4-F05 | Tecnologias sociais | não |  | não se aplica | Sem análise correspondente no documento. |
| E4 A Terra de Quem? | E4-F06 | Pesquisa científica e inovação | sim: E4-25 Pesquisa científica e inovação (parágrafo 200 do .docx) | nenhuma fonte citada no texto | sim, nome idêntico |  |
| E4 A Terra de Quem? | E4-F07 | Construções sustentáveis e resilientes | sim: E4-19 Construções sustentáveis e resilientes (parágrafo 188 do .docx) | nenhuma fonte citada no texto | sim, nome idêntico |  |
| E4 A Terra de Quem? | E4-F08 | Tecnologias ambientalmente corretas | sim: E4-20 Tecnologias ambientalmente corretas (parágrafo 190 do .docx) | nenhuma fonte citada no texto | sim, nome idêntico |  |
| E4 A Terra de Quem? | E4-F09 | Acesso à informação de qualidade | sim: E4-23 Acesso à informação de qualidade sobre produção sustentável (parágrafo 196 do .docx) | nenhuma fonte citada no texto | sim, variação nominal | O documento acrescenta sobre produção sustentável. Também é candidato do pendente E6-11. |
| E4 A Terra de Quem? | E4-F10 | Reconstruções sustentáveis e resilientes | não |  | não se aplica | Sem análise correspondente no documento. |
| E4 A Terra de Quem? | E4-F11 | Educação ambiental e para adaptação climática | sim: E4-17 Educação para mitigação e adaptação às mudanças do clima (parágrafo 184 do .docx) | nenhuma fonte citada no texto | sim, variação nominal | Educação para mitigação e adaptação às mudanças do clima no documento; educação ambiental e para adaptação climática no cadastro. |
| E4 A Terra de Quem? | E4-F12 | Planejamento relacionado à mudança do clima e à gestão eficaz | sim: E4-18 Planejamento relacionado à mudança do clima (parágrafo 186 do .docx) | IPCC; Plano Diretor municipal (LC nº 74/2006 e revisões) | sim, variação nominal | O documento omite e à gestão eficaz. |
| E4 A Terra de Quem? | E4-F13 | Gerenciar e proteger os oceanos, mares e recursos marinhos de forma sustentável | sim: E4-15 Gestão sustentável de oceanos e recursos marinhos (parágrafo 180 do .docx) | nenhuma fonte citada no texto | sim, variação nominal | Gestão sustentável de oceanos e recursos marinhos no documento; gerenciar e proteger os oceanos, mares e recursos marinhos de forma sustentável no cadastro. As notas metodológicas do documento registram que o fator foi analisado na dimensão de bacia hidrográfica. |
| E4 A Terra de Quem? | E4-F14 | Pesquisa científica e inovação para recuperação de ambientes | não |  | não se aplica | Candidato do pendente E4-14. |
| E4 A Terra de Quem? | E4-F15 | Pescadores artesanais | sim: E4-12 Pescadores artesanais (parágrafo 174 do .docx) | nenhuma fonte citada no texto | sim, nome idêntico | Também é candidato do pendente E4-16. |
| E4 A Terra de Quem? | E4-F16 | Desmatamento e solos degradados | sim: E4-1 Desmatamento e solos degradados (parágrafo 152 do .docx) | PRODES/INPE; MapBiomas | sim, nome idêntico |  |
| E4 A Terra de Quem? | E4-F17 | Gestão sustentável dos recursos naturais | não |  | não se aplica | Candidato do pendente E4-3, E4-4. |
| E4 A Terra de Quem? | E4-F18 | Conhecimentos e práticas tradicionais de conservação e uso sustentável | sim: E4-10 Conhecimentos e práticas tradicionais de conservação (parágrafo 170 do .docx) | nenhuma fonte citada no texto | sim, variação nominal | O documento omite e uso sustentável. |
| E4 A Terra de Quem? | E4-F19 | Hospital veterinário e resgate de animais | não |  | não se aplica | Sem análise correspondente no documento. |
| E4 A Terra de Quem? | E4-F20 | Tráfico de espécies da flora e fauna (caça e pesca ilegal) | sim: E4-7 Tráfico de espécies da flora e fauna (parágrafo 164 do .docx) | nenhuma fonte citada no texto | sim, variação nominal | O documento omite (caça e pesca ilegal). Também é candidato do pendente E4-13. |
| E4 A Terra de Quem? | E4-F21 | Espécies exóticas invasoras | sim: E4-6 Espécies exóticas invasoras (parágrafo 162 do .docx) | nenhuma fonte citada no texto | sim, nome idêntico |  |
| E4 A Terra de Quem? | E4-F22 | Gestão sustentável da biodiversidade para o desenvolvimento e redução da pobreza | sim: E4-2 Gestão sustentável da biodiversidade para o desenvolvimento (parágrafo 154 do .docx) | nenhuma fonte citada no texto | sim, variação nominal | O documento omite e redução da pobreza. Também é candidato do pendente E6-10. |
| E4 A Terra de Quem? | E4-F24 | Transferência de tecnologias ambientalmente corretas (acesso) | sim: E4-21 Transferência de tecnologias ambientalmente corretas (parágrafo 192 do .docx) | nenhuma fonte citada no texto | sim, variação nominal | O documento omite (acesso). |
| E4 A Terra de Quem? | E4-F25 | Reflorestamento | sim: E4-8 Promoção da gestão sustentável, reflorestamento (parágrafo 166 do .docx) | nenhuma fonte citada no texto | sim, variação nominal | O nome no documento inclui reflorestamento, e o texto trata de reflorestamento com espécies nativas e recuperação de matas ciliares. |
| E5 A Cidade Negada | E5-F01 | Disponibilidade a abrigos para emergências | não |  | não se aplica | Sem análise correspondente no documento. |
| E5 A Cidade Negada | E5-F02 | Vias obstruídas e danificadas – vias municipais, estaduais e federais | não |  | não se aplica | Sem análise correspondente no documento. |
| E5 A Cidade Negada | E5-F03 | Acidentes no transporte de produtos perigosos | não |  | não se aplica | Sem análise correspondente no documento. |
| E5 A Cidade Negada | E5-F04 | Educação – ensino primário | sim: E5-9 Educação, ensino primário (parágrafo 222 do .docx) | IDEB | sim, nome idêntico |  |
| E5 A Cidade Negada | E5-F05 | Educação técnica e profissional | sim: E5-12 Educação Técnica e profissional (parágrafo 228 do .docx) | nenhuma fonte citada no texto | sim, nome idêntico |  |
| E5 A Cidade Negada | E5-F06 | Educação superior | sim: E5-11 Educação Superior (parágrafo 226 do .docx) | nenhuma fonte citada no texto | sim, nome idêntico |  |
| E5 A Cidade Negada | E5-F08 | Educação pública | não |  | não se aplica | Sem análise correspondente no documento. |
| E5 A Cidade Negada | E5-F09 | Alfabetização – EJA | sim: E5-10 Alfabetização, EJA (parágrafo 224 do .docx) | nenhuma fonte citada no texto | sim, nome idêntico |  |
| E5 A Cidade Negada | E5-F10 | Formação em tecnologias sociais | não |  | não se aplica | Sem análise correspondente no documento. |
| E5 A Cidade Negada | E5-F11 | Bolsas de estudo | sim: E5-15 Bolsas de estudo (parágrafo 234 do .docx) | nenhuma fonte citada no texto | sim, nome idêntico |  |
| E5 A Cidade Negada | E5-F12 | Professores qualificados | sim: E5-14 Professores qualificados (parágrafo 232 do .docx) | nenhuma fonte citada no texto | sim, nome idêntico |  |
| E5 A Cidade Negada | E5-F13 | Acesso aos serviços de energia | sim: E5-6 Acesso aos serviços de Energia (parágrafo 216 do .docx) | nenhuma fonte citada no texto | sim, nome idêntico |  |
| E5 A Cidade Negada | E5-F14 | Serviços de energia modernos e sustentáveis | sim: E5-7 Serviços de Energia modernos e sustentáveis (parágrafo 218 do .docx) | nenhuma fonte citada no texto | sim, nome idêntico |  |
| E5 A Cidade Negada | E5-F15 | Empreendimento com elevado risco de desastres | não |  | não se aplica | Sem análise correspondente no documento. |
| E5 A Cidade Negada | E5-F16 | Educação para trabalho | sim: E5-13 Educação para o trabalho (parágrafo 230 do .docx) | nenhuma fonte citada no texto | sim, variação nominal | Educação para o trabalho no documento; educação para trabalho no cadastro. |
| E5 A Cidade Negada | E5-F17 | Promoção de cultura | sim: E5-20 Promoção de cultura (parágrafo 244 do .docx) | diagnóstico de agosto de 2025 | sim, nome idêntico |  |
| E5 A Cidade Negada | E5-F18 | Acesso à cultura | não |  | não se aplica | Sem análise correspondente no documento. |
| E5 A Cidade Negada | E5-F19 | Sistema viário – vias municipais, estaduais e federais | sim: E5-4 Sistema viário, vias municipais, estaduais e federais (parágrafo 212 do .docx) | nenhuma fonte citada no texto | sim, nome idêntico |  |
| E5 A Cidade Negada | E5-F20 | Infraestrutura sustentável e resiliente | sim: E5-3 Infraestrutura sustentável e resiliente (parágrafo 210 do .docx) | nenhuma fonte citada no texto | sim, nome idêntico |  |
| E5 A Cidade Negada | E5-F21 | Tecnologias de informação e comunicação | sim: E5-8 Acesso a tecnologias de informação e comunicação (parágrafo 220 do .docx) | nenhuma fonte citada no texto | sim, variação nominal | O documento acrescenta Acesso a; o fator E5-F21 passou a ser Tecnologias de informação e comunicação na versão 2.0.0. Associação resultante da versão 2.0.0 da metodologia, que eliminou a sobreposição entre candidatos. Também é candidato do pendente E3-12, E5-16. |
| E5 A Cidade Negada | E5-F22 | Habitação | sim: E5-1 Habitação (parágrafo 206 do .docx) | nenhuma fonte citada no texto | sim, nome idêntico |  |
| E5 A Cidade Negada | E5-F23 | Transportes seguros | sim: E5-5 Transportes seguros (parágrafo 214 do .docx) | nenhuma fonte citada no texto | sim, nome idêntico |  |
| E5 A Cidade Negada | E5-F24 | Urbanização e infraestrutura | sim: E5-2 Urbanização e infraestrutura (parágrafo 208 do .docx) | Censo 2022; Plano Diretor (LC nº 74/2006 e revisões) | sim, nome idêntico |  |
| E5 A Cidade Negada | E5-F25 | Equipamentos públicos de lazer e cultura seguros | não |  | não se aplica | Sem análise correspondente no documento. |
| E5 A Cidade Negada | E5-F26 | Esportes | sim: E5-18 Esportes (parágrafo 240 do .docx) | VIGITEL | sim, nome idêntico |  |
| E5 A Cidade Negada | E5-F27 | Biblioteca | sim: E5-17 Biblioteca (parágrafo 238 do .docx) | nenhuma fonte citada no texto | sim, nome idêntico |  |
| E5 A Cidade Negada | E5-F28 | Lazer | sim: E5-19 Lazer (parágrafo 242 do .docx) | nenhuma fonte citada no texto | sim, nome idêntico |  |
| E5 A Cidade Negada | E5-F29 | Valorização dos saberes e práticas locais | sim: E5-21 Experiências das comunidades, saberes e práticas locais (parágrafo 246 do .docx) | nenhuma fonte citada no texto | sim, variação nominal | Experiências das comunidades, saberes e práticas locais no documento; valorização dos saberes e práticas locais no cadastro. |
| E5 A Cidade Negada | E5-F30 | Acesso a iluminação pública | não |  | não se aplica | Sem análise correspondente no documento. |
| E6 A Voz na Mesa | E6-F01 | Associação de moradores e lideranças locais | não |  | não se aplica | Sem análise correspondente no documento. |
| E6 A Voz na Mesa | E6-F02 | Mobilização de redes e grupos organizados | sim: E6-2 Estratégias de mobilização, redes e grupos organizados (parágrafo 253 do .docx) | nenhuma fonte citada no texto | sim, variação nominal | Estratégias de mobilização, redes e grupos organizados no documento; Mobilização de redes e grupos organizados no cadastro. O fator de nome idêntico (E6-F14) foi retirado na versão 2.0.0. Associação resultante da versão 2.0.0 da metodologia, que eliminou a sobreposição entre candidatos. |
| E6 A Voz na Mesa | E6-F03 | Rádios comunitárias | não |  | não se aplica | Sem análise correspondente no documento. |
| E6 A Voz na Mesa | E6-F04 | Parcerias entre instituições públicas, privadas e com a sociedade civil | não |  | não se aplica | Candidato do pendente E6-3, E6-4, E6-5. |
| E6 A Voz na Mesa | E6-F05 | Mutirão de limpeza | não |  | não se aplica | Sem análise correspondente no documento. |
| E6 A Voz na Mesa | E6-F06 | Combate ao crime organizado | sim: E6-9 Combate ao crime organizado e armas ilegais (parágrafo 267 do .docx) | nenhuma fonte citada no texto | sim, variação nominal | O documento acrescenta e armas ilegais. |
| E6 A Voz na Mesa | E6-F07 | Participação social na tomada de decisão responsiva, inclusiva e participativa | sim: E6-1 Tomada de decisão responsiva, inclusiva e participativa (parágrafo 251 do .docx) | nenhuma fonte citada no texto | sim, variação nominal | O nome no documento está contido em E6-F07 Participação social na tomada de decisão responsiva, inclusiva e participativa. Associação resultante da versão 2.0.0 da metodologia, que eliminou a sobreposição entre candidatos. |
| E6 A Voz na Mesa | E6-F08 | Corrupção e suborno (em todos os níveis) | sim: E6-6 Corrupção e suborno (parágrafo 261 do .docx) | nenhuma fonte citada no texto | sim, variação nominal | O documento omite (em todos os níveis). |
| E6 A Voz na Mesa | E6-F09 | Instituições públicas e privadas em todos os níveis (transparência ativa) | sim: E6-7 Transparência ativa das instituições (parágrafo 263 do .docx) | nenhuma fonte citada no texto | sim, variação nominal | Transparência ativa das instituições no documento; instituições públicas e privadas em todos os níveis (transparência ativa) no cadastro. |
| E6 A Voz na Mesa | E6-F11 | Comunicação comunitária – grupos de mensagens | não |  | não se aplica | Sem análise correspondente no documento. |
| E6 A Voz na Mesa | E6-F15 | Grupos de escuta diários | não |  | não se aplica | Sem análise correspondente no documento. |
| E6 A Voz na Mesa | E6-F16 | Igrejas, grupos religiosos e outros coletivos que apoiam as situações de emergência | não |  | não se aplica | Sem análise correspondente no documento. |
