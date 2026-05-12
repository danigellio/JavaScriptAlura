for (let i = 1; i <= 30; i++) {
     const numero = Math.floor(Math.random() * (50 - 1 + 1) +1 );
     if(numero === 15){
          console.log(`${numero} em ${i} tentativas`)
          break;
     }
}

//gerar numeros aleatorio de 1 a 50
// criar um contador que so é incrementado caso os numeros nao sejam divisiveis por 5
// no final, exbir o valor do contador
let contador = 0;
for (let i = 1; i <= 30; i++) {
     const numero = Math.floor(Math.random() * (50 - 1 + 1) +1 );
     if(numero % 5 === 0){
          continue;
     }
     contador++;
}
console.log(contador)