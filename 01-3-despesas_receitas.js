/* Soma de despesas e receitas
Crie um programa que calcula a soma de receitas e despesas de usuários e no fim retorna o saldo (receitas - despesas).

Utilize o array de usuários abaixo: */

const usuarios = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
  ]

/* Percorra o array de usuários e para cada usuário chame uma 
função chamada calculaSaldo que recebe como parâmetro as receitas e despesas do usuário: */



function calculaSaldo (receitas, despesas){
    const somaReceitas = somaNumeros(receitas)
    const somaDespesas = somaNumeros(despesas)

    return somaReceitas-somaDespesas
}

function somaNumeros (numeros){
    let soma = 0
    for(let numero of numeros){
        soma = soma + numero
    }
    return soma
}

for (let usuario of usuarios){ //Foi criada uma variável usuario para cada obj em usuarios. Por isso é preciso passar usuario nas funções 
    const saldo = calculaSaldo(usuario.receitas, usuario.despesas) //Se eu passar usuarios.receitas vai dar erro. Tem que ser usuario

    if (saldo > 0){
        console.log(`O usuário ${usuario.nome} possui saldo POSITIVO de ${saldo.toFixed(2)}`)
    }else {
        console.log(`O usuário ${usuario.nome} possui saldo NEGATIVO de ${saldo.toFixed(2)}`)
    }
}
