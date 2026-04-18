const hoje = new Date()

const dia = hoje.getDate()

const mes = hoje.getMonth() +1

const ano = hoje.getFullYear()

console.log(`Hoje é ${dia}/${mes}/${ano}`);



console.log('Data formatada (BR):' , hoje.toLocaleDateString('pt-BR'))