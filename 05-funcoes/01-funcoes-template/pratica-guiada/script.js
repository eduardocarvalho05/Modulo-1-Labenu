// Acompanhe a Prática Guiada e repita o exercício no Momento de Réplica!

function olaMundo(nome, idade) {
    return `Olá meu nome é ${nome} e tenho ${idade} anos.`
}
olaMundo(`Diana`, `4`)
olaMundo(`Apollo`, `3`)
olaMundo(`Eros`, `2`)

////////////////////////////////////

const mensagemDeOla = function (nome, idade) {
    return `Olá meu nome é ${nome} e tenho ${idade} anos de idade.`
}
console.log(mensagemDeOla(`Eduardo`, `29`))
console.log(mensagemDeOla(`Gabriela`, `28`))

/////////////////////////////////////////////

//Crie uma função que receba como um número como parâmetro e:
//Verifique se ele é par:

function verificacaoPar(num) {
    let verifica = num % 2 === 0
    let soma = num + 10
    let multiplicado = soma * soma
    return `O número ${num} é par: ${verifica}. Somando ${num} com 10, o resultado é ${soma} e multiplicado por ele mesmo o resultado é ${multiplicado}`
}
console.log(verificacaoPar(12))// é par

const verificaPar = function (num) {
    let verifica = num % 2
    let soma = num + 10
    let multiplica = soma * soma
    return `O número ${num} é par: ${verifica}. Somando ${num} com 10, o resultado é ${soma} e multiplicado por ele mesmo o resultado é ${multiplica}`
}
verificaPar(10)// é par

///////////////////////////////////////////////////////

function cadastro(login, senha) {
    let loginArmazenado = `EduardoCarvalho`
    let senhaArmazenada = `123456`
    return loginArmazenado === login && senhaArmazenada === senha
}
console.log(cadastro(`EduardoCarvalho`, `123456`))

const cadastroLogin = (login, senha) => {
    let loginArmazenado = `EduardoCarvalho`
    let senhaArmazenada = `123456`
    return loginArmazenado === login && senhaArmazenada === senha
};
console.log(cadastroLogin('usuario', '123456'))


