'use strict'

// Para doar sangue é necessário ter entre 18 e 69 anos. Pessoas com idade entre 60 e 69 anos, só podem doar sangue se não for a sua primeira doação. Escreva um Algoritmo que leia via teclado o nome do doador (string), a idade (número inteiro) do doador e se já fez outras doações de sangue (boolean). Conforme as Regras para a doação de sangue citadas acima, mostre na tela se o doador está Apto ou Não Apto para doar sangue.

const leia = require('readline-sync');
let nome, idade, primeiraDoacao;

nome = leia.question('Digite o nome do doador: ');

idade = leia.questionInt('Digite a idade do doador: ')

if(idade >= 60 && idade <= 69) {
  let resposta = leia.keyIn('Primeira doacao? S para "sim" e N para "nao": ');
  resposta.toLowerCase() === 's' ? primeiraDoacao = true : primeiraDoacao = false;
};

console.log(`${nome} ${(idade >= 18 && idade <= 59) || primeiraDoacao === false ? '' : 'não '}está apto para doar sangue!`);
