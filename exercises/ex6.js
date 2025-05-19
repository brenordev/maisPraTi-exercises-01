// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

const prompt = require("prompt-sync")();

let a = prompt("Digite um valor para o 1º lado do triangulo: ")
let b = prompt("Digite um valor para o 2º lado do triangulo: ")
let c = prompt("Digite um valor para o 3º lado do triangulo: ")
let A = Number(a)
let B = Number(b)
let C = Number(c)

if (A < B + C && B < A + C && C < A + B) {

    if (A === B && B === C) {
        console.log("Trinângulo Equilátero: Todos os lados são iguais.")
    }
    else if (A === B || A === C || B === C) {
        console.log("Triângulo Isósceles: Dois lados iguais.")
    } else {
        if (A !== B && B !== C && A !== C)
            console.log("Triânguo Escaleno: Todos os lados diferentes.")
    }
} else {
    console.log("Valores informados não formam um triângulo")
}