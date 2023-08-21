// # Exercício 1
// Crie um código que receba um número por **prompt** e verifique se esse número é divisível por 2 **ou** por 3.
//     Faça isso:
//     **a)** Utilizando ifs aninhados
// let numero = Number(prompt(`Digite um numero aqui:`))
function verificacao1(numero1) {
    if (numero1 % 2 === 0) {
        console.log(`O numero ${numero1} é divisivel por 2.`)
        if (numero1 % 3 === 0) {
            console.log(`O numero ${numero1} é divisivel por 2 e 3.`)
        }
        else {
            console.log(`O numero ${numero1} não é divisivel por 2 e por 3`)
        } if (numero1 % 3 === 0) {
            console.log(`O numero ${numero1} é divisivel por 3.`)
        } else {
            console.log(`O numero ${numero1} não é divisivel por 2 e por 3`)
        }
    }
    else {
        console.log(`O numero ${numero1} não é divisivel por 2 e por 3`)
    }
}
verificacao1(20)
// verificacao1(numero)

// **b)** Utilizando um operador lógico para unir duas operações relacionais

// let numero = Number(prompt(`Digite um numero aqui:`))
function verificacao2(numero2) {
    if (numero2 % 2 === 0 && numero2 % 3 === 0) {
        console.log(`O número ${numero2} é divisível por 2 e 3.`);
    } else if (numero2 % 2 === 0 || numero2 % 3 === 0) {
        console.log(`O número ${numero2} é divisível por 2 ou por 3.`)
    } else {
        console.log(`O número ${numero2} não é divisível por 2 e 3.`);
    }
}
verificacao2(15);
// verificacao2(numero)

