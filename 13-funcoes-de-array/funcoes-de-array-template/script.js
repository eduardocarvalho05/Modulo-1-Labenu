
function multiplicarPor3(arrayDeNumeros) {
  let novoArray = [];
  for (let i = 0; i < arrayDeNumeros.length; i++) {
    novoArray.push(arrayDeNumeros[i] * 3);
  }
  return novoArray;
}

const arrayNum1 = [1, 3, 5, 7, 10];
// console.log(multiplicarPor3(arrayNum1));

const triplicarValor = arrayNum1.map((numero) => {
  return numero * 3
})
// console.log("map", triplicarValor)

/////////////////////////////////////////////////////////////////////

const retornaPar = (arrayDeNumeros) => {
  let novoArray = [];
  for (let i = 0; i < arrayDeNumeros.length; i++) {
    if (arrayDeNumeros[i] % 2 === 0) {
      novoArray.push(arrayDeNumeros[i]);
    }
  }
  return novoArray;
}
const arrayNum2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(retornaPar(arrayNum2));

const numPar = (numero) => {
  return numero % 2 === 0;
};
const filtrarPares = arrayNum2.filter(numPar);
// console.log(filtrarPares);

const pegarPar = arrayNum2.filter((numero) => {
  return numero % 2 === 0;
});
// console.log(pegarPar)


/////////////////////////////////////////////////

// function fazerOperacoes(array, callback) {
//   const novoArray = callback(array)
//   return novoArray
// }
// console.log("Callback multiplicado por 3", fazerOperacoes(arrayNum2, multiplicarPor3))

///////////////////////////////////////////////


const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 }
]

// O método map() em JavaScript é usado para percorrer um array e executar uma função em cada elemento desse array. Ele retorna um novo array com os resultados dessas funções aplicadas a cada elemento.
const aumentarVida = (poke) => {
  const novaVida = {
    ...poke,
    vida: 100
  }
  return novaVida
}
const pokemonsVidaCheia = pokemons.map(aumentarVida)
console.log(pokemonsVidaCheia)


// O filter() é útil quando você precisa filtrar elementos de um array com base em critérios específicos e criar um novo array apenas com os elementos que atendem a esses critérios.
const pokemonsDeFogo = pokemonsVidaCheia.filter((poke) => {
  return poke.tipo === "fogo"
})
console.log(pokemonsDeFogo)