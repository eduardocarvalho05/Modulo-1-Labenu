// document.getElementById("password").setAttribute("type", "password")


function clicar(event) {
    event.preventDefault();

    const meuInput = document.getElementById("password")

    meuInput.setAttribute("type", "password")

    const form = document.querySelector(".light")
    form.classList.remove(".light")
    form.classList.add("dark")
}

function alterarModoEstilo(event) {
    event.preventDefault();

    const form = document.querySelector(".light")
    // form.classList.remove(".light")
    // form.classList.add("dark")

    form.classList.toggle("dark")
}
