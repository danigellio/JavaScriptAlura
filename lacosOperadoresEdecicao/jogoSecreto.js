let numeroSorteado = 7

for(let i = 1; i <= 3; i++){
     let numeroTentado;

     if(i ===1){
          numeroTentado =3
     }else if(i ===2){
          numeroTentado = 5

     }else{
          numeroTentado= 7
     }

     if(numeroTentado === numeroSorteado){
          console.log("Acertou!!")
     }else{
          console.log("Tentou novamente!")
     }
}
