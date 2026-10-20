# Gera o arquivo de dados de um território (territorios/<id>.js) a partir de:
#   - documento de diagnóstico (.docx), lido por extrair_docx.py;
#   - tabela de correspondência (correspondencias/<id>.csv), editável;
#   - fontes citadas e referências normativas (correspondencias/<id>.fontes.json);
#   - metadados do território (correspondencias/<id>.meta.json);
#   - cadastro metodológico (metodologia/metodologia.js).
#
# Os textos são copiados do documento sem alteração. O arquivo gerado não
# repete o cadastro de fatores: liga cada diagnóstico ao fator pelo id.
#
# Uso, a partir da pasta do painel:
#   python3 territorios/ferramentas/gerar_territorio.py campo-grande-ms
import csv, json, os, re, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from extrair_docx import extrair

tid = sys.argv[1]
base = "territorios/correspondencias/" + tid
meta = json.load(open(base + ".meta.json", encoding="utf-8"))
fontes_cfg = json.load(open(base + ".fontes.json", encoding="utf-8"))
linhas = list(csv.DictReader(open(base + ".csv", encoding="utf-8-sig"), delimiter=";"))
met_txt = open("metodologia/metodologia.js", encoding="utf-8").read()
M = json.loads(met_txt.split("window.METODOLOGIA = ", 1)[1].rstrip().rstrip(";"))
ids_metodologia = {f["id"] for e in M["eixos"] for f in e["fatores"]}

doc = extrair(meta["documento_fonte"]["arquivo"])
fatores_doc = {f["codigo_documento"]: (e, f) for e in doc["eixos"] for f in e["fatores"]}

RE_PERIODO = re.compile(r"\b(?:19|20)\d{2}(?:\s*[–-]\s*(?:19|20)\d{2})?\b")

def periodos(texto):
    vistos = []
    for m in RE_PERIODO.finditer(texto):
        if m.group(0) not in vistos:
            vistos.append(m.group(0))
    return vistos

def lista(cfg, chave, texto):
    itens = cfg.get(chave, [])
    for t in itens:
        if t not in texto:
            raise SystemExit("trecho de fonte não encontrado literalmente em %s: %s" % (chave, t))
    return list(itens)

def bloco(cod):
    e, f = fatores_doc[cod]
    return {
        "texto": f["texto"],
        "fontes_citadas": lista(fontes_cfg["fontes"], cod, f["texto"]),
        "referencias_normativas": lista(fontes_cfg["referencias_normativas"], cod, f["texto"]),
        "periodos_citados": periodos(f["texto"]),
        "origem": {"codigo_documento": cod, "nome_no_documento": f["nome_documento"],
                   "eixo_documento": e["numero"], "paragrafo_docx": f["paragrafo"]},
    }

codigos_csv = [l["codigo_documento"] for l in linhas]
if sorted(codigos_csv) != sorted(fatores_doc):
    raise SystemExit("a tabela de correspondência não cobre exatamente os fatores do documento")

diagnosticos, pendentes = {}, []
for l in linhas:
    cod = l["codigo_documento"]
    if l["nome_documento"] != fatores_doc[cod][1]["nome_documento"]:
        raise SystemExit("nome divergente entre tabela e documento em " + cod)
    if l["situacao"] == "validada":
        fid = l["id_fator"]
        if fid not in ids_metodologia:
            raise SystemExit("id inexistente no cadastro: " + fid)
        if fid in diagnosticos:
            raise SystemExit("fator com mais de um diagnóstico validado: " + fid)
        b = bloco(cod)
        b["correspondencia"] = {"situacao": "validada", "tipo": l["tipo"], "observacao": l["observacao"]}
        diagnosticos[fid] = b
    elif l["situacao"] == "pendente":
        b = bloco(cod)
        cands = l["candidatos"].split()
        for c in cands:
            if c not in ids_metodologia:
                raise SystemExit("candidato inexistente no cadastro: " + c)
        b["correspondencia"] = {"situacao": "pendente de validação", "categoria": l["categoria"],
                                "candidatos": cands, "motivo": l["observacao"]}
        pendentes.append(b)
    else:
        raise SystemExit("situação desconhecida em " + cod + ": " + l["situacao"])

# ordena diagnósticos pela ordem do cadastro
ordem = [f["id"] for e in M["eixos"] for f in e["fatores"]]
diagnosticos = {k: diagnosticos[k] for k in ordem if k in diagnosticos}

notas = [p["texto"] for p in doc["notas_metodologicas"]]
fontes_gerais = []
for p in notas:
    m = re.search(r"fontes de dados secundários utilizadas foram:\s*(.+)$", p)
    if m:
        partes = [x.strip() for x in m.group(1).rstrip(".").split(";")]
        fontes_gerais = [re.sub(r"^e\s+", "", x) for x in partes]

resumo = " ".join(p["texto"] for p in doc["resumo_executivo"])
dados = {
    "formato": "diagnostico-territorial/1",
    "territorio": meta["territorio"],
    "situacao": meta["situacao"],
    "metodologia": {"arquivo": "metodologia/metodologia.js", "versao": M["versao"]},
    "documento_fonte": dict(meta["documento_fonte"], identificacao_no_documento=[p["texto"] for p in doc["cabecalho"]]),
    "resumo_executivo": {"texto": resumo, "fontes_citadas": lista(fontes_cfg["fontes"], "RESUMO", resumo),
                         "periodos_citados": periodos(resumo)},
    "eixos_documento": [{"numero": e["numero"], "titulo_no_documento": e["titulo_documento"],
                         "introducao": " ".join(p["texto"] for p in e["introducao"]),
                         "fatores_declarados_no_documento": len(e["fatores"])} for e in doc["eixos"]],
    "notas_metodologicas": notas,
    "fontes_gerais_do_documento": fontes_gerais,
    "diagnosticos": diagnosticos,
    "pendentes_validacao": pendentes,
}

cab = """/*
 * DIAGNÓSTICO SITUACIONAL TERRITORIAL - %s
 *
 * Arquivo gerado por territorios/ferramentas/gerar_territorio.py. Não edite à
 * mão: altere o documento-fonte ou os arquivos em territorios/correspondencias/
 * e gere novamente.
 *
 * Contém apenas dados deste território. Eixos e fatores ficam no cadastro
 * metodológico (metodologia/metodologia.js); cada diagnóstico se liga ao
 * fator pelo id. Diagnósticos cuja correspondência não foi confirmada ficam
 * em pendentes_validacao e não são associados a nenhum fator.
 */
window.TERRITORIOS = window.TERRITORIOS || {};
""" % meta["territorio"]["rotulo"]
saida = "territorios/%s.js" % tid
with open(saida, "w", encoding="utf-8") as fh:
    fh.write(cab + "window.TERRITORIOS[%s] = " % json.dumps(tid) + json.dumps(dados, ensure_ascii=False, indent=2) + ";\n")
print("%s: %d diagnósticos validados, %d pendentes de validação, %d fatores do cadastro sem diagnóstico"
      % (saida, len(diagnosticos), len(pendentes), len(ids_metodologia) - len(diagnosticos)))
