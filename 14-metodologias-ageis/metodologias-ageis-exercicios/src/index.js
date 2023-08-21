// EXERCÍCIO 01
export function anoBissexto(ano) {
    if (ano < 0) {
        return "INVALID";
    } else if (ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0)) {
        return "TRUE";
    } else {
        return "FALSE";
    }
}


// EXERCÍCIO 02
export function pedraPapelTesoura() {
    const opcoes = ["PEDRA", "PAPEL", "TESOURA"];
    const indiceAleatorio = Math.floor(Math.random() * 3);
    return opcoes[indiceAleatorio];
}

// EXERCÍCIO 03
export function checkNumeroPrimo(num) {
    if (num <= 1) {
        return "INVALID";
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return "FALSE";
        }
    }
    return "TRUE";
}


