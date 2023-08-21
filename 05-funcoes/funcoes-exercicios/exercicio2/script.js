// # Exercício 2
// Declare e invoque as funções abaixo:
// a) Uma função que recebe 2 números como parâmetros e que imprime a soma deles. Invoque a função e verifique o resultado no console.
function soma(num1, num2) {
    return num1 + num2
}
// console.log(soma(1000, 20))
// b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
function maiorOuIgual(num1, num2) {
    return num1 >= num2
}
// console.log(maiorOuIgual(19, 20))
// c) Uma função que recebe um número e imprime no console um booleano informando se o número é par ou não.
function verificaParOuImpar(num) {
    if (num % 2 === 0) {
        return (`O número ${num} é PAR.`)
    }
    else {
        return (`O número ${num} é IMPAR.`)
    }
}
// console.log(verificaParOuImpar(201))

function par(num) {
    return num % 2 === 0 
}
// console.log(par(200))
// d) Uma função que recebe um salário bruto e retorna o salário líquido com desconto de 10%, referente ao INSS.

function calcularSalLiquido(salario) {
    let salarioLiquido = salario - (salario * 0.05)
    return `Meu salário liquido esse mês foi de ${salarioLiquido}`
}
console.log(calcularSalLiquido(1500))
