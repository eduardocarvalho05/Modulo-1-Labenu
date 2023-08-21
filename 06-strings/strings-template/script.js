function digiteNomeEcor1(nome, cor, novaCor) {
    let mensagem = `A cor favorita de ${nome.toUpperCase()} é ${cor}.\nE o comprimento do nome ${nome} é: ${nome.length} letras.\nO nome ${nome} possui a letra a? ${nome.includes(`a`)}`
    let mensagemAtualizada = mensagem.replaceAll(cor, novaCor)
    return mensagemAtualizada
}
// console.log(digiteNomeEcor1('Eduardo', 'Azul', 'Verde'))

///////////////////////////////

let pessoa = `Eduardo`//prompt(`Qual é seu nome?`)
let cor = `Azul`//prompt(`Qual é sua cor favorita?`)
let citacao = `Sem panico`//prompt(`Qual sua citação favorita?`)
let fraseTemplateString = `Nome da pessoa: ${pessoa.toUpperCase()}.\nCor favorita ${cor}.\nCitação é "${citacao}"!`

// console.log(fraseTemplateString)
// console.log(`O nome da pessao tem ${pessoa.length} de comprimento.`)
// console.log(`O nome da pessoa possui a letra A? ${pessoa.includes("a")}`)

////////////////////////////////////////////////

function nomeEmail(nome, email) {
    let texto = `O email ${email} foi cadastrado com sucesso.\nBoas vindas, ${nome}!\nO nome ${nome} tem ${nome.length} letras.\nO email ${email} possui @? ${email.includes("@")}`
    let textoAlterado = texto.replaceAll("r", "x")
    return textoAlterado
}
// let nome = prompt(`digite seu nome aqui:`)
// let email = prompt(`digite seu email aqui:`)
// alert(nomeEmail(nome, email))
// console.log(nomeEmail(nome, email))

let nome = `Eduardo`//prompt(`Qual é seu nome?`)
let email = `e.alves.rj@outlook.com`//prompt(`Qual o seu email?`)
// console.log(`O email ${email} foi cadastrado com sucesso. Boas vindas, ${nome}`)
console.log(`O nome ${nome} tem ${nome.length} letras`)
let texto = `O email ${email} foi cadastrado com sucesso.\nBoas vindas, ${nome}`
let textoAlterado = texto.replaceAll("r", "x").replaceAll("R", "X")
console.log(textoAlterado)
console.log(`O email ${email} possui @? ${email.includes("@")}`)





