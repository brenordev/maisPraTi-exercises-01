// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.
const prompt = require("prompt-sync")();

const input = prompt("Digite um número inteiro: ");
const number = parseInt(input);

if (isNaN(number) || !Number.isInteger(number)) {
  console.log("Erro: Valor inserido não é um número inteiro");
} else {
  if (number % 2 === 0) {

    console.log(`O número ${number} é PAR!`);
  } else {

    console.log(`O número ${number} é ÍMPAR!`);
  }
  console.log(
    "\nVocê pode executar o programa novamente para verificar outro número."
  );
}

// FINALIZADO