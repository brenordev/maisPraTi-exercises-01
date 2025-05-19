// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

const prompt = require("prompt-sync")();

console.log("Digite 5 números para calcular soma total deles")
let total = 0
for (let i = 1; i <= 5; i++) {
    let input = prompt(`Digite um número: `).trim()
    let number = Number(input)

    if (isNaN(input) || input == "") {
        console.log("Digite um número válido")
        i--
    } else {
        total += number
    }
}
console.log(total)
