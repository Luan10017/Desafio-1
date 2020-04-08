//Primeira parte do desafio IMC.

/*Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.

Comece criando constantes para armazenar o nome, peso, altura e sexo de uma pessoa, por exemplo:*/


const nome = 'Luan'
const peso = 70
const altura = 1.75
const sexo = 'M'

/* A partir desses dados armazene em uma constante chamada imc o cálculo do índice de massa corporal definido pela fórmula abaixo:

peso / (altura * altura); */

const imc = peso/(altura*altura)


/* Baseado no valor obtido através desse cálculo exiba as seguintes mensagens:

SE o IMC maior ou igual a 30: Carlos você está acima do peso;
SE o IMC menor que 29.9: Carlos você não está acima do peso; */

if (imc >= 30)
    console.log(`${nome} você está acima do peso`)
else
    console.log(`${nome} você não está acima do peso`)



//Segunda parte do desafio  Aposentadoria

/* Crie um programa para calcular a aposentadoria de uma pessoa.
Comece criando constantes para armazenar nome, sexo, idade e contribuicao(em anos), por exemplo: */

const nome = "Luan"
const sexo = "M"
const idade = 26
const contribuicao = 15

