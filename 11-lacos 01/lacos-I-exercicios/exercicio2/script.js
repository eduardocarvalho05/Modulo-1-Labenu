// # Exercício 2
// Crie um programa que peça um número para o usuário. Com este número, o código deve imprimir a **tabuada** do número, de 1 a 10.
// Exemplo com entrada **`7`**:
// ```jsx
// 7
// 14
// 21
// 28
// 35
// 42
// 49
// 56
// 63
// 70
// ```

let numero = Number(prompt(`Digite um numero para a tabuada:`))
function tabuada(numero2) {
    for (i = 1; i <= 10; i++) {
        let resultado = numero2 * i
        console.log(`A tabuada de ${numero2} é ${resultado}`)
    }
}
tabuada(10)
tabuada(numero)









function tabuada2() {
    let numero = Number(prompt(`Digite um numero para a tabuada:`))
    let i = 1
    while (i <= 10) {
        let resultado = numero * i
        console.log(`A tabuada de ${numero} é ${resultado}`)
        i++
    }
}
// tabuada2()