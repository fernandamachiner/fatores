# Verificação completa de um território antes da publicação, em um comando.
#
# Executa, na ordem, as verificações do checklist de validação
# (docs/checklist-validacao.md) e mostra um resumo com OK ou ERRO em cada
# passo. Termina com código 1 se algum passo falhar.
#
# Uso, a partir da pasta do painel:
#   python3 testes/verificar_territorio.py <id do território>
# Exemplo:
#   python3 testes/verificar_territorio.py campo-grande-ms
#
# Requisitos: Python 3 com python-docx e Node.js. O teste no navegador
# (passo 5) requer também o pacote playwright; se não estiver instalado, o
# passo aparece como NÃO EXECUTADO e deve ser feito pela verificação
# automática do GitHub ou manualmente (docs/checklist-validacao.md, parte C).
import os
import subprocess
import sys
import tempfile

if len(sys.argv) != 2:
    sys.exit("uso: python3 testes/verificar_territorio.py <id do território>")
tid = sys.argv[1]
if not os.path.exists("index.html") or not os.path.isdir("territorios"):
    sys.exit("ERRO execute este comando de dentro da pasta do painel (a pasta que contém o index.html)")

passos = [
    ("1. Metodologia íntegra (eixos, fatores e ícones)", ["node", "testes/validar-metodologia.js"]),
    ("2. Cadastro de territórios (territorios/indice.js)", ["node", "testes/validar-cadastro-territorios.js"]),
    ("3. Estrutura do arquivo do território", ["node", "testes/validar-territorio.js", tid]),
    ("4. Fidelidade dos textos ao documento-fonte (.docx)", [sys.executable, "testes/conferir_fidelidade_territorio.py", tid]),
]


def tem_playwright():
    r = subprocess.run(["node", "-e", "require('playwright')"], capture_output=True)
    return r.returncode == 0


resultado = []
for nome, cmd in passos:
    r = subprocess.run(cmd, capture_output=True, text=True)
    saida = (r.stdout + r.stderr).strip().splitlines()
    erros = [l.strip() for l in saida if l.strip().startswith("ERRO") and not l.strip().startswith("ERROS")]
    resultado.append((nome, r.returncode == 0, erros or (saida[-3:] if r.returncode else [])))

nome = "5. Navegação no navegador: 6 eixos, 150 fatores e diagnósticos do território"
if tem_playwright():
    with tempfile.TemporaryDirectory() as tmp:
        r = subprocess.run(["node", "testes/testar-navegacao.js", "index.html?territorio=" + tid, os.path.join(tmp, "nav.json")], capture_output=True, text=True)
    linhas = [l.strip() for l in (r.stdout + r.stderr).splitlines() if l.strip()]
    resultado.append((nome, r.returncode == 0, linhas[-6:] if r.returncode else [l for l in linhas if l.startswith("eixos:")]))
else:
    resultado.append((nome, None, ["pacote playwright não instalado; faça a verificação no navegador (checklist, parte C)"]))

print("VERIFICAÇÃO DO TERRITÓRIO " + tid)
print("=" * 60)
falhou = False
for nome, ok, det in resultado:
    rotulo = "NÃO EXECUTADO" if ok is None else ("OK" if ok else "ERRO")
    falhou = falhou or ok is False
    print("%-14s %s" % (rotulo, nome))
    for l in det[:12]:
        print("               " + l)
print("=" * 60)
print("Resultado: " + ("há erros; corrija e execute de novo (docs/manual-cadastro-territorios.md, seção Erros comuns)" if falhou else "aprovado nas verificações executadas"))
sys.exit(1 if falhou else 0)
