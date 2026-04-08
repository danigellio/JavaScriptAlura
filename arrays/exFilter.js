const idades = [12, 16,30,40]

const maiorIdae = idades.filter((idade) => {
  return idade >= 18;
});

console.log('Maior de idade:', maiorIdae)