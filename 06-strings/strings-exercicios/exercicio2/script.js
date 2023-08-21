// # Exercício 2
// Observe a string abaixo:

// ```jsx
const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      "
// ```
// A partir dela, execute os passos abaixo:
// a) **Remova** o excesso de espaços no final da string;
let removerEspaco = minhaString.trim()
console.log(removerEspaco)
// b) Imprima no console a **quantidade de caracteres** da string, *antes* e *depois* da remoção dos espaços;
console.log(minhaString.length)
console.log(removerEspaco.length)
// c) **Substitua** os traços `________` por “sticioso”.
let substituir = removerEspaco.replace("________", "sticioso")
console.log(substituir)