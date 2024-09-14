class ContaBancaria{
    saldo: number
    constructor(){
        this.saldo = 0
    }
    depositar(valor: number){
        this.saldo += valor
    }
    sacar(valor: number){
        this.saldo -= valor
    }
}

class ContaCorrente extends ContaBancaria{
    sacar(valor: number): void {
        this.saldo -= (valor + 100)
    }
}

class ContaPoupança extends ContaBancaria{
    depositar(valor: number): void {
        this.saldo += (valor + 200)
    }
}

const contaCorrente = new ContaCorrente()
const contaPoupanca = new ContaPoupança()

contaCorrente.depositar(1000)
contaPoupanca.depositar(1000)
contaCorrente.depositar(1000)
contaPoupanca.depositar(1000)
contaCorrente.sacar(500)
contaPoupanca.sacar(500)

console.log(contaCorrente, contaPoupanca)