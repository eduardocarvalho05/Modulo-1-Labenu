function forTradicional(tabuada) {
    let array = []
    let conta = 0
    for (let i = 1; i <= 10; i++) {
        conta = i * tabuada
        array.push(conta)
    }
    return array
}
// console.log(forTradicional(5))

//////////////////////////////

//usa-se em casos que queira manipular posições de arrays/objetos
const numbers = [365, 20, 5, 1993, 26]
for (position in numbers) {
    // console.log(position)
    // console.log(numbers)
    // console.log(numbers[position])
}

/////////////////////////////////////////////////////

//usa-se em casos em casos que queira somente do valor de arrays/objetos
for(number of numbers){
    // console.log(`O valor é ${number}`)
}

