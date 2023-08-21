const newItem0 = document.createElement("li")
// console.log(newItem0)
const newItem5 = document.createElement("li")
// console.log(newItem5)

const texto0 = document.createTextNode("Item 0")
// console.log(texto0)
const texto5 = document.createTextNode("Item 5")
// console.log(texto5)

newItem0.appendChild(texto0)
console.log(newItem0)

newItem5.appendChild(texto5)
console.log(newItem5)


const listaCompleta = document.getElementById("lista");
listaCompleta.insertAdjacentElement("afterbegin", newItem0);
listaCompleta.insertAdjacentElement("beforeend", newItem5);




// - **`‘beforebegin’`**: Logo antes do elemento que estamos referenciando;
// - **`‘afterbegin’`**: Dentro do elemento referenciado, antes do seu primeiro elemento filho;
// - **`‘beforeend’`**: Dentro do elemento referenciado, após o seu último elemento filho;
// - **`‘afterend’`**: Após o elemento referenciado.