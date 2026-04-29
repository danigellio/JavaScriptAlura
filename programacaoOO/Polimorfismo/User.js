export default class User {
  constructor(nome, email, nascimento, role, ativo = true) {
    this.nome = nome;
    this.email = email;
    this.nascimento = nascimento;
    this.role = role || "estudante"; //se nao passar nada ele sera estudante
    this.ativo = ativo;
  }

  /* exibirInfos() {
    return `${this.nome}, ${this.email}`;
   
  }*/

  //Overload = sobrecarga
  /*Em vez de centralizar tudo em um único método cheio de condições, pode ser melhor usar sobrescrita (override) nas subclasses.
Cada classe implementa seu próprio comportamento.*/

  /*
 exibirInfos(tipoInfo) {
   if (tipoInfo === "basic") {
     return `dados básicos: ${this.nome}`
   }
   if (tipoInfo === "complete") {
     return `dados completos: ${this.nome}, ${this.email}, ${this.nascimento}`
   }
 }
   
 podiamos instanciar assim
  const novoUser = new User('Juliana', 'j@j.com', '2024-01-01')
console.log(novoUser.exibirInfos('basic'));
console.log(novoUser.exibirInfos('complete'));*/
  exibirInfos() {
    // poderia ter passado parametro(role)
    if (this.role === "estudante") {
      return `dados estudantes: ${this.nome}`;
    }
    if (this.role === "admin") {
      return `dados admin: ${this.nome}, ${this.role}`;
    }
    if (this.role === "docente") {
      return `dados docente: ${this.nome},  ${this.email}`;
    }
  }
  //versao statica
  static exibirInfosGenericas(nome, email) {
    return `${nome}, ${email}`; //aqui nao usamos this
  }
}



const novoUser = new User('juliana', 'j@j.com', '2024-01-01')

console.log(novoUser)
console.log(novoUser.exibirInfos())

