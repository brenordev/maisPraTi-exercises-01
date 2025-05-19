// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

const prompt = require("prompt-sync")();

let input = parseInt(prompt("Digite um número: "))
let number = Number(input)
let fat = 1

if (isNaN(input) || input < 0) {
    console.log("Erro, digite um número válido e maior que 0")
} else {
    for (let i = 1; i <= number; i++) {
        fat *= i
    }
    console.log(`O fatorial do número ${number} é ${fat}`)
}
