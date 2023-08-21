const nacionalidade = prompt('Qual a sua nacionalidade?').toLowerCase();
function paisOrigem(nacionalidade) {

    if (nacionalidade === 'brasileira' || nacionalidade === 'brasileiro') {
        return 'Você é Brasileiro(a)'
    } else if (nacionalidade === 'argentina' || nacionalidade === 'argentino') {
        return 'Você é Argentino(a)'
    } else if (nacionalidade === 'uruguaia' || nacionalidade === 'uruguaio') {
        return 'Você é Uruguaio(a)'
    } else if (nacionalidade === 'chilena' || nacionalidade === 'chileno') {
        return 'Você é Chileno(a)'
    } else if (nacionalidade === 'colombiana' || nacionalidade === 'colombiano') {
        return 'Você é Colombiana(a)'
    } else {
        return 'Nacionalidade não encontrada.'
    }
}

// console.log(paisOrigem(nacionalidade))
// console.log(paisOrigem(`brasileira`))