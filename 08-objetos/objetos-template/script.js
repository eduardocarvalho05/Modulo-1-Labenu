const estudanteOriginal = {
    nome: 'Eduardo',
    sobrenome: 'Carvalho',
    numeroMatricula: 1993,
    notas: [10, 7, 9, 8]
};

estudanteOriginal.notas.modulo = 1;
// console.log(estudanteOriginal.nome);
// console.log(estudanteOriginal.notas);
// console.log(estudanteOriginal.notas.modulo);

const estudanteCopia = {
    ...estudanteOriginal,
    nome: 'Astrodev',
    notas: [...estudanteOriginal.notas, 9],
    modulo: estudanteOriginal.notas.modulo + 1
};
// console.log(estudanteCopia);

const estudanteLabenu = [];
estudanteLabenu.push(estudanteCopia);
// console.log(estudanteLabenu);

const carrinho = {
    nome: `Eduardo`,
    formaDePagamento: `Credito`,
    endereco: `Rio de Janeiro`,
}
carrinho.compras = [
    {
        nomeProduto: `Playstation 5`,
        precoProduto: 4000.00,
        quantidadeComprada: `Comprei 1 PS5`
    }
]
carrinho.compras[0].novoProduto = `Xbox Series X`
// console.log(carrinho)
// console.log(carrinho.compras[0].quantidadeComprada)

const carrinhoCopia = {
    ...carrinho,
    nome: `Gabriela`,
    formaDePagamento: `Cartão presente`
}
// console.log(carrinhoCopia)

