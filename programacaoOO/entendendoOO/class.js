class UserClass {
  constructor(nome, email) {
    this.nome = nome;
    this.email = email;
  }

  exibirInfos() {
    return `${this.nome}, ${this.email}`;
  }
}

const user3 = new UserClass("Ana", "ana@email.com");

console.log(user3.exibirInfos());