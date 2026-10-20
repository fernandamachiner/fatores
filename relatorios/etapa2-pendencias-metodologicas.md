# Etapa 2. Pendências metodológicas

Nenhuma das pendências abaixo foi corrigida. O cadastro em metodologia/metodologia.js reproduz o data.js original sem alteração de nomes, códigos, ordem, rótulos ODS ou descrições. Cada item depende de decisão da coordenação metodológica. Os identificadores citados seguem o formato estável E<eixo>-F<posição>, definido nesta etapa.

## P1. Divergência entre a matriz do painel e a matriz do documento de diagnóstico

O painel contém 159 fatores (29, 39, 19, 25, 31 e 16 por eixo). O Diagnóstico Situacional de Campo Grande/MS declara 126 fatores (21, 26, 19, 25, 21 e 14) e cita códigos do tipo E1-20, E3-13 e E4-22, que pertencem a outra numeração. Esses códigos não equivalem aos identificadores E1-F20, E3-F13 e E4-F22 do cadastro, que designam outros fatores. Nesta etapa a matriz de 159 fatores foi mantida como estrutura oficial, por ser a que está publicada e por vedação de inventar ou eliminar fatores. A Etapa 3 depende de decisão sobre a matriz de referência e, caso mantida a de 159, de uma tabela de correspondência revisada.

## P2. Códigos de ícone compartilhados

O ícone 03.09 é usado por E2-F11 Acidentes em estradas e por E5-F02 Vias obstruídas e danificadas, vias municipais, estaduais e federais. O ícone 03.11 é usado por E2-F13 Acesso a medicamentos e por E2-F14 Cobertura vacinal. Não há prejuízo técnico, porque o vínculo com os diagnósticos passou a ser feito pelo identificador do fator, mas os pares ficam visualmente indistinguíveis na grade e no popup. Confirmar se o compartilhamento é intencional ou se falta ícone próprio.

## P3. Descrição incompatível com o fator

A descrição de E2-F37 Sirenes e alertas de emergências é O bom estado das ruas, calçadas e estradas para que as pessoas e carros possam circular com facilidade. O texto descreve vias de circulação, não sistemas de alerta, e aparenta ter sido deslocado de outro fator. É necessário fornecer a descrição correta.

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

## P6. Ajustes textuais

Os itens a seguir são de redação e não alteram o conteúdo metodológico. Não foram corrigidos por exigirem autorização.

- E5-F17 Promoção de cultura: a descrição começa com Valorizarização.
- E3-F06 Ação do Estado na coordenação e coerência de políticas para igualdade de gênero: a descrição tem problema de concordância (políticas que fazem as mulheres tenham), usa tem em vez de têm e não tem ponto final.
- E1-F28 Trabalho informal: a descrição não tem ponto final.
- E1-F02 Alimentos: a descrição tem espaço duplo.
- E2-F38 Queimada/ Incêndio: o nome tem espaço após a barra, diferente de Tornado/Vendaval e Seca/Estiagem.
- O uso de maiúsculas nos nomes é irregular (por exemplo, Educação Técnica e profissional, Saúde do Idoso, Racismo Ambiental, Acesso a Iluminação pública).

## P7. Fonte metodológica primária

O LEIA-ME original indica que o conteúdo vem da planilha Fatores_organização_Fernanda.xlsx, que não estava disponível. A validação desta etapa usa o data.js publicado como referência. Se a planilha divergir do data.js, a planilha deve ser comparada ao cadastro antes da Etapa 3.

## Pendências técnicas, fora do escopo metodológico

- Em telas de celular (390 px), o cartão dos três princípios no rodapé ultrapassa a largura da tela e provoca rolagem horizontal (página com 502 px). O defeito já existe no painel publicado e será tratado na Etapa 6.
- O zip aninhado aplicacao-6-eixos-standalone.zip (versão anterior, 18,6 MB) e os sete SVGs avulsos em assets continuam no projeto e só serão removidos com sua confirmação.
