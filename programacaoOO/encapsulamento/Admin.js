//usar sempre primeiro letra maiuscula nos nomes do arquivos pois assim entendemos q é uma classe Admin User

import User from "./User.js"
//admin herda de user
//aqi estamos exportando
export default class Admin extends User {
     //passamos aqi oq eu qero q a classe admin herde de user
     constructor(nome, email, nascimento, role = 'admin', ativo = true){
          super(nome, email, nascimento, role, ativo) //passo oque qero reutilizar, se nao quiser tudo, pode colocar ex: nome, email
     }
     criarCurso(nomeCurso, qtdVgas){
          return `curso ${nomeCurso}, criado com ${qtdVgas}`
     }
}

const novoAdimin = new Admin('Rodrigo', 'r@r.com', '2024-01-01')

console.log(novoAdimin)
console.log(novoAdimin.exibirInfos())
console.log(novoAdimin.criarCurso('java script', 20))
console.log(novoAdimin.nome)