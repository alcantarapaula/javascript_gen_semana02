'use stric'

const leia = require('readline-sync');

let matriz = new Array(2);

for (let i = 0; i < matriz.length; i++) {
  matriz[i] = Array(3);
};

for(let l = 0; l < matriz.length; l++){
  for(let c = 0; c < matriz[l].length; c++){
    matriz[l][c] = leia.questionInt(`matriz[${l}][${c}] = `)
  }
};

console.table(matriz)

// let matrizInteiros = Array.from({ length: 2 }, () =>    Array.from({ length: 3 }, () => leia.questionInt("Digite um numero: ")) );