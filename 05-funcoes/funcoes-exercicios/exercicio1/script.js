// # Exercício 1

// a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.
function ola(nome) {
    return `Meu nome é ${nome}.`
}
// let nome = prompt(`Qual é seu nome?`)
// alert(ola(nome))
// console.log(ola(`Eduardo`))

// b) Declare uma função que receba um número como parâmetro e imprima no console a tabuada de 1 a 10 dele. Chame esta função várias vezes com números diferentes.
function tabuada(num) {
    let tab1 = 1 * num
    let tab2 = 2 * num
    let tab3 = 3 * num
    let tab4 = 4 * num
    let tab5 = 5 * num
    let tab6 = 6 * num
    let tab7 = 7 * num
    let tab8 = 8 * num
    let tab9 = 9 * num
    let tab10 = 10 * num
    console.log(tab1, tab2, tab3, tab4, tab5, tab6, tab7, tab8, tab9, tab10)
    return tab1, tab2, tab3, tab4, tab5, tab6, tab7, tab8, tab9, tab10
}
console.log(tabuada(5))
// c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ 
const tabuada2 = (num) => {
    let tab1 = 1 * num
    let tab2 = 2 * num
    let tab3 = 3 * num
    let tab4 = 4 * num
    let tab5 = 5 * num
    let tab6 = 6 * num
    let tab7 = 7 * num
    let tab8 = 8 * num
    let tab9 = 9 * num
    let tab10 = 10 * num
    console.log(tab1, tab2, tab3, tab4, tab5, tab6, tab7, tab8, tab9, tab10)
    return tab1, tab2, tab3, tab4, tab5, tab6, tab7, tab8, tab9, tab10
}
// tabuada2(5)