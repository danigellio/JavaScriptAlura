const nome = ''

if(nome){
     console.log('ola', nome)
}else{
     console.log('ainda nao sei seu nome')
}
/*outro exemplo*/
const nome1 = 'Dani'

if(nome1){
     console.log('ola', nome1)
}else{
     console.log('ainda nao sei seu nome')
}
/*outro exemplo*/
const idade = 36
if(idade != null && idade >= 18){
     console.log('maior de idade')
}else if(idade != null && idade >= 0 && idade < 18) {
     console.log('menor de idade')
}
 //outra abordagem
 const idade1= null
 if(idade1 !=null){
     if (idade1 >= 18) {
       console.log("maior de idade");
     } else if (idade1 >= 0 && idade1 < 18) {
       console.log("menor de idade");
     }
 }