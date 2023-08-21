// # Exercício 3

// a) Crie 4 funções. Cada função deve receber dois parâmetros numéricos e retornar o valor de uma das operações básicas (soma, subtração, multiplicação e divisão).
function soma(num1, num2, num3) {
    let resultado = num1 + num2 + num3
    console.log(`A soma de ${num1} + ${num2} + ${num3} é: ${resultado}`)
    return `A soma de ${num1} + ${num2} + ${num3} é: ${resultado}`
}
// soma(10, 20, 40)
function subtracao(num1, num2) {
    let resultado = num1 - num2
    return (`A subtração de ${num1} - ${num2} é: ${resultado}`)
}

const multiplicacao = (num1, num2) => {
    let resultado = num1 * num2
    return (`A multiplicação de ${num1} * ${num2} é: ${resultado}`)
}

const divisao = (num1, num2) => {
    let resultado = num1 / num2
    return (`A divisão de ${num1} / ${num2} é: ${resultado}`)
}

// b) Em seguida, fora das funções, receba do usuário dois números e armazene-os em variáveis.
let num10 = 100//Number(prompt(`Digite um número aqui:`))
let num20 = 200//Number(prompt(`Digite outro número aqui:`))
// c) Invoque cada uma das 4 funções, passando como argumento os dois números recebidos do usuário.
// console.log(soma(num10, num20 , 100))
// alert(soma(num10, num20))
// console.log(subtracao(num10, num20))
// alert(subtracao(num1, num2))
// console.log(multiplicacao(num10, num20))
// alert(multiplicacao(num1, num2))
// console.log(divisao(num10, num20))
// alert(divisao(num1, num2))
// d) Por fim, crie variáveis para receber o retorno de cada uma das funções e imprima o resultado das operações no console.

let resultado1 = soma(num10, num20)
console.log(resultado1)
let resultado2 = subtracao(num10, num20)
console.log(resultado2)
let resultado3 = multiplicacao(num10, num20)
console.log(resultado3)
let resultado4 = divisao(num10, num20)
console.log(resultado4)
















