class AdminClass extends UserClass {
  constructor(nome, email, role) {
    super(nome, email);
    this.role = role;
  }
}

const admin2 = new AdminClass("Carlos", "c@c.com", "gerente");

console.log(admin2.exibirInfos());
console.log(admin2.role);