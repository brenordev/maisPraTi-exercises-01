# 💻 Lista de Exercícios 01 - Estruturas básicas.
#### Curso Desenvolvedor Full Stack Júnior | +PraTI e Codifica

Este repositório contém a entrega de **15 exercícios** desenvolvidos durante o curso de **Desenvolvedor Full Stack Júnior** da [+PraTi](https://maisprati.com.br/).

Os exercícios estão escritos em **JavaScript** e utilizam o pacote `prompt-sync` para entrada de dados no terminal.

---

## 📁 Estrutura das pastas

```
/
├── exercises
|   ├── ex1.js
|   ├── ex2.js
|   ├── ex3.js
|   ├── ...
├── package.json
└── README.md
```


## ⚙️ Pré-requisitos

Antes de rodar os exercícios, é necessário ter os seguintes itens instalados:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- Um terminal (CLI), como:
  - Terminal padrão do sistema (CMD, PowerShell, Terminal.app, etc.)
  - Terminal de código (como o terminal integrado do VS Code ou Git Bash)
- [Git](https://git-scm.com/) (opcional, mas recomendado para clonar o repositório)

## Instalação

Faça o clone deste repositório ou download do mesmo.

Para clonar o projeto em sua máquina entre sua pasta por um terminal (CLI).
```
cd sua-pasta
git clone https://github.com/brenordev/maisPraTi-exercises-01
```
#### Instalando dependências
Entre na pasta do projeto e faça a instalação das dependências com **npm**, se feito o download é necessário fazer instalação das dependências

```
cd maisPraTi-exercises-01
npm install 
 
```
## Executar exercícios
Entre na pasta **exercises** e execute o comando node mais o nome do arquivo referente a cada exercicio para executar o programa.
```
cd exercises
node ex1.js
 
// saída: Digite um número inteiro: 
```

## Questões
    1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
    utilizando uma estrutura de controle if.

    2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
    adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
    controle if-else.

    3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
    "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

    4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
    Utilize switch-case para implementar a lógica de cada opção selecionada.

    5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
    determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
    utilizando if-else.

    6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
    formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
    Isósceles, escaleno ou eqüilátero.
    Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
    Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
    Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
    Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

    7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
    forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
    compradas, calcule e escreva o valor total da compra.

    8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
    e escreve-los em ordem crescente.

    9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
    utilizando um loop for.

    10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

    11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
    utilizando um loop for.

    12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
    10) utilizando um loop for.

    13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
    a média aritmética desses números.

    14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
    utilizando um loop for ou while.

    15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
    Fibonacci utilizando um loop for.
