# Formato dos dados territoriais

Este documento descreve os arquivos de um território, campo por campo. O procedimento de cadastro está em docs/manual-cadastro-territorios.md.

## 1. Documento de diagnóstico (.docx)

O documento de diagnóstico é a fonte de todos os textos exibidos no painel. Ele segue o formato padrão do modelo territorios/modelos/modelo-diagnostico.docx, gerado a partir da metodologia vigente por territorios/ferramentas/gerar_modelo_documento.py.

| Elemento | Formato | Obrigatório |
|---|---|---|
| Capa | parágrafos comuns antes do primeiro título | não |
| Resumo executivo | título com estilo Título 1 Resumo executivo; parágrafos e, opcionalmente, uma tabela | não |
| Eixo | título com estilo Título 1 no formato Eixo N. Título do eixo, na ordem de 1 a 6 | sim, para cada eixo com fatores |
| Abertura do eixo | tabela logo após o título, com linhas Contradição central: ... e Foco pedagógico: ... | não |
| Introdução do eixo | parágrafos antes do primeiro fator | não |
| Identificação do fator | tabela de uma linha e três colunas: identificador, nome do fator e ODS N, idênticos à metodologia | sim |
| Definição de referência | parágrafo Definição de referência: seguido da definição idêntica à metodologia | sim |
| Diagnóstico do fator | um ou mais parágrafos até a tabela do próximo fator ou o próximo título | sim; ou a frase de ausência |
| Ausência de diagnóstico | parágrafo único Sem diagnóstico disponível. ou Sem diagnóstico disponível: motivo. | quando não houver diagnóstico |
| Síntese estratégica | título com estilo Título 1 Síntese estratégica; subtítulos com estilo Título 2, parágrafos e tabelas | não |
| Notas metodológicas e fontes | título com estilo Título 1 Notas metodológicas e fontes; subtítulos com estilo Título 2, parágrafos e tabelas | não |

Textos de instrução do modelo começam por [PREENCHER e precisam ser apagados ou substituídos.

## 2. Metadados do território (territorios/correspondencias/<id>.meta.json)

Modelo: territorios/modelos/modelo.meta.json. Exemplo real: territorios/correspondencias/campo-grande-ms.meta.json.

| Campo | Conteúdo | Exemplo |
|---|---|---|
| territorio.id | identificador; minúsculas, números e hífens; igual ao nome dos arquivos | dourados-ms |
| territorio.nome | nome da localidade | Dourados |
| territorio.uf | sigla da UF | MS |
| territorio.tipo | município, comunidade, distrito etc. | município |
| territorio.rotulo | nome exibido no seletor, igual ao cadastro | Dourados/MS |
| situacao.status | natureza do conteúdo | diagnóstico situacional |
| situacao.territorio_de_exemplo | true apenas para Campo Grande/MS | false |
| situacao.aviso | frase exibida ao passar o mouse sobre o nome do território | Os textos referem-se exclusivamente a Dourados/MS. |
| documento_fonte.arquivo | caminho do .docx, com a grafia exata | territorios/fontes/Diagnostico_Dourados_MS.docx |
| documento_fonte.titulo | título do documento | Diagnóstico Situacional - Dourados, MS |
| documento_fonte.periodo_referencia | período dos dados do diagnóstico | 2020 a 2026 |
| documento_fonte.responsaveis | equipe ou instituição | Equipe PICAPS Dourados |
| documento_fonte.data_elaboracao | data da versão do documento | 2026-11-15 |
| documento_fonte.matriz_declarada_no_documento | versão da metodologia usada | Matriz de Fatores v1.0.2, 150 fatores |
| campos_excluidos_da_abertura_dos_eixos | linhas da abertura dos eixos que não são levadas aos dados | ["ODS mobilizados"] |
| decisoes | lista de decisões sobre o documento, com data e descrição | [] |

## 3. Fontes e normas (territorios/correspondencias/<id>.fontes.json)

Modelo: territorios/modelos/modelo.fontes.json. Exemplo com os três usos: territorios/modelos/exemplo.fontes.json.

| Campo | Conteúdo |
|---|---|
| parenteses_que_sao_fonte | lista de textos que, quando aparecem entre parênteses em qualquer fator, são registrados como fonte (por exemplo, SES-MS) |
| fontes_no_texto | por identificador de fator, lista de trechos do texto que indicam fonte e não estão entre parênteses |
| referencias_normativas | por identificador de fator, lista de leis, decretos e planos citados no texto |

Todos os trechos precisam aparecer literalmente no texto do fator.

## 4. Arquivo de dados do território (territorios/<id>.js)

Gerado por territorios/ferramentas/gerar_territorio.py. Não deve ser editado à mão, porque a próxima geração substituiria a edição. O arquivo registra um único objeto em window.TERRITORIOS["<id>"], no formato diagnostico-territorial/2:

| Campo | Conteúdo |
|---|---|
| formato | versão do formato: diagnostico-territorial/2 |
| territorio, situacao, decisoes | copiados do meta.json |
| metodologia | arquivo e versão da metodologia usada na geração; se diferir da versão do painel, o painel exibe um alerta |
| documento_fonte | copiado do meta.json, acrescido dos parágrafos da capa |
| resumo_executivo | quadro (tabela) e texto do resumo executivo |
| eixos_documento | para cada eixo: número, título no documento, contradição central, foco pedagógico, introdução e número de fatores no documento |
| sintese_estrategica, notas_metodologicas | seções do documento, com subtítulos, parágrafos e tabelas |
| diagnosticos | um item por fator com diagnóstico, indexado pelo identificador (ver abaixo) |
| fatores_sem_diagnostico | fatores sem diagnóstico, com id, motivo e origem: declarado_no_documento (frase de ausência) ou ausente_do_documento (tabela do fator não encontrada) |
| pendentes_validacao | reservado para textos sem correspondência segura com um fator; vazio no formato padrão |

Cada item de diagnosticos contém:

| Campo | Conteúdo | Exemplo (Campo Grande/MS, E2-F07 Dengue) |
|---|---|---|
| texto | texto integral do documento; parágrafos separados por linha em branco | A dengue é o agravo de maior carga epidêmica em Campo Grande. ... |
| fontes_citadas | fontes registradas no fontes.json que aparecem no texto | SES-MS, Sesau, boletim municipal |
| referencias_normativas | normas registradas no fontes.json | (vazio) |
| periodos_citados | anos e intervalos de anos encontrados automaticamente no texto | 2024, 2026 |
| fatores_relacionados | identificadores de outros fatores mencionados no texto, que o painel mostra como botões | E1-F27, E2-F14, E2-F35, E2-F20, E6-F05 |
| origem | identificador, nome e eixo do fator no documento | E2-F07, Dengue, 2 |
| correspondencia | como o texto foi associado ao fator; no formato padrão, pelo identificador escrito no documento | validada, identificador_no_documento |

Campos metodológicos (nome do fator, ícone, ODS e definição) não são repetidos no arquivo do território: o painel os lê da metodologia, pelo identificador.

## 5. Cadastro de territórios (territorios/indice.js)

| Campo | Conteúdo |
|---|---|
| padrao | identificador do território aberto quando o endereço não indica outro |
| territorios[].id | identificador único |
| territorios[].rotulo | nome exibido no seletor |
| territorios[].tipo e uf | tipo da localidade e UF |
| territorios[].situacao | diagnostico, sem-diagnostico ou simulado (este apenas em testes) |
| territorios[].arquivo | territorios/<id>.js, ou null quando a situação é sem-diagnostico |
