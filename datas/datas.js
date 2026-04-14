//data atual
const agora = new Date()

console.log(agora)
//ISO 8601

console.log('Ano:', agora.getFullYear())
console.log("Mês 0-11:", agora.getMonth());
console.log('Dia do mês:', agora.getDate())
console.log("Hora:", agora.getHours());
console.log("Minutos:", agora.getMinutes());


//criando data especifica
const nascimento = new Date('1993-07-07T07:00:00.000Z') //time zone. colocomos assim ano mes dia //000z significa 000 no time zone, nem mais nem menos
console.log(nascimento)

console.log('Data formatada (BR):' , nascimento.toLocaleDateString('pt-BR'))

console.log('Data formatada (US):' , nascimento.toLocaleDateString('en-US'))

