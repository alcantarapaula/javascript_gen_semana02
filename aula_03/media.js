'use strict'

const leia = require('readline-sync');

let media = leia.questionFloat('Digite a media do aluno: ', {limitMessage: 'Digite um numero'});

if(media >= 7){
  console.log('Aluno Aprovado!');
} else if(media < 5){
  console.log('Aluno Reprovado!')
} else {
  console.log('Aluno em Recuperacao!')
};
