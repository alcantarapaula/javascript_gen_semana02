'use strict'

/*
VALORES TESTE

Nota 1: 10.0
Nota 2: 8.0
Nota 3: 7.0
Nota 4: 7.5

Média Final: 8.1
*/

// Variáveis
const leia = require('readline-sync');
let nota1, nota2, nota3, nota4, media;

// Função Input Nota
function lerNota() {
  let nota = leia.questionFloat('Digite uma nota: ');
while(nota < 0 || nota > 10){
  console.error('A nota precisa ser entre 0 e 10');
  nota = leia.questionFloat('Digite uma nota: ')
}
return nota;
};

// Input Nota 1
nota1 = lerNota();
console.log(`Nota 1: ${nota1}`);

// Input Nota 2
nota2 = lerNota();
console.log(`Nota 2: ${nota2}`);

// Input Nota 3
nota3 = lerNota();
console.log(`Nota 3: ${nota3}`);

// Input Nota 4
nota4 = lerNota();
console.log(`Nota 4: ${nota4}`);

// Calcular e exibir média
media = (nota1 + nota2 + nota3 + nota4) / 4;
console.log(`A sua media final e: ${media.toFixed(1)}`);
