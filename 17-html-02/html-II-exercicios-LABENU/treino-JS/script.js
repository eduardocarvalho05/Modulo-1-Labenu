// Enunciado
// As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia e R$ 1,00 se forem compradas pelo menos 12.
// Escreva uma função receba o número de maçãs compradas, calcule e retorne o custo total da compra.
function calculaPrecoTotal(quantidade) {

    if (quantidade >= 12) {
        macas = 1
        return quantidade * macas
    } else if (quantidade < 12) {
        macas = 1.30
        return quantidade * macas
    }
}
console.log(calculaPrecoTotal(10))