import Funcionario from "./Funcionarios";

export default class Gerente extends Funcionario {
   senha: string

   constructor(senha: string, nome: string, salario: number) {
       super(nome, salario)
        this.senha = senha
   }
   validarSenha(senha: string) {
    return this.senha === senha
}
}
