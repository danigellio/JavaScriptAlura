//setTImeout vai executar um pedaco de codigo ou funcao depois de um determinado tempo

// 1segundo 1000 2sg 2000 60segundos 60000

//util para quando vc mostra uma notificacao e depois retira ela

//mdm ver documentacao
//recebe primeiro um codigo e depois um delay

function saudacao(){
     console.log('E ai, beleza?')}

setTimeout(saudacao, 2000)

/*outro exemplo, interval fica repetindo, 
oq vc qer fazer e depois de quanto em quanto tempo fica repetindo*/


//funcao global
let contador = 0

const id = setInterval(() => {
     contador++
     console.log('tempo decorrido(em segundos):', contador)

     if(contador == 10){
     clearInterval(id) //aqi ele limpa, ele para no 10
     } //precisamos desse id
}, 1000)