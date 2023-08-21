const arrayStrings = [`Melancia`, `Limão`, `Laranja`]
// console.log(arrayStrings.length)
// console.log(arrayStrings[3])
const arrayNumeros = [1, 2, 3]

let arrayMix = [`Apollo`, 2, true]
// console.log(arrayMix.includes(`Apollo é gordo`))
let arrayValor = [1000]
// console.log(arrayValor[0])
let nenhumValor = []

const copia = arrayStrings.slice()
copia.push(`Mamão`)
// console.log(copia)
// console.log(arrayStrings)
// console.log(copia.splice(2,2))

let arrayNum = [10, 30, 50, 60, 20]
let copiaNum = arrayNum.slice()
copiaNum.pop()
copiaNum.push(6)
copiaNum.splice(2, 1)
console.log(`Array Original`, arrayNum)
console.log(`ArrayCopia`, copiaNum)

