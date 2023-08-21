
const verificarTecla = (event) => {

    if (event.shiftKey) {
        document.getElementById("mensagem").innerHTML = "Atenção: Segurando o SHIFT"
    } else {
        document.getElementById("mensagem").innerHTML = ""
    }

}