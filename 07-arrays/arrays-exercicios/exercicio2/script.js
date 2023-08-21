// # Exercício 2
// Com os arrays criados no exercício 1, vamos fazer algumas observações. Faça o que se pede abaixo, utilizando `console.log()`:
// a) Imprima a **quantidade de itens** de cada array (utilize um `console.log()` para cada impressão).
let arrayNum = [10, 20, 30, 40, 50, 60]
let arrayStrings = [`Diana`, `Apollo`, `Eros`]
let mixArray = [`Eduardo`, 29, true]
// b) Imprima o **primeiro item** do primeiro array, o **segundo item** do segundo array, e o **terceiro item** do terceiro array.
console.log(arrayNum.length)
console.log(arrayStrings.length)
console.log(mixArray.length)
// c) **Verifique** se um item está incluído no primeiro array e depois no terceiro array. Imprima o resultado dessas verificações no `console.log()`. A primeira impressão deve retornar um booleano **true** e a segunda deve retornar um booleano **false**.
console.log(arrayNum.includes(30))
console.log(mixArray.includes(30))
// **Obs:** copie os arrays criados no exercício 1 para dentro do arquivo *script.js* do exercício 2.