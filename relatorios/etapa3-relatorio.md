# Etapa 3. Organização do diagnóstico territorial de Campo Grande/MS

## Entradas utilizadas

A etapa utilizou o cadastro metodológico vigente, a Matriz de Fatores v1.0.2 (metodologia/metodologia.js, 6 eixos e 150 fatores, gerado da planilha oficial metodologia/planilha/Fatores_organizacao.xlsx), e o documento Diagnostico_Situacional_CampoGrande_MS_Matriz_v1.0.2.docx, elaborado segundo a organização final dos fatores. O documento recebido em 20/10/2026 às 00h28 foi substituído, no mesmo dia, pela versão ajustada pela coordenação. Nessa versão, 28 diagnósticos foram revistos com consulta direta às fontes, retirando declarações de lacuna de informação. O diagnóstico anterior, organizado em 126 fatores (DOC-20261008-WA0072.docx), foi retirado do projeto com a correspondência e os pendentes que dele decorriam. O documento vigente foi copiado sem alteração para territorios/fontes/.

## Leitura do documento

O documento traz capa institucional (PICAPS, CoLaboratório CTIS, Fiocruz Brasília) com ficha do município, resumo executivo com quadro dos eixos, seis capítulos de eixo, síntese estratégica e notas metodológicas e fontes. Cada capítulo de eixo abre com uma tabela de contradição central e foco pedagógico e com um parágrafo introdutório. Cada fator é identificado por uma tabela com o identificador do cadastro, o nome e o ODS, seguida da definição de referência e de um parágrafo de diagnóstico. A síntese estratégica reúne nós críticos, potencialidades e matriz de prioridades para o ciclo PICAPS. As notas registram os fatores de baixa aplicabilidade territorial, as principais lacunas de informação e as fontes utilizadas por eixo, com ano de referência e escala. No total, são 496 blocos com conteúdo: 335 parágrafos e 161 tabelas.

As tabelas de abertura dos Eixos 2 a 6 trazem também uma linha ODS mobilizados, ausente no Eixo 1. Por decisão de 20/10/2026, essa linha foi excluída dos dados de todos os eixos. A decisão está registrada em territorios/correspondencias/campo-grande-ms.meta.json e no arquivo do território, e o documento-fonte não foi alterado.

## Correspondência com o cadastro

O documento usa os identificadores do cadastro, e a correspondência é direta. Os 150 fatores do documento coincidem com os 150 do cadastro, na mesma ordem. Nome, ODS e definição de referência do documento são idênticos aos do cadastro em todos os fatores. A verificação é feita pelo gerador e repetida pela conferência de fidelidade. Não há diagnóstico pendente de validação, fator do cadastro sem diagnóstico ou texto sem fator.

## Estrutura dos dados

O arquivo territorios/campo-grande-ms.js (formato diagnostico-territorial/2) registra window.TERRITORIOS["campo-grande-ms"]. Ele não repete nenhum dado do cadastro e se liga aos fatores pelo identificador. A definição de referência, que o documento reproduz, permanece apenas no cadastro, depois de conferida.

O arquivo contém:
- identificação do território;
- situação, com aviso de que Campo Grande/MS é o território de exemplo da plataforma e de que os textos não se generalizam para outras localidades;
- decisões registradas;
- versão da metodologia;
- dados e capa do documento-fonte;
- resumo executivo com o quadro dos eixos;
- abertura de cada eixo (contradição central, foco pedagógico e introdução);
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

O critério de fontes exclui o que o documento indica como fonte a consultar, extrair ou incorporar, as instituições citadas só como atores ou prestadoras de serviço e a expressão informação pública disponível. A seleção foi feita em duas varreduras, a segunda pelo nome das fontes. A lista está em territorios/correspondencias/campo-grande-ms.fontes.json, e cada trecho precisa aparecer literalmente no texto. A revisão de 20/10/2026 só retirou ou encurtou frases, sem introduzir dado ou fonte nova, e todas as fontes registradas continuam presentes nos textos.

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

Dos 150 diagnósticos, 77 citam ao menos uma fonte e 16 citam referência normativa. Todos remetem a outros fatores.

A revisão da coordenação reduziu de 89 para 65 os diagnósticos que declaram lacuna de informação. As lacunas remanescentes indicam dados a extrair (SIM, SINASC, SINAN, CNES, Censo Escolar, ANEEL e outros) ou a produzir pela cartografia social, e estão marcadas na tabela de conferência.

Cinco textos apresentam dado quantitativo sem fonte citada no próprio parágrafo: E1-F11 Iniciativas de economia solidária, E1-F16 Ambientes de trabalho seguros, E1-F21 Industrialização inclusiva e sustentável, E2-F31 Acesso a serviços essenciais de energia, abastecimento de água, coleta de lixo etc., E3-F09 Monitoramento dos vulneráveis (idosos, PCDs e crianças). Foram mantidos como estão.

No texto revisto de E2-F01 Área inundada, a frase final ficou deve ser suprida pela Defesa Civil, pelo Plano Diretor de Desenvolvimento Urbano Ambiental (Lei Complementar nº 341/2018), sem conjunção entre os dois termos. O texto foi reproduzido como está no documento.

## Validação

O validador estrutural (testes/validar-territorio.js) aprovou as sete verificações e confirmou que todos os fatores relacionados existem no cadastro.

A conferência de fidelidade (testes/conferir_fidelidade_territorio.py) lê o .docx diretamente do XML do Word, sem usar o gerador. Ela confirmou que:
- os 150 diagnósticos são idênticos ao documento;
- nome, ODS e definição de referência de cada fator coincidem com o cadastro;
- os 496 blocos de conteúdo estão representados no arquivo, com exceção das cinco linhas ODS mobilizados excluídas por decisão registrada.

A contradição central e o foco pedagógico são conferidos contra o campo do próprio eixo, e não contra qualquer ponto do arquivo. Com isso, a coincidência com o quadro do resumo executivo não mascara uma eventual perda.

Os testes de controle introduziram erros de propósito em cópias do arquivo, e todos foram detectados:
- fonte inexistente no texto;
- identificador inexistente;
- número alterado na introdução de um eixo;
- texto alterado nas potencialidades;
- número alterado no diagnóstico de E2-F07;
- contradição central apagada no Eixo 3.

O painel ainda não carrega o arquivo do território. Essa ligação é o objeto da Etapa 4.

## Tabela de conferência

A tabela completa, com fatores relacionados e indicação dos textos ajustados em 20/10/2026, está em relatorios/etapa3-conferencia-fatores.csv.

| Eixo | ID | Fator | Fonte documental | Ajustado em 20/10 | Pendências |
|---|---|---|---|---|---|
| E1 | E1-F01 | Cuidado com crianças e grupos vulneráveis | Censo da População em Situação de Rua | não |  |
| E1 | E1-F02 | Alimentos | IBGE, escala municipal; Semadesc | sim |  |
| E1 | E1-F03 | Agricultura familiar | IBGE | sim |  |
| E1 | E1-F04 | Produção de alimentos – hortas, hortos, quintais e outros que produzem alimentos | nenhuma fonte citada no texto | sim |  |
| E1 | E1-F05 | Produção orgânica | nenhuma fonte citada no texto | sim |  |
| E1 | E1-F06 | Disponibilidade de alimentos | nenhuma fonte citada no texto | não | O texto registra lacuna de informação. |
| E1 | E1-F07 | Trabalho de assistência e doméstico não remunerado | nenhuma fonte citada no texto | não |  |
| E1 | E1-F08 | Geração de emprego e renda | IBGE; CAGED; Semadesc, 2025 | não |  |
| E1 | E1-F09 | Empreendedorismo solidário, criatividade e inovação | Prefeitura Municipal | sim |  |
| E1 | E1-F10 | Formalização de emprego (CLT, MEI, ECOSOL) | RAIS | não |  |
| E1 | E1-F11 | Iniciativas de economia solidária | nenhuma fonte citada no texto | sim | Dado quantitativo sem fonte citada no texto. |
| E1 | E1-F12 | Disponibilidade de emprego | CAGED; GT-PSR, 2025 | não |  |
| E1 | E1-F13 | Desemprego | levantamento municipal divulgado pela imprensa | não | O texto registra lacuna de informação. |
| E1 | E1-F14 | Trabalho infantil | GT-PSR | não | O texto registra lacuna de informação. |
| E1 | E1-F15 | Trabalho em condições análogas às de escravidão | Censos de 2010 e 2022 | não | O texto registra lacuna de informação. |
| E1 | E1-F16 | Ambientes de trabalho seguros | nenhuma fonte citada no texto | não | Dado quantitativo sem fonte citada no texto. |
| E1 | E1-F17 | Ações solidárias locais | nenhuma fonte citada no texto | sim |  |
| E1 | E1-F18 | Condições de trabalho | RAIS | não |  |
| E1 | E1-F19 | Promoção de políticas de investimento local | Semadesc; Instituto Trata Brasil, 2025 | não |  |
| E1 | E1-F20 | Acesso a serviços bancários | Censo 2022 | não |  |
| E1 | E1-F21 | Industrialização inclusiva e sustentável | nenhuma fonte citada no texto | sim | Dado quantitativo sem fonte citada no texto. |
| E1 | E1-F22 | Crédito para micro, pequenas empresas e cooperativas | nenhuma fonte citada no texto | sim |  |
| E1 | E1-F23 | Atividades econômicas sustentáveis | MapBiomas | sim |  |
| E1 | E1-F24 | Cobrança de preços abusivos por itens básicos | nenhuma fonte citada no texto | não |  |
| E1 | E1-F25 | Regulamentação e monitoramento dos mercados e instituições (monopólios e preço justo) | Ranking do Saneamento do Instituto Trata Brasil | não |  |
| E1 | E1-F26 | Sistemas sustentáveis de produção de alimentos | Monitor do Fogo do MapBiomas | não |  |
| E1 | E1-F27 | Economia circular | Instituto Água e Saneamento, base SNIS | sim |  |
| E1 | E1-F28 | Trabalho informal | nenhuma fonte citada no texto | não |  |
| E1 | E1-F29 | Crédito para adaptação climática e reconstrução | nenhuma fonte citada no texto | não | O texto registra lacuna de informação. |
| E2 | E2-F01 | Área inundada | CEMADEN; Plano Diretor de Desenvolvimento Urbano Ambiental (Lei Complementar nº 341/2018) | sim | O texto registra lacuna de informação. |
| E2 | E2-F02 | Insegurança alimentar | Censo do GT-PSR de 2025 | não | O texto registra lacuna de informação. |
| E2 | E2-F03 | Mortalidade materna | SES-MS, 2023 | não |  |
| E2 | E2-F04 | Mortalidade neonatal | nenhuma fonte citada no texto | não | O texto registra lacuna de informação. |
| E2 | E2-F05 | Mortalidade infantil | Boletim do Comitê Estadual de Prevenção da Mortalidade, 2025; e-Gestor; IBGE Cidades; DATASUS | não | O texto registra lacuna de informação. |
| E2 | E2-F06 | Doenças decorrentes de contaminação e poluição do ar, da água e do solo | Instituto Água e Saneamento; projeto QualiAr da UFMS | não | O texto registra lacuna de informação. |
| E2 | E2-F07 | Dengue | SES-MS; Sesau; boletim municipal | não |  |
| E2 | E2-F08 | Doenças transmissíveis (AIDS, tuberculose, hanseníase, negligenciadas) | Informe Técnico em Saúde Única da SES-MS (2025) | não | O texto registra lacuna de informação. |
| E2 | E2-F09 | Doenças não transmissíveis (crônicas) | SES-MS, 2024; e-Gestor; Plano Regional da Macrorregião de Saúde de Campo Grande | não | O texto registra lacuna de informação. |
| E2 | E2-F10 | Uso de drogas e álcool | Prefeitura Municipal, 2023; Censo do GT-PSR de 2025 | não |  |
| E2 | E2-F11 | Acidentes em estradas | nenhuma fonte citada no texto | não | O texto registra lacuna de informação. |
| E2 | E2-F12 | Saúde sexual e reprodutiva | Plano Estadual de Saúde 2024-2027 | não | O texto registra lacuna de informação. |
| E2 | E2-F13 | Acesso a medicamentos | nenhuma fonte citada no texto | não | O texto registra lacuna de informação. |
| E2 | E2-F14 | Cobertura vacinal | OPAS | não | O texto registra lacuna de informação. |
| E2 | E2-F15 | Serviços de saúde | e-Gestor | não |  |
| E2 | E2-F16 | Profissionais de saúde | nenhuma fonte citada no texto | não | O texto registra lacuna de informação. |
| E2 | E2-F17 | Tornado/Vendaval | INMET | não |  |
| E2 | E2-F18 | Saúde mental | Prefeitura Municipal | não |  |
| E2 | E2-F19 | Saúde do idoso | IBGE; Censos de 2010 e 2022 | não | O texto registra lacuna de informação. |
| E2 | E2-F20 | Acesso à água e saneamento | Instituto Trata Brasil, Ranking 2025, base SINISA; Censo 2022 | não |  |
| E2 | E2-F21 | Contaminação e poluição do ar, da água e do solo | Instituto Água e Saneamento | não | O texto registra lacuna de informação. |
| E2 | E2-F22 | Participação das comunidades locais na gestão da água e saneamento | nenhuma fonte citada no texto | não |  |
| E2 | E2-F23 | Gestão da água e saneamento | SNIS 2021; Plano Municipal de Saneamento Básico | não |  |
| E2 | E2-F25 | Qualidade do ar | MapBiomas, Monitor do Fogo; projeto QualiAr | não |  |
| E2 | E2-F26 | Rota de fuga | relatório do Imasul sobre barragens urbanas; Relatório de Segurança de Barragens 2024-2025 da ANA | não | O texto registra lacuna de informação. |
| E2 | E2-F27 | Segurança | nenhuma fonte citada no texto | não | O texto registra lacuna de informação. |
| E2 | E2-F28 | Violência | Agência Brasil, 2024; Instituto Cidades Sustentáveis; monitor estadual da Sejusp-MS e do Tribunal de Justiça; Anuário Brasileiro de Segurança Pública | não |  |
| E2 | E2-F29 | Comunicação e gestão pós-desastre | Energisa | não |  |
| E2 | E2-F30 | Seca/Estiagem | Semadesc, Monitor de Secas | não |  |
| E2 | E2-F31 | Acesso a serviços essenciais de energia, abastecimento de água, coleta de lixo etc. | nenhuma fonte citada no texto | não | Dado quantitativo sem fonte citada no texto. |
| E2 | E2-F32 | Gestão de riscos e emergências (defesa civil, bombeiros, brigadas e outros coletivos) | nenhuma fonte citada no texto | não |  |
| E2 | E2-F33 | Pontos de riscos e desastres no território | relatório da ANA | não | O texto registra lacuna de informação. |
| E2 | E2-F34 | Enchentes e alagamentos | CEMADEN | não |  |
| E2 | E2-F35 | Infestações e pragas (mosquito, carrapato, escorpião, animais peçonhentos etc.) | SES-MS; dados divulgados pela imprensa local com base na Secretaria Municipal de Saúde | não |  |
| E2 | E2-F36 | Pontos de deslizamento de terra | nenhuma fonte citada no texto | não | O texto registra lacuna de informação. |
| E2 | E2-F37 | Sirenes e alertas de emergências | INMET | não |  |
| E2 | E2-F38 | Queimada/Incêndio | MapBiomas; projeto QualiAr da UFMS | não | O texto registra lacuna de informação. |
| E2 | E2-F39 | Ponto de encontro em emergências | nenhuma fonte citada no texto | sim |  |
| E3 | E3-F01 | Pobreza | IBGE, escala municipal; Semadesc, 2023; Atlas do Desenvolvimento Humano, base Censo 2010; levantamento municipal | não |  |
| E3 | E3-F02 | Discriminação e violência contra mulheres e meninas | Anuário Brasileiro de Segurança Pública | não |  |
| E3 | E3-F03 | Casamentos prematuros, forçados e de crianças | dados divulgados pela imprensa com base no SINASC | não | O texto registra lacuna de informação. |
| E3 | E3-F04 | Igualdade de oportunidades para promover o empoderamento das mulheres | nenhuma fonte citada no texto | não |  |
| E3 | E3-F05 | Propriedade e controle sobre a terra para as mulheres | Lei nº 13.465/2017 | não | O texto registra lacuna de informação. |
| E3 | E3-F06 | Ação do Estado na coordenação e coerência de políticas para igualdade de gênero | nenhuma fonte citada no texto | não | O texto registra lacuna de informação. |
| E3 | E3-F07 | Tráfico de pessoas | GT-PSR | não | O texto registra lacuna de informação. |
| E3 | E3-F08 | Direitos fundamentais | Censo 2022 | não |  |
| E3 | E3-F09 | Monitoramento dos vulneráveis (idosos, PCDs e crianças) | LGPD | não | Dado quantitativo sem fonte citada no texto. |
| E3 | E3-F10 | Empoderamento e inclusão social, econômica e política | Lei nº 7.227/2024 | não |  |
| E3 | E3-F11 | Acessibilidade e inclusão | Censo 2022 | não | O texto registra lacuna de informação. |
| E3 | E3-F12 | Serviços públicos e políticas de proteção social | nenhuma fonte citada no texto | não | O texto registra lacuna de informação. |
| E3 | E3-F13 | Migração | Fernandes e Oliveira, Interações, 2024; Censo do GT-PSR de 2025 | não |  |
| E3 | E3-F14 | Acolhimento de vulneráveis e população em situação de rua | Censo da População em Situação de Rua | não |  |
| E3 | E3-F16 | Discriminação racial | Agência Brasil, 2024; SES-MS, 2023; Política Nacional de Saúde Integral da População Negra | não | O texto registra lacuna de informação. |
| E3 | E3-F17 | Racismo ambiental | nenhuma fonte citada no texto | sim |  |
| E3 | E3-F18 | Igualdade racial | Estatuto da Igualdade Racial; Política Nacional de Saúde Integral da População Negra; Leis nº 10.639/2003 e nº 11.645/2008 | não | O texto registra lacuna de informação. |
| E3 | E3-F19 | Igualdade de direitos à propriedade e controle da terra (comunidades tradicionais e quilombolas) | Censo 2022; Lei nº 7.227/2024 | não |  |
| E4 | E4-F01 | Acesso a recursos financeiros para gestão, conservação sustentável da biodiversidade (investimentos públicos e privados) | nenhuma fonte citada no texto | não | O texto registra lacuna de informação. |
| E4 | E4-F02 | Gestão de bancos de sementes | nenhuma fonte citada no texto | sim |  |
| E4 | E4-F03 | Plantas medicinais (uso e plantio) | Política Nacional de Práticas Integrativas e Complementares; Política Nacional de Plantas Medicinais e Fitoterápicos | não | O texto registra lacuna de informação. |
| E4 | E4-F04 | Proteção e restauração de ecossistemas hídricos | Instituto Água e Saneamento | não |  |
| E4 | E4-F05 | Tecnologias sociais | nenhuma fonte citada no texto | sim | O texto registra lacuna de informação. |
| E4 | E4-F06 | Pesquisa científica e inovação | nenhuma fonte citada no texto | não |  |
| E4 | E4-F07 | Construções sustentáveis e resilientes | Plano Diretor de Desenvolvimento Urbano Ambiental (Lei Complementar nº 341/2018) | não | O texto registra lacuna de informação. |
| E4 | E4-F08 | Tecnologias ambientalmente corretas | nenhuma fonte citada no texto | sim |  |
| E4 | E4-F09 | Acesso à informação de qualidade | QualiAr/UFMS; Sesau | não |  |
| E4 | E4-F10 | Reconstruções sustentáveis e resilientes | nenhuma fonte citada no texto | não |  |
| E4 | E4-F11 | Educação ambiental e para adaptação climática | Política Nacional de Educação Ambiental | não |  |
| E4 | E4-F12 | Planejamento relacionado à mudança do clima e à gestão eficaz | Plano Diretor de Desenvolvimento Urbano Ambiental (Lei Complementar nº 341/2018) | não |  |
| E4 | E4-F13 | Gerenciar e proteger os oceanos, mares e recursos marinhos de forma sustentável | nenhuma fonte citada no texto | não |  |
| E4 | E4-F14 | Pesquisa científica e inovação para recuperação de ambientes | nenhuma fonte citada no texto | sim |  |
| E4 | E4-F15 | Pescadores artesanais | nenhuma fonte citada no texto | não | O texto registra lacuna de informação. |
| E4 | E4-F16 | Desmatamento e solos degradados | nenhuma fonte citada no texto | não | O texto registra lacuna de informação. |
| E4 | E4-F17 | Gestão sustentável dos recursos naturais | Plano Diretor | não |  |
| E4 | E4-F18 | Conhecimentos e práticas tradicionais de conservação e uso sustentável | nenhuma fonte citada no texto | não |  |
| E4 | E4-F19 | Hospital veterinário e resgate de animais | Informe Técnico da SES-MS (2025) | não |  |
| E4 | E4-F20 | Tráfico de espécies da flora e fauna (caça e pesca ilegal) | registros de apreensões da Polícia Militar Ambiental e do IBAMA | não | O texto registra lacuna de informação. |
| E4 | E4-F21 | Espécies exóticas invasoras | nenhuma fonte citada no texto | não | O texto registra lacuna de informação. |
| E4 | E4-F22 | Gestão sustentável da biodiversidade para o desenvolvimento e redução da pobreza | nenhuma fonte citada no texto | não | O texto registra lacuna de informação. |
| E4 | E4-F24 | Transferência de tecnologias ambientalmente corretas (acesso) | nenhuma fonte citada no texto | não | O texto registra lacuna de informação. |
| E4 | E4-F25 | Reflorestamento | nenhuma fonte citada no texto | não | O texto registra lacuna de informação. |
| E5 | E5-F01 | Disponibilidade a abrigos para emergências | Prefeitura; GT-PSR | sim |  |
| E5 | E5-F02 | Vias obstruídas e danificadas – vias municipais, estaduais e federais | CEMADEN | não |  |
| E5 | E5-F03 | Acidentes no transporte de produtos perigosos | Plano Nacional de Prevenção, Preparação e Resposta Rápida a Emergências Ambientais | sim | O texto registra lacuna de informação. |
| E5 | E5-F04 | Educação – ensino primário | IBGE Cidades | não | O texto registra lacuna de informação. |
| E5 | E5-F05 | Educação técnica e profissional | nenhuma fonte citada no texto | não | O texto registra lacuna de informação. |
| E5 | E5-F06 | Educação superior | nenhuma fonte citada no texto | não | O texto registra lacuna de informação. |
| E5 | E5-F08 | Educação pública | Prefeitura com base no INEP | não |  |
| E5 | E5-F09 | Alfabetização – EJA | IBGE, escala municipal; Censo 2022 | não | O texto registra lacuna de informação. |
| E5 | E5-F10 | Formação em tecnologias sociais | nenhuma fonte citada no texto | sim |  |
| E5 | E5-F11 | Bolsas de estudo | nenhuma fonte citada no texto | não | O texto registra lacuna de informação. |
| E5 | E5-F12 | Professores qualificados | Prefeitura com base no INEP | não | O texto registra lacuna de informação. |
| E5 | E5-F13 | Acesso aos serviços de energia | IBGE, 2026; concessionária | não | O texto registra lacuna de informação. |
| E5 | E5-F14 | Serviços de energia modernos e sustentáveis | nenhuma fonte citada no texto | sim | O texto registra lacuna de informação. |
| E5 | E5-F15 | Empreendimento com elevado risco de desastres | Relatório de Segurança de Barragens 2024-2025 da ANA | não |  |
| E5 | E5-F16 | Educação para trabalho | nenhuma fonte citada no texto | não | O texto registra lacuna de informação. |
| E5 | E5-F17 | Promoção de cultura | nenhuma fonte citada no texto | não | O texto registra lacuna de informação. |
| E5 | E5-F18 | Acesso à cultura | G1, 2025, escala das capitais; pesquisa do Ministério da Cultura divulgada em agosto de 2025 | não | O texto registra lacuna de informação. |
| E5 | E5-F19 | Sistema viário – vias municipais, estaduais e federais | nenhuma fonte citada no texto | não | O texto registra lacuna de informação. |
| E5 | E5-F20 | Infraestrutura sustentável e resiliente | nenhuma fonte citada no texto | não | O texto registra lacuna de informação. |
| E5 | E5-F21 | Tecnologias de informação e comunicação | nenhuma fonte citada no texto | não | O texto registra lacuna de informação. |
| E5 | E5-F22 | Habitação | IBGE, escala municipal; Censo 2022 | não | O texto registra lacuna de informação. |
| E5 | E5-F23 | Transportes seguros | nenhuma fonte citada no texto | não | O texto registra lacuna de informação. |
| E5 | E5-F24 | Urbanização e infraestrutura | IBGE, escala municipal; Censo 2022; Plano Diretor de Desenvolvimento Urbano Ambiental (Lei Complementar nº 341/2018) | não | O texto registra lacuna de informação. |
| E5 | E5-F25 | Equipamentos públicos de lazer e cultura seguros | nenhuma fonte citada no texto | sim |  |
| E5 | E5-F26 | Esportes | nenhuma fonte citada no texto | não | O texto registra lacuna de informação. |
| E5 | E5-F27 | Biblioteca | G1, 2025; pesquisa do Ministério da Cultura de 2025 | sim |  |
| E5 | E5-F28 | Lazer | nenhuma fonte citada no texto | não |  |
| E5 | E5-F29 | Valorização dos saberes e práticas locais | nenhuma fonte citada no texto | não |  |
| E5 | E5-F30 | Acesso a iluminação pública | nenhuma fonte citada no texto | não | O texto registra lacuna de informação. |
| E6 | E6-F01 | Associação de moradores e lideranças locais | nenhuma fonte citada no texto | sim |  |
| E6 | E6-F02 | Mobilização de redes e grupos organizados | nenhuma fonte citada no texto | não |  |
| E6 | E6-F03 | Rádios comunitárias | IBGE | sim |  |
| E6 | E6-F04 | Parcerias entre instituições públicas, privadas e com a sociedade civil | Prefeitura com base no e-Gestor, escala municipal | não |  |
| E6 | E6-F05 | Mutirão de limpeza | dados municipais divulgados pela imprensa | não |  |
| E6 | E6-F06 | Combate ao crime organizado | Agência Brasil, 2024; Anuário Brasileiro de Segurança Pública | não | O texto registra lacuna de informação. |
| E6 | E6-F07 | Participação social na tomada de decisão responsiva, inclusiva e participativa | Lei nº 7.227/2024 | não |  |
| E6 | E6-F08 | Corrupção e suborno (em todos os níveis) | nenhuma fonte citada no texto | não | O texto registra lacuna de informação. |
| E6 | E6-F09 | Instituições públicas e privadas em todos os níveis (transparência ativa) | IBGE, escala municipal; IBGE Cidades | não |  |
| E6 | E6-F11 | Comunicação comunitária – grupos de mensagens | nenhuma fonte citada no texto | sim |  |
| E6 | E6-F15 | Grupos de escuta diários | Prefeitura, escala municipal | não |  |
| E6 | E6-F16 | Igrejas, grupos religiosos e outros coletivos que apoiam as situações de emergência | nenhuma fonte citada no texto | sim |  |
