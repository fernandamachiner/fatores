# Etapa 2. Pendências metodológicas

Situação em 19/10/2026, versão 1.0.2 do cadastro. P1 e P2 foram decididas, e P3, P6 e P6a foram corrigidas por autorização da coordenação metodológica. As decisões e a alteração estão registradas nos campos decisoes e alteracoes de metodologia/metodologia.js. Os demais itens seguem sem alteração e dependem de decisão. Os identificadores citados seguem o formato estável E<eixo>-F<posição>, definido nesta etapa.

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

## P6. Erros de redação (corrigidos na versão 1.0.2)

Por autorização de 19/10/2026, foram aplicadas todas as correções propostas, com exceção do termo ensino primário em E5-F04, que permanece por decisão da coordenação. Cada mudança está registrada no campo alteracoes do cadastro, com valor anterior, valor novo e motivo.

Nas descrições, foram corrigidos Valorizarização (E5-F17), a crase em Acesso à livros e a redação da frase (E5-F27), diarréias (E2-F06), a concordância, o acento de têm e o ponto final (E3-F06), o paralelismo em E4-F16, a concordância de introduzidos (E4-F21), a construção desde sem complemento (E5-F04, apenas na descrição), a regência de obrigar e o pronome oblíquo (E1-F14), o ordinal 13º e o ponto final (E1-F28), o espaço duplo (E1-F02), a regência de precisar (E2-F02) e a regência de cuidar (E4-F01).

Nos nomes, foram corrigidos Queimada/Incêndio (E2-F38) e Corrupção e suborno (em todos os níveis) (E6-F08). O separador passou a ser o travessão curto em E1-F04 e E6-F11. A regra de maiúsculas passou a ser maiúscula só na primeira palavra, em siglas, em nomes institucionais (Estado) e nos pares separados por barra (Tornado/Vendaval, Seca/Estiagem, Queimada/Incêndio). A regra foi aplicada a 13 nomes: E1-F03, E1-F05, E1-F11, E2-F08, E2-F19, E3-F17, E4-F05, E5-F05, E5-F06, E5-F10, E5-F13, E5-F14 e E5-F30. Os títulos dos eixos, que seguem padrão de título e estão desenhados na roda, não foram alterados.

## P6a. Descrição de economia solidária (corrigida na versão 1.0.2)

A descrição de E1-F11 Iniciativas de economia solidária, que restringia as iniciativas à produção de alimentos, passou a ser: Formas de trabalho e produção em que as pessoas se unem para gerar renda de maneira coletiva, justa e igualitária.

## P7. Fonte metodológica primária

O LEIA-ME original indica que o conteúdo vem da planilha Fatores_organização_Fernanda.xlsx, que não estava disponível. A validação desta etapa usa o data.js publicado como referência. Se a planilha divergir do data.js, a planilha deve ser comparada ao cadastro antes da Etapa 3.

## Pendências técnicas, fora do escopo metodológico

- Corrigido em 19/10/2026: em telas de até 480 px, o cartão dos três princípios do rodapé provocava rolagem horizontal (página com 502 px em tela de 390 px). A regra de celular que empilha os cartões em coluna também afetava esse cartão, cuja quebra de linha passava a operar como segunda coluna. O cartão passou a ficar em linha com quebra (dois princípios em cima e um embaixo), e a página não tem rolagem horizontal entre 320 px e 1280 px.
- O zip aninhado aplicacao-6-eixos-standalone.zip (versão anterior, 18,6 MB) e os sete SVGs avulsos em assets continuam no projeto e só serão removidos com sua confirmação.
