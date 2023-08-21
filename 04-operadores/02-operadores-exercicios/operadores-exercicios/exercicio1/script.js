// # Exercício 1

// Construa um programa que:
// a) Peça ao usuário que insira um número **par**
let numPar = Number(prompt(`Insira um numero PAR!`))
// b) Imprima no console **o resto da divisão** desse número por 2.
let resto = numPar % 2
console.log(`O resto da divisão de ${numPar} por 2 é: ${resto}`)
alert(`O resto da divisão de ${numPar} por 2 é: ${resto}`)
// c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
//Sempre vai dar 0...
// d) O que acontece no console se o usuário inserir um número ímpar? Escreva em um comentário de código.
//Vai sobrar 1.
// >💡  **Dica**:   não se esqueça de **converter** as respostas para o tipo número