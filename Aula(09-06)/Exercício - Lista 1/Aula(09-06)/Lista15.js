let Unidade_Produzida
let Valor_Unidade
let Custo_Produção

Unidade_Produzida = prompt("INFORME A QUANTIDADE DE UNIDADE PRODUZIDA")
Valor_Unidade = prompt("INFORME O VALOR DA UNIDADE")

Unidade_Produzida = parseFloat(Unidade_Produzida)
Valor_Unidade = parseFloat(Valor_Unidade)

Custo_Produção = Unidade_Produzida * Valor_Unidade

alert("O CUSTO DE PRODUÇÃO DE UM LOTE É:" + Unidade_Produzida * Valor_Unidade)