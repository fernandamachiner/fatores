# Etapa 3. Organização do diagnóstico territorial de Campo Grande/MS

## Entradas utilizadas

A etapa utilizou o cadastro metodológico vigente (metodologia/metodologia.js, versão 2.0.0, 6 eixos e 150 fatores, gerado da planilha oficial metodologia/planilha/Fatores_organizacao.xlsx) e o documento Diagnostico_Situacional_CampoGrande_MS_Matriz_v1.0.2.docx, recebido em 20/10/2026 e elaborado segundo a organização final dos fatores. O documento substitui integralmente o diagnóstico anterior (DOC-20261008-WA0072.docx, organizado em 126 fatores), que foi retirado do projeto junto com a tabela de correspondência e os pendentes que dele decorriam. O novo documento foi copiado sem alteração para territorios/fontes/.

## Leitura do documento

O documento traz capa institucional (PICAPS, CoLaboratório CTIS, Fiocruz Brasília) com ficha do município, resumo executivo com quadro dos eixos, seis capítulos de eixo, síntese estratégica e notas metodológicas e fontes. Cada capítulo de eixo abre com uma tabela de contradição central, foco pedagógico e ODS mobilizados (a do Eixo 1 não tem a linha de ODS mobilizados) e um parágrafo introdutório. Cada fator é identificado por uma tabela com o identificador do cadastro, o nome e o ODS, seguida da definição de referência e de um parágrafo de diagnóstico. A síntese estratégica reúne nós críticos, potencialidades e matriz de prioridades para o ciclo PICAPS. As notas registram os fatores de baixa aplicabilidade territorial, as principais lacunas de informação e as fontes utilizadas por eixo, com ano de referência e escala. No total, são 496 blocos com conteúdo: 335 parágrafos e 161 tabelas.

O documento declara seguir a Matriz de Fatores v1.0.2, com 150 fatores, que corresponde à versão 2.0.0 do cadastro do painel.

## Correspondência com o cadastro

Como o documento usa os identificadores do cadastro, a correspondência é direta. Os 150 fatores do documento coincidem com os 150 do cadastro, na mesma ordem. Para cada um, o nome, o ODS e a definição de referência do documento são idênticos aos do cadastro. A verificação é feita pelo gerador e repetida pela conferência de fidelidade. Não há diagnóstico pendente de validação, fator do cadastro sem diagnóstico ou texto sem fator.

## Estrutura dos dados

O arquivo territorios/campo-grande-ms.js (formato diagnostico-territorial/2) registra window.TERRITORIOS["campo-grande-ms"]. Ele não repete nenhum dado do cadastro e se liga aos fatores pelo identificador. A definição de referência, que o documento reproduz, permanece apenas no cadastro, depois de conferida.

O arquivo contém:
- identificação do território;
- situação, com aviso de que Campo Grande/MS é o território de exemplo da plataforma e de que os textos não se generalizam para outras localidades;
- versão da metodologia;
- dados e capa do documento-fonte;
- resumo executivo com o quadro dos eixos;
- abertura de cada eixo (contradição central, foco pedagógico, ODS mobilizados e introdução);
- síntese estratégica e notas metodológicas, com suas tabelas;
- os 150 diagnósticos.

Cada diagnóstico tem:
- texto: cópia integral do parágrafo;
- fontes_citadas: trechos literais que apresentam a origem de um dado ou de uma constatação, entre parênteses ou no corpo do texto;
- referencias_normativas: leis, plano diretor, estatuto, planos e políticas citados;
- periodos_citados: anos que aparecem literalmente no texto;
- fatores_relacionados: identificadores de outros fatores citados no próprio texto;
- origem: identificação no documento;
- correspondencia: forma de associação.

O critério de fontes exclui o que o documento indica como fonte a consultar, extrair ou incorporar, pois são lacunas declaradas, e não origem de dado. Também exclui as instituições citadas só como atores ou prestadoras de serviço e a expressão informação pública disponível. A seleção foi feita em duas varreduras, a segunda pelo nome das fontes, para não depender dos verbos usados. A lista está em territorios/correspondencias/campo-grande-ms.fontes.json, e cada trecho precisa aparecer literalmente no texto.

O arquivo é gerado por territorios/ferramentas/gerar_territorio.py, que lê o .docx no formato padrão descrito acima. Esse formato passa a ser o modelo para os documentos de novos territórios.

## Resultado

| Eixo | Fatores | Com diagnóstico |
|---|---|---|
| E1 O Suor que não nos Sustenta | 29 | 29 |
| E2 A Vida em Risco | 38 | 38 |
| E3 Nossos Corpos Silenciados | 18 | 18 |
| E4 A Terra de Quem? | 24 | 24 |
| E5 A Cidade Negada | 29 | 29 |
| E6 A Voz na Mesa | 12 | 12 |
| Total | 150 | 150 |

Dos 150 diagnósticos, 77 citam ao menos uma fonte e 16 citam referência normativa. Todos remetem a outros fatores, o que permite navegar pelas articulações entre fatores. Os fatores mais citados como relacionados são E3-F14 Acolhimento de vulneráveis e população em situação de rua e E6-F07 Participação social na tomada de decisão, com 11 menções cada.

Cinco textos apresentam dado quantitativo sem fonte citada no próprio parágrafo: E1-F11 Iniciativas de economia solidária, E1-F16 Ambientes de trabalho seguros, E1-F21 Industrialização inclusiva e sustentável, E2-F31 Acesso a serviços essenciais de energia, abastecimento de água, coleta de lixo etc., E3-F09 Monitoramento dos vulneráveis (idosos, PCDs e crianças). Os valores constam de outros trechos do documento ou do quadro de fontes por eixo das notas metodológicas, mas a atribuição não está no texto do fator e foi mantida como está.

O documento registra explicitamente lacunas de informação em 89 dos 150 diagnósticos, indicando dados a extrair (SIM, SINASC, SINAN, CNES, Censo Escolar, RAIS, ANEEL e outros) ou a produzir pela cartografia social. Essas lacunas estão na tabela de conferência e formam uma agenda de qualificação do diagnóstico.

## Validação

O validador estrutural (testes/validar-territorio.js) aprovou as sete verificações e confirmou que todos os fatores relacionados existem no cadastro.

A conferência de fidelidade (testes/conferir_fidelidade_territorio.py) lê o .docx diretamente do XML do Word, sem usar o gerador. Ela confirmou três pontos:
- os 150 diagnósticos são idênticos ao documento;
- nome, ODS e definição de referência de cada fator coincidem com o cadastro;
- os 496 blocos de conteúdo do documento, incluindo todas as células de tabela, estão representados no arquivo, ou seja, nada foi descartado.

Dois testes de controle foram executados. Numa cópia com quatro erros introduzidos (fonte inexistente no texto, identificador inexistente, número alterado na introdução do Eixo 1 e texto alterado nas potencialidades), os quatro foram detectados. Noutra cópia, com um número alterado no diagnóstico de E2-F07, a alteração também foi detectada.

O painel ainda não carrega o arquivo do território. Essa ligação é o objeto da Etapa 4.

## Tabela de conferência

A tabela completa, com fatores relacionados, está em relatorios/etapa3-conferencia-fatores.csv.

| Eixo | ID | Fator | Diagnóstico localizado | Fonte documental | Correspondência validada | Pendências |
|---|---|---|---|---|---|---|
| E1 | E1-F01 | Cuidado com crianças e grupos vulneráveis | sim | Censo da População em Situação de Rua | sim, por identificador |  |
| E1 | E1-F02 | Alimentos | sim | IBGE, escala municipal; Semadesc; PNAD Contínua, módulo de segurança alimentar | sim, por identificador | O texto registra lacuna de informação. |
| E1 | E1-F03 | Agricultura familiar | sim | IBGE | sim, por identificador | O texto registra lacuna de informação. |
| E1 | E1-F04 | Produção de alimentos – hortas, hortos, quintais e outros que produzem alimentos | sim | nenhuma fonte citada no texto | sim, por identificador | O texto registra lacuna de informação. |
| E1 | E1-F05 | Produção orgânica | sim | nenhuma fonte citada no texto | sim, por identificador | O texto registra lacuna de informação. |
| E1 | E1-F06 | Disponibilidade de alimentos | sim | nenhuma fonte citada no texto | sim, por identificador | O texto registra lacuna de informação. |
| E1 | E1-F07 | Trabalho de assistência e doméstico não remunerado | sim | nenhuma fonte citada no texto | sim, por identificador |  |
| E1 | E1-F08 | Geração de emprego e renda | sim | IBGE; CAGED; Semadesc, 2025 | sim, por identificador |  |
| E1 | E1-F09 | Empreendedorismo solidário, criatividade e inovação | sim | Prefeitura Municipal | sim, por identificador | O texto registra lacuna de informação. |
| E1 | E1-F10 | Formalização de emprego (CLT, MEI, ECOSOL) | sim | RAIS | sim, por identificador |  |
| E1 | E1-F11 | Iniciativas de economia solidária | sim | nenhuma fonte citada no texto | sim, por identificador | Dado quantitativo sem fonte citada no texto. O texto registra lacuna de informação. |
| E1 | E1-F12 | Disponibilidade de emprego | sim | CAGED; GT-PSR, 2025 | sim, por identificador |  |
| E1 | E1-F13 | Desemprego | sim | levantamento municipal divulgado pela imprensa | sim, por identificador | O texto registra lacuna de informação. |
| E1 | E1-F14 | Trabalho infantil | sim | GT-PSR | sim, por identificador | O texto registra lacuna de informação. |
| E1 | E1-F15 | Trabalho em condições análogas às de escravidão | sim | Censos de 2010 e 2022 | sim, por identificador | O texto registra lacuna de informação. |
| E1 | E1-F16 | Ambientes de trabalho seguros | sim | nenhuma fonte citada no texto | sim, por identificador | Dado quantitativo sem fonte citada no texto. |
| E1 | E1-F17 | Ações solidárias locais | sim | nenhuma fonte citada no texto | sim, por identificador | O texto registra lacuna de informação. |
| E1 | E1-F18 | Condições de trabalho | sim | RAIS | sim, por identificador |  |
| E1 | E1-F19 | Promoção de políticas de investimento local | sim | Semadesc; Instituto Trata Brasil, 2025 | sim, por identificador |  |
| E1 | E1-F20 | Acesso a serviços bancários | sim | Censo 2022 | sim, por identificador |  |
| E1 | E1-F21 | Industrialização inclusiva e sustentável | sim | nenhuma fonte citada no texto | sim, por identificador | Dado quantitativo sem fonte citada no texto. O texto registra lacuna de informação. |
| E1 | E1-F22 | Crédito para micro, pequenas empresas e cooperativas | sim | nenhuma fonte citada no texto | sim, por identificador | O texto registra lacuna de informação. |
| E1 | E1-F23 | Atividades econômicas sustentáveis | sim | MapBiomas | sim, por identificador | O texto registra lacuna de informação. |
| E1 | E1-F24 | Cobrança de preços abusivos por itens básicos | sim | nenhuma fonte citada no texto | sim, por identificador |  |
| E1 | E1-F25 | Regulamentação e monitoramento dos mercados e instituições (monopólios e preço justo) | sim | Ranking do Saneamento do Instituto Trata Brasil | sim, por identificador |  |
| E1 | E1-F26 | Sistemas sustentáveis de produção de alimentos | sim | Monitor do Fogo do MapBiomas | sim, por identificador |  |
| E1 | E1-F27 | Economia circular | sim | Instituto Água e Saneamento, base SNIS | sim, por identificador | O texto registra lacuna de informação. |
| E1 | E1-F28 | Trabalho informal | sim | nenhuma fonte citada no texto | sim, por identificador |  |
| E1 | E1-F29 | Crédito para adaptação climática e reconstrução | sim | nenhuma fonte citada no texto | sim, por identificador | O texto registra lacuna de informação. |
| E2 | E2-F01 | Área inundada | sim | CEMADEN; Plano Diretor de Desenvolvimento Urbano Ambiental (Lei Complementar nº 341/2018) | sim, por identificador | O texto registra lacuna de informação. |
| E2 | E2-F02 | Insegurança alimentar | sim | Censo do GT-PSR de 2025 | sim, por identificador | O texto registra lacuna de informação. |
| E2 | E2-F03 | Mortalidade materna | sim | SES-MS, 2023 | sim, por identificador |  |
| E2 | E2-F04 | Mortalidade neonatal | sim | nenhuma fonte citada no texto | sim, por identificador | O texto registra lacuna de informação. |
| E2 | E2-F05 | Mortalidade infantil | sim | Boletim do Comitê Estadual de Prevenção da Mortalidade, 2025; e-Gestor; IBGE Cidades; DATASUS | sim, por identificador | O texto registra lacuna de informação. |
| E2 | E2-F06 | Doenças decorrentes de contaminação e poluição do ar, da água e do solo | sim | Instituto Água e Saneamento; projeto QualiAr da UFMS | sim, por identificador | O texto registra lacuna de informação. |
| E2 | E2-F07 | Dengue | sim | SES-MS; Sesau; boletim municipal | sim, por identificador |  |
| E2 | E2-F08 | Doenças transmissíveis (AIDS, tuberculose, hanseníase, negligenciadas) | sim | Informe Técnico em Saúde Única da SES-MS (2025) | sim, por identificador | O texto registra lacuna de informação. |
| E2 | E2-F09 | Doenças não transmissíveis (crônicas) | sim | SES-MS, 2024; e-Gestor; Plano Regional da Macrorregião de Saúde de Campo Grande | sim, por identificador | O texto registra lacuna de informação. |
| E2 | E2-F10 | Uso de drogas e álcool | sim | Prefeitura Municipal, 2023; Censo do GT-PSR de 2025 | sim, por identificador |  |
| E2 | E2-F11 | Acidentes em estradas | sim | nenhuma fonte citada no texto | sim, por identificador | O texto registra lacuna de informação. |
| E2 | E2-F12 | Saúde sexual e reprodutiva | sim | Plano Estadual de Saúde 2024-2027 | sim, por identificador | O texto registra lacuna de informação. |
| E2 | E2-F13 | Acesso a medicamentos | sim | nenhuma fonte citada no texto | sim, por identificador | O texto registra lacuna de informação. |
| E2 | E2-F14 | Cobertura vacinal | sim | OPAS | sim, por identificador | O texto registra lacuna de informação. |
| E2 | E2-F15 | Serviços de saúde | sim | e-Gestor | sim, por identificador |  |
| E2 | E2-F16 | Profissionais de saúde | sim | nenhuma fonte citada no texto | sim, por identificador | O texto registra lacuna de informação. |
| E2 | E2-F17 | Tornado/Vendaval | sim | INMET | sim, por identificador |  |
| E2 | E2-F18 | Saúde mental | sim | Prefeitura Municipal | sim, por identificador |  |
| E2 | E2-F19 | Saúde do idoso | sim | IBGE; Censos de 2010 e 2022 | sim, por identificador | O texto registra lacuna de informação. |
| E2 | E2-F20 | Acesso à água e saneamento | sim | Instituto Trata Brasil, Ranking 2025, base SINISA; Censo 2022 | sim, por identificador |  |
| E2 | E2-F21 | Contaminação e poluição do ar, da água e do solo | sim | Instituto Água e Saneamento | sim, por identificador | O texto registra lacuna de informação. |
| E2 | E2-F22 | Participação das comunidades locais na gestão da água e saneamento | sim | nenhuma fonte citada no texto | sim, por identificador |  |
| E2 | E2-F23 | Gestão da água e saneamento | sim | SNIS 2021; Plano Municipal de Saneamento Básico | sim, por identificador |  |
| E2 | E2-F25 | Qualidade do ar | sim | MapBiomas, Monitor do Fogo; projeto QualiAr | sim, por identificador |  |
| E2 | E2-F26 | Rota de fuga | sim | relatório do Imasul sobre barragens urbanas; Relatório de Segurança de Barragens 2024-2025 da ANA | sim, por identificador | O texto registra lacuna de informação. |
| E2 | E2-F27 | Segurança | sim | nenhuma fonte citada no texto | sim, por identificador | O texto registra lacuna de informação. |
| E2 | E2-F28 | Violência | sim | Agência Brasil, 2024; Instituto Cidades Sustentáveis; monitor estadual da Sejusp-MS e do Tribunal de Justiça; Anuário Brasileiro de Segurança Pública | sim, por identificador |  |
| E2 | E2-F29 | Comunicação e gestão pós-desastre | sim | Energisa | sim, por identificador |  |
| E2 | E2-F30 | Seca/Estiagem | sim | Semadesc, Monitor de Secas | sim, por identificador |  |
| E2 | E2-F31 | Acesso a serviços essenciais de energia, abastecimento de água, coleta de lixo etc. | sim | nenhuma fonte citada no texto | sim, por identificador | Dado quantitativo sem fonte citada no texto. |
| E2 | E2-F32 | Gestão de riscos e emergências (defesa civil, bombeiros, brigadas e outros coletivos) | sim | nenhuma fonte citada no texto | sim, por identificador |  |
| E2 | E2-F33 | Pontos de riscos e desastres no território | sim | relatório da ANA | sim, por identificador | O texto registra lacuna de informação. |
| E2 | E2-F34 | Enchentes e alagamentos | sim | CEMADEN | sim, por identificador |  |
| E2 | E2-F35 | Infestações e pragas (mosquito, carrapato, escorpião, animais peçonhentos etc.) | sim | SES-MS; dados divulgados pela imprensa local com base na Secretaria Municipal de Saúde | sim, por identificador |  |
| E2 | E2-F36 | Pontos de deslizamento de terra | sim | nenhuma fonte citada no texto | sim, por identificador | O texto registra lacuna de informação. |
| E2 | E2-F37 | Sirenes e alertas de emergências | sim | INMET | sim, por identificador |  |
| E2 | E2-F38 | Queimada/Incêndio | sim | MapBiomas; projeto QualiAr da UFMS | sim, por identificador | O texto registra lacuna de informação. |
| E2 | E2-F39 | Ponto de encontro em emergências | sim | nenhuma fonte citada no texto | sim, por identificador | O texto registra lacuna de informação. |
| E3 | E3-F01 | Pobreza | sim | IBGE, escala municipal; Semadesc, 2023; Atlas do Desenvolvimento Humano, base Censo 2010; levantamento municipal | sim, por identificador |  |
| E3 | E3-F02 | Discriminação e violência contra mulheres e meninas | sim | Anuário Brasileiro de Segurança Pública | sim, por identificador |  |
| E3 | E3-F03 | Casamentos prematuros, forçados e de crianças | sim | dados divulgados pela imprensa com base no SINASC | sim, por identificador | O texto registra lacuna de informação. |
| E3 | E3-F04 | Igualdade de oportunidades para promover o empoderamento das mulheres | sim | nenhuma fonte citada no texto | sim, por identificador |  |
| E3 | E3-F05 | Propriedade e controle sobre a terra para as mulheres | sim | Lei nº 13.465/2017 | sim, por identificador | O texto registra lacuna de informação. |
| E3 | E3-F06 | Ação do Estado na coordenação e coerência de políticas para igualdade de gênero | sim | nenhuma fonte citada no texto | sim, por identificador | O texto registra lacuna de informação. |
| E3 | E3-F07 | Tráfico de pessoas | sim | GT-PSR | sim, por identificador | O texto registra lacuna de informação. |
| E3 | E3-F08 | Direitos fundamentais | sim | Censo 2022 | sim, por identificador |  |
| E3 | E3-F09 | Monitoramento dos vulneráveis (idosos, PCDs e crianças) | sim | LGPD | sim, por identificador | Dado quantitativo sem fonte citada no texto. |
| E3 | E3-F10 | Empoderamento e inclusão social, econômica e política | sim | Lei nº 7.227/2024 | sim, por identificador |  |
| E3 | E3-F11 | Acessibilidade e inclusão | sim | Censo 2022 | sim, por identificador | O texto registra lacuna de informação. |
| E3 | E3-F12 | Serviços públicos e políticas de proteção social | sim | nenhuma fonte citada no texto | sim, por identificador | O texto registra lacuna de informação. |
| E3 | E3-F13 | Migração | sim | Fernandes e Oliveira, Interações, 2024; Censo do GT-PSR de 2025 | sim, por identificador |  |
| E3 | E3-F14 | Acolhimento de vulneráveis e população em situação de rua | sim | Censo da População em Situação de Rua | sim, por identificador |  |
| E3 | E3-F16 | Discriminação racial | sim | Agência Brasil, 2024; SES-MS, 2023; Política Nacional de Saúde Integral da População Negra | sim, por identificador | O texto registra lacuna de informação. |
| E3 | E3-F17 | Racismo ambiental | sim | nenhuma fonte citada no texto | sim, por identificador | O texto registra lacuna de informação. |
| E3 | E3-F18 | Igualdade racial | sim | Estatuto da Igualdade Racial; Política Nacional de Saúde Integral da População Negra; Leis nº 10.639/2003 e nº 11.645/2008 | sim, por identificador | O texto registra lacuna de informação. |
| E3 | E3-F19 | Igualdade de direitos à propriedade e controle da terra (comunidades tradicionais e quilombolas) | sim | Censo 2022; Lei nº 7.227/2024 | sim, por identificador |  |
| E4 | E4-F01 | Acesso a recursos financeiros para gestão, conservação sustentável da biodiversidade (investimentos públicos e privados) | sim | nenhuma fonte citada no texto | sim, por identificador | O texto registra lacuna de informação. |
| E4 | E4-F02 | Gestão de bancos de sementes | sim | nenhuma fonte citada no texto | sim, por identificador | O texto registra lacuna de informação. |
| E4 | E4-F03 | Plantas medicinais (uso e plantio) | sim | Política Nacional de Práticas Integrativas e Complementares; Política Nacional de Plantas Medicinais e Fitoterápicos | sim, por identificador | O texto registra lacuna de informação. |
| E4 | E4-F04 | Proteção e restauração de ecossistemas hídricos | sim | Instituto Água e Saneamento | sim, por identificador |  |
| E4 | E4-F05 | Tecnologias sociais | sim | nenhuma fonte citada no texto | sim, por identificador | O texto registra lacuna de informação. |
| E4 | E4-F06 | Pesquisa científica e inovação | sim | nenhuma fonte citada no texto | sim, por identificador |  |
| E4 | E4-F07 | Construções sustentáveis e resilientes | sim | Plano Diretor de Desenvolvimento Urbano Ambiental (Lei Complementar nº 341/2018) | sim, por identificador | O texto registra lacuna de informação. |
| E4 | E4-F08 | Tecnologias ambientalmente corretas | sim | nenhuma fonte citada no texto | sim, por identificador | O texto registra lacuna de informação. |
| E4 | E4-F09 | Acesso à informação de qualidade | sim | QualiAr/UFMS; Sesau | sim, por identificador |  |
| E4 | E4-F10 | Reconstruções sustentáveis e resilientes | sim | nenhuma fonte citada no texto | sim, por identificador |  |
| E4 | E4-F11 | Educação ambiental e para adaptação climática | sim | Política Nacional de Educação Ambiental | sim, por identificador |  |
| E4 | E4-F12 | Planejamento relacionado à mudança do clima e à gestão eficaz | sim | Plano Diretor de Desenvolvimento Urbano Ambiental (Lei Complementar nº 341/2018) | sim, por identificador |  |
| E4 | E4-F13 | Gerenciar e proteger os oceanos, mares e recursos marinhos de forma sustentável | sim | nenhuma fonte citada no texto | sim, por identificador |  |
| E4 | E4-F14 | Pesquisa científica e inovação para recuperação de ambientes | sim | nenhuma fonte citada no texto | sim, por identificador | O texto registra lacuna de informação. |
| E4 | E4-F15 | Pescadores artesanais | sim | nenhuma fonte citada no texto | sim, por identificador | O texto registra lacuna de informação. |
| E4 | E4-F16 | Desmatamento e solos degradados | sim | nenhuma fonte citada no texto | sim, por identificador | O texto registra lacuna de informação. |
| E4 | E4-F17 | Gestão sustentável dos recursos naturais | sim | Plano Diretor | sim, por identificador |  |
| E4 | E4-F18 | Conhecimentos e práticas tradicionais de conservação e uso sustentável | sim | nenhuma fonte citada no texto | sim, por identificador |  |
| E4 | E4-F19 | Hospital veterinário e resgate de animais | sim | Informe Técnico da SES-MS (2025) | sim, por identificador |  |
| E4 | E4-F20 | Tráfico de espécies da flora e fauna (caça e pesca ilegal) | sim | registros de apreensões da Polícia Militar Ambiental e do IBAMA | sim, por identificador | O texto registra lacuna de informação. |
| E4 | E4-F21 | Espécies exóticas invasoras | sim | nenhuma fonte citada no texto | sim, por identificador | O texto registra lacuna de informação. |
| E4 | E4-F22 | Gestão sustentável da biodiversidade para o desenvolvimento e redução da pobreza | sim | nenhuma fonte citada no texto | sim, por identificador | O texto registra lacuna de informação. |
| E4 | E4-F24 | Transferência de tecnologias ambientalmente corretas (acesso) | sim | nenhuma fonte citada no texto | sim, por identificador | O texto registra lacuna de informação. |
| E4 | E4-F25 | Reflorestamento | sim | nenhuma fonte citada no texto | sim, por identificador | O texto registra lacuna de informação. |
| E5 | E5-F01 | Disponibilidade a abrigos para emergências | sim | Prefeitura; GT-PSR | sim, por identificador | O texto registra lacuna de informação. |
| E5 | E5-F02 | Vias obstruídas e danificadas – vias municipais, estaduais e federais | sim | CEMADEN | sim, por identificador |  |
| E5 | E5-F03 | Acidentes no transporte de produtos perigosos | sim | Plano Nacional de Prevenção, Preparação e Resposta Rápida a Emergências Ambientais | sim, por identificador | O texto registra lacuna de informação. |
| E5 | E5-F04 | Educação – ensino primário | sim | IBGE Cidades | sim, por identificador | O texto registra lacuna de informação. |
| E5 | E5-F05 | Educação técnica e profissional | sim | nenhuma fonte citada no texto | sim, por identificador | O texto registra lacuna de informação. |
| E5 | E5-F06 | Educação superior | sim | nenhuma fonte citada no texto | sim, por identificador | O texto registra lacuna de informação. |
| E5 | E5-F08 | Educação pública | sim | Prefeitura com base no INEP | sim, por identificador |  |
| E5 | E5-F09 | Alfabetização – EJA | sim | IBGE, escala municipal; Censo 2022 | sim, por identificador | O texto registra lacuna de informação. |
| E5 | E5-F10 | Formação em tecnologias sociais | sim | nenhuma fonte citada no texto | sim, por identificador | O texto registra lacuna de informação. |
| E5 | E5-F11 | Bolsas de estudo | sim | nenhuma fonte citada no texto | sim, por identificador | O texto registra lacuna de informação. |
| E5 | E5-F12 | Professores qualificados | sim | Prefeitura com base no INEP | sim, por identificador | O texto registra lacuna de informação. |
| E5 | E5-F13 | Acesso aos serviços de energia | sim | IBGE, 2026; concessionária | sim, por identificador | O texto registra lacuna de informação. |
| E5 | E5-F14 | Serviços de energia modernos e sustentáveis | sim | nenhuma fonte citada no texto | sim, por identificador | O texto registra lacuna de informação. |
| E5 | E5-F15 | Empreendimento com elevado risco de desastres | sim | Relatório de Segurança de Barragens 2024-2025 da ANA | sim, por identificador |  |
| E5 | E5-F16 | Educação para trabalho | sim | nenhuma fonte citada no texto | sim, por identificador | O texto registra lacuna de informação. |
| E5 | E5-F17 | Promoção de cultura | sim | nenhuma fonte citada no texto | sim, por identificador | O texto registra lacuna de informação. |
| E5 | E5-F18 | Acesso à cultura | sim | G1, 2025, escala das capitais; pesquisa do Ministério da Cultura divulgada em agosto de 2025 | sim, por identificador | O texto registra lacuna de informação. |
| E5 | E5-F19 | Sistema viário – vias municipais, estaduais e federais | sim | nenhuma fonte citada no texto | sim, por identificador | O texto registra lacuna de informação. |
| E5 | E5-F20 | Infraestrutura sustentável e resiliente | sim | nenhuma fonte citada no texto | sim, por identificador | O texto registra lacuna de informação. |
| E5 | E5-F21 | Tecnologias de informação e comunicação | sim | nenhuma fonte citada no texto | sim, por identificador | O texto registra lacuna de informação. |
| E5 | E5-F22 | Habitação | sim | IBGE, escala municipal; Censo 2022 | sim, por identificador | O texto registra lacuna de informação. |
| E5 | E5-F23 | Transportes seguros | sim | nenhuma fonte citada no texto | sim, por identificador | O texto registra lacuna de informação. |
| E5 | E5-F24 | Urbanização e infraestrutura | sim | IBGE, escala municipal; Censo 2022; Plano Diretor de Desenvolvimento Urbano Ambiental (Lei Complementar nº 341/2018) | sim, por identificador | O texto registra lacuna de informação. |
| E5 | E5-F25 | Equipamentos públicos de lazer e cultura seguros | sim | nenhuma fonte citada no texto | sim, por identificador | O texto registra lacuna de informação. |
| E5 | E5-F26 | Esportes | sim | nenhuma fonte citada no texto | sim, por identificador | O texto registra lacuna de informação. |
| E5 | E5-F27 | Biblioteca | sim | G1, 2025; pesquisa do Ministério da Cultura de 2025 | sim, por identificador | O texto registra lacuna de informação. |
| E5 | E5-F28 | Lazer | sim | nenhuma fonte citada no texto | sim, por identificador |  |
| E5 | E5-F29 | Valorização dos saberes e práticas locais | sim | nenhuma fonte citada no texto | sim, por identificador |  |
| E5 | E5-F30 | Acesso a iluminação pública | sim | nenhuma fonte citada no texto | sim, por identificador | O texto registra lacuna de informação. |
| E6 | E6-F01 | Associação de moradores e lideranças locais | sim | nenhuma fonte citada no texto | sim, por identificador | O texto registra lacuna de informação. |
| E6 | E6-F02 | Mobilização de redes e grupos organizados | sim | nenhuma fonte citada no texto | sim, por identificador |  |
| E6 | E6-F03 | Rádios comunitárias | sim | IBGE | sim, por identificador | O texto registra lacuna de informação. |
| E6 | E6-F04 | Parcerias entre instituições públicas, privadas e com a sociedade civil | sim | Prefeitura com base no e-Gestor, escala municipal | sim, por identificador |  |
| E6 | E6-F05 | Mutirão de limpeza | sim | dados municipais divulgados pela imprensa | sim, por identificador |  |
| E6 | E6-F06 | Combate ao crime organizado | sim | Agência Brasil, 2024; Anuário Brasileiro de Segurança Pública | sim, por identificador | O texto registra lacuna de informação. |
| E6 | E6-F07 | Participação social na tomada de decisão responsiva, inclusiva e participativa | sim | Lei nº 7.227/2024 | sim, por identificador |  |
| E6 | E6-F08 | Corrupção e suborno (em todos os níveis) | sim | nenhuma fonte citada no texto | sim, por identificador | O texto registra lacuna de informação. |
| E6 | E6-F09 | Instituições públicas e privadas em todos os níveis (transparência ativa) | sim | IBGE, escala municipal; IBGE Cidades | sim, por identificador |  |
| E6 | E6-F11 | Comunicação comunitária – grupos de mensagens | sim | nenhuma fonte citada no texto | sim, por identificador | O texto registra lacuna de informação. |
| E6 | E6-F15 | Grupos de escuta diários | sim | Prefeitura, escala municipal | sim, por identificador |  |
| E6 | E6-F16 | Igrejas, grupos religiosos e outros coletivos que apoiam as situações de emergência | sim | nenhuma fonte citada no texto | sim, por identificador | O texto registra lacuna de informação. |
