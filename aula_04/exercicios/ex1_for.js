'use strict'

const leia = require('readline-sync');

// ler primeiro número
let numero1 = leia.questionInt('Digite o primeiro numero do intervalo: ');

// ler segundo número
let numero2 = leia.questionInt('Digite o segundo numero do intervalo: ');


// se intervalo for negativo é inválido
while(numero1 > numero2) {
  console.log('Intervalo inválido, tente novamente.');
  numero1 = leia.questionInt('Digite o primeiro numero do intervalo: ');
  numero2 = leia.questionInt('Digite o segundo numero do intervalo: ');
};

// console "no intervalo x e y:"
console.log(`No intervalo entre ${numero1} e ${numero2}:`);

// for para conferir múltiplos de 3 e 5 no intervalo dos números
for(let i = numero1; i <= numero2; i++){
  if(i % 3 === 0 && i % 5 === 0) console.log(`${i} é múltiplo de 3 e 5`);
};