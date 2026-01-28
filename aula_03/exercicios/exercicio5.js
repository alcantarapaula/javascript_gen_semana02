'use strict'

const leia = require('readline-sync');

let codigo = leia.questionInt('Digite o codigo do produto (entre 1 e 6): ');
let quantidade = leia.questionInt('Digite a quantidade desejada: ');

switch(codigo) {
  case 1: 
    console.log(`Produto: Cachorro-quente (${quantidade} unidades) - R$${quantidade * 10},00`)
  break;
  case 2: 
    console.log(`Produto: X-Salada (${quantidade} unidades) - R$${quantidade * 15},00`)
  break;
  case 3: 
    console.log(`Produto: X-Bacon (${quantidade} unidades) - R$${quantidade * 18},00`)
  break;
  case 4: 
    console.log(`Produto: Bauru (${quantidade} unidades) - R$${quantidade * 12},00`)
  break;
  case 5: 
    console.log(`Produto: Refrigerante (${quantidade} unidades) - R$${quantidade * 8},00`)
  break;
  case 6: 
    console.log(`Produto: Suco de Laranja (${quantidade} unidades) - R$${quantidade * 13},00`)
  break;
  default: 
    console.log('Código Inválido')
};

