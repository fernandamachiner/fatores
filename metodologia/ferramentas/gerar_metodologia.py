# Gera metodologia/metodologia.js a partir da planilha oficial da metodologia
# (metodologia/planilha/Fatores_organizacao.xlsx, aba Consolidado) e do
# registro de governança (metodologia/registro.json).
#
# Colunas da aba Consolidado: Eixo | Nome_Eixo | Fator | Ícone | Definição |
# ODS | Nome_ODS | ID. Cada linha é um fator. A ordem das linhas dentro de
# cada eixo é a ordem de exibição no painel. Espaços sobrando no início e no
# fim das células são removidos; nenhum outro ajuste é feito nos textos.
#
# Uso, a partir da pasta do painel:
#   python3 metodologia/ferramentas/gerar_metodologia.py
import json, re, sys
import openpyxl

PLANILHA = "metodologia/planilha/Fatores_organizacao.xlsx"
REGISTRO = "metodologia/registro.json"
SAIDA = "metodologia/metodologia.js"

# atributos fixos dos eixos que não constam da planilha (cor e foco)
EIXOS_FIXOS = {
    1: {"cor": "#F0871E"}, 2: {"cor": "#E2211C"}, 3: {"cor": "#7A2C8E"},
    4: {"cor": "#4C9F38"}, 5: {"cor": "#1868A8"}, 6: {"cor": "#158A8A"},
}

def limpa(v):
    return v.strip() if isinstance(v, str) else v

reg = json.load(open(REGISTRO, encoding="utf-8"))
wb = openpyxl.load_workbook(PLANILHA, data_only=True)

# foco de cada eixo, lido da aba Resumo (linhas "EIXO N. TÍTULO\nFoco: ...")
foco = {}
for row in wb["Resumo"].iter_rows(values_only=True):
    for v in row:
        if isinstance(v, str) and v.upper().startswith("EIXO "):
            n = int(re.match(r"EIXO (\d)", v.upper()).group(1))
            m = re.search(r"Foco:\s*(.+)", v)
            if m:
                foco[n] = m.group(1).strip()

eixos = {}
erros = []
for i, row in enumerate(wb["Consolidado"].iter_rows(min_row=2, values_only=True), start=2):
    if not any(row[:8]):
        continue
    eixo, nome_eixo, fator, icone, definicao, ods, nome_ods, fid = [limpa(x) for x in row[:8]]
    m = re.match(r"Eixo (\d)$", str(eixo))
    if not m:
        erros.append("linha %d: eixo inválido (%s)" % (i, eixo)); continue
    n = int(m.group(1))
    if not re.match(r"^E%d-F\d{2,}$" % n, str(fid)):
        erros.append("linha %d: ID %s não pertence ao Eixo %d ou está fora do formato" % (i, fid, n))
    e = eixos.setdefault(n, {"id": "E%d" % n, "id_original": "Eixo %d" % n, "ordem": n, "titulo": nome_eixo,
                             "foco": foco.get(n, ""), "cor": EIXOS_FIXOS[n]["cor"], "fatores": []})
    if nome_eixo != e["titulo"]:
        erros.append("linha %d: nome do eixo %d diferente das linhas anteriores" % (i, n))
    e["fatores"].append({"id": fid, "ordem": len(e["fatores"]) + 1, "fator": fator, "icone": str(icone),
                         "ods": int(ods), "nome_ods": nome_ods, "definicao": definicao})

desativados = {d["id"] for d in reg["desativados"]}
ids = [f["id"] for e in eixos.values() for f in e["fatores"]]
for x in set(ids):
    if ids.count(x) > 1:
        erros.append("ID repetido na planilha: " + x)
    if x in desativados:
        erros.append("ID desativado reaproveitado na planilha: " + x)
if sorted(eixos) != [1, 2, 3, 4, 5, 6]:
    erros.append("a planilha não tem os 6 eixos")
if erros:
    print("\n".join("ERRO " + x for x in erros)); sys.exit(1)

M = {
    "nome": reg["nome"], "versao": reg["versao"], "data_versao": reg["data_versao"],
    "fonte": PLANILHA,
    "formato_id_fator": "E<ordem do eixo>-F<número do fator, dois dígitos>; o número não muda e não é reaproveitado",
    "decisoes": reg["decisoes"],
    "desativados": reg["desativados"],
    "eixos": [eixos[n] for n in sorted(eixos)],
}
cab = """/*
 * CADASTRO METODOLÓGICO CENTRAL
 * Matriz de Fatores, 6 Eixos Estratégicos
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
"""
open(SAIDA, "w", encoding="utf-8").write(cab + "window.METODOLOGIA = " + json.dumps(M, ensure_ascii=False, indent=2) + ";\n")
print("%s gerado: versão %s, %d fatores (%s), %d ids desativados" % (
    SAIDA, M["versao"], len(ids), ", ".join("E%d %d" % (n, len(eixos[n]["fatores"])) for n in sorted(eixos)), len(desativados)))
