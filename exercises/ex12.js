// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
// 10) utilizando um loop for.

const prompt = require("prompt-sync")();

let input = prompt("Digite um número inteiro para ver a tabuada dele até 10: ").trim()
let number = Number(input)

if (isNaN(input) || input == "") {
    console.log("Erro, insira um valor válido!")
} else {
    for (let i = 0; i <= 10; i++) {
        let result = (i * number)
        console.table(`${number} x ${i} = ${parseFloat(result.toFixed(2))}`)
    }
}
