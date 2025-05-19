// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

const prompt = require("prompt-sync")();

console.log("\nAs maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze.")

let input = prompt("Quantas maças foram compradas? ")

const appleValue = [0.25, 0.30]

const amountOfApple = Number(input)
if (isNaN(input) || amountOfApple <= 0) {
    console.log("Valor inserido não é aceitável, digite um valor maior que 0.");
} else if (amountOfApple <= 11) {
    console.log(`O valor total de ${amountOfApple} maça(s) é de R$ ${amountOfApple * appleValue[1]}`);
} else {
    console.log(`O valor total de ${amountOfApple} maça(s) é de R$ ${amountOfApple * appleValue[0]}`);
}
