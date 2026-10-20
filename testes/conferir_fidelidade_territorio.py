# Conferência de fidelidade textual entre o arquivo de um território e o
# documento-fonte (.docx), no formato padrão da plataforma (cada fator
# identificado por uma tabela [ID | nome | ODS], seguida da definição de
# referência e do diagnóstico).
#
# Lê o .docx diretamente do XML do Word, sem usar o gerador do projeto, e
# confere que:
#   1. o texto de cada diagnóstico é idêntico aos parágrafos que seguem a
#      definição de referência do fator no documento;
#   2. nome, ODS e definição de referência de cada fator no documento são
#      idênticos ao cadastro metodológico;
#   3. todo parágrafo e toda célula de tabela com conteúdo do documento está
#      representado no arquivo do território (ou no cadastro, no caso das
#      tabelas de identificação e das definições), de modo que nada foi
#      descartado.
#
# Uso, a partir da pasta do painel:
#   python3 testes/conferir_fidelidade_territorio.py campo-grande-ms
import json, re, sys, zipfile
import xml.etree.ElementTree as ET

W = "{http://schemas.openxmlformats.org/wordprocessingml/2006/main}"
tid = sys.argv[1]
T = json.loads(open("territorios/%s.js" % tid, encoding="utf-8").read().split("window.TERRITORIOS[%s] = " % json.dumps(tid), 1)[1].rstrip().rstrip(";"))
M = json.loads(open("metodologia/metodologia.js", encoding="utf-8").read().split("window.METODOLOGIA = ", 1)[1].rstrip().rstrip(";"))
cad = {f["id"]: f for e in M["eixos"] for f in e["fatores"]}

def texto(el):
    return "".join(t.text or "" for t in el.iter(W + "t")).strip()

with zipfile.ZipFile(T["documento_fonte"]["arquivo"]) as z:
    corpo = ET.fromstring(z.read("word/document.xml")).find(W + "body")

blocos = []   # ("p", texto) ou ("tbl", [[células]])
for el in corpo:
    if el.tag == W + "p":
        t = texto(el)
        if t: blocos.append(("p", t))
    elif el.tag == W + "tbl":
        linhas = []
        for tr in el.iter(W + "tr"):
            linhas.append([texto(tc) for tc in tr.iter(W + "tc")])
        blocos.append(("tbl", linhas))

erros, conferidos, usados = [], 0, set()
i = 0
while i < len(blocos):
    tipo, v = blocos[i]
    if tipo == "tbl" and len(v) == 1 and re.match(r"^E[1-6]-F\d{2,}$", v[0][0]):
        fid, nome, ods = v[0][0], v[0][1], v[0][2]
        usados.add(i)
        f = cad.get(fid)
        if not f:
            erros.append("%s: ID inexistente no cadastro" % fid)
        else:
            if nome != f["fator"]: erros.append("%s: nome no documento difere do cadastro" % fid)
            if ods != "ODS %d" % f["ods"]: erros.append("%s: ODS no documento difere do cadastro" % fid)
        j = i + 1
        if j < len(blocos) and blocos[j][0] == "p" and blocos[j][1].startswith("Definição de referência:"):
            if f and blocos[j][1][len("Definição de referência:"):].strip() != f["definicao"]:
                erros.append("%s: definição de referência difere do cadastro" % fid)
            usados.add(j); j += 1
        else:
            erros.append("%s: sem definição de referência" % fid)
        paras = []
        while j < len(blocos) and blocos[j][0] == "p" and not blocos[j][1].startswith("Definição de referência:"):
            # para no próximo título de eixo ou seção (títulos não pertencem ao fator)
            if re.match(r"^(Eixo \d\.|Síntese estratégica|Notas metodológicas)", blocos[j][1]): break
            paras.append(blocos[j][1]); usados.add(j); j += 1
        d = T["diagnosticos"].get(fid)
        if not d:
            erros.append("%s: diagnóstico ausente no arquivo do território" % fid)
        elif d["texto"] != "\n\n".join(paras):
            erros.append("%s: texto difere do documento" % fid)
        else:
            conferidos += 1
        i = j
        continue
    i += 1

# demais conteúdos devem estar no arquivo do território
arquivo = json.dumps(T, ensure_ascii=False)
meta = json.load(open("territorios/correspondencias/%s.meta.json" % tid, encoding="utf-8"))
excluidos_por_decisao = meta.get("campos_excluidos_da_abertura_dos_eixos", [])
excluidos = []
nao_representados = []
campo_abertura = {"Contradição central": "contradicao_central", "Foco pedagógico": "foco_pedagogico"}
eixos_arq = {e["numero"]: e for e in T["eixos_documento"]}
eixo_atual = None
for k, (tipo, v) in enumerate(blocos):
    if tipo == "p":
        m = re.match(r"^Eixo (\d)\. ", v)
        if m:
            eixo_atual = int(m.group(1))
        elif re.match(r"^(Síntese estratégica|Notas metodológicas)", v):
            eixo_atual = None
    if k in usados:
        continue
    pedacos = [v] if tipo == "p" else [c for linha in v for c in linha if c]
    for p in pedacos:
        # nas tabelas de abertura dos eixos, o rótulo vira nome de campo do
        # próprio eixo e o conteúdo depois dos dois-pontos é guardado sem
        # alteração; a comparação é feita com o campo daquele eixo
        m = re.match(r"^(Contradição central|Foco pedagógico|ODS mobilizados):\s*(.+)$", p)
        if m and m.group(1) in excluidos_por_decisao:
            excluidos.append((k, p[:90])); continue
        if m and eixo_atual:
            campo = campo_abertura.get(m.group(1))
            if not campo or eixos_arq.get(eixo_atual, {}).get(campo) != m.group(2):
                nao_representados.append((k, "Eixo %d, %s: %s" % (eixo_atual, m.group(1), m.group(2)[:60])))
            continue
        if json.dumps(p, ensure_ascii=False)[1:-1] not in arquivo and not re.match(r"^(Resumo executivo|Eixo \d\. .+|Síntese estratégica|Notas metodológicas e fontes)$", p):
            nao_representados.append((k, p[:90]))

print("Documento: %d blocos com conteúdo (%d parágrafos e %d tabelas)" % (len(blocos), sum(1 for b in blocos if b[0] == "p"), sum(1 for b in blocos if b[0] == "tbl")))
print("Diagnósticos conferidos literalmente contra o .docx: %d de %d no arquivo" % (conferidos, len(T["diagnosticos"])))
print("Conteúdos excluídos por decisão registrada (%s): %d" % (", ".join(excluidos_por_decisao) or "nenhum", len(excluidos)))
print("Conteúdos do documento não representados no arquivo: %d" % len(nao_representados))
for k, p in nao_representados[:20]:
    print("  bloco %d: %s" % (k, p))
for e in erros:
    print("ERRO  " + e)
sys.exit(1 if erros or nao_representados or conferidos != len(T["diagnosticos"]) else 0)
