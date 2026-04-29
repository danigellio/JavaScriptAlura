
import User from "./User.js"

export default class Admin extends User {
  constructor(nome, email, nascimento, role = "admin", ativo = true) {
    super(nome, email, nascimento, role, ativo);
  }

  //alterando a logica do metodo do user
  /*
exibirInfos(){
return `${this.nome}, ${this.email} ${this.role}`;}
*/

  //OVERRIDE = SOBRESCRITA DE METODO Quando uma subclasse cria um método com o mesmo nome do método da superclasse, mas com outra lógica, isso se chama override.
  /* exibirInfos() {
    const infos = super.exibirInfos();
    return `Admin - ${infos}`;
    super permite acessar métodos da superclasse.Nesse caso, Admin aproveita a lógica original de User e adiciona um comportamento novo.
  }*/

  criarCurso(nomeCurso, qtdVgas) {
    return `curso ${nomeCurso}, criado com ${qtdVgas}`;
  }
}
//ASSINATURA DE FUNCAO= é um conjunto de informacoes que é composta pelo nome da funcao , pelo conjuunto de parametros q ela recebe e o tipo de dado que vem pelo parametro ou seja em criarCurso temos nomeCurso(string) e qtdVagas(number) e tbm o tipo de retorno . js nao consegue fazer a assinatura de funcao

const novoAdimin = new Admin('Rodrigo', 'r@r.com', '2024-01-01')

console.log(novoAdimin)
console.log(novoAdimin.exibirInfos())
console.log(novoAdimin.criarCurso('java script', 20))