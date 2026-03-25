//contar quantos numeros pares e quantos numeros impares nós tems entre 0 e 100
let totalNumPares =0
let totalNumImp = 0

for(let cont = 0; cont <= 100; cont++){
     if(cont % 2 == 0){
          totalNumPares++
     }else{
          totalNumImp++
     }
}

console.log(totalNumPares)
console.log(totalNumImp)