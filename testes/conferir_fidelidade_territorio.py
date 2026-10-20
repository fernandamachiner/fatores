# Conferência de fidelidade textual entre o arquivo de um território e o
# documento-fonte (.docx).
#
# Lê o .docx diretamente do XML do Word (sem usar o extrator do projeto) e
# confere que:
#   1. o texto de cada diagnóstico (validado ou pendente) é idêntico ao trecho
#      do parágrafo indicado em origem.paragrafo_docx, depois do nome do fator
#      e dos dois-pontos;
#   2. todo parágrafo com conteúdo do documento está representado no arquivo
#      (cabeçalho, resumo executivo, introduções dos eixos, fatores e notas),
#      de modo que nenhum conteúdo foi descartado.
#
# Uso, a partir da pasta do painel:
#   python3 testes/conferir_fidelidade_territorio.py campo-grande-ms
import json, re, sys, zipfile
import xml.etree.ElementTree as ET

W = "{http://schemas.openxmlformats.org/wordprocessingml/2006/main}"
tid = sys.argv[1]
js = open("territorios/%s.js" % tid, encoding="utf-8").read()
T = json.loads(js.split("window.TERRITORIOS[%s] = " % json.dumps(tid), 1)[1].rstrip().rstrip(";"))

with zipfile.ZipFile(T["documento_fonte"]["arquivo"]) as z:
    corpo = ET.fromstring(z.read("word/document.xml")).find(W + "body")
paragrafos = []
for p in corpo.iter(W + "p"):
    paragrafos.append("".join(t.text or "" for t in p.iter(W + "t")))

erros, conferidos = [], 0
usados = set()
blocos = list(T["diagnosticos"].items()) + [("pendente " + b["origem"]["codigo_documento"], b) for b in T["pendentes_validacao"]]
for rot, b in blocos:
    o = b["origem"]
    i = o["paragrafo_docx"]
    par = paragrafos[i]
    usados.add(i)
    esperado_ini = o["nome_no_documento"]
    if not par.startswith(esperado_ini):
        erros.append("%s: o parágrafo %d não começa pelo nome do fator" % (rot, i)); continue
    resto = par[len(esperado_ini):].lstrip()
    resto = resto[1:] if resto.startswith(":") else resto
    if resto.strip() != b["texto"]:
        erros.append("%s: texto difere do parágrafo %d do documento" % (rot, i)); continue
    conferidos += 1

# demais conteúdos: cabeçalho, resumo, introduções e notas devem constar do arquivo
outros = [T["resumo_executivo"]["texto"]] + [e["introducao"] for e in T["eixos_documento"]] \
         + T["notas_metodologicas"] + T["documento_fonte"]["identificacao_no_documento"]
titulos = ["RESUMO EXECUTIVO"] + ["EIXO %d. %s" % (e["numero"], e["titulo_no_documento"]) for e in T["eixos_documento"]]
nao_representados = []
for i, par in enumerate(paragrafos):
    if not par.strip() or i in usados:
        continue
    s = par.strip()
    if any(s == x.strip() or s in x for x in outros) or s in titulos or s.upper().startswith("NOTAS METODOL"):
        continue
    nao_representados.append((i, s[:80]))

print("Documento: %d parágrafos com conteúdo" % sum(1 for p in paragrafos if p.strip()))
print("Diagnósticos conferidos literalmente contra o .docx: %d de %d" % (conferidos, len(blocos)))
print("Parágrafos do documento não representados no arquivo: %d" % len(nao_representados))
for i, s in nao_representados:
    print("  parágrafo %d: %s" % (i, s))
for e in erros:
    print("ERRO  " + e)
sys.exit(1 if erros or nao_representados else 0)
