// # Exercício 1
// Faça um programa que pergunte ao usuário seu ** nome ** e suas ** três comidas favoritas **.Em seguida, imprima no console a seguinte mensagem:
//     Estas são as comidas favoritas de nomeDoUsuario:
//     - Comida1
//     - Comida2
//     - Comida3
//   Você deve usar apenas um `console.log()` para isso
//     ⭐ Você pode juntar texto com variáveis de duas formas:
// - Concatenando as strings (com o sinal de +)
// - Utilizando template strings(e envolvendo a sua string com o sinal de CRASE ao invés de aspas ⇒ ````)

//     Adicionar um  `\n` na string coloca uma ** quebra de linha ** no texto.

let nome = prompt(`Qual é seu nome?`)
let comida1 = prompt(`Qual sua comida favorita?`)
let comida2 = prompt(`Qual sua comida favorita?`)
let comida3 = prompt(`Qual sua comida favorita?`)

alert(`Meu nome é ${nome} e minhas comidas favoritas são: ${comida1}, ${comida2} e ${comida3}`)
console.log(`Meu nome é ${nome} e minhas comidas favoritas são: \n${comida1},\n${comida2},\n${comida3}.`)



















// function comidasFavoritas(nome, comida1, comida2, comida3) {
//     alert(`Meu nome é ${nome} e minhas comidas favoritas são: ${comida1}, ${comida2} e ${comida3}`)
//     console.log(`Meu nome é ${nome} e minhas comidas favoritas são: ${comida1}, ${comida2} e ${comida3}`)
//     return `Meu nome é ${nome} e minhas comidas favoritas são: ${comida1}, ${comida2} e ${comida3}`
// }
// comidasFavoritas(nome, comida1, comida2, comida3)
// let nome = prompt(`Qual seu nome?`)
// let comida1 = prompt(`Qual sua primeira comida favorita?`)
// let comida2 = prompt(`Qual sua segunda comida favorita?`)
// let comida3 = prompt(`Qual sua terceira comida favorita?`)
// alert(`Meu nome é ${nome} e minhas comidas favoritas são: ${comida1}, ${comida2} e ${comida3}`)
// console.log(`Meu nome é ${nome} e minhas comidas favoritas são: ${comida1}, ${comida2} e ${comida3}`)