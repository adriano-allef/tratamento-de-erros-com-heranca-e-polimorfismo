import Funcionario from "./Funcionarios";
import Gerente from "./Gerente";
import Programador from "./Programador";
import Vendedor from "./Vendedor";

const funcionario = new Funcionario('Adriano', 140000)//Valor do salario em centavos

const gerente = new Gerente('1234', 'Maria', 140000)

const vendedor = new Vendedor('João', 140000)

const programador = new Programador('Guido', 140000, ['JavaScript', 'Java', 'C#', 'C++'])

console.log(`Eu sou ${funcionario.nome}, e sou um funcionário qualquer.`)
console.log(`Eu sou ${gerente.nome}, e sou um gerente. Minha senha é ${gerente.senha}.`)
vendedor.adicionarComissao(1000)
console.log(`Eu sou ${vendedor.nome}, e sou um vendedor. Meu salário é ${vendedor.obterSalarioComplero()}.`)
console.log(`Eu sou ${programador.nome}, e sou um programador. Minhas linguagens de programação sao ${programador.obterLinguagem('')}`)

