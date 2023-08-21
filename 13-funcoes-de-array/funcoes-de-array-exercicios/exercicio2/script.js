// # Exercício 2
// Crie um array de números que contenha 8 números.
// Com este array e utilizando o `map()`, retorne os arrays abaixo:
// 1. Retorne um novo array contendo os números multiplicados por 5. Guarde esse array dentro de uma variável `const quintuplos`.
// 2. Retorne um novo array contendo os números divididos por 2. Guarde esse array dentro de uma variável `const metades`.


let arrayNum = [10, 20, 30, 40, 50, 60, 70, 80]

const numerosMultiplicados = arrayNum.map(numeros => numeros * 5)
const quintuplos = numerosMultiplicados
console.log(quintuplos)

const metades = arrayNum.map(numeros => numeros / 2)
console.log(metades)






