#!/bin/bash
# Abre a aplicacao "6 Eixos Estrategicos" no navegador padrao (macOS/Linux).
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
if command -v open >/dev/null 2>&1; then
  open "$DIR/index.html"
elif command -v xdg-open >/dev/null 2>&1; then
  xdg-open "$DIR/index.html"
else
  echo "Abra manualmente o arquivo index.html nesta pasta pelo navegador."
fi
