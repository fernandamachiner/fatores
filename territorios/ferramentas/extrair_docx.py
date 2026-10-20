# Extração literal de um documento de diagnóstico situacional (.docx).
#
# Estrutura esperada do documento: títulos (estilo Heading 1) para o resumo
# executivo, para cada eixo (EIXO N. TÍTULO) e para as notas metodológicas.
# Dentro de cada eixo, um parágrafo introdutório e um parágrafo por fator,
# iniciado pelo nome do fator em negrito e itálico seguido de dois-pontos.
#
# O texto de cada fator é copiado sem nenhuma alteração. O código do fator
# no documento (E<eixo>-<n>) corresponde à posição do fator dentro do eixo.
#
# Uso: python3 extrair_docx.py <documento.docx> <saida.json>
import json, re, sys
import docx

def extrair(caminho):
    d = docx.Document(caminho)
    saida = {"cabecalho": [], "resumo_executivo": [], "eixos": [], "notas_metodologicas": [], "nao_classificados": []}
    secao, eixo = "cabecalho", None
    for i, p in enumerate(d.paragraphs):
        texto = p.text
        if not texto.strip():
            continue
        if p.style.name.startswith("Heading"):
            t = texto.strip()
            m = re.match(r"EIXO (\d)\.\s*(.+)", t)
            if m:
                eixo = {"numero": int(m.group(1)), "titulo_documento": m.group(2).strip(), "paragrafo_titulo": i,
                        "introducao": [], "fatores": []}
                saida["eixos"].append(eixo)
                secao = "eixo"
            elif t.upper().startswith("RESUMO"):
                secao = "resumo_executivo"
            elif t.upper().startswith("NOTAS"):
                secao = "notas_metodologicas"
            else:
                saida["nao_classificados"].append({"paragrafo": i, "texto": texto})
            continue
        if secao == "eixo":
            # nome do fator = runs iniciais em negrito e itálico
            nome = ""
            for r in p.runs:
                if r.bold and r.italic:
                    nome += r.text
                elif r.text == "":
                    continue
                else:
                    break
            if nome.strip():
                nome_limpo = nome.strip()
                if nome_limpo.endswith(":"):
                    nome_limpo = nome_limpo[:-1].strip()
                prefixo = texto[: len(nome)]
                assert prefixo == nome, (i, nome, prefixo)
                corpo = texto[len(nome):]
                if not nome.rstrip().endswith(":"):
                    # dois-pontos fora do negrito
                    assert corpo.lstrip().startswith(":"), (i, texto[:80])
                    corpo = corpo.lstrip()[1:]
                n = len(eixo["fatores"]) + 1
                eixo["fatores"].append({
                    "codigo_documento": "E%d-%d" % (eixo["numero"], n),
                    "ordem_documento": n,
                    "nome_documento": nome_limpo,
                    "texto": corpo.strip(),
                    "paragrafo": i,
                })
            else:
                eixo["introducao"].append({"paragrafo": i, "texto": texto.strip()})
        elif secao in ("cabecalho", "resumo_executivo", "notas_metodologicas"):
            saida[secao].append({"paragrafo": i, "texto": texto.strip()})
    return saida

if __name__ == "__main__":
    dados = extrair(sys.argv[1])
    json.dump(dados, open(sys.argv[2], "w", encoding="utf-8"), ensure_ascii=False, indent=2)
    print("eixos:", [(e["numero"], len(e["fatores"])) for e in dados["eixos"]],
          "| total de fatores:", sum(len(e["fatores"]) for e in dados["eixos"]),
          "| não classificados:", len(dados["nao_classificados"]))
