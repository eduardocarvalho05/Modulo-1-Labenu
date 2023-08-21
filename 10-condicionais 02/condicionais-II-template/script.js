// let idade = 20

// if (idade >= 13) {
//     if (idade <= 17) {
//         console.log(`A pessoa dependente já pode ter um cartão de crédito vinculado ao seu,`)
//     } else {
//         console.log(`Idade maior ou igual a 18.`)
//     }
// } else {
//     console.log(`Consulte outras possibilidades do Labenk`)
// }

//////////////////////////////////////////

// if (idade >= 13 && idade <= 17) {
//     console.log('Boas vindas ao Labank!')
// } else {
//     console.log('Faça um cadastro!')
// }

////////////////////////////////////////////////////////////////////////////////

// const usuarioPrompt = prompt(`Você possui conta no Labank?`).toLowerCase()
function labank(usuario) {
    usuario = usuario.toLowerCase(); // Converte o usuário para letras minúsculas
    if (usuario === 'sim') {
        console.log('Boas vindas ao Labank!')
    } else {
        console.log('Faça um cadastro!')
    }
}
// labank(usuarioPrompt)
// labank(`SIM`)

function labank2(usuario) {
    usuario = usuario.toLowerCase();

    usuario = usuario === 'sim' ? 'Boas vindas ao Labank!' : 'Faça o cadastro!';
    console.log(usuario)
}
// labank2(`SIm`)

///////////////////////////////////////////////////////////////////////////

// let cartao
// let ramal = Number(prompt(`Qual tipo de cartão você deseja?\nDigite de 1 a 4:\n1) Para Fácil\n2) Para Black\n3) Para Platinum\n4) Para Master Gold`))
// switch (ramal) {
//     case 1: cartao = console.log(`Você escolheu o Cartão Fácil.`)
//         break
//     case 2: cartao = console.log(`Você escolheu o Cartão Black.`)
//         break
//     case 3: cartao = console.log(`Você escolheu o cartão Platinum.`)
//         break
//     case 4:
//         cartao = console.log(`Você escolheu o cartão Master Gold.`)
//         break
//     default:
//         cartao = console.log(`Escolha uma das 4 opções disponíveis.`)
//         break
// }

//////////////////////////////////////////////

// let num = Number(prompt(`Digite um numero aqui:`))
function divisivel(num) {
    if (num % 2 === 0 && num % 3 === 0) {
        return `O numero ${num} é divisivel por 2 e por 3.`
    } else {
        return `O numero ${num} não é divisivel por 2 e por 3.`
    }
}
// console.log(divisivel(num))

//////////////////////////////////////////

function divisivel2(num) {
    if (num % 2 === 0) {
        if (num % 3 === 0) {
            return `O numero ${num} é divisivel por 2 e por 3.`
        } else {
            return `O numero ${num} é divisivel por 2, mas não por 3.`
        }
    } else {
        if (num % 3 === 0) {
            return `O numero ${num} é divisivel por 3, mas não por 2.`
        } else {
            return `O numero ${num} não é divisivel por 2 e nem por 3.`
        }
    }
}
// console.log(divisivel2(num))

///////////////////////////////////////////////////////

// let num = Number(prompt(`Digite um numero aqui:`))
let num = 18
function divisivel3(num) {
    if (num % 2 === 0 && num % 3 === 0) {
        console.log(`${num} é divisivel por 2 e por 3.`)
        if (num === 30) {
            console.log(`UFA, ACERTEI!`)
        } else {
            console.log(`Não foi dessa vez :(`)
        }
    } else {
        console.log(`O numero ${num} não é divisivel por 2 e por 3.`)
    }
}
divisivel3(num)


// let num = Number(prompt(`Digite um numero aqui:`))
function divisivel4(num) {
    if (num % 2 === 0 && num % 3 === 0) {
        console.log(`${num} é divisivel por 2 e por 3.`)
        switch (num) {
            case 6:
                console.log(`O número ${num} é divisível por 2 e por 3.`)
                break;
            case 12:
                console.log(`O número ${num} é divisível por 2 e por 3.`)
                break;
            case 18:
                console.log(`O número ${num} é divisível por 2 e por 3.`)
                break;
            case 30:
                console.log(`O número ${num} é divisível por 2 e por 3.`)
                break;
            default:
                return `O número ${num} não é divisível por 2 e por 3.`;
        }
    } else {
        if (num < 6) {
            console.log(`O numero ${num} é menor que 6.`)
        } else if (num > 30) {
            console.log(`O numero ${num} é maior que 30.`)
        }
    }
}
// divisivel4(31)









