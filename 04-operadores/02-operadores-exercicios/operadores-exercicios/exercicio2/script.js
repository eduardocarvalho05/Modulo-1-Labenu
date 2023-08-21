// # Exercício 2
let num1 = Number(prompt(`Digite um número:`))
let num2 = Number(prompt(`Digite outro número:`))

// O primeiro número é maior que o segundo?
let a = num1 > num2
console.log(`O primeiro número é maior que o segundo? ${a}`)

// O primeiro número é igual ao segundo?
let b = num1 === num2
console.log(`O primeiro número é igual ao segundo? ${b}`)

// O primeiro número é divisível pelo segundo?
let c = num1 % num2 === 0
console.log(`O ${num1} é divisível pelo ${num2}? ${c}`)

// O segundo número é divisível pelo primeiro?
let d = num2 % num1 === 0
console.log(`O ${num2} é divisível pelo ${num1}? ${d}`)
