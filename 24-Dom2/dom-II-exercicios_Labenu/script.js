

//Adiciona um paragrafo com OIOIOI
// function adicionaItem() {
//     const novoP = document.createElement("p");
//     // console.log(novoP)
//     const oi = document.createTextNode("OIOIOI")
//     // console.log(oi)

//     novoP.appendChild(oi)
//     // console.log(novoP)

//     // Encontrar o último elemento <article>
//     const container = document.getElementById("container");

//     // Inserir o novo <p> abaixo do último elemento <article>
//     container.appendChild(novoP);

// }


function adicionaItem() {
    const novoItem = document.createElement("article")

    //Exercicio 1
    // const olaTurma = document.createTextNode("Oi Krexu")
    // novoItem.appendChild(olaTurma)

    //Exercicio 2
    novoItem.classList.add("item")
    novoItem.setAttribute("onclick", "removeItem(event)")

    const container = document.getElementById("container")
    container.appendChild(novoItem)

}



const removeItem = (event) => {
    const alvo = event.target
    alvo.remove()
}















