/*
 * DIAGNÓSTICO SITUACIONAL TERRITORIAL - Distrito Federal
 *
 * Arquivo gerado por territorios/ferramentas/gerar_territorio.py a partir de
 * territorios/fontes/Diagnostico_Situacional_DistritoFederal_RAs_Matriz_v1.0.2.docx.
 * Não edite à mão: altere o documento-fonte ou os arquivos em
 * territorios/correspondencias/ e gere novamente.
 *
 * Contém apenas dados deste território. Eixos e fatores ficam no cadastro
 * metodológico (metodologia/metodologia.js); cada diagnóstico se liga ao
 * fator pelo id.
 */
window.TERRITORIOS = window.TERRITORIOS || {};
window.TERRITORIOS["distrito-federal"] = {
  "formato": "diagnostico-territorial/2",
  "territorio": {
    "id": "distrito-federal",
    "nome": "Distrito Federal",
    "uf": "DF",
    "tipo": "unidade federativa (35 Regiões Administrativas)",
    "rotulo": "Distrito Federal"
  },
  "situacao": {
    "status": "diagnóstico situacional",
    "territorio_de_exemplo": false,
    "aviso": "Os textos referem-se ao Distrito Federal e, quando indicado, às suas Regiões Administrativas e regiões de saúde. Conforme as notas metodológicas do documento, dados obtidos por meio de reportagens e sistematizações de terceiros devem ser confirmados nas bases primárias."
  },
  "decisoes": [
    {
      "data": "2026-10-20",
      "decisao": "A linha ODS mobilizados da abertura dos eixos é excluída dos dados, pela mesma regra adotada para Campo Grande/MS em 20/10/2026; o painel não exibe esse campo. O documento-fonte não foi alterado."
    }
  ],
  "metodologia": {
    "arquivo": "metodologia/metodologia.js",
    "versao": "1.0.2"
  },
  "documento_fonte": {
    "arquivo": "territorios/fontes/Diagnostico_Situacional_DistritoFederal_RAs_Matriz_v1.0.2.docx",
    "titulo": "Diagnóstico Situacional do Distrito Federal e Regiões Administrativas, Matriz de Fatores v1.0.2",
    "periodo_referencia": "não declarado como período único; cada dado indica o próprio ano de referência e a escala territorial",
    "responsaveis": "PICAPS | CoLaboratório CTIS | Fiocruz Brasília",
    "data_elaboracao": "outubro de 2026",
    "matriz_declarada_no_documento": "Matriz de Fatores v1.0.2, 150 fatores",
    "capa": [
      "PLATAFORMA DE INTELIGÊNCIA COOPERATIVA COM A ATENÇÃO PRIMÁRIA À SAÚDE",
      "CoLaboratório de Ciência, Tecnologia, Inovação e Sociedade, CTIS | Fiocruz Brasília",
      "DIAGNÓSTICO SITUACIONAL",
      "DISTRITO FEDERAL",
      "Diagnóstico distrital | 35 Regiões Administrativas | 7 Regiões de Saúde",
      "2.817.381 habitantes (Censo 2022) | 3.009.996 habitantes estimados (IBGE) | 5.760,785 km² | 489,06 hab./km² | IDH 0,814 (2021)",
      "Organizado pelos seis Temas Geradores da Pedagogia da Práxis no Território e pelos 150 fatores da Matriz de Fatores v1.0.2",
      "Referenciais: Determinantes Sociais da Saúde (Dahlgren e Whitehead) | Planejamento Estratégico Situacional (Matus) | Teoria Ator-Rede (Latour) | Pedagogia da Práxis (Freire)"
    ]
  },
  "resumo_executivo": {
    "quadro_eixos": [
      [
        "Eixo",
        "Tema gerador",
        "Fatores",
        "Contradição central"
      ],
      [
        "Eixo 1",
        "O Suor que não nos Sustenta",
        "29",
        "Nosso território produz riqueza, mas vivemos na precarização e no desemprego."
      ],
      [
        "Eixo 2",
        "A Vida em Risco",
        "38",
        "A mortalidade, a insalubridade e o adoecimento expressam a negligência estatal."
      ],
      [
        "Eixo 3",
        "Nossos Corpos Silenciados",
        "18",
        "A cor da pele e o gênero determinam quem sofre mais violência, exclusão e invisibilidade."
      ],
      [
        "Eixo 4",
        "A Terra de Quem?",
        "24",
        "A natureza é tratada como mercadoria, expropriando comunidades tradicionais e destruindo ecossistemas."
      ],
      [
        "Eixo 5",
        "A Cidade Negada",
        "29",
        "Habitação, mobilidade, educação e cultura são direitos sistematicamente sonegados."
      ],
      [
        "Eixo 6",
        "A Voz na Mesa",
        "12",
        "A comunidade transita de beneficiária a sujeito da história quando assume o protagonismo."
      ]
    ],
    "texto": "O Distrito Federal tinha 2.817.381 habitantes no Censo 2022, com estimativa mais recente de 3.009.996 (IBGE), em 5.760,785 km² e densidade de 489,06 habitantes por km², organizados em 35 Regiões Administrativas e sete regiões de saúde. A unidade tem o maior PIB per capita do país, R$ 129.790,44 em 2023, cerca de 2,4 vezes a média nacional (IBGE, Contas Regionais), IDH de 0,814 em 2021 e o maior rendimento médio habitual do trabalho, R$ 6.320 em 2025 (IBGE). A contradição estruturante, que atravessa os seis eixos, é a coexistência dessa riqueza média com uma segregação socioespacial que distribui renda, infraestrutura, risco e adoecimento segundo a hierarquia das RAs: em 2018, a renda domiciliar per capita do Lago Sul, R$ 8.322,81, era 14,5 vezes a do SCIA-Estrutural, R$ 573,34 (Codeplan, PDAD 2018), e a insegurança alimentar atingiu 27,0% dos domicílios em 2024 (IBGE, PNAD Contínua).\n\nNo campo sanitário, a epidemia de dengue de 2024, com 278.301 casos prováveis, 440 óbitos e a maior incidência do país, concentrou-se em RAs de renda baixa, com incidências acima de 12 mil por 100 mil habitantes em Brazlândia, Varjão e Santa Maria (SES-DF). A cobertura potencial da APS foi de 76,69% em 2025, abaixo da meta de 82,37%, e a cobertura vacinal infantil ficou abaixo de 95% em todas as regiões de saúde exceto a Central, com cerca de 70% na Leste (SES-DF, 2º RDQA 2025). A mortalidade infantil, de 9,55 por mil nascidos vivos (IBGE Cidades), é inferior à nacional, mas as regiões Sul e Centro-Sul apresentaram valores mais elevados. A rede do SUS distrital atende ainda a população do Entorno, que ocupou 19,3% das internações em 2025.\n\nA violência no DF tem padrão próprio: a taxa de mortes violentas intencionais foi de 9,6 por 100 mil em 2025, a terceira menor do país, mas os feminicídios cresceram 31,1%, todos os crimes contra mulheres analisados aumentaram e o estelionato atingiu a segunda maior taxa nacional (Anuário Brasileiro de Segurança Pública 2026), com 71% dos feminicídios concentrados em nove RAs periféricas (SSP-DF). O desemprego entre pessoas negras foi de 17,9% em 2023, contra 13,5% entre não negras (IPEDF e DIEESE, PED-DF). O risco climático materializou-se na crise hídrica de 2017, com racionamento para 1,8 milhão de pessoas, nos 164 dias sem chuva de 2024, recorde do INMET, no incêndio de 1.473 hectares no Parque Nacional de Brasília (Sema-DF) e nas 22 áreas de risco monitoradas pela Defesa Civil, com destaque para Sol Nascente/Pôr do Sol, Fercal, Vicente Pires, Sobradinho II e Arniqueira.\n\nO diagnóstico identifica como potencialidades a PDAD, pesquisa domiciliar com representatividade por RA, a base científica instalada, com UnB, Fiocruz Brasília, Embrapa e IPEDF, a infraestrutura de saneamento elevada na média, a rede de APS em expansão, a cultura periférica e as redes solidárias ativadas na epidemia de dengue, as cooperativas de catadores constituídas após o fechamento do lixão da Estrutural e a experiência acumulada da PICAPS em formação de pesquisadores populares. Os nós críticos e as prioridades estão sistematizados na síntese estratégica, com referência aos códigos dos fatores da Matriz v1.0.2, e o quadro a seguir apresenta o recorte territorial adotado.",
    "secoes": [
      {
        "titulo": "Recorte territorial: Regiões Administrativas por grupo de renda",
        "conteudo": [
          {
            "paragrafo": "A análise adota como escala de referência o Distrito Federal e, sempre que as fontes permitem, as Regiões Administrativas agrupadas segundo a classificação de renda da PDAD 2021 do IPEDF, e as sete regiões de saúde da SES-DF. O quadro apresenta essa classificação, a população urbana e a renda domiciliar média de cada grupo, e exemplos de renda domiciliar per capita por RA da PDAD 2018, última edição com esse indicador publicado por RA nos documentos consultados."
          },
          {
            "tabela": [
              [
                "Grupo de renda (PDAD 2021)",
                "Regiões Administrativas",
                "População urbana 2021",
                "Renda domiciliar média 2021",
                "Renda per capita 2018, exemplos"
              ],
              [
                "Alta",
                "Águas Claras, Jardim Botânico, Lago Norte, Lago Sul, Park Way, Plano Piloto, Sudoeste/Octogonal",
                "544.432",
                "R$ 14.753,85",
                "Lago Sul R$ 8.322,81; Plano Piloto R$ 6.749,79"
              ],
              [
                "Média-alta",
                "Arniqueira, Candangolândia, Cruzeiro, Guará, Núcleo Bandeirante, SIA, Sobradinho, Taguatinga, Vicente Pires",
                "624.654",
                "R$ 6.517,82",
                "Guará R$ 3.688,63; Taguatinga R$ 2.211,60"
              ],
              [
                "Média-baixa",
                "Ceilândia, Gama, Riacho Fundo, Samambaia, Santa Maria, Sobradinho II",
                "989.578",
                "R$ 4.066,48",
                "Ceilândia R$ 1.125,06; Samambaia R$ 997,09"
              ],
              [
                "Baixa",
                "Brazlândia, Fercal, Itapoã, Paranoá, Planaltina, Recanto das Emas, Riacho Fundo II, São Sebastião, SCIA-Estrutural, Sol Nascente/Pôr do Sol, Varjão",
                "852.217",
                "R$ 2.644,96",
                "Fercal R$ 816,29; SCIA-Estrutural R$ 573,34"
              ],
              [
                "Distrito Federal",
                "33 RAs pesquisadas na PDAD 2021; Arapoanga e Água Quente, criadas posteriormente, integram as RAs de origem",
                "3.010.881",
                "R$ 6.329,14",
                "DF R$ 2.481,37"
              ]
            ]
          },
          {
            "paragrafo": "Fontes: IPEDF, PDAD 2021 (grupos de renda, população urbana e renda domiciliar média, em reais de julho de 2021); Codeplan, PDAD 2018 (renda domiciliar per capita, em reais de julho de 2018)."
          }
        ]
      }
    ]
  },
  "eixos_documento": [
    {
      "numero": 1,
      "titulo_no_documento": "O Suor que não nos Sustenta",
      "contradicao_central": "Nosso território produz riqueza, mas vivemos na precarização e no desemprego.",
      "foco_pedagogico": "Trabalho, renda, economia solidária e agricultura familiar",
      "outros_itens_da_abertura": [
        "EIXO 1  |  O Suor que não nos Sustenta"
      ],
      "introducao": "O eixo examina a contradição entre a condição do Distrito Federal como unidade de maior PIB per capita do país, R$ 129.790,44 em 2023, cerca de 2,4 vezes a média nacional (IBGE, Contas Regionais), e a persistência de insegurança alimentar em 27,0% dos domicílios em 2024 (IBGE, PNAD Contínua). A economia, centrada na administração pública e nos serviços, gera o maior rendimento médio habitual do trabalho do Brasil, R$ 6.320 em 2025, mas distribui-se segundo uma hierarquia territorial rígida: em 2018, a renda domiciliar per capita do Lago Sul era 14,5 vezes a do SCIA-Estrutural (Codeplan, PDAD 2018). Os 29 fatores do eixo descrevem como essa riqueza se concentra no Plano Piloto e nos Lagos, enquanto as RAs de renda baixa acumulam desemprego mais elevado entre pessoas negras, informalidade, trabalho doméstico, deslocamentos longos e pressão sobre a agricultura familiar pela grilagem e pela especulação imobiliária. A seca recorde de 2024 acrescenta ao eixo a necessidade de crédito e proteção para adaptação climática.",
      "fatores_no_documento": 29
    },
    {
      "numero": 2,
      "titulo_no_documento": "A Vida em Risco",
      "contradicao_central": "A mortalidade, a insalubridade e o adoecimento expressam a negligência estatal.",
      "foco_pedagogico": "Saúde, corpo político, saneamento e adoecimento social",
      "outros_itens_da_abertura": [
        "EIXO 2  |  A Vida em Risco"
      ],
      "introducao": "O eixo reúne 38 fatores que descrevem a vida exposta ao risco no Distrito Federal, do perfil epidemiológico à cadeia de ameaças climáticas. A epidemia de dengue de 2024, com 278.301 casos prováveis e 440 óbitos e a maior incidência do país (SES-DF), revelou a vulnerabilidade sanitária das RAs de renda baixa, como Brazlândia, Varjão, Santa Maria e Ceilândia. A cobertura potencial da APS foi de 76,69% em 2025, abaixo da meta, e a cobertura vacinal infantil ficou entre 81% e 89% para as principais vacinas, com a Região Leste em torno de 70% (SES-DF, 2º RDQA 2025). A mortalidade infantil, de 9,55 por mil nascidos vivos (IBGE Cidades), é inferior à média nacional. O território combina saneamento elevado na média com déficits nas ocupações irregulares, violência letal baixa com feminicídios em alta, e ameaças climáticas de seca, incêndio e alagamento materializadas nos 164 dias sem chuva de 2024 (INMET), no fogo do Parque Nacional de Brasília e nas 22 áreas de risco monitoradas pela Defesa Civil.",
      "fatores_no_documento": 38
    },
    {
      "numero": 3,
      "titulo_no_documento": "Nossos Corpos Silenciados",
      "contradicao_central": "A cor da pele e o gênero determinam quem sofre mais violência, exclusão e invisibilidade.",
      "foco_pedagogico": "Gênero, raça, direitos fundamentais e empoderamento",
      "outros_itens_da_abertura": [
        "EIXO 3  |  Nossos Corpos Silenciados"
      ],
      "introducao": "O eixo analisa como raça, gênero, idade e território organizam a pobreza, a violência e o acesso a direitos no Distrito Federal. A população negra é maioria e concentra-se nas RAs de renda baixa: o SCIA-Estrutural tinha 75,4% de negros e a Fercal 73%, enquanto apenas nove das 33 RAs então existentes tinham maioria branca (Inesc, com base na PDAD). Em 2023, o desemprego entre negros foi de 17,9%, contra 13,5% entre não negros, e seu rendimento correspondeu a 57,4% do rendimento dos não negros (IPEDF e DIEESE, PED-DF). Os feminicídios cresceram 31,1% em 2025 e todos os crimes contra mulheres analisados aumentaram (Anuário Brasileiro de Segurança Pública 2026), com concentração em RAs periféricas. O DF tinha 5.813 indígenas e nenhuma terra indígena declarada no Censo 2022 (IBGE), e o Santuário dos Pajés resiste à expansão imobiliária. Os 18 fatores do eixo permitem nomear o racismo ambiental expresso na localização do antigo lixão, da atividade cimenteira e do racionamento de água de 2017.",
      "fatores_no_documento": 18
    },
    {
      "numero": 4,
      "titulo_no_documento": "A Terra de Quem?",
      "contradicao_central": "A natureza é tratada como mercadoria, expropriando comunidades tradicionais e destruindo ecossistemas.",
      "foco_pedagogico": "Soberania territorial, meio ambiente, biodiversidade e clima",
      "outros_itens_da_abertura": [
        "EIXO 4  |  A Terra de Quem?"
      ],
      "introducao": "O eixo trata da relação entre a expansão urbana do Distrito Federal e a degradação do Cerrado, dos mananciais e das áreas de recarga em um território situado nas cabeceiras das bacias do Paraná, do Tocantins-Araguaia e do São Francisco. O desmatamento passou de 90 para 638 hectares entre 2022 e 2023, associado à grilagem e à especulação imobiliária (MapBiomas, RAD 2023), e mais da metade da cobertura nativa do DF já foi alterada. A crise hídrica de 2016 a 2018, que levou o Descoberto a menos de 20% de sua capacidade, e o incêndio de 1.473 hectares no Parque Nacional de Brasília em 2024 (Sema-DF) expressam a vulnerabilidade socioambiental do modelo de ocupação. Os 24 fatores abrangem financiamento ambiental, restauração, saberes tradicionais, pesquisa, tecnologias sociais e planejamento climático. O DF dispõe de base científica de relevância nacional, com UnB, Fiocruz Brasília, Embrapa e IPEDF. Um fator marinho é tratado pela interface das bacias hidrográficas, conforme as notas metodológicas.",
      "fatores_no_documento": 24
    },
    {
      "numero": 5,
      "titulo_no_documento": "A Cidade Negada",
      "contradicao_central": "Habitação, mobilidade, educação e cultura são direitos sistematicamente sonegados.",
      "foco_pedagogico": "Infraestrutura, educação, cultura e território urbano-rural",
      "outros_itens_da_abertura": [
        "EIXO 5  |  A Cidade Negada"
      ],
      "introducao": "O eixo descreve a cidade negada no Distrito Federal: um território de 2.817.381 habitantes no Censo 2022, com estimativa de 3.009.996, em 5.760,785 km² e densidade de 489,06 habitantes por km² (IBGE), organizado em 35 Regiões Administrativas que expressam o contraste entre o Plano Piloto planejado e tombado e as RAs formadas por transferências, assentamentos e ocupações irregulares. O Censo 2022 identificou 62 favelas com 198.779 moradores, e Sol Nascente/Pôr do Sol tornou-se a segunda maior favela do país, com 70.908 habitantes (IBGE). Os 29 fatores abrangem habitação, mobilidade dependente do automóvel e do ônibus, energia, educação, cultura, lazer e a vulnerabilidade das infraestruturas a alagamentos, erosões e calor. Destacam-se o IDEB estável nos anos iniciais, de 6,4 em 2025, e a queda no ensino médio público para 3,6, única entre as unidades da federação (INEP), e a concentração dos equipamentos culturais e de lazer no centro.",
      "fatores_no_documento": 29
    },
    {
      "numero": 6,
      "titulo_no_documento": "A Voz na Mesa",
      "contradicao_central": "A comunidade transita de beneficiária a sujeito da história quando assume o protagonismo.",
      "foco_pedagogico": "Participação social, governança, transparência e parcerias sociotécnicas",
      "outros_itens_da_abertura": [
        "EIXO 6  |  A Voz na Mesa"
      ],
      "introducao": "O eixo examina as condições para que as comunidades do Distrito Federal passem de beneficiárias a sujeitos do planejamento. A ausência de governo eleito nas Regiões Administrativas, cujos administradores são nomeados pelo governador, confere às associações de moradores, aos conselhos de saúde e aos movimentos sociais papel central de mediação política. O DF concentra órgãos federais, universidades, a Fiocruz Brasília, organizações nacionais da sociedade civil e redes de pesquisa, o que favorece parcerias e incidência, mas pode distanciar a agenda dos problemas das RAs periféricas. Os 12 fatores abrangem organização comunitária, comunicação local, parcerias, participação institucional, transparência, enfrentamento do crime organizado, expresso no DF sobretudo na grilagem de terras e nas fraudes financeiras, e as formas de apoio mútuo mobilizadas em emergências como a epidemia de dengue de 2024. A transparência por RA, ainda limitada, é condição para a participação qualificada.",
      "fatores_no_documento": 12
    }
  ],
  "sintese_estrategica": [
    {
      "titulo": null,
      "conteudo": [
        {
          "paragrafo": "A síntese cruza a análise dos 150 fatores para identificar nós críticos, entendidos como problemas cuja transformação produz efeitos em cadeia sobre outros fatores, e potencialidades que podem sustentar a ação. Por se tratar de diagnóstico distrital e na ausência, nesta versão, de inscrições da cartografia social, a seleção baseia-se nos dados secundários e deve ser validada e desdobrada por Região Administrativa e região de saúde com os pesquisadores populares, as equipes de APS e as organizações dos territórios."
        }
      ]
    },
    {
      "titulo": "Nós críticos",
      "conteudo": [
        {
          "tabela": [
            [
              "Nó crítico",
              "Expressão no território",
              "Fatores"
            ],
            [
              "1. Segregação socioespacial da renda e dos direitos",
              "Renda per capita do Lago Sul 14,5 vezes a do SCIA-Estrutural em 2018; 852.217 pessoas nas RAs de renda baixa em 2021; Gini de 0,566; insegurança alimentar em 27,0% dos domicílios em 2024",
              "E3-F01, E1-F08, E2-F02, E3-F08, E1-F19"
            ],
            [
              "2. Arboviroses e vulnerabilidade sanitária das periferias",
              "278.301 casos prováveis e 440 óbitos por dengue em 2024; incidência acima de 12 mil por 100 mil em Brazlândia, Varjão e Santa Maria; idosos com 26,6% dos óbitos",
              "E2-F07, E2-F35, E2-F19, E6-F05, E2-F31"
            ],
            [
              "3. Atenção primária e imunização abaixo das metas",
              "Cobertura potencial da APS de 76,69% em 2025; vacinas infantis entre 81% e 89% no DF e cerca de 70% na Região Leste; aplicação em saúde abaixo do mínimo no 2º quadrimestre de 2025",
              "E2-F15, E2-F14, E2-F16, E2-F13, E6-F09"
            ],
            [
              "4. Racismo estrutural e ambiental",
              "Desemprego de 17,9% entre negros e 13,5% entre não negros; rendimento dos negros em 57,4% do dos não negros; RAs de maioria negra junto ao antigo lixão e à atividade cimenteira; racionamento de 2017 restrito às periferias",
              "E3-F16, E3-F17, E3-F18, E1-F13, E1-F18"
            ],
            [
              "5. Violência contra mulheres em alta",
              "Feminicídios de 22 para 29 em 2025; aumento de todos os crimes contra mulheres analisados; 71% dos feminicídios em nove RAs periféricas",
              "E3-F02, E2-F28, E3-F06, E5-F30"
            ],
            [
              "6. Estiagem, fogo e escassez hídrica",
              "164 dias sem chuva em 2024; umidade de até 12%; 1.473 ha queimados no Parque Nacional de Brasília; Descoberto abaixo de 20% em 2017",
              "E2-F30, E2-F38, E2-F25, E2-F23, E4-F04, E4-F12"
            ],
            [
              "7. Ocupação irregular, grilagem e áreas de risco",
              "Desmatamento de 638 ha em 2023, ante 90 ha em 2022; 62 favelas com 198.779 moradores; Sol Nascente/Pôr do Sol com 70.908 habitantes; 22 áreas de risco monitoradas",
              "E4-F16, E5-F22, E2-F33, E2-F34, E6-F06"
            ]
          ]
        }
      ]
    },
    {
      "titulo": "Potencialidades",
      "conteudo": [
        {
          "paragrafo": "O Distrito Federal dispõe da PDAD, pesquisa domiciliar com representatividade por Região Administrativa, e de base científica de relevância nacional, com UnB, Fiocruz Brasília, Embrapa e IPEDF, capazes de sustentar vigilância territorial com evidências desagregadas (E4-F06, E4-F09). A infraestrutura de saneamento elevada na média, com coleta de esgoto acima de 90% e tratamento de pelo menos 80% em Brasília, e a experiência institucional acumulada na crise hídrica de 2017 constituem base para a universalização e a adaptação (E2-F20, E2-F23). A redução das mortes no trânsito em 2024 e dos homicídios na última década demonstra capacidade de resposta institucional (E2-F11, E2-F27). As cooperativas de catadores, a cultura periférica de Ceilândia e de outras RAs, as redes solidárias ativadas na epidemia de dengue e a densidade de organizações da sociedade civil sediadas em Brasília formam capital social mobilizável (E1-F11, E5-F17, E1-F17, E6-F02). Os acordos de cooperação entre a SES-DF e instituições de pesquisa favorecem a integração entre produção de conhecimento e gestão (E6-F04)."
        }
      ]
    },
    {
      "titulo": "Matriz de prioridades para o ciclo PICAPS",
      "conteudo": [
        {
          "tabela": [
            [
              "Prioridade",
              "Ação estruturante",
              "Fatores"
            ],
            [
              "Vigilância comunitária das arboviroses",
              "Levantamento de criadouros por microárea com pesquisadores populares e agentes de vigilância ambiental; calendário de mutirões; prioridade às RAs de maior incidência em 2024",
              "E2-F07, E2-F35, E6-F05, E1-F27, E6-F11"
            ],
            [
              "Cobertura de APS e vacinação nas RAs de renda baixa",
              "Monitoramento da cobertura de APS por RA; busca ativa de faltosos de vacinação na Região Leste, Sudoeste e Sul; qualificação dos registros do e-SUS",
              "E2-F15, E2-F14, E2-F16, E2-F05"
            ],
            [
              "Protocolo territorial de calor, baixa umidade e fumaça",
              "Alertas em linguagem acessível para escolas e UBS; refúgios climáticos; brigadas comunitárias nas bordas das unidades de conservação",
              "E2-F30, E2-F25, E2-F38, E2-F37, E2-F32"
            ],
            [
              "Rede de proteção às mulheres nas RAs periféricas",
              "Regionalização da rede de proteção; notificação do SINAN pelas UBS; mapeamento de pontos inseguros e de iluminação deficiente",
              "E3-F02, E3-F06, E2-F28, E5-F30"
            ],
            [
              "Igualdade racial como indicador de gestão",
              "Desagregação por raça e cor dos indicadores de saúde, trabalho e renda por RA; metas de redução de desigualdades raciais",
              "E3-F18, E3-F16, E3-F17, E1-F13"
            ],
            [
              "Áreas de risco e urbanização resiliente",
              "Inventário comunitário de riscos nas 22 áreas monitoradas; rotas de fuga e pontos de encontro; drenagem sustentável nas obras de urbanização",
              "E2-F33, E2-F26, E2-F39, E5-F20, E4-F10"
            ],
            [
              "Segurança alimentar e transparência por RA",
              "Triagem de insegurança alimentar nas UBS; mapa de restaurantes comunitários e feiras; painel público com indicadores e investimentos por RA",
              "E2-F02, E1-F06, E6-F09, E1-F19"
            ]
          ]
        }
      ]
    }
  ],
  "notas_metodologicas": [
    {
      "titulo": null,
      "conteudo": []
    },
    {
      "titulo": "Procedimentos",
      "conteudo": [
        {
          "paragrafo": "Este diagnóstico foi elaborado segundo o Prompt-Mestre v2.0 e a Matriz de Fatores v1.0.2, com os 150 fatores transcritos literalmente da aba Consolidado e analisados na ordem dos códigos. A estrutura foi gerada por script que interrompe a produção do documento se algum fator não tiver análise, garantindo a integralidade da matriz. Por se tratar do Distrito Federal, unidade federativa sem municípios, a escala de referência é o DF, e os recortes intraurbanos adotam as Regiões Administrativas, agrupadas pelos grupos de renda da PDAD 2021, e as sete regiões de saúde da SES-DF, sempre explicitamente indicados. Toda afirmação quantitativa é atribuída a fonte com ano de referência e escala territorial; quando nenhum dado foi localizado, a ausência foi registrada como lacuna de informação e como achado do diagnóstico."
        },
        {
          "paragrafo": "Duas cautelas de leitura se aplicam. A renda domiciliar per capita por RA provém da PDAD 2018, em reais de julho de 2018, porque os documentos consultados da PDAD 2021 apresentam a renda domiciliar média por grupo de RAs; os valores não devem ser comparados diretamente. Os indicadores de violência divergem entre o Anuário Brasileiro de Segurança Pública e o Anuário da SSP-DF por diferenças de classificação, e ambos são citados com sua fonte. Nesta versão não foram incorporadas inscrições da cartografia social; recomenda-se a realização de Círculos de Cultura nas RAs prioritárias identificadas na síntese estratégica."
        }
      ]
    },
    {
      "titulo": "Fatores de baixa aplicabilidade territorial",
      "conteudo": [
        {
          "tabela": [
            [
              "Fator",
              "Via adotada",
              "Justificativa"
            ],
            [
              "E4-F13 Gerenciar e proteger os oceanos, mares e recursos marinhos",
              "Interface indireta",
              "Território interior sem costa; analisado pela contribuição das cabeceiras das bacias do Paraná, Tocantins-Araguaia e São Francisco"
            ],
            [
              "E2-F36 Pontos de deslizamento de terra",
              "Interface indireta",
              "Relevo de chapadas; interface analisada pelos processos erosivos e voçorocas em encostas e cabeceiras ocupadas"
            ],
            [
              "E4-F15 Pescadores artesanais",
              "Lacuna de informação",
              "Pesca de pequena escala no Lago Paranoá e em reservatórios, sem dados sistematizados de pescadores residentes"
            ],
            [
              "E2-F17 Tornado/Vendaval",
              "Lacuna de informação",
              "Temporais com ventos fortes ocorrem, mas sem série distrital sistematizada nesta versão"
            ],
            [
              "E3-F07 Tráfico de pessoas",
              "Lacuna de informação",
              "Ausência de dados distritais sistematizados; risco associado à condição de polo migratório e de conexão"
            ],
            [
              "E3-F03 Casamentos prematuros, forçados e de crianças",
              "Lacuna de informação",
              "Sem registro direto; investigação proposta por proxies do SINASC e do Censo 2022"
            ]
          ]
        }
      ]
    },
    {
      "titulo": "Fontes utilizadas",
      "conteudo": [
        {
          "tabela": [
            [
              "Eixo",
              "Fontes, ano de referência e escala"
            ],
            [
              "Todos",
              "IBGE, Censo Demográfico 2022 e IBGE Estados (população, área, densidade, estimativa populacional, IDH 2021, rendimento domiciliar per capita, matrículas 2025, frota 2025, receitas e despesas 2025), escala distrital; IBGE Cidades, Brasília (mortalidade infantil, escolarização); IPEDF, PDAD 2021, e Codeplan, PDAD 2018, escala distrital e por RA"
            ],
            [
              "Eixo 1",
              "IBGE, Contas Regionais 2023 (PIB per capita); IBGE, PNAD Contínua 2025 (desocupação, informalidade, rendimento) e 2023 e 2024 (insegurança alimentar), escala distrital; IPEDF e DIEESE, PED-DF 2022 e 2023, boletim da população negra; MapBiomas, RAD 2023; SLU, fechamento do lixão da Estrutural, 2018; Detran-DF, mortes de motociclistas 2024 e 2025"
            ],
            [
              "Eixo 2",
              "SES-DF, boletim epidemiológico de dengue 2024, por RA; SES-DF, Sumários Executivos do 2º RDQA 2024 e 2025, por região de saúde; Detran-DF, mortes no trânsito 2023 e 2024; Instituto Trata Brasil, Ranking do Saneamento 2026 (base SINISA 2024); Caesb e Adasa, crise hídrica 2017; INMET, estiagem 2024; Sema-DF, incêndio no Parque Nacional de Brasília 2024; INPE, focos de calor no Cerrado 2023 e 2024; Defesa Civil do DF, áreas de risco, dezembro de 2024; Cadernos de Saúde Pública, mortalidade infantil no DF 1990 a 2000"
            ],
            [
              "Eixo 3",
              "IBGE, Censo 2022 (favelas e comunidades urbanas, indígenas, quilombolas); Anuário Brasileiro de Segurança Pública 2026 (dados de 2025); SSP-DF, 2º Anuário de Segurança Pública do DF (dados de 2025, por RA); Inesc, Mapa das Desigualdades do DF, 5ª edição, com base na PDAD; IPEDF, população em situação de rua 2022 e 2025; Instituto Socioambiental, Terras Indígenas no Brasil, Santuário dos Pajés; Codeplan, PDAD 2018 (migração)"
            ],
            [
              "Eixo 4",
              "MapBiomas, RAD 2023 e Coleção de cobertura e uso; Caesb e Adasa, níveis dos reservatórios 2017; Sema-DF, incêndio no Parque Nacional de Brasília 2024; INMET, estiagem 2024; SLU, lixão da Estrutural 2018; Instituto Trata Brasil, 2026"
            ],
            [
              "Eixo 5",
              "INEP, IDEB 2023 e 2025 (escala distrital, rede total e pública); IBGE, Censo 2022, favelas e comunidades urbanas; IBGE Estados, matrículas e frota 2025; Codeplan, PDAD 2018 (transporte, escolaridade, domicílios, internet); IPEDF, PDAD 2021 (entorno dos domicílios, local de trabalho); Defesa Civil do DF, áreas de risco 2024; Detran-DF 2024 e 2025"
            ],
            [
              "Eixo 6",
              "SES-DF, 2º RDQA 2025 (execução orçamentária e aplicação em saúde); IBGE, finanças públicas 2025; Anuário Brasileiro de Segurança Pública 2026; Tribunal de Contas do DF, conforme Correio da Manhã, 2026; Inesc, Mapa das Desigualdades do DF"
            ]
          ]
        },
        {
          "paragrafo": "Dados obtidos por meio de reportagens e de sistematizações de terceiros, como Correio Braziliense, Jornal de Brasília, Correio da Manhã, Brasil de Fato, Poder360, Congresso em Foco e Sou Brasília, foram atribuídos ao órgão produtor original e devem ser confirmados nas bases primárias antes da publicação final. Alguns valores por região de saúde extraídos dos sumários do RDQA dependem da leitura de gráficos e devem ser conferidos nos relatórios completos."
        },
        {
          "paragrafo": "PICAPS | CoLaboratório CTIS | Fiocruz Brasília. Diagnóstico Situacional do Distrito Federal e Regiões Administrativas, Matriz de Fatores v1.0.2, outubro de 2026."
        }
      ]
    }
  ],
  "diagnosticos": {
    "E1-F01": {
      "texto": "O cuidado com crianças e grupos vulneráveis no Distrito Federal é condicionado pela estrutura etária desigual entre as Regiões Administrativas: a PDAD 2021 registrou idade média de 30,6 anos no grupo de renda baixa, que reúne RAs como SCIA-Estrutural, Sol Nascente/Pôr do Sol, Itapoã, Paranoá e Recanto das Emas, contra 37,6 anos no grupo de renda alta (IPEDF). A maior proporção de crianças coincide, portanto, com os territórios de menor renda e de menor oferta de creches, o que transfere o cuidado às famílias e, nelas, às mulheres. O IBGE registra 354.373 matrículas no ensino fundamental em 2025 (IBGE Estados), mas a cobertura de educação infantil por RA não foi sistematizada nesta versão. O fator articula-se a E1-F07, E3-F09, E5-F04 e E3-F14, e o plano popular deve priorizar a oferta de creches e de cuidado comunitário nas RAs de renda baixa, com vigilância de situações de negligência articulada à APS.",
      "fontes_citadas": [
        "IPEDF",
        "IBGE Estados"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2021",
        "2025"
      ],
      "fatores_relacionados": [
        "E1-F07",
        "E3-F09",
        "E5-F04",
        "E3-F14"
      ],
      "origem": {
        "codigo_documento": "E1-F01",
        "nome_no_documento": "Cuidado com crianças e grupos vulneráveis",
        "eixo_documento": 1
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E1-F02": {
      "texto": "O acesso a alimentos no Distrito Federal contrasta com o nível de renda médio mais alto do país. A PNAD Contínua registrou insegurança alimentar em 26,5% dos domicílios do DF em 2023 e em 27,0% em 2024, trajetória contrária à redução nacional (IBGE, PNAD Contínua, escala distrital). Esse resultado coexiste com rendimento domiciliar per capita de R$ 4.538 (IBGE Estados) e indica que a média esconde a concentração da privação nas RAs de renda baixa, onde a renda domiciliar média era de R$ 2.644,96 em 2021, contra R$ 14.753,85 no grupo de renda alta (IPEDF, PDAD 2021). O custo do aluguel e do transporte compete com a alimentação no orçamento das famílias periféricas. O fator articula-se a E2-F02, E1-F06, E1-F24 e E3-F01, e o plano popular deve mapear restaurantes comunitários, feiras e equipamentos de segurança alimentar por RA, confrontando sua localização com a distribuição da insegurança alimentar.",
      "fontes_citadas": [
        "IBGE, PNAD Contínua, escala distrital",
        "IBGE Estados",
        "IPEDF, PDAD 2021"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2023",
        "2024",
        "2021"
      ],
      "fatores_relacionados": [
        "E2-F02",
        "E1-F06",
        "E1-F24",
        "E3-F01"
      ],
      "origem": {
        "codigo_documento": "E1-F02",
        "nome_no_documento": "Alimentos",
        "eixo_documento": 1
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E1-F03": {
      "texto": "A agricultura familiar do Distrito Federal concentra-se nas áreas rurais de Brazlândia, Planaltina, Paranoá, Sobradinho, Gama e São Sebastião, em núcleos rurais e assentamentos de reforma agrária que abastecem feiras e a CEASA-DF com hortaliças, frutas e ovos. A pressão sobre o território rural é direta: o desmatamento no DF passou de 90 hectares em 2022 para 638 hectares em 2023, associado sobretudo à grilagem e à especulação imobiliária segundo pesquisadores do IPAM (MapBiomas, RAD 2023, escala distrital). O parcelamento irregular de chácaras converte terra agrícola em loteamento urbano e reduz a área produtiva próxima aos consumidores. O fator articula-se a E1-F04, E1-F26, E4-F16 e E3-F19, e o plano popular deve defender a manutenção da destinação rural das terras e o acesso dos agricultores familiares às compras públicas.",
      "fontes_citadas": [
        "MapBiomas, RAD 2023, escala distrital"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2022",
        "2023"
      ],
      "fatores_relacionados": [
        "E1-F04",
        "E1-F26",
        "E4-F16",
        "E3-F19"
      ],
      "origem": {
        "codigo_documento": "E1-F03",
        "nome_no_documento": "Agricultura familiar",
        "eixo_documento": 1
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E1-F04": {
      "texto": "A produção de alimentos em hortas, hortos e quintais no Distrito Federal ocorre em hortas comunitárias urbanas, em hortas escolares e em quintais das RAs de ocupação horizontal, como Ceilândia, Samambaia, Planaltina e São Sebastião, onde lotes maiores permitem cultivo doméstico. A relevância do fator aumenta diante da insegurança alimentar de 27,0% dos domicílios em 2024 (IBGE, PNAD Contínua) e da seca recorde de 164 dias sem chuva em 2024 (INMET), que exige soluções de captação de água e irrigação eficiente para manter a produção no período de estiagem. Hortas em áreas públicas ociosas também contribuem para reduzir o acúmulo de entulho, problema relatado em 16,8% dos domicílios em 2021 (IPEDF, PDAD 2021). O fator articula-se a E1-F02, E1-F26, E4-F03 e E6-F05, e o plano popular pode prever rede de hortas comunitárias vinculadas às UBS.",
      "fontes_citadas": [
        "IBGE, PNAD Contínua",
        "INMET",
        "IPEDF, PDAD 2021"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2024",
        "2021"
      ],
      "fatores_relacionados": [
        "E1-F02",
        "E1-F26",
        "E4-F03",
        "E6-F05"
      ],
      "origem": {
        "codigo_documento": "E1-F04",
        "nome_no_documento": "Produção de alimentos – hortas, hortos, quintais e outros que produzem alimentos",
        "eixo_documento": 1
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E1-F05": {
      "texto": "A produção orgânica no Distrito Federal apoia-se em agricultores dos núcleos rurais e assentamentos, em feiras orgânicas e agroecológicas e em programas de assistência técnica da Emater-DF, com circuitos curtos que aproveitam a demanda de consumidores de renda alta do Plano Piloto e dos Lagos. A transição agroecológica tem relevância sanitária no DF porque as áreas agrícolas situam-se nas bacias que abastecem a população, como a do Descoberto, e o uso de agrotóxicos ameaça mananciais e trabalhadores rurais (E2-F21). O acesso aos alimentos orgânicos permanece, contudo, socialmente seletivo, concentrado nas RAs de renda alta. O fator articula-se a E1-F26, E1-F03, E4-F04 e E2-F06, e o plano popular pode propor feiras agroecológicas nas RAs de renda baixa e a inclusão de orgânicos na alimentação escolar.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E2-F21",
        "E1-F26",
        "E1-F03",
        "E4-F04",
        "E2-F06"
      ],
      "origem": {
        "codigo_documento": "E1-F05",
        "nome_no_documento": "Produção orgânica",
        "eixo_documento": 1
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E1-F06": {
      "texto": "A disponibilidade de alimentos no Distrito Federal é garantida em escala agregada pela CEASA-DF, pela produção rural local e pelo abastecimento de Goiás e Minas Gerais, mas distribui-se de forma desigual no território. As RAs de ocupação recente e de renda baixa, como Sol Nascente/Pôr do Sol, SCIA-Estrutural, Itapoã e Fercal, têm menor densidade de comércio de alimentos frescos, o que eleva preços relativos e favorece o consumo de ultraprocessados. A insegurança alimentar subiu de 26,5% para 27,0% dos domicílios entre 2023 e 2024 (IBGE, PNAD Contínua), indicando que a disponibilidade agregada não assegura acesso. Não há mapeamento oficial de desertos alimentares por RA nesta versão. O fator articula-se a E1-F02, E1-F24, E5-F23 e E2-F02, e o plano popular deve mapear feiras, sacolões e mercados por RA e propor feiras itinerantes e equipamentos públicos de abastecimento nas áreas com menor oferta.",
      "fontes_citadas": [
        "IBGE, PNAD Contínua"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2023",
        "2024"
      ],
      "fatores_relacionados": [
        "E1-F02",
        "E1-F24",
        "E5-F23",
        "E2-F02"
      ],
      "origem": {
        "codigo_documento": "E1-F06",
        "nome_no_documento": "Disponibilidade de alimentos",
        "eixo_documento": 1
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E1-F07": {
      "texto": "O trabalho de assistência e doméstico não remunerado no Distrito Federal recai majoritariamente sobre as mulheres e assume formas distintas segundo a RA. Nas RAs de renda alta, parte do cuidado é transferida ao trabalho doméstico remunerado: 18% dos domicílios do DF tinham empregada doméstica em 2018 (Codeplan, PDAD 2018), ocupação em que pessoas negras detinham quase 80% dos postos em 2023 (IPEDF, PED-DF). Nas RAs de renda baixa, com população mais jovem e menor oferta de creches, o cuidado é absorvido pelas próprias famílias. A longa distância entre moradia e trabalho amplia a jornada total, pois o Plano Piloto ainda concentrava o trabalho principal de 26,8% dos ocupados em 2021 (IPEDF, PDAD 2021). O fator articula-se a E1-F01, E3-F04, E5-F23 e E3-F18, e o plano popular deve reconhecer o cuidado como trabalho, ampliar creches e escolas integrais e articular a agenda distrital de cuidados.",
      "fontes_citadas": [
        "Codeplan, PDAD 2018",
        "IPEDF, PED-DF",
        "IPEDF, PDAD 2021"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2018",
        "2023",
        "2021"
      ],
      "fatores_relacionados": [
        "E1-F01",
        "E3-F04",
        "E5-F23",
        "E3-F18"
      ],
      "origem": {
        "codigo_documento": "E1-F07",
        "nome_no_documento": "Trabalho de assistência e doméstico não remunerado",
        "eixo_documento": 1
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E1-F08": {
      "texto": "A geração de emprego e renda no Distrito Federal é marcada pela centralidade da administração pública e dos serviços, que sustentam o maior PIB per capita do país, R$ 129.790,44 em 2023, cerca de 2,4 vezes a média nacional (IBGE, Contas Regionais), e o maior rendimento médio habitual do trabalho, R$ 6.320 em 2025 (IBGE, PNAD Contínua). Essa média é produzida por uma estrutura dual: a renda domiciliar per capita do Lago Sul era de R$ 8.322,81 e a do SCIA-Estrutural de R$ 573,34 em 2018, razão de 14,5 vezes (Codeplan, PDAD 2018). O índice de Gini de 0,566 em 2021 situou o DF entre as quatro unidades mais desiguais (IBGE, PNAD Contínua, conforme Poder360). A concentração dos postos no centro impõe deslocamentos longos aos trabalhadores periféricos. O fator articula-se a E1-F12, E1-F13, E1-F19 e E3-F01, e o plano popular deve priorizar a descentralização de oportunidades de trabalho para as RAs de renda baixa.",
      "fontes_citadas": [
        "IBGE, Contas Regionais",
        "IBGE, PNAD Contínua",
        "Codeplan, PDAD 2018",
        "IBGE, PNAD Contínua, conforme Poder360"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2023",
        "2025",
        "2018",
        "2021"
      ],
      "fatores_relacionados": [
        "E1-F12",
        "E1-F13",
        "E1-F19",
        "E3-F01"
      ],
      "origem": {
        "codigo_documento": "E1-F08",
        "nome_no_documento": "Geração de emprego e renda",
        "eixo_documento": 1
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E1-F09": {
      "texto": "O empreendedorismo solidário, a criatividade e a inovação no Distrito Federal expressam-se em cooperativas de catadores, coletivos culturais periféricos, feiras de artesanato, cozinhas comunitárias e pequenos negócios de base territorial em RAs como Ceilândia, Samambaia, São Sebastião e Planaltina. O DF dispõe de ecossistema institucional de inovação, com universidades, a Fiocruz Brasília, a Embrapa e parques tecnológicos, mas sua conexão com as iniciativas populares é limitada. As cooperativas de catadores constituídas após o fechamento do lixão da Estrutural, em janeiro de 2018, são exemplo de empreendimento coletivo apoiado pelo poder público, com oito organizações selecionadas para os galpões de triagem (SLU, conforme Jornal de Brasília). Não há levantamento sistematizado de empreendimentos solidários por RA nesta versão. O fator articula-se a E1-F11, E1-F27, E4-F05 e E6-F04, e o plano popular pode propor incubação de empreendimentos periféricos pelas instituições de ensino e pesquisa do DF.",
      "fontes_citadas": [
        "SLU, conforme Jornal de Brasília"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2018"
      ],
      "fatores_relacionados": [
        "E1-F11",
        "E1-F27",
        "E4-F05",
        "E6-F04"
      ],
      "origem": {
        "codigo_documento": "E1-F09",
        "nome_no_documento": "Empreendedorismo solidário, criatividade e inovação",
        "eixo_documento": 1
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E1-F10": {
      "texto": "A formalização do emprego no Distrito Federal é elevada na comparação nacional: a taxa de informalidade foi de 27,3% dos ocupados em 2025, a segunda menor do país, atrás de Santa Catarina (IBGE, PNAD Contínua). Essa média reflete o peso do emprego público e esconde a desigualdade racial da proteção trabalhista, pois pessoas negras representavam 61,9% dos assalariados do setor privado sem carteira assinada em 2023 (IPEDF, PED-DF). A formalização via MEI cresce entre trabalhadores de aplicativos, ambulantes e prestadores de serviços das RAs periféricas, com proteção previdenciária limitada. Os empreendimentos de economia solidária carecem de enquadramento jurídico adequado. O fator articula-se a E1-F28, E1-F18, E3-F18 e E1-F22, e o plano popular deve apoiar a formalização com acesso efetivo a direitos, a orientação para MEI e cooperativas e a fiscalização do trabalho sem registro nas RAs de maior informalidade.",
      "fontes_citadas": [
        "IBGE, PNAD Contínua",
        "IPEDF, PED-DF"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2025",
        "2023"
      ],
      "fatores_relacionados": [
        "E1-F28",
        "E1-F18",
        "E3-F18",
        "E1-F22"
      ],
      "origem": {
        "codigo_documento": "E1-F10",
        "nome_no_documento": "Formalização de emprego (CLT, MEI, ECOSOL)",
        "eixo_documento": 1
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E1-F11": {
      "texto": "As iniciativas de economia solidária no Distrito Federal incluem cooperativas e associações de catadores de materiais recicláveis, grupos de produção de mulheres, feiras solidárias, bancos comunitários e cooperativas da agricultura familiar. A reestruturação da gestão de resíduos após o fechamento do lixão da Estrutural, em 2018, ampliou o papel das cooperativas na triagem, com cinco galpões alugados pelo GDF no SIA, SCIA, Saan e Ceilândia e 900 catadores vinculados como agentes de cidadania ambiental com bolsa de R$ 300 (SLU, conforme Jornal de Brasília, 2018). A sustentabilidade econômica dessas iniciativas depende de contratos públicos estáveis e da separação na fonte, ainda baixa. Não há cadastro consolidado de empreendimentos solidários por RA nesta versão. O fator articula-se a E1-F09, E1-F27, E6-F01 e E3-F10, e o plano popular pode priorizar compras públicas de empreendimentos solidários e a remuneração das cooperativas pelos serviços ambientais prestados.",
      "fontes_citadas": [
        "SLU, conforme Jornal de Brasília, 2018"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2018"
      ],
      "fatores_relacionados": [
        "E1-F09",
        "E1-F27",
        "E6-F01",
        "E3-F10"
      ],
      "origem": {
        "codigo_documento": "E1-F11",
        "nome_no_documento": "Iniciativas de economia solidária",
        "eixo_documento": 1
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E1-F12": {
      "texto": "A disponibilidade de emprego no Distrito Federal está espacialmente concentrada. Em 2021, 26,8% dos ocupados trabalhavam no Plano Piloto e 32,5% na própria RA de residência (IPEDF, PDAD 2021), proporção que cresceu em relação a 2018 e indica lenta descentralização. As RAs de renda baixa dispõem de poucos polos de emprego formal, o que prolonga deslocamentos e penaliza quem depende do ônibus, meio usado por 38,2% dos trabalhadores em 2018 (Codeplan, PDAD 2018). O Distrito Federal funciona, ainda, como polo de emprego da RIDE, atraindo trabalhadores do Entorno goiano. Os dados do Novo Caged por setor e RA não foram sistematizados nesta versão. O fator articula-se a E1-F08, E1-F13, E5-F23 e E1-F19, e o plano popular deve orientar política de desenvolvimento econômico local que crie postos de trabalho nas RAs de renda baixa e reduza a dependência do centro.",
      "fontes_citadas": [
        "IPEDF, PDAD 2021",
        "Codeplan, PDAD 2018"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2021",
        "2018"
      ],
      "fatores_relacionados": [
        "E1-F08",
        "E1-F13",
        "E5-F23",
        "E1-F19"
      ],
      "origem": {
        "codigo_documento": "E1-F12",
        "nome_no_documento": "Disponibilidade de emprego",
        "eixo_documento": 1
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E1-F13": {
      "texto": "O desemprego no Distrito Federal recuou para 7,5% em 2025, menor taxa da série histórica (IBGE, PNAD Contínua, escala distrital), mas permanece acima de unidades com renda inferior e apresenta forte recorte racial. A Pesquisa de Emprego e Desemprego registrou taxa de desemprego de 17,9% entre pessoas negras e de 13,5% entre não negras em 2023, diferença que se ampliou de 3,2 para 4,4 pontos percentuais em relação a 2022 (IPEDF e DIEESE, PED-DF). A diferença entre as taxas da PNAD e da PED decorre de metodologias distintas, e ambas devem ser lidas como complementares. O desemprego concentra-se em jovens e nas RAs de renda baixa, e é apontado como principal fator para a permanência de pessoas em situação de rua (IPEDF). O fator articula-se a E1-F12, E1-F28, E3-F16 e E3-F14, e o plano popular deve priorizar a intermediação de mão de obra e a qualificação dirigida a jovens negros das periferias.",
      "fontes_citadas": [
        "IBGE, PNAD Contínua, escala distrital",
        "IPEDF e DIEESE, PED-DF",
        "IPEDF"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2025",
        "2023",
        "2022"
      ],
      "fatores_relacionados": [
        "E1-F12",
        "E1-F28",
        "E3-F16",
        "E3-F14"
      ],
      "origem": {
        "codigo_documento": "E1-F13",
        "nome_no_documento": "Desemprego",
        "eixo_documento": 1
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E1-F14": {
      "texto": "O trabalho infantil no Distrito Federal manifesta-se no comércio ambulante, na coleta de recicláveis, no trabalho doméstico e em atividades em semáforos e feiras, com maior incidência nas RAs de renda baixa e entre crianças de famílias em situação de rua. O fechamento do lixão da Estrutural em 2018 eliminou uma forma histórica de exposição de crianças à catação, mas a vulnerabilidade de famílias que dependiam dessa atividade persiste. A taxa de escolarização de 6 a 14 anos de 98,96% (IBGE Cidades) indica que o trabalho infantil tende a coexistir com a frequência escolar. O fator articula-se a E1-F01, E3-F09, E5-F04 e E3-F14, e o plano popular deve articular escola, assistência social e conselhos tutelares para identificar e acompanhar os casos.",
      "fontes_citadas": [
        "IBGE Cidades"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2018"
      ],
      "fatores_relacionados": [
        "E1-F01",
        "E3-F09",
        "E5-F04",
        "E3-F14"
      ],
      "origem": {
        "codigo_documento": "E1-F14",
        "nome_no_documento": "Trabalho infantil",
        "eixo_documento": 1
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E1-F15": {
      "texto": "O trabalho em condições análogas às de escravidão no Distrito Federal é menos visível que nas fronteiras agrícolas, mas ocorre no trabalho doméstico, na construção civil e em atividades rurais das áreas periféricas e do Entorno. O trabalho doméstico merece atenção específica no DF, onde 18% dos domicílios tinham empregada doméstica em 2018 (Codeplan, PDAD 2018) e onde resgates de trabalhadoras domésticas mantidas por décadas sem remuneração foram objeto de ações de fiscalização federal no país. A condição de migrante e a baixa escolaridade aumentam a vulnerabilidade. O fator articula-se a E1-F18, E3-F07, E3-F13 e E3-F16, e o plano popular deve incluir orientação sobre direitos de trabalhadoras domésticas e canais de denúncia acessíveis.",
      "fontes_citadas": [
        "Codeplan, PDAD 2018"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2018"
      ],
      "fatores_relacionados": [
        "E1-F18",
        "E3-F07",
        "E3-F13",
        "E3-F16"
      ],
      "origem": {
        "codigo_documento": "E1-F15",
        "nome_no_documento": "Trabalho em condições análogas às de escravidão",
        "eixo_documento": 1
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E1-F16": {
      "texto": "A segurança dos ambientes de trabalho no Distrito Federal é desigual entre setores. O emprego público e os serviços de escritório, predominantes no Plano Piloto, contrastam com riscos elevados na construção civil, na coleta de resíduos, nos serviços de entrega por motocicleta e no trabalho rural. A morte de motociclistas no trânsito passou de 74 em 2024 para 104 em 2025, aumento de cerca de 40% (Detran-DF), e parte relevante dessas vítimas trabalha em entregas e transporte por aplicativo, o que faz do trânsito um ambiente de trabalho inseguro. A seca de 2024, com umidade relativa de até 12% (INMET), e o calor extremo expõem trabalhadores ao ar livre a riscos ainda não incorporados às normas de proteção. Os dados do SINAN sobre acidentes de trabalho por RA não foram sistematizados nesta versão. O fator articula-se a E1-F18, E2-F11, E2-F30 e E2-F25, e o plano popular deve incluir os entregadores na vigilância em saúde do trabalhador.",
      "fontes_citadas": [
        "Detran-DF",
        "INMET"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2024",
        "2025"
      ],
      "fatores_relacionados": [
        "E1-F18",
        "E2-F11",
        "E2-F30",
        "E2-F25"
      ],
      "origem": {
        "codigo_documento": "E1-F16",
        "nome_no_documento": "Ambientes de trabalho seguros",
        "eixo_documento": 1
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E1-F17": {
      "texto": "As ações solidárias locais no Distrito Federal envolvem igrejas, associações de moradores, coletivos periféricos, cozinhas solidárias e redes de vizinhança que distribuem alimentos, apoiam pessoas em situação de rua e mobilizam doações em emergências. Essas redes ganharam densidade durante a pandemia de covid-19 e permanecem ativas em RAs como Sol Nascente/Pôr do Sol, SCIA-Estrutural, Itapoã e Ceilândia. A epidemia de dengue de 2024, com 278.301 casos prováveis e 440 óbitos (SES-DF), mobilizou ações comunitárias de eliminação de criadouros que expressam esse capital social. O fator articula-se a E6-F16, E6-F01, E1-F02 e E6-F05, e o plano popular deve mapear as redes solidárias e integrá-las, com autonomia, à resposta a emergências sanitárias e climáticas.",
      "fontes_citadas": [
        "SES-DF"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2024"
      ],
      "fatores_relacionados": [
        "E6-F16",
        "E6-F01",
        "E1-F02",
        "E6-F05"
      ],
      "origem": {
        "codigo_documento": "E1-F17",
        "nome_no_documento": "Ações solidárias locais",
        "eixo_documento": 1
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E1-F18": {
      "texto": "As condições de trabalho no Distrito Federal refletem a dualidade entre o emprego público protegido e o trabalho precário das RAs periféricas. O rendimento médio real das pessoas negras foi de R$ 3.569 em 2023, equivalente a 57,4% do rendimento das não negras, de R$ 6.221, e essa razão piorou em relação a 2022, quando era de 61,7% (IPEDF e DIEESE, PED-DF). O tempo de deslocamento casa-trabalho, a exposição ao calor e à baixa umidade na estiagem e a intensificação do trabalho mediado por plataformas compõem a precarização. O DF tem também o maior rendimento médio habitual do país, R$ 6.320 em 2025 (IBGE, PNAD Contínua), média que expressa a renda do funcionalismo. O fator articula-se a E1-F16, E1-F10, E1-F28 e E3-F18, e o plano popular deve incluir a desigualdade racial de rendimentos e a jornada total, somando trabalho e deslocamento, como indicadores de monitoramento.",
      "fontes_citadas": [
        "IPEDF e DIEESE, PED-DF",
        "IBGE, PNAD Contínua"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2023",
        "2022",
        "2025"
      ],
      "fatores_relacionados": [
        "E1-F16",
        "E1-F10",
        "E1-F28",
        "E3-F18"
      ],
      "origem": {
        "codigo_documento": "E1-F18",
        "nome_no_documento": "Condições de trabalho",
        "eixo_documento": 1
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E1-F19": {
      "texto": "A promoção de políticas de investimento local no Distrito Federal é condicionada pelo arranjo fiscal peculiar da unidade, que acumula competências estaduais e municipais e recebe recursos do Fundo Constitucional do Distrito Federal para segurança, saúde e educação. O DF realizou receitas brutas de R$ 42,81 bilhões e empenhou despesas de R$ 44,10 bilhões em 2025 (IBGE, finanças públicas), e as Regiões Administrativas não têm autonomia orçamentária, o que concentra as decisões de investimento no governo distrital. A criação de novas RAs, como Sol Nascente/Pôr do Sol e Arniqueira, não foi acompanhada de dotação proporcional às necessidades. O fator articula-se a E6-F09, E6-F07, E5-F24 e E1-F08, e o plano popular deve demandar a regionalização do orçamento distrital por RA.",
      "fontes_citadas": [
        "IBGE, finanças públicas"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2025"
      ],
      "fatores_relacionados": [
        "E6-F09",
        "E6-F07",
        "E5-F24",
        "E1-F08"
      ],
      "origem": {
        "codigo_documento": "E1-F19",
        "nome_no_documento": "Promoção de políticas de investimento local",
        "eixo_documento": 1
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E1-F20": {
      "texto": "O acesso a serviços bancários no Distrito Federal é amplo nas RAs centrais e de renda alta e mais restrito nas áreas periféricas de ocupação recente, como Sol Nascente/Pôr do Sol, SCIA-Estrutural, Fercal e partes de Itapoã, onde agências físicas são escassas e predominam correspondentes bancários e lotéricas. A digitalização bancária e o Pix ampliaram a inclusão financeira, mas expõem a população a fraudes: o DF registrou 51.457 ocorrências de estelionato em 2025, taxa de 1.717,0 por 100 mil habitantes, a segunda maior do país (Anuário Brasileiro de Segurança Pública 2026). Idosos e pessoas com baixa escolaridade digital estão entre os mais vulneráveis. A distribuição de agências por RA, disponível no Banco Central, não foi sistematizada nesta versão. O fator articula-se a E1-F22, E5-F21, E3-F09 e E6-F11, e o plano popular pode prever educação financeira e digital comunitária com foco na prevenção de golpes.",
      "fontes_citadas": [
        "Anuário Brasileiro de Segurança Pública 2026"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2025",
        "2026"
      ],
      "fatores_relacionados": [
        "E1-F22",
        "E5-F21",
        "E3-F09",
        "E6-F11"
      ],
      "origem": {
        "codigo_documento": "E1-F20",
        "nome_no_documento": "Acesso a serviços bancários",
        "eixo_documento": 1
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E1-F21": {
      "texto": "A industrialização no Distrito Federal tem peso reduzido na estrutura produtiva, dominada pela administração pública e pelos serviços, e restringe-se à construção civil, à indústria de alimentos, à extração e produção de cimento na Fercal e a polos industriais e de abastecimento como o SIA e o SCIA. A produção cimenteira na Fercal, RA de renda baixa e com população majoritariamente negra, associa-se a impactos de poeira e ruído sobre os moradores, expressão de racismo ambiental (E3-F17). A Fercal tinha renda domiciliar per capita de R$ 816,29 em 2018 (Codeplan, PDAD 2018), o que indica que a atividade industrial local não converte renda para a população residente. Os dados de emprego industrial por RA não foram sistematizados nesta versão. O fator articula-se a E1-F23, E2-F21, E2-F25 e E3-F17, e o plano popular deve exigir monitoramento da qualidade do ar na Fercal e contrapartidas sociais das empresas.",
      "fontes_citadas": [
        "Codeplan, PDAD 2018"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2018"
      ],
      "fatores_relacionados": [
        "E3-F17",
        "E1-F23",
        "E2-F21",
        "E2-F25"
      ],
      "origem": {
        "codigo_documento": "E1-F21",
        "nome_no_documento": "Industrialização inclusiva e sustentável",
        "eixo_documento": 1
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E1-F22": {
      "texto": "O crédito para micro e pequenas empresas e cooperativas no Distrito Federal é oferecido pelo Banco de Brasília, por programas distritais de microcrédito e pelos bancos públicos federais, mas o acesso é limitado para empreendedores informais das RAs periféricas, que não dispõem de garantias, histórico de crédito ou formalização. As cooperativas de catadores e da agricultura familiar dependem de linhas específicas, como o Pronaf, cuja execução por RA não foi sistematizada nesta versão. A taxa de informalidade de 27,3% em 2025 (IBGE, PNAD Contínua), embora baixa na comparação nacional, corresponde a contingente expressivo de trabalhadores fora do crédito produtivo. O fator articula-se a E1-F20, E1-F10, E1-F11 e E1-F29, e o plano popular pode propor fundos rotativos comunitários, a ampliação do microcrédito orientado nas RAs de renda baixa e a articulação entre crédito e assistência técnica para empreendimentos solidários.",
      "fontes_citadas": [
        "IBGE, PNAD Contínua"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2025"
      ],
      "fatores_relacionados": [
        "E1-F20",
        "E1-F10",
        "E1-F11",
        "E1-F29"
      ],
      "origem": {
        "codigo_documento": "E1-F22",
        "nome_no_documento": "Crédito para micro, pequenas empresas e cooperativas",
        "eixo_documento": 1
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E1-F23": {
      "texto": "As atividades econômicas sustentáveis no Distrito Federal incluem a agricultura familiar de base agroecológica, a reciclagem por cooperativas, o turismo em unidades de conservação como o Parque Nacional de Brasília e a Estação Ecológica de Águas Emendadas, e serviços ligados à economia do conhecimento. Em sentido oposto, a expansão urbana sobre áreas de Cerrado, impulsionada pela grilagem e pela especulação imobiliária, foi apontada como principal vetor do aumento do desmatamento de 90 para 638 hectares entre 2022 e 2023 (MapBiomas, RAD 2023). A disputa entre esses modelos expressa-se na ocupação de áreas de recarga de aquíferos e de proteção de mananciais. A base de dados sobre empregos verdes por RA não está disponível nesta versão. O fator articula-se a E4-F16, E4-F22, E1-F27 e E4-F17, e o plano popular deve apoiar cadeias produtivas sustentáveis nas áreas rurais e nas zonas de amortecimento das unidades de conservação.",
      "fontes_citadas": [
        "MapBiomas, RAD 2023"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2022",
        "2023"
      ],
      "fatores_relacionados": [
        "E4-F16",
        "E4-F22",
        "E1-F27",
        "E4-F17"
      ],
      "origem": {
        "codigo_documento": "E1-F23",
        "nome_no_documento": "Atividades econômicas sustentáveis",
        "eixo_documento": 1
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E1-F24": {
      "texto": "A cobrança de preços abusivos por itens básicos no Distrito Federal afeta de modo mais intenso as RAs de renda baixa, onde a menor concorrência no comércio, a distância dos atacadistas e a informalidade de fornecedores elevam os preços relativos de alimentos, gás de cozinha e água engarrafada. O custo de vida do DF, entre os mais altos do país, combina-se à renda domiciliar média de R$ 2.644,96 nas RAs de renda baixa em 2021 (IPEDF, PDAD 2021), o que comprime o orçamento destinado à alimentação. Nas ocupações irregulares, a venda informal de lotes e de ligações de água e energia sujeita os moradores a preços sem regulação. Os registros do Procon-DF por RA não foram sistematizados nesta versão. O fator articula-se a E1-F25, E1-F06, E2-F02 e E5-F22, e o plano popular pode organizar monitoramento comunitário de preços da cesta básica por RA em parceria com o Procon-DF.",
      "fontes_citadas": [
        "IPEDF, PDAD 2021"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2021"
      ],
      "fatores_relacionados": [
        "E1-F25",
        "E1-F06",
        "E2-F02",
        "E5-F22"
      ],
      "origem": {
        "codigo_documento": "E1-F24",
        "nome_no_documento": "Cobrança de preços abusivos por itens básicos",
        "eixo_documento": 1
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E1-F25": {
      "texto": "A regulamentação e o monitoramento dos mercados no Distrito Federal são exercidos pelo Procon-DF, pela Adasa, agência reguladora de água, saneamento, energia e resíduos, e por órgãos federais como o Cade e a ANP. A Adasa tem papel singular por regular a Caesb e a gestão de recursos hídricos, função que se mostrou decisiva na crise hídrica de 2016 a 2018, quando o racionamento iniciado em janeiro de 2017 atingiu cerca de 1,8 milhão de pessoas abastecidas pelo Descoberto (Caesb e Adasa, conforme Congresso em Foco). O mercado imobiliário, com forte presença de parcelamentos irregulares, carece de regulação efetiva que proteja compradores de lotes em áreas não regularizadas. O fator articula-se a E1-F24, E2-F23, E5-F22 e E6-F09, e o plano popular deve exigir transparência tarifária, controle social sobre a regulação dos serviços essenciais e fiscalização da venda de lotes irregulares.",
      "fontes_citadas": [
        "Caesb e Adasa, conforme Congresso em Foco"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2016",
        "2018",
        "2017"
      ],
      "fatores_relacionados": [
        "E1-F24",
        "E2-F23",
        "E5-F22",
        "E6-F09"
      ],
      "origem": {
        "codigo_documento": "E1-F25",
        "nome_no_documento": "Regulamentação e monitoramento dos mercados e instituições (monopólios e preço justo)",
        "eixo_documento": 1
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E1-F26": {
      "texto": "Os sistemas sustentáveis de produção de alimentos no Distrito Federal dependem da proteção das áreas rurais e dos mananciais. A bacia do Descoberto, que abastecia cerca de 1,8 milhão de pessoas na crise hídrica de 2017, combina produção agrícola intensiva, ocupação urbana irregular e captação para abastecimento (Caesb, conforme Congresso em Foco), o que torna a conversão para práticas conservacionistas uma questão de saúde pública. A seca de 164 dias sem chuva em 2024, recorde da série do INMET, evidenciou a vulnerabilidade hídrica da agricultura irrigada. Programas de pagamento por serviços ambientais a produtores, como o Produtor de Água na bacia do Pipiripau, são experiências relevantes cuja escala não foi quantificada nesta versão. O fator articula-se a E1-F05, E4-F04, E2-F30 e E1-F03, e o plano popular deve apoiar a transição agroecológica nas bacias de abastecimento e a expansão dos programas de serviços ambientais.",
      "fontes_citadas": [
        "Caesb, conforme Congresso em Foco"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2017",
        "2024"
      ],
      "fatores_relacionados": [
        "E1-F05",
        "E4-F04",
        "E2-F30",
        "E1-F03"
      ],
      "origem": {
        "codigo_documento": "E1-F26",
        "nome_no_documento": "Sistemas sustentáveis de produção de alimentos",
        "eixo_documento": 1
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E1-F27": {
      "texto": "A economia circular no Distrito Federal tem como marco o fechamento do lixão da Estrutural em 20 de janeiro de 2018, depois de quase 60 anos de funcionamento em área de 201 hectares contígua ao Parque Nacional de Brasília, com a transferência dos rejeitos para o Aterro Sanitário de Brasília e da triagem para galpões operados por cooperativas (SLU, conforme Jornal de Brasília). A coleta seletiva ainda enfrenta baixa adesão e dúvidas da população sobre a separação, o que limita a recuperação de materiais e a renda dos catadores. Os resíduos da construção civil, destinados ao antigo lixão e a pontos de descarte irregular, constituem fluxo relevante, e o entulho foi relatado em 16,8% dos domicílios em 2021 (IPEDF, PDAD 2021). O fator articula-se a E1-F11, E2-F21, E6-F05 e E1-F09, e o plano popular pode organizar pontos de entrega voluntária geridos com cooperativas nas RAs de maior descarte irregular.",
      "fontes_citadas": [
        "SLU, conforme Jornal de Brasília",
        "IPEDF, PDAD 2021"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2018",
        "2021"
      ],
      "fatores_relacionados": [
        "E1-F11",
        "E2-F21",
        "E6-F05",
        "E1-F09"
      ],
      "origem": {
        "codigo_documento": "E1-F27",
        "nome_no_documento": "Economia circular",
        "eixo_documento": 1
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E1-F28": {
      "texto": "O trabalho informal no Distrito Federal atingiu 27,3% dos ocupados em 2025, a segunda menor taxa do país (IBGE, PNAD Contínua), mas concentra-se nas RAs de renda baixa e entre trabalhadores negros, que representavam 61,9% dos assalariados do setor privado sem carteira em 2023 (IPEDF, PED-DF). As formas predominantes incluem comércio ambulante na Rodoviária do Plano Piloto e nos centros das RAs, serviços de entrega e transporte por aplicativo, trabalho doméstico sem registro, construção civil e catação. A informalidade implica ausência de proteção em adoecimento, acidentes e eventos extremos, como a seca e as ondas de calor de 2024. O aumento de 40% nas mortes de motociclistas em 2025 (Detran-DF) associa-se à expansão do trabalho por plataforma. O fator articula-se a E1-F10, E1-F13, E1-F16 e E3-F18, e o plano popular deve incluir trabalhadores informais na vigilância em saúde do trabalhador e em programas de proteção social.",
      "fontes_citadas": [
        "IBGE, PNAD Contínua",
        "IPEDF, PED-DF",
        "Detran-DF"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2025",
        "2023",
        "2024"
      ],
      "fatores_relacionados": [
        "E1-F10",
        "E1-F13",
        "E1-F16",
        "E3-F18"
      ],
      "origem": {
        "codigo_documento": "E1-F28",
        "nome_no_documento": "Trabalho informal",
        "eixo_documento": 1
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E1-F29": {
      "texto": "O crédito para adaptação climática e reconstrução no Distrito Federal é praticamente inexistente como linha específica para famílias e pequenos empreendimentos. Os eventos que mais afetam a economia popular no DF são a seca prolongada, que alcançou 164 dias sem chuva em 2024 (INMET), os incêndios florestais e as chuvas concentradas que causam alagamentos, erosões e perdas de moradias nas 22 áreas de risco monitoradas pela Defesa Civil, com destaque para Sol Nascente/Pôr do Sol, Fercal, Vicente Pires, Sobradinho II e Arniqueira (Defesa Civil do DF, dezembro de 2024). Agricultores familiares atingidos pela estiagem e moradores que perdem bens em alagamentos dependem de auxílios emergenciais pontuais. O fator articula-se a E1-F22, E2-F33, E2-F30 e E4-F12, e o plano popular pode propor linhas de crédito subsidiado para adaptação de moradias e sistemas de captação de água, associadas ao mapeamento comunitário de riscos.",
      "fontes_citadas": [
        "INMET",
        "Defesa Civil do DF, dezembro de 2024"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2024"
      ],
      "fatores_relacionados": [
        "E1-F22",
        "E2-F33",
        "E2-F30",
        "E4-F12"
      ],
      "origem": {
        "codigo_documento": "E1-F29",
        "nome_no_documento": "Crédito para adaptação climática e reconstrução",
        "eixo_documento": 1
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F01": {
      "texto": "A área inundada no Distrito Federal não decorre de cheias fluviais extensas, como em planícies amazônicas, mas de inundações e alagamentos urbanos associados a chuvas intensas, impermeabilização do solo e drenagem insuficiente. A Defesa Civil do DF monitorava 22 áreas de risco em dezembro de 2024, com ameaças de erosões, deslizamentos e inundações e atenção prioritária a Sol Nascente/Pôr do Sol, Fercal, Vicente Pires, Sobradinho II e Arniqueira (Defesa Civil do DF, conforme Jornal de Brasília). Vicente Pires e Arniqueira, originadas de parcelamentos irregulares de chácaras, foram urbanizadas antes da implantação de drenagem. Em 2021, 18,2% dos domicílios relatavam ruas alagadas nas proximidades (IPEDF, PDAD 2021). A delimitação cartográfica das áreas inundáveis por RA, disponível no Serviço Geológico do Brasil e na Defesa Civil, não foi incorporada nesta versão. O fator articula-se a E2-F34, E2-F33, E5-F24 e E3-F17, e o plano popular deve mapear com a comunidade os pontos de alagamento recorrente.",
      "fontes_citadas": [
        "Defesa Civil do DF, conforme Jornal de Brasília",
        "IPEDF, PDAD 2021"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2024",
        "2021"
      ],
      "fatores_relacionados": [
        "E2-F34",
        "E2-F33",
        "E5-F24",
        "E3-F17"
      ],
      "origem": {
        "codigo_documento": "E2-F01",
        "nome_no_documento": "Área inundada",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F02": {
      "texto": "A insegurança alimentar atingiu 27,0% dos domicílios do Distrito Federal em 2024, ante 26,5% em 2023, trajetória contrária à redução observada no país (IBGE, PNAD Contínua, escala distrital, conforme Sedes-DF). O dado contrasta com o rendimento médio do trabalho mais alto do Brasil, R$ 6.320 em 2025 (IBGE, PNAD Contínua), e revela a concentração da privação nas RAs de renda baixa, como SCIA-Estrutural, Sol Nascente/Pôr do Sol, Itapoã, Paranoá, Fercal e Varjão (IPEDF, PDAD 2021). A população em situação de rua, estimada em mais de 3,5 mil pessoas em abril de 2025 (IPEDF), compõe o núcleo da insegurança alimentar grave. Os dados de estado nutricional do SISVAN por região de saúde não foram sistematizados nesta versão. O fator articula-se a E1-F02, E1-F06, E3-F01 e E3-F14, e o plano popular deve incorporar a triagem de insegurança alimentar nas UBS e mapear a rede de restaurantes comunitários por RA.",
      "fontes_citadas": [
        "IBGE, PNAD Contínua, escala distrital, conforme Sedes-DF",
        "IBGE, PNAD Contínua",
        "IPEDF, PDAD 2021",
        "IPEDF"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2024",
        "2023",
        "2025",
        "2021"
      ],
      "fatores_relacionados": [
        "E1-F02",
        "E1-F06",
        "E3-F01",
        "E3-F14"
      ],
      "origem": {
        "codigo_documento": "E2-F02",
        "nome_no_documento": "Insegurança alimentar",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F03": {
      "texto": "A mortalidade materna no Distrito Federal apresentou razão de 20,07 óbitos por 100 mil nascidos vivos no segundo quadrimestre de 2025, abaixo da meta distrital de 30 (SES-DF, 2º RDQA 2025). Em 2024, foram seis óbitos maternos no primeiro quadrimestre (SES-DF, 2º RDQA 2024). A epidemia de dengue de 2024 incluiu gestantes entre os grupos de risco para formas graves, o que reforça a necessidade de articular vigilância de arboviroses e atenção pré-natal. As desigualdades raciais e territoriais da mortalidade materna, documentadas nacionalmente, devem ser verificadas no DF pelos comitês de mortalidade materna. O fator articula-se a E2-F04, E2-F12, E2-F15 e E3-F18, e o plano popular deve monitorar o acesso ao pré-natal nas RAs de renda baixa.",
      "fontes_citadas": [
        "SES-DF, 2º RDQA 2025",
        "SES-DF, 2º RDQA 2024"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2025",
        "2024"
      ],
      "fatores_relacionados": [
        "E2-F04",
        "E2-F12",
        "E2-F15",
        "E3-F18"
      ],
      "origem": {
        "codigo_documento": "E2-F03",
        "nome_no_documento": "Mortalidade materna",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F04": {
      "texto": "A mortalidade neonatal constitui o principal componente da mortalidade infantil no Distrito Federal, padrão documentado desde a década de 1990, quando o componente neonatal concentrava a maior parte dos óbitos e apresentava redução mais lenta que o pós-neonatal (Cadernos de Saúde Pública, série 1990 a 2000). A permanência desse padrão associa-se à qualidade do pré-natal, do parto e da assistência neonatal, e à oferta de leitos de UTI neonatal, concentrados em poucos hospitais da rede. A SES-DF dispunha de 735 leitos de UTI e UCI no conjunto da rede em 2025 (SES-DF, 2º RDQA 2025), sem desagregação neonatal no documento consultado. O fator articula-se a E2-F05, E2-F03, E2-F15 e E2-F16, e o plano popular deve acompanhar a regionalização da atenção ao parto e ao recém-nascido.",
      "fontes_citadas": [
        "Cadernos de Saúde Pública, série 1990 a 2000",
        "SES-DF, 2º RDQA 2025"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "1990",
        "2000",
        "2025"
      ],
      "fatores_relacionados": [
        "E2-F05",
        "E2-F03",
        "E2-F15",
        "E2-F16"
      ],
      "origem": {
        "codigo_documento": "E2-F04",
        "nome_no_documento": "Mortalidade neonatal",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F05": {
      "texto": "A mortalidade infantil no Distrito Federal foi de 9,55 óbitos por mil nascidos vivos segundo o IBGE Cidades, com base no DATASUS, e de 10,9 por mil no segundo quadrimestre de 2024, com 122 óbitos infantis no período (SES-DF, 2º RDQA 2024). O nível é inferior à média nacional, mas a distribuição entre regiões de saúde não é homogênea: os valores quadrimestrais mais elevados foram registrados nas regiões Sul e Centro-Sul, com 12,4 por mil, segundo a leitura do mesmo relatório. A série histórica mostra que a redução iniciada nos anos 1990 foi acompanhada de persistência da maior mortalidade nos estratos de menor renda (Cadernos de Saúde Pública). O fator articula-se a E2-F04, E2-F14, E2-F20 e E3-F01, e o plano popular deve adotar a mortalidade infantil por região de saúde e por RA como indicador sentinela de equidade, com investigação de todos os óbitos evitáveis.",
      "fontes_citadas": [
        "SES-DF, 2º RDQA 2024",
        "Cadernos de Saúde Pública",
        "IBGE Cidades",
        "DATASUS"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2024",
        "1990"
      ],
      "fatores_relacionados": [
        "E2-F04",
        "E2-F14",
        "E2-F20",
        "E3-F01"
      ],
      "origem": {
        "codigo_documento": "E2-F05",
        "nome_no_documento": "Mortalidade infantil",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F06": {
      "texto": "As doenças decorrentes de contaminação e poluição no Distrito Federal associam-se principalmente à poluição atmosférica na estiagem, agravada por queimadas e pela baixa umidade, e à exposição a poeira em áreas industriais e de mineração, como a Fercal. A seca de 2024, com 164 dias sem chuva e umidade relativa de até 12% (INMET), foi acompanhada de aumento de atendimentos por doenças respiratórias, segundo a imprensa local. O passivo ambiental do antigo lixão da Estrutural, que operou por quase 60 anos ao lado do Parque Nacional de Brasília, mantém risco de contaminação do solo e da água subterrânea. O fator articula-se a E2-F21, E2-F25, E3-F17 e E2-F38, e o plano popular deve associar alertas de qualidade do ar a orientações de proteção para crianças, idosos e pessoas com doenças respiratórias.",
      "fontes_citadas": [
        "INMET"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2024"
      ],
      "fatores_relacionados": [
        "E2-F21",
        "E2-F25",
        "E3-F17",
        "E2-F38"
      ],
      "origem": {
        "codigo_documento": "E2-F06",
        "nome_no_documento": "Doenças decorrentes de contaminação e poluição do ar, da água e do solo",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F07": {
      "texto": "A dengue constitui o problema sanitário mais agudo do Distrito Federal no período recente. Em 2024, o DF registrou 278.301 casos prováveis e 440 óbitos, contra 44.483 casos e 24 óbitos em 2023, e teve a maior incidência entre as unidades da federação (SES-DF, boletim epidemiológico, conforme Correio Braziliense). As maiores incidências ocorreram em Brazlândia, com 14.012,73 casos por 100 mil habitantes, Varjão, com 12.713,06, e Santa Maria, com 12.359,90, e os maiores números absolutos em Ceilândia, com 34.325 casos, Samambaia, com 22.098, e Santa Maria, com 16.368. Os óbitos concentraram-se em Ceilândia, com 63, Samambaia, com 55, e Taguatinga, com 30, e as pessoas de 80 anos ou mais responderam por 26,6% das mortes. O fator articula-se a E2-F35, E2-F19, E2-F20 e E6-F05, e o plano popular deve organizar vigilância comunitária de criadouros por microárea, com prioridade às RAs de maior incidência.",
      "fontes_citadas": [
        "SES-DF, boletim epidemiológico, conforme Correio Braziliense"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2024",
        "2023"
      ],
      "fatores_relacionados": [
        "E2-F35",
        "E2-F19",
        "E2-F20",
        "E6-F05"
      ],
      "origem": {
        "codigo_documento": "E2-F07",
        "nome_no_documento": "Dengue",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F08": {
      "texto": "As doenças transmissíveis no Distrito Federal incluem HIV e aids, tuberculose, sífilis, hanseníase e hepatites virais, com maior carga nas populações em situação de rua, privadas de liberdade e residentes nas RAs de renda baixa. O DF possui rede de referência para HIV e infecções sexualmente transmissíveis e acesso à profilaxia pré-exposição, mas a distribuição desses serviços é concentrada nas regiões Central e Centro-Sul. A população em situação de rua, estimada em mais de 3,5 mil pessoas em 2025 (IPEDF), apresenta risco acrescido para tuberculose e HIV. O fator articula-se a E2-F12, E2-F15, E3-F14 e E2-F13, e o plano popular deve priorizar a busca ativa de tuberculose e a testagem de IST nas populações vulnerabilizadas.",
      "fontes_citadas": [
        "IPEDF"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2025"
      ],
      "fatores_relacionados": [
        "E2-F12",
        "E2-F15",
        "E3-F14",
        "E2-F13"
      ],
      "origem": {
        "codigo_documento": "E2-F08",
        "nome_no_documento": "Doenças transmissíveis (AIDS, tuberculose, hanseníase, negligenciadas)",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F09": {
      "texto": "As doenças crônicas não transmissíveis, como hipertensão, diabetes, doenças cardiovasculares, cânceres e doenças respiratórias crônicas, são as principais causas de morte no Distrito Federal, em população que envelhece e cuja idade média chegou a 34,0 anos em 2021 (IPEDF, PDAD 2021). A taxa de internações por hipertensão e complicações, indicador de internações sensíveis à APS, foi de 0,49 no segundo quadrimestre de 2025, abaixo da meta de 1,70 (SES-DF, 2º RDQA 2025). A cobertura potencial da APS de 76,69% no mesmo período deixa parcela relevante da população sem acompanhamento longitudinal das condições crônicas. Os dados do Vigitel para Brasília e as taxas de mortalidade prematura por DCNT por região de saúde não foram sistematizados nesta versão. O fator articula-se a E2-F15, E2-F19, E2-F13 e E5-F26, e o plano popular deve fortalecer grupos de cuidado de hipertensos e diabéticos nas UBS.",
      "fontes_citadas": [
        "IPEDF, PDAD 2021",
        "SES-DF, 2º RDQA 2025"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2021",
        "2025"
      ],
      "fatores_relacionados": [
        "E2-F15",
        "E2-F19",
        "E2-F13",
        "E5-F26"
      ],
      "origem": {
        "codigo_documento": "E2-F09",
        "nome_no_documento": "Doenças não transmissíveis (crônicas)",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F10": {
      "texto": "O uso de drogas e álcool no Distrito Federal é problema de saúde pública com expressão mais visível na população em situação de rua, nas cenas de uso em áreas centrais, como o entorno da Rodoviária do Plano Piloto e o Setor Comercial Sul, e em RAs periféricas. A população em situação de rua cresceu 19,4% entre 2022 e abril de 2025, ultrapassando 3,5 mil pessoas (IPEDF), e o uso de substâncias é fator de vulnerabilidade associado ao desemprego e à ruptura de vínculos. A rede de atenção psicossocial, com CAPS AD e unidades de acolhimento, não teve sua cobertura por região de saúde sistematizada nesta versão. O fator articula-se a E2-F18, E3-F14, E2-F28 e E2-F11, e o plano popular deve priorizar estratégias de redução de danos, consultório na rua e prevenção dirigida a adolescentes.",
      "fontes_citadas": [
        "IPEDF"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2022",
        "2025"
      ],
      "fatores_relacionados": [
        "E2-F18",
        "E3-F14",
        "E2-F28",
        "E2-F11"
      ],
      "origem": {
        "codigo_documento": "E2-F10",
        "nome_no_documento": "Uso de drogas e álcool",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F11": {
      "texto": "Os acidentes de trânsito no Distrito Federal causaram 223 mortes em 2024, redução de 19,7% em relação ao ano anterior (Detran-DF, conforme Jornal de Brasília). Os pedestres foram as principais vítimas, com 60 mortes em 2024, ante 88 em 2023, seguidos por motociclistas, passageiros e ciclistas, e os homens com mais de 60 anos constituíram o grupo mais atingido. Em 2025, as mortes de motociclistas subiram de 74 para 104, aumento de cerca de 40% (Detran-DF). A frota de 2.239.078 veículos (IBGE Estados) e o predomínio do automóvel, usado por 47,0% dos trabalhadores em 2018 (Codeplan, PDAD 2018), configuram um sistema de mobilidade rodoviário com vias expressas que cortam áreas residenciais. O fator articula-se a E5-F23, E5-F19, E1-F16 e E2-F19, e o plano popular deve mapear pontos de atropelamento com a comunidade e propor travessias seguras nas rodovias distritais que atravessam as RAs.",
      "fontes_citadas": [
        "Detran-DF, conforme Jornal de Brasília",
        "Detran-DF",
        "IBGE Estados",
        "Codeplan, PDAD 2018"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2024",
        "2023",
        "2025",
        "2018"
      ],
      "fatores_relacionados": [
        "E5-F23",
        "E5-F19",
        "E1-F16",
        "E2-F19"
      ],
      "origem": {
        "codigo_documento": "E2-F11",
        "nome_no_documento": "Acidentes em estradas",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F12": {
      "texto": "A saúde sexual e reprodutiva no Distrito Federal envolve o acesso ao planejamento reprodutivo, ao pré-natal, à prevenção de infecções sexualmente transmissíveis e à atenção à violência sexual. A população jovem das RAs de renda baixa, com idade média de 30,6 anos no grupo de renda baixa em 2021 (IPEDF, PDAD 2021), concentra a demanda por esses serviços, enquanto a cobertura potencial da APS de 76,69% em 2025 (SES-DF) limita o acesso em parte do território. O aumento das taxas dos nove crimes contra mulheres analisados pelo Anuário Brasileiro de Segurança Pública 2026, entre 2024 e 2025, inclui a violência sexual e exige rede de atendimento com profilaxia e acesso ao aborto legal. O fator articula-se a E2-F03, E2-F08, E3-F02 e E3-F03, e o plano popular deve priorizar educação em saúde sexual nas escolas das RAs de renda baixa.",
      "fontes_citadas": [
        "IPEDF, PDAD 2021",
        "SES-DF"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2021",
        "2025",
        "2026",
        "2024"
      ],
      "fatores_relacionados": [
        "E2-F03",
        "E2-F08",
        "E3-F02",
        "E3-F03"
      ],
      "origem": {
        "codigo_documento": "E2-F12",
        "nome_no_documento": "Saúde sexual e reprodutiva",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F13": {
      "texto": "O acesso a medicamentos no Distrito Federal depende das farmácias das UBS, das farmácias de alto custo da SES-DF e do Programa Farmácia Popular. Os desabastecimentos pontuais de medicamentos e insumos na rede pública são recorrentes no noticiário local. A execução orçamentária da SES-DF foi de 71,04% da dotação autorizada até o segundo quadrimestre de 2025, com R$ 9,39 bilhões empenhados de R$ 13,21 bilhões, e a aplicação em ações e serviços públicos de saúde ficou em 13,03%, com déficit de R$ 21,08 milhões em relação ao mínimo de 13,14% (SES-DF, 2º RDQA 2025). A população sem plano de saúde, 63,9% em 2018 (Codeplan, PDAD 2018), depende integralmente da assistência farmacêutica pública. O fator articula-se a E2-F15, E2-F09, E6-F09 e E2-F08, e o plano popular pode propor monitoramento comunitário da disponibilidade de medicamentos nas UBS.",
      "fontes_citadas": [
        "SES-DF, 2º RDQA 2025",
        "Codeplan, PDAD 2018"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2025",
        "2018"
      ],
      "fatores_relacionados": [
        "E2-F15",
        "E2-F09",
        "E6-F09",
        "E2-F08"
      ],
      "origem": {
        "codigo_documento": "E2-F13",
        "nome_no_documento": "Acesso a medicamentos",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F14": {
      "texto": "A cobertura vacinal infantil no Distrito Federal permaneceu abaixo da meta de 95% em 2025: até junho, o DF registrou 81,0% para poliomielite, 81,2% para pentavalente, 88,6% para pneumocócica 10-valente e 88,8% para tríplice viral (SES-DF, 2º RDQA 2025). Por região de saúde, a Leste teve as menores coberturas, com 70,2% para poliomielite e 70,5% para pentavalente, seguida da Sudoeste e da Sul, enquanto a Central superou 100%, efeito da vacinação de crianças residentes em outras regiões e no Entorno. O próprio relatório aponta falhas de registro e da migração do e-SUS como causas parciais dos resultados. A heterogeneidade indica bolsões de suscetíveis nas regiões de renda mais baixa. O fator articula-se a E2-F15, E2-F05, E2-F08 e E6-F11, e o plano popular deve prever busca ativa de faltosos pelos agentes comunitários e qualificação dos registros vacinais por RA de residência.",
      "fontes_citadas": [
        "SES-DF, 2º RDQA 2025"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2025"
      ],
      "fatores_relacionados": [
        "E2-F15",
        "E2-F05",
        "E2-F08",
        "E6-F11"
      ],
      "origem": {
        "codigo_documento": "E2-F14",
        "nome_no_documento": "Cobertura vacinal",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F15": {
      "texto": "Os serviços de saúde do Distrito Federal estão organizados em sete regiões de saúde, Central, Centro-Sul, Leste, Norte, Oeste, Sudoeste e Sul, com cobertura potencial da APS de 76,69% no segundo quadrimestre de 2025, abaixo da meta de 82,37% (SES-DF, 2º RDQA 2025). A rede dispõe de 4.362 leitos gerais e 735 leitos de UTI e UCI, e atende também a população do Entorno: 19,3% das internações foram de moradores da RIDE fora do DF (SES-DF, 2º RDQA 2025). A população sem plano de saúde, 63,9% em 2018 (Codeplan, PDAD 2018), concentra-se nas RAs de renda baixa, enquanto a cobertura por planos privados predomina no Plano Piloto e nos Lagos. A dependência exclusiva do SUS é, portanto, maior onde a cobertura de APS é mais pressionada. O fator articula-se a E2-F16, E2-F14, E2-F09 e E6-F07, e o plano popular deve monitorar a cobertura de APS por RA e o tempo de espera para atenção especializada.",
      "fontes_citadas": [
        "SES-DF, 2º RDQA 2025",
        "Codeplan, PDAD 2018"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2025",
        "2018"
      ],
      "fatores_relacionados": [
        "E2-F16",
        "E2-F14",
        "E2-F09",
        "E6-F07"
      ],
      "origem": {
        "codigo_documento": "E2-F15",
        "nome_no_documento": "Serviços de saúde",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F16": {
      "texto": "Os profissionais de saúde no Distrito Federal estão vinculados majoritariamente à SES-DF e ao Instituto de Gestão Estratégica de Saúde do DF, e as regiões de saúde concentravam 72,10% da força de trabalho da secretaria em 2025 (SES-DF, 2º RDQA 2025). O absenteísmo variou de 6,31% na administração central a 12,98% na Região Centro-Sul em maio de 2025, indicador de sobrecarga e de condições de trabalho desiguais. A cobertura de equipes multiprofissionais foi de 73,39% e a de saúde bucal de 25,60%, ambas abaixo das metas (SES-DF, 2º RDQA 2025). A epidemia de dengue de 2024 evidenciou a insuficiência de profissionais para picos de demanda. O fator articula-se a E2-F15, E2-F18, E6-F09 e E2-F07, e o plano popular deve monitorar a composição das equipes de APS por RA.",
      "fontes_citadas": [
        "SES-DF, 2º RDQA 2025"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2025",
        "2024"
      ],
      "fatores_relacionados": [
        "E2-F15",
        "E2-F18",
        "E6-F09",
        "E2-F07"
      ],
      "origem": {
        "codigo_documento": "E2-F16",
        "nome_no_documento": "Profissionais de saúde",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F17": {
      "texto": "Os eventos de tornado e vendaval no Distrito Federal são pouco frequentes como fenômeno extremo, mas temporais com ventos fortes no início da estação chuvosa derrubam árvores, destelham moradias e interrompem o fornecimento de energia, com danos maiores em habitações precárias das RAs de ocupação recente. A arborização urbana extensa do Plano Piloto e das RAs consolidadas, que reduz ilhas de calor, demanda manejo preventivo para reduzir quedas em temporais. O fator articula-se a E2-F33, E5-F22, E2-F31 e E2-F37, e o plano popular pode incluir o registro comunitário de quedas de árvores e destelhamentos e a articulação com a Defesa Civil para inspeção preventiva de coberturas em áreas vulneráveis.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E2-F33",
        "E5-F22",
        "E2-F31",
        "E2-F37"
      ],
      "origem": {
        "codigo_documento": "E2-F17",
        "nome_no_documento": "Tornado/Vendaval",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F18": {
      "texto": "A saúde mental no Distrito Federal é atravessada por determinantes como a desigualdade de renda, a violência urbana, os longos deslocamentos e a precariedade do trabalho, e a demanda supera a oferta da rede de atenção psicossocial. As causas externas responderam por 9,3% dos 5.221 óbitos registrados no segundo quadrimestre de 2024 (SES-DF, 2º RDQA 2024), categoria que inclui suicídios, homicídios e acidentes. A seca e o calor extremo de 2024 acrescentam sofrimento associado ao clima, ainda pouco reconhecido pela rede. O fator articula-se a E2-F10, E6-F15, E2-F28 e E3-F14, e o plano popular deve fortalecer o matriciamento em saúde mental na APS e grupos comunitários de escuta nas RAs de renda baixa, onde a oferta especializada é menor.",
      "fontes_citadas": [
        "SES-DF, 2º RDQA 2024"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2024"
      ],
      "fatores_relacionados": [
        "E2-F10",
        "E6-F15",
        "E2-F28",
        "E3-F14"
      ],
      "origem": {
        "codigo_documento": "E2-F18",
        "nome_no_documento": "Saúde mental",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F19": {
      "texto": "A saúde do idoso no Distrito Federal ganha relevância com o envelhecimento da população, mais acentuado nas RAs de renda alta, onde a idade média chegou a 37,6 anos em 2021, contra 30,6 nas de renda baixa (IPEDF, PDAD 2021). A vulnerabilidade dos idosos ficou evidente na epidemia de dengue de 2024, em que pessoas com 80 anos ou mais responderam por 117 dos 440 óbitos, 26,6% do total (SES-DF). No trânsito, os homens com mais de 60 anos foram o principal grupo de vítimas fatais em 2024 (Detran-DF), e os idosos estão entre os alvos preferenciais de estelionato, crime em que o DF teve a segunda maior taxa do país em 2025 (Anuário Brasileiro de Segurança Pública 2026). O fator articula-se a E2-F07, E2-F11, E3-F09 e E2-F09, e o plano popular deve mapear idosos que vivem sós e com mobilidade reduzida, para cuidado domiciliar e prioridade em emergências.",
      "fontes_citadas": [
        "IPEDF, PDAD 2021",
        "SES-DF",
        "Detran-DF",
        "Anuário Brasileiro de Segurança Pública 2026"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2021",
        "2024",
        "2025",
        "2026"
      ],
      "fatores_relacionados": [
        "E2-F07",
        "E2-F11",
        "E3-F09",
        "E2-F09"
      ],
      "origem": {
        "codigo_documento": "E2-F19",
        "nome_no_documento": "Saúde do idoso",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F20": {
      "texto": "O acesso à água e ao saneamento no Distrito Federal é elevado na média: Brasília está entre as sete capitais com mais de 90% de coleta de esgoto e pelo menos 80% de tratamento (Instituto Trata Brasil, Ranking do Saneamento 2026, base SINISA 2024). A média esconde déficits localizados nas áreas de ocupação irregular e de urbanização recente, como Sol Nascente/Pôr do Sol, partes de Vicente Pires, Arniqueira, Itapoã e condomínios irregulares, onde persistem fossas e ligações improvisadas. A Fercal foi apontada com apenas 20% dos domicílios com saneamento básico, segundo o Mapa das Desigualdades do Inesc com base na PDAD. A crise hídrica de 2017, com racionamento para 1,8 milhão de pessoas, mostrou a vulnerabilidade da oferta à estiagem. O fator articula-se a E2-F23, E2-F31, E2-F07 e E5-F22, e o plano popular deve mapear as áreas sem rede de esgoto por RA e acompanhar as metas de universalização da Caesb.",
      "fontes_citadas": [
        "Instituto Trata Brasil, Ranking do Saneamento 2026, base SINISA 2024",
        "Mapa das Desigualdades do Inesc com base na PDAD"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2026",
        "2024",
        "2017"
      ],
      "fatores_relacionados": [
        "E2-F23",
        "E2-F31",
        "E2-F07",
        "E5-F22"
      ],
      "origem": {
        "codigo_documento": "E2-F20",
        "nome_no_documento": "Acesso à água e saneamento",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F21": {
      "texto": "A contaminação e a poluição do ar, da água e do solo no Distrito Federal decorrem da poluição atmosférica na estiagem, agravada por queimadas e pela poeira, do lançamento de esgoto e de drenagem urbana em córregos e no Lago Paranoá, do passivo do antigo lixão da Estrutural e do uso de agrotóxicos nas áreas agrícolas das bacias de abastecimento. O lixão operou por quase 60 anos em área de 201 hectares ao lado do Parque Nacional de Brasília, e sua área passou a receber resíduos da construção civil após 2018 (SLU, conforme Jornal de Brasília). A atividade cimenteira na Fercal expõe moradores a material particulado. A rede de monitoramento da qualidade do ar e da água do Ibram e da Adasa não teve seus dados sistematizados nesta versão. O fator articula-se a E2-F06, E2-F25, E3-F17 e E4-F04, e o plano popular deve exigir monitoramento contínuo nas RAs expostas, com divulgação acessível.",
      "fontes_citadas": [
        "SLU, conforme Jornal de Brasília"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2018"
      ],
      "fatores_relacionados": [
        "E2-F06",
        "E2-F25",
        "E3-F17",
        "E4-F04"
      ],
      "origem": {
        "codigo_documento": "E2-F21",
        "nome_no_documento": "Contaminação e poluição do ar, da água e do solo",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F22": {
      "texto": "A participação das comunidades locais na gestão da água e do saneamento no Distrito Federal ocorre nos comitês de bacia hidrográfica, como os do Paranoá e dos afluentes do Preto e do Maranhão, no Conselho de Recursos Hídricos e nas audiências da Adasa. A crise hídrica de 2017 ampliou a mobilização social sobre o tema, inclusive pela percepção de desigualdade do racionamento, que atingiu Ceilândia, Taguatinga, Samambaia e outras RAs do sistema Descoberto e excluiu inicialmente o Plano Piloto e os Lagos (Caesb, conforme Congresso em Foco). A representação de moradores de RAs de renda baixa e de áreas irregulares nessas instâncias é reduzida. O fator articula-se a E2-F23, E6-F07, E2-F20 e E3-F17, e o plano popular deve fortalecer a presença de lideranças periféricas nos comitês de bacia e propor monitoramento comunitário da qualidade da água e da regularidade do abastecimento.",
      "fontes_citadas": [
        "Caesb, conforme Congresso em Foco"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2017"
      ],
      "fatores_relacionados": [
        "E2-F23",
        "E6-F07",
        "E2-F20",
        "E3-F17"
      ],
      "origem": {
        "codigo_documento": "E2-F22",
        "nome_no_documento": "Participação das comunidades locais na gestão da água e saneamento",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F23": {
      "texto": "A gestão da água e do saneamento no Distrito Federal é exercida pela Caesb, regulada pela Adasa, com os sistemas Descoberto, Santa Maria-Torto, Paranoá e Corumbá. A crise hídrica de 2016 a 2018 levou o reservatório do Descoberto abaixo de 20% de seu volume, o menor nível da história, e o de Santa Maria a cerca de 40%, motivando racionamento a partir de 16 de janeiro de 2017 para cerca de 1,8 milhão de pessoas (Caesb e Adasa, conforme Congresso em Foco). A resposta incluiu novas captações, como a do Lago Paranoá, e a integração com o sistema Corumbá. A seca recorde de 2024, com 164 dias sem chuva (INMET), voltou a pressionar os reservatórios. Brasília não figura entre as capitais com perdas inferiores a 25% (Instituto Trata Brasil, 2026). O fator articula-se a E2-F20, E2-F30, E4-F04 e E4-F12, e o plano popular deve acompanhar planos de contingência hídrica e a redução de perdas.",
      "fontes_citadas": [
        "Caesb e Adasa, conforme Congresso em Foco",
        "INMET",
        "Instituto Trata Brasil, 2026"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2016",
        "2018",
        "2017",
        "2024",
        "2026"
      ],
      "fatores_relacionados": [
        "E2-F20",
        "E2-F30",
        "E4-F04",
        "E4-F12"
      ],
      "origem": {
        "codigo_documento": "E2-F23",
        "nome_no_documento": "Gestão da água e saneamento",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F25": {
      "texto": "A qualidade do ar no Distrito Federal deteriora-se na estação seca, de maio a setembro, quando a baixa umidade, as queimadas no Cerrado e a poeira de vias não pavimentadas e de obras elevam a concentração de material particulado. Em 2024, a seca alcançou 164 dias sem chuva, recorde da série do INMET, e a umidade relativa chegou a 12% nos períodos mais quentes, com alerta vermelho do INMET. O incêndio no Parque Nacional de Brasília, em setembro de 2024, queimou 1.473 hectares e lançou fumaça sobre o Plano Piloto e as RAs vizinhas (Sema-DF). As emissões cimenteiras na Fercal constituem fonte local específica. O fator articula-se a E2-F06, E2-F38, E2-F30 e E2-F19, e o plano popular deve estabelecer alertas de qualidade do ar com orientações de proteção para escolas e UBS.",
      "fontes_citadas": [
        "Sema-DF"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2024"
      ],
      "fatores_relacionados": [
        "E2-F06",
        "E2-F38",
        "E2-F30",
        "E2-F19"
      ],
      "origem": {
        "codigo_documento": "E2-F25",
        "nome_no_documento": "Qualidade do ar",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F26": {
      "texto": "As rotas de fuga no Distrito Federal são pouco definidas para os riscos que caracterizam o território, como alagamentos súbitos, deslizamentos em encostas e erosões, e incêndios florestais que avançam sobre áreas urbanas contíguas a unidades de conservação. Nas RAs de ocupação irregular, como Sol Nascente/Pôr do Sol, Fercal e Sobradinho II, o traçado viário estreito e a ausência de drenagem dificultam a evacuação em chuvas intensas. As áreas próximas ao Parque Nacional de Brasília, à Floresta Nacional e à Estação Ecológica de Águas Emendadas exigem rotas definidas para incêndios. A inexistência de planos de evacuação comunitários por área de risco nos registros consultados configura lacuna. O fator articula-se a E2-F33, E2-F39, E2-F37 e E2-F32, e o plano popular deve definir e sinalizar, com moradores e a Defesa Civil, rotas de fuga nas 22 áreas de risco monitoradas e nas bordas urbanas das unidades de conservação.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E2-F33",
        "E2-F39",
        "E2-F37",
        "E2-F32"
      ],
      "origem": {
        "codigo_documento": "E2-F26",
        "nome_no_documento": "Rota de fuga",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F27": {
      "texto": "A segurança no Distrito Federal apresenta indicadores letais baixos na comparação nacional: a taxa de mortes violentas intencionais foi de 9,6 por 100 mil habitantes em 2025, com 287 mortes, a terceira menor do país (Anuário Brasileiro de Segurança Pública 2026), e os homicídios somaram 221 vítimas, taxa de 7,4 por 100 mil, redução de 52% em relação a 2016 (SSP-DF, 2º Anuário de Segurança Pública do DF). Essa posição convive com o estelionato em patamar elevado, 51.457 ocorrências em 2025, a segunda maior taxa do país, e com distribuição territorial desigual da violência, mais intensa em RAs como SCIA-Estrutural, onde a taxa de homicídios foi estimada em 50,8 por 100 mil no Mapa das Desigualdades do Inesc. O fator articula-se a E2-F28, E3-F02, E6-F06 e E5-F30, e o plano popular deve demandar a publicação regular de indicadores criminais por RA.",
      "fontes_citadas": [
        "Anuário Brasileiro de Segurança Pública 2026",
        "SSP-DF, 2º Anuário de Segurança Pública do DF"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2025",
        "2026",
        "2016"
      ],
      "fatores_relacionados": [
        "E2-F28",
        "E3-F02",
        "E6-F06",
        "E5-F30"
      ],
      "origem": {
        "codigo_documento": "E2-F27",
        "nome_no_documento": "Segurança",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F28": {
      "texto": "A violência no Distrito Federal tem padrão distinto da média nacional, com baixa letalidade e alta incidência de crimes patrimoniais e de violência contra mulheres. Em 2025, os feminicídios passaram de 22 para 29, alta de 31,1%, e o DF registrou aumento em todos os nove crimes contra mulheres analisados pelo Anuário Brasileiro de Segurança Pública 2026. Segundo a SSP-DF, Planaltina concentrou três feminicídios e Itapoã, Núcleo Bandeirante, Recanto das Emas, Samambaia, São Sebastião, Estrutural, Sol Nascente e Taguatinga dois casos cada, somando 71% do total (SSP-DF, conforme Sou Brasília). A violência letal concentra-se nas RAs de renda baixa e população negra, como indica a taxa estimada de 50,8 homicídios por 100 mil no SCIA-Estrutural (Inesc). O fator articula-se a E3-F02, E2-F27, E3-F16 e E2-F18, e o plano popular deve integrar notificação do SINAN, rede de proteção e prevenção nas RAs com mais casos.",
      "fontes_citadas": [
        "SSP-DF, conforme Sou Brasília",
        "Inesc"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2025",
        "2026"
      ],
      "fatores_relacionados": [
        "E3-F02",
        "E2-F27",
        "E3-F16",
        "E2-F18"
      ],
      "origem": {
        "codigo_documento": "E2-F28",
        "nome_no_documento": "Violência",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F29": {
      "texto": "A comunicação e a gestão pós-desastre no Distrito Federal envolvem a Defesa Civil, vinculada à Secretaria de Segurança Pública, o Corpo de Bombeiros, a Sedes e as administrações regionais. Os eventos recorrentes, como alagamentos, erosões, desabamentos e incêndios, produzem danos localizados cuja resposta depende de cadastro de famílias atingidas, auxílio emergencial e reconstrução. A experiência da crise hídrica de 2017 mostrou que a comunicação sobre o racionamento e sua distribuição territorial foi objeto de questionamento público, pela exclusão inicial das RAs de renda alta (Congresso em Foco). O fator articula-se a E2-F32, E6-F11, E6-F03 e E5-F01, e o plano popular deve prever protocolos de comunicação em linguagem acessível, cadastro comunitário de famílias atingidas e acompanhamento da reconstrução com participação dos moradores.",
      "fontes_citadas": [
        "Congresso em Foco"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2017"
      ],
      "fatores_relacionados": [
        "E2-F32",
        "E6-F11",
        "E6-F03",
        "E5-F01"
      ],
      "origem": {
        "codigo_documento": "E2-F29",
        "nome_no_documento": "Comunicação e gestão pós-desastre",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F30": {
      "texto": "A seca e a estiagem são ameaças estruturais do Distrito Federal, situado em área de cabeceiras do Cerrado com estação seca de cinco a seis meses. Em 2024, Brasília alcançou 164 dias consecutivos sem chuva, superando o recorde de 1963, com umidade relativa de até 12% (INMET, outubro de 2024). A crise hídrica de 2016 a 2018 levou o Descoberto a menos de 20% de sua capacidade e impôs racionamento a cerca de 1,8 milhão de pessoas (Caesb, conforme Congresso em Foco). A estiagem combina riscos hídricos, sanitários e de incêndio, afetando sobretudo a agricultura familiar, os trabalhadores ao ar livre, as crianças e os idosos. A tendência de alongamento da estação seca, associada às mudanças climáticas, deve ser incorporada ao planejamento. O fator articula-se a E2-F23, E2-F25, E2-F38 e E4-F12, e o plano popular deve incluir protocolos de calor e baixa umidade nas escolas e UBS e apoio à captação de água na área rural.",
      "fontes_citadas": [
        "INMET, outubro de 2024",
        "Caesb, conforme Congresso em Foco"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2024",
        "1963",
        "2016",
        "2018"
      ],
      "fatores_relacionados": [
        "E2-F23",
        "E2-F25",
        "E2-F38",
        "E4-F12"
      ],
      "origem": {
        "codigo_documento": "E2-F30",
        "nome_no_documento": "Seca/Estiagem",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F31": {
      "texto": "O acesso a serviços essenciais de energia, abastecimento de água e coleta de lixo no Distrito Federal é amplo nas RAs consolidadas e precário nas áreas de ocupação irregular e de urbanização recente, onde predominam ligações informais, interrupções frequentes e coleta irregular. A PDAD 2021 registrou entulho próximo a 16,8% dos domicílios, ruas esburacadas em 27,6% e ruas alagadas em 18,2% (IPEDF), indicadores que expressam déficits de manutenção urbana. Em Sol Nascente/Pôr do Sol, com 32.081 domicílios em favela no Censo 2022 (IBGE), a implantação de infraestrutura segue em curso. A distribuição por RA de domicílios sem coleta e sem rede elétrica regular, disponível no Censo 2022, não foi sistematizada nesta versão. O fator articula-se a E2-F20, E5-F13, E5-F24 e E1-F27, e o plano popular deve mapear com a comunidade os pontos de interrupção dos serviços e de descarte irregular.",
      "fontes_citadas": [
        "IPEDF",
        "IBGE"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2021",
        "2022"
      ],
      "fatores_relacionados": [
        "E2-F20",
        "E5-F13",
        "E5-F24",
        "E1-F27"
      ],
      "origem": {
        "codigo_documento": "E2-F31",
        "nome_no_documento": "Acesso a serviços essenciais de energia, abastecimento de água, coleta de lixo etc.",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F32": {
      "texto": "A gestão de riscos e emergências no Distrito Federal envolve a Defesa Civil do DF, o Corpo de Bombeiros Militar, brigadas de unidades de conservação do ICMBio e do Ibram e brigadistas voluntários. Em dezembro de 2024, a Defesa Civil monitorava 22 áreas de risco (Defesa Civil do DF, conforme Jornal de Brasília). O combate ao incêndio no Parque Nacional de Brasília em setembro de 2024, que queimou 1.473 hectares (Sema-DF), mobilizou bombeiros, brigadistas e apoio federal, e a Polícia Federal abriu inquérito sobre a origem do fogo. A existência de brigadas comunitárias nas RAs de risco e sua articulação formal com a Defesa Civil não foram documentadas nesta versão. O fator articula-se a E2-F33, E2-F38, E6-F01 e E5-F01, e o plano popular deve formar brigadas comunitárias nas RAs com áreas de risco e nas bordas das unidades de conservação, com treinamento, equipamentos e canal direto com a Defesa Civil.",
      "fontes_citadas": [
        "Defesa Civil do DF, conforme Jornal de Brasília",
        "Sema-DF"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2024"
      ],
      "fatores_relacionados": [
        "E2-F33",
        "E2-F38",
        "E6-F01",
        "E5-F01"
      ],
      "origem": {
        "codigo_documento": "E2-F32",
        "nome_no_documento": "Gestão de riscos e emergências (defesa civil, bombeiros, brigadas e outros coletivos)",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F33": {
      "texto": "Os pontos de riscos e desastres no Distrito Federal concentram-se em erosões e voçorocas, encostas ocupadas, áreas sujeitas a inundação e bordas urbanas expostas a incêndios. A Defesa Civil monitorava 22 áreas de risco em dezembro de 2024, com destaque para Sol Nascente/Pôr do Sol, Fercal, Vicente Pires, Sobradinho II e Arniqueira (Defesa Civil do DF). Essas áreas resultam de ocupação irregular sobre solos frágeis e cabeceiras de drenagem, sem infraestrutura prévia. Sol Nascente/Pôr do Sol, com 70.908 moradores em favela no Censo 2022 (IBGE), combina alta densidade e exposição a erosões. O fator articula-se a E2-F34, E2-F36, E5-F22 e E3-F17, e o plano popular deve produzir inventário comunitário de pontos de risco por RA, confrontado com as setorizações oficiais.",
      "fontes_citadas": [
        "Defesa Civil do DF",
        "IBGE"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2024",
        "2022"
      ],
      "fatores_relacionados": [
        "E2-F34",
        "E2-F36",
        "E5-F22",
        "E3-F17"
      ],
      "origem": {
        "codigo_documento": "E2-F33",
        "nome_no_documento": "Pontos de riscos e desastres no território",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F34": {
      "texto": "As enchentes e alagamentos no Distrito Federal concentram-se no período chuvoso, de outubro a abril, e decorrem de chuvas intensas em áreas impermeabilizadas e com drenagem insuficiente. Vicente Pires, Arniqueira, Sol Nascente/Pôr do Sol e trechos de Taguatinga e Ceilândia registram alagamentos recorrentes, e 18,2% dos domicílios relataram ruas alagadas nas proximidades em 2021 (IPEDF, PDAD 2021). A urbanização de antigas chácaras sem planejamento de drenagem e a ocupação de fundos de vale amplificam o escoamento superficial. Os alagamentos têm efeitos sanitários diretos, ao favorecer criadouros do Aedes aegypti e a contaminação por esgoto. A série de ocorrências por RA no S2iD e nos registros da Defesa Civil não foi sistematizada nesta versão. O fator articula-se a E2-F01, E2-F33, E5-F24 e E2-F07, e o plano popular deve acompanhar as obras de drenagem e mapear com moradores os pontos críticos.",
      "fontes_citadas": [
        "IPEDF, PDAD 2021"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2021"
      ],
      "fatores_relacionados": [
        "E2-F01",
        "E2-F33",
        "E5-F24",
        "E2-F07"
      ],
      "origem": {
        "codigo_documento": "E2-F34",
        "nome_no_documento": "Enchentes e alagamentos",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F35": {
      "texto": "As infestações e pragas no Distrito Federal têm no Aedes aegypti o vetor de maior impacto, responsável pela epidemia de dengue de 2024, com 278.301 casos prováveis e 440 óbitos (SES-DF). A proliferação do mosquito associa-se ao acúmulo de recipientes, entulho e resíduos, relatado em 16,8% dos domicílios em 2021 (IPEDF, PDAD 2021), a falhas de abastecimento que levam ao armazenamento de água e às chuvas concentradas. Escorpiões e outros animais peçonhentos são agravos relevantes nas RAs com acúmulo de entulho e terrenos baldios. O Aedes transmite também chikungunya e zika, e a vigilância deve considerar a introdução de novos arbovírus. O fator articula-se a E2-F07, E6-F05, E1-F27 e E2-F31, e o plano popular deve organizar levantamento comunitário de criadouros articulado aos agentes de vigilância ambiental.",
      "fontes_citadas": [
        "SES-DF",
        "IPEDF, PDAD 2021"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2024",
        "2021"
      ],
      "fatores_relacionados": [
        "E2-F07",
        "E6-F05",
        "E1-F27",
        "E2-F31"
      ],
      "origem": {
        "codigo_documento": "E2-F35",
        "nome_no_documento": "Infestações e pragas (mosquito, carrapato, escorpião, animais peçonhentos etc.)",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F36": {
      "texto": "Os pontos de deslizamento de terra no Distrito Federal são menos frequentes que em capitais de relevo montanhoso, mas existem em encostas e bordas de chapada ocupadas, como na Fercal e em Sobradinho II, e associam-se principalmente a processos erosivos, voçorocas e solapamento de margens de córregos. A Defesa Civil incluiu os deslizamentos entre as ameaças monitoradas nas 22 áreas de risco em dezembro de 2024 (Defesa Civil do DF). Por essa característica, o fator é tratado pela via de interface com os processos erosivos, conforme as notas metodológicas. Sol Nascente/Pôr do Sol, com ocupação densa sobre solos sujeitos a erosão, ilustra a relação entre urbanização sem drenagem e instabilidade do terreno. O fator articula-se a E2-F33, E4-F16, E5-F22 e E3-F17, e o plano popular deve incluir o monitoramento comunitário de trincas, erosões e surgências de água em encostas e cabeceiras ocupadas.",
      "fontes_citadas": [
        "Defesa Civil do DF"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2024"
      ],
      "fatores_relacionados": [
        "E2-F33",
        "E4-F16",
        "E5-F22",
        "E3-F17"
      ],
      "origem": {
        "codigo_documento": "E2-F36",
        "nome_no_documento": "Pontos de deslizamento de terra",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F37": {
      "texto": "As sirenes e alertas de emergências no Distrito Federal baseiam-se principalmente no envio de mensagens por SMS e cell broadcast pela Defesa Civil, nos alertas meteorológicos do INMET e em comunicados à imprensa. O INMET emitiu alertas vermelhos por baixa umidade durante a seca de 2024 (INMET). Não foram identificados sistemas de sirenes em áreas de risco do DF nos registros consultados, e a cobertura do cadastro de alertas por SMS por RA não foi sistematizada nesta versão. Para riscos de evolução rápida, como alagamentos e incêndios em bordas urbanas, a efetividade do alerta depende de redes locais que transformem a informação em ação. Alertas de qualidade do ar ainda não integram rotina pública acessível. O fator articula-se a E2-F29, E6-F11, E6-F03 e E2-F32, e o plano popular deve estruturar cadeia comunitária de alertas, com pontos focais por área de risco e orientações específicas para calor, fumaça e chuvas intensas.",
      "fontes_citadas": [
        "INMET"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2024"
      ],
      "fatores_relacionados": [
        "E2-F29",
        "E6-F11",
        "E6-F03",
        "E2-F32"
      ],
      "origem": {
        "codigo_documento": "E2-F37",
        "nome_no_documento": "Sirenes e alertas de emergências",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F38": {
      "texto": "As queimadas e incêndios florestais no Distrito Federal são recorrentes na estação seca e atingem unidades de conservação, áreas rurais e terrenos urbanos. Em setembro de 2024, um incêndio no Parque Nacional de Brasília queimou 1.473 hectares (Sema-DF, conforme Mais Goiás), cerca de 3,4% da área aproximada do parque, e a Polícia Federal abriu inquérito sobre sua causa. O parque já havia perdido 14,1 mil hectares em 2007 e 15,6 mil hectares em 2010. No bioma Cerrado, os focos de calor de 1º de janeiro a 14 de setembro de 2024 somaram 59.144, acima dos 50.713 de todo o ano de 2023 (INPE). A área queimada por RA e os focos de calor no território distrital, disponíveis no Programa Queimadas e no MapBiomas Fogo, não foram sistematizados nesta versão. O fator articula-se a E2-F25, E2-F30, E4-F16 e E2-F32, e o plano popular deve apoiar aceiros, brigadas e campanhas contra queimas de lixo.",
      "fontes_citadas": [
        "Sema-DF, conforme Mais Goiás",
        "INPE"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2024",
        "2007",
        "2010",
        "2023"
      ],
      "fatores_relacionados": [
        "E2-F25",
        "E2-F30",
        "E4-F16",
        "E2-F32"
      ],
      "origem": {
        "codigo_documento": "E2-F38",
        "nome_no_documento": "Queimada/Incêndio",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F39": {
      "texto": "Os pontos de encontro em emergências no Distrito Federal não estão definidos de forma sistemática para as áreas de risco monitoradas pela Defesa Civil. Escolas, igrejas, centros comunitários, UBS e equipamentos esportivos são, na prática, os locais de abrigo e de reunião das famílias atingidas por alagamentos, desabamentos e incêndios. Nas 22 áreas de risco monitoradas em dezembro de 2024 (Defesa Civil do DF), a identificação prévia desses pontos, com acessibilidade, água e energia, é condição para resposta rápida. Nas ondas de calor e baixa umidade, espaços climatizados públicos podem funcionar como refúgios para idosos e pessoas em situação de rua. A inexistência de cadastro público desses pontos por RA configura lacuna. O fator articula-se a E5-F01, E2-F26, E6-F16 e E5-F25, e o plano popular deve definir e sinalizar pontos de encontro em cada área de risco, com responsáveis comunitários identificados e articulação com a Defesa Civil.",
      "fontes_citadas": [
        "Defesa Civil do DF"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2024"
      ],
      "fatores_relacionados": [
        "E5-F01",
        "E2-F26",
        "E6-F16",
        "E5-F25"
      ],
      "origem": {
        "codigo_documento": "E2-F39",
        "nome_no_documento": "Ponto de encontro em emergências",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E3-F01": {
      "texto": "A pobreza no Distrito Federal é territorialmente segregada e convive com a maior renda média do país. Em 2018, a renda domiciliar per capita variava de R$ 8.322,81 no Lago Sul a R$ 573,34 no SCIA-Estrutural, razão de 14,5 vezes, e nove RAs tinham renda per capita inferior a R$ 1.000, Samambaia, Santa Maria, Itapoã, Recanto das Emas, Varjão, Paranoá, Fercal, Riacho Fundo II e SCIA-Estrutural (Codeplan, PDAD 2018). Em 2021, o grupo de renda baixa reunia 852.217 pessoas, cerca de 28% da população urbana, com renda domiciliar média de R$ 2.644,96 (IPEDF, PDAD 2021). O Censo 2022 identificou 62 favelas e comunidades urbanas com 198.779 moradores, 7,1% da população (IBGE). O fator articula-se a E1-F08, E2-F02, E3-F12 e E3-F18, e o plano popular deve adotar a RA como unidade de monitoramento da pobreza, com indicadores do CadÚnico e da PDAD.",
      "fontes_citadas": [
        "Codeplan, PDAD 2018",
        "IPEDF, PDAD 2021",
        "IBGE"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2018",
        "2021",
        "2022"
      ],
      "fatores_relacionados": [
        "E1-F08",
        "E2-F02",
        "E3-F12",
        "E3-F18"
      ],
      "origem": {
        "codigo_documento": "E3-F01",
        "nome_no_documento": "Pobreza",
        "eixo_documento": 3
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E3-F02": {
      "texto": "A discriminação e a violência contra mulheres e meninas no Distrito Federal cresceram em 2025: os feminicídios passaram de 22 para 29, alta de 31,1%, e o DF registrou aumento nas taxas de todos os nove crimes contra mulheres analisados pelo Anuário Brasileiro de Segurança Pública 2026. A SSP-DF contabilizou 28 feminicídios no mesmo ano, com Planaltina à frente, três casos, e oito RAs com dois casos cada, Itapoã, Núcleo Bandeirante, Recanto das Emas, Samambaia, São Sebastião, Estrutural, Sol Nascente e Taguatinga, que somaram 71% das ocorrências (SSP-DF, 2º Anuário de Segurança Pública do DF). A divergência entre as fontes decorre de critérios de classificação e deve ser explicitada no monitoramento. O fator articula-se a E2-F28, E3-F06, E3-F04 e E2-F12, e o plano popular deve fortalecer a rede de proteção nas RAs com maior número de casos, com notificação do SINAN pelas UBS.",
      "fontes_citadas": [
        "SSP-DF, 2º Anuário de Segurança Pública do DF"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2025",
        "2026"
      ],
      "fatores_relacionados": [
        "E2-F28",
        "E3-F06",
        "E3-F04",
        "E2-F12"
      ],
      "origem": {
        "codigo_documento": "E3-F02",
        "nome_no_documento": "Discriminação e violência contra mulheres e meninas",
        "eixo_documento": 3
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E3-F03": {
      "texto": "A maior proporção de população jovem nas RAs de renda baixa, com idade média de 30,6 anos em 2021 (IPEDF, PDAD 2021), e a associação nacional entre pobreza, evasão escolar e uniões precoces indicam onde a investigação deve se concentrar. As uniões precoces relacionam-se à interrupção da escolarização das meninas e à exposição à violência doméstica. O fator articula-se a E2-F12, E3-F02, E5-F04 e E3-F09, e o plano popular pode incluir o tema nas ações de saúde do adolescente e na articulação entre escola, conselho tutelar e APS.",
      "fontes_citadas": [
        "IPEDF, PDAD 2021"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2021"
      ],
      "fatores_relacionados": [
        "E2-F12",
        "E3-F02",
        "E5-F04",
        "E3-F09"
      ],
      "origem": {
        "codigo_documento": "E3-F03",
        "nome_no_documento": "Casamentos prematuros, forçados e de crianças",
        "eixo_documento": 3
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E3-F04": {
      "texto": "A igualdade de oportunidades para promover o empoderamento das mulheres no Distrito Federal enfrenta barreiras de renda, cuidado e deslocamento que se intensificam para mulheres negras e residentes nas RAs de renda baixa. A desigualdade racial do rendimento, em que pessoas negras recebiam 57,4% do rendimento das não negras em 2023 (IPEDF e DIEESE, PED-DF), soma-se à concentração das mulheres negras no trabalho doméstico, ocupação em que negros detinham quase 80% dos postos. A distância entre moradia e emprego e a oferta insuficiente de creches limitam a inserção profissional das mães periféricas. O fator articula-se a E1-F07, E3-F02, E3-F18 e E1-F18, e o plano popular deve priorizar qualificação, crédito e creches para mulheres chefes de família nas RAs de renda baixa.",
      "fontes_citadas": [
        "IPEDF e DIEESE, PED-DF"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2023"
      ],
      "fatores_relacionados": [
        "E1-F07",
        "E3-F02",
        "E3-F18",
        "E1-F18"
      ],
      "origem": {
        "codigo_documento": "E3-F04",
        "nome_no_documento": "Igualdade de oportunidades para promover o empoderamento das mulheres",
        "eixo_documento": 3
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E3-F05": {
      "texto": "A propriedade e o controle sobre a terra para as mulheres no Distrito Federal envolvem dois contextos distintos. Na área urbana, a regularização fundiária de ocupações como Sol Nascente/Pôr do Sol, SCIA-Estrutural, Itapoã e condomínios irregulares define quem detém a titularidade da moradia, e a titulação preferencial em nome das mulheres, prevista na legislação federal de regularização, é instrumento de proteção em situações de violência e separação. Na área rural, a titulação nos assentamentos e núcleos rurais condiciona o acesso das agricultoras ao crédito e às políticas de produção. O fator articula-se a E3-F19, E5-F22, E3-F04 e E1-F03, e o plano popular deve acompanhar os processos de regularização fundiária e verificar a aplicação da titulação preferencial às mulheres.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E3-F19",
        "E5-F22",
        "E3-F04",
        "E1-F03"
      ],
      "origem": {
        "codigo_documento": "E3-F05",
        "nome_no_documento": "Propriedade e controle sobre a terra para as mulheres",
        "eixo_documento": 3
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E3-F06": {
      "texto": "A ação do Estado na coordenação de políticas para igualdade de gênero no Distrito Federal é exercida pela Secretaria da Mulher, pela rede de Delegacias Especiais de Atendimento à Mulher, pela Casa da Mulher Brasileira e pelos centros especializados, em articulação com o Tribunal de Justiça, o Ministério Público e a Defensoria Pública. A alta de 31,1% nos feminicídios e o aumento das taxas de todos os nove crimes contra mulheres analisados em 2025 (Anuário Brasileiro de Segurança Pública 2026) indicam que a estrutura existente não tem conseguido reverter a tendência. A concentração de 71% dos feminicídios em nove RAs periféricas (SSP-DF) aponta para a necessidade de regionalizar a rede de proteção. O orçamento executado em políticas para mulheres por RA não foi sistematizado nesta versão. O fator articula-se a E3-F02, E6-F07, E6-F09 e E3-F12, e o plano popular deve acompanhar a distribuição territorial dos equipamentos da rede de proteção.",
      "fontes_citadas": [
        "Anuário Brasileiro de Segurança Pública 2026",
        "SSP-DF"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2025",
        "2026"
      ],
      "fatores_relacionados": [
        "E3-F02",
        "E6-F07",
        "E6-F09",
        "E3-F12"
      ],
      "origem": {
        "codigo_documento": "E3-F06",
        "nome_no_documento": "Ação do Estado na coordenação e coerência de políticas para igualdade de gênero",
        "eixo_documento": 3
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E3-F07": {
      "texto": "O tráfico de pessoas no Distrito Federal associa-se à condição de polo migratório e de conexão aérea e rodoviária, com riscos de exploração sexual, trabalho escravo doméstico e aliciamento de migrantes e adolescentes. A população em situação de rua, estimada em mais de 3,5 mil pessoas em 2025 (IPEDF), e os migrantes em situação irregular estão entre os grupos de maior vulnerabilidade ao aliciamento. O fator articula-se a E1-F15, E3-F13, E3-F14 e E6-F06, e o plano popular pode incluir orientação sobre sinais de tráfico de pessoas nas ações das equipes de consultório na rua, de assistência social e das organizações que acolhem migrantes.",
      "fontes_citadas": [
        "IPEDF"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2025"
      ],
      "fatores_relacionados": [
        "E1-F15",
        "E3-F13",
        "E3-F14",
        "E6-F06"
      ],
      "origem": {
        "codigo_documento": "E3-F07",
        "nome_no_documento": "Tráfico de pessoas",
        "eixo_documento": 3
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E3-F08": {
      "texto": "Os direitos fundamentais no Distrito Federal são desigualmente efetivados entre as Regiões Administrativas, e a desigualdade de acesso a moradia regular, saneamento, saúde, educação e segurança acompanha a hierarquia de renda das RAs. Em 2021, as onze RAs do grupo de renda baixa, entre elas SCIA-Estrutural, Sol Nascente/Pôr do Sol, Fercal, Itapoã e Varjão, reuniam 852.217 pessoas (IPEDF, PDAD 2021), e nelas se concentram as favelas identificadas pelo Censo 2022, a maior parte dos feminicídios de 2025 e as maiores incidências de dengue de 2024. A população em situação de rua, com mais de 3,5 mil pessoas em 2025 (IPEDF), é o grupo de maior violação de direitos. A Defensoria Pública e o Ministério Público do DF e Territórios atuam como instâncias de garantia. O fator articula-se a E3-F12, E3-F14, E3-F01 e E6-F07, e o plano popular deve adotar os direitos fundamentais como referência para os indicadores de desigualdade entre RAs.",
      "fontes_citadas": [
        "IPEDF, PDAD 2021",
        "IPEDF"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2021",
        "2022",
        "2025",
        "2024"
      ],
      "fatores_relacionados": [
        "E3-F12",
        "E3-F14",
        "E3-F01",
        "E6-F07"
      ],
      "origem": {
        "codigo_documento": "E3-F08",
        "nome_no_documento": "Direitos fundamentais",
        "eixo_documento": 3
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E3-F09": {
      "texto": "O monitoramento dos vulneráveis no Distrito Federal, incluindo idosos, pessoas com deficiência e crianças, depende do CadÚnico, dos CRAS e CREAS, das equipes de APS e dos conselhos tutelares. A vulnerabilidade dos idosos evidenciou-se na epidemia de dengue de 2024, quando pessoas com 80 anos ou mais responderam por 26,6% dos 440 óbitos (SES-DF), e na exposição a golpes, em contexto de 51.457 estelionatos registrados em 2025 (Anuário Brasileiro de Segurança Pública 2026). A cobertura potencial da APS de 76,69% em 2025 (SES-DF) limita o acompanhamento domiciliar. O fator articula-se a E2-F19, E1-F01, E3-F11 e E3-F12, e o plano popular deve produzir cadastro comunitário de pessoas vulneráveis, para prioridade em emergências sanitárias e climáticas.",
      "fontes_citadas": [
        "SES-DF",
        "Anuário Brasileiro de Segurança Pública 2026"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2024",
        "2025",
        "2026"
      ],
      "fatores_relacionados": [
        "E2-F19",
        "E1-F01",
        "E3-F11",
        "E3-F12"
      ],
      "origem": {
        "codigo_documento": "E3-F09",
        "nome_no_documento": "Monitoramento dos vulneráveis (idosos, PCDs e crianças)",
        "eixo_documento": 3
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E3-F10": {
      "texto": "O empoderamento e a inclusão social, econômica e política no Distrito Federal são condicionados pela ausência de eleições para as administrações regionais, cujos administradores são nomeados pelo governador, o que limita a representação política local das RAs. A participação concentra-se em conselhos distritais, nos conselhos regionais de saúde e nos movimentos sociais, como os de moradia, de catadores, de mulheres, de juventude negra e de cultura periférica. A desigualdade racial de rendimentos, com pessoas negras recebendo 57,4% do rendimento das não negras em 2023 (IPEDF e DIEESE, PED-DF), expressa a dimensão econômica da exclusão. A presença de lideranças periféricas em instâncias de decisão não foi sistematizada nesta versão. O fator articula-se a E6-F07, E6-F01, E3-F18 e E6-F02, e o plano popular deve fortalecer os conselhos locais e a formação de pesquisadores populares como mecanismos de incidência das RAs sobre o planejamento distrital.",
      "fontes_citadas": [
        "IPEDF e DIEESE, PED-DF"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2023"
      ],
      "fatores_relacionados": [
        "E6-F07",
        "E6-F01",
        "E3-F18",
        "E6-F02"
      ],
      "origem": {
        "codigo_documento": "E3-F10",
        "nome_no_documento": "Empoderamento e inclusão social, econômica e política",
        "eixo_documento": 3
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E3-F11": {
      "texto": "A acessibilidade e a inclusão no Distrito Federal são afetadas pelo desenho urbano disperso, com grandes distâncias, vias expressas e calçadas descontínuas, que penaliza pessoas com deficiência, idosos e pedestres. Os pedestres foram as principais vítimas fatais do trânsito em 2024, com 60 mortes, e os homens com mais de 60 anos o grupo mais atingido (Detran-DF), indicador da hostilidade do sistema viário à circulação a pé. Nas RAs de ocupação irregular, a ausência de pavimentação e de calçadas agrava a exclusão, e 27,6% dos domicílios relataram ruas esburacadas em 2021 (IPEDF, PDAD 2021). A população com deficiência por RA e a acessibilidade da frota de ônibus e das estações de metrô não foram sistematizadas nesta versão. O fator articula-se a E5-F23, E5-F24, E3-F09 e E2-F11, e o plano popular deve realizar auditorias comunitárias de acessibilidade nos trajetos entre moradias, paradas de ônibus, UBS e escolas.",
      "fontes_citadas": [
        "Detran-DF",
        "IPEDF, PDAD 2021"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2024",
        "2021"
      ],
      "fatores_relacionados": [
        "E5-F23",
        "E5-F24",
        "E3-F09",
        "E2-F11"
      ],
      "origem": {
        "codigo_documento": "E3-F11",
        "nome_no_documento": "Acessibilidade e inclusão",
        "eixo_documento": 3
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E3-F12": {
      "texto": "Os serviços públicos e as políticas de proteção social no Distrito Federal são operados pela Sedes por meio dos CRAS, CREAS e Centros POP, e incluem o Bolsa Família, programas distritais de transferência de renda e restaurantes comunitários. A insegurança alimentar em 27,0% dos domicílios em 2024 (IBGE, PNAD Contínua) e o crescimento de 19,4% da população em situação de rua entre 2022 e 2025 (IPEDF) indicam que a rede não acompanha a demanda. O Tribunal de Contas do DF cobrou da Sedes, em 2026, o detalhamento do atendimento a essa população, e a transferência do Centro POP da Asa Sul gerou controvérsia (Correio da Manhã). O número de famílias no CadÚnico e no Bolsa Família por RA, disponível no VIS Data, não foi sistematizado nesta versão. O fator articula-se a E3-F01, E3-F14, E2-F02 e E3-F09, e o plano popular deve confrontar a localização dos CRAS com a distribuição da pobreza por RA.",
      "fontes_citadas": [
        "IBGE, PNAD Contínua",
        "IPEDF",
        "Correio da Manhã"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2024",
        "2022",
        "2025",
        "2026"
      ],
      "fatores_relacionados": [
        "E3-F01",
        "E3-F14",
        "E2-F02",
        "E3-F09"
      ],
      "origem": {
        "codigo_documento": "E3-F12",
        "nome_no_documento": "Serviços públicos e políticas de proteção social",
        "eixo_documento": 3
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E3-F13": {
      "texto": "A migração é constitutiva do Distrito Federal, construído por trabalhadores vindos de todo o país. Em 2018, 55,3% da população urbana era natural do DF, e entre os demais predominavam os nascidos em Minas Gerais, 16,0%, Goiás, 12,2%, Bahia, 11,1%, Piauí, 10,7%, e Maranhão, 10,6% (Codeplan, PDAD 2018). As migrações recentes para o DF incluem fluxos internos de baixa renda que se instalam nas RAs periféricas e no Entorno, e migrantes internacionais, como venezuelanos e haitianos, que demandam documentação, trabalho e acolhimento. A dinâmica metropolitana com a RIDE expressa-se na saúde, com 19,3% das internações na rede da SES-DF ocupadas por moradores da RIDE fora do DF em 2025 (SES-DF, 2º RDQA 2025). O fator articula-se a E3-F07, E3-F14, E2-F15 e E1-F13, e o plano popular deve considerar a mobilidade metropolitana no planejamento dos serviços das RAs limítrofes.",
      "fontes_citadas": [
        "Codeplan, PDAD 2018",
        "SES-DF, 2º RDQA 2025"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2018",
        "2025"
      ],
      "fatores_relacionados": [
        "E3-F07",
        "E3-F14",
        "E2-F15",
        "E1-F13"
      ],
      "origem": {
        "codigo_documento": "E3-F13",
        "nome_no_documento": "Migração",
        "eixo_documento": 3
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E3-F14": {
      "texto": "O acolhimento de vulneráveis e da população em situação de rua no Distrito Federal enfrenta demanda crescente: o número de pessoas em situação de rua ultrapassou 3,5 mil em abril de 2025, alta de 19,4% em relação a 2022 (IPEDF). O desemprego é apontado pelo IPEDF como principal fator para a manutenção dessa condição. A população concentra-se no Plano Piloto, onde estão os serviços e as oportunidades de renda, com ocupações como a do Setor Noroeste, às margens da Epia, onde foram identificadas 259 pessoas, e a da Asa Norte (Correio da Manhã, 2026). O Tribunal de Contas do DF cobrou da Sedes o detalhamento das famílias, crianças e idosos atendidos. A seca e o calor de 2024 e as chuvas intensas ampliam os riscos à saúde dessa população. O fator articula-se a E3-F12, E2-F10, E2-F08 e E1-F13, e o plano popular deve fortalecer o consultório na rua e as vagas de acolhimento com moradia primeiro.",
      "fontes_citadas": [
        "IPEDF",
        "Correio da Manhã, 2026"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2025",
        "2022",
        "2026",
        "2024"
      ],
      "fatores_relacionados": [
        "E3-F12",
        "E2-F10",
        "E2-F08",
        "E1-F13"
      ],
      "origem": {
        "codigo_documento": "E3-F14",
        "nome_no_documento": "Acolhimento de vulneráveis e população em situação de rua",
        "eixo_documento": 3
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E3-F16": {
      "texto": "A discriminação racial no Distrito Federal estrutura a distribuição territorial da população e o acesso a renda e trabalho. A população negra correspondia a 57,3% do DF segundo a PDAD, e apenas nove das 33 RAs então existentes tinham maioria branca, enquanto o SCIA-Estrutural tinha 75,4% de negros e a Fercal 73% (Inesc, Mapa das Desigualdades, com base na PDAD). Em 2023, o desemprego entre negros foi de 17,9%, contra 13,5% entre não negros, e o rendimento dos negros correspondeu a 57,4% do rendimento dos não negros (IPEDF e DIEESE, PED-DF). O Plano Piloto registrou 81 casos de racismo e injúria racial em dois anos (Inesc). O fator articula-se a E3-F18, E3-F17, E1-F13 e E2-F28, e o plano popular deve incluir a variável raça e cor em todos os indicadores por RA e o registro qualificado dos casos de racismo nos serviços de saúde e segurança.",
      "fontes_citadas": [
        "Inesc, Mapa das Desigualdades, com base na PDAD",
        "IPEDF e DIEESE, PED-DF",
        "Inesc",
        "PDAD"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2023"
      ],
      "fatores_relacionados": [
        "E3-F18",
        "E3-F17",
        "E1-F13",
        "E2-F28"
      ],
      "origem": {
        "codigo_documento": "E3-F16",
        "nome_no_documento": "Discriminação racial",
        "eixo_documento": 3
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E3-F17": {
      "texto": "O racismo ambiental no Distrito Federal expressa-se na sobreposição entre RAs de maioria negra e exposição a riscos ambientais. O SCIA-Estrutural, com 75,4% de população negra (Inesc com base na PDAD), cresceu ao lado do lixão que operou por quase 60 anos em área de 201 hectares (SLU), e tinha a menor renda per capita do DF em 2018, R$ 573,34 (Codeplan, PDAD 2018). A Fercal, com 73% de negros, convive com a atividade cimenteira e apenas 20% dos domicílios com saneamento básico (Inesc). Na crise hídrica de 2017, o racionamento atingiu inicialmente as RAs periféricas do sistema Descoberto e excluiu o Plano Piloto e os Lagos (Congresso em Foco). As maiores incidências de dengue de 2024 ocorreram em RAs de renda baixa, como Brazlândia, Varjão e Santa Maria (SES-DF). O fator articula-se a E3-F16, E2-F21, E2-F33 e E2-F07, e o plano popular deve nomear o racismo ambiental e exigir reparação.",
      "fontes_citadas": [
        "Inesc com base na PDAD",
        "SLU",
        "Codeplan, PDAD 2018",
        "Inesc",
        "Congresso em Foco",
        "SES-DF"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2018",
        "2017",
        "2024"
      ],
      "fatores_relacionados": [
        "E3-F16",
        "E2-F21",
        "E2-F33",
        "E2-F07"
      ],
      "origem": {
        "codigo_documento": "E3-F17",
        "nome_no_documento": "Racismo ambiental",
        "eixo_documento": 3
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E3-F18": {
      "texto": "A igualdade racial no Distrito Federal requer enfrentar desigualdades que se reproduzem no trabalho, na renda e no território. Em 2023, pessoas negras eram 62,0% da população economicamente ativa, mas tinham taxa de desemprego de 17,9%, contra 13,5% entre não negras, e rendimento médio de R$ 3.569, contra R$ 6.221, razão que piorou de 61,7% em 2022 para 57,4% em 2023 (IPEDF e DIEESE, PED-DF). O DF possui órgão distrital de promoção da igualdade racial e conselho de participação, mas os indicadores de saúde desagregados por raça e cor por região de saúde, como mortalidade materna e infantil, não foram sistematizados nesta versão. A população quilombola do DF, 97,05% urbana segundo o Censo 2022 (IBGE, conforme Correio da Manhã), tem baixa visibilidade nas políticas. O fator articula-se a E3-F16, E3-F17, E3-F19 e E1-F18, e o plano popular deve adotar metas de redução das desigualdades raciais por RA.",
      "fontes_citadas": [
        "IPEDF e DIEESE, PED-DF",
        "IBGE, conforme Correio da Manhã",
        "Censo 2022"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2023",
        "2022"
      ],
      "fatores_relacionados": [
        "E3-F16",
        "E3-F17",
        "E3-F19",
        "E1-F18"
      ],
      "origem": {
        "codigo_documento": "E3-F18",
        "nome_no_documento": "Igualdade racial",
        "eixo_documento": 3
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E3-F19": {
      "texto": "A igualdade de direitos à propriedade e ao controle da terra para povos e comunidades tradicionais no Distrito Federal tem como caso emblemático o Santuário dos Pajés, reserva indígena de 32 hectares no Setor Noroeste, reservada em 2014 após conflito com a expansão imobiliária, com presença dos povos Kariri-Xokó, Tapuia e Tuxá e ameaça fundiária registrada como grilagem (Instituto Socioambiental, Terras Indígenas no Brasil). O DF tinha 5.813 indígenas no Censo 2022, 0,21% da população, a segunda menor população indígena do país, e nenhuma terra indígena declarada ou homologada (IBGE). A população quilombola é majoritariamente urbana, e comunidades vizinhas ao DF, como o Quilombo Mesquita, situado em Cidade Ocidental, em Goiás, mantêm relação histórica com o território. O fator articula-se a E3-F17, E4-F18, E3-F05 e E3-F18, e o plano popular deve reconhecer esses territórios e apoiar a segurança jurídica do Santuário.",
      "fontes_citadas": [
        "Instituto Socioambiental, Terras Indígenas no Brasil",
        "IBGE"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2014",
        "2022"
      ],
      "fatores_relacionados": [
        "E3-F17",
        "E4-F18",
        "E3-F05",
        "E3-F18"
      ],
      "origem": {
        "codigo_documento": "E3-F19",
        "nome_no_documento": "Igualdade de direitos à propriedade e controle da terra (comunidades tradicionais e quilombolas)",
        "eixo_documento": 3
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E4-F01": {
      "texto": "O acesso a recursos financeiros para gestão e conservação da biodiversidade no Distrito Federal combina recursos de compensação ambiental de empreendimentos, o orçamento do Ibram, recursos federais do ICMBio para as unidades de conservação federais, como o Parque Nacional de Brasília e a Floresta Nacional, e programas de pagamento por serviços ambientais. A pressão sobre o Cerrado remanescente, com desmatamento de 638 hectares em 2023, ante 90 hectares em 2022 (MapBiomas, RAD 2023), indica que os recursos de fiscalização e conservação não acompanham a velocidade da conversão. O DF realizou receitas de R$ 42,81 bilhões em 2025 (IBGE, finanças públicas), mas a parcela destinada à gestão ambiental por RA e unidade de conservação não foi sistematizada nesta versão. O fator articula-se a E4-F16, E4-F22, E6-F09 e E4-F25, e o plano popular deve demandar transparência na aplicação dos recursos de compensação ambiental e sua destinação a áreas de recarga e mananciais.",
      "fontes_citadas": [
        "MapBiomas, RAD 2023",
        "IBGE, finanças públicas"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2023",
        "2022",
        "2025"
      ],
      "fatores_relacionados": [
        "E4-F16",
        "E4-F22",
        "E6-F09",
        "E4-F25"
      ],
      "origem": {
        "codigo_documento": "E4-F01",
        "nome_no_documento": "Acesso a recursos financeiros para gestão, conservação sustentável da biodiversidade (investimentos públicos e privados)",
        "eixo_documento": 4
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E4-F02": {
      "texto": "A gestão de bancos de sementes no Distrito Federal envolve iniciativas de agricultores familiares, assentamentos, organizações agroecológicas e instituições de pesquisa, com destaque para a Embrapa Recursos Genéticos e Biotecnologia, sediada em Brasília, que mantém coleções de germoplasma de relevância nacional. A conservação de sementes crioulas e de espécies nativas do Cerrado tem dupla função: segurança alimentar dos agricultores e insumo para a restauração ecológica. A rede de coletores de sementes nativas para restauração, existente no Cerrado do Planalto Central, constitui potencial de geração de renda. O fator articula-se a E4-F25, E1-F26, E4-F18 e E4-F06, e o plano popular pode propor casas de sementes nos núcleos rurais de Brazlândia, Planaltina e Paranoá, articuladas à pesquisa e à restauração das matas ciliares.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E4-F25",
        "E1-F26",
        "E4-F18",
        "E4-F06"
      ],
      "origem": {
        "codigo_documento": "E4-F02",
        "nome_no_documento": "Gestão de bancos de sementes",
        "eixo_documento": 4
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E4-F03": {
      "texto": "O uso e o plantio de plantas medicinais no Distrito Federal integram práticas populares de cuidado trazidas pelos migrantes de diversas regiões, saberes indígenas presentes no Santuário dos Pajés e iniciativas institucionais, como as farmácias vivas e a Política Distrital de Práticas Integrativas em Saúde, que inclui a fitoterapia na rede da SES-DF. Hortos medicinais em UBS e hortas comunitárias combinam cuidado, educação em saúde e convivência. O conhecimento sobre plantas do Cerrado, transmitido entre gerações, está ameaçado pela perda de vegetação nativa e pela urbanização das áreas rurais. O fator articula-se a E4-F18, E1-F04, E2-F15 e E5-F29, e o plano popular pode prever o mapeamento de raizeiras e raizeiros e de hortos medicinais por RA, com reconhecimento desses saberes na APS.",
      "fontes_citadas": [],
      "referencias_normativas": [
        "Política Distrital de Práticas Integrativas em Saúde"
      ],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E4-F18",
        "E1-F04",
        "E2-F15",
        "E5-F29"
      ],
      "origem": {
        "codigo_documento": "E4-F03",
        "nome_no_documento": "Plantas medicinais (uso e plantio)",
        "eixo_documento": 4
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E4-F04": {
      "texto": "A proteção e a restauração de ecossistemas hídricos no Distrito Federal são estratégicas por sua posição nas cabeceiras de três grandes bacias, Paraná, Tocantins-Araguaia e São Francisco, o que torna o território dependente de nascentes, veredas e áreas de recarga locais. A crise hídrica de 2016 a 2018, que levou o reservatório do Descoberto a menos de 20% de sua capacidade (Caesb, conforme Congresso em Foco), expôs os efeitos da ocupação irregular e da supressão de vegetação nas bacias de abastecimento. O Lago Paranoá passou a ser fonte de captação, o que eleva a importância do controle de esgoto e da drenagem urbana que nele desembocam. A seca recorde de 2024, com 164 dias sem chuva (INMET), reforça a necessidade de proteger as áreas de recarga. O fator articula-se a E2-F23, E4-F16, E4-F25 e E1-F26, e o plano popular deve mapear nascentes e córregos degradados por RA e propor restauração com participação comunitária.",
      "fontes_citadas": [
        "Caesb, conforme Congresso em Foco",
        "INMET"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2016",
        "2018",
        "2024"
      ],
      "fatores_relacionados": [
        "E2-F23",
        "E4-F16",
        "E4-F25",
        "E1-F26"
      ],
      "origem": {
        "codigo_documento": "E4-F04",
        "nome_no_documento": "Proteção e restauração de ecossistemas hídricos",
        "eixo_documento": 4
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E4-F05": {
      "texto": "As tecnologias sociais no Distrito Federal incluem cisternas e sistemas de captação de água de chuva, fossas ecológicas, hortas comunitárias, sistemas agroflorestais, bioconstrução e soluções de reciclagem desenvolvidas por cooperativas de catadores. Sua relevância é ampliada pela seca recorde de 2024 e pela persistência de déficits de saneamento em áreas de ocupação irregular, como a Fercal, onde apenas 20% dos domicílios teriam saneamento básico segundo o Inesc com base na PDAD. As universidades, a Embrapa e organizações da sociedade civil sediadas em Brasília acumulam experiência em tecnologias sociais aplicáveis ao Cerrado. A difusão dessas soluções nas RAs de renda baixa é, contudo, limitada. O fator articula-se a E5-F10, E2-F20, E4-F24 e E1-F27, e o plano popular deve apoiar a replicação de tecnologias de captação e reuso de água e de saneamento descentralizado.",
      "fontes_citadas": [
        "Inesc com base na PDAD"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2024"
      ],
      "fatores_relacionados": [
        "E5-F10",
        "E2-F20",
        "E4-F24",
        "E1-F27"
      ],
      "origem": {
        "codigo_documento": "E4-F05",
        "nome_no_documento": "Tecnologias sociais",
        "eixo_documento": 4
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E4-F06": {
      "texto": "A pesquisa científica e a inovação no Distrito Federal têm base institucional de relevância nacional, com a Universidade de Brasília, o Instituto Federal de Brasília, a Fiocruz Brasília, unidades da Embrapa, o IPEDF e órgãos federais de produção de estatísticas e pesquisa. O IPEDF produz a PDAD, única pesquisa domiciliar com representatividade por Região Administrativa, fonte essencial deste diagnóstico. A aplicação desse conhecimento aos problemas das RAs periféricas, como a epidemia de dengue de 2024, as áreas de risco e a insegurança alimentar, depende de mecanismos de cooperação entre instituições de pesquisa, gestão e comunidades. A PICAPS, vinculada ao CoLaboratório CTIS da Fiocruz Brasília, é exemplo de pesquisa aplicada com participação popular. O fator articula-se a E4-F14, E6-F04, E4-F09 e E5-F06, e o plano popular deve orientar agendas de pesquisa para os nós críticos identificados e garantir a devolutiva dos resultados às comunidades.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [
        "2024"
      ],
      "fatores_relacionados": [
        "E4-F14",
        "E6-F04",
        "E4-F09",
        "E5-F06"
      ],
      "origem": {
        "codigo_documento": "E4-F06",
        "nome_no_documento": "Pesquisa científica e inovação",
        "eixo_documento": 4
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E4-F07": {
      "texto": "As construções sustentáveis e resilientes no Distrito Federal são exigidas pela combinação de calor extremo, baixa umidade e chuvas concentradas. A seca de 2024, com umidade de até 12% (INMET), e o aumento das temperaturas pressionam moradias de baixa qualidade térmica, como as construções de alvenaria sem acabamento e com cobertura metálica comuns nas RAs de ocupação recente. Em Sol Nascente/Pôr do Sol, com 32.081 domicílios em favela no Censo 2022 (IBGE), a autoconstrução sem assistência técnica predomina. As normas do Código de Obras do DF e os programas habitacionais da Codhab devem incorporar critérios de conforto térmico, captação de água e drenagem no lote. A assistência técnica pública para habitação de interesse social tem cobertura limitada, não quantificada nesta versão. O fator articula-se a E5-F22, E4-F10, E2-F30 e E5-F20, e o plano popular pode propor assistência técnica gratuita para reforma de moradias com foco em conforto térmico e segurança estrutural.",
      "fontes_citadas": [
        "INMET",
        "IBGE"
      ],
      "referencias_normativas": [
        "Código de Obras do DF"
      ],
      "periodos_citados": [
        "2024",
        "2022"
      ],
      "fatores_relacionados": [
        "E5-F22",
        "E4-F10",
        "E2-F30",
        "E5-F20"
      ],
      "origem": {
        "codigo_documento": "E4-F07",
        "nome_no_documento": "Construções sustentáveis e resilientes",
        "eixo_documento": 4
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E4-F08": {
      "texto": "As tecnologias ambientalmente corretas no Distrito Federal abrangem energia solar distribuída, tratamento de esgoto em nível terciário nas estações que lançam no Lago Paranoá, reuso de água, transporte elétrico e gestão de resíduos com recuperação de materiais. A geração solar distribuída cresce no DF, favorecida pela alta irradiação, mas concentra-se em domicílios e empresas de renda alta. O fechamento do lixão da Estrutural em 2018 e a operação do Aterro Sanitário de Brasília representaram avanço tecnológico na destinação dos rejeitos (SLU). O acesso das RAs de renda baixa a essas tecnologias, como energia solar comunitária e reuso de água, é reduzido. Os dados de geração distribuída por RA, disponíveis na Aneel, não foram sistematizados nesta versão. O fator articula-se a E4-F24, E5-F14, E1-F27 e E4-F05, e o plano popular pode propor projetos de energia solar em equipamentos públicos e cooperativas de geração nas RAs periféricas.",
      "fontes_citadas": [
        "SLU"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2018"
      ],
      "fatores_relacionados": [
        "E4-F24",
        "E5-F14",
        "E1-F27",
        "E4-F05"
      ],
      "origem": {
        "codigo_documento": "E4-F08",
        "nome_no_documento": "Tecnologias ambientalmente corretas",
        "eixo_documento": 4
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E4-F09": {
      "texto": "O acesso à informação de qualidade no Distrito Federal é favorecido pela existência de bases públicas, como a PDAD, o InfoSaúde-DF, os boletins epidemiológicos da SES-DF, os anuários da SSP-DF e os painéis da Caesb e da Adasa, mas a desagregação por RA não é homogênea entre setores. Os sumários do RDQA, por exemplo, apresentam indicadores por região de saúde, e não por RA, e diversos indicadores de vigilância não estão disponíveis em formato aberto, como evidenciam as lacunas registradas neste diagnóstico. A banda larga alcançava 68,1% dos domicílios em 2018 (Codeplan, PDAD 2018), o que restringe o acesso digital nas RAs de renda baixa. A desinformação em saúde, observada na epidemia de dengue, circula por grupos de mensagens. O fator articula-se a E6-F09, E5-F21, E6-F11 e E4-F06, e o plano popular deve demandar painel público integrado com indicadores de saúde, ambiente e risco por RA.",
      "fontes_citadas": [
        "Codeplan, PDAD 2018"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2018"
      ],
      "fatores_relacionados": [
        "E6-F09",
        "E5-F21",
        "E6-F11",
        "E4-F06"
      ],
      "origem": {
        "codigo_documento": "E4-F09",
        "nome_no_documento": "Acesso à informação de qualidade",
        "eixo_documento": 4
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E4-F10": {
      "texto": "As reconstruções sustentáveis e resilientes no Distrito Federal referem-se à recuperação de moradias e infraestruturas danificadas por alagamentos, erosões, desabamentos e incêndios, e à reurbanização de áreas de ocupação irregular. A urbanização de Sol Nascente/Pôr do Sol, Vicente Pires e outras áreas irregulares, com implantação tardia de drenagem e pavimentação, é a principal forma de reconstrução em curso, e sua qualidade define a exposição futura das famílias aos riscos. As 22 áreas de risco monitoradas pela Defesa Civil em dezembro de 2024 indicam onde as intervenções devem priorizar soluções baseadas na natureza, como parques lineares e bacias de detenção. Os relatórios de execução física das obras de reurbanização por RA não foram sistematizados nesta versão. O fator articula-se a E4-F07, E5-F24, E2-F33 e E5-F20, e o plano popular deve acompanhar as obras de urbanização e exigir que incorporem drenagem sustentável, áreas verdes e participação dos moradores.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [
        "2024"
      ],
      "fatores_relacionados": [
        "E4-F07",
        "E5-F24",
        "E2-F33",
        "E5-F20"
      ],
      "origem": {
        "codigo_documento": "E4-F10",
        "nome_no_documento": "Reconstruções sustentáveis e resilientes",
        "eixo_documento": 4
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E4-F11": {
      "texto": "A educação ambiental e para adaptação climática no Distrito Federal é desenvolvida pela rede pública de ensino, pelo Ibram, pelas unidades de conservação e por organizações da sociedade civil, com programas sobre água, Cerrado, resíduos e prevenção de incêndios. A seca recorde de 2024, a epidemia de dengue do mesmo ano e a crise hídrica de 2017 constituem experiências coletivas recentes que podem ser mobilizadas pedagogicamente como temas geradores, na perspectiva freireana da PICAPS. A educação climática ainda não está integrada de modo sistemático ao currículo das escolas das RAs mais expostas, e sua abrangência não foi quantificada nesta versão. As escolas, com 354.373 matrículas no ensino fundamental em 2025 (IBGE Estados), são o principal espaço de difusão. O fator articula-se a E4-F09, E2-F30, E5-F04 e E6-F05, e o plano popular pode propor projetos escolares de monitoramento de criadouros, de nascentes e de focos de queimada com as comunidades.",
      "fontes_citadas": [
        "IBGE Estados"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2024",
        "2017",
        "2025"
      ],
      "fatores_relacionados": [
        "E4-F09",
        "E2-F30",
        "E5-F04",
        "E6-F05"
      ],
      "origem": {
        "codigo_documento": "E4-F11",
        "nome_no_documento": "Educação ambiental e para adaptação climática",
        "eixo_documento": 4
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E4-F12": {
      "texto": "O planejamento relacionado à mudança do clima no Distrito Federal dispõe de instrumentos como o Plano Diretor de Ordenamento Territorial, o Zoneamento Ecológico-Econômico, o Plano Distrital de Saneamento e a política distrital de mudanças climáticas, mas a integração entre adaptação climática, saúde e gestão de riscos por RA é incipiente. Os eventos recentes indicam as prioridades: a seca de 164 dias em 2024 (INMET), a crise hídrica de 2017, os incêndios no Parque Nacional de Brasília e as 22 áreas de risco monitoradas pela Defesa Civil. A vigilância em saúde ambiental ligada ao clima, com protocolos de calor e baixa umidade, ainda não opera como rotina territorial. A existência de plano distrital de adaptação com metas por RA não foi verificada nesta versão. O fator articula-se a E2-F30, E2-F23, E2-F32 e E4-F16, e o plano popular deve demandar plano de adaptação com metas territoriais e indicadores de saúde.",
      "fontes_citadas": [
        "INMET"
      ],
      "referencias_normativas": [
        "Plano Diretor de Ordenamento Territorial",
        "Zoneamento Ecológico-Econômico",
        "Plano Distrital de Saneamento"
      ],
      "periodos_citados": [
        "2024",
        "2017"
      ],
      "fatores_relacionados": [
        "E2-F30",
        "E2-F23",
        "E2-F32",
        "E4-F16"
      ],
      "origem": {
        "codigo_documento": "E4-F12",
        "nome_no_documento": "Planejamento relacionado à mudança do clima e à gestão eficaz",
        "eixo_documento": 4
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E4-F13": {
      "texto": "A gestão e a proteção dos oceanos, mares e recursos marinhos não têm aplicação direta no Distrito Federal, território interior sem costa, e o fator é tratado pela via de interface indireta, conforme as notas metodológicas. A interface decorre da posição do DF nas cabeceiras de três grandes bacias hidrográficas, Paraná, Tocantins-Araguaia e São Francisco, cujas águas alcançam o oceano. A qualidade dos efluentes lançados nos córregos e no Lago Paranoá, os resíduos sólidos carreados pela drenagem urbana e a proteção de nascentes contribuem, em escala de bacia, para a saúde dos ecossistemas aquáticos a jusante. O tratamento de esgoto em Brasília, com pelo menos 80% do volume tratado segundo o Instituto Trata Brasil (2026), é a principal contribuição local. O fator articula-se a E4-F04, E2-F21, E2-F23 e E1-F27, e o plano popular pode tratá-lo pela educação ambiental sobre o destino das águas e dos resíduos.",
      "fontes_citadas": [
        "Instituto Trata Brasil"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2026"
      ],
      "fatores_relacionados": [
        "E4-F04",
        "E2-F21",
        "E2-F23",
        "E1-F27"
      ],
      "origem": {
        "codigo_documento": "E4-F13",
        "nome_no_documento": "Gerenciar e proteger os oceanos, mares e recursos marinhos de forma sustentável",
        "eixo_documento": 4
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E4-F14": {
      "texto": "A pesquisa científica e a inovação para recuperação de ambientes no Distrito Federal dispõem de capacidade instalada na Universidade de Brasília, na Embrapa Cerrados, na Embrapa Recursos Genéticos e Biotecnologia e em organizações de restauração do Cerrado, com experiência em semeadura direta, recuperação de áreas degradadas e manejo do fogo. A área do antigo lixão da Estrutural, com 201 hectares contíguos ao Parque Nacional de Brasília (SLU), é caso que exige pesquisa aplicada para remediação do solo e da água subterrânea. As voçorocas e erosões em Sol Nascente/Pôr do Sol, Fercal e Sobradinho II demandam soluções de recuperação geotécnica e ecológica. A existência de programa distrital de pesquisa voltado à recuperação dessas áreas não foi verificada nesta versão. O fator articula-se a E4-F06, E4-F25, E2-F21 e E2-F33, e o plano popular pode propor parcerias entre universidades e comunidades para monitorar e recuperar áreas degradadas nas RAs.",
      "fontes_citadas": [
        "SLU"
      ],
      "referencias_normativas": [],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E4-F06",
        "E4-F25",
        "E2-F21",
        "E2-F33"
      ],
      "origem": {
        "codigo_documento": "E4-F14",
        "nome_no_documento": "Pesquisa científica e inovação para recuperação de ambientes",
        "eixo_documento": 4
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E4-F15": {
      "texto": "Os pescadores artesanais têm presença reduzida no Distrito Federal, restrita à pesca no Lago Paranoá, no reservatório do Descoberto e em outros corpos d'água, com caráter complementar de renda e subsistência. Ausência de dados sistematizados sobre pescadores registrados no Registro Geral da Atividade Pesqueira com residência no DF e sobre o consumo de pescado capturado localmente. A qualidade da água do Lago Paranoá, que recebe efluentes tratados e drenagem urbana, condiciona a segurança do pescado. A pesca em áreas de captação de abastecimento envolve conflitos de uso que devem ser regulados. O fator articula-se a E4-F04, E2-F21, E4-F20 e E1-F23, e o plano popular pode identificar, com a cartografia social, as famílias que dependem da pesca e incluí-las nas ações de vigilância da qualidade da água.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E4-F04",
        "E2-F21",
        "E4-F20",
        "E1-F23"
      ],
      "origem": {
        "codigo_documento": "E4-F15",
        "nome_no_documento": "Pescadores artesanais",
        "eixo_documento": 4
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E4-F16": {
      "texto": "O desmatamento e os solos degradados no Distrito Federal resultam da expansão urbana sobre o Cerrado, da conversão agrícola e da ocupação irregular de áreas de proteção. O desmatamento detectado passou de 90 hectares em 2022 para 638 hectares em 2023, aumento de 612,5%, associado à grilagem de terras e à especulação imobiliária, segundo pesquisadores do IPAM (MapBiomas, RAD 2023). Mais da metade da cobertura nativa do DF já foi alterada pela urbanização, pela agricultura e pela infraestrutura, segundo leitura dos dados do MapBiomas. Os solos expostos favorecem erosões e voçorocas, presentes nas áreas de risco monitoradas pela Defesa Civil, e reduzem a infiltração nas áreas de recarga. O fator articula-se a E4-F04, E4-F25, E2-F33 e E6-F06, e o plano popular deve apoiar a fiscalização dos parcelamentos irregulares e a denúncia comunitária de desmatamento, com proteção aos denunciantes.",
      "fontes_citadas": [
        "MapBiomas, RAD 2023",
        "MapBiomas"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2022",
        "2023"
      ],
      "fatores_relacionados": [
        "E4-F04",
        "E4-F25",
        "E2-F33",
        "E6-F06"
      ],
      "origem": {
        "codigo_documento": "E4-F16",
        "nome_no_documento": "Desmatamento e solos degradados",
        "eixo_documento": 4
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E4-F17": {
      "texto": "A gestão sustentável dos recursos naturais no Distrito Federal depende da coordenação entre o Ibram, a Adasa, a Secretaria de Meio Ambiente, a Terracap, o ICMBio e a Caesb, e é condicionada pela disputa sobre o uso do solo. O DF possui unidades de conservação relevantes, como o Parque Nacional de Brasília, a Estação Ecológica de Águas Emendadas, a Reserva da Biosfera do Cerrado e a APA do Planalto Central, que se sobrepõem a áreas com pressão de ocupação. A crise hídrica de 2017 e o incêndio de 1.473 hectares no Parque Nacional em 2024 (Sema-DF) indicam limites da gestão atual. A Terracap, como empresa pública detentora de grande parte das terras, tem papel central na definição do uso do solo. O fator articula-se a E4-F16, E4-F04, E4-F12 e E6-F08, e o plano popular deve acompanhar a destinação das terras públicas e defender a proteção das áreas de recarga hídrica.",
      "fontes_citadas": [
        "Sema-DF"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2017",
        "2024"
      ],
      "fatores_relacionados": [
        "E4-F16",
        "E4-F04",
        "E4-F12",
        "E6-F08"
      ],
      "origem": {
        "codigo_documento": "E4-F17",
        "nome_no_documento": "Gestão sustentável dos recursos naturais",
        "eixo_documento": 4
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E4-F18": {
      "texto": "Os conhecimentos e práticas tradicionais de conservação no Distrito Federal estão presentes no Santuário dos Pajés, reserva indígena de 32 hectares com presença dos povos Kariri-Xokó, Tapuia e Tuxá (Instituto Socioambiental), nas comunidades de matriz africana, nos raizeiros e raizeiras, nos agricultores tradicionais dos núcleos rurais e nas culturas populares trazidas por migrantes nordestinos e mineiros. O Santuário, cercado pela expansão imobiliária do Setor Noroeste, preserva área de Cerrado no interior do Plano Piloto e simboliza a disputa entre conservação baseada em saberes tradicionais e valorização imobiliária. O DF tinha 5.813 indígenas no Censo 2022 (IBGE), em sua maioria em contexto urbano. Esses saberes têm baixa incorporação nas políticas ambientais e de saúde. O fator articula-se a E3-F19, E4-F03, E5-F29 e E4-F02, e o plano popular deve reconhecer os detentores desses saberes como interlocutores na gestão ambiental.",
      "fontes_citadas": [
        "Instituto Socioambiental",
        "IBGE"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2022"
      ],
      "fatores_relacionados": [
        "E3-F19",
        "E4-F03",
        "E5-F29",
        "E4-F02"
      ],
      "origem": {
        "codigo_documento": "E4-F18",
        "nome_no_documento": "Conhecimentos e práticas tradicionais de conservação e uso sustentável",
        "eixo_documento": 4
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E4-F19": {
      "texto": "O hospital veterinário e o resgate de animais no Distrito Federal envolvem o Hospital Veterinário Público, a Diretoria de Vigilância Ambiental em Saúde, responsável pelo controle de zoonoses, o Ibram e o ICMBio no resgate de fauna silvestre, e organizações de proteção animal. Os incêndios florestais, como o que queimou 1.473 hectares do Parque Nacional de Brasília em 2024 (Sema-DF), e a expansão urbana sobre o Cerrado aumentam o resgate de fauna ferida e deslocada e os atropelamentos de animais silvestres nas rodovias. Animais domésticos abandonados e a vigilância de zoonoses, como leishmaniose visceral, raiva e esporotricose, têm relevância sanitária nas RAs periféricas. Os dados de atendimentos e de casos de zoonoses por RA não foram sistematizados nesta versão. O fator articula-se a E4-F20, E2-F35, E2-F38 e E2-F08, e o plano popular pode incluir a saúde única na vigilância comunitária.",
      "fontes_citadas": [
        "Sema-DF"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2024"
      ],
      "fatores_relacionados": [
        "E4-F20",
        "E2-F35",
        "E2-F38",
        "E2-F08"
      ],
      "origem": {
        "codigo_documento": "E4-F19",
        "nome_no_documento": "Hospital veterinário e resgate de animais",
        "eixo_documento": 4
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E4-F20": {
      "texto": "O tráfico de espécies da flora e da fauna no Distrito Federal envolve a captura e o comércio ilegal de aves silvestres, comuns em feiras e no comércio informal, a extração de plantas ornamentais e madeira do Cerrado e a caça em áreas rurais e de entorno de unidades de conservação. A condição de nó rodoviário e aeroportuário faz do DF rota de passagem de animais traficados de outras regiões. A redução de habitat pelo desmatamento, que alcançou 638 hectares em 2023 (MapBiomas), torna a fauna remanescente mais vulnerável. O fator articula-se a E4-F19, E4-F16, E6-F06 e E4-F17, e o plano popular pode incluir orientação sobre canais de denúncia e educação comunitária sobre a criação ilegal de aves silvestres.",
      "fontes_citadas": [
        "MapBiomas"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2023"
      ],
      "fatores_relacionados": [
        "E4-F19",
        "E4-F16",
        "E6-F06",
        "E4-F17"
      ],
      "origem": {
        "codigo_documento": "E4-F20",
        "nome_no_documento": "Tráfico de espécies da flora e fauna (caça e pesca ilegal)",
        "eixo_documento": 4
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E4-F21": {
      "texto": "As espécies exóticas invasoras no Distrito Federal incluem gramíneas africanas, como o capim-gordura e a braquiária, que dominam áreas de Cerrado degradado e aumentam a carga de combustível para incêndios, além de espécies arbóreas exóticas como o pinus e o eucalipto, e animais como o mosquito Aedes aegypti, vetor da dengue. As gramíneas invasoras ampliam a intensidade e a frequência das queimadas, que atingiram o Parque Nacional de Brasília em 2024, e dificultam a regeneração natural da vegetação nativa. O Aedes aegypti, originário da África, responde pela epidemia de 2024, com 278.301 casos prováveis de dengue (SES-DF). O manejo de invasoras nas unidades de conservação e nas áreas de restauração não foi quantificado nesta versão. O fator articula-se a E2-F38, E4-F25, E2-F35 e E4-F16, e o plano popular pode incluir o controle de gramíneas invasoras nas ações de prevenção de incêndios em bordas urbanas.",
      "fontes_citadas": [
        "SES-DF"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2024"
      ],
      "fatores_relacionados": [
        "E2-F38",
        "E4-F25",
        "E2-F35",
        "E4-F16"
      ],
      "origem": {
        "codigo_documento": "E4-F21",
        "nome_no_documento": "Espécies exóticas invasoras",
        "eixo_documento": 4
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E4-F22": {
      "texto": "A gestão sustentável da biodiversidade para o desenvolvimento e a redução da pobreza no Distrito Federal pode articular a conservação do Cerrado a cadeias de renda como a coleta de sementes para restauração, o turismo de base comunitária, a produção de frutos nativos e a agroecologia. Essas possibilidades são subaproveitadas nas RAs de renda baixa próximas a unidades de conservação, como Brazlândia, Planaltina, Fercal e São Sebastião, onde se concentram agricultores familiares e trabalhadores informais. A renda domiciliar per capita da Fercal, de R$ 816,29 em 2018 (Codeplan, PDAD 2018), contrasta com a riqueza ambiental da área. Os programas de pagamento por serviços ambientais beneficiam proprietários rurais, mas raramente alcançam a população sem terra. O fator articula-se a E1-F23, E4-F25, E4-F02 e E3-F01, e o plano popular deve propor programas que remunerem comunidades periféricas pela restauração e pela conservação.",
      "fontes_citadas": [
        "Codeplan, PDAD 2018"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2018"
      ],
      "fatores_relacionados": [
        "E1-F23",
        "E4-F25",
        "E4-F02",
        "E3-F01"
      ],
      "origem": {
        "codigo_documento": "E4-F22",
        "nome_no_documento": "Gestão sustentável da biodiversidade para o desenvolvimento e redução da pobreza",
        "eixo_documento": 4
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E4-F24": {
      "texto": "A transferência e o acesso a tecnologias ambientalmente corretas no Distrito Federal são desiguais: a geração solar distribuída, o reuso de água, a irrigação eficiente e as tecnologias de construção sustentável concentram-se em domicílios e empreendimentos de renda alta, enquanto as RAs periféricas dependem de soluções improvisadas. A presença da Embrapa, das universidades e de organizações de tecnologia social em Brasília oferece base para transferência, mas os canais de extensão para áreas urbanas periféricas são limitados, e a Emater-DF concentra-se na área rural. A banda larga, presente em 68,1% dos domicílios em 2018 (Codeplan, PDAD 2018), condiciona o acesso a informações técnicas. O número de beneficiários de programas de transferência tecnológica por RA não foi sistematizado nesta versão. O fator articula-se a E4-F08, E4-F05, E5-F10 e E1-F09, e o plano popular pode propor centros comunitários de tecnologia social nas RAs de renda baixa.",
      "fontes_citadas": [
        "Codeplan, PDAD 2018"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2018"
      ],
      "fatores_relacionados": [
        "E4-F08",
        "E4-F05",
        "E5-F10",
        "E1-F09"
      ],
      "origem": {
        "codigo_documento": "E4-F24",
        "nome_no_documento": "Transferência de tecnologias ambientalmente corretas (acesso)",
        "eixo_documento": 4
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E4-F25": {
      "texto": "O reflorestamento no Distrito Federal deve ser compreendido como restauração do Cerrado, bioma de savana em que o plantio de árvores em formações campestres pode ser inadequado. As prioridades são as matas ciliares e de galeria, as nascentes, as veredas e as áreas de recarga das bacias de abastecimento, como o Descoberto e o Pipiripau, e as áreas degradadas por erosão. O desmatamento de 638 hectares em 2023 (MapBiomas) e o incêndio de 1.473 hectares no Parque Nacional de Brasília em 2024 (Sema-DF) ampliam a área a recuperar. Programas de restauração com participação comunitária, como mutirões de plantio e redes de coletores de sementes, existem em pequena escala, sem metas territoriais divulgadas por RA nesta versão. O fator articula-se a E4-F04, E4-F16, E4-F02 e E6-F05, e o plano popular deve priorizar a restauração de matas ciliares nas RAs com córregos degradados e a geração de renda local na restauração.",
      "fontes_citadas": [
        "MapBiomas",
        "Sema-DF"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2023",
        "2024"
      ],
      "fatores_relacionados": [
        "E4-F04",
        "E4-F16",
        "E4-F02",
        "E6-F05"
      ],
      "origem": {
        "codigo_documento": "E4-F25",
        "nome_no_documento": "Reflorestamento",
        "eixo_documento": 4
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E5-F01": {
      "texto": "A disponibilidade de abrigos para emergências no Distrito Federal depende de escolas, ginásios, centros comunitários e equipamentos da assistência social mobilizados caso a caso pela Defesa Civil e pela Sedes, sem rede previamente definida para cada área de risco. As 22 áreas monitoradas em dezembro de 2024, com destaque para Sol Nascente/Pôr do Sol, Fercal, Vicente Pires, Sobradinho II e Arniqueira (Defesa Civil do DF), exigem abrigos próximos, acessíveis e com água, energia e sanitários. A população em situação de rua, com mais de 3,5 mil pessoas em 2025 (IPEDF), necessita de abrigamento emergencial em ondas de frio, de calor extremo e de baixa umidade, como as de 2024. A capacidade de acolhimento emergencial por RA não foi sistematizada nesta versão. O fator articula-se a E2-F39, E3-F14, E2-F32 e E6-F16, e o plano popular deve inventariar com a comunidade os locais aptos a funcionar como abrigo e pactuar seu uso com a Defesa Civil.",
      "fontes_citadas": [
        "Defesa Civil do DF",
        "IPEDF"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2024",
        "2025"
      ],
      "fatores_relacionados": [
        "E2-F39",
        "E3-F14",
        "E2-F32",
        "E6-F16"
      ],
      "origem": {
        "codigo_documento": "E5-F01",
        "nome_no_documento": "Disponibilidade a abrigos para emergências",
        "eixo_documento": 5
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E5-F02": {
      "texto": "As vias obstruídas e danificadas no Distrito Federal resultam de erosões, alagamentos, quedas de árvores e da falta de manutenção, e afetam sobretudo as RAs de ocupação irregular, onde a pavimentação é incompleta. Em 2021, 27,6% dos domicílios relatavam ruas esburacadas e 18,2% ruas alagadas nas proximidades (IPEDF, PDAD 2021). As rodovias distritais e federais que cortam o território, como a EPTG, a EPIA, a BR-070 e a BR-040, concentram fluxos metropolitanos da RIDE e sofrem interrupções em acidentes e chuvas intensas, isolando temporariamente RAs dependentes de um único acesso, como a Fercal e Brazlândia. Os registros do DER-DF e da Novacap sobre vias danificadas por RA não foram sistematizados nesta versão. O fator articula-se a E5-F19, E2-F34, E5-F24 e E2-F33, e o plano popular pode organizar o registro comunitário de vias danificadas, com encaminhamento às administrações regionais e acompanhamento das respostas.",
      "fontes_citadas": [
        "IPEDF, PDAD 2021"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2021"
      ],
      "fatores_relacionados": [
        "E5-F19",
        "E2-F34",
        "E5-F24",
        "E2-F33"
      ],
      "origem": {
        "codigo_documento": "E5-F02",
        "nome_no_documento": "Vias obstruídas e danificadas – vias municipais, estaduais e federais",
        "eixo_documento": 5
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E5-F03": {
      "texto": "Os acidentes no transporte de produtos perigosos no Distrito Federal constituem risco associado às rodovias que atravessam o território e abastecem a capital, como a BR-040, a BR-060 e a BR-070, e ao transporte de combustíveis para os postos e para o abastecimento aeroportuário. O polo cimenteiro da Fercal e as áreas industriais do SIA e do SCIA concentram fluxos de cargas, e RAs residenciais densas, como SCIA-Estrutural, situam-se ao lado dessas vias. Planos de contingência para vazamentos próximos a mananciais, como as bacias do Descoberto e do Paranoá, devem ser verificados. O fator articula-se a E2-F21, E2-F32, E5-F19 e E2-F33, e o plano popular pode identificar com a comunidade os trechos de rodovias com passagem de cargas perigosas próximos a moradias e escolas.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E2-F21",
        "E2-F32",
        "E5-F19",
        "E2-F33"
      ],
      "origem": {
        "codigo_documento": "E5-F03",
        "nome_no_documento": "Acidentes no transporte de produtos perigosos",
        "eixo_documento": 5
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E5-F04": {
      "texto": "O ensino fundamental no Distrito Federal registrou 354.373 matrículas em 2025 (IBGE Estados) e IDEB de 6,4 nos anos iniciais em 2023 e 2025, com a rede pública passando de 5,9 para 6,0, e de 5,1 nos anos finais em 2025, com a rede pública avançando de 4,6 para 4,7 (INEP, conforme Jornal de Brasília). A taxa de escolarização de 6 a 14 anos era de 98,96% (IBGE Cidades). A diferença entre a rede total e a pública indica o peso da rede privada nas RAs de renda alta e a desigualdade de resultados entre segmentos. Os resultados do IDEB por escola, agregados por RA, não foram sistematizados nesta versão e devem revelar a distância entre o Plano Piloto e as RAs de renda baixa. O fator articula-se a E5-F08, E5-F12, E1-F01 e E3-F01, e o plano popular deve monitorar o IDEB por RA e as condições de infraestrutura das escolas periféricas.",
      "fontes_citadas": [
        "IBGE Estados",
        "INEP, conforme Jornal de Brasília",
        "IBGE Cidades"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2025",
        "2023"
      ],
      "fatores_relacionados": [
        "E5-F08",
        "E5-F12",
        "E1-F01",
        "E3-F01"
      ],
      "origem": {
        "codigo_documento": "E5-F04",
        "nome_no_documento": "Educação – ensino primário",
        "eixo_documento": 5
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E5-F05": {
      "texto": "A educação técnica e profissional no Distrito Federal é ofertada pelo Instituto Federal de Brasília, com campi em RAs como Ceilândia, Samambaia, Riacho Fundo, Planaltina, São Sebastião, Gama e Taguatinga, pelas escolas técnicas da rede distrital e pelo Sistema S. A localização de campi nas RAs periféricas aproxima a formação dos jovens de renda baixa, mas a articulação com a demanda do mercado local de trabalho, concentrado no Plano Piloto, é limitada. O desemprego de 17,9% entre pessoas negras em 2023 (IPEDF e DIEESE, PED-DF) indica a relevância da formação profissional como política de inclusão. As matrículas em educação profissional por RA, disponíveis no Censo Escolar, não foram sistematizadas nesta versão. O fator articula-se a E5-F16, E1-F12, E1-F13 e E5-F06, e o plano popular pode propor cursos técnicos voltados às necessidades territoriais, como saneamento, energia solar, agroecologia e cuidado.",
      "fontes_citadas": [
        "IPEDF e DIEESE, PED-DF"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2023"
      ],
      "fatores_relacionados": [
        "E5-F16",
        "E1-F12",
        "E1-F13",
        "E5-F06"
      ],
      "origem": {
        "codigo_documento": "E5-F05",
        "nome_no_documento": "Educação técnica e profissional",
        "eixo_documento": 5
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E5-F06": {
      "texto": "A educação superior no Distrito Federal tem a maior escolaridade média do país: 33,9% das pessoas de 25 anos ou mais tinham curso superior completo em 2018 (Codeplan, PDAD 2018). A oferta concentra-se na Universidade de Brasília, com campi no Plano Piloto, em Planaltina, em Ceilândia e no Gama, no Instituto Federal de Brasília e em instituições privadas. A distribuição da escolaridade superior é fortemente desigual entre RAs e segue a hierarquia de renda, com predominância de graduados no Plano Piloto, nos Lagos e no Sudoeste. Os campi da UnB nas RAs periféricas são experiências de interiorização intraurbana com potencial de extensão comunitária. A proporção de graduados por RA, disponível na PDAD, não foi sistematizada nesta versão. O fator articula-se a E5-F11, E4-F06, E5-F05 e E3-F10, e o plano popular pode propor projetos de extensão dos campi periféricos vinculados aos nós críticos deste diagnóstico.",
      "fontes_citadas": [
        "Codeplan, PDAD 2018"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2018"
      ],
      "fatores_relacionados": [
        "E5-F11",
        "E4-F06",
        "E5-F05",
        "E3-F10"
      ],
      "origem": {
        "codigo_documento": "E5-F06",
        "nome_no_documento": "Educação superior",
        "eixo_documento": 5
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E5-F08": {
      "texto": "A educação pública no Distrito Federal é ofertada pela Secretaria de Estado de Educação, com financiamento complementado pelo Fundo Constitucional do Distrito Federal. O IDEB do ensino médio da rede pública caiu de 3,7 em 2023 para 3,6 em 2025, e o DF foi a única unidade da federação a registrar queda no indicador do ensino médio em 2025 (INEP, conforme Jornal de Brasília e Correio da Manhã). Nos anos iniciais e finais do fundamental, a rede pública avançou um décimo. A desigualdade entre escolas das RAs centrais e periféricas, a infraestrutura, a violência escolar e as condições climáticas das salas de aula na estiagem são dimensões relevantes, não quantificadas por RA nesta versão. O fator articula-se a E5-F04, E5-F12, E5-F09 e E1-F01, e o plano popular deve priorizar o ensino médio público como nó crítico educacional, com monitoramento da evasão e da aprendizagem nas RAs de renda baixa.",
      "fontes_citadas": [
        "INEP, conforme Jornal de Brasília e Correio da Manhã"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2023",
        "2025"
      ],
      "fatores_relacionados": [
        "E5-F04",
        "E5-F12",
        "E5-F09",
        "E1-F01"
      ],
      "origem": {
        "codigo_documento": "E5-F08",
        "nome_no_documento": "Educação pública",
        "eixo_documento": 5
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E5-F09": {
      "texto": "A alfabetização e a Educação de Jovens e Adultos no Distrito Federal atendem uma população adulta com escolarização incompleta, composta majoritariamente por migrantes e trabalhadores das RAs de renda baixa. Em 2018, 97,1% das pessoas de 5 anos ou mais sabiam ler e escrever (Codeplan, PDAD 2018), o que indica analfabetismo residual concentrado em idosos e em RAs periféricas. A EJA enfrenta evasão associada à jornada de trabalho e ao tempo de deslocamento, e a oferta noturna depende de condições de segurança e transporte. O fator articula-se a E5-F08, E5-F16, E3-F10 e E1-F13, e o plano popular pode articular a EJA às ações de formação de pesquisadores populares e aos Círculos de Cultura, na perspectiva da educação popular freireana.",
      "fontes_citadas": [
        "Codeplan, PDAD 2018"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2018"
      ],
      "fatores_relacionados": [
        "E5-F08",
        "E5-F16",
        "E3-F10",
        "E1-F13"
      ],
      "origem": {
        "codigo_documento": "E5-F09",
        "nome_no_documento": "Alfabetização – EJA",
        "eixo_documento": 5
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E5-F10": {
      "texto": "A formação em tecnologias sociais no Distrito Federal é oferecida por universidades, institutos federais, Embrapa, Emater-DF e organizações da sociedade civil, em temas como agroecologia, captação de água, saneamento ecológico, bioconstrução e reciclagem. A relevância dessa formação nas RAs de renda baixa é ampliada pela seca recorde de 2024, pela insegurança alimentar de 27,0% dos domicílios (IBGE, PNAD Contínua) e pelos déficits de saneamento em áreas irregulares. A PICAPS, com a formação de pesquisadores populares, constitui experiência de formação em tecnologia social aplicada à vigilância territorial em saúde. A oferta e o número de pessoas formadas por RA não foram sistematizados nesta versão. O fator articula-se a E4-F05, E5-F16, E4-F24 e E6-F02, e o plano popular pode prever percursos formativos em tecnologias sociais para lideranças comunitárias, cooperativas e jovens das RAs de renda baixa.",
      "fontes_citadas": [
        "IBGE, PNAD Contínua"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2024"
      ],
      "fatores_relacionados": [
        "E4-F05",
        "E5-F16",
        "E4-F24",
        "E6-F02"
      ],
      "origem": {
        "codigo_documento": "E5-F10",
        "nome_no_documento": "Formação em tecnologias sociais",
        "eixo_documento": 5
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E5-F11": {
      "texto": "As bolsas de estudo no Distrito Federal incluem o Prouni e o Fies em instituições privadas, as políticas de cotas raciais e sociais da UnB, pioneira na adoção de cotas raciais no país, e bolsas de permanência estudantil das instituições públicas. As cotas ampliaram o acesso de estudantes negros e de escolas públicas ao ensino superior, mas a permanência depende de auxílios de transporte, alimentação e moradia, dado o custo de deslocamento entre as RAs periféricas e os campi. O desemprego mais alto entre jovens negros e a renda domiciliar média de R$ 2.644,96 nas RAs de renda baixa em 2021 (IPEDF, PDAD 2021) indicam a relevância das bolsas. O número de bolsistas por RA de residência não foi sistematizado nesta versão. O fator articula-se a E5-F06, E3-F18, E5-F05 e E3-F10, e o plano popular pode divulgar as oportunidades de bolsas nas escolas e organizações das RAs de renda baixa.",
      "fontes_citadas": [
        "IPEDF, PDAD 2021"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2021"
      ],
      "fatores_relacionados": [
        "E5-F06",
        "E3-F18",
        "E5-F05",
        "E3-F10"
      ],
      "origem": {
        "codigo_documento": "E5-F11",
        "nome_no_documento": "Bolsas de estudo",
        "eixo_documento": 5
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E5-F12": {
      "texto": "Os professores qualificados no Distrito Federal integram uma carreira com remuneração entre as mais altas do país, financiada em parte pelo Fundo Constitucional, e elevada proporção de docentes com formação superior e pós-graduação. A queda do IDEB do ensino médio público para 3,6 em 2025 (INEP) indica que a qualificação formal dos docentes não basta para assegurar aprendizagem, sem condições de trabalho, infraestrutura e apoio pedagógico. A violência escolar e o adoecimento docente são temas relevantes. O fator articula-se a E5-F08, E5-F04, E2-F18 e E5-F16, e o plano popular deve acompanhar a lotação de professores efetivos nas escolas das RAs de renda baixa e o indicador de regularidade docente do INEP.",
      "fontes_citadas": [
        "INEP"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2025"
      ],
      "fatores_relacionados": [
        "E5-F08",
        "E5-F04",
        "E2-F18",
        "E5-F16"
      ],
      "origem": {
        "codigo_documento": "E5-F12",
        "nome_no_documento": "Professores qualificados",
        "eixo_documento": 5
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E5-F13": {
      "texto": "O acesso aos serviços de energia no Distrito Federal é praticamente universal nas áreas regularizadas, atendidas pela Neoenergia Brasília, mas persistem ligações irregulares nas ocupações em processo de regularização, como partes de Sol Nascente/Pôr do Sol, SCIA-Estrutural e condomínios irregulares, com riscos de choques elétricos e incêndios. O custo da energia pesa sobre o orçamento das famílias de renda baixa, cuja renda domiciliar média era de R$ 2.644,96 em 2021 (IPEDF, PDAD 2021), e o calor extremo de 2024 elevou o consumo com ventiladores e refrigeração. A tarifa social de energia elétrica depende da inscrição no CadÚnico, e sua cobertura por RA não foi sistematizada nesta versão. Interrupções do fornecimento em temporais afetam pessoas que dependem de equipamentos médicos domiciliares. O fator articula-se a E5-F14, E2-F31, E5-F30 e E3-F09, e o plano popular deve identificar famílias elegíveis à tarifa social e mapear interrupções recorrentes.",
      "fontes_citadas": [
        "IPEDF, PDAD 2021"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2021",
        "2024"
      ],
      "fatores_relacionados": [
        "E5-F14",
        "E2-F31",
        "E5-F30",
        "E3-F09"
      ],
      "origem": {
        "codigo_documento": "E5-F13",
        "nome_no_documento": "Acesso aos serviços de energia",
        "eixo_documento": 5
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E5-F14": {
      "texto": "Os serviços de energia modernos e sustentáveis no Distrito Federal avançam com a geração solar distribuída, favorecida pela alta irradiação do Planalto Central, e com a eletrificação parcial do transporte, mas o acesso a essas tecnologias concentra-se nas RAs de renda alta. Edificações públicas, como escolas e UBS, têm potencial para geração solar que reduziria custos e aumentaria a resiliência em interrupções. A eficiência energética das moradias populares é baixa, com coberturas metálicas que elevam a temperatura interna nas ondas de calor. O fator articula-se a E4-F08, E5-F13, E4-F07 e E5-F20, e o plano popular pode propor energia solar em equipamentos públicos das RAs de renda baixa, cooperativas de geração compartilhada e programas de eficiência energética para habitação de interesse social.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E4-F08",
        "E5-F13",
        "E4-F07",
        "E5-F20"
      ],
      "origem": {
        "codigo_documento": "E5-F14",
        "nome_no_documento": "Serviços de energia modernos e sustentáveis",
        "eixo_documento": 5
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E5-F15": {
      "texto": "Os empreendimentos com elevado risco de desastres no Distrito Federal incluem as barragens de abastecimento, como as do Descoberto, do Paranoá e de Santa Maria, a barragem do Corumbá IV, situada em Goiás e integrada ao abastecimento distrital, estruturas de mineração e cimenteiras na Fercal, o Aterro Sanitário de Brasília e o passivo do antigo lixão da Estrutural, além de dutos e depósitos de combustíveis. A Barragem do Paranoá, construída na década de 1950, situa-se a montante de áreas ocupadas, o que exige plano de segurança e de ação de emergência com divulgação às comunidades. O fator articula-se a E2-F33, E5-F03, E2-F21 e E6-F09, e o plano popular deve demandar a divulgação das classificações de risco das barragens e dos planos de emergência às comunidades a jusante.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [
        "1950"
      ],
      "fatores_relacionados": [
        "E2-F33",
        "E5-F03",
        "E2-F21",
        "E6-F09"
      ],
      "origem": {
        "codigo_documento": "E5-F15",
        "nome_no_documento": "Empreendimento com elevado risco de desastres",
        "eixo_documento": 5
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E5-F16": {
      "texto": "A educação para o trabalho no Distrito Federal envolve a educação profissional do Instituto Federal de Brasília, da rede distrital e do Sistema S, programas de aprendizagem para jovens e qualificação para desempregados. A estrutura do mercado de trabalho, dominada pela administração pública e pelos serviços, valoriza qualificações de nível superior e reduz oportunidades para jovens das RAs de renda baixa. O desemprego de 17,9% entre pessoas negras em 2023, contra 13,5% entre não negras (IPEDF e DIEESE, PED-DF), e a informalidade concentrada nas periferias indicam a necessidade de formação articulada à criação de postos locais. A oferta de qualificação por RA e sua efetividade em inserção não foram sistematizadas nesta versão. O fator articula-se a E5-F05, E1-F12, E1-F13 e E5-F10, e o plano popular pode propor percursos formativos vinculados à economia do cuidado, à transição energética, ao saneamento e à agroecologia.",
      "fontes_citadas": [
        "IPEDF e DIEESE, PED-DF"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2023"
      ],
      "fatores_relacionados": [
        "E5-F05",
        "E1-F12",
        "E1-F13",
        "E5-F10"
      ],
      "origem": {
        "codigo_documento": "E5-F16",
        "nome_no_documento": "Educação para trabalho",
        "eixo_documento": 5
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E5-F17": {
      "texto": "A promoção de cultura no Distrito Federal combina instituições de abrangência nacional, situadas no Plano Piloto, como o Teatro Nacional, o Museu Nacional e o Centro Cultural Banco do Brasil, e uma produção cultural periférica vigorosa, com hip-hop, rap, forró, festas juninas, quadrilhas, capoeira, saraus e coletivos culturais em Ceilândia, Samambaia, Planaltina, São Sebastião e outras RAs. Ceilândia é reconhecida como polo de cultura periférica, e o Fundo de Apoio à Cultura do DF financia projetos em diversas RAs. O fator articula-se a E5-F18, E5-F29, E5-F25 e E3-F10, e o plano popular deve reconhecer os coletivos culturais periféricos como atores de mobilização e de comunicação em saúde, e demandar a distribuição do fomento proporcional à população das RAs.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E5-F18",
        "E5-F29",
        "E5-F25",
        "E3-F10"
      ],
      "origem": {
        "codigo_documento": "E5-F17",
        "nome_no_documento": "Promoção de cultura",
        "eixo_documento": 5
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E5-F18": {
      "texto": "O acesso à cultura no Distrito Federal é condicionado pela concentração dos equipamentos culturais no Plano Piloto e pela distância e custo de deslocamento para os moradores das RAs periféricas. Em 2021, 26,8% dos ocupados trabalhavam no Plano Piloto (IPEDF, PDAD 2021), mas o acesso a cinemas, teatros e museus fora do horário de trabalho depende do transporte coletivo, menos frequente à noite e nos fins de semana. A oferta de centros culturais, bibliotecas e espaços de convivência nas RAs de renda baixa é limitada e não foi quantificada por RA nesta versão. As festas populares, os eventos de rua e os espaços culturais comunitários suprem parcialmente essa ausência. O fator articula-se a E5-F17, E5-F23, E5-F27 e E5-F25, e o plano popular pode mapear os espaços culturais existentes e as lacunas por RA, propondo a descentralização de equipamentos e a gratuidade do transporte em eventos culturais.",
      "fontes_citadas": [
        "IPEDF, PDAD 2021"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2021"
      ],
      "fatores_relacionados": [
        "E5-F17",
        "E5-F23",
        "E5-F27",
        "E5-F25"
      ],
      "origem": {
        "codigo_documento": "E5-F18",
        "nome_no_documento": "Acesso à cultura",
        "eixo_documento": 5
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E5-F19": {
      "texto": "O sistema viário do Distrito Federal é estruturado por rodovias distritais e federais de alta velocidade, como a EPTG, a EPIA, a EPNB e a Estrada Parque Taguatinga, que conectam as RAs ao Plano Piloto em configuração radial e polinucleada. A frota de 2.239.078 veículos (IBGE Estados) e o predomínio do automóvel, usado por 47,0% dos trabalhadores em 2018 (Codeplan, PDAD 2018), produzem congestionamentos nos eixos de acesso ao centro. As vias expressas que cortam áreas residenciais estão associadas a atropelamentos, e os pedestres foram as principais vítimas fatais do trânsito em 2024, com 60 mortes (Detran-DF). As vias internas das RAs de ocupação irregular têm pavimentação incompleta. O fator articula-se a E5-F23, E2-F11, E5-F02 e E5-F24, e o plano popular deve priorizar travessias seguras, redução de velocidade em trechos urbanos e pavimentação das vias locais das RAs periféricas.",
      "fontes_citadas": [
        "IBGE Estados",
        "Codeplan, PDAD 2018",
        "Detran-DF"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2018",
        "2024"
      ],
      "fatores_relacionados": [
        "E5-F23",
        "E2-F11",
        "E5-F02",
        "E5-F24"
      ],
      "origem": {
        "codigo_documento": "E5-F19",
        "nome_no_documento": "Sistema viário – vias municipais, estaduais e federais",
        "eixo_documento": 5
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E5-F20": {
      "texto": "A infraestrutura sustentável e resiliente no Distrito Federal precisa responder a um padrão de urbanização disperso, com baixa densidade em grande parte do território e expansão sobre áreas de recarga e de risco. A drenagem urbana, dimensionada para chuvas de outro padrão e implantada tardiamente em áreas de ocupação irregular, mostra-se insuficiente nos alagamentos recorrentes de Vicente Pires, Arniqueira e Sol Nascente/Pôr do Sol. A crise hídrica de 2017 levou à ampliação da infraestrutura de abastecimento, e a seca de 2024 voltou a testá-la. Soluções baseadas na natureza, como parques lineares, jardins de chuva e pavimentos permeáveis, são pouco adotadas. O investimento em infraestrutura resiliente por RA não foi sistematizado nesta versão. O fator articula-se a E4-F10, E5-F24, E2-F34 e E4-F12, e o plano popular deve demandar que as obras de urbanização incorporem critérios de resiliência climática e drenagem sustentável.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [
        "2017",
        "2024"
      ],
      "fatores_relacionados": [
        "E4-F10",
        "E5-F24",
        "E2-F34",
        "E4-F12"
      ],
      "origem": {
        "codigo_documento": "E5-F20",
        "nome_no_documento": "Infraestrutura sustentável e resiliente",
        "eixo_documento": 5
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E5-F21": {
      "texto": "As tecnologias de informação e comunicação no Distrito Federal têm alta penetração na média, mas desigual entre RAs. Em 2018, 68,1% dos domicílios tinham acesso à internet por banda larga (Codeplan, PDAD 2018). A digitalização de serviços públicos, como agendamentos de saúde, inscrições escolares e benefícios sociais, exclui quem tem acesso apenas por celular com pacote limitado. A conectividade expõe a população a fraudes: o DF teve a segunda maior taxa de estelionato do país em 2025, 1.717,0 por 100 mil habitantes (Anuário Brasileiro de Segurança Pública 2026). O fator articula-se a E6-F11, E4-F09, E1-F20 e E5-F09, e o plano popular pode propor pontos públicos de acesso à internet nas RAs de renda baixa e formação comunitária em segurança digital.",
      "fontes_citadas": [
        "Codeplan, PDAD 2018",
        "Anuário Brasileiro de Segurança Pública 2026"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2018",
        "2025",
        "2026"
      ],
      "fatores_relacionados": [
        "E6-F11",
        "E4-F09",
        "E1-F20",
        "E5-F09"
      ],
      "origem": {
        "codigo_documento": "E5-F21",
        "nome_no_documento": "Tecnologias de informação e comunicação",
        "eixo_documento": 5
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E5-F22": {
      "texto": "A habitação no Distrito Federal é marcada pelo déficit habitacional, pela ocupação irregular e pela valorização fundiária concentrada no Plano Piloto e nos Lagos. O Censo 2022 identificou 62 favelas e comunidades urbanas, com 61.784 domicílios e 198.779 moradores, 7,1% da população, e Sol Nascente/Pôr do Sol tornou-se a segunda maior favela do país em população, com 70.908 moradores e 32.081 domicílios em 9,2 km² (IBGE). Em extensão territorial, o DF abriga três das maiores favelas do Brasil, 26 de Setembro, com 10,5 km², Sol Nascente, com 9,2 km², e Morro da Cruz, com 5,9 km² (IBGE). Em 2018, 57,0% dos domicílios eram próprios e quitados (Codeplan, PDAD 2018). O fator articula-se a E5-F24, E2-F33, E3-F05 e E3-F17, e o plano popular deve acompanhar a regularização fundiária, a produção habitacional da Codhab e a assistência técnica para melhoria das moradias.",
      "fontes_citadas": [
        "IBGE",
        "Codeplan, PDAD 2018"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2022",
        "2018"
      ],
      "fatores_relacionados": [
        "E5-F24",
        "E2-F33",
        "E3-F05",
        "E3-F17"
      ],
      "origem": {
        "codigo_documento": "E5-F22",
        "nome_no_documento": "Habitação",
        "eixo_documento": 5
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E5-F23": {
      "texto": "Os transportes seguros no Distrito Federal dependem de um sistema baseado em ônibus, com metrô restrito ao eixo sudoeste, ligando o Plano Piloto a Águas Claras, Taguatinga, Ceilândia e Samambaia, e BRT no eixo sul, atendendo Gama e Santa Maria. Em 2018, 38,2% dos trabalhadores deslocavam-se de ônibus e 47,0% de automóvel (Codeplan, PDAD 2018), e as RAs de renda baixa dependem mais do transporte coletivo, com longos tempos de viagem. As mortes de motociclistas subiram de 74 para 104 entre 2024 e 2025 (Detran-DF), associadas à expansão do transporte e das entregas por aplicativo. A segurança nas paradas e nos trajetos noturnos é preocupação relevante para mulheres. Os tempos de deslocamento por RA não foram sistematizados nesta versão. O fator articula-se a E5-F19, E2-F11, E1-F12 e E3-F02, e o plano popular deve mapear trajetos inseguros e propor melhorias de frequência e iluminação nas paradas.",
      "fontes_citadas": [
        "Codeplan, PDAD 2018",
        "Detran-DF"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2018",
        "2024",
        "2025"
      ],
      "fatores_relacionados": [
        "E5-F19",
        "E2-F11",
        "E1-F12",
        "E3-F02"
      ],
      "origem": {
        "codigo_documento": "E5-F23",
        "nome_no_documento": "Transportes seguros",
        "eixo_documento": 5
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E5-F24": {
      "texto": "A urbanização e a infraestrutura no Distrito Federal expressam o contraste entre o Plano Piloto, cidade planejada e tombada como Patrimônio Mundial, e as RAs formadas por transferências de população, assentamentos e ocupações irregulares. A urbanização tardia de áreas como Sol Nascente/Pôr do Sol, Vicente Pires, Arniqueira, Itapoã e SCIA-Estrutural produziu bairros densos com infraestrutura implantada depois da ocupação. Em 2021, a PDAD registrou entulho próximo a 16,8% dos domicílios, ruas esburacadas em 27,6% e ruas alagadas em 18,2%, com redução em relação a 2018 (IPEDF, PDAD 2021). A criação de novas RAs, como Sol Nascente/Pôr do Sol e Arniqueira, reconheceu formalmente esses territórios. O fator articula-se a E5-F22, E5-F20, E2-F31 e E1-F19, e o plano popular deve acompanhar o Plano Diretor de Ordenamento Territorial e a priorização de investimentos em infraestrutura nas RAs de renda baixa.",
      "fontes_citadas": [
        "IPEDF, PDAD 2021"
      ],
      "referencias_normativas": [
        "Plano Diretor de Ordenamento Territorial"
      ],
      "periodos_citados": [
        "2021",
        "2018"
      ],
      "fatores_relacionados": [
        "E5-F22",
        "E5-F20",
        "E2-F31",
        "E1-F19"
      ],
      "origem": {
        "codigo_documento": "E5-F24",
        "nome_no_documento": "Urbanização e infraestrutura",
        "eixo_documento": 5
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E5-F25": {
      "texto": "Os equipamentos públicos de lazer e cultura seguros no Distrito Federal concentram-se no Plano Piloto, com o Parque da Cidade, o Eixão do Lazer e os equipamentos culturais centrais, enquanto as RAs de renda baixa dispõem de praças, quadras e Pontos de Encontro Comunitário com manutenção irregular e problemas de iluminação e segurança. Os parques urbanos das RAs, como o Parque Ecológico de Ceilândia e o Parque do Gama, têm infraestrutura variável. Os espaços de lazer podem funcionar como pontos de encontro em emergências e como refúgios em ondas de calor, quando arborizados e dotados de água. O fator articula-se a E5-F28, E5-F26, E2-F39 e E5-F30, e o plano popular pode realizar auditorias comunitárias da segurança, da iluminação e da acessibilidade dos equipamentos de lazer em cada RA.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E5-F28",
        "E5-F26",
        "E2-F39",
        "E5-F30"
      ],
      "origem": {
        "codigo_documento": "E5-F25",
        "nome_no_documento": "Equipamentos públicos de lazer e cultura seguros",
        "eixo_documento": 5
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E5-F26": {
      "texto": "Os esportes no Distrito Federal são praticados em equipamentos públicos como os Pontos de Encontro Comunitário, quadras poliesportivas, centros olímpicos e o Parque da Cidade, e em projetos sociais esportivos nas RAs periféricas. Os Centros Olímpicos e Paralímpicos, distribuídos em RAs como Ceilândia, Samambaia, Gama, Planaltina e Recanto das Emas, oferecem atividades gratuitas, mas sua cobertura em relação à população jovem não foi quantificada nesta versão. A prática de atividade física associa-se à prevenção de doenças crônicas, principais causas de morte no DF, e o calor e a baixa umidade na estiagem impõem cuidados para a prática ao ar livre, como evidenciado em 2024. O fator articula-se a E5-F28, E2-F09, E5-F25 e E2-F18, e o plano popular pode articular os programas esportivos às ações de promoção da saúde da APS e aos protocolos de calor e baixa umidade para atividades ao ar livre.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [
        "2024"
      ],
      "fatores_relacionados": [
        "E5-F28",
        "E2-F09",
        "E5-F25",
        "E2-F18"
      ],
      "origem": {
        "codigo_documento": "E5-F26",
        "nome_no_documento": "Esportes",
        "eixo_documento": 5
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E5-F27": {
      "texto": "As bibliotecas no Distrito Federal incluem a Biblioteca Nacional de Brasília, a Biblioteca Central da UnB, bibliotecas públicas distritais e escolares e bibliotecas comunitárias organizadas por coletivos nas RAs periféricas. A concentração das bibliotecas de maior acervo no Plano Piloto reproduz a desigualdade territorial do acesso à cultura. As bibliotecas comunitárias de RAs como Ceilândia, Samambaia e SCIA-Estrutural funcionam também como espaços de convivência, apoio escolar e formação. O fator articula-se a E5-F18, E5-F04, E5-F21 e E4-F09, e o plano popular pode reconhecer as bibliotecas comunitárias como pontos de difusão de informação em saúde, de acesso à internet e de realização dos Círculos de Cultura da PICAPS.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E5-F18",
        "E5-F04",
        "E5-F21",
        "E4-F09"
      ],
      "origem": {
        "codigo_documento": "E5-F27",
        "nome_no_documento": "Biblioteca",
        "eixo_documento": 5
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E5-F28": {
      "texto": "O lazer no Distrito Federal é condicionado pela desigualdade territorial dos espaços públicos e pelo tempo livre reduzido dos trabalhadores das RAs de renda baixa, que despendem longos períodos em deslocamento. O Plano Piloto oferece áreas verdes extensas e o Eixão do Lazer, enquanto as RAs periféricas dependem de praças, feiras, igrejas, quadras e do espaço da rua. O Lago Paranoá, com orla de acesso historicamente restrito pela ocupação privada, foi objeto de política de desobstrução para uso público. A distribuição de áreas verdes de uso público por habitante e por RA não foi quantificada nesta versão. Os espaços de lazer arborizados têm função de adaptação ao calor e à baixa umidade, problemas acentuados em 2024. O fator articula-se a E5-F25, E5-F26, E5-F18 e E2-F18, e o plano popular pode propor a requalificação de praças e áreas verdes nas RAs de renda baixa, com arborização, iluminação e bebedouros.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [
        "2024"
      ],
      "fatores_relacionados": [
        "E5-F25",
        "E5-F26",
        "E5-F18",
        "E2-F18"
      ],
      "origem": {
        "codigo_documento": "E5-F28",
        "nome_no_documento": "Lazer",
        "eixo_documento": 5
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E5-F29": {
      "texto": "A valorização dos saberes e práticas locais no Distrito Federal envolve as culturas trazidas pelos migrantes de todas as regiões do país, os saberes dos agricultores familiares, as tradições de matriz africana, os conhecimentos indígenas presentes no Santuário dos Pajés e as práticas comunitárias de cuidado, solidariedade e organização das RAs periféricas. Em 2018, 44,7% da população urbana não era natural do DF, com predominância de origem mineira, goiana, baiana, piauiense e maranhense (Codeplan, PDAD 2018). Essa diversidade é recurso para a educação popular e para a comunicação em saúde. As políticas públicas tendem a desconsiderar esses saberes no planejamento. A PICAPS, ancorada nos Círculos de Cultura, propõe o reconhecimento dos saberes comunitários como conhecimento sobre o território. O fator articula-se a E4-F18, E4-F03, E5-F17 e E6-F01, e o plano popular deve registrar e incorporar esses saberes na cartografia social e na construção das ações.",
      "fontes_citadas": [
        "Codeplan, PDAD 2018"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2018"
      ],
      "fatores_relacionados": [
        "E4-F18",
        "E4-F03",
        "E5-F17",
        "E6-F01"
      ],
      "origem": {
        "codigo_documento": "E5-F29",
        "nome_no_documento": "Valorização dos saberes e práticas locais",
        "eixo_documento": 5
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E5-F30": {
      "texto": "O acesso à iluminação pública no Distrito Federal, de responsabilidade da Companhia Energética de Brasília em articulação com as administrações regionais, é amplo nas áreas consolidadas e deficiente nas ocupações irregulares, nas áreas rurais e em trechos de parques, passarelas e paradas de ônibus. A iluminação está associada à segurança, em especial das mulheres em trajetos noturnos, e à prevenção de atropelamentos nas vias que cortam áreas residenciais, onde os pedestres foram as principais vítimas fatais do trânsito em 2024, com 60 mortes (Detran-DF). A substituição por luminárias de LED avançou nos últimos anos, mas a cobertura por RA e os pontos com iluminação deficiente não foram sistematizados nesta versão. O fator articula-se a E2-F27, E3-F02, E5-F23 e E2-F11, e o plano popular pode organizar o mapeamento comunitário de pontos escuros nos trajetos entre moradias, paradas, escolas e UBS.",
      "fontes_citadas": [
        "Detran-DF"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2024"
      ],
      "fatores_relacionados": [
        "E2-F27",
        "E3-F02",
        "E5-F23",
        "E2-F11"
      ],
      "origem": {
        "codigo_documento": "E5-F30",
        "nome_no_documento": "Acesso a iluminação pública",
        "eixo_documento": 5
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E6-F01": {
      "texto": "As associações de moradores e lideranças locais do Distrito Federal têm papel ampliado pela ausência de governo eleito nas Regiões Administrativas, cujos administradores são nomeados pelo governador. Prefeituras comunitárias, associações de moradores, conselhos de segurança, associações de produtores rurais e lideranças de ocupações atuam como intermediários entre as comunidades e o governo distrital, sobretudo nas RAs de urbanização recente, como Sol Nascente/Pôr do Sol, SCIA-Estrutural, Itapoã, Fercal e Arniqueira, onde a regularização fundiária e a infraestrutura dependem de mobilização. A rede de lideranças tem densidade variável e não está registrada em base pública consolidada. Lideranças comunitárias mobilizaram ações de combate a criadouros na epidemia de dengue de 2024. O fator articula-se a E6-F02, E6-F07, E3-F10 e E1-F17, e o plano popular deve reconhecer essas lideranças como interlocutoras do planejamento em saúde por RA.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [
        "2024"
      ],
      "fatores_relacionados": [
        "E6-F02",
        "E6-F07",
        "E3-F10",
        "E1-F17"
      ],
      "origem": {
        "codigo_documento": "E6-F01",
        "nome_no_documento": "Associação de moradores e lideranças locais",
        "eixo_documento": 6
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E6-F02": {
      "texto": "A mobilização de redes e grupos organizados no Distrito Federal beneficia-se da condição de capital federal, sede de movimentos sociais nacionais, organizações não governamentais, sindicatos e redes de pesquisa, e da presença de movimentos de base territorial, como os de luta por moradia, de catadores, de mulheres, de juventude negra, de cultura periférica e de agricultores familiares. A proximidade das instâncias federais facilita a incidência sobre políticas nacionais, mas pode deslocar a atenção dos problemas distritais. O Inesc, com o Mapa das Desigualdades do DF, exemplifica a produção de conhecimento pela sociedade civil sobre as RAs. A articulação entre redes nacionais e organizações das RAs periféricas é desigual. O fator articula-se a E6-F01, E6-F04, E3-F10 e E6-F07, e a formação de pesquisadores populares pela PICAPS constitui estratégia para ancorar a mobilização na produção de evidências sobre o território.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E6-F01",
        "E6-F04",
        "E3-F10",
        "E6-F07"
      ],
      "origem": {
        "codigo_documento": "E6-F02",
        "nome_no_documento": "Mobilização de redes e grupos organizados",
        "eixo_documento": 6
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E6-F03": {
      "texto": "As rádios comunitárias no Distrito Federal operam em diversas RAs, como Ceilândia, Samambaia, Planaltina, Brazlândia, São Sebastião e Paranoá, e constituem meio de comunicação local relevante para a população adulta e idosa e para as áreas rurais. Sua capacidade de alcançar públicos com acesso limitado à internet, que incluem parte dos 31,9% de domicílios sem banda larga em 2018 (Codeplan, PDAD 2018), é estratégica para alertas de saúde, como os de dengue, calor extremo e baixa umidade. O registro de rádios comunitárias autorizadas por RA, mantido pelo Ministério das Comunicações e pela Anatel, não foi sistematizado nesta versão. A sustentabilidade financeira dessas emissoras é frágil. O fator articula-se a E2-F37, E6-F11, E4-F09 e E2-F29, e o plano popular pode prever acordos com rádios comunitárias para veiculação regular de informações de vigilância em saúde e de alertas climáticos em linguagem acessível.",
      "fontes_citadas": [
        "Codeplan, PDAD 2018"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2018"
      ],
      "fatores_relacionados": [
        "E2-F37",
        "E6-F11",
        "E4-F09",
        "E2-F29"
      ],
      "origem": {
        "codigo_documento": "E6-F03",
        "nome_no_documento": "Rádios comunitárias",
        "eixo_documento": 6
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E6-F04": {
      "texto": "As parcerias entre instituições públicas, privadas e a sociedade civil no Distrito Federal são favorecidas pela concentração de órgãos federais, universidades, a Fiocruz Brasília, a Embrapa, organismos internacionais e organizações da sociedade civil. A resposta à epidemia de dengue de 2024, com 278.301 casos prováveis e 440 óbitos (SES-DF), mobilizou cooperação entre SES-DF, Ministério da Saúde, Forças Armadas, administrações regionais e comunidades. A gestão de resíduos após o fechamento do lixão da Estrutural envolveu parceria com cooperativas de catadores (SLU). A intersetorialidade, contudo, opera por projetos, sem arquitetura permanente de governança territorial que integre saúde, assistência, meio ambiente, defesa civil e comunidades por RA. Acordos de cooperação em pesquisa, desenvolvimento e inovação entre a SES-DF e instituições de pesquisa são instrumentos para essa integração. O fator articula-se a E6-F07, E4-F06, E2-F32 e E6-F02, e o plano popular deve propor comitês territoriais intersetoriais por região de saúde.",
      "fontes_citadas": [
        "SES-DF",
        "SLU"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2024"
      ],
      "fatores_relacionados": [
        "E6-F07",
        "E4-F06",
        "E2-F32",
        "E6-F02"
      ],
      "origem": {
        "codigo_documento": "E6-F04",
        "nome_no_documento": "Parcerias entre instituições públicas, privadas e com a sociedade civil",
        "eixo_documento": 6
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E6-F05": {
      "texto": "Os mutirões de limpeza no Distrito Federal são realizados por moradores, escolas, igrejas e administrações regionais, e por ações do SLU e da Vigilância Ambiental contra o Aedes aegypti. Sua relevância sanitária ficou evidente na epidemia de dengue de 2024, quando as maiores incidências ocorreram em Brazlândia, Varjão e Santa Maria e os maiores números de casos em Ceilândia, Samambaia e Santa Maria (SES-DF). O entulho próximo a 16,8% dos domicílios em 2021 (IPEDF, PDAD 2021) indica a persistência de pontos de acúmulo de resíduos que favorecem criadouros e animais peçonhentos. Os mutirões tendem a ser episódicos e concentrados em períodos de epidemia, sem continuidade ao longo do ano. O fator articula-se a E2-F35, E2-F07, E1-F27 e E6-F01, e o plano popular pode organizar calendário territorial de mutirões por RA, associado ao levantamento de criadouros, à coleta de entulho e à articulação com cooperativas de reciclagem.",
      "fontes_citadas": [
        "SES-DF",
        "IPEDF, PDAD 2021"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2024",
        "2021"
      ],
      "fatores_relacionados": [
        "E2-F35",
        "E2-F07",
        "E1-F27",
        "E6-F01"
      ],
      "origem": {
        "codigo_documento": "E6-F05",
        "nome_no_documento": "Mutirão de limpeza",
        "eixo_documento": 6
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E6-F06": {
      "texto": "O combate ao crime organizado no Distrito Federal envolve a Polícia Civil, a Polícia Militar, a Polícia Federal e o Ministério Público, com atuação sobre o tráfico de drogas, as fraudes financeiras e a grilagem de terras públicas. A grilagem e o parcelamento irregular do solo são formas de criminalidade organizada específicas do DF, associadas à especulação imobiliária e apontadas como principais vetores do desmatamento de 638 hectares em 2023 (MapBiomas, RAD 2023). A taxa de estelionato de 1.717,0 por 100 mil habitantes em 2025, a segunda maior do país (Anuário Brasileiro de Segurança Pública 2026), indica a presença de redes de fraude digital. O DF registrou a terceira menor taxa de mortes violentas intencionais do país em 2025, 9,6 por 100 mil. O fator articula-se a E4-F16, E2-F27, E1-F20 e E6-F08, e o enfrentamento exige articular fiscalização fundiária, prevenção de golpes e proteção de denunciantes.",
      "fontes_citadas": [
        "MapBiomas, RAD 2023",
        "Anuário Brasileiro de Segurança Pública 2026"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2023",
        "2025",
        "2026"
      ],
      "fatores_relacionados": [
        "E4-F16",
        "E2-F27",
        "E1-F20",
        "E6-F08"
      ],
      "origem": {
        "codigo_documento": "E6-F06",
        "nome_no_documento": "Combate ao crime organizado",
        "eixo_documento": 6
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E6-F07": {
      "texto": "A participação social na tomada de decisão no Distrito Federal é institucionalizada no Conselho de Saúde do DF, nos conselhos regionais de saúde vinculados às sete regiões de saúde, nos conselhos de assistência social, de educação, de meio ambiente, de recursos hídricos e de direitos, e nas conferências distritais. A ausência de eleições para administradores regionais e de câmaras locais limita a representação política das RAs e confere aos conselhos papel central de mediação. A efetividade dessas instâncias depende da representatividade das RAs de renda baixa, do acesso à informação desagregada por território e da capacidade de incidir sobre o orçamento. O acompanhamento dos Relatórios Detalhados do Quadrimestre Anterior pelo Conselho de Saúde, como o que registrou cobertura de APS de 76,69% em 2025 (SES-DF), é exemplo de controle social sobre metas. O fator articula-se a E6-F01, E6-F09, E3-F10 e E1-F19, e a PICAPS contribui ao qualificar a participação com dados por RA.",
      "fontes_citadas": [
        "SES-DF"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2025"
      ],
      "fatores_relacionados": [
        "E6-F01",
        "E6-F09",
        "E3-F10",
        "E1-F19"
      ],
      "origem": {
        "codigo_documento": "E6-F07",
        "nome_no_documento": "Participação social na tomada de decisão responsiva, inclusiva e participativa",
        "eixo_documento": 6
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E6-F08": {
      "texto": "A corrupção afeta a efetividade das políticas públicas no Distrito Federal ao desviar recursos e distorcer prioridades em setores como saúde, obras e ocupação do solo. A destinação de terras públicas, a regularização de parcelamentos irregulares e as contratações emergenciais na saúde, como as realizadas em epidemias, são áreas de risco. Os mecanismos de controle incluem a Controladoria-Geral do DF, o Tribunal de Contas do DF, o Ministério Público do DF e Territórios, a Câmara Legislativa e o controle social. O Tribunal de Contas cobrou da Sedes, em 2026, informações sobre o atendimento à população em situação de rua (Correio da Manhã), exemplo de atuação do controle externo sobre políticas sociais. A aplicação em saúde de 13,03% até o segundo quadrimestre de 2025, abaixo do mínimo de 13,14% (SES-DF), merece acompanhamento. O fator articula-se a E6-F09, E6-F07, E4-F17 e E6-F06, e o plano popular pode propor acompanhamento comunitário das contratações emergenciais.",
      "fontes_citadas": [
        "Correio da Manhã",
        "SES-DF"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2026",
        "2025"
      ],
      "fatores_relacionados": [
        "E6-F09",
        "E6-F07",
        "E4-F17",
        "E6-F06"
      ],
      "origem": {
        "codigo_documento": "E6-F08",
        "nome_no_documento": "Corrupção e suborno (em todos os níveis)",
        "eixo_documento": 6
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E6-F09": {
      "texto": "A transparência ativa no Distrito Federal é exercida pelo Portal da Transparência do DF, pelo InfoSaúde-DF, pelos relatórios quadrimestrais da SES-DF, pelos anuários da SSP-DF, pela PDAD do IPEDF e pelos portais da Caesb, da Adasa e do SLU. O DF realizou receitas de R$ 42,81 bilhões e empenhou despesas de R$ 44,10 bilhões em 2025 (IBGE, finanças públicas), e a SES-DF executou 71,04% da dotação autorizada de R$ 13,21 bilhões até o segundo quadrimestre de 2025 (SES-DF, 2º RDQA 2025). A transparência, contudo, raramente alcança a escala da Região Administrativa: orçamento, investimentos, indicadores de saúde e de risco não são publicados de forma sistemática por RA, como evidenciam as lacunas deste diagnóstico. O fator articula-se a E6-F08, E6-F07, E4-F09 e E1-F19, e o plano popular pode propor painel público com indicadores de saúde, ambiente, risco e investimento por RA.",
      "fontes_citadas": [
        "IBGE, finanças públicas",
        "SES-DF, 2º RDQA 2025"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2025"
      ],
      "fatores_relacionados": [
        "E6-F08",
        "E6-F07",
        "E4-F09",
        "E1-F19"
      ],
      "origem": {
        "codigo_documento": "E6-F09",
        "nome_no_documento": "Instituições públicas e privadas em todos os níveis (transparência ativa)",
        "eixo_documento": 6
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E6-F11": {
      "texto": "Os grupos de mensagens são o principal canal de comunicação comunitária no Distrito Federal, usados por associações de moradores, escolas, igrejas, equipes de saúde, condomínios e redes de vizinhança para avisos, organização de ações e pedidos de ajuda. Na epidemia de dengue de 2024 e na seca de 2024, esses grupos difundiram alertas e orientações com rapidez, mas também informações imprecisas. A alta incidência de estelionato no DF, com 51.457 ocorrências e a segunda maior taxa do país em 2025 (Anuário Brasileiro de Segurança Pública 2026), indica vulnerabilidade a golpes que circulam por esses canais, sobretudo entre idosos. O fator articula-se a E6-F03, E2-F37, E4-F09 e E1-F20, e o plano popular pode estruturar rede de grupos territoriais com pontos focais formados em vigilância em saúde.",
      "fontes_citadas": [
        "Anuário Brasileiro de Segurança Pública 2026"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2024",
        "2025",
        "2026"
      ],
      "fatores_relacionados": [
        "E6-F03",
        "E2-F37",
        "E4-F09",
        "E1-F20"
      ],
      "origem": {
        "codigo_documento": "E6-F11",
        "nome_no_documento": "Comunicação comunitária – grupos de mensagens",
        "eixo_documento": 6
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E6-F15": {
      "texto": "Os grupos de escuta no Distrito Federal, espaços regulares de acolhimento do sofrimento e das necessidades das pessoas, existem nos grupos terapêuticos da APS e dos CAPS, nas práticas integrativas da SES-DF, como a terapia comunitária integrativa, em igrejas, em grupos de mulheres e em coletivos comunitários, sem mapeamento de sua oferta por RA. A relevância do fator é elevada diante do crescimento de 31,1% nos feminicídios e do aumento de todos os crimes contra mulheres em 2025 (Anuário Brasileiro de Segurança Pública 2026), do desemprego mais alto entre pessoas negras e das perdas da epidemia de dengue de 2024. Grupos conduzidos por agentes comunitários, lideranças formadas e profissionais de saúde ampliam o cuidado além dos serviços especializados. O fator articula-se a E2-F18, E6-F16, E3-F02 e E3-F14, e o plano popular pode prever formação de facilitadores comunitários articulada ao matriciamento em saúde mental nas RAs de renda baixa.",
      "fontes_citadas": [
        "Anuário Brasileiro de Segurança Pública 2026"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2025",
        "2026",
        "2024"
      ],
      "fatores_relacionados": [
        "E2-F18",
        "E6-F16",
        "E3-F02",
        "E3-F14"
      ],
      "origem": {
        "codigo_documento": "E6-F15",
        "nome_no_documento": "Grupos de escuta diários",
        "eixo_documento": 6
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E6-F16": {
      "texto": "As igrejas, grupos religiosos e outros coletivos do Distrito Federal desempenham papel relevante no apoio a populações vulneráveis, com distribuição de alimentos, acolhimento de pessoas em situação de rua, apoio a migrantes e cessão de espaços para atividades comunitárias. Sua capilaridade nas RAs periféricas, como Ceilândia, Samambaia, Sol Nascente/Pôr do Sol, SCIA-Estrutural e Itapoã, supera a de muitos serviços públicos e os torna atores estratégicos em emergências, como pontos de abrigo, distribuição de doações e comunicação. Na epidemia de dengue de 2024, espaços religiosos e comunitários foram usados para ações de orientação e mobilização. A ausência de acordos prévios com a Defesa Civil e a Sedes limita sua integração aos planos de contingência. O fator articula-se a E5-F01, E2-F39, E1-F17 e E6-F15, e o plano popular deve prever cooperação que respeite a laicidade do Estado e a autonomia das organizações.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [
        "2024"
      ],
      "fatores_relacionados": [
        "E5-F01",
        "E2-F39",
        "E1-F17",
        "E6-F15"
      ],
      "origem": {
        "codigo_documento": "E6-F16",
        "nome_no_documento": "Igrejas, grupos religiosos e outros coletivos que apoiam as situações de emergência",
        "eixo_documento": 6
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    }
  },
  "fatores_sem_diagnostico": [],
  "pendentes_validacao": []
};
