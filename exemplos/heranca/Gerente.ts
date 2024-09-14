import Funcionario from "./Funcionarios";

class Gerente extends Funcionario {
   senha: string

   constructor(senha: string, nome: string, salario: number) {
       super(nome, salario)
        this.senha = senha
   }
   validarSenha(senha: string) {
    return this.senha === senha
}
}
const funcionario = new Funcionario('Guido', 14000)
const gerente = new Gerente('1234', 'Adriano', 2000)

//gerente.