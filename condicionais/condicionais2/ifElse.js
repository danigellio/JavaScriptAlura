const num1 = 2
const num2 = 4
const operacao = 'soma'

if(operacao === 'som'){
     console.log(num1 + num2)
}else if(operacao === 'som'){
     console.log(num1 + num2)
}else{
     console.log('operacao invalida')
}


//outro exemplo

const salario = 2000;

if(salario >= 11000){
     console.log('3% de bônus');
} else if (salario < 11000 && salario >= 7000){
     console.log('5% de bônus');
}else if (salario < 7000 && salario >= 4000){
     console.log('7% de bônus');
}else {
     console.log('9% de bônus');
}
//ano bissexto
//deve ser divisivel por 4 mas nao por 100
//ou deve ser diviivel por 100 e por 400
const ano = 2024

if(((ano % 4 === 0) && (ano % 100 !== 0)) || (ano % 400 === 0 )){
     console.log(`${ano} é bissexto`) 
}else{
     console.log(`${ano} não é bissexto`)
}