# Teste do procedimento de cadastro de território (Etapa 7).
#
# Executa, numa cópia temporária do painel, os passos do manual
# docs/manual-cadastro-territorios.md com o TERRITÓRIO DEMONSTRATIVO (SIMULADO)
# de testes/exemplo-simulado/, e confirma que o procedimento funciona sem
# alterar index.html, app.js, style.css nem a metodologia. Em seguida provoca
# os erros comuns descritos no manual e confere se cada um é detectado com a
# mensagem prevista.
#
# Uso, a partir da pasta do painel:
#   python3 testes/testar-procedimento-cadastro.py
import hashlib
import json
import os
import re
import shutil
import subprocess
import sys
import tempfile

RAIZ = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
EX = os.path.join(RAIZ, "testes", "exemplo-simulado")
TID = "demonstrativo-simulado"
DOCX = "Diagnostico_Territorio_Demonstrativo_SIMULADO.docx"
INTOCAVEIS = ["index.html", "app.js", "style.css", "metodologia/metodologia.js", "metodologia/registro.json",
              "metodologia/planilha/Fatores_organizacao.xlsx", "territorios/campo-grande-ms.js"]
resultados = []


def registra(nome, ok, detalhe=""):
    resultados.append((nome, ok, detalhe))


def h(caminho):
    return hashlib.sha256(open(caminho, "rb").read()).hexdigest()


def copia_painel(dest):
    def ignora(d, nomes):
        return [n for n in nomes if n in (".git", "node_modules")]
    shutil.copytree(RAIZ, dest, ignore=ignora, symlinks=True)


def roda(cmd, cwd, env=None):
    e = dict(os.environ)
    # a cópia temporária não leva node_modules; o playwright é procurado
    # também na pasta do painel original
    e["NODE_PATH"] = os.pathsep.join(x for x in [os.path.join(RAIZ, "node_modules"), e.get("NODE_PATH", "")] if x)
    e.update(env or {})
    r = subprocess.run(cmd, cwd=cwd, capture_output=True, text=True, env=e)
    return r.returncode, r.stdout + r.stderr


def cadastra(cwd, entrada):
    p = os.path.join(cwd, "territorios", "indice.js")
    s = open(p, encoding="utf-8").read()
    bloco = ",\n    {\n" + ",\n".join('      %s: %s' % (k, json.dumps(v, ensure_ascii=False)) for k, v in entrada.items()) + "\n    }\n  ]\n};"
    novo = re.sub(r"\n    \}\n  \]\n\};\s*$", "\n    }" + bloco + "\n", s)
    assert novo != s, "formato inesperado de territorios/indice.js"
    open(p, "w", encoding="utf-8").write(novo)


def prepara(cwd):
    """Passos 3 a 6 do manual: documento, metadados, fontes e geração."""
    shutil.copy(os.path.join(EX, DOCX), os.path.join(cwd, "territorios", "fontes", DOCX))
    for ext in ("meta.json", "fontes.json"):
        shutil.copy(os.path.join(EX, "%s.%s" % (TID, ext)), os.path.join(cwd, "territorios", "correspondencias", "%s.%s" % (TID, ext)))


ENTRADA = {"id": TID, "rotulo": "Território demonstrativo (simulado)", "tipo": "território simulado", "uf": "--",
           "situacao": "simulado", "arquivo": "territorios/%s.js" % TID}

base = tempfile.mkdtemp(prefix="painel-procedimento-")
try:
    # ---------- procedimento completo ----------
    cwd = os.path.join(base, "painel")
    copia_painel(cwd)
    antes = {f: h(os.path.join(cwd, f)) for f in INTOCAVEIS}

    prepara(cwd)
    rc, out = roda([sys.executable, "territorios/ferramentas/gerar_territorio.py", TID], cwd)
    registra("passo 6: geração do arquivo do território", rc == 0 and os.path.exists(os.path.join(cwd, "territorios", TID + ".js")), out.strip().splitlines()[-1] if out.strip() else "")

    w = json.loads(open(os.path.join(cwd, "territorios", TID + ".js"), encoding="utf-8").read().split('window.TERRITORIOS["%s"] = ' % TID, 1)[1].rstrip().rstrip(";"))
    sd = w["fatores_sem_diagnostico"]
    motivo = [x for x in sd if x["motivo"]]
    d1 = w["diagnosticos"][sorted(w["diagnosticos"])[0]]
    registra("dados: 12 diagnósticos, 138 fatores sem diagnóstico declarados, 1 com motivo",
             len(w["diagnosticos"]) == 12 and len(sd) == 138 and len(motivo) == 1 and all(x["origem"] == "declarado_no_documento" for x in sd),
             "%d diagnósticos; %d sem diagnóstico; motivo: %s" % (len(w["diagnosticos"]), len(sd), motivo[0]["motivo"] if motivo else "-"))
    registra("dados: fontes, normas e períodos registrados",
             d1["fontes_citadas"] and "2025" in d1["periodos_citados"] and any(d["referencias_normativas"] for d in w["diagnosticos"].values())
             and w["documento_fonte"].get("periodo_referencia"),
             "fontes de %s: %s; períodos: %s; período de referência: %s" % (sorted(w["diagnosticos"])[0], d1["fontes_citadas"], d1["periodos_citados"], w["documento_fonte"].get("periodo_referencia")))

    cadastra(cwd, ENTRADA)
    rc, out = roda([sys.executable, "testes/verificar_territorio.py", TID], cwd, {"PERMITIR_SIMULADO": "1"})
    registra("passos 7 e 8: cadastro e verificação completa (verificar_territorio.py)", rc == 0 and "NÃO EXECUTADO" not in out,
             " | ".join(l.strip() for l in out.splitlines() if re.match(r"^(OK|ERRO|NÃO)", l)))
    rc, out = roda([sys.executable, "testes/verificar_territorio.py", "campo-grande-ms"], cwd, {"PERMITIR_SIMULADO": "1"})
    registra("Campo Grande/MS continua aprovado depois do novo cadastro", rc == 0, out.strip().splitlines()[-1])
    depois = {f: h(os.path.join(cwd, f)) for f in INTOCAVEIS}
    registra("nenhum arquivo da interface, da metodologia ou de outro território foi alterado", antes == depois,
             ", ".join(f for f in INTOCAVEIS if antes[f] != depois[f]) or "%d arquivos conferidos por hash" % len(INTOCAVEIS))
    rc, out = roda(["node", "testes/validar-cadastro-territorios.js"], cwd)
    registra("sem PERMITIR_SIMULADO, o validador recusa território simulado no cadastro publicado", rc != 0 and "território simulado no cadastro publicado" in out, "")
    shutil.rmtree(cwd)

    # ---------- erros comuns do manual ----------
    def caso(nome, altera, cmd, esperado, env=None, cadastrar=False):
        cw = os.path.join(base, "erro")
        if os.path.exists(cw): shutil.rmtree(cw)
        copia_painel(cw)
        prepara(cw)
        altera(cw)
        if cadastrar:
            roda([sys.executable, "territorios/ferramentas/gerar_territorio.py", TID], cw)
            cadastra(cw, ENTRADA_ALT if "ENTRADA_ALT" in globals() and cadastrar == "alt" else ENTRADA)
        rc, out = roda(cmd, cw, env)
        registra("erro comum detectado: " + nome, rc != 0 and esperado in out, (re.search(r".*%s.*" % re.escape(esperado), out) or re.search(".*", out)).group(0).strip()[:160])

    import docx

    def edita_docx(cw, f):
        p = os.path.join(cw, "territorios", "fontes", DOCX)
        d = docx.Document(p)
        f(d)
        d.save(p)

    def instrucao_restante(cw):
        edita_docx(cw, lambda d: d.add_paragraph("[PREENCHER: diagnóstico esquecido]"))

    def nome_alterado(cw):
        def f(d):
            for t in d.tables:
                if len(t.rows) == 1 and t.cell(0, 0).text.strip() == "E1-F01":
                    t.cell(0, 1).text = t.cell(0, 1).text + " (alterado)"
        edita_docx(cw, f)

    def definicao_alterada(cw):
        def f(d):
            for p in d.paragraphs:
                if p.text.startswith("Definição de referência:"):
                    p.runs[-1].text = p.runs[-1].text + " Texto acrescentado."
                    break
        edita_docx(cw, f)

    def fator_vazio(cw):
        def f(d):
            alvo = False
            for el in list(d.element.body.iterchildren()):
                if el.tag.endswith("}tbl") and "E6-F01" in "".join(el.itertext()):
                    alvo = True; continue
                if alvo and el.tag.endswith("}p"):
                    txt = "".join(el.itertext())
                    if txt.startswith("Definição de referência:"): continue
                    d.element.body.remove(el); break
        edita_docx(cw, f)

    def meta_id_errado(cw):
        p = os.path.join(cw, "territorios", "correspondencias", TID + ".meta.json")
        m = json.load(open(p, encoding="utf-8")); m["territorio"]["id"] = "outro-id"
        json.dump(m, open(p, "w", encoding="utf-8"), ensure_ascii=False)

    def meta_modelo(cw):
        p = os.path.join(cw, "territorios", "correspondencias", TID + ".meta.json")
        m = json.load(open(p, encoding="utf-8")); m["territorio"]["uf"] = "<sigla da UF>"
        json.dump(m, open(p, "w", encoding="utf-8"), ensure_ascii=False)

    def docx_nome_errado(cw):
        os.rename(os.path.join(cw, "territorios", "fontes", DOCX), os.path.join(cw, "territorios", "fontes", DOCX.lower()))

    def fonte_inexistente(cw):
        p = os.path.join(cw, "territorios", "correspondencias", TID + ".fontes.json")
        m = json.load(open(p, encoding="utf-8")); m["referencias_normativas"]["E1-F01"] = ["Lei que não aparece no texto"]
        json.dump(m, open(p, "w", encoding="utf-8"), ensure_ascii=False)

    def nada(cw):
        pass

    gerar = [sys.executable, "territorios/ferramentas/gerar_territorio.py", TID]
    caso("linha de instrução do modelo não apagada", instrucao_restante, gerar, "texto de instrução do modelo")
    caso("nome de fator alterado no documento", nome_alterado, gerar, "nome difere do cadastro")
    caso("definição de referência alterada", definicao_alterada, gerar, "definição de referência difere do cadastro")
    caso("fator sem texto e sem a frase Sem diagnóstico disponível", fator_vazio, gerar, "sem parágrafo de diagnóstico")
    caso("id do meta.json diferente do informado", meta_id_errado, gerar, "difere do id informado")
    caso("trecho do modelo entre < > no meta.json", meta_modelo, gerar, "trechos do modelo entre < >")
    caso("nome do .docx com maiúsculas diferentes", docx_nome_errado, gerar, "documento-fonte não encontrado")
    caso("fonte ou norma que não aparece no texto", fonte_inexistente, gerar, "não encontrada")

    def cadastro_caixa(cw):
        pass
    ENTRADA_ALT = dict(ENTRADA, arquivo="territorios/Demonstrativo-Simulado.js")
    caso("caminho do arquivo com maiúsculas diferentes no cadastro", nada, ["node", "testes/validar-cadastro-territorios.js"], "arquivo deve ser territorios/demonstrativo-simulado.js", {"PERMITIR_SIMULADO": "1"}, cadastrar="alt")

    def sem_cadastro(cw):
        roda(gerar, cw)
    caso("território gerado mas não cadastrado no índice", sem_cadastro, ["node", "testes/validar-territorio.js", TID], "território ausente de territorios/indice.js")
finally:
    shutil.rmtree(base, ignore_errors=True)

falhas = 0
for nome, ok, det in resultados:
    falhas += 0 if ok else 1
    print("%s %s%s" % ("OK   " if ok else "FALHA", nome, (": " + det) if det else ""))
print("\n%d de %d verificações aprovadas" % (len(resultados) - falhas, len(resultados)))
sys.exit(1 if falhas else 0)
