const nome = 'roberta'
const nota = 8 ;
const faltas = 3;

const recebeBonus = (nota >= 8) && (faltas <= 2) 
? `${nome} recebe bônus `
: `${nome} nao recebe bonus`

console.log(recebeBonus)

//criar um fluxo q identifica o tipo de usuario e comunica de acorda
// ex: usuario free tem acesso limitado ao app
//     usuario premium tem acesso a todas as funçoes
//     usuario super premium tem acesso total e bonus especiais

const user = 'premium'

switch(user){
     case 'free':
          console.log('acesso limitado');
          break;
     case 'premium':
          console.log('acesso total ao app');
          break;
     case 'super premium':
          console.log('acesso total ao app e bônus' );
          break;
     default:
          console.log('tipo de user desconhecido')
          break;
}