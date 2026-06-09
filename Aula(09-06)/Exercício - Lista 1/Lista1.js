let DistânciaPercorrida // Entrada - input
let CombustivelEmLitros // Entrada - Input
let ConsumoMédio // Saída - Output

DistanciaPercorrida = prompt("INFORME A DISTÂNCIA A SER PERCORRIDA EM KM")
ConsumoMédio = prompt("INFORME O CONSUMO MÉDIO A SER GASTO PELA DISTÂNCIA PERCORRIDA")

Distância = parseFloat(DistânciaPercorrida)
CombustivelEmLitros = parseFloat(CombustivelEmLitros)

ConsumoMédio = DistânciaPercorrida + CombustivelEmLitros

alert("O consumo médio do Veículo é: " + ConsumoMédio + CombustivelEmLitros)

