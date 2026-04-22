const user = {
     nome: 'Juliana',
     email:'juliana@j.com',
     nascimento: "2024-01-01",
     role: 'estudante',
     ativo: true,
     exibirInfos: function(){
          console.log(this.nome, this.email)
     }
}
//nao usamos arrow function com metodos pq nao conseguimos prender ela com bind entao usamos a function                                                          
user.exibirInfos() //( ) ele executa // 

/*const exibir = user.exibirInfos // aqi esta sem o () pq nao é para ser executada 
exibir() // aqi ele executa*/


//aqui vemos que nao temos ligacao com o objeto user
const exibir = function(){
     console.log(this.nome, this.email)
}

//entao usamos o bind para fazer esse ligacao com o objeto user la em cima
const exibirNome = exibir.bind(user)
exibirNome()