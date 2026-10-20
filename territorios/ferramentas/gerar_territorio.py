# Gera o arquivo de dados de um território (territorios/<id>.js) a partir do
# documento de diagnóstico situacional (.docx) no formato padrão da plataforma.
#
# FORMATO PADRÃO DO DOCUMENTO
#   - Títulos de nível 1: Resumo executivo; Eixo N. Título; Síntese estratégica;
#     Notas metodológicas e fontes. Títulos de nível 2 dentro das duas últimas.
#   - Em cada eixo: uma tabela de abertura (contradição central, foco
#     pedagógico, ODS mobilizados) e parágrafo(s) introdutório(s).
#   - Cada fator: tabela de uma linha com [ID | nome do fator | ODS N],
#     seguida do parágrafo "Definição de referência: ..." e de um ou mais
#     parágrafos de diagnóstico, até a próxima tabela ou título.
#   - Fator sem diagnóstico disponível: um único parágrafo
#     "Sem diagnóstico disponível." ou "Sem diagnóstico disponível: <motivo>."
#     O fator é registrado em fatores_sem_diagnostico e o painel informa a
#     ausência. Fatores omitidos do documento também são registrados ali.
#   - Textos de instrução do modelo (iniciados por [PREENCHER) não podem
#     permanecer no documento; o gerador interrompe se encontrar algum.
#
# A ligação entre diagnóstico e fator é feita pelo ID escrito no documento.
# O gerador confere, para cada fator, se nome, ODS e definição de referência
# do documento são idênticos aos do cadastro metodológico, e interrompe se
# houver divergência. Os textos são copiados sem alteração.
#
# Entradas:
#   territorios/correspondencias/<id>.meta.json    identificação, situação, decisões
#                                                   e campos excluídos da abertura dos eixos
#   territorios/correspondencias/<id>.fontes.json  fontes e normas citadas
#   metodologia/metodologia.js                      cadastro metodológico
#
# Uso, a partir da pasta do painel:
#   python3 territorios/ferramentas/gerar_territorio.py campo-grande-ms
import json, re, sys
import docx
from docx.table import Table
from docx.text.paragraph import Paragraph

RE_ID = re.compile(r"^E[1-6]-F\d{2,}$")
RE_PERIODO = re.compile(r"\b(?:19|20)\d{2}(?:\s*[–-]\s*(?:19|20)\d{2})?\b")
PREFIXO_DEF = "Definição de referência:"
RE_SEM = re.compile(r"^Sem diagnóstico disponível(?:\.|:\s*(.+?)\.?)$")
MARCA_MODELO = "[PREENCHER"


def ler_documento(caminho):
    """Percorre o corpo do .docx na ordem real (parágrafos e tabelas)."""
    d = docx.Document(caminho)
    itens = []
    for el in d.element.body.iterchildren():
        tag = el.tag.split("}")[1]
        if tag == "p":
            p = Paragraph(el, d)
            if p.text.strip():
                estilo = p.style.name if p.style is not None else ""
                titulo = (estilo.startswith("Heading") or estilo.startswith("Título")) and estilo[-1:].isdigit()
                itens.append(("titulo%s" % estilo[-1] if titulo else "p", p.text.strip()))
        elif tag == "tbl":
            t = Table(el, d)
            linhas = []
            for r in t.rows:
                cel = []
                for c in r.cells:
                    if not cel or c._tc is not cel[-1][1]:
                        cel.append((c.text.strip(), c._tc))
                linhas.append([x for x, _ in cel])
            itens.append(("tabela", linhas))
    return itens


def estruturar(itens):
    doc = {"capa": [], "resumo_executivo": {"tabela": None, "paragrafos": []}, "eixos": [], "sintese": [],
           "notas": [], "fatores": {}, "ordem_fatores": []}
    secao, eixo, fator, sub = "capa", None, None, None
    for tipo, valor in itens:
        if tipo == "titulo1":
            fator = None
            m = re.match(r"Eixo (\d)\.\s*(.+)", valor)
            if m:
                eixo = {"numero": int(m.group(1)), "titulo_no_documento": m.group(2), "abertura": [], "introducao": []}
                doc["eixos"].append(eixo); secao = "eixo"
            elif valor.lower().startswith("resumo"):
                secao = "resumo"
            elif valor.lower().startswith("síntese"):
                secao = "sintese"; sub = {"titulo": None, "conteudo": []}; doc["sintese"].append(sub)
            elif valor.lower().startswith("notas"):
                secao = "notas"; sub = {"titulo": None, "conteudo": []}; doc["notas"].append(sub)
            else:
                raise SystemExit("título não previsto no formato: " + valor)
            continue
        if tipo == "titulo2":
            if secao not in ("sintese", "notas"):
                raise SystemExit("título de nível 2 fora da síntese ou das notas: " + valor)
            sub = {"titulo": valor, "conteudo": []}
            doc[secao].append(sub)
            continue
        if secao == "capa":
            if tipo != "p": raise SystemExit("tabela inesperada na capa")
            doc["capa"].append(valor)
        elif secao == "resumo":
            if tipo == "tabela": doc["resumo_executivo"]["tabela"] = valor
            else: doc["resumo_executivo"]["paragrafos"].append(valor)
        elif secao in ("sintese", "notas"):
            sub["conteudo"].append({"tabela": valor} if tipo == "tabela" else {"paragrafo": valor})
        elif secao == "eixo":
            if tipo == "tabela" and len(valor) == 1 and RE_ID.match(valor[0][0]):
                fid = valor[0][0]
                if fid in doc["fatores"]: raise SystemExit("ID repetido no documento: " + fid)
                fator = {"id": fid, "nome": valor[0][1], "ods": valor[0][2] if len(valor[0]) > 2 else "",
                         "eixo_documento": eixo["numero"], "definicao": None, "paragrafos": []}
                doc["fatores"][fid] = fator; doc["ordem_fatores"].append(fid)
            elif tipo == "tabela":
                if fator: raise SystemExit("tabela inesperada dentro do fator " + fator["id"])
                eixo["abertura"].extend(valor)
            elif fator is None:
                eixo["introducao"].append(valor)
            elif valor.startswith(PREFIXO_DEF):
                if fator["definicao"] is not None or fator["paragrafos"]: raise SystemExit("definição fora de ordem em " + fator["id"])
                fator["definicao"] = valor[len(PREFIXO_DEF):].strip()
            else:
                fator["paragrafos"].append(valor)
    return doc


def main(tid):
    base = "territorios/correspondencias/" + tid
    meta = json.load(open(base + ".meta.json", encoding="utf-8"))
    cfg = json.load(open(base + ".fontes.json", encoding="utf-8"))
    M = json.loads(open("metodologia/metodologia.js", encoding="utf-8").read().split("window.METODOLOGIA = ", 1)[1].rstrip().rstrip(";"))
    cad = {f["id"]: (e, f) for e in M["eixos"] for f in e["fatores"]}
    meta_sem_instrucoes = {k: v for k, v in meta.items() if not k.startswith("_")}
    if re.search(r"<[^<>]+>", json.dumps(meta_sem_instrucoes, ensure_ascii=False)):
        sys.exit("ERRO o arquivo %s.meta.json ainda tem trechos do modelo entre < > a substituir" % base)
    if meta["territorio"]["id"] != tid:
        sys.exit("ERRO o id em %s.meta.json (%s) difere do id informado (%s)" % (base, meta["territorio"]["id"], tid))
    import os
    if not os.path.exists(meta["documento_fonte"]["arquivo"]):
        sys.exit("ERRO documento-fonte não encontrado: %s (confira o nome, inclusive maiúsculas e acentos)" % meta["documento_fonte"]["arquivo"])
    itens = ler_documento(meta["documento_fonte"]["arquivo"])
    restos = [v for t, v in itens if MARCA_MODELO in json.dumps(v, ensure_ascii=False)]
    if restos:
        print("\n".join("ERRO texto de instrução do modelo ainda no documento: " + json.dumps(v, ensure_ascii=False)[:120] for v in restos))
        sys.exit(1)
    doc = estruturar(itens)

    erros = []
    for fid, x in doc["fatores"].items():
        if fid not in cad:
            erros.append("%s: ID inexistente no cadastro" % fid); continue
        e, f = cad[fid]
        if e["ordem"] != x["eixo_documento"]: erros.append("%s: está no Eixo %d do documento" % (fid, x["eixo_documento"]))
        if x["nome"] != f["fator"]: erros.append("%s: nome difere do cadastro (%r)" % (fid, x["nome"]))
        if x["ods"] != "ODS %d" % f["ods"]: erros.append("%s: ODS difere do cadastro (%s)" % (fid, x["ods"]))
        if x["definicao"] != f["definicao"]: erros.append("%s: definição de referência difere do cadastro" % fid)
        if not x["paragrafos"]: erros.append("%s: sem parágrafo de diagnóstico (escreva o diagnóstico ou 'Sem diagnóstico disponível.')" % fid)
        elif len(x["paragrafos"]) > 1 and any(RE_SEM.match(p) for p in x["paragrafos"]):
            erros.append("%s: 'Sem diagnóstico disponível' deve ser o único parágrafo do fator" % fid)
    if erros:
        print("\n".join("ERRO " + x for x in erros)); sys.exit(1)

    def fontes(fid, texto):
        achadas = [m for m in re.findall(r"\(([^()]*)\)", texto) if m in cfg["parenteses_que_sao_fonte"]]
        achadas += cfg["fontes_no_texto"].get(fid, [])
        out = []
        for a in achadas:
            if a not in texto: raise SystemExit("fonte não encontrada literalmente em %s: %s" % (fid, a))
            if a not in out: out.append(a)
        return out

    def normas(fid, texto):
        for a in cfg["referencias_normativas"].get(fid, []):
            if a not in texto: raise SystemExit("referência normativa não encontrada em %s: %s" % (fid, a))
        return list(cfg["referencias_normativas"].get(fid, []))

    def periodos(texto):
        out = []
        for m in RE_PERIODO.finditer(texto):
            if m.group(0) not in out: out.append(m.group(0))
        return out

    diagnosticos = {}
    sem_diagnostico = []
    for fid in [f["id"] for e in M["eixos"] for f in e["fatores"]]:
        if fid not in doc["fatores"]:
            sem_diagnostico.append({"id": fid, "motivo": "fator ausente do documento", "origem": "ausente_do_documento"})
            continue
        x = doc["fatores"][fid]
        m = RE_SEM.match(x["paragrafos"][0]) if len(x["paragrafos"]) == 1 else None
        if m:
            sem_diagnostico.append({"id": fid, "motivo": (m.group(1) or "").strip(), "origem": "declarado_no_documento"})
            continue
        texto = "\n\n".join(x["paragrafos"])
        relacionados = []
        for r in re.findall(r"\bE[1-6]-F\d{2,}\b", texto):
            if r != fid and r not in relacionados: relacionados.append(r)
        diagnosticos[fid] = {
            "texto": texto,
            "fontes_citadas": fontes(fid, texto),
            "referencias_normativas": normas(fid, texto),
            "periodos_citados": periodos(texto),
            "fatores_relacionados": relacionados,
            "origem": {"codigo_documento": fid, "nome_no_documento": x["nome"], "eixo_documento": x["eixo_documento"]},
            "correspondencia": {"situacao": "validada", "tipo": "identificador_no_documento",
                                "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."},
        }

    rel_invalidos = sorted({r for d in diagnosticos.values() for r in d["fatores_relacionados"] if r not in cad})
    if rel_invalidos: raise SystemExit("fatores relacionados inexistentes no cadastro: " + ", ".join(rel_invalidos))

    abertura = {}
    for e in doc["eixos"]:
        campos = {}
        for linha in e["abertura"]:
            t = linha[0]
            m = re.match(r"(Contradição central|Foco pedagógico|ODS mobilizados):\s*(.+)", t)
            if m and m.group(1) in meta.get("campos_excluidos_da_abertura_dos_eixos", []): continue
            if m: campos[m.group(1)] = m.group(2)
            else: campos.setdefault("outros", []).append(t)
        abertura[e["numero"]] = campos

    dados = {
        "formato": "diagnostico-territorial/2",
        "territorio": meta["territorio"],
        "situacao": meta["situacao"],
        "decisoes": meta.get("decisoes", []),
        "metodologia": {"arquivo": "metodologia/metodologia.js", "versao": M["versao"]},
        "documento_fonte": dict(meta["documento_fonte"], capa=doc["capa"]),
        "resumo_executivo": {"quadro_eixos": doc["resumo_executivo"]["tabela"], "texto": "\n\n".join(doc["resumo_executivo"]["paragrafos"])},
        "eixos_documento": [{
            "numero": e["numero"], "titulo_no_documento": e["titulo_no_documento"],
            "contradicao_central": abertura[e["numero"]].get("Contradição central", ""),
            "foco_pedagogico": abertura[e["numero"]].get("Foco pedagógico", ""),
            "outros_itens_da_abertura": abertura[e["numero"]].get("outros", []),
            "introducao": "\n\n".join(e["introducao"]),
            "fatores_no_documento": sum(1 for x in doc["fatores"].values() if x["eixo_documento"] == e["numero"]),
        } for e in doc["eixos"]],
        "sintese_estrategica": doc["sintese"],
        "notas_metodologicas": doc["notas"],
        "diagnosticos": diagnosticos,
        "fatores_sem_diagnostico": sem_diagnostico,
        "pendentes_validacao": [],
    }
    cab = """/*
 * DIAGNÓSTICO SITUACIONAL TERRITORIAL - %s
 *
 * Arquivo gerado por territorios/ferramentas/gerar_territorio.py a partir de
 * %s.
 * Não edite à mão: altere o documento-fonte ou os arquivos em
 * territorios/correspondencias/ e gere novamente.
 *
 * Contém apenas dados deste território. Eixos e fatores ficam no cadastro
 * metodológico (metodologia/metodologia.js); cada diagnóstico se liga ao
 * fator pelo id.
 */
window.TERRITORIOS = window.TERRITORIOS || {};
""" % (meta["territorio"]["rotulo"], meta["documento_fonte"]["arquivo"])
    with open("territorios/%s.js" % tid, "w", encoding="utf-8") as fh:
        fh.write(cab + "window.TERRITORIOS[%s] = " % json.dumps(tid) + json.dumps(dados, ensure_ascii=False, indent=2) + ";\n")
    print("territorios/%s.js: %d diagnósticos, %d fatores sem diagnóstico (%d declarados no documento, %d ausentes do documento), %d com fonte citada, %d com referência normativa"
          % (tid, len(diagnosticos), len(sem_diagnostico), sum(1 for x in sem_diagnostico if x["origem"] == "declarado_no_documento"),
             sum(1 for x in sem_diagnostico if x["origem"] == "ausente_do_documento"), sum(1 for d in diagnosticos.values() if d["fontes_citadas"]),
             sum(1 for d in diagnosticos.values() if d["referencias_normativas"])))


if __name__ == "__main__":
    main(sys.argv[1])
