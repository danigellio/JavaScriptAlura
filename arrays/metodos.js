const numeros = [1,2,3,4,5,6,7,8,9,10]
//filter nao altera lista original
const numerosPares = numeros.filter((numero) => {

     return numero % 2 === 0
})

console.log(numeros)
console.log('numeros pares:', numerosPares)

const numerosImpares = numeros.filter((numero) => {
  return numero % 2 != 0;
});

console.log('numeros impares:', numerosImpares)

//MAP = vai transformar nossa lista em uma lista de coisas diferentes
//alem de percorrer ele retorna outra lista

const numerosDobrados= numeros.map((numero) => {
     return numero * 2
})

console.log('nossa lista mapeada:', numerosDobrados)