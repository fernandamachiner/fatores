# Revisão da metodologia: versão 2.0.0

## Origem da versão

Em 19/10/2026 a coordenação revisou a planilha da metodologia para eliminar a divergência e a semelhança recorrentes entre fatores, e definiu a planilha Fatores_organizacao_v1.0.2.xlsx revisada como versão final dos fatores e definições. A planilha foi incorporada como metodologia/planilha/Fatores_organizacao.xlsx e passou a ser a fonte oficial da metodologia. O cadastro metodologia/metodologia.js é gerado a partir dela por metodologia/ferramentas/gerar_metodologia.py, junto com metodologia/registro.json, que guarda as decisões vigentes e os identificadores desativados. Todas as versões anteriores (data.js original, planilha original, planilha 1.0.2 gerada pelo painel, cadastro 1.0.x e tabela de correspondência da Etapa 2) foram eliminadas, assim como o zip aninhado da aplicação anterior, os sete SVGs avulsos e os ícones que deixaram de ter fator.

## Alterações em relação à versão 1.0.2

A matriz passou de 159 para 150 fatores, distribuídos em 29, 38, 18, 24, 29 e 12 por eixo. Os títulos, focos e cores dos eixos não mudaram, e os fatores mantidos preservam o identificador e a ordem relativa.

Fatores retirados, com identificador desativado e não reaproveitável: E2-F24 Gestão de riscos e emergências; E3-F15 Acesso a direitos fundamentais; E4-F23 Recursos financeiros para conservação sustentável da biodiversidade; E5-F07 Tecnologias de informação e comunicação; E5-F31 Acesso a comunicação (internet e telefonia); E6-F10 Tomada de decisão responsiva, inclusiva e participativa (participação social); E6-F12 Parcerias multissetoriais; E6-F13 Apoio a instituições públicas, privadas e com a sociedade civil (parcerias sociotécnicas); E6-F14 Estratégias de mobilização (redes e grupos organizados).

Fatores alterados: E3-F08 Direitos fundamentais recebeu a definição do antigo E3-F15 (Garantir que todos tenham o básico previsto em lei, como saúde, educação, moradia e documentos.); E5-F21 passou a se chamar Tecnologias de informação e comunicação, com o ícone 04.06 e a definição do antigo E5-F07; e a definição de E1-F14 Trabalho infantil voltou a usar mantendo elas na pobreza, forma que a versão 1.0.2 havia corrigido para mantendo-as. A planilha foi aplicada como está, por ser a versão final declarada.

Com a revisão, ficam resolvidos os grupos de sobreposição registrados na pendência P4 da Etapa 2, exceto E4-F06 Pesquisa científica e inovação e E4-F14 Pesquisa científica e inovação para recuperação de ambientes, que permanecem ambos.

## Validação

O cadastro gerado confere célula a célula com a planilha (1.200 células, nenhuma divergência; testes/conferir_metodologia_planilha.py). O validador do cadastro aprovou as dez verificações, incluindo a coerência de títulos e cores com a roda SVG e a ausência de identificador desativado em uso, e mantém apenas os dois avisos dos ícones compartilhados (03.09 e 03.11), por decisão da coordenação. A pasta assets/icons passou a ter 592 arquivos, as quatro variantes dos 148 códigos em uso. O teste de navegação percorreu os 6 eixos e abriu e fechou os 150 popups por file:// e por servidor http, sem falhas, erros de console ou recursos ausentes, e a interface exibe exatamente os nomes, ícones e definições do cadastro.

O diagnóstico de Campo Grande/MS foi refeito pela coordenação segundo a organização final dos fatores (Diagnostico_Situacional_CampoGrande_MS_Matriz_v1.0.2.docx), com os 150 fatores identificados pelo ID; ver relatorios/etapa3-relatorio.md. O documento se refere a esta versão como Matriz de Fatores v1.0.2.
