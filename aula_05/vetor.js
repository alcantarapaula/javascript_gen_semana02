'use strict'

const leia = require('readline-sync');

let numeros = [10, 25, 5, 45, 85];

let cores = [];

// for (let i = 0; i < numeros.length; i++) {
//   console.log(`numeros[${i}] = ${numeros[i]}`);
// };

for (let i = 0; i < 5; i++) {
  cores[i] = leia.question('Digite o nome de uma cor: ');
};

console.table(cores);

console.table(numeros.sort((a, b) => a - b));
console.table(cores.sort());



