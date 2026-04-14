let pessoa = {
  nome: "jesus",
  idade: 33,
  profissao: "carpinteiro",
  apresentacao : function(){
     console.log('nome:', this.nome , 'idade:' , this.idade )
  }

}


console.log('Seu nome é:', pessoa.nome)
pessoa.idade = 32
console.log( 'Sua idade é:' , pessoa.idade)

pessoa.corPreferida = 'Azul'
console.log(pessoa)

pessoa.apresentacao();

