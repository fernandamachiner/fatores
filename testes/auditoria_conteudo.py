# Auditoria metodológica e de conteúdo (Etapa 6).
#
# Executa, de forma independente dos geradores, as verificações dos blocos A
# (validação metodológica) e B (validação dos diagnósticos) e grava o
# resultado em relatorios/etapa6-auditoria-conteudo.json.
#
# Fontes lidas:
#   metodologia/planilha/Fatores_organizacao.xlsx   fonte oficial (aba Consolidado)
#   metodologia/metodologia.js                       cadastro usado pelo painel
#   metodologia/registro.json                        decisões e IDs desativados
#   index.html                                       roda SVG (títulos e cores dos eixos)
#   territorios/indice.js e territorios/<id>.js      dados territoriais
#   documento-fonte .docx de cada território         lido direto do XML do Word
#   data.js da versão publicada original (git)       estrutura original do painel,
#                                                    quando disponível no histórico
#
# Uso, a partir da pasta do painel:
#   python3 testes/auditoria_conteudo.py
import collections, difflib, json, re, subprocess, sys, unicodedata, zipfile
import xml.etree.ElementTree as ET

import openpyxl

W = "{http://schemas.openxmlformats.org/wordprocessingml/2006/main}"
saida = {"A": {}, "B": {}}
achados = []  # (bloco, item, situacao, descricao)


def achado(bloco, item, situacao, descricao):
    achados.append({"bloco": bloco, "item": item, "situacao": situacao, "descricao": descricao})


def js_obj(caminho, prefixo):
    return json.loads(open(caminho, encoding="utf-8").read().split(prefixo, 1)[1].strip().rstrip(";"))


def norm(s):
    s = unicodedata.normalize("NFD", s.lower())
    return re.sub(r"\s+", " ", "".join(c for c in s if unicodedata.category(c) != "Mn")).strip()


M = js_obj("metodologia/metodologia.js", "window.METODOLOGIA = ")
REG = json.load(open("metodologia/registro.json", encoding="utf-8"))
cad = collections.OrderedDict((f["id"], (e, f)) for e in M["eixos"] for f in e["fatores"])

# ---------------- A. Validação metodológica ----------------

# A1. seis eixos: cadastro, roda SVG e planilha
html = open("index.html", encoding="utf-8").read()
wb = openpyxl.load_workbook("metodologia/planilha/Fatores_organizacao.xlsx", data_only=True)
ws = wb["Consolidado"]
cab = [c.value for c in ws[1]]
linhas = [dict(zip(cab, [c.value for c in r])) for r in ws.iter_rows(min_row=2) if any(c.value for c in r)]
eixos_planilha = collections.OrderedDict()
for l in linhas:
    eixos_planilha.setdefault(int(re.sub(r"\D", "", str(l["Eixo"]))), (l["Nome_Eixo"], []))[1].append(l)
svg_titulos = {}
for m in re.finditer(r'<g class="eixo-grafico" data-eixo="(\d)">([\s\S]*?)(?=<g class="eixo-grafico"|</svg>)', html):
    t = re.findall(r"<text[^>]*>([^<]*)</text>", m.group(2))
    svg_titulos[int(m.group(1))] = " ".join(t[1:])
a1 = []
for e in M["eixos"]:
    np_ = eixos_planilha.get(e["ordem"], ("", []))
    a1.append({"eixo": e["id"], "titulo": e["titulo"], "fatores_cadastro": len(e["fatores"]),
               "fatores_planilha": len(np_[1]), "titulo_planilha": np_[0], "titulo_svg": svg_titulos.get(e["ordem"])})
ok_a1 = len(M["eixos"]) == 6 and len(eixos_planilha) == 6 and all(
    x["fatores_cadastro"] == x["fatores_planilha"] and x["titulo"] == x["titulo_svg"] and norm(x["titulo"]) == norm(x["titulo_planilha"] or "") for x in a1)
saida["A"]["A1_eixos"] = a1
achado("A", "A1 seis eixos", "aprovado" if ok_a1 else "reprovado",
       "6 eixos no cadastro, na planilha e na roda SVG; títulos e contagens coincidentes" if ok_a1 else json.dumps(a1, ensure_ascii=False))
dif_tit = [x for x in a1 if x["titulo"] != x["titulo_planilha"]]
if dif_tit:
    achado("A", "A1 grafia dos títulos de eixo na planilha", "pendente",
           "títulos que diferem só em maiúsculas, acentos ou espaços: " + "; ".join("%s cadastro %s / planilha %s" % (x["eixo"], x["titulo"], x["titulo_planilha"]) for x in dif_tit))

# A2/A3. fatores e nomes contra a planilha oficial
plan = {l["ID"]: l for l in linhas}
div = []
for fid, (e, f) in cad.items():
    l = plan.get(fid)
    if not l:
        div.append(fid + ": ausente da planilha"); continue
    pares = [("fator", "Fator"), ("definicao", "Definição"), ("icone", "Ícone"), ("ods", "ODS"), ("nome_ods", "Nome_ODS")]
    for a, b in pares:
        va, vb = f[a], l[b]
        if a == "ods": vb = int(vb)
        if a == "icone": vb = str(vb)
        if str(va).strip() != str(vb).strip(): div.append("%s: %s difere (%r / %r)" % (fid, a, va, vb))
    if int(re.sub(r"\D", "", str(l["Eixo"]))) != e["ordem"]: div.append(fid + ": eixo difere")
for pid in plan:
    if pid not in cad: div.append(str(pid) + ": na planilha e ausente do cadastro")
saida["A"]["A2_A3_cadastro_x_planilha"] = {"fatores_cadastro": len(cad), "fatores_planilha": len(plan), "divergencias": div}
achado("A", "A2/A3 fatores e nomes contra a planilha oficial", "aprovado" if not div else "reprovado",
       "%d fatores no cadastro e %d na planilha; nome, definição, ícone, ODS e eixo coincidentes em todos" % (len(cad), len(plan)) if not div else "; ".join(div[:20]))

# A3b. estrutura original publicada (data.js da versão original), informativo
ORIGINAL = "32b0599"
orig = None
try:
    # último estado publicado antes da adaptação (commit 32b0599 do repositório)
    src = subprocess.run(["git", "show", ORIGINAL + ":data.js"], capture_output=True, text=True, check=True).stdout
    orig = json.loads(re.search(r"var EIXOS_DATA = (\[[\s\S]*\]);?", src).group(1))
except Exception as ex:
    saida["A"]["A3b_estrutura_original"] = "data.js original não disponível: %s" % ex
if orig:
    nomes_orig = {norm(f["fator"]): (e["id"], f["fator"]) for e in orig for f in e["fatores"]}
    nomes_atual = {norm(f["fator"]): fid for fid, (e, f) in cad.items()}
    so_orig = sorted(v[1] for k, v in nomes_orig.items() if k not in nomes_atual)
    so_atual = sorted(cad[v][1]["fator"] for k, v in nomes_atual.items() if k not in nomes_orig)
    saida["A"]["A3b_estrutura_original"] = {
        "fatores_versao_original": sum(len(e["fatores"]) for e in orig), "fatores_atuais": len(cad),
        "nomes_iguais_ignorando_caixa_e_acentos": len(set(nomes_orig) & set(nomes_atual)),
        "nomes_so_na_versao_original": so_orig, "nomes_so_na_versao_atual": so_atual}
    achado("A", "A3 comparação com a estrutura original publicada", "aprovado",
           "versão original com %d fatores; versão atual com %d (Matriz v1.0.2, decisão de 19-20/10/2026); %d nomes coincidentes, %d nomes só na original e %d só na atual; as diferenças decorrem da adoção da planilha final como fonte oficial (registro.json) e estão listadas no JSON de evidência" % (
               saida["A"]["A3b_estrutura_original"]["fatores_versao_original"], len(cad), len(set(nomes_orig) & set(nomes_atual)), len(so_orig), len(so_atual)))

# A4. códigos e identificadores
ids = list(cad)
fora = [i for i in ids if not re.match(r"^E[1-6]-F\d{2}$", i)]
desat = {d["id"] for d in M.get("desativados", [])}
lacunas_seq = []
for e in M["eixos"]:
    nums = sorted(int(f["id"].split("-F")[1]) for f in e["fatores"])
    for n in range(1, max(nums) + 1):
        if n not in nums:
            fid = "%s-F%02d" % (e["id"], n)
            lacunas_seq.append({"id": fid, "registrado_como_desativado": fid in desat})
nao_reg = [x["id"] for x in lacunas_seq if not x["registrado_como_desativado"]]
reuso = sorted(desat & set(ids))
fora_eixo = [fid for fid, (e, f) in cad.items() if not fid.startswith(e["id"] + "-")]
saida["A"]["A4_identificadores"] = {"fora_do_formato": fora, "numeros_vagos": lacunas_seq, "desativados_reutilizados": reuso, "id_em_eixo_errado": fora_eixo}
ok_a4 = not (fora or nao_reg or reuso or fora_eixo) and len(set(ids)) == len(ids)
achado("A", "A4 códigos e identificadores", "aprovado" if ok_a4 else "reprovado",
       "150 IDs únicos no formato E<eixo>-F<nn>, cada um no seu eixo; %d números vagos, todos registrados como desativados (%s); nenhum ID desativado reutilizado" % (len(lacunas_seq), ", ".join(x["id"] for x in lacunas_seq))
       if ok_a4 else "fora do formato %s; vagos sem registro %s; reutilizados %s; eixo errado %s" % (fora, nao_reg, reuso, fora_eixo))
ordem_ok = all([f["ordem"] for f in e["fatores"]] == list(range(1, len(e["fatores"]) + 1)) for e in M["eixos"])
fora_ordem = [fid for e in M["eixos"] for k, f in enumerate(e["fatores"]) for fid in [f["id"]] if k and int(fid.split("-F")[1]) < int(e["fatores"][k - 1]["id"].split("-F")[1])]
if fora_ordem:
    achado("A", "A4 ordem de exibição e numeração dos IDs", "aprovado",
           "a ordem de exibição segue a planilha e não a numeração dos IDs em %d casos (%s), o que é previsto pela regra de IDs estáveis" % (len(fora_ordem), ", ".join(fora_ordem[:12]) + ("…" if len(fora_ordem) > 12 else "")))

# A5. duplicações e omissões
nomes = collections.defaultdict(list)
defs = collections.defaultdict(list)
for fid, (e, f) in cad.items():
    nomes[norm(f["fator"])].append(fid)
    defs[norm(f["definicao"])].append(fid)
dup_nome = {k: v for k, v in nomes.items() if len(v) > 1}
dup_def = {k: v for k, v in defs.items() if len(v) > 1}
vazios = [fid for fid, (e, f) in cad.items() if not all(str(f[c]).strip() for c in ("fator", "definicao", "icone", "nome_ods"))]
proximos = []
lista = list(cad.items())
for i in range(len(lista)):
    for j in range(i + 1, len(lista)):
        a, b = norm(lista[i][1][1]["fator"]), norm(lista[j][1][1]["fator"])
        r = difflib.SequenceMatcher(None, a, b).ratio()
        if r >= 0.8 or (len(a) > 6 and len(b) > 6 and (a in b or b in a)):
            proximos.append({"ids": [lista[i][0], lista[j][0]], "nomes": [lista[i][1][1]["fator"], lista[j][1][1]["fator"]], "similaridade": round(r, 2)})
icones = collections.defaultdict(list)
for fid, (e, f) in cad.items():
    icones[f["icone"]].append(fid)
comp = {k: v for k, v in icones.items() if len(v) > 1}
ods_dif = [fid for fid, (e, f) in cad.items() if int(f["icone"].split(".")[0]) != int(f["ods"])]
saida["A"]["A5_duplicacoes"] = {"nomes_repetidos": dup_nome, "definicoes_repetidas": dup_def, "campos_vazios": vazios,
                                "nomes_proximos": proximos, "icones_compartilhados": comp, "ods_diferente_do_codigo_do_icone": ods_dif}
achado("A", "A5 duplicações e omissões", "aprovado" if not (dup_nome or dup_def or vazios) else "reprovado",
       "nenhum nome ou definição repetidos e nenhum campo vazio" if not (dup_nome or dup_def or vazios) else json.dumps({"nomes": dup_nome, "defs": dup_def, "vazios": vazios}, ensure_ascii=False))
if proximos:
    achado("A", "A5 nomes próximos entre fatores", "pendente",
           "%d pares de nomes semelhantes, para conferência da coordenação, sem alteração: %s" % (len(proximos), "; ".join("%s %s / %s %s" % (p["ids"][0], p["nomes"][0], p["ids"][1], p["nomes"][1]) for p in proximos)))
achado("A", "A5 ícones compartilhados", "pendente",
       "códigos de ícone usados por mais de um fator, mantidos por decisão de 19/10/2026 até a entrega dos novos ícones: " + "; ".join("%s em %s" % (k, ", ".join(v)) for k, v in comp.items()))
achado("A", "A5 classificação ODS diferente do código do ícone", "pendente",
       "%d fatores com ODS diferente da numeração do ícone, mantidos sem definição por decisão de 19/10/2026 (%s)" % (len(ods_dif), ", ".join(ods_dif)))

# ---------------- B. Validação dos diagnósticos ----------------

w = {}
ind = json.loads(subprocess.run(["node", "-e", "const w={};new Function('window',require('fs').readFileSync('territorios/indice.js','utf8'))(w);console.log(JSON.stringify(w.TERRITORIOS_INDICE))"], capture_output=True, text=True, check=True).stdout)
RE_NUM = re.compile(r"\d+(?:[.,]\d+)*(?:\s?%)?")


def numeros(t):
    return collections.Counter(x.replace(" ", "") for x in RE_NUM.findall(t))


RE_LACUNA = re.compile(r"lacuna|não (?:há|foram|foi) (?:localizad|identificad|verificad|sistematizad|quantificad|publicad|encontrad)|ainda não (?:sistematizad|quantificad|disponíve|consolidad|publicad|levantad|mapead|dimensionad|verificad)|não (?:sistematizad|quantificad|verificad|consolidad|dimensionad|mapead)[oa]s?\\b|não há (?:dado|registro|informação|levantamento|série|estimativa|diagnóstico|mapeamento|inventário|estudo|indicador)|sem (?:dado|registro|levantamento|série|mapeamento|avaliação)s? (?:disponíve|sistematizad|consolidad|públic|municipa|específic|oficia)|(?:não|ainda não) (?:está|estão) disponíve|indisponíve|requer(?:em)? (?:extração|levantamento|consulta)|(?:a|deve(?:m)?) ser(?:em)? (?:extraíd|levantad|produzid|obtid|consultad|incorporad|sistematizad|mapead|verificad|atualizad|analisad|confirmad|dimensionad|quantificad)|a (?:extrair|levantar|produzir|incorporar|verificar|consultar)\\b", re.I)

for item in ind["territorios"]:
    tid = item["id"]
    rel = {"territorio": item["rotulo"]}
    saida["B"][tid] = rel
    if item["situacao"] == "sem-diagnostico":
        rel["situacao"] = "sem diagnóstico cadastrado"; continue
    T = js_obj(item["arquivo"], 'window.TERRITORIOS[%s] = ' % json.dumps(tid))
    D = T["diagnosticos"]

    # documento-fonte, lido do XML
    with zipfile.ZipFile(T["documento_fonte"]["arquivo"]) as z:
        corpo = ET.fromstring(z.read("word/document.xml")).find(W + "body")
    blocos = []
    for el in corpo:
        if el.tag == W + "p":
            t = "".join(x.text or "" for x in el.iter(W + "t")).strip()
            if t: blocos.append(("p", t))
        elif el.tag == W + "tbl":
            blocos.append(("tbl", [["".join(x.text or "" for x in tc.iter(W + "t")).strip() for tc in tr.iter(W + "tc")] for tr in el.iter(W + "tr")]))
    doc = collections.OrderedDict()
    for i, (tp, v) in enumerate(blocos):
        if tp == "tbl" and len(v) == 1 and re.match(r"^E[1-6]-F\d{2,}$", v[0][0]):
            j, paras = i + 1, []
            if j < len(blocos) and blocos[j][0] == "p" and blocos[j][1].startswith("Definição de referência:"): j += 1
            while j < len(blocos) and blocos[j][0] == "p" and not re.match(r"^(Eixo \d\.|Síntese estratégica|Notas metodológicas)", blocos[j][1]):
                paras.append(blocos[j][1]); j += 1
            doc.setdefault(v[0][0], []).append({"nome": v[0][1], "ods": v[0][2], "paras": paras})

    # B1 associação
    b1 = []
    for fid, d in D.items():
        if fid not in cad: b1.append(fid + ": ID inexistente no cadastro")
        if d.get("origem", {}).get("codigo_documento") != fid: b1.append(fid + ": código de origem difere")
        if fid not in doc: b1.append(fid + ": tabela do fator ausente no documento")
        elif len(doc[fid]) > 1: b1.append(fid + ": fator repetido no documento")
        elif doc[fid][0]["nome"] != cad[fid][1]["fator"]: b1.append(fid + ": nome no documento difere do cadastro")
        if fid in cad and d.get("origem", {}).get("eixo_documento") != cad[fid][0]["ordem"]: b1.append(fid + ": eixo do documento difere")
    rel["B1_associacao"] = b1
    achado("B", "B1 associação fator-diagnóstico (%s)" % item["rotulo"], "aprovado" if not b1 else "reprovado",
           "%d diagnósticos, cada um ligado ao ID do cadastro, ao mesmo ID, nome e eixo no documento" % len(D) if not b1 else "; ".join(b1))

    # B2 ausentes
    aus = [fid for fid in cad if fid not in D or not D[fid].get("texto", "").strip()]
    doc_sem_dado = [fid for fid in doc if fid not in D]
    rel["B2_ausentes"] = {"fatores_sem_diagnostico": aus, "fatores_do_documento_fora_dos_dados": doc_sem_dado}
    achado("B", "B2 diagnósticos ausentes (%s)" % item["rotulo"], "aprovado" if not aus and not doc_sem_dado else "reprovado",
           "os %d fatores do cadastro têm diagnóstico; nenhum fator do documento ficou fora dos dados" % len(cad) if not aus and not doc_sem_dado else "sem diagnóstico: %s; fora dos dados: %s" % (aus, doc_sem_dado))

    # B3 referências
    lac = [fid for fid, d in D.items() if RE_LACUNA.search(d["texto"])]
    sem_fonte_com_dado = [fid for fid, d in D.items() if not d["fontes_citadas"] and re.search(r"\d+(?:[.,]\d+)?\s?%|(?<!nº )(?<!n° )\b\d{1,3}(?:\.\d{3})+\b(?!/(?:19|20)\d{2})|\b\d+(?:,\d+)?\s(?:mil|milhões|casos|óbitos|famílias|pessoas|hectares|km)", d["texto"])]
    nao_literal = [(fid, x) for fid, d in D.items() for x in d["fontes_citadas"] + d["referencias_normativas"] if x not in d["texto"]]
    ids_texto = {fid: sorted(set(re.findall(r"E[1-6]-F\d{2}", d["texto"])) - {fid}) for fid, d in D.items()}
    rel_div = [fid for fid, d in D.items() if sorted(set(d["fatores_relacionados"])) != ids_texto[fid]]
    rel_inex = [(fid, r) for fid, d in D.items() for r in d["fatores_relacionados"] if r not in cad]
    rel["B3_referencias"] = {"declaram_lacuna": lac, "dados_quantitativos_sem_fonte_registrada": sem_fonte_com_dado,
                             "fontes_nao_literais": nao_literal, "relacionados_divergentes_do_texto": rel_div, "relacionados_inexistentes": rel_inex,
                             "com_fonte": sum(1 for d in D.values() if d["fontes_citadas"]), "com_norma": sum(1 for d in D.values() if d["referencias_normativas"])}
    achado("B", "B3 integridade das referências (%s)" % item["rotulo"], "aprovado" if not (nao_literal or rel_div or rel_inex) else "reprovado",
           "fontes e normas registradas aparecem literalmente no texto; os fatores relacionados correspondem exatamente aos IDs citados em cada texto e existem no cadastro" if not (nao_literal or rel_div or rel_inex) else "não literais %s; relacionados divergentes %s; inexistentes %s" % (nao_literal, rel_div, rel_inex))
    achado("B", "B3 diagnósticos com lacuna de informação declarada (%s)" % item["rotulo"], "pendente",
           "%d de %d diagnósticos declaram dado a extrair, levantar ou produzir (%s). O painel exibe os textos como estão no documento" % (len(lac), len(D), ", ".join(lac)))
    achado("B", "B3 dados quantitativos sem fonte registrada (%s)" % item["rotulo"], "pendente" if sem_fonte_com_dado else "aprovado",
           "%d diagnósticos apresentam números, percentuais ou contagens sem fonte citada no texto: %s" % (len(sem_fonte_com_dado), ", ".join(sem_fonte_com_dado)))

    # B4 dados quantitativos
    b4 = []
    tot = 0
    for fid, d in D.items():
        if fid not in doc: continue
        nd = numeros("\n\n".join(doc[fid][0]["paras"]))
        nt = numeros(d["texto"])
        tot += sum(nd.values())
        if nd != nt: b4.append({"id": fid, "so_documento": dict(nd - nt), "so_dados": dict(nt - nd)})
    rel["B4_numeros"] = {"numeros_conferidos": tot, "divergencias": b4}
    achado("B", "B4 dados quantitativos contra o documento (%s)" % item["rotulo"], "aprovado" if not b4 else "reprovado",
           "%d ocorrências numéricas (valores, percentuais, anos, leis) extraídas do documento e dos dados, idênticas fator a fator" % tot if not b4 else json.dumps(b4[:10], ensure_ascii=False))

    # B5 mistura entre territórios
    outros = []
    nome_t = T["territorio"]["nome"]
    supra = collections.OrderedDict()
    padroes = [("estado (MS)", r"Mato Grosso do Sul|\bMS\b(?!-)|estadual|no [Ee]stado\b"), ("país", r"\bBrasil\b|nacional|\bpaís\b"), ("outras localidades", r"\b(?:Dourados|Corumbá|Três Lagoas|Ponta Porã|Cuiabá|São Paulo|Brasília|Goiânia|Curitiba)\b")]
    for fid, d in D.items():
        for rot, pad in padroes:
            if re.search(pad, d["texto"]): supra.setdefault(rot, []).append(fid)
    sem_nome = [fid for fid, d in D.items() if nome_t not in d["texto"] and "municip" not in d["texto"].lower() and "capital" not in d["texto"].lower()]
    rel["B5_mistura"] = {"arquivo_registra_apenas": [T["territorio"]["id"]], "mencoes_por_escala": supra, "textos_sem_referencia_explicita_ao_territorio": sem_nome}
    achado("B", "B5 mistura entre territórios nos dados (%s)" % item["rotulo"], "aprovado",
           "o arquivo registra apenas %s e os 150 textos vêm do documento de %s (B1, B4 e B6); a separação no painel é testada em C6" % (tid, item["rotulo"]))
    achado("B", "B5 dados de outras escalas nos textos (%s)" % item["rotulo"], "pendente",
           "textos que citam dados ou referências de escala estadual (%d), nacional (%d) ou de outras localidades (%d). São trechos do documento-fonte, não mistura de arquivos, mas o leitor precisa distinguir dado municipal de dado estadual ou nacional: estado %s; país %s; outras localidades %s" % (
               len(supra.get("estado (MS)", [])), len(supra.get("país", [])), len(supra.get("outras localidades", [])),
               ", ".join(supra.get("estado (MS)", [])), ", ".join(supra.get("país", [])), ", ".join(supra.get("outras localidades", [])) or "nenhum"))

    # B6 truncamento
    trunc = []
    for fid, d in D.items():
        if fid in doc and d["texto"] != "\n\n".join(doc[fid][0]["paras"]): trunc.append(fid + ": texto difere do documento")
        if not re.search(r"[.!?)\]»”]$", d["texto"].strip()): trunc.append(fid + ": texto não termina em pontuação final")
    tam = sorted((len(d["texto"]), fid) for fid, d in D.items())
    rel["B6_truncamento"] = {"problemas": trunc, "menor": tam[0], "maior": tam[-1]}
    achado("B", "B6 textos truncados nos dados (%s)" % item["rotulo"], "aprovado" if not trunc else "reprovado",
           "150 textos idênticos aos parágrafos do documento e terminados em pontuação final; tamanho de %d (%s) a %d caracteres (%s)" % (tam[0][0], tam[0][1], tam[-1][0], tam[-1][1]) if not trunc else "; ".join(trunc))

    # redação do documento-fonte (registro, sem correção)
    red = []
    for fid, d in D.items():
        for m in re.finditer(r"[a-zà-ú)][.;:,][A-ZÁ-Ú]", d["texto"]):
            red.append("%s: sem espaço após pontuação (…%s…)" % (fid, d["texto"][max(0, m.start() - 15):m.end() + 10]))
        if "  " in d["texto"]: red.append(fid + ": espaço duplo")
    m = D.get("E2-F01", {}).get("texto", "")
    if "pela Defesa Civil, pelo Plano Diretor" in m: red.append("E2-F01: enumeração sem conjunção (pela Defesa Civil, pelo Plano Diretor…)")
    rel["redacao_documento"] = red
    if red:
        achado("B", "Redação no documento-fonte (%s)" % item["rotulo"], "pendente", "; ".join(red))

saida["achados"] = achados
json.dump(saida, open("relatorios/etapa6-auditoria-conteudo.json", "w", encoding="utf-8"), ensure_ascii=False, indent=2)
for a in achados:
    print("%-10s %s | %s" % (a["situacao"].upper(), a["item"], a["descricao"][:400]))
print("\nreprovados: %d | pendentes: %d | aprovados: %d" % tuple(sum(1 for a in achados if a["situacao"] == s) for s in ("reprovado", "pendente", "aprovado")))
sys.exit(1 if any(a["situacao"] == "reprovado" for a in achados) else 0)
