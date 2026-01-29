'use strict'

const leia = require('readline-sync');

// Variáveis / Leitura
const vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];
let numero = leia.questionInt('Digite o numero que voce deseja encontrar: ');

// Verificação
if(vetor.indexOf(numero) || vetor.indexOf(numero) === 0) {
  console.log(`O número ${numero} está localizado na posição ${vetor.indexOf(numero)}.`)
} else {
  console.log(`O número ${numero} não foi encontrado!`)
};

