const frutas = ["laranja", "limão", "uva"]

const listaDeFrutas = document.getElementById("lista-de-frutas")
const itensLi = document.getElementsByTagName("li")

for (let i = 0; i <= frutas.length; i++) {
    itensLi[i].textContent = frutas[i]
}

//////////////////////////////////////////////////////////

const imprimeFruta = document.getElementById("fruta-input")

const imprimirNoConsole = () => {

    console.log(imprimeFruta.value)
}

///////////////////////////////////////////////////////

function inserirFruta() {
    const novaFruta = document.getElementById("fruta-4")
    novaFruta.innerHTML += imprimeFruta.value
}
