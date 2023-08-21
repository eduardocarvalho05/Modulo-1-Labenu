// ## Parte 1
// Construa um programa, seguindo as instruções abaixo:
// **a)** Declare uma variável para armazenar um **nome**, sem atribuir um valor a essa variável.
//boa pratica deixar como undefined
let nome = undefined
// **b)** Declare uma variável para armazenar uma **idade**, sem atribuir um valor a essa variável.
let idade
// **c)** Imprima na tela o **tipo** dessas variáveis que acabou de criar, usando o comando `typeof`.
alert(typeof nome)
alert(typeof idade)
console.log(typeof nome)
console.log(typeof idade)
// **d)** Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
//Foi impresso o valor indefinido pois não queria atribuir valor a essas variáveis
// **e)** Depois, disso, atualize o código para **perguntar** ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.
nome = prompt(`Qual é seu nome?`)
idade = prompt(`Qual sua idade?`)
alert(`Meu nome é ${nome} e minha idade é ${idade} anos.`)
console.log(`Meu nome é ${nome} e minha idade é ${idade} anos.`)