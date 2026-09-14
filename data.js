var EIXOS_DATA = [
  {
    "id": "Eixo 1",
    "titulo": "O Suor que não nos Sustenta",
    "foco": "Trabalho, renda, economia solidária e agricultura familiar",
    "cor": "#F0871E",
    "ordem": 1,
    "fatores": [
      {
        "fator": "Cuidado com crianças e grupos vulneráveis",
        "icone": "01.03",
        "definicao": "Atenção e proteção para crianças, idosos e outras pessoas que precisam de mais ajuda para viver com segurança.",
        "ods": 1,
        "nome_ods": "ODS 01 – ERRADICAÇÃO DA POBREZA"
      },
      {
        "fator": "Alimentos",
        "icone": "02.01",
        "definicao": "Ter comida que não faz mal à saúde e em quantidade que mate a fome  todos os dias.",
        "ods": 2,
        "nome_ods": "ODS 02 – FOME ZERO E AGRICULTURA SUSTENTÁVEL"
      },
      {
        "fator": "Agricultura Familiar",
        "icone": "02.03",
        "definicao": "Plantações feitas por famílias, que são quem mais produz a comida que chega à nossa mesa.",
        "ods": 2,
        "nome_ods": "ODS 02 – FOME ZERO E AGRICULTURA SUSTENTÁVEL"
      },
      {
        "fator": "Produção de alimentos - hortas, hortos, quintais e outros que produzem alimentos",
        "icone": "02.04",
        "definicao": "As pessoas plantam alimentos seguros, livres de venenos, como também plantas medicinais em pequenos espaços, como quintais, escolas ou terrenos comunitários.",
        "ods": 2,
        "nome_ods": "ODS 02 – FOME ZERO E AGRICULTURA SUSTENTÁVEL"
      },
      {
        "fator": "Produção Orgânica",
        "icone": "02.08",
        "definicao": "Alimentos plantados de forma natural, sem usar venenos para matar as pragas e os bichos no mato.",
        "ods": 2,
        "nome_ods": "ODS 02 – FOME ZERO E AGRICULTURA SUSTENTÁVEL"
      },
      {
        "fator": "Disponibilidade de alimentos",
        "icone": "02.11",
        "definicao": "Ter comida suficiente para comprar ou colher na região, para que ninguém fique sem o que comer e nem pague caro pela comida.",
        "ods": 2,
        "nome_ods": "ODS 02 – FOME ZERO E AGRICULTURA SUSTENTÁVEL"
      },
      {
        "fator": "Trabalho de assistência e doméstico não remunerado",
        "icone": "05.04",
        "definicao": "Tarefas como cuidar da casa, dos filhos ou de parentes doentes, feitas principalmente por mulheres sem receber por isso.",
        "ods": 5,
        "nome_ods": "ODS 05 – IGUALDADE DE GÊNERO"
      },
      {
        "fator": "Geração de emprego e renda",
        "icone": "08.02",
        "definicao": "Criar novos postos de trabalho e chances para as pessoas ganharem dinheiro.",
        "ods": 8,
        "nome_ods": "ODS 08 – TRABALHO DECENTE E CRESCIMENTO ECONÔMICO"
      },
      {
        "fator": "Empreendedorismo solidário, criatividade e inovação",
        "icone": "08.03",
        "definicao": "Apoio para quem quer abrir seu próprio negócio ou inventar um jeito novo de resolver um problema.",
        "ods": 8,
        "nome_ods": "ODS 08 – TRABALHO DECENTE E CRESCIMENTO ECONÔMICO"
      },
      {
        "fator": "Formalização de emprego (CLT, MEI, ECOSOL)",
        "icone": "08.04",
        "definicao": "Ter a carteira de trabalho assinada ou a empresa legalizada para ter garantias como aposentadoria e auxílio-doença.",
        "ods": 8,
        "nome_ods": "ODS 08 – TRABALHO DECENTE E CRESCIMENTO ECONÔMICO"
      },
      {
        "fator": "Iniciativas de Economia Solidária",
        "icone": "08.06",
        "definicao": "São formas de trabalho em grupo na produção de alimentos, onde as pessoas se ajudam, produzem juntas e dividem os lucros de forma justa.",
        "ods": 8,
        "nome_ods": "ODS 08 – TRABALHO DECENTE E CRESCIMENTO ECONÔMICO"
      },
      {
        "fator": "Disponibilidade de emprego",
        "icone": "08.08",
        "definicao": "Existência de vagas de trabalho na região para quem quer e precisa trabalhar.",
        "ods": 8,
        "nome_ods": "ODS 08 – TRABALHO DECENTE E CRESCIMENTO ECONÔMICO"
      },
      {
        "fator": "Desemprego",
        "icone": "08.09",
        "definicao": "Falta de trabalho para quem quer e precisa trabalhar. Aumenta a pobreza e os problemas sociais.",
        "ods": 8,
        "nome_ods": "ODS 08 – TRABALHO DECENTE E CRESCIMENTO ECONÔMICO"
      },
      {
        "fator": "Trabalho infantil",
        "icone": "08.11",
        "definicao": "É quando obrigam as crianças para trabalhar, o que é proibido, e tira delas o tempo de brincar e estudar, mantendo elas na pobreza.",
        "ods": 8,
        "nome_ods": "ODS 08 – TRABALHO DECENTE E CRESCIMENTO ECONÔMICO"
      },
      {
        "fator": "Trabalho em condições análogas às de escravidão",
        "icone": "08.12",
        "definicao": "É quando obrigam alguém a trabalhar sem liberdade e em condições muito ruins, o que é crime.",
        "ods": 8,
        "nome_ods": "ODS 08 – TRABALHO DECENTE E CRESCIMENTO ECONÔMICO"
      },
      {
        "fator": "Ambientes de trabalho seguros",
        "icone": "08.14",
        "definicao": "Locais de trabalho sem riscos à saúde e com boas condições. Protege a vida e o bem-estar dos trabalhadores.",
        "ods": 8,
        "nome_ods": "ODS 08 – TRABALHO DECENTE E CRESCIMENTO ECONÔMICO"
      },
      {
        "fator": "Ações solidárias locais",
        "icone": "08.16",
        "definicao": "Ajuda entre vizinhos e grupos da comunidade, como doação de alimentos e apoio a quem está passando dificuldade.",
        "ods": 8,
        "nome_ods": "ODS 08 – TRABALHO DECENTE E CRESCIMENTO ECONÔMICO"
      },
      {
        "fator": "Condições de trabalho",
        "icone": "08.17",
        "definicao": "O jeito e o ambiente em que a pessoa trabalha: horários, segurança, salário e respeito no dia a dia.",
        "ods": 8,
        "nome_ods": "ODS 08 – TRABALHO DECENTE E CRESCIMENTO ECONÔMICO"
      },
      {
        "fator": "Promoção de políticas de investimento local",
        "icone": "08.18",
        "definicao": "Apoiar projetos que fortaleçam a economia da comunidade.",
        "ods": 8,
        "nome_ods": "ODS 08 – TRABALHO DECENTE E CRESCIMENTO ECONÔMICO"
      },
      {
        "fator": "Acesso a serviços bancários",
        "icone": "08.21",
        "definicao": "Permitir que todos possam ter conta, crédito e financiamento.",
        "ods": 8,
        "nome_ods": "ODS 08 – TRABALHO DECENTE E CRESCIMENTO ECONÔMICO"
      },
      {
        "fator": "Industrialização inclusiva e sustentável",
        "icone": "09.02",
        "definicao": "Desenvolvimento da indústria com inclusão social e respeito ao meio ambiente.",
        "ods": 9,
        "nome_ods": "ODS 09 – INDÚSTRIA, INOVAÇÃO E INFRAESTRUTURA"
      },
      {
        "fator": "Crédito para micro, pequenas empresas e cooperativas",
        "icone": "09.04",
        "definicao": "Empréstimo de dinheiro com juros baixos para ajudar o pequeno comerciante ou produtor a melhorar seu negócio.",
        "ods": 9,
        "nome_ods": "ODS 09 – INDÚSTRIA, INOVAÇÃO E INFRAESTRUTURA"
      },
      {
        "fator": "Atividades econômicas sustentáveis",
        "icone": "09.05",
        "definicao": "Produção que respeita os limites ambientais. Garante crescimento sem comprometer os recursos naturais.",
        "ods": 9,
        "nome_ods": "ODS 09 – INDÚSTRIA, INOVAÇÃO E INFRAESTRUTURA"
      },
      {
        "fator": "Cobrança de preços abusivos por itens básicos",
        "icone": "10.01",
        "definicao": "Quando cobram muito caro por coisas essenciais, como comida, água e remédios, principalmente em momentos de crise.",
        "ods": 10,
        "nome_ods": "ODS 10 – REDUÇÃO DAS DESIGUALDADES"
      },
      {
        "fator": "Regulamentação e monitoramento dos mercados e instituições (monopólios e preço justo)",
        "icone": "10.08",
        "definicao": "Regras que asseguram concorrência justa e preços acessíveis. Evita abusos econômicos e protege o consumidor.",
        "ods": 10,
        "nome_ods": "ODS 10 – REDUÇÃO DAS DESIGUALDADES"
      },
      {
        "fator": "Sistemas sustentáveis de produção de alimentos",
        "icone": "12.01",
        "definicao": "Produção e consumo de alimentos que respeitem o meio ambiente e garantam segurança alimentar.",
        "ods": 12,
        "nome_ods": "ODS 12 – CONSUMO E PRODUÇÃO RESPONSÁVEIS"
      },
      {
        "fator": "Economia circular",
        "icone": "12.10",
        "definicao": "Modelo econômico baseado em reutilizar, renovar e reciclar.",
        "ods": 12,
        "nome_ods": "ODS 12 – CONSUMO E PRODUÇÃO RESPONSÁVEIS"
      },
      {
        "fator": "Trabalho informal",
        "icone": "16.05",
        "definicao": "Trabalho sem vínculo empregatício, sem carteira de trabalho e sem direitos como férias, 13°, FGTS e INSS",
        "ods": 8,
        "nome_ods": "ODS 08 – TRABALHO DECENTE E CRESCIMENTO ECONÔMICO"
      },
      {
        "fator": "Crédito para adaptação climática e reconstrução",
        "icone": "18.09",
        "definicao": "Empréstimo de dinheiro para as pessoas se prepararem para os efeitos do clima ou reconstruírem o que perderam em desastres.",
        "ods": 13,
        "nome_ods": "ODS 13 – AÇÃO CONTRA A MUDANÇA GLOBAL DO CLIMA"
      }
    ]
  },
  {
    "id": "Eixo 2",
    "titulo": "A Vida em Risco",
    "foco": "Saúde, corpo político, saneamento e adoecimento social",
    "cor": "#E2211C",
    "ordem": 2,
    "fatores": [
      {
        "fator": "Área inundada",
        "icone": "01.07",
        "definicao": "Lugar que fica coberto pela água quando o rio sobe ou a chuva é muito forte.",
        "ods": 13,
        "nome_ods": "ODS 13 – AÇÃO CONTRA A MUDANÇA GLOBAL DO CLIMA"
      },
      {
        "fator": "Insegurança alimentar",
        "icone": "02.02",
        "definicao": "É quando uma pessoa não consegue se alimentar bem, não consome os nutrientes que o corpo precisa para crescer e se manter saudável.",
        "ods": 2,
        "nome_ods": "ODS 02 – FOME ZERO E AGRICULTURA SUSTENTÁVEL"
      },
      {
        "fator": "Mortalidade materna",
        "icone": "03.01",
        "definicao": "Quando mulheres morrem durante a gravidez, parto ou logo depois.",
        "ods": 3,
        "nome_ods": "ODS 03 – SAÚDE E BEM ESTAR"
      },
      {
        "fator": "Mortalidade neonatal",
        "icone": "03.02",
        "definicao": "Morte de bebês com até 28 dias de vida.",
        "ods": 3,
        "nome_ods": "ODS 03 – SAÚDE E BEM ESTAR"
      },
      {
        "fator": "Mortalidade infantil",
        "icone": "03.03",
        "definicao": "Morte de crianças antes de completarem 1 ano.",
        "ods": 3,
        "nome_ods": "ODS 03 – SAÚDE E BEM ESTAR"
      },
      {
        "fator": "Doenças decorrentes de contaminação e poluição do ar, da água e do solo",
        "icone": "03.04",
        "definicao": "Doenças causadas pela poluição, como problemas respiratórios, diarréias, vermes e outras intoxicações.",
        "ods": 3,
        "nome_ods": "ODS 03 – SAÚDE E BEM ESTAR"
      },
      {
        "fator": "Dengue",
        "icone": "03.05",
        "definicao": "Doença causada por um vírus que o mosquito espalha, geralmente onde há acúmulo de água ou falta de limpeza.",
        "ods": 3,
        "nome_ods": "ODS 03 – SAÚDE E BEM ESTAR"
      },
      {
        "fator": "Doenças Transmissíveis (AIDS, tuberculose, hanseníase, negligenciadas)",
        "icone": "03.06",
        "definicao": "Doenças que passam de uma pessoa para outra, como a gripe ou a tuberculose.",
        "ods": 3,
        "nome_ods": "ODS 03 – SAÚDE E BEM ESTAR"
      },
      {
        "fator": "Doenças não transmissíveis (crônicas)",
        "icone": "03.07",
        "definicao": "Doenças que não passam de uma pessoa para outra, como a pressão alta, o diabetes ou problemas do coração.",
        "ods": 3,
        "nome_ods": "ODS 03 – SAÚDE E BEM ESTAR"
      },
      {
        "fator": "Uso de drogas e álcool",
        "icone": "03.08",
        "definicao": "Quando o uso de álcool, cigarro ou drogas prejudica a saúde do corpo, da mente e a convivência com os outros.",
        "ods": 3,
        "nome_ods": "ODS 03 – SAÚDE E BEM ESTAR"
      },
      {
        "fator": "Acidentes em estradas",
        "icone": "03.09",
        "definicao": "Colisões, batidas e atropelamentos que causam ferimentos ou mortes.",
        "ods": 3,
        "nome_ods": "ODS 03 – SAÚDE E BEM ESTAR"
      },
      {
        "fator": "Saúde sexual e reprodutiva",
        "icone": "03.10",
        "definicao": "Cuidados com o corpo, prevenção de doenças, acesso a absorvente, acesso a anticoncepcionais e o direito de decidir, com segurança, se quer ou não ter filhos.",
        "ods": 3,
        "nome_ods": "ODS 03 – SAÚDE E BEM ESTAR"
      },
      {
        "fator": "Acesso a medicamentos",
        "icone": "03.11",
        "definicao": "Poder conseguir os remédios de que se precisa, de graça ou por um preço que dá para pagar.",
        "ods": 3,
        "nome_ods": "ODS 03 – SAÚDE E BEM ESTAR"
      },
      {
        "fator": "Cobertura vacinal",
        "icone": "03.11",
        "definicao": "Quem precisa de vacina e consegue ser vacinado. Quantidade de pessoas que tomaram as vacinas. Quanto mais gente vacinada, mais protegida fica a comunidade.",
        "ods": 3,
        "nome_ods": "ODS 03 – SAÚDE E BEM ESTAR"
      },
      {
        "fator": "Serviços de saúde",
        "icone": "03.16",
        "definicao": "Ter hospitais, postos de saúde, remédios e vacinas ao alcance de todos. Salva vidas e evita doenças.",
        "ods": 3,
        "nome_ods": "ODS 03 – SAÚDE E BEM ESTAR"
      },
      {
        "fator": "Profissionais de saúde",
        "icone": "03.17",
        "definicao": "São todas as pessoas que trabalham cuidando da nossa saúde, como médicos, enfermeiros e agentes de saúde.",
        "ods": 3,
        "nome_ods": "ODS 03 – SAÚDE E BEM ESTAR"
      },
      {
        "fator": "Tornado/Vendaval",
        "icone": "03.18",
        "definicao": "Ventos muito fortes que podem destruir casas, derrubar árvores e postes e machucar ou matar as pessoas.",
        "ods": 13,
        "nome_ods": "ODS 13 – AÇÃO CONTRA A MUDANÇA GLOBAL DO CLIMA"
      },
      {
        "fator": "Saúde mental",
        "icone": "03.19",
        "definicao": "Existe o cuidado com os sentimentos e com o pensamento para que a pessoa consiga viver e trabalhar bem.",
        "ods": 3,
        "nome_ods": "ODS 03 – SAÚDE E BEM ESTAR"
      },
      {
        "fator": "Saúde do Idoso",
        "icone": "03.20",
        "definicao": "Existe atendimento especial para quem é mais velho, garantindo que eles tenham saúde e autonomia.",
        "ods": 3,
        "nome_ods": "ODS 03 – SAÚDE E BEM ESTAR"
      },
      {
        "fator": "Acesso à água e saneamento",
        "icone": "06.01",
        "definicao": "Ter água limpa na torneira e canos que levam a sujeira de casa embora para ser tratada, sem poluir os rios.",
        "ods": 6,
        "nome_ods": "ODS 06 – ÁGUA POTÁVEL E SANEAMENTO"
      },
      {
        "fator": "Contaminação e poluição do ar, da água e do solo",
        "icone": "06.02",
        "definicao": "Quando lixo, esgoto ou produtos tóxicos sujam a água, o solo ou o ar.",
        "ods": 6,
        "nome_ods": "ODS 06 – ÁGUA POTÁVEL E SANEAMENTO"
      },
      {
        "fator": "Participação das comunidades locais na gestão da água e saneamento",
        "icone": "06.04",
        "definicao": "Envolver os moradores nas decisões sobre o uso e cuidado da água e do esgoto.",
        "ods": 6,
        "nome_ods": "ODS 06 – ÁGUA POTÁVEL E SANEAMENTO"
      },
      {
        "fator": "Gestão da água e saneamento",
        "icone": "06.06",
        "definicao": "Controlar como a água é usada em casas, indústrias, plantações e evitar a falta. Garante água para todos, mesmo em tempos de seca.",
        "ods": 6,
        "nome_ods": "ODS 06 – ÁGUA POTÁVEL E SANEAMENTO"
      },
      {
        "fator": "Gestão de riscos e emergências",
        "icone": "11.05",
        "definicao": "Ações organizadas pelo poder público e pela comunidade para lidar com desastres naturais e eventos extremos.",
        "ods": 11,
        "nome_ods": "ODS 11 – CIDADES E COMUNIDADES SUSTENTÁVEIS"
      },
      {
        "fator": "Qualidade do ar",
        "icone": "11.06",
        "definicao": "Controle da poluição atmosférica nas cidades. Evita doenças respiratórias e melhora o bem-estar.",
        "ods": 11,
        "nome_ods": "ODS 11 – CIDADES E COMUNIDADES SUSTENTÁVEIS"
      },
      {
        "fator": "Rota de fuga",
        "icone": "11.08",
        "definicao": "Caminho seguro para as pessoas saírem rápido de um lugar em caso de perigo, como enchente ou deslizamento.",
        "ods": 13,
        "nome_ods": "ODS 13 – AÇÃO CONTRA A MUDANÇA GLOBAL DO CLIMA"
      },
      {
        "fator": "Segurança",
        "icone": "11.10",
        "definicao": "Policiamento e delegacias. Redução da violência e promoção da paz e proteção na comunidade.",
        "ods": 11,
        "nome_ods": "ODS 11 – CIDADES E COMUNIDADES SUSTENTÁVEIS"
      },
      {
        "fator": "Violência",
        "icone": "11.13",
        "definicao": "Atos que machucam o corpo ou a mente das pessoas e que tiram a paz de toda a comunidade.",
        "ods": 11,
        "nome_ods": "ODS 11 – CIDADES E COMUNIDADES SUSTENTÁVEIS"
      },
      {
        "fator": "Comunicação e gestão pós-desastre",
        "icone": "11.14",
        "definicao": "Avisar, organizar e ajudar as pessoas depois de um desastre, para que ninguém fique sem informação e socorro.",
        "ods": 11,
        "nome_ods": "ODS 11 – CIDADES E COMUNIDADES SUSTENTÁVEIS"
      },
      {
        "fator": "Seca/Estiagem",
        "icone": "12.04",
        "definicao": "Período longo sem chuva, que faz faltar água para beber, cozinhar e plantar.",
        "ods": 13,
        "nome_ods": "ODS 13 – AÇÃO CONTRA A MUDANÇA GLOBAL DO CLIMA"
      },
      {
        "fator": "Acesso a serviços essenciais de energia, abastecimento de água, coleta de lixo etc.",
        "icone": "12.08",
        "definicao": "Ter em casa os serviços básicos, como luz, água encanada e caminhão que recolhe o lixo.",
        "ods": 6,
        "nome_ods": "ODS 06 – ÁGUA POTÁVEL E SANEAMENTO"
      },
      {
        "fator": "Gestão de riscos e emergências (defesa civil, bombeiros, brigadas e outros coletivos)",
        "icone": "13.01",
        "definicao": "Trabalho da defesa civil, bombeiros e grupos da comunidade para evitar desastres e socorrer as pessoas quando algo acontece.",
        "ods": 13,
        "nome_ods": "ODS 13 – AÇÃO CONTRA A MUDANÇA GLOBAL DO CLIMA"
      },
      {
        "fator": "Pontos de riscos e desastres no território",
        "icone": "13.02",
        "definicao": "Locais onde há mais chance de enchentes, deslizamentos ou outras situações perigosas.",
        "ods": 13,
        "nome_ods": "ODS 13 – AÇÃO CONTRA A MUDANÇA GLOBAL DO CLIMA"
      },
      {
        "fator": "Enchentes e alagamentos",
        "icone": "14.01",
        "definicao": "Quando a chuva forte ou a cheia do rio faz a água invadir ruas e casas.",
        "ods": 13,
        "nome_ods": "ODS 13 – AÇÃO CONTRA A MUDANÇA GLOBAL DO CLIMA"
      },
      {
        "fator": "Infestações e pragas (mosquito, carrapato, escorpião, animais peçonhentos etc.)",
        "icone": "14.06",
        "definicao": "Quando bichos como mosquitos, escorpiões e carrapatos aparecem em grande quantidade e colocam a saúde das pessoas em risco.",
        "ods": 3,
        "nome_ods": "ODS 03 – SAÚDE E BEM ESTAR"
      },
      {
        "fator": "Pontos de deslizamento de terra",
        "icone": "15.04",
        "definicao": "Lugares onde o barro e as pedras podem escorregar morro abaixo, principalmente quando chove muito.",
        "ods": 13,
        "nome_ods": "ODS 13 – AÇÃO CONTRA A MUDANÇA GLOBAL DO CLIMA"
      },
      {
        "fator": "Sirenes e alertas de emergências",
        "icone": "16.11",
        "definicao": "O bom estado das ruas, calçadas e estradas para que as pessoas e carros possam circular com facilidade.",
        "ods": 13,
        "nome_ods": "ODS 13 – AÇÃO CONTRA A MUDANÇA GLOBAL DO CLIMA"
      },
      {
        "fator": "Queimada/ Incêndio",
        "icone": "16.13",
        "definicao": "Fogo que se espalha no mato, em plantações ou em casas, destruindo a natureza e colocando vidas em perigo.",
        "ods": 13,
        "nome_ods": "ODS 13 – AÇÃO CONTRA A MUDANÇA GLOBAL DO CLIMA"
      },
      {
        "fator": "Ponto de encontro em emergências",
        "icone": "18.02",
        "definicao": "Lugar combinado onde as pessoas devem se reunir em segurança quando acontece um desastre.",
        "ods": 13,
        "nome_ods": "ODS 13 – AÇÃO CONTRA A MUDANÇA GLOBAL DO CLIMA"
      }
    ]
  },
  {
    "id": "Eixo 3",
    "titulo": "Nossos Corpos Silenciados",
    "foco": "Gênero, raça, direitos fundamentais e empoderamento",
    "cor": "#7A2C8E",
    "ordem": 3,
    "fatores": [
      {
        "fator": "Pobreza",
        "icone": "01.01",
        "definicao": "É a falta de dinheiro e de condições básicas de vida, o que impede a pessoa de ter uma vida digna e boas oportunidades.",
        "ods": 1,
        "nome_ods": "ODS 01 – ERRADICAÇÃO DA POBREZA"
      },
      {
        "fator": "Discriminação e violência contra mulheres e meninas",
        "icone": "05.01",
        "definicao": "Tratar alguém mal ou de forma injusta pelo simples fato de ela ser mulher.",
        "ods": 5,
        "nome_ods": "ODS 05 – IGUALDADE DE GÊNERO"
      },
      {
        "fator": "Casamentos prematuros, forçados e de crianças",
        "icone": "05.03",
        "definicao": "Quando adolescentes ou crianças são obrigados a casar contra a vontade ou antes de terem idade para decidir.",
        "ods": 5,
        "nome_ods": "ODS 05 – IGUALDADE DE GÊNERO"
      },
      {
        "fator": "Igualdade de oportunidades para promover o empoderamento das mulheres",
        "icone": "05.05",
        "definicao": "Garantir que mulheres e homens tenham as mesmas chances na vida, no trabalho, na comunidade e na política.",
        "ods": 5,
        "nome_ods": "ODS 05 – IGUALDADE DE GÊNERO"
      },
      {
        "fator": "Propriedade e controle sobre a terra para as mulheres",
        "icone": "05.08",
        "definicao": "Direito das mulheres de possuir e administrar terras e bens.",
        "ods": 5,
        "nome_ods": "ODS 05 – IGUALDADE DE GÊNERO"
      },
      {
        "fator": "Ação do Estado na coordenação e coerência de políticas para igualdade de gênero",
        "icone": "05.12",
        "definicao": "Quando o governo cria e faz cumprir políticas que fazem as mulheres tenham as mesmas chances que os homens tem na vida, no trabalho, na comunidade e na política",
        "ods": 5,
        "nome_ods": "ODS 05 – IGUALDADE DE GÊNERO"
      },
      {
        "fator": "Tráfico de pessoas",
        "icone": "08.13",
        "definicao": "O crime de enganar ou levar pessoas para longe de casa para usá-las em trabalhos forçados ou exploração.",
        "ods": 8,
        "nome_ods": "ODS 08 – TRABALHO DECENTE E CRESCIMENTO ECONÔMICO"
      },
      {
        "fator": "Direitos fundamentais",
        "icone": "08.15",
        "definicao": "São as garantias na lei que servem para acabar de vez com a falta de condições básicas e proteger o cidadão.",
        "ods": 8,
        "nome_ods": "ODS 08 – TRABALHO DECENTE E CRESCIMENTO ECONÔMICO"
      },
      {
        "fator": "Monitoramento dos vulneráveis (idosos, PCDs e crianças)",
        "icone": "08.24",
        "definicao": "Acompanhar de perto idosos, crianças e pessoas com deficiência para garantir que estejam bem e protegidos.",
        "ods": 10,
        "nome_ods": "ODS 10 – REDUÇÃO DAS DESIGUALDADES"
      },
      {
        "fator": "Empoderamento e inclusão social, econômica e política",
        "icone": "10.02",
        "definicao": "Garantia de que todas as pessoas tenham voz, acesso a recursos e participação nas decisões.",
        "ods": 10,
        "nome_ods": "ODS 10 – REDUÇÃO DAS DESIGUALDADES"
      },
      {
        "fator": "Acessibilidade e inclusão",
        "icone": "10.04",
        "definicao": "Garantir que pessoas com deficiência possam entrar, circular e participar de tudo, sem barreiras.",
        "ods": 10,
        "nome_ods": "ODS 10 – REDUÇÃO DAS DESIGUALDADES"
      },
      {
        "fator": "Serviços públicos e políticas de proteção social",
        "icone": "10.07",
        "definicao": "É a ajuda que o governo dá, como postos de saúde e assistência social, para diminuir a situação de risco ou fragilidade das pessoas.",
        "ods": 10,
        "nome_ods": "ODS 10 – REDUÇÃO DAS DESIGUALDADES"
      },
      {
        "fator": "Migração",
        "icone": "10.10",
        "definicao": "Deslocamento de pessoas entre regiões ou países por trabalho, refúgio ou oportunidades.",
        "ods": 10,
        "nome_ods": "ODS 10 – REDUÇÃO DAS DESIGUALDADES"
      },
      {
        "fator": "Acolhimento de vulneráveis e população em situação de rua",
        "icone": "12.09",
        "definicao": "Oferecer abrigo, comida e cuidado para quem vive na rua ou está em situação de fragilidade.",
        "ods": 10,
        "nome_ods": "ODS 10 – REDUÇÃO DAS DESIGUALDADES"
      },
      {
        "fator": "Acesso a direitos fundamentais",
        "icone": "16.14",
        "definicao": "Garantir que todos tenham o básico previsto em lei, como saúde, educação, moradia e documentos.",
        "ods": 16,
        "nome_ods": "ODS 16 – PAZ, JUSTIÇA E INSTITUIÇÕES EFICAZES"
      },
      {
        "fator": "Discriminação racial",
        "icone": "18.01",
        "definicao": "Tratar alguém mal ou de forma injusta por causa da cor da pele ou da sua origem.",
        "ods": 18,
        "nome_ods": "ODS 18 – IGUALDADE ÉTNICO-RACIAL"
      },
      {
        "fator": "Racismo Ambiental",
        "icone": "18.06",
        "definicao": "Quando os problemas do meio ambiente, como lixo e enchentes, atingem mais os bairros onde vivem pessoas negras, indígenas e pobres.",
        "ods": 18,
        "nome_ods": "ODS 18 – IGUALDADE ÉTNICO-RACIAL"
      },
      {
        "fator": "Igualdade racial",
        "icone": "18.07",
        "definicao": "Garantir que negros, brancos e indígenas tenham as mesmas chances e sejam respeitados da mesma forma.",
        "ods": 18,
        "nome_ods": "ODS 18 – IGUALDADE ÉTNICO-RACIAL"
      },
      {
        "fator": "Igualdade de direitos à propriedade e controle da terra (comunidades tradicionais e quilombolas)",
        "icone": "18.11",
        "definicao": "Garantir que quilombolas, indígenas e outras comunidades tradicionais tenham o direito de possuir e cuidar das suas terras.",
        "ods": 18,
        "nome_ods": "ODS 18 – IGUALDADE ÉTNICO-RACIAL"
      }
    ]
  },
  {
    "id": "Eixo 4",
    "titulo": "A Terra de Quem?",
    "foco": "Soberania territorial, meio ambiente, biodiversidade e clima",
    "cor": "#4C9F38",
    "ordem": 4,
    "fatores": [
      {
        "fator": "Acesso a recursos financeiros para gestão, conservação sustentável da biodiversidade (investimentos públicos e privados)",
        "icone": "01.02",
        "definicao": "Dinheiro de governos e empresas para ajudar a cuidar e proteger a natureza e a variedade de vida que existe nela.",
        "ods": 1,
        "nome_ods": "ODS 01 – ERRADICAÇÃO DA POBREZA"
      },
      {
        "fator": "Gestão de bancos de sementes",
        "icone": "02.05",
        "definicao": "É a prática de guardar e cuidar de sementes e mudas para manter a diversidade de alimentos e proteger espécies importantes.",
        "ods": 2,
        "nome_ods": "ODS 02 – FOME ZERO E AGRICULTURA SUSTENTÁVEL"
      },
      {
        "fator": "Plantas medicinais (uso e plantio)",
        "icone": "03.12",
        "definicao": "Uso de ervas e plantas para tratar doenças ou aliviar sintomas. Valoriza saberes tradicionais e amplia formas de cuidado à saúde.",
        "ods": 3,
        "nome_ods": "ODS 03 – SAÚDE E BEM ESTAR"
      },
      {
        "fator": "Proteção e restauração de ecossistemas hídricos",
        "icone": "06.03",
        "definicao": "Cuidar de rios, lagos e nascentes, que são fontes naturais de água.",
        "ods": 6,
        "nome_ods": "ODS 06 – ÁGUA POTÁVEL E SANEAMENTO"
      },
      {
        "fator": "Tecnologias Sociais",
        "icone": "07.02",
        "definicao": "Soluções simples e baratas, criadas junto com a comunidade, para resolver problemas do dia a dia, como cisternas para guardar água da chuva.",
        "ods": 11,
        "nome_ods": "ODS 11 – CIDADES E COMUNIDADES SUSTENTÁVEIS"
      },
      {
        "fator": "Pesquisa científica e inovação",
        "icone": "09.07",
        "definicao": "Desenvolvimento de novos conhecimentos e tecnologias.",
        "ods": 9,
        "nome_ods": "ODS 09 – INDÚSTRIA, INOVAÇÃO E INFRAESTRUTURA"
      },
      {
        "fator": "Construções sustentáveis e resilientes",
        "icone": "11.16",
        "definicao": "Edificações com menor impacto ambiental e mais resistência. Reduz emissões, consumo de energia e aumenta a segurança.",
        "ods": 11,
        "nome_ods": "ODS 11 – CIDADES E COMUNIDADES SUSTENTÁVEIS"
      },
      {
        "fator": "Tecnologias ambientalmente corretas",
        "icone": "12.02",
        "definicao": "Soluções tecnológicas que reduzem impactos ambientais e sociais.",
        "ods": 12,
        "nome_ods": "ODS 12 – CONSUMO E PRODUÇÃO RESPONSÁVEIS"
      },
      {
        "fator": "Acesso à informação de qualidade",
        "icone": "12.11",
        "definicao": "Poder receber informações verdadeiras e fáceis de entender para tomar boas decisões e não ser enganado.",
        "ods": 12,
        "nome_ods": "ODS 12 – CONSUMO E PRODUÇÃO RESPONSÁVEIS"
      },
      {
        "fator": "Reconstruções sustentáveis e resilientes",
        "icone": "12.14",
        "definicao": "Reconstruir o que foi destruído em desastres de um jeito mais forte e que respeite a natureza, para aguentar melhor os próximos eventos.",
        "ods": 12,
        "nome_ods": "ODS 12 – CONSUMO E PRODUÇÃO RESPONSÁVEIS"
      },
      {
        "fator": "Educação ambiental e para adaptação climática",
        "icone": "13.03",
        "definicao": "Ensino e conscientização sobre os efeitos das mudanças climáticas e como enfrentá-las. Prepara comunidades para se adaptarem e evitarem riscos.",
        "ods": 13,
        "nome_ods": "ODS 13 – AÇÃO CONTRA A MUDANÇA GLOBAL DO CLIMA"
      },
      {
        "fator": "Planejamento relacionado à mudança do clima e à gestão eficaz",
        "icone": "13.04",
        "definicao": "Estratégias e políticas públicas voltadas para a resiliência climática. Garante respostas organizadas e sustentáveis aos desafios climáticos.",
        "ods": 13,
        "nome_ods": "ODS 13 – AÇÃO CONTRA A MUDANÇA GLOBAL DO CLIMA"
      },
      {
        "fator": "Gerenciar e proteger os oceanos, mares e recursos marinhos de forma sustentável",
        "icone": "14.02",
        "definicao": "Cuidar do mar e do que vive nele, usando seus recursos sem destruir, para que não faltem no futuro.",
        "ods": 14,
        "nome_ods": "ODS 14 – VIDA NA ÁGUA"
      },
      {
        "fator": "Pesquisa científica e inovação para recuperação de ambientes",
        "icone": "14.07",
        "definicao": "Estudos e novas ideias para ajudar a recuperar rios, matas e mares que foram destruídos.",
        "ods": 14,
        "nome_ods": "ODS 14 – VIDA NA ÁGUA"
      },
      {
        "fator": "Pescadores artesanais",
        "icone": "14.08",
        "definicao": "Trabalhadores que dependem da pesca tradicional e de pequena escala. Contribuem para a economia local e cultura costeira.",
        "ods": 14,
        "nome_ods": "ODS 14 – VIDA NA ÁGUA"
      },
      {
        "fator": "Desmatamento e solos degradados",
        "icone": "15.03",
        "definicao": "É a remoção da vegetação nativa e da perda de qualidade dos solos. Compromete a produção agrícola, a biodiversidade e os recursos hídricos.",
        "ods": 15,
        "nome_ods": "ODS 15 – VIDA TERRESTRE"
      },
      {
        "fator": "Gestão sustentável dos recursos naturais",
        "icone": "15.06",
        "definicao": "É o uso racional dos recursos naturais, garantindo a conservação da biodiversidade.",
        "ods": 15,
        "nome_ods": "ODS 15 – VIDA TERRESTRE"
      },
      {
        "fator": "Conhecimentos e práticas tradicionais de conservação e uso sustentável",
        "icone": "15.08",
        "definicao": "Valoriza saberes indígenas e comunitários sobre o uso sustentável dos recursos naturais.",
        "ods": 15,
        "nome_ods": "ODS 15 – VIDA TERRESTRE"
      },
      {
        "fator": "Hospital veterinário e resgate de animais",
        "icone": "15.09",
        "definicao": "Locais e serviços que cuidam da saúde dos animais e os socorrem quando estão feridos ou abandonados.",
        "ods": 15,
        "nome_ods": "ODS 15 – VIDA TERRESTRE"
      },
      {
        "fator": "Tráfico de espécies da flora e fauna (caça e pesca ilegal)",
        "icone": "15.10",
        "definicao": "Comércio ilegal de plantas e animais, muitas vezes ameaçados de extinção. Enfraquece os ecossistemas e ameaça a biodiversidade global.",
        "ods": 15,
        "nome_ods": "ODS 15 – VIDA TERRESTRE"
      },
      {
        "fator": "Espécies exóticas invasoras",
        "icone": "15.11",
        "definicao": "Animais ou plantas introduzidas em novos ambientes que se proliferam descontroladamente.",
        "ods": 15,
        "nome_ods": "ODS 15 – VIDA TERRESTRE"
      },
      {
        "fator": "Gestão sustentável da biodiversidade para o desenvolvimento e redução da pobreza",
        "icone": "15.12",
        "definicao": "Integração da conservação da natureza com o desenvolvimento econômico e social. Ajuda comunidades a gerarem renda de forma sustentável, promovendo bem-estar.",
        "ods": 15,
        "nome_ods": "ODS 15 – VIDA TERRESTRE"
      },
      {
        "fator": "Recursos financeiros para conservação sustentável da biodiversidade",
        "icone": "15.13",
        "definicao": "É o investimento público e privado em ações de preservação ambiental.",
        "ods": 15,
        "nome_ods": "ODS 15 – VIDA TERRESTRE"
      },
      {
        "fator": "Transferência de tecnologias ambientalmente corretas (acesso)",
        "icone": "17.03",
        "definicao": "Fazer com que soluções e equipamentos que não agridem a natureza cheguem a quem precisa deles.",
        "ods": 17,
        "nome_ods": "ODS 17 – PARCERIA E MEIOS DE IMPLEMENTAÇÃO"
      },
      {
        "fator": "Reflorestamento",
        "icone": "18.12",
        "definicao": "Envolve ações para recuperar áreas degradadas e restaurar a cobertura vegetal original. Combate as mudanças climáticas e ajuda na preservação da fauna e flora locais.",
        "ods": 15,
        "nome_ods": "ODS 15 – VIDA TERRESTRE"
      }
    ]
  },
  {
    "id": "Eixo 5",
    "titulo": "A Cidade Negada",
    "foco": "Infraestrutura, educação, cultura e território urbano-rural",
    "cor": "#1868A8",
    "ordem": 5,
    "fatores": [
      {
        "fator": "Disponibilidade a abrigos para emergências",
        "icone": "02.10",
        "definicao": "Existência de lugares seguros para as pessoas ficarem quando precisam sair de casa por causa de um desastre.",
        "ods": 13,
        "nome_ods": "ODS 13 – AÇÃO CONTRA A MUDANÇA GLOBAL DO CLIMA"
      },
      {
        "fator": "Vias obstruídas e danificadas – vias municipais, estaduais e federais",
        "icone": "03.09",
        "definicao": "Ruas e estradas fechadas ou estragadas, que dificultam a passagem de pessoas, ônibus e do socorro.",
        "ods": 3,
        "nome_ods": "ODS 03 – SAÚDE E BEM ESTAR"
      },
      {
        "fator": "Acidentes no transporte de produtos perigosos",
        "icone": "03.14",
        "definicao": "Quando caminhões que carregam combustível ou produtos químicos sofrem acidentes e colocam pessoas e natureza em risco.",
        "ods": 3,
        "nome_ods": "ODS 03 – SAÚDE E BEM ESTAR"
      },
      {
        "fator": "Educação – ensino primário",
        "icone": "04.01",
        "definicao": "É o caminho de estudo que vai desde o aprendizado de ler, escrever, fazer contas e compreender o mundo.",
        "ods": 4,
        "nome_ods": "ODS 04 – EDUCAÇÃO DE QUALIDADE"
      },
      {
        "fator": "Educação Técnica e profissional",
        "icone": "04.04",
        "definicao": "São cursos que ensinam uma profissão e preparam para o mercado de trabalho.",
        "ods": 4,
        "nome_ods": "ODS 04 – EDUCAÇÃO DE QUALIDADE"
      },
      {
        "fator": "Educação Superior",
        "icone": "04.05",
        "definicao": "É a faculdade ou universidade, onde a pessoa se especializa em uma área do conhecimento.",
        "ods": 4,
        "nome_ods": "ODS 04 – EDUCAÇÃO DE QUALIDADE"
      },
      {
        "fator": "Tecnologias de informação e comunicação",
        "icone": "04.06",
        "definicao": "São as ferramentas que usamos para nos conectar, como computadores, internet e celulares.",
        "ods": 4,
        "nome_ods": "ODS 04 – EDUCAÇÃO DE QUALIDADE"
      },
      {
        "fator": "Educação pública",
        "icone": "04.07",
        "definicao": "Escolas gratuitas mantidas pelo governo para que todos possam estudar sem pagar.",
        "ods": 4,
        "nome_ods": "ODS 04 – EDUCAÇÃO DE QUALIDADE"
      },
      {
        "fator": "Alfabetização – EJA",
        "icone": "04.08",
        "definicao": "Ensino para jovens e adultos que não puderam estudar ou aprender a ler e escrever quando eram crianças.",
        "ods": 4,
        "nome_ods": "ODS 04 – EDUCAÇÃO DE QUALIDADE"
      },
      {
        "fator": "Formação em Tecnologias Sociais",
        "icone": "04.09",
        "definicao": "Cursos que ensinam a criar e usar soluções simples e baratas para os problemas da comunidade.",
        "ods": 4,
        "nome_ods": "ODS 04 – EDUCAÇÃO DE QUALIDADE"
      },
      {
        "fator": "Bolsas de estudo",
        "icone": "04.10",
        "definicao": "Ajuda em dinheiro para que o estudante consiga pagar o curso ou se manter estudando.",
        "ods": 4,
        "nome_ods": "ODS 04 – EDUCAÇÃO DE QUALIDADE"
      },
      {
        "fator": "Professores qualificados",
        "icone": "04.11",
        "definicao": "Garantir que quem ensina nas escolas tenha o estudo e o preparo necessário para dar uma boa aula.",
        "ods": 4,
        "nome_ods": "ODS 04 – EDUCAÇÃO DE QUALIDADE"
      },
      {
        "fator": "Acesso aos serviços de Energia",
        "icone": "07.01",
        "definicao": "Garantir que todas as pessoas, inclusive nas áreas rurais ou isoladas, tenham eletricidade em casa, na escola, no hospital, etc.",
        "ods": 7,
        "nome_ods": "ODS 07 – ENERGIA LIMPA E ACESSÍVEL"
      },
      {
        "fator": "Serviços de Energia modernos e sustentáveis",
        "icone": "07.03",
        "definicao": "Ter luz em casa que venha de fontes que não agridem a natureza e com um preço que todos consigam pagar.",
        "ods": 7,
        "nome_ods": "ODS 07 – ENERGIA LIMPA E ACESSÍVEL"
      },
      {
        "fator": "Empreendimento com elevado risco de desastres",
        "icone": "08.07",
        "definicao": "Fábricas, barragens ou outras obras que podem causar acidentes graves para as pessoas e a natureza ao redor.",
        "ods": 8,
        "nome_ods": "ODS 08 – TRABALHO DECENTE E CRESCIMENTO ECONÔMICO"
      },
      {
        "fator": "Educação para trabalho",
        "icone": "08.10",
        "definicao": "Preparar as pessoas com conhecimentos para conseguir um emprego.",
        "ods": 8,
        "nome_ods": "ODS 08 – TRABALHO DECENTE E CRESCIMENTO ECONÔMICO"
      },
      {
        "fator": "Promoção de cultura",
        "icone": "08.19",
        "definicao": "Valorizarização política e comunitária das manifestações culturais como música, arte e tradição.",
        "ods": 8,
        "nome_ods": "ODS 08 – TRABALHO DECENTE E CRESCIMENTO ECONÔMICO"
      },
      {
        "fator": "Acesso à cultura",
        "icone": "08.20",
        "definicao": "Poder participar de festas, shows, teatro, museus e outras atividades culturais, perto de casa e sem custar caro.",
        "ods": 8,
        "nome_ods": "ODS 08 – TRABALHO DECENTE E CRESCIMENTO ECONÔMICO"
      },
      {
        "fator": "Sistema viário – vias municipais, estaduais e federais",
        "icone": "09.01",
        "definicao": "Conjunto de ruas, estradas e rodovias que ligam cidades e regiões. Facilita o transporte de pessoas e produtos, impulsionando o comércio.",
        "ods": 9,
        "nome_ods": "ODS 09 – INDÚSTRIA, INOVAÇÃO E INFRAESTRUTURA"
      },
      {
        "fator": "Infraestrutura sustentável e resiliente",
        "icone": "09.08",
        "definicao": "Estruturas físicas duráveis e adaptadas às mudanças climáticas. Reduz riscos de desastres e promove bem-estar.",
        "ods": 9,
        "nome_ods": "ODS 09 – INDÚSTRIA, INOVAÇÃO E INFRAESTRUTURA"
      },
      {
        "fator": "Acesso a tecnologias de informação e comunicação para a inovação e infraestrutura",
        "icone": "09.10",
        "definicao": "Disponibilidade de internet e ferramentas digitais para todos. Facilita a inclusão digital e o desenvolvimento de soluções inovadoras.",
        "ods": 9,
        "nome_ods": "ODS 09 – INDÚSTRIA, INOVAÇÃO E INFRAESTRUTURA"
      },
      {
        "fator": "Habitação",
        "icone": "11.01",
        "definicao": "Ter uma casa segura, com teto, paredes e em um lugar protegido para morar com a família.",
        "ods": 11,
        "nome_ods": "ODS 11 – CIDADES E COMUNIDADES SUSTENTÁVEIS"
      },
      {
        "fator": "Transportes seguros",
        "icone": "11.02",
        "definicao": "Ônibus, trens e barcos que funcionem bem e que levem as pessoas aos lugares sem risco de acidentes.",
        "ods": 11,
        "nome_ods": "ODS 11 – CIDADES E COMUNIDADES SUSTENTÁVEIS"
      },
      {
        "fator": "Urbanização e infraestrutura",
        "icone": "11.03",
        "definicao": "Planejamento urbano com acesso a serviços básicos. Melhora a qualidade de vida e reduz desigualdades territoriais.",
        "ods": 11,
        "nome_ods": "ODS 11 – CIDADES E COMUNIDADES SUSTENTÁVEIS"
      },
      {
        "fator": "Equipamentos públicos de lazer e cultura seguros",
        "icone": "11.04",
        "definicao": "Praças, quadras e centros culturais bem cuidados e seguros para todos usarem.",
        "ods": 11,
        "nome_ods": "ODS 11 – CIDADES E COMUNIDADES SUSTENTÁVEIS"
      },
      {
        "fator": "Esportes",
        "icone": "11.09",
        "definicao": "Acesso a atividades físicas e esportivas nos territórios. Promove saúde, inclusão e cidadania.",
        "ods": 11,
        "nome_ods": "ODS 11 – CIDADES E COMUNIDADES SUSTENTÁVEIS"
      },
      {
        "fator": "Biblioteca",
        "icone": "11.11",
        "definicao": "Acesso à livros e com eles conseguir acesso à leitura, cultura e conhecimento. Contribui para a educação e inclusão cultural.",
        "ods": 11,
        "nome_ods": "ODS 11 – CIDADES E COMUNIDADES SUSTENTÁVEIS"
      },
      {
        "fator": "Lazer",
        "icone": "11.12",
        "definicao": "Espaços e atividades para recreação e convívio social. Favorece saúde mental e relações comunitárias.",
        "ods": 11,
        "nome_ods": "ODS 11 – CIDADES E COMUNIDADES SUSTENTÁVEIS"
      },
      {
        "fator": "Valorização dos saberes e práticas locais",
        "icone": "12.03",
        "definicao": "Reconhecer e dar valor ao que a comunidade sabe e faz, como receitas, festas, artesanato e modos de cuidar da terra.",
        "ods": 12,
        "nome_ods": "ODS 12 – CONSUMO E PRODUÇÃO RESPONSÁVEIS"
      },
      {
        "fator": "Acesso a Iluminação pública",
        "icone": "12.13",
        "definicao": "Ter postes de luz funcionando nas ruas, deixando os caminhos mais seguros à noite.",
        "ods": 11,
        "nome_ods": "ODS 11 – CIDADES E COMUNIDADES SUSTENTÁVEIS"
      },
      {
        "fator": "Acesso a comunicação (internet e telefonia)",
        "icone": "17.01",
        "definicao": "Poder usar telefone e internet para falar com as pessoas, estudar, trabalhar e pedir ajuda.",
        "ods": 11,
        "nome_ods": "ODS 11 – CIDADES E COMUNIDADES SUSTENTÁVEIS"
      }
    ]
  },
  {
    "id": "Eixo 6",
    "titulo": "A Voz na Mesa",
    "foco": "Participação social, governança, transparência e parcerias sociotécnicas",
    "cor": "#158A8A",
    "ordem": 6,
    "fatores": [
      {
        "fator": "Associação de moradores e lideranças locais",
        "icone": "01.06",
        "definicao": "Grupos de vizinhos e pessoas de referência que se organizam para melhorar o bairro e defender a comunidade.",
        "ods": 11,
        "nome_ods": "ODS 11 – CIDADES E COMUNIDADES SUSTENTÁVEIS"
      },
      {
        "fator": "Mobilização de redes e grupos organizados",
        "icone": "02.06",
        "definicao": "Juntar pessoas e grupos para agir em conjunto por uma causa da comunidade.",
        "ods": 11,
        "nome_ods": "ODS 11 – CIDADES E COMUNIDADES SUSTENTÁVEIS"
      },
      {
        "fator": "Rádios comunitárias",
        "icone": "04.02",
        "definicao": "Rádios feitas pela própria comunidade, que informam e dão voz aos moradores da região.",
        "ods": 11,
        "nome_ods": "ODS 11 – CIDADES E COMUNIDADES SUSTENTÁVEIS"
      },
      {
        "fator": "Parcerias entre instituições públicas, privadas e com a sociedade civil",
        "icone": "11.17",
        "definicao": "Quando governo, empresas e grupos da comunidade trabalham juntos para resolver problemas.",
        "ods": 11,
        "nome_ods": "ODS 11 – CIDADES E COMUNIDADES SUSTENTÁVEIS"
      },
      {
        "fator": "Mutirão de limpeza",
        "icone": "12.07",
        "definicao": "Quando os moradores se juntam num dia para limpar ruas, rios e terrenos da comunidade.",
        "ods": 11,
        "nome_ods": "ODS 11 – CIDADES E COMUNIDADES SUSTENTÁVEIS"
      },
      {
        "fator": "Combate ao crime organizado",
        "icone": "16.01",
        "definicao": "Ações da polícia e da justiça contra grupos criminosos, como os que vendem drogas e armas.",
        "ods": 16,
        "nome_ods": "ODS 16 – PAZ, JUSTIÇA E INSTITUIÇÕES EFICAZES"
      },
      {
        "fator": "Participação social na tomada de decisão responsiva, inclusiva e participativa",
        "icone": "16.04",
        "definicao": "Garantir que a população possa opinar e ajudar a decidir o que o governo faz na comunidade.",
        "ods": 16,
        "nome_ods": "ODS 16 – PAZ, JUSTIÇA E INSTITUIÇÕES EFICAZES"
      },
      {
        "fator": "Corrupção e o suborno (em todos os níveis)",
        "icone": "16.06",
        "definicao": "Roubar dinheiro público ou dar dinheiro para funcionários do governo para conseguir algo de forma errada.",
        "ods": 16,
        "nome_ods": "ODS 16 – PAZ, JUSTIÇA E INSTITUIÇÕES EFICAZES"
      },
      {
        "fator": "Instituições públicas e privadas em todos os níveis (transparência ativa)",
        "icone": "16.07",
        "definicao": "Órgãos do governo e empresas que mostram com clareza o que fazem e como usam o dinheiro.",
        "ods": 16,
        "nome_ods": "ODS 16 – PAZ, JUSTIÇA E INSTITUIÇÕES EFICAZES"
      },
      {
        "fator": "Tomada de decisão responsiva, inclusiva e participativa (participação social)",
        "icone": "16.08",
        "definicao": "Decisões do governo tomadas ouvindo a população e incluindo todos os grupos, sem deixar ninguém de fora.",
        "ods": 16,
        "nome_ods": "ODS 16 – PAZ, JUSTIÇA E INSTITUIÇÕES EFICAZES"
      },
      {
        "fator": "Comunicação comunitária - grupos de mensagens",
        "icone": "16.10",
        "definicao": "Grupos de celular, como os de WhatsApp, usados pelos moradores para avisar, informar e se ajudar.",
        "ods": 11,
        "nome_ods": "ODS 11 – CIDADES E COMUNIDADES SUSTENTÁVEIS"
      },
      {
        "fator": "Parcerias multissetoriais",
        "icone": "17.06",
        "definicao": "Colaboração entre governo, sociedade civil e setor privado. Potencializa recursos e soluções inovadoras.",
        "ods": 17,
        "nome_ods": "ODS 17 – PARCERIA E MEIOS DE IMPLEMENTAÇÃO"
      },
      {
        "fator": "Apoio a instituições públicas, privadas e com a sociedade civil (parcerias sociotécnicas)",
        "icone": "17.07",
        "definicao": "Ajuda e trabalho conjunto entre governo, empresas, universidades e comunidade para criar soluções.",
        "ods": 17,
        "nome_ods": "ODS 17 – PARCERIA E MEIOS DE IMPLEMENTAÇÃO"
      },
      {
        "fator": "Estratégias de mobilização (redes e grupos organizados)",
        "icone": "17.09",
        "definicao": "Formas de reunir e animar as pessoas para participarem de ações da comunidade.",
        "ods": 17,
        "nome_ods": "ODS 17 – PARCERIA E MEIOS DE IMPLEMENTAÇÃO"
      },
      {
        "fator": "Grupos de escuta diários",
        "icone": "18.05",
        "definicao": "Encontros ou canais onde as pessoas podem falar do que sentem e do que precisam, sendo ouvidas com frequência.",
        "ods": 17,
        "nome_ods": "ODS 17 – PARCERIA E MEIOS DE IMPLEMENTAÇÃO"
      },
      {
        "fator": "Igrejas, grupos religiosos e outros coletivos que apoiam as situações de emergência",
        "icone": "18.10",
        "definicao": "Igrejas e outros grupos que oferecem abrigo, comida e apoio às pessoas em momentos de desastre.",
        "ods": 17,
        "nome_ods": "ODS 17 – PARCERIA E MEIOS DE IMPLEMENTAÇÃO"
      }
    ]
  }
];
