let camila1 = {
     nome: 'Camila',
     idade: 29,
     profissao: 'Desenvolvedora'
}
console.log(camila1)
//Spread operator

let camila2 = { ...camila1}
camila2.idade = 28
console.log(camila2)
console.log(camila1)

//spread copia todo e cria nova propriedade
camila1 = { 
     ...camila2,
     profissao: 'Desenvolvedora Senior',
     temCNH: true
}
console.log(camila1);

//separar o nome e o resto fica junto menos o nome, agente separa o nome do resto

//rest operator

const { nome, ...restante} = camila1
console.log(nome)
console.log(restante)
