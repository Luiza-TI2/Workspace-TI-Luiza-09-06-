let Desconto // Entrada - input
let Preço_Produto // Entrada - Input
let  Desconto_Obtido // Saída - Output

Preço_Produto = prompt("INFORME O PREÇO DO PRODUTO")
Desconto = prompt("INFORME O VALOR OU A PORCENTAGEM DO DESCONTO")

Desconto = parseFloat(Desconto)
Preço_Produto = parseFloat(Preço_Produto)

Desconto_Obtido = Preço_Produto * Desconto / 100

alert("O valor do desconto obtido pelo cliente sobre o Produto é de: " + Desconto * Preço_Produto /100)


//Quer calcular o valor do desconto obtido pelo cliente sobre o Produto