let Quantidade_de_dias // Entrada - input
let Valor_Diaria // Entrada - Input
let  Preço_Final// Saída - Output

Quantidade_de_dias = prompt("INFORME A QUANTIDADE DE DIAS A SER ALUGADO PELO CLIENTE")
Valor_Diaria = prompt("INFORME O VALOR DA DIARIA COBRADA")

Quantidade_de_dias = parseFloat(Quantidade_de_dias)
Valor_Diaria = parseFloat(Valor_Diaria)

Preço_Final = Quantidade_de_dias * Valor_Diaria

alert("O valor a ser pago pelo Cliente pela quantidade de dias é de: " + Quantidade_de_dias * Valor_Diaria)


//Quer calcular o valor a ser pago pelo Cliente