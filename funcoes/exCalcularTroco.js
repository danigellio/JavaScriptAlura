function calculaTroco(valorCompra, valorPago){
     let troco = valorCompra - valorPago

     return troco;
}

let resultado = calculaTroco(50, 15)
console.log('o troco é:', resultado)