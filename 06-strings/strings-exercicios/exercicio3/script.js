//Crie a const para a frase aqui
// # Exercício 3
// A partir da frase a seguir, faça o que se pede.

// Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"

// a) Crie uma `const` no seu código para **guardar a frase** (com aspas e tudo);
const frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair`
// b) Crie uma nova string a partir da primeira, trocando **verde** por **rosa**, e **azul** por **laranja**;
const trocarCorFrase = frase.replace("verde", "rosa").replace("azul", "laranja")
// console.log(trocarCor)
// c) **Verifique** se a nova string inclui **verde**, e se inclui **laranja**.
// console.log((novaString.includes("rosa")) && (novaString.includes("laranja")))
console.log(trocarCorFrase.includes("verde")); // false
console.log(trocarCorFrase.includes("laranja")); // true
// console.log(trocarCorFrase.includes("vermelho"))
// **EXTRA:** tente fazer o trecho “mas não deixe o gato sair” ficar em **letras maiúsculas**, assim como o “BOAS VINDAS”

console.log(`Jorge tem uma casa verde e com portão azul, com os dizeres: ${("BOAS VINDAS, mas não deixe o gato sair.").toUpperCase()}`)
