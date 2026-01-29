'use strict'

const leia = require('readline-sync');

let numero = leia.questionInt('Digite um numero inteiro: ');

// for(let i = 1; i <= 10; i++){
//   console.log(`${numero} x ${i} = ${numero * i}`);
// };

let i = 1;

while(i <= 10){
  console.log(`${numero} x ${i} = ${numero * i}`)
  i++
};