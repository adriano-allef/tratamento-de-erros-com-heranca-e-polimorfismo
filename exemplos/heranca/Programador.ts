import Funcionario from "./Funcionarios";

export default class Programador extends Funcionario{
    private linguagens: string[]
    constructor(nome: string, salario: number, linguagens: string[]) {
        super(nome, salario)
        this.linguagens = linguagens
    }

    obterLinguagem(linguagem: string) {
        return this.linguagens
    }
}