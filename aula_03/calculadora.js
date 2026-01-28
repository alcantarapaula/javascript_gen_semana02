'use strict'

const leia = require('readline-sync');

// console.log('===========================================');
// console.log('========CALCULADORA COM SWITCH CASE========');
// console.log('===========================================');
// console.log('1 - Soma                                   ');
// console.log('2 - Subtração                              ');
// console.log('3 - Multiplicação                          ');
// console.log('4 - Divisão                                ');
// console.log('===========================================');
// console.log('===========================================');

// Operação com sinais
console.log('===========================================');
console.log('========CALCULADORA COM SWITCH CASE========');
console.log('===========================================');
console.log('(+) - Soma                                   ');
console.log('(-) - Subtração                              ');
console.log('(*) - Multiplicação                          ');
console.log('(/) - Divisão                                ');
console.log('===========================================');
console.log('===========================================');

let numero1 = leia.questionFloat('Digite o primeiro numero: ', {
  limitMessage: 'Digite um numero float'
});
let numero2 = leia.questionFloat('Digite o segundo numero: ', {
  limitMessage: 'Digite um numero float'
});
// let operacao = leia.questionInt('Digite o numero da operacao: ', {
//   limitMessage: 'Digite um numero inteiro'
// });
let operacao = leia.keyIn('Digite o numero da operacao: ');

switch(operacao) {
  case '+':
    console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`);
  break;
  case '-':
    console.log(`${numero1} - ${numero2} = ${numero1 - numero2}`);
  break;
  case '*':
    console.log(`${numero1} * ${numero2} = ${numero1 * numero2}`);
  break;
  case '/':
    console.log(`${numero1} / ${numero2} = ${numero1 / numero2}`);
  break;
  default:
    console.log('Operacao Invalida!');
};

