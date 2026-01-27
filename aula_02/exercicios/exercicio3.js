'use strict'

/*
VALORES TESTE
Salário Bruto: 2000
Salário Noturno: 500
Horas Extras: 100
Descontos: 200
Salário Líquido: 2800
*/

// Variáveis
const leia = require('readline-sync');

// Input Salário Bruto
let salarioBruto = leia.questionFloat('Digite o Salario Bruto: ');
console.log(salarioBruto);

// Input Salário Noturno
let adicionalNoturno = leia.questionFloat('Digite Adicional Noturno: ');
console.log(adicionalNoturno);

// Input Horas Extras
let horasExtras = leia.questionFloat('Digite as Horas Extras: ');
console.log(horasExtras);

// Input Descontos
let descontos = leia.questionFloat('Digite os Descontos: ');
console.log(descontos);

// Calculo salário líquido
let salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos;
// Exibir Salário Líquido
console.log('O seu Salario Liquido é: ', 
  new Intl.NumberFormat("pt-br", {
    style: 'currency',
    currency: 'BRL',
  }).format(salarioLiquido));