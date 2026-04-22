const user = {
  nome: "Juliana",
  email: "juliana@j.com",
  nascimento: "2024-01-01",
  role: "estudante",
  ativo: true,
  exibirInfos: function () {
    console.log(this.nome, this.email);
  },
}


const admin = {
  nome: "Maria",
  email: "maria@m.com",
  nascimento: "2024-01-01",
  role: "admin",
  ativo: true,
  criarCurso: function(){
     console.log('curso criado')
  }
}

//herança de prototipo
//definimos o admin que vai usar como prototipo como modelo o objeto user, primeiro é quem vai pegar depois qem vai fornecer
Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()