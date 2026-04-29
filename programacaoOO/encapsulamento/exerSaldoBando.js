class Conta {
  #saldo = 0;

  get saldo() {
    return this.#saldo;
  }

  set saldo(valor) {
    if (valor < 0) {
      console.log("Saldo não pode ser negativo");
      return;
    }

    this.#saldo = valor;
  }
}

const conta = new Conta();

conta.saldo = 500;
console.log(conta.saldo);

conta.saldo = -100;
