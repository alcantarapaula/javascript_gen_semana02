'use strict'

let matriz = [
  [1, 7, 9],
  [2, 6, 4],
  [3, 5, 8]
];

// console.table(matriz);

for (let l = 0; l < matriz.length; l++) {
  for (let c = 0; c < matriz.length; c++){
    console.log(`matriz[${l}][${c}] = ${matriz[l][c]}`)
  }
};

