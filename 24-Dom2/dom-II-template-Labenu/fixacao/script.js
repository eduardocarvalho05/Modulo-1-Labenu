const insereItem = (event) => {

    const textoInput = document.getElementById("meu-input").value;
    //mostrei onde se encontra o conteudo

    if (textoInput !== "") {

        const novoElemento = document.createElement("li")
        //criei o elemento

        const novoConteudo = document.createTextNode(textoInput)
        //criei o conteudo

        novoElemento.appendChild(novoConteudo)
        //coloquei o conteudo dentro do elemento

        const novaLista = document.getElementById("lista")
        //estou dizendo o local onde eu quero colocar

        novaLista.insertAdjacentElement("beforeend", novoElemento)
        //escolhi a posiçao onde quero colocar e qual elemento eu quero colocar

        document.getElementById("meu-input").value = ""
        //apaga o que estava escrito no input depois de clicar no botao
    }
}






//opcao 2

{/* <button onclick="insereItem(event)">Clique para inserir</button> */ }

// const insereItemNovo = (event) => {
//     const novoItemDois = document.createElement("li");
//     //criei o elemento
//     const textoInputDois = document.getElementById("meu-inputDois").value;
//     //mostrei onde se encontra o conteudo
//     //normalmente esse passo nao tem em exemplos simples
//     const novoConteudoDois = document.createTextNode(textoInputDois);
//     //criei o conteudo
//     novoItemDois.appendChild(novoConteudoDois);
//     //agora ele ta todo dentro da li
//     const listaAtualDois = document.getElementById("listaDois");
//     //local onde quero colocar
//     listaAtualDois.insertAdjacentElement("beforeend", novoItemDois);
//     //posicao / qual elemento
//     document.getElementById("meu-inputDois").value = ""
//     //apago as informacoes do input, zero ele apos o enter
// };



//opcao1

// function insereItem(){
//     let item = document.querySelector('#meu-input');

//     const novoEl = document.createElement("li");

//     if(item.value !== ""){
//         novoEl.innerHTML = item.value;
//         lista.insertAdjacentElement("beforeend", novoEl)
//     }else{
//         alert("input vazio")
//     }
//     item.value =""
// }