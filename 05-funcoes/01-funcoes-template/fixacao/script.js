// Resolva o Exercício de Fixação!

function cadastroUnico(nome, anoNasc, anoAtual) {
    let idade = anoAtual - anoNasc
    let maiorDeIdade = idade >= 18
    return (`${nome} é maior de idade? ${maiorDeIdade}.`)
}
console.log(cadastroUnico(`Eduardo`, 1993, 2023))
console.log(cadastroUnico(`Apollo`, 2020, 2023))


const credenciaisUnica = (nome, anoNasc, anoAtual) => {
    let idade = anoAtual - anoNasc
    let maiorDeIdade = idade >= 18
    return `${nome} é maior de idade? ${maiorDeIdade}.`
}
console.log(credenciaisUnica(`Gabriela`, 1994, 2023))
console.log(credenciaisUnica(`Diana`, 2020, 2023))








