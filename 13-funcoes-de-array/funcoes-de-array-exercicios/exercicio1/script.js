// # Exercício 1
// Crie duas funcões que recebem como parâmetro um objeto.
// 1. A primeira deve retornar o objeto, alterando as propriedades dele para que os **valores** deste objeto fiquem em CAIXA ALTA.
//     Saída esperada:
//     `{ nome: 'ASTRODEV', profissao: 'DEV DAS ESTRELAS', username: 'ASTRODEV_LABENU', senha: 'MELHORDETODOS'}`
// 2. A segunda deve retornar os valores do objeto como texto corrido.
//     Saída esperada:
//     `O valor da propriedade ${propriedade} é ${valor}.`
// 3. Agora, crie uma funcão que recebe um objeto e uma callback como parâmetros. A funcão principal deve passar o objeto como argumento da funcão de callback, e em seguida imprimir o valor retornado.
//     Chame a funcão 3, passando como argumentos o **objeto disponibilizado** no arquivo `script.js`, e a função 1.
//     Repita o processo para a funcão 2.

///////////////////////////////////////////////////////

const infosPessoa = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

function transformarCaixaAlta(objeto) {
    let letraMaiuscula = {}
    for (let i in objeto) {
        letraMaiuscula[i] = objeto[i].toUpperCase();
    }
    return letraMaiuscula
}
// console.log(transformarCaixaAlta(infosPessoa))


////////////////////////////////////////////

function retornarValoresComoTexto(objeto) {
    let texto = "";
    for (let i in objeto) {
        let valor = objeto[i];
        texto += `O valor da propriedade ${i} é ${valor}. `;
    }
    return texto;
}
// console.log(retornarValoresComoTexto(infosPessoa))


///////////////////////////////////////

function principal(objeto, callback1) {
    const resultado = callback1(objeto)
    return resultado
}
console.log(principal(infosPessoa, transformarCaixaAlta))
console.log(principal(infosPessoa, retornarValoresComoTexto))

///////////////////////////////////////////////


