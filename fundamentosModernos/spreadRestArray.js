const fruta = ['maça', 'banan', 'goiaba']

const maisFrutas = ['Uva', 'Morango','Kiwi' ]

const clone = [...fruta]

const todasFrutas = [...fruta, ...maisFrutas]

fruta.push('Pitanga')

console.log(fruta)
console.log(maisFrutas)
console.log(clone)
console.log(todasFrutas)

const [primeira, segunda, ...restante] =todasFrutas
console.log(primeira)
console.log(segunda)
console.log(restante)