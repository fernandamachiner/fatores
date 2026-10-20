/*
 * ÍNDICE DE TERRITÓRIOS
 *
 * Lista os territórios cujos diagnósticos o painel pode carregar. Para cada
 * território: id (o mesmo usado em window.TERRITORIOS no arquivo de dados),
 * rótulo exibido e caminho do arquivo de dados, relativo ao index.html.
 *
 * "padrao" é o território carregado quando o endereço não indica outro.
 * Um território pode ser aberto diretamente pelo endereço:
 *   index.html?territorio=campo-grande-ms
 * Se o território indicado não estiver nesta lista, o painel informa o
 * problema e não exibe dados de nenhum outro território.
 */
window.TERRITORIOS_INDICE = {
  padrao: "campo-grande-ms",
  territorios: [
    {
      id: "campo-grande-ms",
      rotulo: "Campo Grande/MS",
      arquivo: "territorios/campo-grande-ms.js"
    }
  ]
};
