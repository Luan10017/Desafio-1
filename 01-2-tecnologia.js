/* Desafios para fortalecer alguns conceitos, entre eles:

Funções e métodos;
Estruturas de repetição;
Escopos.
Usuários e tecnologias
Crie um programa que armazena um array de usuários (objetos), cada usuário tem um nome e suas tecnologias 
(novo array), por exemplo: */

const usuarios = [
    { nome: 'Carlos', tecnologia: ['HTML', 'CSS'] },
    { nome: 'Jasmine', tecnologia: ['JavaScript', 'CSS'] },
    { nome: 'Carlos', tecnologia: ['HTML', 'Node.js'] },
    { nome: 'Luan', tecnologia: ['HTML','CSS','Node.js','Python'] }
];


/* for(let i=0; i < usuarios.length; i++){
    console.log(`${usuarios[i].nome} trabalha com as tecnologias ${usuarios[i].tecnologia}`)
} */

function checaSeUsuarioUsaCSS(usuario) {
    for (let tecnologia of usuario.tecnologia) {
        if (tecnologia == 'CSS')
            return true
    }
    return false
}

for (let i=0; i< usuarios.length; i++){
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i])
    if(usuarioTrabalhaComCSS)
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
}


//Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários: