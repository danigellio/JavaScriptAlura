let pesspa = [
  { nome: "Jesus", idade: 33 },
  { nome: "Maria", idade: 50 },
];

for (let p of pessoas) {
  if (p.idade >= 18) {
    console.log(`${p.nome} é maior de idade.`);
  }
} 