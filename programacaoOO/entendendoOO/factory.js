function criaUser(nome, email) {
  return {
    nome,
    email,
    exibirInfos() {
      return `${nome}, ${email}`;
    }
  };
}

const user1 = criaUser("Dani", "dani@email.com");

console.log(user1);
console.log(user1.exibirInfos());