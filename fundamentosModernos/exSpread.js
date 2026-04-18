let frutas = ['banana', 'uva', 'morango']
let maisfrutas = ['kiwi', 'pera']

 frutas = [...frutas, ...maisfrutas
]

console.log(frutas)

/*outro exercicio*/

let dados1= {
     nome:'daniela',
     
}

let dados2={
     idade :33
}
let perfil = {...dados1, ...dados2} 

console.log(perfil)