//----------------Exemplos de Laços-2-----------//
//Código que percorre o array e verifica se é par, imprimindo uma mensagem de número par, caso não seja imprime a mensagem do número impar:
function parOuImpar(numeros) {
  numeros = [08, 37, 39, 50, 59, 60];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      // console.log("o número é par");
    } else {
      // console.log("o número é ímpar");
    }
  }
}
// parOuImpar()

// --------------- PRÁTICA GUIADA ---------------

let bimestre1 = [10, 4, 3, 8]
let bimestre2 = [2, 6, 10, 3]
let bimestre3 = [3, 6, 8, 10]
let bimestre4 = [5, 2, 7, 8]

let notasDoAno = [bimestre1, bimestre2, bimestre3, bimestre4]
// índices 0  1  2  3
// console.log(notasDoAno[3][0])
// console.table(notasDoAno)

for (let indiceBimestre = 0; indiceBimestre < notasDoAno.length; indiceBimestre++) {
  // console.log(i)
  // console.log(notasDoAno[i])
  let soma = 0
  for (let indiceNota = 0; indiceNota < notasDoAno[indiceBimestre].length; indiceNota++) {
    soma = soma + notasDoAno[indiceBimestre][indiceNota]
  }
  // console.log(soma)
  let mediaBimestre = soma / notasDoAno[indiceBimestre].length
  // console.log(mediaBimestre)
  // console.log(`A soma das notas do bimestre ${indiceBimestre + 1} é: ${soma}\nA média do bimestre ${indiceBimestre + 1} é ${mediaBimestre}`)
}

////////////////////////////////


// --------------- EXERCÍCIO DE FIXAÇÃO ---------------
const filmes = [
  {
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    diretor: 'Guel Arraes',
    elenco: [
      'Selton Mello',
      'Mateus Nachtergaele',
      'Marco Nanini',
      'Fernanda Montenegro',
    ],
  },
  {
    titulo: 'Carandiru',
    ano: 2001,
    diretor: 'Hector Babenco',
    elenco: [
      'Wagner Moura',
      'José Carlos Vasconcelos',
      'Ailton Graça',
      'Caio Blat',
    ],
  },
  {
    titulo: 'Aquarius',
    ano: 2012,
    diretor: 'Kléber Mendonça Filho',
    elenco: [
      'Sônia Braga',
      'Humberto Carrão',
      'Maeve Jinkings',
      'Bárbara Colen',
    ],
  },
]

// for (let i = 0; i < filmes.length; i++) {
//   console.log(`\nTitulo do filme: ${filmes[i].titulo}, de ${filmes[i].ano}, e seu diretor: ${filmes[i].diretor}`)
//   for (let j = 0; j < filmes[i].elenco.length; j++) {
//     console.log(`O ator/atriz é: ${filmes[i].elenco[j]}`)
//   }
// }



///////////////////////////////////////////////

const premierLeagueTimes = [
  'Manchester City',
  'Manchester United',
  'Liverpool',
  'Chelsea',
  'Leicester City',
  'West Ham United',
  'Tottenham Hotspur',
  'Arsenal',
  'Leeds United',
  'Everton',
  'Aston Villa',
  'Newcastle United',
  'Wolverhampton Wanderers',
  'Crystal Palace',
  'Southampton',
  'Burnley',
  'Brighton & Hove Albion',
  'Watford',
  'Norwich City',
  'Brentford',
];

function competicoesEuropeias(championsLeague, europaLeague, conferenceLeague) {
  console.log("\nTimes classificados para a Champions League:\n");
  for (let i = 0; i < 4; i++) {
    console.log(championsLeague[i]);
  }
  console.log(`\nTimes classificados para a Europa League:\n`)
  for (let j = 4; j < 6; j++) {
    console.log(europaLeague[j])
  }

  console.log(`\nTimes classificados para a Conference League\n`)
  for (let k = 7; k <= 7; k++) {
    console.log(conferenceLeague[k])
  }
}
// competicoesEuropeias(premierLeagueTimes, premierLeagueTimes, premierLeagueTimes);



