export default class User {
  //encapsulamento #
  #nome;
  #email;
  #nascimento;
  #role;
  #ativo;
  constructor(nome, email, nascimento, role, ativo = true) {
    /*colacamos aqui tbm # significa :encapsulamento é o ato de esconder propriedades
esconder de quem? do restante do codigo*/

    this.#nome = nome;
    this.#email = email;
    this.#nascimento = nascimento;
    this.#role = role || "estudante";
    this.#ativo = ativo;
  }
  //usamos o metodo get para as outras sub classes terem acesso pois se nao, elas nao tem pq esta encapsulado privado com, vc pode escolher oq vc qerdisponibilizar ex nome email, ou todos , aqui elas nao estao acessando as propriedade do construtor mas sim do getter#
  //getter nunca leva paramentro
  get nome() {
    return this.#nome;
  }

  get email() {
    return this.#email;
  }

  get ativo() {
    return this.#ativo;
  }
//Setter
//setter sempre aceita UM parametro

  set nome(novoNome){
   if(novoNome === " "){
      throw new Error ('Formato do nome não é válido!')
   }
   this.#nome = novoNome
  }



  /* montanto um metodo privado com encapsulamento somente exemplo, nao vamos usar desse modo mais sim como get*/
  /*#montaObjUser() {
    return {
      //para retornar um objeto fazemos ({})
      nome: this.#nome,
      email: this.#email,
      nascimento: this.#nascimento,
      role: this.#role,
      ativo: this.#ativo,
    };
  }*/

  exibirInfos() {
    // agora this se refere aos getter e nao aos nosso obejtos privados
    return `${this.nome}, ${this.email}`;
  }
}

const novoUser = new User('juliana', 'j@j.com', '2024-01-01')

console.log(novoUser)
console.log(novoUser.exibirInfos())

