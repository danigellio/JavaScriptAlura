import User from "./User.js"

export default class Docente extends User {
     
     constructor(nome, email, nascimento, role = 'docente', ativo = true){
          super(nome, email, nascimento, role, ativo) //passo oque qero reutilizar, se nao quiser tudo, pode colocar ex: nome, email
     }
     aprovarEstudante(estudante, curso){
          return `estudante ${estudante}, passou no curso de ${curso}, responsavel pelo curso ${this.nome}`
     }
}
//instanciar
const novoDocente = new Docente ("dani", "d@d.com", "2024-01-01");
//console.log(novoDocente)
//console.log(novoDocente.aprovarEstudante('frederia', 'js'))
