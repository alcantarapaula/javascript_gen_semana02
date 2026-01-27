"use strict"

// Variáveis
let nome = "Paula";
let profissao = "Pessoa Desenvolvedora";
let salarioBruto = 3500.90;
const bonus = 0.05;
let numero;


console.log(numero);

console.log("O tipo da variável nome é: ", typeof(nome));


if(salarioBruto > 1621) {
  let mensagem = "Salário maior que o salário mínimo";
  console.log(mensagem);
};


console.log("Salário Líquido: ", 
  new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(salarioBruto + (salarioBruto* bonus)));