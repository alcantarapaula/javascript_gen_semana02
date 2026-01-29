'use strict'

const leia = require('readline-sync');

// Variáveis
let idade = 0;
let menor21 = 0;
let maior50 = 0;

// Loop
while(idade >= 0) {
  idade = leia.questionInt('Digite uma idade: ')
  if(idade < 21 && idade >= 0) menor21++;
  if(idade > 50) maior50++;
};

// Display
console.log(`Total de pessoas menores de 21: ${menor21}\nTotal de pessoas maior de 50: ${maior50}
  `);