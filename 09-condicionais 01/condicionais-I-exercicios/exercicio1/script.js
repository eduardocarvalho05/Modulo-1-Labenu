function parOuImpar(num1) {
    if (num1 % 2 === 0) {
        return `O numero ${num1} é Par!`
    } else {
        return `O numero ${num1} é Impar!`
    }
}
const numero = 101
console.log(parOuImpar(numero))
console.log(parOuImpar(10))