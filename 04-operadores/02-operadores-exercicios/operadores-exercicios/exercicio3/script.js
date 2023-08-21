// # Exercício 3
// ### Parte 1
// Escreva as operações lógicas abaixo em formato de código. Imprima no console se o valor da operação é verdadeiro ou falso:

// a) 5 é maior que 20 e também é menor que 2;
let num1 = 5 > 20 && 5 < 2
// console.log(num1)
// b) 5 é igual a 5 ou é igual a “5”;
let num2 = 5 === 5 || 5 === "5"
// console.log(num2)
// c) negação de (vinte é maior que cinquenta)
let num3 = !(20 > 50)
// console.log(num3)
// d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)
let num4 = !(20 > 50 || 50 > 60)
// console.log(num4)

// ### Parte 2

// Na aula passada começamos a implementar um sistema para o RH de uma empresa.
// Vamos continuar? Suponhamos que o exercício da aula passada tenha como resultado o relatório abaixo:

// **O funcionário Fulano de Silva, com CPF: 000.000.000-00, nasceu em 10/02/1990, reside em: Rua dos bobos nº 0 e possui 2 filhos. Possui habilitação? Sim. Ocupa o cargo de vendedor, recebe um salário de 2.000,00 reais, mais comissão de 10% sobre o total de vendas no mês e entrou na empresa em 2019.**
// Levando em consideração os dados abaixo, calcule o salário de Fulano da Silva (itens 1 a 5):
// a) Auxílio creche por filho:  R$45,50
// b) Comissão de 10% sobre o total de vendas mensal
// c) Total de vendas dos meses de janeiro a junho:
//     - Janeiro: R$ 5.784,50
//     - Fevereiro: R$ 3.418,41
//     - Março: R$ 4.124,10
//     - Abril: R$ 1.874,00
//     - Maio: R$ 7.000,00
//     - Junho: R$ 9.450,00
// d)  Desconto do INSS 5% do salário

// Calcule:
// 1) O salário fixo mais o auxílio creche
let salarioFixo = 2000
let auxilioCreche = 45.50 + 45.50
let salarioFixoCreche = salarioFixo + auxilioCreche
console.log(salarioFixoCreche)

// 2) Quanto Fulano de Silva receberá de comissão em cada mês
let comissaoJaneiro = 5784.50 * 0.1
// console.log(comissaoJaneiro)
let comissaoFevereiro = 3418.41 * 0.1
// console.log(comissaoFevereiro)
let comissaoMarco = 4124.10 * 0.1
// console.log(comissaoMarco)
let comissaoAbril = 1874.00 * 0.1
// console.log(comissaoAbril)
let comissaoMaio = 7000.00 * 0.1
// console.log(comissaoMaio)
let comissaoJunho = 9450.00 * 0.1
// console.log(comissaoJunho)

// 3) Quanto Fulano de Silva será descontado em cada mês pelo INSS
let salarioTotalJaneiro = salarioFixo + comissaoJaneiro
let inssJaneiro = salarioTotalJaneiro * 0.05
let liquidoJaneiro = salarioTotalJaneiro - inssJaneiro
// console.log(liquidoJaneiro)

let salarioTotalFevereiro = salarioFixo + comissaoFevereiro
let inssFevereiro = salarioTotalFevereiro * 0.05
let liquidoFevereiro = salarioTotalFevereiro - inssFevereiro
// console.log(liquidoFevereiro)

let salarioTotalMarco = salarioFixo + comissaoMarco
let inssMarco = salarioTotalMarco * 0.05
let liquidoMarco = salarioTotalMarco - inssMarco
// console.log(liquidoMarco)

let salarioTotalAbril = salarioFixo + comissaoAbril
let inssAbril = salarioTotalAbril * 0.05
let liquidoAbril = salarioTotalAbril - inssAbril
// console.log(liquidoAbril)

let salarioTotalMaio = salarioFixo + comissaoMaio
let inssMaio = salarioTotalMaio * 0.05
let liquidoMaio = salarioTotalMaio - inssMaio
// console.log(liquidoMaio)

let salarioTotalJunho = salarioFixo + comissaoJunho
let inssJunho = salarioTotalJunho * 0.05
let liquidoJunho = salarioTotalJunho - inssJunho
// console.log(liquidoJunho)
// 4) Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos.
let totalJaneiro = liquidoJaneiro + auxilioCreche
console.log(totalJaneiro)
let totalFevereiro = liquidoFevereiro + auxilioCreche
console.log(totalFevereiro)
let totalMarco = liquidoMarco + auxilioCreche
console.log(totalMarco)
let totalAbril = liquidoAbril + auxilioCreche
console.log(totalAbril)
let totalMaio = liquidoMaio + auxilioCreche
console.log(totalMaio)
let totalJunho = liquidoJunho + auxilioCreche
console.log(totalJunho)
// 5) A média do salário em  seis meses (de janeiro a junho), levando em consideração as comissões e auxílio.
//   (Dica: a média aritmética é calculada somando um grupo de números e dividindo pela quantidade de elementos somados. Por exemplo, a soma de 2, 3, 3, 5, 7 e 10 é 30 dividido por 6, dará média 5.)
let somaTotal = totalJaneiro + totalFevereiro + totalMarco + totalAbril + totalMaio + totalJunho
// console.log("Soma de todos os salários", somaTotal)
let mediaTotal = somaTotal / 6
console.log("Medía de todos os salários", mediaTotal)

