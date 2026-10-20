#!/usr/bin/env bash
# Executa um teste na verificação automática do GitHub e, se ele falhar,
# transforma as linhas de falha em avisos visíveis no pedido de incorporação.
saida=$(mktemp)
"$@" 2>&1 | tee "$saida"
codigo=${PIPESTATUS[0]}
if [ "$codigo" -ne 0 ]; then
  grep -E "FALHA|ERRO|Error|falhas: [1-9]|erros de console: [1-9]|falhas de rede: [1-9]|^   - " "$saida" | head -20 | while IFS= read -r linha; do
    echo "::error title=$1 $2::${linha}"
  done
fi
exit "$codigo"
