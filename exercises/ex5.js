// Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

const prompt = require("prompt-sync")();

console.log("\n")
console.log("Calcular Índice de Massa Corporal")

let weightInput = prompt("Digite seu peso em Kgs: ");
let heightInput = prompt("Digite sua altura em Metros: ");
const weight = Number(weightInput);
const height = Number(heightInput);

const imcValue = (weight / height ** 2).toFixed(2)
if (imcValue < 18.49) {
    console.log(`Com IMC de ${imcValue} sua categoria de peso é de baixo peso.`)
} else if (imcValue < 24.99) {
    console.log(`Com IMC de ${imcValue} sua categoria de peso é de peso normal.`)
} else if (imcValue >= 25 && imcValue <= 29.99) {
    console.log(`Com IMC de ${imcValue} sua categoria de peso é de sobrepeso.`)
} else {
    console.log(`Com IMC de ${imcValue} sua categoria de peso é de obesidade.`)
}

// FINALIZADO