// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const prompt = require("prompt-sync")();
let input = prompt("Digite o valor da nota:");
let grade = Number(input);

if (isNaN(grade) || grade < 0 || grade > 10) {
  console.log("Erro, digite um valor para a nota de 0 e 10")
} else if (grade < 5) {
  console.log("❌ Reprovado")
} else if (grade === 5 || grade === 6) {
  console.log("⚠️ Recuperação")
} else if (grade >= 6 || grade <= 10) {
  console.log("✅ Aprovado")
}

// FINALIZADO