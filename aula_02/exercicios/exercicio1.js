"use strict"

/*
VALORES TESTE

Salário: 10000 (10k)
Abono: 1000 (1k)
Novo salário: 11000 (11k)
*/

// Declarar variáveis
const leia = require("readline-sync");

// Input salário
let salario = leia.questionFloat("Digite o salario: ");
// Leitura salário
console.log(salario);

// Input abono
let abono = leia.questionFloat("Digite o abono: ");
// Leitura abono
console.log(abono);

// Novo salário = salário + abono
let novoSalario = salario + abono;

// Exibir novo salário
console.log("O seu novo Salario Liquido é: ", 
  new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(novoSalario));


