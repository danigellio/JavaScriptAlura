const frutas = ["uva", "banana", "kiwi", "maça", "morango"];
// uva 0
//morango 4

console.log(frutas);

console.log("Primeira fruta:", frutas[0]);
console.log("Ultima fruta:", frutas[4]);

console.log("Total de frutas:", frutas.length); //mostra total do array

//funcao push adiciona algo no array
frutas.push("melancia");

console.log("Total de fruta depois de adicionar Melancia", frutas.length);

//para acessar a ultima fruta pq sao 6 , mas no array sao 5, entao 6 -1 = 5
console.log("Ultima fruta:", frutas[frutas.length - 1]);

console.log(frutas);

frutas.splice(2, 1); //remeve o indice 2, somente 1, se fosse 2, 2 removia indice 2 e o proximo
//indice=2 e quantos=1
console.log(frutas);

//para remover a primeira
//shift()