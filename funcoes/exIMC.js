function calcularIMC(peso, altura){
     let imc = peso / (altura * altura)

     return imc;
}

let resultado = calcularIMC(69, 1.67)
console.log('seu IMC é:', resultado)