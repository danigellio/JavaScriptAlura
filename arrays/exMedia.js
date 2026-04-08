let notas = [10,9,8,8]

let soma = 0


for(let nota of notas){
          soma += nota
          

}
let media = soma / notas.length

if(media >= 7){
     console.log('Aprovado: ' + media)
}else{
     console.log('Reprovado: ' + media)
}