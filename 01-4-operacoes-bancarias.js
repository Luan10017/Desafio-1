/* Intro
Crie um programa para realizar operações bancárias na conta de um usuário.

Comece criando um objeto com o nome do usuário, suas transações e saldo.

As transações (transactions) devem iniciar como um array vazio [] e o saldo (balance) em 0 (zero). */

const user = {
    name: 'Mariana',
    transactions: [],
    balance: 0
};

/* Adicionar transações
Crie uma função createTransaction para adicionar uma nova transação no array de transações 
de um usuário, essa função deve receber como parâmetro um objeto de transação que tem o seguinte formato: */

/* O type pode ser credit para créditos e debit para débitos da conta do usuário.

Quanto uma transação for do tipo credit ela deve também somar o valor do crédito no saldo (balance) do usuário.

Se for uma transação do tipo debit ela deve subtrair o valor do débito no saldo (balance) do usuário.

Dica.: Você pode usar o método user.transactions.push(transaction) para adicionar um novo item no array de transações. */

function createTransaction (transaction) {
    user.transactions.push(transaction)

    if(transaction.type === 'credit'){
        user.balance = user.balance + transaction.value
    } else {
        user.balance = user.balance - transaction.value
    }
}

/* Relatórios
Crie uma função chamada getHigherTransactionByType que recebe como parâmetro o tipo de transação credit/debit, percorre 
as transações do usuário e retorna o objeto da transação de maior valor com aquele tipo: */

function getHigherTransactionByType (type) {
    let higherTransaction 
    let higherValeu = 0 

    for(let transaction of user.transactions){
        if (transaction.type == type && transaction.value > higherValeu) {
            higherValeu = transaction.value
            higherTransaction = transaction
        } 
    }

    return higherTransaction
}

//Crie uma função chamada getAverageTransactionValue que retorna o valor médio das transações de um usuário independente do seu tipo:

function getAverageTransactionValue (value) {
    let sum = 0
    
    for (let transaction of user.transactions){
        sum += transaction.value
    }

    return sum / user.transactions.length
}

/* Crie uma função chamada getTransactionsCount que retorna o número de transações de cada tipo 
credit/debit, o retorno da função deve ser um objeto e seguir exatamente como o modelo apresentado abaixo: */

function getTransactionsCount () {
    let count = {
        credit: 0,
        debit: 0,
    }

    for (let transaction of user.transactions){
        if (transaction.type === 'credit'){
            count.credit++
        } else {
            count.debit++
        }
    }
    return count
}

createTransaction({ type: 'credit', value: 600 })
createTransaction({ type: 'credit', value: 120 })
createTransaction({ type: 'debit', value: 80 })
createTransaction({ type: 'debit', value: 30 })

console.log(user.balance)

console.log(getHigherTransactionByType('credit')) 
console.log(getHigherTransactionByType('debit')) 


console.log(getAverageTransactionValue()) 

console.log(getTransactionsCount()) 