const personagens = document.querySelectorAll('.personagem');
const btsPersonagens = document.querySelectorAll('.botao-personagem');

btsPersonagens.forEach((botao, index) => {
    botao.addEventListener('click', () => {
        const botaoSelecionado = document.querySelector('.botao-personagem.ativo');
        botaoSelecionado.classList.remove('ativo');

        botao.classList.add('ativo')

        personagens.forEach(personagem => {
            personagem.classList.add('hidden');
        })

        const personagemSelecionado = personagens[index];
        
        personagemSelecionado.classList.remove('hidden');
    })
})

const checkbox = document.querySelector('#checkbox')
const imgSolELua = document.querySelector('.container-sol-lua img')

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('body-alternativo')

    if(document.body.classList.length === 1) {
        imgSolELua.setAttribute('src', 'imgs/icon-sol.png')
    }else {
        imgSolELua.setAttribute('src', 'imgs/icon-lua.png')
    }
})

