let Distância_Percorrida
let Tempo
let Velocidade_Média

Distância_Percorrida = prompt("INFORME A DISTÂNCIA A SER PERCORRIDA PELA AERONAVE")
Tempo = prompt("INFORME O TEMPO GASTO")

Distância_Percorrida = parseFloat(Distância_Percorrida)
Tempo = parseFloat(Tempo)


Velocidade_Média = Distância_Percorrida / Tempo

alert("A velocidade Média a ser gasta pela Aeronave pelo tempo a ser percorrido é de:" + Distância_Percorrida / Tempo)

