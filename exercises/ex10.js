// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

const prompt = require("prompt-sync")();

let input = prompt("Digite um número inteiro: ");
let number = Number(input);
let response = "";

if (input == "" || !Number.isInteger(Number(input))) {
    console.log("Digite um número inteiro válido!")
} else {
    for (let i = 0; i < 10; i++) {
  response += number + " ";
}
console.log(response)
}
