// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    let tamanhoArray = [];

    for (let i = 1; i <= array.length; i++) {
        tamanhoArray.push(i);
        if (array.length === 0) {
            return 0;
        }
    }
    return tamanhoArray.length;
}

let newArray1 = [10, 20]
// console.log(retornaTamanhoArray(newArray1))

///////////////////////////////////////////////////////////////////

// EXERCÍCIO 02
function retornaArrayInvertido(array) {

    return array.reverse()

}
let newArray2 = [10, 20, 30, 40, 50, 60]
// console.log(retornaArrayInvertido(newArray2))

//////////////////////////////////////////////////////////////////

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a, b) => a - b);
}
let newArray3 = [11, 27, 3, 4, 500, 60]
// console.log(retornaArrayOrdenado(newArray3))

/////////////////////////////////////////////////////////

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let numerosPares = []
    for (i = 0; i < array.length; i++) {
        // console.log(array[i])
        if (array[i] % 2 === 0) {
            numerosPares.push(array[i])
        }
    }
    return numerosPares
}
let newArray4 = [11, 27, 3, 4, 500, 60]
// console.log(retornaNumerosPares(newArray4))

///////////////////////////////////////////////////////////

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let numerosElevados = []
    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            numerosElevados.push(array[i] * array[i])
        }
    }
    return numerosElevados
}
let newArray5 = [1, 2, 3, 4, 5, 6]
// console.log(retornaNumerosParesElevadosADois(newArray5))


//////////////////////////////////////////////////

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = [0]
    for (i = 0; i < array.length; i++) {
        if (array[i] > maiorNumero) {
            maiorNumero = array[i]
        }
    }
    return maiorNumero
}
let newArray6 = [1, 5, 3, 7, 5, 2]
// console.log(retornaMaiorNumero(newArray6))

/////////////////////////////////////////////////////////////

// EXERCÍCIO 07

function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero;
    let menorNumero;

    if (num1 > num2) {
        maiorNumero = num1;
        menorNumero = num2;
    } else {
        maiorNumero = num2;
        menorNumero = num1;
    }

    const maiorDivisivelPorMenor = maiorNumero % menorNumero === 0;
    const diferenca = Math.abs(num1 - num2);

    const objeto = {
        maiorNumero,
        maiorDivisivelPorMenor,
        diferenca
    };

    return objeto;
}
const resultado = retornaObjetoEntreDoisNumeros(15, 30);
// console.log(resultado);

////////////////////////////////////////////////////////////

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    const numerosPares = [];
    for (let i = 0; numerosPares.length < n; i++) {
        if (i % 2 === 0) {
            numerosPares.push(i);
        }
    }
    return numerosPares;
}
// console.log(retornarNumerosPares(10))


////////////////////////////////////////////////////////////////

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoA === ladoC && ladoB === ladoC) {
        return "Equilátero"
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        return "Isósceles"
    } else {
        return "Escaleno"
    }
}
// console.log(classificaTriangulo(10, 2, 2))

//////////////////////////////////////////////////////////////////

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    const maiorEmenor = array.sort((a, b) => a - b)
    const segundoMenor = maiorEmenor[1]
    const segundoMaior = maiorEmenor[maiorEmenor.length - 2]
    let novoArray = [segundoMaior, segundoMenor]
    return novoArray

}
let newArray7 = [30, 20, 50, 70, 30, 100]
// console.log(retornaSegundoMaiorESegundoMenor(newArray7))


/////////////////////////////////////////////////////////////////////

// EXERCÍCIO 11
let filme = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
}

function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}
// console.log(retornaChamadaDeFilme(filme))
// saída
// "Venha assistir ao filme O Diabo Veste Prada, de 2006, dirigido por David Frankel e estrelado por Meryl Streep, Anne Hathaway, Emily Blunt, Stanley Tucci."


//////////////////////////////////////////////////////////////////////

let nome = {
    nome: "Astrodev",
    idade: 25,
    email: "astrodev@labenu.com.br",
    endereco: "Rua do Futuro, 4"
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    return {
        ...pessoa,
        nome: "ANÔNIMO"
    }
}
// console.log(retornaPessoaAnonimizada(nome))

////////////////////////////////////////////////////////////////////////////

// Imagine que você trabalhe num parque de diversões, como pessoa desenvolvedora. As suas tarefas são sempre com o intuito de ajudar a automação de alguns processos internos do parque. Uma das atrações principais dele é a montanha russa do terror. As filas são muito grandes e todas as pessoas de várias idades insistem entrar no brinquedo, mesmo sabendo que não podem. As regras para entrar na montanha russa do terror são: 
// - Ter, no mínimo, 1.5m de altura;
// - Ser mais velho do que 14 anos e
// - Ser mais novo do que 60 anos.
// EXERCÍCIO 13A

let parqueDiversao = [
    { nome: "Paula", idade: 12, altura: 1.8 },
    { nome: "João", idade: 20, altura: 1.3 },
    { nome: "Pedro", idade: 15, altura: 1.9 },
    { nome: "Luciano", idade: 22, altura: 1.8 },
    { nome: "Artur", idade: 10, altura: 1.2 },
    { nome: "Soter", idade: 70, altura: 1.9 }
]

function retornaPessoasAutorizadas(pessoas) {
    let newArray = []
    for (let i = 0; i < pessoas.length; i++) {
        if (pessoas[i].altura > 1.5 && pessoas[i].idade > 14 && pessoas[i].idade < 60) {
            newArray.push(pessoas[i])
        }
    }
    return newArray
}
// console.log(retornaPessoasAutorizadas(parqueDiversao))

/////////////////////////////////////////////////////

// B) uma função que receba um array e devolva outro contendo as pessoas que não tem permissão para entrar no brinquedo

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let newArray = []
    for (let i = 0; i < pessoas.length; i++) {
        if (pessoas[i].altura < 1.5 || pessoas[i].idade < 15 || pessoas[i].idade > 60) {
            newArray.push(pessoas[i])
        }
    }
    return newArray
}
// console.log(retornaPessoasNaoAutorizadas(parqueDiversao))

////////////////////////////////////////////////////////////////

let arrayCompras = [
    { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

// EXERCÍCIO 14
const contas = [
    { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, compras: [] }
];

function retornaContasComSaldoAtualizado(contas) {
    for (let i = 0; i < contas.length; i++) {
        const conta = contas[i];
        let comprasTotal = 0;

        for (let j = 0; j < conta.compras.length; j++) {
            comprasTotal += conta.compras[j];
        }
        conta.saldoTotal -= comprasTotal;
        conta.compras = [];
    }
    return contas;
}

// console.log(retornaContasComSaldoAtualizado(contas));


///////////////////////////////////////////////////////////
let consulta = [
    { nome: "João", dataDaConsulta: "01/10/2021" },
    { nome: "Pedro", dataDaConsulta: "02/07/2021" },
    { nome: "Paula", dataDaConsulta: "03/11/2021" },
    { nome: "Márcia", dataDaConsulta: "04/05/2021" }
]

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    return consultas.sort((a, b) => {
        if (a.nome < b.nome) {
            return -1;
        }
        if (a.nome > b.nome) {
            return 1;
        }
    });
}
// console.log(retornaArrayOrdenadoAlfabeticamente(consulta));

//////////////////////////////////////////////////////////////////////

// A sua segunda tarefa é criar uma função que receba o **array** acima como parâmetro e retorne um **array de consultas ordenado pelas datas das consultas(da menor para a maior)**

// Exemplo de saída:
// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    return consultas.sort((a, b) => {
        const dataA = new Date(
            parseInt(a.dataDaConsulta.substring(6, 10)),
            parseInt(a.dataDaConsulta.substring(3, 5)) - 1,
            parseInt(a.dataDaConsulta.substring(0, 2))
        );
        const dataB = new Date(
            parseInt(b.dataDaConsulta.substring(6, 10)),
            parseInt(b.dataDaConsulta.substring(3, 5)) - 1,
            parseInt(b.dataDaConsulta.substring(0, 2))
        );

        if (dataA < dataB) {
            return -1;
        }
        if (dataA > dataB) {
            return 1;
        }
        return 0;
    });
}

const consultasOrdenadas = retornaArrayOrdenadoPorData(consultas);
console.log(consultasOrdenadas);




