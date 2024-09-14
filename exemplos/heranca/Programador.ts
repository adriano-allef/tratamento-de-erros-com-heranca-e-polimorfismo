import Funcionario from "./Funcionarios";

export default class Programador extends Funcionario{
    private linguagens: string[]
    constructor(nome: string, salario: number) {
        super(nome, salario)
        this.linguagens = []
    }

    obterLinguagem(linguagem: string) {
        return this.linguagens
    }
}