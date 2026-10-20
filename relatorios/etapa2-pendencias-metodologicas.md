# Etapa 2. Pendências metodológicas

Situação em 19/10/2026, versão 1.0.1 do cadastro. P1 e P2 foram decididas e P3 foi corrigida por autorização da coordenação metodológica. As decisões e a alteração estão registradas nos campos decisoes e alteracoes de metodologia/metodologia.js. Os demais itens seguem sem alteração e dependem de decisão. Os identificadores citados seguem o formato estável E<eixo>-F<posição>, definido nesta etapa.

## P1. Matriz de referência (decidida)

Decisão de 19/10/2026: a matriz de 159 fatores do painel é a estrutura metodológica oficial. O Diagnóstico Situacional de Campo Grande/MS, organizado em 126 fatores com códigos do tipo E1-20, será vinculado a essa estrutura na Etapa 3 por meio de tabela de correspondência revisada. Esses códigos não equivalem aos identificadores E1-F20, E3-F13 e E4-F22 do cadastro.

## P2. Códigos de ícone compartilhados (decidida, aguardando novos ícones)

Decisão de 19/10/2026: os ícones 03.09 (E2-F11 Acidentes em estradas e E5-F02 Vias obstruídas e danificadas) e 03.11 (E2-F13 Acesso a medicamentos e E2-F14 Cobertura vacinal) permanecem compartilhados até que a equipe de design da Fiocruz conclua os novos ícones. A substituição exigirá apenas trocar o campo icone dos fatores afetados e incluir as quatro variantes do arquivo em assets/icons. O validador continua emitindo aviso para esses dois casos, como lembrete.

## P3. Descrição incompatível com o fator (corrigida)

A descrição de E2-F37 Sirenes e alertas de emergências tratava de vias de circulação. Por autorização de 19/10/2026, passou a ser: Sinais sonoros ou visuais para avisar que há um perigo iminente por perto e que você precisa se proteger rápido. A inicial maiúscula e o ponto final seguem o padrão das demais descrições. A alteração consta do histórico do cadastro com o valor anterior.

## P4. Fatores com possível sobreposição conceitual

Os grupos abaixo têm nomes muito próximos e podem gerar dúvida na atribuição de diagnósticos territoriais. Confirmar se representam conceitos distintos ou se devem ser consolidados em revisão futura da matriz.

| Grupo | Fatores |
|---|---|
| Gestão de riscos | E2-F24 Gestão de riscos e emergências; E2-F32 Gestão de riscos e emergências (defesa civil, bombeiros, brigadas e outros coletivos) |
| Participação na decisão | E6-F07 Participação social na tomada de decisão responsiva, inclusiva e participativa; E6-F10 Tomada de decisão responsiva, inclusiva e participativa (participação social) |
| Parcerias | E6-F04 Parcerias entre instituições públicas, privadas e com a sociedade civil; E6-F12 Parcerias multissetoriais; E6-F13 Apoio a instituições públicas, privadas e com a sociedade civil (parcerias sociotécnicas) |
| Mobilização | E6-F02 Mobilização de redes e grupos organizados; E6-F14 Estratégias de mobilização (redes e grupos organizados) |
| Financiamento da biodiversidade | E4-F01 Acesso a recursos financeiros para gestão, conservação sustentável da biodiversidade (investimentos públicos e privados); E4-F23 Recursos financeiros para conservação sustentável da biodiversidade |
| Direitos fundamentais | E3-F08 Direitos fundamentais; E3-F15 Acesso a direitos fundamentais |
| Tecnologias de informação | E5-F07 Tecnologias de informação e comunicação; E5-F21 Acesso a tecnologias de informação e comunicação para a inovação e infraestrutura; E5-F31 Acesso a comunicação (internet e telefonia) |
| Pesquisa | E4-F06 Pesquisa científica e inovação; E4-F14 Pesquisa científica e inovação para recuperação de ambientes |

## P5. Código de ícone e ODS com numeração diferente

Em 27 fatores os dois primeiros dígitos do código do ícone não coincidem com o ODS atribuído. O caso mais frequente são fatores de desastres classificados no ODS 13 com ícones de outras séries (E2-F01, E2-F17, E2-F26, E2-F30, E2-F34, E2-F36, E2-F37, E2-F38, E2-F39, E5-F01, E1-F29) e fatores comunitários classificados no ODS 11 ou 17 (E6-F01, E6-F02, E6-F03, E6-F05, E6-F11, E6-F15, E6-F16, E4-F05, E5-F30, E5-F31). Os demais são E1-F28, E2-F31, E2-F35, E3-F09, E3-F14 e E4-F25. Isso não configura erro, porque o código pertence ao catálogo ICONOGRAFIA_2026 e não à classificação ODS, mas a classificação ODS desses fatores merece confirmação, já que é exibida no card e no popup. A lista completa está em etapa2-correspondencia-fatores.csv.

## P6. Erros de redação (aguardando autorização)

A revisão integral dos 159 nomes e descrições identificou os erros abaixo. Os itens do grupo A são erros objetivos de ortografia, gramática ou digitação e aparecem hoje no popup. Os do grupo B são escolhas de redação que podem ser mantidas no registro de linguagem simples. Os do grupo C afetam nomes oficiais de fatores e exigem decisão específica.

Grupo A. Correções objetivas nas descrições

| Fator | Trecho atual | Correção proposta |
|---|---|---|
| E5-F17 Promoção de cultura | Valorizarização política | Valorização política |
| E5-F27 Biblioteca | Acesso à livros | Acesso a livros |
| E2-F06 Doenças decorrentes de contaminação | diarréias | diarreias |
| E3-F06 Ação do Estado na coordenação e coerência de políticas para igualdade de gênero | políticas que fazem as mulheres tenham as mesmas chances que os homens tem na vida, no trabalho, na comunidade e na política | políticas que fazem com que as mulheres tenham as mesmas chances que os homens têm na vida, no trabalho, na comunidade e na política. |
| E4-F16 Desmatamento e solos degradados | É a remoção da vegetação nativa e da perda de qualidade dos solos. | É a remoção da vegetação nativa e a perda de qualidade dos solos. |
| E4-F21 Espécies exóticas invasoras | Animais ou plantas introduzidas | Animais ou plantas introduzidos |
| E5-F04 Educação – ensino primário | É o caminho de estudo que vai desde o aprendizado de ler, escrever, fazer contas e compreender o mundo. | É o caminho de estudo que começa com o aprendizado de ler, escrever e fazer contas e ajuda a compreender o mundo. (a frase atual usa desde sem o complemento até) |
| E1-F14 Trabalho infantil | obrigam as crianças para trabalhar | obrigam as crianças a trabalhar |
| E1-F28 Trabalho informal | 13°, FGTS e INSS (sem ponto final) | 13º, FGTS e INSS. (o símbolo usado é o de grau, não o ordinal) |
| E1-F02 Alimentos | mate a fome  todos os dias (espaço duplo) | mate a fome todos os dias |

Grupo B. Ajustes opcionais de regência ou estilo

| Fator | Trecho atual | Alternativa |
|---|---|---|
| E2-F02 Insegurança alimentar | os nutrientes que o corpo precisa | os nutrientes de que o corpo precisa |
| E1-F14 Trabalho infantil | mantendo elas na pobreza | mantendo-as na pobreza |
| E4-F01 Acesso a recursos financeiros para gestão, conservação sustentável da biodiversidade | ajudar a cuidar e proteger a natureza | ajudar a cuidar da natureza e a protegê-la |
| E5-F27 Biblioteca | Acesso a livros e com eles conseguir acesso à leitura | Acesso a livros e, por meio deles, à leitura |

Grupo C. Nomes oficiais de fatores

- E2-F38 Queimada/ Incêndio tem espaço após a barra, ao contrário de Tornado/Vendaval e Seca/Estiagem. Proposta: Queimada/Incêndio.
- E6-F08 Corrupção e o suborno (em todos os níveis) usa artigo só no segundo termo. Proposta: Corrupção e suborno (em todos os níveis).
- E5-F04 Educação – ensino primário usa terminologia anterior à LDB de 1996, que adota ensino fundamental. A mudança é de nomenclatura e depende de decisão metodológica.
- Os separadores são irregulares: E1-F04 e E6-F11 usam hífen, enquanto E5-F02, E5-F04, E5-F09 e E5-F19 usam travessão curto.
- O uso de maiúsculas é irregular (Agricultura Familiar, Produção Orgânica, Doenças Transmissíveis, Saúde do Idoso, Racismo Ambiental, Tecnologias Sociais, Educação Técnica e profissional, Educação Superior, Acesso aos serviços de Energia, Serviços de Energia modernos e sustentáveis, Acesso a Iluminação pública). Padronizar exige decidir se termos como Economia Solidária e Tecnologias Sociais devem manter maiúsculas como conceitos.

## P6a. Descrição com escopo mais restrito que o fator

A descrição de E1-F11 Iniciativas de Economia Solidária limita as iniciativas à produção de alimentos. A economia solidária abrange também artesanato, reciclagem, serviços, finanças solidárias e outras atividades, inclusive as que o próprio diagnóstico de Campo Grande/MS menciona (cooperativas de catadores e bancos comunitários). Recomenda-se ampliar a descrição, com texto a ser definido pela coordenação.

## P7. Fonte metodológica primária

O LEIA-ME original indica que o conteúdo vem da planilha Fatores_organização_Fernanda.xlsx, que não estava disponível. A validação desta etapa usa o data.js publicado como referência. Se a planilha divergir do data.js, a planilha deve ser comparada ao cadastro antes da Etapa 3.

## Pendências técnicas, fora do escopo metodológico

- Em telas de celular (390 px), o cartão dos três princípios no rodapé ultrapassa a largura da tela e provoca rolagem horizontal (página com 502 px). O defeito já existe no painel publicado e será tratado na Etapa 6.
- O zip aninhado aplicacao-6-eixos-standalone.zip (versão anterior, 18,6 MB) e os sete SVGs avulsos em assets continuam no projeto e só serão removidos com sua confirmação.
