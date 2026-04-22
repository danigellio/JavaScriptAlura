function criaConta(saldoInicial) {
  let saldo = saldoInicial;

  return {
    depositar(valor) {
      saldo += valor;
    },
    sacar(valor) {
      if (valor > saldo) {
        return "Saldo insuficiente";
      }
      saldo -= valor;
    },
    verSaldo() {
      return saldo;
    }
  };
}

const conta = criaConta(100);

conta.depositar(50);
console.log(conta.verSaldo()); // 150