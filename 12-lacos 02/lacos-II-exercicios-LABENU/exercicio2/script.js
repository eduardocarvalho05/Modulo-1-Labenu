// # Exercício 2
// Crie um programa que peça um input de número para o usuário. Com este número, o código deve imprimir a **tabuada** do número, de 1 a 10.
// **Utilize o for...in para resolver**
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

//Tabuada com o for padrão em forma de função
function tabuada(numero2) {
    for (let i = 1; i <= 10; i++) {
        console.log(`A tabuada de ${numero2} x ${i} é: ${numero2 * i}`);
    }
}
//   tabuada(5);

/////////////////////////////////////////////////////////

//Tabuada utilizando o For IN

let numero1 = 2
let arrayTabuada = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for (let i in arrayTabuada) {
//     // console.log(arrayTabuada[i])
//     let tabuada = numero1 * arrayTabuada[i]
//     console.log(`A tabuada de ${numero1} é: ${numero1} * ${arrayTabuada[i]} = ${tabuada}`);
// }

////////////////////////////////////////

//Tabuada utilizando o For OFF

let numero2 = 5
let arrayTabuada2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let j of arrayTabuada2) {
    // console.log(j)
    let tabuada = numero2 * (j)
    console.log(`A tabuada de ${numero2} é: ${numero2} * ${j} = ${tabuada}`)
}


