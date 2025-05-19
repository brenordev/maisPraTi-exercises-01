// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

const prompt = require("prompt-sync")();

let value1 = Number(prompt("Digite o primeiro número: "));
let value2 = Number(prompt("Digite o segundo número (diferente do primeiro): "));

if (value2 === value1 || isNaN(value1)) {
    console.log("Erro digite um número válido e que seja diferente do primeiro")
} else {
    let numbers = [value1, value2]
    let ascendingOrder = numbers.sort((value1, value2) => value1 - value2)
    console.log(numbers.sort())
}
