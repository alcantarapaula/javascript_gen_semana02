'use strict'

const leia = require('readline-sync');

let idade, genero, categoria;

let back = 0, front = 0, mobile = 0, full = 0, total = 0, soma = 0, media = 0;

let continua = true;

while(continua) {
  idade = leia.questionInt('Digite a idade: ');

  let generopOpt = [
    'Mulher Cis',
    'Homem Cis',
    'Não Binário',
    'Mulher Trans',
    'Homem Trans',
    'Outros'
  ]

  genero = leia.keyInSelect(generopOpt, 'Selecione o genero: ', {cancel: false}) + 1;

  let categoriaOpt = [
    'Backend',
    'Frontend',
    'Mobile',
    'Fullstack'
  ]

  categoria = leia.keyInSelect(categoriaOpt, 'Selecione a categoria: ', {cancel: false}) + 1;
  
  if(categoria === 1) back ++;

  if(categoria === 2 && (genero === 1 || genero === 4)) front ++;

  if(categoria === 3 && (genero === 2 || genero === 5) && idade > 40) mobile ++;

  if(categoria === 4 && genero === 3 && idade < 30) full ++;

  total ++;
  soma += idade;
  media = soma / total;

  continua = leia.keyInYNStrict('Deseja continuar? ');
};

console.log(`Total de pessoas Desenvolvedoras Backend: ${back}`);
console.log(`Total de pessoas Desenvolvedoras Frontend Mulheres (Cis e Trans): ${front}`);
console.log(`Total de pessoas Desenvolvedoras Mobile Homens (Cis e Trans) Maiores de 40 anos: ${mobile}`);
console.log(`Total de pessoas Desenvolvedoras Fullstack Não Binários menores de 30 anos: ${full}`);
console.log(`Total de pessoas que responderam a pesquisa: ${total}`);
console.log(`Média das idades: ${media}`);




// let teste1, teste2, teste3;

// teste1 = teste2 = teste3 = 0;

// console.log(teste1, teste2, teste3)