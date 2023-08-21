// 1) Este programa deve perguntar à pessoa colaboradora:
//    a) Nome completo
let nome = prompt(`Qual seu nome completo?`)
//    b) Data de nascimento (utilize as / ) 
let dataDeNascimento = Number(prompt(`Qual sua data de nascimento?`))
// let stringNascimento = String(dataDeNascimento)
//    c) Endereço
let endereco = prompt(`Qual seu endereco?`)
//    d) CPF
let cpf = Number(prompt(`Qual seu CPF?`))
//    e) Escolaridade
let escolaridade = prompt(`Qual sua escolaridade?`)
//    f) Possui CHN?
let cnh = prompt(`Possui CNH?`)
//    g) Quantos filhos possui?
let quantidadeFilhos = Number(prompt(`Quantos filhos possui?`))
//    h) Cargo atual
let cargoAtual = prompt(`Cargo atual no trabalho?`)
//    i) Salário
let salario = Number(prompt(`Salário atual?`))
//    j) Recebe comissão? Se sim, aperte em confirme, caso não, clique em cancel
let comissao = confirm(`Recebe comissão? Se sim, aperte em confirme, caso não, clique em cancel`)
//    k) Informe o ano de admissão
let anoAdmissao = Number(prompt(`Informe ano de admissão no trabalho`))
// 2) Utilize o **casting** para a conversão de tipos das variáveis que recebem números.

// 3) Imprima no console o tipo de todas as variáveis.
console.log(typeof nome)
console.log(typeof dataDeNascimento)
console.log(typeof endereco)
console.log(typeof cpf)
console.log(typeof escolaridade)
console.log(typeof cnh)
console.log(typeof quantidadeFilhos)
console.log(typeof cargoAtual)
console.log(typeof salario)
console.log(typeof comissao)
console.log(typeof anoAdmissao)
// 4) Imprima no console um relatório da pessoa colaboradora.
console.log(nome)
console.log(dataDeNascimento)
console.log(endereco)
console.log(cpf)
console.log(escolaridade)
console.log(cnh)
console.log(quantidadeFilhos)
console.log(cargoAtual)
console.log(salario)
console.log(comissao)
console.log(anoAdmissao)