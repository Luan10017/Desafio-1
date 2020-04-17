/* Desafios para fortalecer alguns conceitos, entre eles:

Funções e métodos;
Estruturas de repetição;
Escopos.
Usuários e tecnologias
Crie um programa que armazena um array de usuários (objetos), cada usuário tem um nome e suas tecnologias 
(novo array), por exemplo: */

const usuarios = [
    {
        nome: 'Luan',
        tecnologias: ['Python','HTML','CSS','JavaScrip']
    },
    {
        nome: 'Carlos',
        tecnologias: ['Node.js','JavaScrip','PHP']
    },
    {
        nome: 'Tuane',
        tecnologias: ['C#' ,'.NET','HTML','CSS','JavaScrip']
    },
]

//Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários:

for (let i=0; i < usuarios.length; i++){
    console.log(`${usuarios[i].nome} Trabalha com ${usuarios[i].tecnologias}`)
}