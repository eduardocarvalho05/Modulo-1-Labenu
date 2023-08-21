
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
}
// console.log(checarDesigualdade(1, 2));

// b-)Compare a igualdade entre a===b

function checarIgualdade(a, b) {
    return `No comparador de igualdade ${a} === ${b} é ${a === b}`
}
// console.log(checarIgualdade(10, 10))

// c-)Faça uma função chamada "verificaSeEMaior"
function verificaSeEMaior(a, b) {
    return `O parâmetro ${a} é maior que o ${b}: ${a > b}`
}
// console.log(verificaSeEMaior(321, 2156));


// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'= false
// b-) 1=='1'= true
// c-) 'a'==='b'=false 
// d-) 'b'>'a'= true
// e-) 0!==null= true

// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------
// Escreva uma função que receba do usuário **nomeDoUsario**, **anoDeNascimento**, **senhaDoUsuario** e **nacionalidade** e ****guarde essas informações dentro de um array `usuarios`. Porém só poderão se cadastrar:
// - Usuários maiores de 18 anos
// - A senha deve ter no mínimo 6 caracteres
// - E que a nacionalidade seja brasileira.

const cadastro1 = (nomeDoUsuario, anoDeNascimento, senhaDoUsuario, nacionalidade) => {
    const informacoes = {
        nome: nomeDoUsuario,
        nascimento: anoDeNascimento,
        senha: senhaDoUsuario,
        nacionalidade: nacionalidade,
    }
    let idadeAtual = 2023 - informacoes.nascimento
    if (idadeAtual < 18) {
        return `Só podem se cadastrar usuarios acima de 18 anos.`
    } else if (informacoes.senha.length < 6) {
        return `A senha deve contar no mínimo 6 caracteres`
    } else if (informacoes.nacionalidade.toLowerCase() !== `brasileira`
        && informacoes.nacionalidade.toLowerCase() !== `brasileiro`) {
        return `Para se cadastrar a nacionalidade deve ser Brasileiro(a).`
    }
    return informacoes
}
// console.log(cadastro1(`Eduardo`, 2002, `dante93`, `brasileira`));

function cadastro2(nomeDoUsuario, anoDeNascimento, senhaDoUsuario, nacionalidade) {
    let arrayCadastro = []
    if (anoDeNascimento < 18) {
        return `Só podem se cadastrar usuarios acima de 18 anos.`
    } else if (senhaDoUsuario < 6) {
        return `A senha deve contar no mínimo 6 caracteres`
    } else if (nacionalidade !== `brasileira`) {
        return `Para se cadastrar a nacionalidade deve ser Brasileiro(a).`
    }
    arrayCadastro.push(nomeDoUsuario, anoDeNascimento, senhaDoUsuario, nacionalidade)
    return arrayCadastro
}
// console.log(cadastro2(`Eduardo`, 1993, `dante1993`, `brasileira`))

// Exercício 4-----------------------------------------------------------------------------------------------
// Escreva uma função que peça uma senha para o usuário e verifique se está é a mesma senha cadastrada por ele.  Dentro da função defina uma senha válida  Ex: const senha=”labenu”
// - Caso a senha seja válida imprima no console a mensagem (Usuário Logado)
// - Caso a senha seja inválida imprima no console (Senha Inválida)
const login = (senha) => {
    if (senha === `labenu`) {
        return `Usuário logado`
    } else {
        return `Senha inválida`
    }
}

// console.log(login(`labenu`));

// Exercício 5----------------------------------------------------------------------------------------------------
// Escreva uma função que receba do usuário seu nome, e o nome da vacina que tomou. E retorne a mensagens a seguir dependendo da vacina tomada.   
// ```jsx
// `Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`
// ```
// Sabendo que as vacinas tem tempos diferentes  para a aplicação da segunda dose crie uma única variável ‘tempo” que mude seu valor dependendo da vacina informada pelo usuário, faça o mesmo com “data”.
// - Coronavac = 28 dias
// - Astrazenica = 90 dias
// - Pfizer = 90 dias
// ```jsx
// let tempo = ""
// let data = ""
// ```
// ⚠️Atenção: A data pode estar escrita neste formato "01/08/2021" ( o mais simples possível) neste momento do curso.
const primeiraDose = (nome, nomeVacina) => {
    let data = new Date();

    if (nomeVacina === "Coronavac") {
        let tempoCoronavac = 28;
        data.setDate(data.getDate() + tempoCoronavac);
        return `Olá ${nome}! A próxima dose da ${nomeVacina} é daqui a ${tempoCoronavac} dias. Compareça no posto na data ${data.toLocaleDateString()}.`;
    } else if (nomeVacina === "Astrazenica") {
        let tempoAstrazenica = 90;
        data.setDate(data.getDate() + tempoAstrazenica);
        return `Olá ${nome}! A próxima dose da ${nomeVacina} é daqui a ${tempoAstrazenica} dias. Compareça no posto na data ${data.toLocaleDateString()}.`;
    } else {
        let tempoPfizer = 90;
        data.setDate(data.getDate() + tempoPfizer);
        return `Olá ${nome}! A próxima dose da ${nomeVacina} é daqui a ${tempoPfizer} dias. Compareça no posto na data ${data.toLocaleDateString()}.`;
    }
};

// console.log(primeiraDose("Eduardo", "Astrazenica"));

// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------
// Escreva uma função para validar a segunda dose de um usuário, que receba o nomeDoUsuário e mude o valor da propriedade `imunização` para **“completa”** para isso vamos te fornecer uma lista de usuários.


const segundaDose = (nomeDoUsuario) => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "incompleta" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]
    for (i = 0; i < usuarios.length; i++) {
        if (usuarios[i].nome === nomeDoUsuario && usuarios[i].imunizacao === `incompleta`) {
            usuarios[i].imunizacao = `completa`
        }
    }
    return usuarios
}
// console.log(segundaDose("Artur"));

// Exercício 7 --------------------------------------------------------------------------------------
// As pessoas que tomaram a primeira dose da vacina, não voltaram no postinho para a segunda dose e temos que enviar uma mensagem para elas no app.
// Escreva uma função que leia a lista de usuários e verifique se a imunização está completa ou não e caso não esteja completa,  imprima no console uma mensagem avisando que ele deve voltar ao posto para tomar a segunda dose.

const avisoAosAtrasados = (nomeUsuario) => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]
    for (i = 0; i < usuarios.length; i++) {
        if (usuarios[i].nome.toUpperCase() === nomeUsuario.toUpperCase() && usuarios[i].imunizacao === `incompleta`) {
            return usuarios[i].imunizacao = `Olá ${nomeUsuario}! Sua imunização está ${usuarios[i].imunizacao}, por favor volte ao postinho para tomar a segunda dose.`
        } else if (usuarios[i].nome.toUpperCase() === nomeUsuario.toUpperCase() && usuarios[i].imunizacao === `completa`) {
            return usuarios[i].imunizacao = `Olá ${nomeUsuario}! Sua imunização está ${usuarios[i].imunizacao}.`
        }
    }
    return `Usuário não encontrado.`
}
// console.log(avisoAosAtrasados(`Carlos`));


// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]
// No desafio ao invés de cadastrar o usuário enviando para o array, você vai adicionar as informações recebidas pelo prompt ao objeto usuarios.
// Escreva uma função que receba do usuário **nomeDoUsario**, **anoDeNascimento**, **senhaDoUsuario** e **nacionalidade** e ****guarde essas informações dentro de um array `usuarios`. Porém só poderão se cadastrar:
// - Usuários maiores de 18 anos
// - A senha deve ter no mínimo 6 caracteres
// - E que a nacionalidade seja brasileira.


const cadastro = () => {
    const nome = prompt("Digite o nome do usuário:")
    const ano = Number(prompt("Digite o ano de nascimento do usuário:"))
    const nacionalidade = prompt("Digite a nacionalidade do usuário:")
    const senha = prompt("Digite a senha do usuário:")
    const vacina = prompt("Digite a vacina tomada pelo usuário:")
    const imunizacao = prompt("Digite o status de imunização do usuário:")

    let novoUsuario = {
        nome: nome,
        ano: ano,
        nacionalidade: nacionalidade,
        senha: senha,
        vacina: vacina,
        imunizacao: imunizacao
    }
    usuarios.push(novoUsuario)
    return `Usuário ${novoUsuario.nome} cadastrado com sucesso!`
}
// console.log(cadastro(usuarios));
// console.log(usuarios)

///////////////////////////////////////////////////////////////////
// No desafio, o exercício 4 deve ser refatorado para ler a lista de usuarios e comparar o valor que vem do prompt com a propriedade senha. 
// Caso encontre uma senha compatível deve devolver as mesmas mensagens.

const login2 = (array) => {
    const nome = prompt("Digite o nome do usuário:")
    const senha = prompt("Digite a senha do usuário:")

    for (i = 0; i < array.length; i++) {
        if (nome === array[i].nome) {
            console.log(`Bem vindo ${array[i].nome}!`)
            for (j = 0; j < array.length; j++) {
                if (senha === array[i].senha) {
                    return `Usuário logado.`
                } else {
                    return `Senha inválida.`
                }
            }
        }
    }
    return `Usuário não encontrado.`
}
// console.log(login2(usuarios));



///////////////////////////////////////////////////////////////

const primeiraDose1 = (objeto) => {
    let data = new Date();
    let tempoCoronavac = 28;
    let tempoPfizerOuAstrazenica = 90;
    let nome = prompt(`Qual seu nome?`);

    for (let i = 0; i < objeto.length; i++) {
        if (nome.toUpperCase() === objeto[i].nome.toUpperCase()) {
            if (objeto[i].imunizacao === 'incompleta' && (objeto[i].vacina === 'pfizer' || objeto[i].vacina === 'astrazenica')) {
                data.setDate(data.getDate() + tempoPfizerOuAstrazenica);
                return `Olá ${nome}, seu status de vacinação está ${objeto[i].imunizacao}.\nVolte para a segunda dose na data: ${data.toLocaleDateString()}`;
            } else if (objeto[i].imunizacao === 'incompleta' && objeto[i].vacina === 'coronavac') {
                data.setDate(data.getDate() + tempoCoronavac);
                return `Olá ${nome}, seu status de vacinação está ${objeto[i].imunizacao}.\nVolte para a segunda dose na data: ${data.toLocaleDateString()}`;
            } else {
                return `Olá ${nome}, seu status de vacinação está ${objeto[i].imunizacao} :)`;
            }
        }
    }
    return 'Cadastro não encontrado.';
};

// console.log(primeiraDose1(usuarios));

/////////////////////////////////////////////////////////////////

// Neste exercício você deve receber um nome de usuário por parâmetro, verificar se este nome existe na lista usuarios e  caso exista mudar o valor do parâmetro imunização para "completa"

const segundaDose2 = (nomeDoUsuario, objeto) => {

    for (i = 0; i < objeto.length; i++) {
        if (nomeDoUsuario.toUpperCase() === objeto[i].nome.toUpperCase()) {
            let imunizacao = {
                ...objeto[i],
                imunizacao: `completa`
            }
            return imunizacao
        }
    }
    return `Usuário não encontrado`
}
// console.log(segundaDose2("carlos", usuarios));


///////////////////////////////

// As pessoas que tomaram a primeira dose da vacina, não voltaram no postinho para a segunda dose e temos que enviar uma mensagem para elas no app.
// Escreva uma função que leia a lista de usuários e verifique se a imunização está completa ou não e caso não esteja completa,  imprima no console uma mensagem avisando que ele deve voltar ao posto para tomar a segunda dose.

const avisoAosAtrasados2 = (nome, objeto) => {
    for (let i = 0; i < objeto.length; i++) {
        if (objeto[i].nome.toUpperCase() === nome.toUpperCase() && objeto[i].imunizacao === `incompleta`) {
            return `Olá ${nome}! Sua imunização está ${objeto[i].imunizacao}, por favor volte ao postinho para tomar a segunda dose.`
        } else if (objeto[i].nome.toUpperCase() === nome.toUpperCase() && objeto[i].imunizacao === `completa`) {
            return `Olá ${nome}! Sua imunização está ${objeto[i].imunizacao}, tudo certo :)`
        }
    }
    return `Usuário não encontrado.`
}
// console.log(avisoAosAtrasados2(`CARLOS`, usuarios))