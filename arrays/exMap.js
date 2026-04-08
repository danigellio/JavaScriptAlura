const precos= [18,20,15,22]
const precoDesconto = precos.map((preco) => {
  return preco * 0.9;
});

console.log("Preços com 10% de desconto:", precoDesconto); 
