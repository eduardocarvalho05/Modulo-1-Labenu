
let clickInicial = 0



//Aparece no console

// function contarCliques() {
//     // console.log("cliquei")
//     clickInicial += 1
//     console.log(clickInicial)
// }

let clickInicialTela = 0

function contarCliques() {
    clickInicialTela += 1
    const contadorElemento = document.getElementById("contador")
    contadorElemento.innerHTML = clickInicialTela
}



