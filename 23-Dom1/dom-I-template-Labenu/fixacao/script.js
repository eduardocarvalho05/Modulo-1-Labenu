const valorP = document.getElementById("paragrafo")

valorP.innerHTML += " Eduardo"

function digitarInput() {

    const valorDoInput = document.getElementById("texto")

    console.log(valorDoInput.value)
}

function substituirValorP() {

    const valorDoInput = document.getElementById("texto")

    valorP.innerHTML = valorDoInput.value
}