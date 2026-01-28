'use stric'

// Escreva um algoritmo que leia um número inteiro via teclado e mostre na tela uma mensagem indicando se este número é par ou ímpar e se o número é positivo ou negativo.

const leia = require('readline-sync');
let par, positivo;

let num = leia.questionInt('Digite um numero inteiro: ', {
  limitMessage: 'Por favor, digite um numero inteiro'
});

num % 2 === 0 ? par = true : false;
num > 0 ? positivo = true : false;

console.log(`O número ${num} é ${par ? 'par' : 'ímpar'} e ${num === 0 ? 'neutro' : positivo ? 'positivo' : 'negativo'}`);

