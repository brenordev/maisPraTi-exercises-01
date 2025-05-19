// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

const prompt = require("prompt-sync")();

let number
let sum = 0
let counter = 0
let arrNumbers = []

do {
    number = parseFloat(prompt("Digite números decimais e para encerrar digite 0: "))
    if (!isNaN(number) && number !== 0) {
        sum += number
        counter++
        arrNumbers += number + " "
    }
} while (number != 0) {
    let average = parseFloat(sum / counter)
    console.log(`A média dos números ( ${arrNumbers} ) é ${average}`)
}
