'use strict'

const leia = require('readline-sync');

let nome = leia.question('Digite o nome do colaborador: ');

let codigo = leia.questionInt('Digite o codigo do cargo do colaborador (entre 1 e 6): ');

let salario = leia.questionFloat('Digite o salario do colaborador: ');

switch(codigo) {
  case 1: 
    console.log(`O novo salário do gerente ${nome} é: R$${salario + (salario * 0.1)},00`)
  break;
  case 2: 
    console.log(`O novo salário do vendedor ${nome} é: R$${salario + (salario * 0.07)},00`)
  break;
  case 3: 
    console.log(`O novo salário do supervisor ${nome} é: R$${salario + (salario * 0.09)},00`)
  break;
  case 4: 
    console.log(`O novo salário do motorista ${nome} é: R$${salario + (salario * 0.06)},00`)
  break;
  case 5: 
    console.log(`O novo salário do estoquista ${nome} é: R$${salario + (salario * 0.05)},00`)
  break;
  case 6: 
    console.log(`O novo salário do técnico de TI ${nome} é: R$${salario + (salario * 0.08)},00`)
  break;
  default:
    console.log('Código de cargo inválido')
};