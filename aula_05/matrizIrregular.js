'use stric'

let matriz = [
  [1, 7, 9],
  [2, 6, 4]
];

// console.log(matriz[0].length);

// console.table(matriz);

for (let l = 0; l < matriz.length; l++) {
  for (let c = 0; c < matriz[l].length; c++){
    console.log(`matriz[${l}][${c}] = ${matriz[l][c]}`)
  }
};