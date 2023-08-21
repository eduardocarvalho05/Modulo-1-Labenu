// # Exercício 1
// Crie um array vazio chamado `sacolao`, e siga os passos abaixo:
// a) Fora do array, crie **três objetos** que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades: 
let arraySacolao = []
// ```jsx
// nome: string;
// preco: number;
// disponibilidade: boolean;
// ```
const sacolao1 = {
    nome: `Maça`,
    preco: 6.00,
    disponibilidade: true
}
const sacolao2 = {
    nome: `Banana`,
    preco: 3.50,
    disponibilidade: true
}
const sacolao3 = {
    nome: `Laranja`,
    preco: 4.50,
    disponibilidade: false
}
// b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**.
arraySacolao.push(sacolao1, sacolao2, sacolao3)
// c) Imprima o array `sacolao`, e certifique-se de que agora ele seja um array **com três objetos**.
console.log(arraySacolao[0])
console.log(arraySacolao[1])
console.log(arraySacolao[2])
console.log(arraySacolao)