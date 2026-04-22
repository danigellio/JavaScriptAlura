class User {
     constructor(nome, email, nascimento, role, ativo = true) {
          this.nome = nome
          this.email= email
          this.nascimento = nascimento
          this.role = role || 'estudante' //se nao passar nada ele sera estudante
          this.ativo = ativo     
     }
     //comportamentos sao os metodos, que sao funcoes
     exibirInfos(){
          return `${this.nome}, ${this.email}`
     }

}

const novoUser = new User('juliana', 'j@j.com', '2024-01-01')

console.log(novoUser)
console.log(novoUser.exibirInfos())

console.log(User.prototype.isPrototypeOf(novoUser))
//novouser é prototipo de user? é pq foi em cima so user que fizemos o novoUser, aqui é para tirar duvidas se é prototipo ou nao