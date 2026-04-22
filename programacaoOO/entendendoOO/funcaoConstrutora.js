function User(nome, email) {
  this.nome = nome;
  this.email = email;
}

User.prototype.exibirInfos = function() {
  return `${this.nome}, ${this.email}`;
};

const user2 = new User("João", "joao@email.com");

console.log(user2.exibirInfos());