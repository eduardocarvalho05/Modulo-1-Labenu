//códigos a serem reescritos
// # Exercício 3
// Reescreva os códigos do arquivo `script.js` utilizando o **if ternário**.
// **Relembrando o if ternário**
// ```jsx
// condição ? expr1 : expr2
// ```
// Em que:
// `condição` é uma expressão que é avaliada como `true` ou `false`
// `expr1` e `expr2` são expressões com valores de qualquer tipo
// a)
// if (nome === "José") {
// 	console.log("Oi, Zé!")
// } else {
// 	console.log("Olá, " + nome)
// }

let nome = 'Eduardo'
let mensagem1 = nome === 'José' ? 'Oi, Zé!' : `Olá ${nome}`
console.log(mensagem1)

// b)
// if (idade >= 18) {
// 	console.log("Pode tirar carteira de motorista!")
// } else {
// 	console.log("Ainda não pode tirar carteira de motorista!")
// }
let idade = 20
let mensagem2 = idade >= 18 ? `Pode tirar carteira de motorista!` : `Ainda não pode tirar carteira de motorista!`

console.log(mensagem2)