/*
 * CADASTRO DE TERRITÓRIOS
 *
 * Lista centralizada das localidades que aparecem no seletor do painel.
 * A estrutura metodológica (eixos e fatores) não fica aqui: é a mesma para
 * todos os territórios e vem de metodologia/metodologia.js.
 *
 * Campos de cada território:
 *   id        identificador único, em letras minúsculas, números e hífens
 *             (por exemplo, campo-grande-ms). É o mesmo id registrado em
 *             window.TERRITORIOS no arquivo de dados e o nome desse arquivo.
 *   rotulo    nome exibido no seletor e no cabeçalho (por exemplo,
 *             Campo Grande/MS).
 *   tipo      município, comunidade, distrito etc.
 *   uf        sigla da unidade da federação.
 *   situacao  "diagnostico"      território com arquivo de diagnóstico;
 *             "sem-diagnostico"  território cadastrado que ainda não tem
 *                                diagnóstico (arquivo: null); o painel
 *                                informa a ausência e não exibe textos;
 *             "simulado"         dados fictícios usados apenas em teste;
 *                                não devem ser cadastrados na versão
 *                                publicada.
 *   arquivo   caminho do arquivo de dados, relativo ao index.html
 *             (territorios/<id>.js), ou null quando não há diagnóstico.
 *
 * "padrao" é o território aberto quando o endereço não indica outro. Um
 * território também pode ser aberto pelo endereço:
 *   index.html?territorio=campo-grande-ms
 *
 * O passo a passo para cadastrar uma nova localidade está no LEIA-ME.txt.
 */
window.TERRITORIOS_INDICE = {
  padrao: "campo-grande-ms",
  territorios: [
    {
      id: "campo-grande-ms",
      rotulo: "Campo Grande/MS",
      tipo: "município",
      uf: "MS",
      situacao: "diagnostico",
      arquivo: "territorios/campo-grande-ms.js"
    }
  ]
};
