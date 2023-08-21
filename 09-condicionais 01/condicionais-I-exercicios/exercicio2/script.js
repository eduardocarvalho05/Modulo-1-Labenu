function escolaridade(idade, ensinoMedio, faculdade) {
    if (idade >= 18) {
        if (ensinoMedio === true) {
            if (faculdade === false) {
                return `A pessoa é maior de idade e terminou o ensino medio.`
            } else {
                return `A pessoa é maior de idade, terminou o ensino medio, e está iniciando na faculdade!`
            }
        }
        return `A pessoa é maior de idade.`
    } else {
        return `A pessoa é menor de idade.`
    }
}
console.log(escolaridade(20, true, true))