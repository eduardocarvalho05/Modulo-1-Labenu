
function parOuImpar(num1, num2) {
    if (num1 % 2 == 0 && num2 % 2 == 0) {
        return true
    } else {
        return false
    }
}
// alert(parOuImpar(10, 10))

let bolean1 = true
let bolean2 = false
let bolean3 = true

// if (bolean1 === true) {
//     alert(`Boleano1 é true`)
// } else {
//     alert(`Boleano2 é false`)
// }

// if (bolean1 === bolean2) {
//     alert(`Valor 1 e valor 2 são iguais`)
// } else if (bolean2 === bolean3) {
//     alert(`Valor 2 e valor 3 são iguais`)
// } else if (bolean1 === bolean3) {
//     alert(`valor 1 e valor 3 são iguais`)
// } else {
//     alert(`Não existem valores iguais!`)
// }

// let idade = Number(prompt(`Digite sua idade:`))

// let autorizacao = true
// if (idade >= 18 && idade <= 69) {
//     console.log(`Pode votar!`)
//     alert(`Pode votar!`)
// } else if (idade >= 70) {
//     alert(`Pode votar, mas não é obrigatorio!`)
// } else if (idade === 16 || idade === 17) {
//     alert(`Pode votar com a autorização dos pais!`)
// } else {
//     alert(`Não pode votar!`)
// }

let nota1 = 5
let nota2 = 10
let nota3 = 4
let nota4 = 7
const media = (nota1 + nota2 + nota3 + nota4) / 4
console.log(media)
if (media >= 5 && media <= 10) {
    console.log(`A pessoa foi aprovada!`)
} else if (media >= 3) {
    console.log(`A pessoa ficou de recuperação!`)
} else if (media < 3) {
    console.log(`A pessoa foi reprovada!`)
} else {
    console.log(`Dados invalidos!`)
}

