'use strict'

const leia = require('readline-sync');

// Variáveis
let notas = [];
let medias = [];

for (let i = 0; i < 10; i++) {

  let soma = 0;
  notas[i] = [];

  console.log(`Digite as notas do ${i + 1} aluno: `)
  for (let b = 1; b <= 4; b++) {
  
    notas[i][b] = leia.questionFloat(`Nota do ${b}o bimestre: `);

     while(notas[i][b] < 0 || notas[i][b] > 10) {
      console.log('Nota inválida, digite novamente.')
      notas[i][b] = leia.questionFloat(`Nota do ${b}o bimestre: `);
     };
     
    soma += notas[i][b];
  };
  medias[i] = soma / 4;
};

console.table(notas);
console.table(medias);