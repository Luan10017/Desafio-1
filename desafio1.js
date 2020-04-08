//Primeira parte do desafio IMC.

/*Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.

Comece criando constantes para armazenar o nome, peso, altura e sexo de uma pessoa, por exemplo:*/


/* const nome = 'Luan'
const peso = 70
const altura = 1.75
const sexo = 'M' */

/* A partir desses dados armazene em uma constante chamada imc o cálculo do índice de massa corporal definido pela fórmula abaixo:

peso / (altura * altura); */

//const imc = peso/(altura*altura)


/* Baseado no valor obtido através desse cálculo exiba as seguintes mensagens:

SE o IMC maior ou igual a 30: Carlos você está acima do peso;
SE o IMC menor que 29.9: Carlos você não está acima do peso; */

/* if (imc >= 30)
    console.log(`${nome} você está acima do peso`)
else
    console.log(`${nome} você não está acima do peso`)
 */


//Segunda parte do desafio  Aposentadoria

/* Crie um programa para calcular a aposentadoria de uma pessoa.
Comece criando constantes para armazenar nome, sexo, idade e contribuicao(em anos), por exemplo: */

const nome = "Silvana";
const sexo = "F";
const idade = 40;
const contribuicao = 40;

/* Baseado nos valores acima utilize as fórmulas a seguir para calcular se a pessoa está apta ou não para se 
aposentar e no fim imprima uma mensagem em tela.

O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;
Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do homem precisa ser de 
no mínimo 95 anos, enquanto a mulher precisa ter no mínimo 85 anos na soma;
Com base nas regras acima imprima na tela as mensagens:

SE a pessoa estiver aposentada: Silvana, você pode se aposentar!;
SE a pessoa NÃO estiver aposentada: Silvana, você ainda não pode se aposentar!; */

const regra = idade + contribuicao;

/* if (sexo == 'M') {
    if (idade >= 95) {
      console.log(`1`)
    } else {
      console.log(`2`)
    }
  } else {
    console.log(`3`)
  } */

if (sexo == 'M'){
    if(regra >=95){
        console.log(`${nome}, você pode se aposentar!`);
    }else{
        console.log(`${nome}, você não pode se aposentar!`);
    }
}else{
    if(regra >=85){
        console.log(`${nome}, você pode se aposentar!`);
    }else{
        console.log(`${nome}, você não pode se aposentar!`);
    }
}