// let nacionalidade = prompt("Digite aqui a nacionalidade").toLowerCase()
// if(nacionalidade === "brasileira"){
//     console.log("a pessoa é do Brasil!")
// } else if(nacionalidade === "argentina"){
//     console.log("a pessoa é da Argentina!")
// } else if(nacionalidade === "uruguaia"){
//     console.log("a pessoa é do Uruguai!")
// } else if(nacionalidade === "chilena"){
//     console.log("a pessoa é do Chile!")
// } else if(nacionalidade === "colombiana"){
//     console.log("a pessoa é da Colômbia!")
// } else{
//     console.log("nacionalidade não encontrada")
// }

// let nacionalidade = prompt("Digite aqui a nacionalidade").toLowerCase()
let nacionalidade = 'chilena'
switch (nacionalidade.toLocaleLowerCase()) {
    case 'brasileira':
        console.log('A pessoa é do Brasil!')
        break;
    case 'argentina':
        console.log('A pessoa é da Argentina!')
        break;
    case 'uruguaia':
        console.log('A pessoa é do Uruguai!')
        break;
    case 'chilena':
        console.log('A pessoa é do Chile!')
        break;
    case 'colombiana':
        console.log('A pessoa é da Colômbia!')
        break;
    default:
        console.log('Nacionalidade desconhecida!')
        break;
}

