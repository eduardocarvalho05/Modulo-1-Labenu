//EXERCICIO 1
// Crie uma variável para guardar o nome de um produto e
// peça para o usuário inserir esse nome
// ● Crie uma variável para guardar o preço de um produto e
// peça para o usuário inserir esse valor
// ● O GERENTE FICOU DOIDO! Dê um desconto de 1 real no
// preço do produto, guardando o novo preço na mesma
// variável
function produtos1() {
    let nomeProduto = prompt(`Qual o nome do produto?`)
    let preco = Number(prompt(`Qual o preço do produto?`))
    let desconto = preco - 1.00
    return `Produto: ${nomeProduto} ganhou um desconto e ficou com o preço de: ${desconto} Reais.`
}
// console.log(produtos1())


/////////////////////////////////////////////////

//EXERCICIO 2
// Peça para o usuário inserir dois números e guarde-os em
// variáveis diferentes (num1 e num2)
// ● Imprima no console:
// ○ A soma do primeiro com o segundo
// ○ A subtração do primeiro pelo segundo
// ○ A multiplicação do primeiro pelo segundo
// ○ A divisão do primeiro pelo segundo
// ○ O resto da divisão do primeiro pelo segundo
function calculos(num1, num2) {
    let soma = num1 + num2
    let subtracao = num1 - num2
    let multiplicacao = num1 * num2
    let divisao = num1 / num2
    let restoDivisao = num1 % num2
    return `A soma de ${num1} + ${num2} é: ${soma}.\nA subtração de ${num1} - ${num2} é: ${subtracao}.\nA multiplicação de ${num1} * ${num2} é: ${multiplicacao}.\nA divisão de ${num1} / ${num2} é: ${divisao}.\nO resto da divisão de ${num1} % ${num2} é: ${restoDivisao}.`
}
// console.log(calculos(40, 20))


////////////////////////////////////////////////////////

//EXERCICIO 3
// Sorteie um número aleatório entre 1 e 10
// ● Peça para o usuário inserir um número de 1 a 10
// ● Imprima no console os dois números dizendo se o que foi
// digitado pelo usuário é menor, maior ou igual ao
// sorteado
function numAleatorio() {
    let num = Number(prompt(`Digite um numero de 1 a 10:`))
    if (num > 10) {
        alert`Erro digite um número somente de 1 a 10!`
    }
    let sorteioComputador = Number(Math.floor(Math.random() * 10) + 1)
    if (num === sorteioComputador) {
        return `O número sorteado foi ${sorteioComputador}.\nParabéns você ganhou!`
    } else {
        return `O número sorteado foi ${sorteioComputador}.\nPoxa não foi dessa vez.`
    }
}
// console.log(numAleatorio())


/////////////////////////////////////////////////////

//EXERCICIO 4
// Um parque de diversões te contratou para fazer um sistema que
// permite ou proíbe a entrada de pessoas em um brinquedo
// MUITO RADICAL
// Para entrar, é necessário:
// ● Ter mais de 18 anos
// ● Ter mais de 1,60m de altura
// ● Não ter nenhum problema cardíaco
// Faça essas perguntas ao usuário e diga o resultado no console
function parque(nome, idade, altura, coracao) {

    if (idade > 18 && altura > 1.60 && coracao.toLowerCase() === 'não') {
        return `Olá ${nome}! Tudo certo para você aproveitar o parque de diversões!\nIdade: ${idade}, Altura: ${altura}, Problema cardíaco: ${coracao}.`;
    }
    return `Desculpe, ${nome}, você não cumpre os requisitos para aproveitar nosso parque com segurança.`;
}
// console.log(parque(`Eduardo`, 30, 1.80, `NÃO`));


////////////////////////////////////////////////////
//EXERCICIO 5
// Dada a frase " Hoje vou comer cenoura, ebaaa " realize as
// operações:
// ● Imprima a frase inicial juntamente com seu tamanho
// ● Retire os espaços do início e do fim
// ● Faça com que possua apenas letras minúsculas
// ● Verifique se as palavras comer e batata estão presentes
// ● Substitua cenoura por batata
// ● Verifique novamente se possui as palavras comer e batata
let frase = `     Hoje vou comer cenoura, ebaaa   `
// console.log(frase.length)
// console.log(frase.trim())
// console.log(frase.toUpperCase())
// console.log(frase.replace(`cenoura`, `batata`))
// console.log(frase.includes(`comer`))
// console.log(frase.includes(`batata`))

///////////////////////////////////////////////////////////////////

//EXERCICIO 6
// Dada a lista ["batata", "cenoura", "beterraba"] realize as
// operações:
// ● Imprima o segundo item da lista
// ● Imprima o tamanho da lista
// ● Adicione o item "mandioca"
// ● Verifique se há um item chamado cenoura
// ● Remova o item de índice 1
let lista = ["batata", "cenoura", "beterraba"]
// console.log(lista[1])
// console.log(lista.length)
// console.log(lista.push(`madioca`))
// console.log(lista)
// console.log(lista.includes(`cenoura`))
// console.log(lista.splice(0, 1))
// console.log(lista)

/////////////////////////////////////////////////////////////////////////

//EXERCICIO 7
// Crie uma função que:
// ○ Receba um array de números e
// ○ Retorne um novo array com o último e o primeiro
// número do array recebido divididos por dois

function arrayDividido(arrayDeNumeros) {
    let primeiro = arrayDeNumeros[0] / 2
    let ultimo = arrayDeNumeros[array.length - 1] / 2
    arrayDeNumeros[0] = primeiro
    arrayDeNumeros[array.length - 1] = ultimo
    return arrayDeNumeros
}
let array = [6, 7, 8, 9, 10]
// console.log(arrayDividido(array))

//////////////////////////////////////////////////////

//Exercício 8
// Crie um objeto que represente uma pessoa. Essa pessoa
// precisa ter nome, idade e gênero musical preferido
// ● Imprima no console as propriedades desse objeto,
// seguindo o modelo abaixo:
// "O nome da pessoa é ___, ela tem ___ anos e gosta muito de
// ___."
// ● Crie uma nova pessoa, com mesma idade e gênero
// musical, mas nome diferente

let pessoa = {
    nome: `Eduardo`,
    idade: 30,
    generoMusical: `Rock`,
}
// console.log(`O nome da pessoa é ${pessoa.nome}, ela tem ${pessoa.idade} anos e gosta muito de ${pessoa.generoMusical}.`)

let outraPessoa = {
    ...pessoa,
    nome: `Gabriela`,
    generoMusical: `Pop`
}
// console.log(`O nome da pessoa é ${outraPessoa.nome}, ela tem ${outraPessoa.idade} anos e gosta muito de ${outraPessoa.generoMusical}.`)

////////////////////////////////////////////////////////////////////////////

//Exercicio 9
// Receba um número do usuário
// ○ Se for par, imprima: é par
// ○ Senão, imprima: é impar

const arrow = (num) => {
    if (num % 2 === 0) {
        return `O número é ${num} é Par.`
    } else {
        return `O número é ${num} é Impar.`
    }
}
// console.log(arrow(11))

///////////////////////////////////////////

// Exercício 10
// Receba do usuário o nome de um bichinho:
// ○ Se for um cachorro, retorne: Au au
// ○ Se for um gato, retorne: Miau
// ○ Se for uma vaca, retorne: Muuu
// ○ Se for outro bichinho, retorne: sem barulho
// reconhecido :(
function dogsOuCats(bichinho) {
    switch (bichinho) {
        case `Cachorro`:
            return `Au au`
        case `Gato`:
            return `Miauu`
        case `Vaca`, `vaca`:
            return `Muuuuu`
        default:
            return `Sem barulho reconhecido`
    }
}
// console.log(dogsOuCats(`Gato`))

//////////////////////////////////////////////

//Exercício 11
// Receba um array com números e devolva qual o maior
// dentro dele
// ● Ex: Para o array [11, 15, 18, 14, 12, 13], a saída deve ser: "O
// maior número é 18"
// ● Faça utilizando as três estruturas de loop vistas

function maiorNum(array) {
    let maior = array[0]
    for (let numero of array) {
        if (numero > array) {
            maior = array
        }
    }
    return maior
}
let novoArray = [1993, 20, 5, 1993, 1, 9]
// console.log(maiorNum(novoArray))

function maiorTradicional(array) {
    let maior = array[0]
    for (i = 0; i < array.length; i++) {
        if (i > array) {
            maior = array[i]
        }
    }
    return maior
}
// console.log(maiorTradicional(novoArray))

//////////////////////////////////////////////////////////

//Exercicio 12
// Dado o objeto do slide anterior, imprima:
// Oi! Eu me chamo Letícia Chijo e tenho 27 anos.
// Dou/não dou aula de front e dou/não dou aula de back.
// Meus jogos favoritos são:
// 1) Chrono Trigger
// 2) Undertale
// 3) Hollow Knight
// Tenho uma cachorrinha chamada Polly que gosta de comer maçã
// ● Faça a Chijo contar uma piada ruim

const prof = {
    nome: "Letícia Chijo",
    idade: 27,
    aulasFront: true,
    aulasBack: false,
    jogosFavoritos: ["Chrono Trigger", "Undertale", "Hollow Knight"],
    contaPiada: () => console.log("É pave ou pacume?"),
    pet: {
        nome: "Polly",
        especie: "cachorrinha",
        raca: "Lhasa Apso",
        snacksFavoritos: ["biscoito", "maçã", "frango"]
    }
}


function aulas(aulas) {
    if (aulas === true) {
        return `Dou aula`
    } else {
        return `Não dou`
    }
}
function jogos(jogosFavo) {
    let jogos = ``
    for (i = 0; i < jogosFavo.length; i++) {
        jogos += `1)${jogosFavo[0]},\n2)${jogosFavo[1]},\n3)${jogosFavo[2]}.`
        break
    }
    return jogos
}
// console.log(jogos(prof.jogosFavoritos))
// console.log(`Oi me chamo ${prof.nome} e tenho ${prof.idade} anos.\n${aulas(true)} de front e ${aulas(false)} aula de back.\nMeus jogos favoritos são:\n${jogos(prof.jogosFavoritos)}\nTenho uma ${prof.pet.especie} chamada ${prof.pet.nome} que gosta de comer ${prof.pet.snacksFavoritos[1]}.`)
// prof.contaPiada()

///////////////////////////////////////////////////////////

//Exercicio 13
// Dado um array de produtos onde cada produto possui nome,
// categoria e preço:
// ● Retorne um novo array com todos os produtos porém
// com o 10% de desconto no preço
// ● Retorne um array apenas com os itens da categoria
// hortifruti
// ● Retorne um array apenas com os itens de hortifruti E com
// 10% de desconto no preço
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó", categoria: "Limpeza", preco: 10.80 }
]

const produtosDesconto = produtos.map(produto => {
    const desconto = produto.preco * 0.1;
    return {
        ...produto,
        preco: (produto.preco - desconto).toFixed(2)
    };
});
// console.log(produtosDesconto);


const produtosHortifruti = produtos.filter(produto => {
    return produto.categoria === `Hortifruti`
}).map(produto => {
    const desconto = produto.preco * 0.1;
    return {
        ...produto,
        preco: (produto.preco - desconto).toFixed(2)
    };
});
// console.log(produtosHortifruti)


