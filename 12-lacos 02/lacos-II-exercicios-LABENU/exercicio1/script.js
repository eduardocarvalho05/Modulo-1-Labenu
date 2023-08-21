// Uma pessoa analista quer conseguir ver quantos gols cada um de seus 5 atacantes marcou nas últimas 5 temporadas, e quer que você construa um código que mostre isso.
// Crie um laco `for` que itere pelo array deixado no arquivo `script.js`, e em sequência itere pelo array que existe dentro do primeiro array. Você deve imprimir a temporada, e o número de gols, como no exemplo abaixo:

// ```bash
// Jogador 1: 13, 15, 25, 34, 35
// Jogador 2: 30, 48, 30, 12, 47
// ```
const array = [
    [27, 4, 20, 13, 14],
    [11, 15, 12, 8, 9],
    [5, 5, 12, 16, 4],
    [20, 33, 11, 12, 19],
    [3, 3, 4, 5, 10]
]

//For feito da maneira normal, para praticar

// for (i = 0; i < array.length; i++) {
//     console.log(`Jogador ${i + 1}: ${array[i]}`)
// }

////////////////////////////////////////////////////

//For in de array 

let contador = 1;
for (let numero in array) {
    console.log(`Jogador ${contador} Marcou: ${array[numero]} Gols`)
    contador++;
}

/////////////////////////////////////////////////////////
