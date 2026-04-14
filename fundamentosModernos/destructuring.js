const pessoa = {
     nome:'natalia',
     idade:17,
     profissao:'estudante'
}

console.log(pessoa.nome)
//{} objeto se fosse array []
const {nome, idade} = pessoa
console.log(nome)
console.log(idade)

function saudacao({nome, idade}){ //vamo receber um objeto nesse parametro 
     console.log('ola, ', pessoa.nome)

     if (idade > 18){
          console.log('maior de idade')
     }else{
          console.log('menor de idade')
     }
}

saudacao(pessoa)


const frutas = ['uva', 'banana']

const [primeira, segunda] =frutas
//mesma coisa de 
//const primeira = frutas[0]
//const primeira = frutas[1]
