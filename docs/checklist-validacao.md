# Checklist de validação de um novo território

Use esta lista antes de publicar cada território novo ou cada nova versão de diagnóstico. Marque cada item. As referências entre parênteses indicam a seção do manual (docs/manual-cadastro-territorios.md).

Território: ______________________  Identificador: ______________________
Responsável pela conferência: ______________________  Data: ____/____/______

## A. Documento de diagnóstico

- [ ] O documento foi escrito a partir do modelo da versão vigente da metodologia (seção 4).
- [ ] Nenhuma ocorrência de PREENCHER permanece no documento.
- [ ] As tabelas dos fatores e as linhas Definição de referência não foram alteradas.
- [ ] Cada fator tem diagnóstico ou a frase Sem diagnóstico disponível, com motivo quando houver.
- [ ] Os dados quantitativos citam fonte e ano no próprio texto.
- [ ] O texto refere-se à localidade cadastrada. Dados de outra escala (estadual, nacional) estão identificados como tal.
- [ ] Menções a outros fatores usam o identificador, por exemplo (E2-F14).
- [ ] Os títulos dos eixos e das seções mantêm o estilo Título 1.

## B. Arquivos e cadastro

- [ ] O identificador segue o padrão: minúsculas, números e hífens (seção 3).
- [ ] O documento está em territorios/fontes/, com nome sem espaços nem acentos.
- [ ] O arquivo <id>.meta.json está em territorios/correspondencias/, sem trechos entre < >, e o caminho do documento confere com o nome do arquivo (seção 5).
- [ ] O arquivo <id>.fontes.json está em territorios/correspondencias/ (pode estar vazio) (seção 6).
- [ ] O arquivo territorios/<id>.js foi gerado pelo gerador, sem edição manual (seção 7).
- [ ] A entrada em territorios/indice.js tem o mesmo id e o mesmo rótulo do meta.json, situacao diagnostico e arquivo territorios/<id>.js (seção 8).
- [ ] Nenhum arquivo da lista de arquivos que não devem ser alterados foi modificado (seção 11).

## C. Verificação automática

Execute no computador: python3 testes/verificar_territorio.py <id>. Ou confira a verificação Verificar territórios no pedido de incorporação.

- [ ] 1. Metodologia íntegra: OK.
- [ ] 2. Cadastro de territórios: OK.
- [ ] 3. Estrutura do arquivo do território: OK.
- [ ] 4. Fidelidade dos textos ao documento-fonte: OK.
- [ ] 5. Navegação no navegador: OK (6 eixos, 150 fatores, diagnósticos idênticos aos dados).
- [ ] Os demais territórios continuam aprovados (a verificação automática do GitHub confere todos).

## D. Conferência visual

Abra o painel com ?territorio=<id> no endereço, localmente ou no site publicado.

- [ ] O seletor mostra o território com o rótulo correto e o território aparece como ativo no cabeçalho.
- [ ] Os 6 eixos abrem e mostram todos os fatores.
- [ ] Pelo menos um fator de cada eixo exibe o diagnóstico completo, lido até o fim.
- [ ] Um fator sem diagnóstico exibe o aviso de ausência, com o motivo quando informado.
- [ ] Os botões de fatores relacionados abrem o fator citado, e o botão Voltar retorna.
- [ ] Ao trocar para Campo Grande/MS e voltar, os textos correspondem a cada território.
- [ ] Em tela de celular, o seletor e o popup cabem na tela e o texto pode ser rolado até o fim.

## E. Publicação

- [ ] O pedido de incorporação mostra apenas arquivos do novo território e o territorios/indice.js (aba Files changed).
- [ ] A verificação Verificar territórios está verde.
- [ ] Após a incorporação, o pages build and deployment está verde (aba Actions).
- [ ] O endereço https://fernandamachiner.github.io/fatores/?territorio=<id> mostra o território (recarregar com Ctrl+Shift+R).
