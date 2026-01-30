'use stric'

let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let diagonalP = '', diagonalS = '';
let somaDiagonalP = 0, somaDiagonalS = 0;

for (let i = 0; i < matriz.length; i++) {
  diagonalP += matriz[i][i] + ' ';
  somaDiagonalP += matriz[i][i];
  diagonalS += matriz[i][matriz.length - 1 - i] + ' ';
  somaDiagonalS += matriz[i][matriz.length - 1 - i];
};


console.log(`A diagonal principal da matriz é: ${diagonalP}`);
console.log(`A soma dos valores da diagonal principal da matriz é: ${somaDiagonalP}`);
console.log(`A diagonal secundária da matriz é: ${diagonalS}`);
console.log(`A soma dos valores da diagonal secundária da matriz é: ${somaDiagonalS}`);