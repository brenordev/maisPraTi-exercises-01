// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
// adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
// controle if-else.
const prompt = require("prompt-sync")();

const input = prompt("Digite uma idade: ");
let age = parseInt(input);

if (age < 0 || age === "" || age !== parseInt(input)) {
  console.log(`Erro, preencha com uma idade válida`);
} else if (age <= 11) {
  age === 1
    ? console.log(`${age} ano é uma criança`)
    : console.log(`${age} anos é uma criança`);
} else if (age <= 17) {
  console.log(`${age} anos é um adolescente`);
} else if (age <= 59) {
  console.log(`${age} anos é um adulto`);
} else {
  console.log(`${age} anos é um idoso`);
}

// FINALIZADO