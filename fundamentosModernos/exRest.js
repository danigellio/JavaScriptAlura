function somarTudo(...numeros) {
     let soma = 0

     for (let i = 0; i < numeros.lenght; i++){
          soma+= numeros[i]
     }
     return soma
}

console.log(somarTudo(2,4,8,10))