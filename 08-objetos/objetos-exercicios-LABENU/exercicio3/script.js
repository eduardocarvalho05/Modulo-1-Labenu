// # Exercício 3

// Observe o objeto abaixo e, utilizando o **espalhamento** (ou **spread**), resolva os exercícios a seguir:

// ```
const pokemon1 = {
    nome: `Bulbasaur`,
    tipo: `Grama`,
    nivel: 5
}
// ```
// // a) Crie uma **cópia** do objeto acima, mantendo a estrutura, mas trocando **`nome`** por “Squirtle” e **`tipo`** por “Água”.
const pokemon2 = {
    ...pokemon1,
    nome: `Squirtle`,
    tipo: `Água`,
}
// // b) No objeto original, adicione mais uma propriedade, chamada `ataques`. Esta propriedade deve guardar um **array** que deve começar vazio.

pokemon1.arrayAtaques = [] //Adicionou ataque dentro de pokemon1
// console.log(pokemon1)
// // c) Crie um objeto de `ataque` com a estrutura abaixo e **o adicione no array `ataques`**, utilizando `**push()**`:

const ataque1 = {
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100
}
pokemon1.arrayAtaques.push(ataque1)//adicionou o objeto ataque dentro do arrayAtaques
// console.log(pokemon1)

// // d) Na cópia do objeto original, ou seja, no objeto que representa o **Squirtle**, adicione a propriedade **`ataques`** a partir do **espalhamento** da propriedade de mesmo nome criada para o objeto original.
pokemon2.arrayAtaques = [...pokemon1.arrayAtaques]

// // e) Para o objeto original, adicione no array de `ataques` o seguinte ataque: **“Folha Navalha”**, com **45 de dano**, **100 de precisão**, e do tipo **“Grama”**.

const ataque2 = {
    nome: `Folha Navalha`,
    dano: 45,
    tipo: `Grama`,
    precisao: 100
}
pokemon1.arrayAtaques.push(ataque2)
// console.log(pokemon1)
// // f) Para a cópia, crie o `ataque` **“Jato de Água”**, com **40 de dano**, **100 de precisão**, e do tipo **“Água”**; e adicione no array de `ataques`.
const ataque3 = {
    nome: `Jato de Água`,
    dano: 40,
    tipo: `Água`,
    precisao: 100
}
pokemon2.arrayAtaques.push(ataque3)
// // g) Imprima ambos os objetos no console e verifique se todas as informações adicionadas aparecem na impressão.
console.log(pokemon1)
console.log(pokemon2)
console.log(pokemon1, pokemon2)