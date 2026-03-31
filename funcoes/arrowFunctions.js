/*function saudacao(nome) {
  console.log("ola", nome);
}

saudacao("dani");
saudacao("inbra");
saudacao("fifi");
este exemplo fica assim */

// const saudacao = (nome) => {
//      console.log('ola', nome)
// }
// saudacao('dani')
 

/*---- ou podemos simplificar ainda mais*/
const saudacao = nome => console.log('ola',nome)
saudacao('daniela')

/*outro exemplo*/
const calculadobro = (numero) => {
     return numero * 2
}
const numeroDobrado = calculadobro(4)
console.log('o dobro de 4 é:', numeroDobrado)

/*mais simplificado*/
const calculaDobro = numero => numero * 2
const numerodobrado = calculaDobro(4);
console.log("o dobro de 4 é:", numerodobrado);
