'use strict'

const leia = require('readline-sync');

// Variáveis
let soma = 0;
let numero;

// Loop
while(numero !== 0) {
  numero = leia.questionInt('Digite um numero inteiro: ');
  if(numero > 0) soma += numero;
};

// Display
console.log(`A soma de todos os números positivos é: ${soma}`);
