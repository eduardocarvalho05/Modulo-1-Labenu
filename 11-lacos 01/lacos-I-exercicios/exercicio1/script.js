// # Exercício 1
// Utilizando o laço `while`, escreva um código que recebe um `prompt` perguntando se a pessoa deseja comer mais coxinhas. “S” deve representar “sim”, e “N” deve representar “não”. Crie também uma `let conta` para guardar o valor total.
// Toda vez que a resposta for **sim**, o laço deve se repetir, e devemos adicionar R$2.50 ao valor total. Quando a resposta não for **sim**, devemos imprimir o valor total da conta.

let enquanto = prompt(`Deseja comer mais coxinhas?`)
function coxinhas(enquanto) {
    let resultado = 0
    let soma = 2.50
    while (enquanto.toLowerCase() === 's' || enquanto.toLowerCase() === 'sim') {
        resultado += soma
        enquanto = prompt(`Deseja comer mais coxinhas?`)
    }
    console.log(`O valor total da conta foi de ${resultado} reais.`)
}
coxinhas(enquanto)

////////////////////////////////////////////////////

// let enquanto = prompt(`Deseja comer mais coxinhas?`)
// let resultado = 0
// let soma = 2.50
// while (enquanto.toLowerCase() === 's' || enquanto.toLowerCase() === 'sim') {
//     resultado += soma
//     enquanto = prompt(`Deseja comer mais coxinhas?`)
// }
// console.log(`O valor total da conta foi de ${resultado} reais.`)

////////////////////////////////////////////////

function coxinhas2() {
    let soma = 2.50
    let resultado = 0
    let enquanto = prompt(`Deseja comer mais coxinhas?`)
    for (i = enquanto.toLowerCase(); i === `s` || i === `sim`; i = enquanto.toLowerCase()) {
        resultado += soma
        enquanto = prompt(`Deseja comer mais coxinhas?`)
    }
    console.log(`O valor total da conta foi de ${resultado} reais.`)
}
// coxinhas2()