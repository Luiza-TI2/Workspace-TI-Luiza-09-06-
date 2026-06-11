let Ingressos_Vendidos
let Preço
let Valor_Arrecadado

Ingressos_Vendidos = prompt("INFORME A QUANTIDADE DE INGRESSOS VENDIDOS")
Preço = prompt("INFORME O PREÇO A SER PAGO PELOS INGRESSOS")

Ingressos_Vendidos = parseFloat(Ingressos_Vendidos)
Preço = parseFloat(Preço)

Valor_Arrecadado = Ingressos_Vendidos * Preço

alert("O VALOR ARRECADADO É DE:" + Ingressos_Vendidos * Preço)