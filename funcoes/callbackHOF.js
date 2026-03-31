//HOF -> Higher-Order Function === funcao que recebe outra funcao como parametro
function calcular(num1, num2, operacao) {
  return operacao(num1, num2);
}

function soma(num1, num2) {
  return num1 + num2;
}
function divisao(num1, num2) {
  return num1 / num2;
}

const resultadoSoma = calcular(3, 8, soma); // soma é um callback
console.log("resultado da soma:", resultadoSoma);

const resultadoDivisao = calcular(32, 8, divisao); //divisao é um callback

console.log("resultado da soma:", resultadoSoma);