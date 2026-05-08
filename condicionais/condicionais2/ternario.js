const nome = 'fernando';
const saudacao = nome ? `ola ${nome}` : `olá, pessoal`
console.log(saudacao)
//se existe o nome é true, se nao é falso
/*nao precisa liga a uma const, pode fazer assim
*/

const nome0 = 'sol'
nome0 ? ReadableStreamDefaultReader(nome0) : saudar ('pessoa');


//ou com if normal, mesmo codigo assim
const nome1 = 'ana'
let saudacao1;
if(nome){
     saudacao1 = `ola, ${nome}`;
}else {
     saudacao = `ola, pessoal`
};