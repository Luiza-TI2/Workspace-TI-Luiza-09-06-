let Quantidade_Litros // Entrada - input
let Preço_Litro // Entrada - Input
let Abastecimento_Total // Saída - Output

Quantidade_Litros = prompt("INFORME A QUANTIDADE EM LITROS A SER ABASTECIDO")
Preço_Litro = prompt("INFORME O PREÇO POR LITROS A SER PAGO")

Quantidade_Litros = parseFloat(Quantidade_Litros)
Preço_Litro = parseFloat(Preço_Litro)

Abastecimento_Total = Quantidade_Litros * Preço_Litro

alert("O valor que a empresa gastará para abastecer sua frota durante uma viagem é de:" + Quantidade_Litros * Preço_Litro)

//Deseja calcular quanto gastará para abastecer sua frota durante uma viagem.