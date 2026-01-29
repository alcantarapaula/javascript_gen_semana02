'use strict'

const leia = require('readline-sync');

let numero = leia.questionInt('Digite um numero inteiro: ');

// console.log(`${numero} x 1 = ${numero * 1}`);

for(let i = 1; i <= 10; i++){
  console.log(`${numero} x ${i} = ${numero * i}`);
};
