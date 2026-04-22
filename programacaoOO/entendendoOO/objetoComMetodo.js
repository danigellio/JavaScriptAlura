const pessoa = {
  nome: "Dani",
  falar() {
    return `Oi, eu sou ${this.nome}`;
  }
};

console.log(pessoa.falar());