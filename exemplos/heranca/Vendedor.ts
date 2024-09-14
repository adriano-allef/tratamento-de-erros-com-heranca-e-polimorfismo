import Funcionario from "./Funcionarios"

export default class Vendedor extends Funcionario {
    comissao: number

    constructor(nome: string, salario: number) {
        super(nome, salario)
        this.comissao = 0
    }

    obterSalarioComplero() {
        return this.comissao + this.obterSalario()
    }

    adicionarComissao(valor: number) {
    this.comissao += valor

    }
}