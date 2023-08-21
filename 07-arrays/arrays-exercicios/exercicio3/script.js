// # Exercício 3

// Agora, vamos **manipular** os arrays, adicionando ou removendo informações. Para isso, crie **três novos arrays**, chamados `nomeDoArrayOriginalCopia`. Por exemplo, se o seu primeiro array se chama **meusNumeros**, você deve criar um array **meusNumerosCopia**, e assim por diante.
// Copie cada um dos arrays originais para sua respectiva cópia usando o método `slice()`.
// Faça o que se pede abaixo nas **cópias** dos arrays originais:
let arrayOriginal = [10, 20, 30, 40, 50, 60]
let arrayStrings = [`Diana`, `Apollo`, `Eros`]
let mixArray = [`Eduardo`, 29, true]
// a) Adicione um item `number` ao **início** do primeiro array. Utilize `console.log()` para exibir o original e a cópia.
let arrayCopia = arrayOriginal.slice()
// console.log(arrayOriginal)
arrayCopia.unshift(5)
// console.log(arrayCopia)
// b) Remova o **último item** do segundo array. Utilize `console.log()` para exibir o original e a cópia.
let arrayStringsCopia = arrayStrings.slice()
console.log(arrayStrings)
arrayStringsCopia.pop()
console.log(arrayStringsCopia)
// c) Remova o **segundo item** do terceiro array. Utilize `console.log()` para exibir o original e a cópia.
arrayStrings.splice(1, 1)
// console.log(arrayStrings)

// **Obs:** copie os arrays criados no exercício 1 para dentro do arquivo *script.js* do exercício 3.

