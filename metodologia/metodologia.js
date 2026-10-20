/*
 * CADASTRO METODOLÓGICO CENTRAL
 * Matriz de Fatores Territoriais - 6 Eixos Estratégicos
 *
 * Arquivo gerado por metodologia/ferramentas/gerar_metodologia.py a partir da
 * planilha oficial (metodologia/planilha/Fatores_organizacao.xlsx) e de
 * metodologia/registro.json. Não edite à mão: altere a planilha ou o registro
 * e gere novamente.
 *
 * Compartilhado por todos os territórios. Não contém diagnósticos: estes
 * ficam nos arquivos de cada território e se ligam aos fatores pelo "id".
 * Um id nunca muda e nunca é reaproveitado; fatores retirados ficam em
 * "desativados". O código do ícone não identifica o fator.
 *
 * Títulos e cores dos eixos também estão desenhados na roda SVG do
 * index.html (o teste testes/validar-metodologia.js acusa divergências).
 */
window.METODOLOGIA = {
  "nome": "Matriz de Fatores Territoriais - 6 Eixos Estratégicos",
  "versao": "2.0.0",
  "data_versao": "2026-10-19",
  "fonte": "metodologia/planilha/Fatores_organizacao.xlsx",
  "formato_id_fator": "E<ordem do eixo>-F<número do fator, dois dígitos>; o número não muda e não é reaproveitado",
  "decisoes": [
    {
      "data": "2026-10-19",
      "decisao": "A planilha metodologia/planilha/Fatores_organizacao.xlsx é a fonte oficial da metodologia. O cadastro metodologia/metodologia.js é gerado a partir dela e não deve ser editado à mão. A versão 2.0.0, com 150 fatores, é a versão final definida pela coordenação após a revisão das semelhanças entre fatores; as versões anteriores foram eliminadas."
    },
    {
      "data": "2026-10-19",
      "decisao": "Os códigos de ícone compartilhados (03.09 em E2-F11 e E5-F02; 03.11 em E2-F13 e E2-F14) permanecem até a conclusão dos novos ícones pela equipe de design da Fiocruz."
    },
    {
      "data": "2026-10-19",
      "decisao": "O termo ensino primário em E5-F04 permanece, apesar da adoção de ensino fundamental pela LDB de 1996."
    },
    {
      "data": "2026-10-19",
      "decisao": "Nomes de fatores usam maiúscula só na primeira palavra, em siglas, em nomes institucionais (Estado) e nos pares separados por barra (Tornado/Vendaval, Seca/Estiagem, Queimada/Incêndio). Separador interno dos nomes: travessão curto."
    },
    {
      "data": "2026-10-19",
      "decisao": "A classificação ODS dos fatores cujo código de ícone tem numeração diferente do ODS permanece como está, sem definição por ora."
    }
  ],
  "desativados": [
    {
      "id": "E2-F24",
      "fator": "Gestão de riscos e emergências",
      "versao": "2.0.0"
    },
    {
      "id": "E3-F15",
      "fator": "Acesso a direitos fundamentais",
      "versao": "2.0.0",
      "observacao": "A definição deste fator passou a ser a definição de E3-F08 Direitos fundamentais."
    },
    {
      "id": "E4-F23",
      "fator": "Recursos financeiros para conservação sustentável da biodiversidade",
      "versao": "2.0.0"
    },
    {
      "id": "E5-F07",
      "fator": "Tecnologias de informação e comunicação",
      "versao": "2.0.0",
      "observacao": "O nome, o ícone e a definição deste fator passaram para E5-F21."
    },
    {
      "id": "E5-F31",
      "fator": "Acesso a comunicação (internet e telefonia)",
      "versao": "2.0.0"
    },
    {
      "id": "E6-F10",
      "fator": "Tomada de decisão responsiva, inclusiva e participativa (participação social)",
      "versao": "2.0.0"
    },
    {
      "id": "E6-F12",
      "fator": "Parcerias multissetoriais",
      "versao": "2.0.0"
    },
    {
      "id": "E6-F13",
      "fator": "Apoio a instituições públicas, privadas e com a sociedade civil (parcerias sociotécnicas)",
      "versao": "2.0.0"
    },
    {
      "id": "E6-F14",
      "fator": "Estratégias de mobilização (redes e grupos organizados)",
      "versao": "2.0.0"
    }
  ],
  "eixos": [
    {
      "id": "E1",
      "id_original": "Eixo 1",
      "ordem": 1,
      "titulo": "O Suor que não nos Sustenta",
      "foco": "Trabalho, renda, economia solidária e agricultura familiar",
      "cor": "#F0871E",
      "fatores": [
        {
          "id": "E1-F01",
          "ordem": 1,
          "fator": "Cuidado com crianças e grupos vulneráveis",
          "icone": "01.03",
          "ods": 1,
          "nome_ods": "ODS 01 – ERRADICAÇÃO DA POBREZA",
          "definicao": "Atenção e proteção para crianças, idosos e outras pessoas que precisam de mais ajuda para viver com segurança."
        },
        {
          "id": "E1-F02",
          "ordem": 2,
          "fator": "Alimentos",
          "icone": "02.01",
          "ods": 2,
          "nome_ods": "ODS 02 – FOME ZERO E AGRICULTURA SUSTENTÁVEL",
          "definicao": "Ter comida que não faz mal à saúde e em quantidade que mate a fome todos os dias."
        },
        {
          "id": "E1-F03",
          "ordem": 3,
          "fator": "Agricultura familiar",
          "icone": "02.03",
          "ods": 2,
          "nome_ods": "ODS 02 – FOME ZERO E AGRICULTURA SUSTENTÁVEL",
          "definicao": "Plantações feitas por famílias, que são quem mais produz a comida que chega à nossa mesa."
        },
        {
          "id": "E1-F04",
          "ordem": 4,
          "fator": "Produção de alimentos – hortas, hortos, quintais e outros que produzem alimentos",
          "icone": "02.04",
          "ods": 2,
          "nome_ods": "ODS 02 – FOME ZERO E AGRICULTURA SUSTENTÁVEL",
          "definicao": "As pessoas plantam alimentos seguros, livres de venenos, como também plantas medicinais em pequenos espaços, como quintais, escolas ou terrenos comunitários."
        },
        {
          "id": "E1-F05",
          "ordem": 5,
          "fator": "Produção orgânica",
          "icone": "02.08",
          "ods": 2,
          "nome_ods": "ODS 02 – FOME ZERO E AGRICULTURA SUSTENTÁVEL",
          "definicao": "Alimentos plantados de forma natural, sem usar venenos para matar as pragas e os bichos no mato."
        },
        {
          "id": "E1-F06",
          "ordem": 6,
          "fator": "Disponibilidade de alimentos",
          "icone": "02.11",
          "ods": 2,
          "nome_ods": "ODS 02 – FOME ZERO E AGRICULTURA SUSTENTÁVEL",
          "definicao": "Ter comida suficiente para comprar ou colher na região, para que ninguém fique sem o que comer e nem pague caro pela comida."
        },
        {
          "id": "E1-F07",
          "ordem": 7,
          "fator": "Trabalho de assistência e doméstico não remunerado",
          "icone": "05.04",
          "ods": 5,
          "nome_ods": "ODS 05 – IGUALDADE DE GÊNERO",
          "definicao": "Tarefas como cuidar da casa, dos filhos ou de parentes doentes, feitas principalmente por mulheres sem receber por isso."
        },
        {
          "id": "E1-F08",
          "ordem": 8,
          "fator": "Geração de emprego e renda",
          "icone": "08.02",
          "ods": 8,
          "nome_ods": "ODS 08 – TRABALHO DECENTE E CRESCIMENTO ECONÔMICO",
          "definicao": "Criar novos postos de trabalho e chances para as pessoas ganharem dinheiro."
        },
        {
          "id": "E1-F09",
          "ordem": 9,
          "fator": "Empreendedorismo solidário, criatividade e inovação",
          "icone": "08.03",
          "ods": 8,
          "nome_ods": "ODS 08 – TRABALHO DECENTE E CRESCIMENTO ECONÔMICO",
          "definicao": "Apoio para quem quer abrir seu próprio negócio ou inventar um jeito novo de resolver um problema."
        },
        {
          "id": "E1-F10",
          "ordem": 10,
          "fator": "Formalização de emprego (CLT, MEI, ECOSOL)",
          "icone": "08.04",
          "ods": 8,
          "nome_ods": "ODS 08 – TRABALHO DECENTE E CRESCIMENTO ECONÔMICO",
          "definicao": "Ter a carteira de trabalho assinada ou a empresa legalizada para ter garantias como aposentadoria e auxílio-doença."
        },
        {
          "id": "E1-F11",
          "ordem": 11,
          "fator": "Iniciativas de economia solidária",
          "icone": "08.06",
          "ods": 8,
          "nome_ods": "ODS 08 – TRABALHO DECENTE E CRESCIMENTO ECONÔMICO",
          "definicao": "Formas de trabalho e produção em que as pessoas se unem para gerar renda de maneira coletiva, justa e igualitária."
        },
        {
          "id": "E1-F12",
          "ordem": 12,
          "fator": "Disponibilidade de emprego",
          "icone": "08.08",
          "ods": 8,
          "nome_ods": "ODS 08 – TRABALHO DECENTE E CRESCIMENTO ECONÔMICO",
          "definicao": "Existência de vagas de trabalho na região para quem quer e precisa trabalhar."
        },
        {
          "id": "E1-F13",
          "ordem": 13,
          "fator": "Desemprego",
          "icone": "08.09",
          "ods": 8,
          "nome_ods": "ODS 08 – TRABALHO DECENTE E CRESCIMENTO ECONÔMICO",
          "definicao": "Falta de trabalho para quem quer e precisa trabalhar. Aumenta a pobreza e os problemas sociais."
        },
        {
          "id": "E1-F14",
          "ordem": 14,
          "fator": "Trabalho infantil",
          "icone": "08.11",
          "ods": 8,
          "nome_ods": "ODS 08 – TRABALHO DECENTE E CRESCIMENTO ECONÔMICO",
          "definicao": "É quando obrigam as crianças a trabalhar, o que é proibido, e tira delas o tempo de brincar e estudar, mantendo elas na pobreza."
        },
        {
          "id": "E1-F15",
          "ordem": 15,
          "fator": "Trabalho em condições análogas às de escravidão",
          "icone": "08.12",
          "ods": 8,
          "nome_ods": "ODS 08 – TRABALHO DECENTE E CRESCIMENTO ECONÔMICO",
          "definicao": "É quando obrigam alguém a trabalhar sem liberdade e em condições muito ruins, o que é crime."
        },
        {
          "id": "E1-F16",
          "ordem": 16,
          "fator": "Ambientes de trabalho seguros",
          "icone": "08.14",
          "ods": 8,
          "nome_ods": "ODS 08 – TRABALHO DECENTE E CRESCIMENTO ECONÔMICO",
          "definicao": "Locais de trabalho sem riscos à saúde e com boas condições. Protege a vida e o bem-estar dos trabalhadores."
        },
        {
          "id": "E1-F17",
          "ordem": 17,
          "fator": "Ações solidárias locais",
          "icone": "08.16",
          "ods": 8,
          "nome_ods": "ODS 08 – TRABALHO DECENTE E CRESCIMENTO ECONÔMICO",
          "definicao": "Ajuda entre vizinhos e grupos da comunidade, como doação de alimentos e apoio a quem está passando dificuldade."
        },
        {
          "id": "E1-F18",
          "ordem": 18,
          "fator": "Condições de trabalho",
          "icone": "08.17",
          "ods": 8,
          "nome_ods": "ODS 08 – TRABALHO DECENTE E CRESCIMENTO ECONÔMICO",
          "definicao": "O jeito e o ambiente em que a pessoa trabalha: horários, segurança, salário e respeito no dia a dia."
        },
        {
          "id": "E1-F19",
          "ordem": 19,
          "fator": "Promoção de políticas de investimento local",
          "icone": "08.18",
          "ods": 8,
          "nome_ods": "ODS 08 – TRABALHO DECENTE E CRESCIMENTO ECONÔMICO",
          "definicao": "Apoiar projetos que fortaleçam a economia da comunidade."
        },
        {
          "id": "E1-F20",
          "ordem": 20,
          "fator": "Acesso a serviços bancários",
          "icone": "08.21",
          "ods": 8,
          "nome_ods": "ODS 08 – TRABALHO DECENTE E CRESCIMENTO ECONÔMICO",
          "definicao": "Permitir que todos possam ter conta, crédito e financiamento."
        },
        {
          "id": "E1-F21",
          "ordem": 21,
          "fator": "Industrialização inclusiva e sustentável",
          "icone": "09.02",
          "ods": 9,
          "nome_ods": "ODS 09 – INDÚSTRIA, INOVAÇÃO E INFRAESTRUTURA",
          "definicao": "Desenvolvimento da indústria com inclusão social e respeito ao meio ambiente."
        },
        {
          "id": "E1-F22",
          "ordem": 22,
          "fator": "Crédito para micro, pequenas empresas e cooperativas",
          "icone": "09.04",
          "ods": 9,
          "nome_ods": "ODS 09 – INDÚSTRIA, INOVAÇÃO E INFRAESTRUTURA",
          "definicao": "Empréstimo de dinheiro com juros baixos para ajudar o pequeno comerciante ou produtor a melhorar seu negócio."
        },
        {
          "id": "E1-F23",
          "ordem": 23,
          "fator": "Atividades econômicas sustentáveis",
          "icone": "09.05",
          "ods": 9,
          "nome_ods": "ODS 09 – INDÚSTRIA, INOVAÇÃO E INFRAESTRUTURA",
          "definicao": "Produção que respeita os limites ambientais. Garante crescimento sem comprometer os recursos naturais."
        },
        {
          "id": "E1-F24",
          "ordem": 24,
          "fator": "Cobrança de preços abusivos por itens básicos",
          "icone": "10.01",
          "ods": 10,
          "nome_ods": "ODS 10 – REDUÇÃO DAS DESIGUALDADES",
          "definicao": "Quando cobram muito caro por coisas essenciais, como comida, água e remédios, principalmente em momentos de crise."
        },
        {
          "id": "E1-F25",
          "ordem": 25,
          "fator": "Regulamentação e monitoramento dos mercados e instituições (monopólios e preço justo)",
          "icone": "10.08",
          "ods": 10,
          "nome_ods": "ODS 10 – REDUÇÃO DAS DESIGUALDADES",
          "definicao": "Regras que asseguram concorrência justa e preços acessíveis. Evita abusos econômicos e protege o consumidor."
        },
        {
          "id": "E1-F26",
          "ordem": 26,
          "fator": "Sistemas sustentáveis de produção de alimentos",
          "icone": "12.01",
          "ods": 12,
          "nome_ods": "ODS 12 – CONSUMO E PRODUÇÃO RESPONSÁVEIS",
          "definicao": "Produção e consumo de alimentos que respeitem o meio ambiente e garantam segurança alimentar."
        },
        {
          "id": "E1-F27",
          "ordem": 27,
          "fator": "Economia circular",
          "icone": "12.10",
          "ods": 12,
          "nome_ods": "ODS 12 – CONSUMO E PRODUÇÃO RESPONSÁVEIS",
          "definicao": "Modelo econômico baseado em reutilizar, renovar e reciclar."
        },
        {
          "id": "E1-F28",
          "ordem": 28,
          "fator": "Trabalho informal",
          "icone": "16.05",
          "ods": 8,
          "nome_ods": "ODS 08 – TRABALHO DECENTE E CRESCIMENTO ECONÔMICO",
          "definicao": "Trabalho sem vínculo empregatício, sem carteira de trabalho e sem direitos como férias, 13º, FGTS e INSS."
        },
        {
          "id": "E1-F29",
          "ordem": 29,
          "fator": "Crédito para adaptação climática e reconstrução",
          "icone": "18.09",
          "ods": 13,
          "nome_ods": "ODS 13 – AÇÃO CONTRA A MUDANÇA GLOBAL DO CLIMA",
          "definicao": "Empréstimo de dinheiro para as pessoas se prepararem para os efeitos do clima ou reconstruírem o que perderam em desastres."
        }
      ]
    },
    {
      "id": "E2",
      "id_original": "Eixo 2",
      "ordem": 2,
      "titulo": "A Vida em Risco",
      "foco": "Saúde, corpo político, saneamento e adoecimento social",
      "cor": "#E2211C",
      "fatores": [
        {
          "id": "E2-F01",
          "ordem": 1,
          "fator": "Área inundada",
          "icone": "01.07",
          "ods": 13,
          "nome_ods": "ODS 13 – AÇÃO CONTRA A MUDANÇA GLOBAL DO CLIMA",
          "definicao": "Lugar que fica coberto pela água quando o rio sobe ou a chuva é muito forte."
        },
        {
          "id": "E2-F02",
          "ordem": 2,
          "fator": "Insegurança alimentar",
          "icone": "02.02",
          "ods": 2,
          "nome_ods": "ODS 02 – FOME ZERO E AGRICULTURA SUSTENTÁVEL",
          "definicao": "É quando uma pessoa não consegue se alimentar bem, não consome os nutrientes de que o corpo precisa para crescer e se manter saudável."
        },
        {
          "id": "E2-F03",
          "ordem": 3,
          "fator": "Mortalidade materna",
          "icone": "03.01",
          "ods": 3,
          "nome_ods": "ODS 03 – SAÚDE E BEM ESTAR",
          "definicao": "Quando mulheres morrem durante a gravidez, parto ou logo depois."
        },
        {
          "id": "E2-F04",
          "ordem": 4,
          "fator": "Mortalidade neonatal",
          "icone": "03.02",
          "ods": 3,
          "nome_ods": "ODS 03 – SAÚDE E BEM ESTAR",
          "definicao": "Morte de bebês com até 28 dias de vida."
        },
        {
          "id": "E2-F05",
          "ordem": 5,
          "fator": "Mortalidade infantil",
          "icone": "03.03",
          "ods": 3,
          "nome_ods": "ODS 03 – SAÚDE E BEM ESTAR",
          "definicao": "Morte de crianças antes de completarem 1 ano."
        },
        {
          "id": "E2-F06",
          "ordem": 6,
          "fator": "Doenças decorrentes de contaminação e poluição do ar, da água e do solo",
          "icone": "03.04",
          "ods": 3,
          "nome_ods": "ODS 03 – SAÚDE E BEM ESTAR",
          "definicao": "Doenças causadas pela poluição, como problemas respiratórios, diarreias, vermes e outras intoxicações."
        },
        {
          "id": "E2-F07",
          "ordem": 7,
          "fator": "Dengue",
          "icone": "03.05",
          "ods": 3,
          "nome_ods": "ODS 03 – SAÚDE E BEM ESTAR",
          "definicao": "Doença causada por um vírus que o mosquito espalha, geralmente onde há acúmulo de água ou falta de limpeza."
        },
        {
          "id": "E2-F08",
          "ordem": 8,
          "fator": "Doenças transmissíveis (AIDS, tuberculose, hanseníase, negligenciadas)",
          "icone": "03.06",
          "ods": 3,
          "nome_ods": "ODS 03 – SAÚDE E BEM ESTAR",
          "definicao": "Doenças que passam de uma pessoa para outra, como a gripe ou a tuberculose."
        },
        {
          "id": "E2-F09",
          "ordem": 9,
          "fator": "Doenças não transmissíveis (crônicas)",
          "icone": "03.07",
          "ods": 3,
          "nome_ods": "ODS 03 – SAÚDE E BEM ESTAR",
          "definicao": "Doenças que não passam de uma pessoa para outra, como a pressão alta, o diabetes ou problemas do coração."
        },
        {
          "id": "E2-F10",
          "ordem": 10,
          "fator": "Uso de drogas e álcool",
          "icone": "03.08",
          "ods": 3,
          "nome_ods": "ODS 03 – SAÚDE E BEM ESTAR",
          "definicao": "Quando o uso de álcool, cigarro ou drogas prejudica a saúde do corpo, da mente e a convivência com os outros."
        },
        {
          "id": "E2-F11",
          "ordem": 11,
          "fator": "Acidentes em estradas",
          "icone": "03.09",
          "ods": 3,
          "nome_ods": "ODS 03 – SAÚDE E BEM ESTAR",
          "definicao": "Colisões, batidas e atropelamentos que causam ferimentos ou mortes."
        },
        {
          "id": "E2-F12",
          "ordem": 12,
          "fator": "Saúde sexual e reprodutiva",
          "icone": "03.10",
          "ods": 3,
          "nome_ods": "ODS 03 – SAÚDE E BEM ESTAR",
          "definicao": "Cuidados com o corpo, prevenção de doenças, acesso a absorvente, acesso a anticoncepcionais e o direito de decidir, com segurança, se quer ou não ter filhos."
        },
        {
          "id": "E2-F13",
          "ordem": 13,
          "fator": "Acesso a medicamentos",
          "icone": "03.11",
          "ods": 3,
          "nome_ods": "ODS 03 – SAÚDE E BEM ESTAR",
          "definicao": "Poder conseguir os remédios de que se precisa, de graça ou por um preço que dá para pagar."
        },
        {
          "id": "E2-F14",
          "ordem": 14,
          "fator": "Cobertura vacinal",
          "icone": "03.11",
          "ods": 3,
          "nome_ods": "ODS 03 – SAÚDE E BEM ESTAR",
          "definicao": "Quem precisa de vacina e consegue ser vacinado. Quantidade de pessoas que tomaram as vacinas. Quanto mais gente vacinada, mais protegida fica a comunidade."
        },
        {
          "id": "E2-F15",
          "ordem": 15,
          "fator": "Serviços de saúde",
          "icone": "03.16",
          "ods": 3,
          "nome_ods": "ODS 03 – SAÚDE E BEM ESTAR",
          "definicao": "Ter hospitais, postos de saúde, remédios e vacinas ao alcance de todos. Salva vidas e evita doenças."
        },
        {
          "id": "E2-F16",
          "ordem": 16,
          "fator": "Profissionais de saúde",
          "icone": "03.17",
          "ods": 3,
          "nome_ods": "ODS 03 – SAÚDE E BEM ESTAR",
          "definicao": "São todas as pessoas que trabalham cuidando da nossa saúde, como médicos, enfermeiros e agentes de saúde."
        },
        {
          "id": "E2-F17",
          "ordem": 17,
          "fator": "Tornado/Vendaval",
          "icone": "03.18",
          "ods": 13,
          "nome_ods": "ODS 13 – AÇÃO CONTRA A MUDANÇA GLOBAL DO CLIMA",
          "definicao": "Ventos muito fortes que podem destruir casas, derrubar árvores e postes e machucar ou matar as pessoas."
        },
        {
          "id": "E2-F18",
          "ordem": 18,
          "fator": "Saúde mental",
          "icone": "03.19",
          "ods": 3,
          "nome_ods": "ODS 03 – SAÚDE E BEM ESTAR",
          "definicao": "Existe o cuidado com os sentimentos e com o pensamento para que a pessoa consiga viver e trabalhar bem."
        },
        {
          "id": "E2-F19",
          "ordem": 19,
          "fator": "Saúde do idoso",
          "icone": "03.20",
          "ods": 3,
          "nome_ods": "ODS 03 – SAÚDE E BEM ESTAR",
          "definicao": "Existe atendimento especial para quem é mais velho, garantindo que eles tenham saúde e autonomia."
        },
        {
          "id": "E2-F20",
          "ordem": 20,
          "fator": "Acesso à água e saneamento",
          "icone": "06.01",
          "ods": 6,
          "nome_ods": "ODS 06 – ÁGUA POTÁVEL E SANEAMENTO",
          "definicao": "Ter água limpa na torneira e canos que levam a sujeira de casa embora para ser tratada, sem poluir os rios."
        },
        {
          "id": "E2-F21",
          "ordem": 21,
          "fator": "Contaminação e poluição do ar, da água e do solo",
          "icone": "06.02",
          "ods": 6,
          "nome_ods": "ODS 06 – ÁGUA POTÁVEL E SANEAMENTO",
          "definicao": "Quando lixo, esgoto ou produtos tóxicos sujam a água, o solo ou o ar."
        },
        {
          "id": "E2-F22",
          "ordem": 22,
          "fator": "Participação das comunidades locais na gestão da água e saneamento",
          "icone": "06.04",
          "ods": 6,
          "nome_ods": "ODS 06 – ÁGUA POTÁVEL E SANEAMENTO",
          "definicao": "Envolver os moradores nas decisões sobre o uso e cuidado da água e do esgoto."
        },
        {
          "id": "E2-F23",
          "ordem": 23,
          "fator": "Gestão da água e saneamento",
          "icone": "06.06",
          "ods": 6,
          "nome_ods": "ODS 06 – ÁGUA POTÁVEL E SANEAMENTO",
          "definicao": "Controlar como a água é usada em casas, indústrias, plantações e evitar a falta. Garante água para todos, mesmo em tempos de seca."
        },
        {
          "id": "E2-F25",
          "ordem": 24,
          "fator": "Qualidade do ar",
          "icone": "11.06",
          "ods": 11,
          "nome_ods": "ODS 11 – CIDADES E COMUNIDADES SUSTENTÁVEIS",
          "definicao": "Controle da poluição atmosférica nas cidades. Evita doenças respiratórias e melhora o bem-estar."
        },
        {
          "id": "E2-F26",
          "ordem": 25,
          "fator": "Rota de fuga",
          "icone": "11.08",
          "ods": 13,
          "nome_ods": "ODS 13 – AÇÃO CONTRA A MUDANÇA GLOBAL DO CLIMA",
          "definicao": "Caminho seguro para as pessoas saírem rápido de um lugar em caso de perigo, como enchente ou deslizamento."
        },
        {
          "id": "E2-F27",
          "ordem": 26,
          "fator": "Segurança",
          "icone": "11.10",
          "ods": 11,
          "nome_ods": "ODS 11 – CIDADES E COMUNIDADES SUSTENTÁVEIS",
          "definicao": "Policiamento e delegacias. Redução da violência e promoção da paz e proteção na comunidade."
        },
        {
          "id": "E2-F28",
          "ordem": 27,
          "fator": "Violência",
          "icone": "11.13",
          "ods": 11,
          "nome_ods": "ODS 11 – CIDADES E COMUNIDADES SUSTENTÁVEIS",
          "definicao": "Atos que machucam o corpo ou a mente das pessoas e que tiram a paz de toda a comunidade."
        },
        {
          "id": "E2-F29",
          "ordem": 28,
          "fator": "Comunicação e gestão pós-desastre",
          "icone": "11.14",
          "ods": 11,
          "nome_ods": "ODS 11 – CIDADES E COMUNIDADES SUSTENTÁVEIS",
          "definicao": "Avisar, organizar e ajudar as pessoas depois de um desastre, para que ninguém fique sem informação e socorro."
        },
        {
          "id": "E2-F30",
          "ordem": 29,
          "fator": "Seca/Estiagem",
          "icone": "12.04",
          "ods": 13,
          "nome_ods": "ODS 13 – AÇÃO CONTRA A MUDANÇA GLOBAL DO CLIMA",
          "definicao": "Período longo sem chuva, que faz faltar água para beber, cozinhar e plantar."
        },
        {
          "id": "E2-F31",
          "ordem": 30,
          "fator": "Acesso a serviços essenciais de energia, abastecimento de água, coleta de lixo etc.",
          "icone": "12.08",
          "ods": 6,
          "nome_ods": "ODS 06 – ÁGUA POTÁVEL E SANEAMENTO",
          "definicao": "Ter em casa os serviços básicos, como luz, água encanada e caminhão que recolhe o lixo."
        },
        {
          "id": "E2-F32",
          "ordem": 31,
          "fator": "Gestão de riscos e emergências (defesa civil, bombeiros, brigadas e outros coletivos)",
          "icone": "13.01",
          "ods": 13,
          "nome_ods": "ODS 13 – AÇÃO CONTRA A MUDANÇA GLOBAL DO CLIMA",
          "definicao": "Trabalho da defesa civil, bombeiros e grupos da comunidade para evitar desastres e socorrer as pessoas quando algo acontece."
        },
        {
          "id": "E2-F33",
          "ordem": 32,
          "fator": "Pontos de riscos e desastres no território",
          "icone": "13.02",
          "ods": 13,
          "nome_ods": "ODS 13 – AÇÃO CONTRA A MUDANÇA GLOBAL DO CLIMA",
          "definicao": "Locais onde há mais chance de enchentes, deslizamentos ou outras situações perigosas."
        },
        {
          "id": "E2-F34",
          "ordem": 33,
          "fator": "Enchentes e alagamentos",
          "icone": "14.01",
          "ods": 13,
          "nome_ods": "ODS 13 – AÇÃO CONTRA A MUDANÇA GLOBAL DO CLIMA",
          "definicao": "Quando a chuva forte ou a cheia do rio faz a água invadir ruas e casas."
        },
        {
          "id": "E2-F35",
          "ordem": 34,
          "fator": "Infestações e pragas (mosquito, carrapato, escorpião, animais peçonhentos etc.)",
          "icone": "14.06",
          "ods": 3,
          "nome_ods": "ODS 03 – SAÚDE E BEM ESTAR",
          "definicao": "Quando bichos como mosquitos, escorpiões e carrapatos aparecem em grande quantidade e colocam a saúde das pessoas em risco."
        },
        {
          "id": "E2-F36",
          "ordem": 35,
          "fator": "Pontos de deslizamento de terra",
          "icone": "15.04",
          "ods": 13,
          "nome_ods": "ODS 13 – AÇÃO CONTRA A MUDANÇA GLOBAL DO CLIMA",
          "definicao": "Lugares onde o barro e as pedras podem escorregar morro abaixo, principalmente quando chove muito."
        },
        {
          "id": "E2-F37",
          "ordem": 36,
          "fator": "Sirenes e alertas de emergências",
          "icone": "16.11",
          "ods": 13,
          "nome_ods": "ODS 13 – AÇÃO CONTRA A MUDANÇA GLOBAL DO CLIMA",
          "definicao": "Sinais sonoros ou visuais para avisar que há um perigo iminente por perto e que você precisa se proteger rápido."
        },
        {
          "id": "E2-F38",
          "ordem": 37,
          "fator": "Queimada/Incêndio",
          "icone": "16.13",
          "ods": 13,
          "nome_ods": "ODS 13 – AÇÃO CONTRA A MUDANÇA GLOBAL DO CLIMA",
          "definicao": "Fogo que se espalha no mato, em plantações ou em casas, destruindo a natureza e colocando vidas em perigo."
        },
        {
          "id": "E2-F39",
          "ordem": 38,
          "fator": "Ponto de encontro em emergências",
          "icone": "18.02",
          "ods": 13,
          "nome_ods": "ODS 13 – AÇÃO CONTRA A MUDANÇA GLOBAL DO CLIMA",
          "definicao": "Lugar combinado onde as pessoas devem se reunir em segurança quando acontece um desastre."
        }
      ]
    },
    {
      "id": "E3",
      "id_original": "Eixo 3",
      "ordem": 3,
      "titulo": "Nossos Corpos Silenciados",
      "foco": "Gênero, raça, direitos fundamentais e empoderamento",
      "cor": "#7A2C8E",
      "fatores": [
        {
          "id": "E3-F01",
          "ordem": 1,
          "fator": "Pobreza",
          "icone": "01.01",
          "ods": 1,
          "nome_ods": "ODS 01 – ERRADICAÇÃO DA POBREZA",
          "definicao": "É a falta de dinheiro e de condições básicas de vida, o que impede a pessoa de ter uma vida digna e boas oportunidades."
        },
        {
          "id": "E3-F02",
          "ordem": 2,
          "fator": "Discriminação e violência contra mulheres e meninas",
          "icone": "05.01",
          "ods": 5,
          "nome_ods": "ODS 05 – IGUALDADE DE GÊNERO",
          "definicao": "Tratar alguém mal ou de forma injusta pelo simples fato de ela ser mulher."
        },
        {
          "id": "E3-F03",
          "ordem": 3,
          "fator": "Casamentos prematuros, forçados e de crianças",
          "icone": "05.03",
          "ods": 5,
          "nome_ods": "ODS 05 – IGUALDADE DE GÊNERO",
          "definicao": "Quando adolescentes ou crianças são obrigados a casar contra a vontade ou antes de terem idade para decidir."
        },
        {
          "id": "E3-F04",
          "ordem": 4,
          "fator": "Igualdade de oportunidades para promover o empoderamento das mulheres",
          "icone": "05.05",
          "ods": 5,
          "nome_ods": "ODS 05 – IGUALDADE DE GÊNERO",
          "definicao": "Garantir que mulheres e homens tenham as mesmas chances na vida, no trabalho, na comunidade e na política."
        },
        {
          "id": "E3-F05",
          "ordem": 5,
          "fator": "Propriedade e controle sobre a terra para as mulheres",
          "icone": "05.08",
          "ods": 5,
          "nome_ods": "ODS 05 – IGUALDADE DE GÊNERO",
          "definicao": "Direito das mulheres de possuir e administrar terras e bens."
        },
        {
          "id": "E3-F06",
          "ordem": 6,
          "fator": "Ação do Estado na coordenação e coerência de políticas para igualdade de gênero",
          "icone": "05.12",
          "ods": 5,
          "nome_ods": "ODS 05 – IGUALDADE DE GÊNERO",
          "definicao": "Quando o governo cria e faz cumprir políticas que fazem com que as mulheres tenham as mesmas chances que os homens têm na vida, no trabalho, na comunidade e na política."
        },
        {
          "id": "E3-F07",
          "ordem": 7,
          "fator": "Tráfico de pessoas",
          "icone": "08.13",
          "ods": 8,
          "nome_ods": "ODS 08 – TRABALHO DECENTE E CRESCIMENTO ECONÔMICO",
          "definicao": "O crime de enganar ou levar pessoas para longe de casa para usá-las em trabalhos forçados ou exploração."
        },
        {
          "id": "E3-F08",
          "ordem": 8,
          "fator": "Direitos fundamentais",
          "icone": "08.15",
          "ods": 8,
          "nome_ods": "ODS 08 – TRABALHO DECENTE E CRESCIMENTO ECONÔMICO",
          "definicao": "Garantir que todos tenham o básico previsto em lei, como saúde, educação, moradia e documentos."
        },
        {
          "id": "E3-F09",
          "ordem": 9,
          "fator": "Monitoramento dos vulneráveis (idosos, PCDs e crianças)",
          "icone": "08.24",
          "ods": 10,
          "nome_ods": "ODS 10 – REDUÇÃO DAS DESIGUALDADES",
          "definicao": "Acompanhar de perto idosos, crianças e pessoas com deficiência para garantir que estejam bem e protegidos."
        },
        {
          "id": "E3-F10",
          "ordem": 10,
          "fator": "Empoderamento e inclusão social, econômica e política",
          "icone": "10.02",
          "ods": 10,
          "nome_ods": "ODS 10 – REDUÇÃO DAS DESIGUALDADES",
          "definicao": "Garantia de que todas as pessoas tenham voz, acesso a recursos e participação nas decisões."
        },
        {
          "id": "E3-F11",
          "ordem": 11,
          "fator": "Acessibilidade e inclusão",
          "icone": "10.04",
          "ods": 10,
          "nome_ods": "ODS 10 – REDUÇÃO DAS DESIGUALDADES",
          "definicao": "Garantir que pessoas com deficiência possam entrar, circular e participar de tudo, sem barreiras."
        },
        {
          "id": "E3-F12",
          "ordem": 12,
          "fator": "Serviços públicos e políticas de proteção social",
          "icone": "10.07",
          "ods": 10,
          "nome_ods": "ODS 10 – REDUÇÃO DAS DESIGUALDADES",
          "definicao": "É a ajuda que o governo dá, como postos de saúde e assistência social, para diminuir a situação de risco ou fragilidade das pessoas."
        },
        {
          "id": "E3-F13",
          "ordem": 13,
          "fator": "Migração",
          "icone": "10.10",
          "ods": 10,
          "nome_ods": "ODS 10 – REDUÇÃO DAS DESIGUALDADES",
          "definicao": "Deslocamento de pessoas entre regiões ou países por trabalho, refúgio ou oportunidades."
        },
        {
          "id": "E3-F14",
          "ordem": 14,
          "fator": "Acolhimento de vulneráveis e população em situação de rua",
          "icone": "12.09",
          "ods": 10,
          "nome_ods": "ODS 10 – REDUÇÃO DAS DESIGUALDADES",
          "definicao": "Oferecer abrigo, comida e cuidado para quem vive na rua ou está em situação de fragilidade."
        },
        {
          "id": "E3-F16",
          "ordem": 15,
          "fator": "Discriminação racial",
          "icone": "18.01",
          "ods": 18,
          "nome_ods": "ODS 18 – IGUALDADE ÉTNICO-RACIAL",
          "definicao": "Tratar alguém mal ou de forma injusta por causa da cor da pele ou da sua origem."
        },
        {
          "id": "E3-F17",
          "ordem": 16,
          "fator": "Racismo ambiental",
          "icone": "18.06",
          "ods": 18,
          "nome_ods": "ODS 18 – IGUALDADE ÉTNICO-RACIAL",
          "definicao": "Quando os problemas do meio ambiente, como lixo e enchentes, atingem mais os bairros onde vivem pessoas negras, indígenas e pobres."
        },
        {
          "id": "E3-F18",
          "ordem": 17,
          "fator": "Igualdade racial",
          "icone": "18.07",
          "ods": 18,
          "nome_ods": "ODS 18 – IGUALDADE ÉTNICO-RACIAL",
          "definicao": "Garantir que negros, brancos e indígenas tenham as mesmas chances e sejam respeitados da mesma forma."
        },
        {
          "id": "E3-F19",
          "ordem": 18,
          "fator": "Igualdade de direitos à propriedade e controle da terra (comunidades tradicionais e quilombolas)",
          "icone": "18.11",
          "ods": 18,
          "nome_ods": "ODS 18 – IGUALDADE ÉTNICO-RACIAL",
          "definicao": "Garantir que quilombolas, indígenas e outras comunidades tradicionais tenham o direito de possuir e cuidar das suas terras."
        }
      ]
    },
    {
      "id": "E4",
      "id_original": "Eixo 4",
      "ordem": 4,
      "titulo": "A Terra de Quem?",
      "foco": "Soberania territorial, meio ambiente, biodiversidade e clima",
      "cor": "#4C9F38",
      "fatores": [
        {
          "id": "E4-F01",
          "ordem": 1,
          "fator": "Acesso a recursos financeiros para gestão, conservação sustentável da biodiversidade (investimentos públicos e privados)",
          "icone": "01.02",
          "ods": 1,
          "nome_ods": "ODS 01 – ERRADICAÇÃO DA POBREZA",
          "definicao": "Dinheiro de governos e empresas para ajudar a cuidar da natureza e da variedade de vida que existe nela e protegê-las."
        },
        {
          "id": "E4-F02",
          "ordem": 2,
          "fator": "Gestão de bancos de sementes",
          "icone": "02.05",
          "ods": 2,
          "nome_ods": "ODS 02 – FOME ZERO E AGRICULTURA SUSTENTÁVEL",
          "definicao": "É a prática de guardar e cuidar de sementes e mudas para manter a diversidade de alimentos e proteger espécies importantes."
        },
        {
          "id": "E4-F03",
          "ordem": 3,
          "fator": "Plantas medicinais (uso e plantio)",
          "icone": "03.12",
          "ods": 3,
          "nome_ods": "ODS 03 – SAÚDE E BEM ESTAR",
          "definicao": "Uso de ervas e plantas para tratar doenças ou aliviar sintomas. Valoriza saberes tradicionais e amplia formas de cuidado à saúde."
        },
        {
          "id": "E4-F04",
          "ordem": 4,
          "fator": "Proteção e restauração de ecossistemas hídricos",
          "icone": "06.03",
          "ods": 6,
          "nome_ods": "ODS 06 – ÁGUA POTÁVEL E SANEAMENTO",
          "definicao": "Cuidar de rios, lagos e nascentes, que são fontes naturais de água."
        },
        {
          "id": "E4-F05",
          "ordem": 5,
          "fator": "Tecnologias sociais",
          "icone": "07.02",
          "ods": 11,
          "nome_ods": "ODS 11 – CIDADES E COMUNIDADES SUSTENTÁVEIS",
          "definicao": "Soluções simples e baratas, criadas junto com a comunidade, para resolver problemas do dia a dia, como cisternas para guardar água da chuva."
        },
        {
          "id": "E4-F06",
          "ordem": 6,
          "fator": "Pesquisa científica e inovação",
          "icone": "09.07",
          "ods": 9,
          "nome_ods": "ODS 09 – INDÚSTRIA, INOVAÇÃO E INFRAESTRUTURA",
          "definicao": "Desenvolvimento de novos conhecimentos e tecnologias."
        },
        {
          "id": "E4-F07",
          "ordem": 7,
          "fator": "Construções sustentáveis e resilientes",
          "icone": "11.16",
          "ods": 11,
          "nome_ods": "ODS 11 – CIDADES E COMUNIDADES SUSTENTÁVEIS",
          "definicao": "Edificações com menor impacto ambiental e mais resistência. Reduz emissões, consumo de energia e aumenta a segurança."
        },
        {
          "id": "E4-F08",
          "ordem": 8,
          "fator": "Tecnologias ambientalmente corretas",
          "icone": "12.02",
          "ods": 12,
          "nome_ods": "ODS 12 – CONSUMO E PRODUÇÃO RESPONSÁVEIS",
          "definicao": "Soluções tecnológicas que reduzem impactos ambientais e sociais."
        },
        {
          "id": "E4-F09",
          "ordem": 9,
          "fator": "Acesso à informação de qualidade",
          "icone": "12.11",
          "ods": 12,
          "nome_ods": "ODS 12 – CONSUMO E PRODUÇÃO RESPONSÁVEIS",
          "definicao": "Poder receber informações verdadeiras e fáceis de entender para tomar boas decisões e não ser enganado."
        },
        {
          "id": "E4-F10",
          "ordem": 10,
          "fator": "Reconstruções sustentáveis e resilientes",
          "icone": "12.14",
          "ods": 12,
          "nome_ods": "ODS 12 – CONSUMO E PRODUÇÃO RESPONSÁVEIS",
          "definicao": "Reconstruir o que foi destruído em desastres de um jeito mais forte e que respeite a natureza, para aguentar melhor os próximos eventos."
        },
        {
          "id": "E4-F11",
          "ordem": 11,
          "fator": "Educação ambiental e para adaptação climática",
          "icone": "13.03",
          "ods": 13,
          "nome_ods": "ODS 13 – AÇÃO CONTRA A MUDANÇA GLOBAL DO CLIMA",
          "definicao": "Ensino e conscientização sobre os efeitos das mudanças climáticas e como enfrentá-las. Prepara comunidades para se adaptarem e evitarem riscos."
        },
        {
          "id": "E4-F12",
          "ordem": 12,
          "fator": "Planejamento relacionado à mudança do clima e à gestão eficaz",
          "icone": "13.04",
          "ods": 13,
          "nome_ods": "ODS 13 – AÇÃO CONTRA A MUDANÇA GLOBAL DO CLIMA",
          "definicao": "Estratégias e políticas públicas voltadas para a resiliência climática. Garante respostas organizadas e sustentáveis aos desafios climáticos."
        },
        {
          "id": "E4-F13",
          "ordem": 13,
          "fator": "Gerenciar e proteger os oceanos, mares e recursos marinhos de forma sustentável",
          "icone": "14.02",
          "ods": 14,
          "nome_ods": "ODS 14 – VIDA NA ÁGUA",
          "definicao": "Cuidar do mar e do que vive nele, usando seus recursos sem destruir, para que não faltem no futuro."
        },
        {
          "id": "E4-F14",
          "ordem": 14,
          "fator": "Pesquisa científica e inovação para recuperação de ambientes",
          "icone": "14.07",
          "ods": 14,
          "nome_ods": "ODS 14 – VIDA NA ÁGUA",
          "definicao": "Estudos e novas ideias para ajudar a recuperar rios, matas e mares que foram destruídos."
        },
        {
          "id": "E4-F15",
          "ordem": 15,
          "fator": "Pescadores artesanais",
          "icone": "14.08",
          "ods": 14,
          "nome_ods": "ODS 14 – VIDA NA ÁGUA",
          "definicao": "Trabalhadores que dependem da pesca tradicional e de pequena escala. Contribuem para a economia local e cultura costeira."
        },
        {
          "id": "E4-F16",
          "ordem": 16,
          "fator": "Desmatamento e solos degradados",
          "icone": "15.03",
          "ods": 15,
          "nome_ods": "ODS 15 – VIDA TERRESTRE",
          "definicao": "É a remoção da vegetação nativa e a perda de qualidade dos solos. Compromete a produção agrícola, a biodiversidade e os recursos hídricos."
        },
        {
          "id": "E4-F17",
          "ordem": 17,
          "fator": "Gestão sustentável dos recursos naturais",
          "icone": "15.06",
          "ods": 15,
          "nome_ods": "ODS 15 – VIDA TERRESTRE",
          "definicao": "É o uso racional dos recursos naturais, garantindo a conservação da biodiversidade."
        },
        {
          "id": "E4-F18",
          "ordem": 18,
          "fator": "Conhecimentos e práticas tradicionais de conservação e uso sustentável",
          "icone": "15.08",
          "ods": 15,
          "nome_ods": "ODS 15 – VIDA TERRESTRE",
          "definicao": "Valoriza saberes indígenas e comunitários sobre o uso sustentável dos recursos naturais."
        },
        {
          "id": "E4-F19",
          "ordem": 19,
          "fator": "Hospital veterinário e resgate de animais",
          "icone": "15.09",
          "ods": 15,
          "nome_ods": "ODS 15 – VIDA TERRESTRE",
          "definicao": "Locais e serviços que cuidam da saúde dos animais e os socorrem quando estão feridos ou abandonados."
        },
        {
          "id": "E4-F20",
          "ordem": 20,
          "fator": "Tráfico de espécies da flora e fauna (caça e pesca ilegal)",
          "icone": "15.10",
          "ods": 15,
          "nome_ods": "ODS 15 – VIDA TERRESTRE",
          "definicao": "Comércio ilegal de plantas e animais, muitas vezes ameaçados de extinção. Enfraquece os ecossistemas e ameaça a biodiversidade global."
        },
        {
          "id": "E4-F21",
          "ordem": 21,
          "fator": "Espécies exóticas invasoras",
          "icone": "15.11",
          "ods": 15,
          "nome_ods": "ODS 15 – VIDA TERRESTRE",
          "definicao": "Animais ou plantas introduzidos em novos ambientes que se proliferam descontroladamente."
        },
        {
          "id": "E4-F22",
          "ordem": 22,
          "fator": "Gestão sustentável da biodiversidade para o desenvolvimento e redução da pobreza",
          "icone": "15.12",
          "ods": 15,
          "nome_ods": "ODS 15 – VIDA TERRESTRE",
          "definicao": "Integração da conservação da natureza com o desenvolvimento econômico e social. Ajuda comunidades a gerarem renda de forma sustentável, promovendo bem-estar."
        },
        {
          "id": "E4-F24",
          "ordem": 23,
          "fator": "Transferência de tecnologias ambientalmente corretas (acesso)",
          "icone": "17.03",
          "ods": 17,
          "nome_ods": "ODS 17 – PARCERIA E MEIOS DE IMPLEMENTAÇÃO",
          "definicao": "Fazer com que soluções e equipamentos que não agridem a natureza cheguem a quem precisa deles."
        },
        {
          "id": "E4-F25",
          "ordem": 24,
          "fator": "Reflorestamento",
          "icone": "18.12",
          "ods": 15,
          "nome_ods": "ODS 15 – VIDA TERRESTRE",
          "definicao": "Envolve ações para recuperar áreas degradadas e restaurar a cobertura vegetal original. Combate as mudanças climáticas e ajuda na preservação da fauna e flora locais."
        }
      ]
    },
    {
      "id": "E5",
      "id_original": "Eixo 5",
      "ordem": 5,
      "titulo": "A Cidade Negada",
      "foco": "Infraestrutura, educação, cultura e território urbano-rural",
      "cor": "#1868A8",
      "fatores": [
        {
          "id": "E5-F01",
          "ordem": 1,
          "fator": "Disponibilidade a abrigos para emergências",
          "icone": "02.10",
          "ods": 13,
          "nome_ods": "ODS 13 – AÇÃO CONTRA A MUDANÇA GLOBAL DO CLIMA",
          "definicao": "Existência de lugares seguros para as pessoas ficarem quando precisam sair de casa por causa de um desastre."
        },
        {
          "id": "E5-F02",
          "ordem": 2,
          "fator": "Vias obstruídas e danificadas – vias municipais, estaduais e federais",
          "icone": "03.09",
          "ods": 3,
          "nome_ods": "ODS 03 – SAÚDE E BEM ESTAR",
          "definicao": "Ruas e estradas fechadas ou estragadas, que dificultam a passagem de pessoas, ônibus e do socorro."
        },
        {
          "id": "E5-F03",
          "ordem": 3,
          "fator": "Acidentes no transporte de produtos perigosos",
          "icone": "03.14",
          "ods": 3,
          "nome_ods": "ODS 03 – SAÚDE E BEM ESTAR",
          "definicao": "Quando caminhões que carregam combustível ou produtos químicos sofrem acidentes e colocam pessoas e natureza em risco."
        },
        {
          "id": "E5-F04",
          "ordem": 4,
          "fator": "Educação – ensino primário",
          "icone": "04.01",
          "ods": 4,
          "nome_ods": "ODS 04 – EDUCAÇÃO DE QUALIDADE",
          "definicao": "É o caminho de estudo que começa com o aprendizado de ler, escrever e fazer contas e ajuda a compreender o mundo."
        },
        {
          "id": "E5-F05",
          "ordem": 5,
          "fator": "Educação técnica e profissional",
          "icone": "04.04",
          "ods": 4,
          "nome_ods": "ODS 04 – EDUCAÇÃO DE QUALIDADE",
          "definicao": "São cursos que ensinam uma profissão e preparam para o mercado de trabalho."
        },
        {
          "id": "E5-F06",
          "ordem": 6,
          "fator": "Educação superior",
          "icone": "04.05",
          "ods": 4,
          "nome_ods": "ODS 04 – EDUCAÇÃO DE QUALIDADE",
          "definicao": "É a faculdade ou universidade, onde a pessoa se especializa em uma área do conhecimento."
        },
        {
          "id": "E5-F08",
          "ordem": 7,
          "fator": "Educação pública",
          "icone": "04.07",
          "ods": 4,
          "nome_ods": "ODS 04 – EDUCAÇÃO DE QUALIDADE",
          "definicao": "Escolas gratuitas mantidas pelo governo para que todos possam estudar sem pagar."
        },
        {
          "id": "E5-F09",
          "ordem": 8,
          "fator": "Alfabetização – EJA",
          "icone": "04.08",
          "ods": 4,
          "nome_ods": "ODS 04 – EDUCAÇÃO DE QUALIDADE",
          "definicao": "Ensino para jovens e adultos que não puderam estudar ou aprender a ler e escrever quando eram crianças."
        },
        {
          "id": "E5-F10",
          "ordem": 9,
          "fator": "Formação em tecnologias sociais",
          "icone": "04.09",
          "ods": 4,
          "nome_ods": "ODS 04 – EDUCAÇÃO DE QUALIDADE",
          "definicao": "Cursos que ensinam a criar e usar soluções simples e baratas para os problemas da comunidade."
        },
        {
          "id": "E5-F11",
          "ordem": 10,
          "fator": "Bolsas de estudo",
          "icone": "04.10",
          "ods": 4,
          "nome_ods": "ODS 04 – EDUCAÇÃO DE QUALIDADE",
          "definicao": "Ajuda em dinheiro para que o estudante consiga pagar o curso ou se manter estudando."
        },
        {
          "id": "E5-F12",
          "ordem": 11,
          "fator": "Professores qualificados",
          "icone": "04.11",
          "ods": 4,
          "nome_ods": "ODS 04 – EDUCAÇÃO DE QUALIDADE",
          "definicao": "Garantir que quem ensina nas escolas tenha o estudo e o preparo necessário para dar uma boa aula."
        },
        {
          "id": "E5-F13",
          "ordem": 12,
          "fator": "Acesso aos serviços de energia",
          "icone": "07.01",
          "ods": 7,
          "nome_ods": "ODS 07 – ENERGIA LIMPA E ACESSÍVEL",
          "definicao": "Garantir que todas as pessoas, inclusive nas áreas rurais ou isoladas, tenham eletricidade em casa, na escola, no hospital, etc."
        },
        {
          "id": "E5-F14",
          "ordem": 13,
          "fator": "Serviços de energia modernos e sustentáveis",
          "icone": "07.03",
          "ods": 7,
          "nome_ods": "ODS 07 – ENERGIA LIMPA E ACESSÍVEL",
          "definicao": "Ter luz em casa que venha de fontes que não agridem a natureza e com um preço que todos consigam pagar."
        },
        {
          "id": "E5-F15",
          "ordem": 14,
          "fator": "Empreendimento com elevado risco de desastres",
          "icone": "08.07",
          "ods": 8,
          "nome_ods": "ODS 08 – TRABALHO DECENTE E CRESCIMENTO ECONÔMICO",
          "definicao": "Fábricas, barragens ou outras obras que podem causar acidentes graves para as pessoas e a natureza ao redor."
        },
        {
          "id": "E5-F16",
          "ordem": 15,
          "fator": "Educação para trabalho",
          "icone": "08.10",
          "ods": 8,
          "nome_ods": "ODS 08 – TRABALHO DECENTE E CRESCIMENTO ECONÔMICO",
          "definicao": "Preparar as pessoas com conhecimentos para conseguir um emprego."
        },
        {
          "id": "E5-F17",
          "ordem": 16,
          "fator": "Promoção de cultura",
          "icone": "08.19",
          "ods": 8,
          "nome_ods": "ODS 08 – TRABALHO DECENTE E CRESCIMENTO ECONÔMICO",
          "definicao": "Valorização política e comunitária das manifestações culturais como música, arte e tradição."
        },
        {
          "id": "E5-F18",
          "ordem": 17,
          "fator": "Acesso à cultura",
          "icone": "08.20",
          "ods": 8,
          "nome_ods": "ODS 08 – TRABALHO DECENTE E CRESCIMENTO ECONÔMICO",
          "definicao": "Poder participar de festas, shows, teatro, museus e outras atividades culturais, perto de casa e sem custar caro."
        },
        {
          "id": "E5-F19",
          "ordem": 18,
          "fator": "Sistema viário – vias municipais, estaduais e federais",
          "icone": "09.01",
          "ods": 9,
          "nome_ods": "ODS 09 – INDÚSTRIA, INOVAÇÃO E INFRAESTRUTURA",
          "definicao": "Conjunto de ruas, estradas e rodovias que ligam cidades e regiões. Facilita o transporte de pessoas e produtos, impulsionando o comércio."
        },
        {
          "id": "E5-F20",
          "ordem": 19,
          "fator": "Infraestrutura sustentável e resiliente",
          "icone": "09.08",
          "ods": 9,
          "nome_ods": "ODS 09 – INDÚSTRIA, INOVAÇÃO E INFRAESTRUTURA",
          "definicao": "Estruturas físicas duráveis e adaptadas às mudanças climáticas. Reduz riscos de desastres e promove bem-estar."
        },
        {
          "id": "E5-F21",
          "ordem": 20,
          "fator": "Tecnologias de informação e comunicação",
          "icone": "04.06",
          "ods": 9,
          "nome_ods": "ODS 09 – INDÚSTRIA, INOVAÇÃO E INFRAESTRUTURA",
          "definicao": "São as ferramentas que usamos para nos conectar, como computadores, internet e celulares."
        },
        {
          "id": "E5-F22",
          "ordem": 21,
          "fator": "Habitação",
          "icone": "11.01",
          "ods": 11,
          "nome_ods": "ODS 11 – CIDADES E COMUNIDADES SUSTENTÁVEIS",
          "definicao": "Ter uma casa segura, com teto, paredes e em um lugar protegido para morar com a família."
        },
        {
          "id": "E5-F23",
          "ordem": 22,
          "fator": "Transportes seguros",
          "icone": "11.02",
          "ods": 11,
          "nome_ods": "ODS 11 – CIDADES E COMUNIDADES SUSTENTÁVEIS",
          "definicao": "Ônibus, trens e barcos que funcionem bem e que levem as pessoas aos lugares sem risco de acidentes."
        },
        {
          "id": "E5-F24",
          "ordem": 23,
          "fator": "Urbanização e infraestrutura",
          "icone": "11.03",
          "ods": 11,
          "nome_ods": "ODS 11 – CIDADES E COMUNIDADES SUSTENTÁVEIS",
          "definicao": "Planejamento urbano com acesso a serviços básicos. Melhora a qualidade de vida e reduz desigualdades territoriais."
        },
        {
          "id": "E5-F25",
          "ordem": 24,
          "fator": "Equipamentos públicos de lazer e cultura seguros",
          "icone": "11.04",
          "ods": 11,
          "nome_ods": "ODS 11 – CIDADES E COMUNIDADES SUSTENTÁVEIS",
          "definicao": "Praças, quadras e centros culturais bem cuidados e seguros para todos usarem."
        },
        {
          "id": "E5-F26",
          "ordem": 25,
          "fator": "Esportes",
          "icone": "11.09",
          "ods": 11,
          "nome_ods": "ODS 11 – CIDADES E COMUNIDADES SUSTENTÁVEIS",
          "definicao": "Acesso a atividades físicas e esportivas nos territórios. Promove saúde, inclusão e cidadania."
        },
        {
          "id": "E5-F27",
          "ordem": 26,
          "fator": "Biblioteca",
          "icone": "11.11",
          "ods": 11,
          "nome_ods": "ODS 11 – CIDADES E COMUNIDADES SUSTENTÁVEIS",
          "definicao": "Acesso a livros e, por meio deles, à leitura, à cultura e ao conhecimento. Contribui para a educação e inclusão cultural."
        },
        {
          "id": "E5-F28",
          "ordem": 27,
          "fator": "Lazer",
          "icone": "11.12",
          "ods": 11,
          "nome_ods": "ODS 11 – CIDADES E COMUNIDADES SUSTENTÁVEIS",
          "definicao": "Espaços e atividades para recreação e convívio social. Favorece saúde mental e relações comunitárias."
        },
        {
          "id": "E5-F29",
          "ordem": 28,
          "fator": "Valorização dos saberes e práticas locais",
          "icone": "12.03",
          "ods": 12,
          "nome_ods": "ODS 12 – CONSUMO E PRODUÇÃO RESPONSÁVEIS",
          "definicao": "Reconhecer e dar valor ao que a comunidade sabe e faz, como receitas, festas, artesanato e modos de cuidar da terra."
        },
        {
          "id": "E5-F30",
          "ordem": 29,
          "fator": "Acesso a iluminação pública",
          "icone": "12.13",
          "ods": 11,
          "nome_ods": "ODS 11 – CIDADES E COMUNIDADES SUSTENTÁVEIS",
          "definicao": "Ter postes de luz funcionando nas ruas, deixando os caminhos mais seguros à noite."
        }
      ]
    },
    {
      "id": "E6",
      "id_original": "Eixo 6",
      "ordem": 6,
      "titulo": "A Voz na Mesa",
      "foco": "Participação social, governança, transparência e parcerias sociotécnicas",
      "cor": "#158A8A",
      "fatores": [
        {
          "id": "E6-F01",
          "ordem": 1,
          "fator": "Associação de moradores e lideranças locais",
          "icone": "01.06",
          "ods": 11,
          "nome_ods": "ODS 11 – CIDADES E COMUNIDADES SUSTENTÁVEIS",
          "definicao": "Grupos de vizinhos e pessoas de referência que se organizam para melhorar o bairro e defender a comunidade."
        },
        {
          "id": "E6-F02",
          "ordem": 2,
          "fator": "Mobilização de redes e grupos organizados",
          "icone": "02.06",
          "ods": 11,
          "nome_ods": "ODS 11 – CIDADES E COMUNIDADES SUSTENTÁVEIS",
          "definicao": "Juntar pessoas e grupos para agir em conjunto por uma causa da comunidade."
        },
        {
          "id": "E6-F03",
          "ordem": 3,
          "fator": "Rádios comunitárias",
          "icone": "04.02",
          "ods": 11,
          "nome_ods": "ODS 11 – CIDADES E COMUNIDADES SUSTENTÁVEIS",
          "definicao": "Rádios feitas pela própria comunidade, que informam e dão voz aos moradores da região."
        },
        {
          "id": "E6-F04",
          "ordem": 4,
          "fator": "Parcerias entre instituições públicas, privadas e com a sociedade civil",
          "icone": "11.17",
          "ods": 11,
          "nome_ods": "ODS 11 – CIDADES E COMUNIDADES SUSTENTÁVEIS",
          "definicao": "Quando governo, empresas e grupos da comunidade trabalham juntos para resolver problemas."
        },
        {
          "id": "E6-F05",
          "ordem": 5,
          "fator": "Mutirão de limpeza",
          "icone": "12.07",
          "ods": 11,
          "nome_ods": "ODS 11 – CIDADES E COMUNIDADES SUSTENTÁVEIS",
          "definicao": "Quando os moradores se juntam num dia para limpar ruas, rios e terrenos da comunidade."
        },
        {
          "id": "E6-F06",
          "ordem": 6,
          "fator": "Combate ao crime organizado",
          "icone": "16.01",
          "ods": 16,
          "nome_ods": "ODS 16 – PAZ, JUSTIÇA E INSTITUIÇÕES EFICAZES",
          "definicao": "Ações da polícia e da justiça contra grupos criminosos, como os que vendem drogas e armas."
        },
        {
          "id": "E6-F07",
          "ordem": 7,
          "fator": "Participação social na tomada de decisão responsiva, inclusiva e participativa",
          "icone": "16.04",
          "ods": 16,
          "nome_ods": "ODS 16 – PAZ, JUSTIÇA E INSTITUIÇÕES EFICAZES",
          "definicao": "Garantir que a população possa opinar e ajudar a decidir o que o governo faz na comunidade."
        },
        {
          "id": "E6-F08",
          "ordem": 8,
          "fator": "Corrupção e suborno (em todos os níveis)",
          "icone": "16.06",
          "ods": 16,
          "nome_ods": "ODS 16 – PAZ, JUSTIÇA E INSTITUIÇÕES EFICAZES",
          "definicao": "Roubar dinheiro público ou dar dinheiro para funcionários do governo para conseguir algo de forma errada."
        },
        {
          "id": "E6-F09",
          "ordem": 9,
          "fator": "Instituições públicas e privadas em todos os níveis (transparência ativa)",
          "icone": "16.07",
          "ods": 16,
          "nome_ods": "ODS 16 – PAZ, JUSTIÇA E INSTITUIÇÕES EFICAZES",
          "definicao": "Órgãos do governo e empresas que mostram com clareza o que fazem e como usam o dinheiro."
        },
        {
          "id": "E6-F11",
          "ordem": 10,
          "fator": "Comunicação comunitária – grupos de mensagens",
          "icone": "16.10",
          "ods": 11,
          "nome_ods": "ODS 11 – CIDADES E COMUNIDADES SUSTENTÁVEIS",
          "definicao": "Grupos de celular, como os de WhatsApp, usados pelos moradores para avisar, informar e se ajudar."
        },
        {
          "id": "E6-F15",
          "ordem": 11,
          "fator": "Grupos de escuta diários",
          "icone": "18.05",
          "ods": 17,
          "nome_ods": "ODS 17 – PARCERIA E MEIOS DE IMPLEMENTAÇÃO",
          "definicao": "Encontros ou canais onde as pessoas podem falar do que sentem e do que precisam, sendo ouvidas com frequência."
        },
        {
          "id": "E6-F16",
          "ordem": 12,
          "fator": "Igrejas, grupos religiosos e outros coletivos que apoiam as situações de emergência",
          "icone": "18.10",
          "ods": 17,
          "nome_ods": "ODS 17 – PARCERIA E MEIOS DE IMPLEMENTAÇÃO",
          "definicao": "Igrejas e outros grupos que oferecem abrigo, comida e apoio às pessoas em momentos de desastre."
        }
      ]
    }
  ]
};
