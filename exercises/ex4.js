const prompt = require("prompt-sync")();

let options = (
    `\nEscolha entre as opções: 
1: Ver o antecessor e sucessor de um número.
2: Tabuada de um número até 10.
3: Adicione seu nome na lista de presença`);

console.log(options)

let input = prompt("Digite o número de uma das opções acima: ").trim()
let selectedNumber = Number(input)

if (isNaN(selectedNumber) || ![1, 2, 3].includes(selectedNumber)) {
    console.log("Erro, digite 1, 2 ou 3 para escolher uma das opções")
} else {
    switch (selectedNumber) {
        case 1:
            let input = prompt("Digite um número e veja seu antecessor e sucessor: ")
            let number = Number(input)
            console.log(`\nO número ${number} tem como seu antecessor o número ${number - 1} e ${number + 1} como sucessor.`)
            break;

        case 2:
            let input2 = prompt("Digite um número inteiro para ver a tabuada dele até 10: ")
            let number2 = Number(input2)

            if (isNaN(number2) || number2 == "") {
                console.log("Digite um número inteiro válido para a operação!")
            } else {
                for (let i = 0; i <= 10; i++) {
                    let result = (i * number2)
                    console.log(`${number2} x ${i} = ${result}`)
                }
            }
            break;

        case 3:
            let input3 = prompt("Adicione seu nome na lista de presença: ")
            let name = input3
            let listOfName = ['Breno Ribeiro', 'Flavin do Pneu', 'Gustavo Guanabara',
                'Edu da Codifica',
            ]

            listOfName.push(name)
            console.log(listOfName)
            break;
        default:
            console.log("Erro, execute o programa novamente.")
    }
}

// FINALIZADO