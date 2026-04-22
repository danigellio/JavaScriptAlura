function Admin(nome, email, role) {
  User.call(this, nome, email);
  this.role = role;
}

Admin.prototype = Object.create(User.prototype);

const admin1 = new Admin("Juliana", "j@j.com", "admin");

console.log(admin1.exibirInfos());
console.log(admin1.role);