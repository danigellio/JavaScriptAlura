const frutas = ["uva", "banana", "kiwi", "maça", "morango"];

//for tradicional
//nao pode ser <= pq vai apontar para um indice q nao existe
for(let i = 0; i < frutas.length; i++){
     console.log('indice: ',i)
     console.log(frutas[i])
}

//forEach
console.log('Usando forEach:')

frutas.forEach((valor, indice) => {
     console.log('Indice:', indice, valor)

})

//forOf

console.log('Usando forOf')

for(const fruta of frutas){
     console.log('fruta da vez:', fruta)
     
}
