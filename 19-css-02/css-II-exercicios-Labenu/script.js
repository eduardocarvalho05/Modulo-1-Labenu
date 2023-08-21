// Enunciado
// Crie uma função que recebe um array de números e um número escolhido. A função deve retornar quantas vezes este número aparece no array.

// Ex: se o array for [1, 4, 8, 2, 5, 4, 10, 1, 2, 4, 7, 5] e o número escolhido for 4, sua função deve dizer: O número 4 aparece 3x

// Para o mesmo array, se o número escolhido for 3, sua função deve retornar: Número não encontrado

let arrayNum = [1, 4, 8, 2, 5, 4, 10, 1, 2, 4, 7, 5]

function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
    // Escreva seu código aqui
    let contar = 0

    for (let i = 0; i < arrayDeNumeros.length; i++) {
        if (arrayDeNumeros[i] === numeroEscolhido) {
            contar++
        }
    }
    if (contar === 0) {
        return `Número não encontrado`
    }
    return `O número ${numeroEscolhido} aparece ${contar}x`
}
console.log(contaOcorrencias(arrayNum, 6))