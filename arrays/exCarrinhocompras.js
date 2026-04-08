const carrinhoCompras = [ 2, 4, 8, 14,6]
let total = 0
for (const preco of carrinhoCompras) {

     total+= preco
}

let desconto = total * 0.8

console.log("Total : R$ " + total);
console.log("Total com desconto de 20%: R$ " + desconto);
