'use strict'

/*
VALORES TESTE
cálculo:  (n1 * n2) – (n3 * n4)

numero1: 5
numero2: 6
numero3: 7
numero4: 8
diferença: -26

numero1: 5
numero2: 6
numero3: -7
numero4: 8
diferença: 86
*/

// Variáveis
const leia = require('readline-sync');
const numeros = [];

// Leitura dos números
for (let i = 0; i < 4; i++){
  numeros[i] = leia.questionFloat(`Insira o numero ${i +1}: `);
};

// Cálculo dos produtos
const calculo = (numeros[0] * numeros[1]) - (numeros[2] * numeros[3]);
console.log(`A diferença do produto de n1 (${numeros[0]}) e n2 (${numeros[1]}) do produto de n3 (${numeros[2]}) e n4 (${numeros[3]}) é: ${calculo}`);