'use strict'

// Desenvolva um algoritmo que leia 3 valores inteiros A, B e C e imprima na tela se a soma de A + B é maior, menor ou igual a C.

const leia = require('readline-sync');

let numA = leia.questionInt('Digite o numero A: ');

let numB = leia.questionInt('Digite o numero B: ');

let numC = leia.questionInt('Digite o numero C: ');


if(numA + numB > numC){
  console.log(`A soma de ${numA} + ${numB} é: ${numA + numB}, que é maior que ${numC}`);
} else if(numA + numB < numC){
  console.log(`A soma de ${numA} + ${numB} é: ${numA + numB}, que é menor que ${numC}`);
} else {
  console.log(`A soma de ${numA} + ${numB} é: ${numA + numB}, que é igual a ${numC}`);
};

