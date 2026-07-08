// Selecionando os elementos da página
const modalOverlay = document.querySelector('.modal-overlay');
const modalFechar = document.querySelector('.modal-fechar');
const modalTitulo = document.querySelector('.modal__titulo');
const modalCapa = document.getElementById('imagem-capa');
const modalDemandante = document.getElementById('demandante');
const modalDescricao = document.getElementById('descricao');
const modalHTML = document.getElementById('html');
const modalCSS = document.getElementById('css');
const modalJS = document.getElementById('javascript');
const modalPython = document.getElementById('python');
const modalPHP = document.getElementById('php');
const modalSQL = document.getElementById('sql');
const divModalImagens = document.getElementById('div-imagens');
const modalImagemUm = document.getElementById('modal-image-um');
const modalImagemDois = document.getElementById('modal-image-dois');
const modalImagemTres = document.getElementById('modal-image-tres');
const modalLink = document.getElementById('modal-link')
const projetoLink = document.getElementById('projeto-link')
const divPomodoro = document.getElementById('pomodoro');
const divQuiz = document.getElementById('quiz');
const divInkwell = document.getElementById('inkwell');
const divTenrikyo = document.getElementById('tcc-etec');
const divAluraLivros = document.getElementById('aluralivros');
const divAluraMais = document.getElementById('aluramais');
const divCEP = document.getElementById('cep');

// Atribuindo dados a cada projeto

function aluraMais() {
    modalTitulo.textContent = 'Alura+';
    modalCapa.src = './assets/aluramais.png';
    modalDemandante.textContent = 'Curso de HTML e CSS da Alura';
    modalDescricao.textContent = 'Landing page da plataforma Alura Plus.';
    modalHTML.style.display = 'block';
    modalCSS.style.display = 'block';
    modalJS.style.display = 'none';
    modalPython.style.display = 'none';
    modalPHP.style.display = 'none';
    modalSQL.style.display = 'none';
    divModalImagens.style.display = 'none';
    modalLink.href = 'https://github.com/JgSantos12/aluraplus';
    projetoLink.style.display = 'none';
}

function aluraLivros() {
    modalTitulo.textContent = 'AluraBooks';
    modalCapa.src = './assets/aluralivros.png';
    modalDemandante.textContent = 'Curso de HTML e CSS da Alura';
    modalDescricao.textContent = 'Landing page de uma livraria online desenvolvida durante curso da Alura. Conta com um menu hamburguer responsivo, carrossel de últimos lançamentos e mais vendidos, seção de tópicos visitados recentemente, campo de cadastro de email para newsletter e layout responsivo para mobile e desktop.';
    modalHTML.style.display = 'block';
    modalCSS.style.display = 'block';
    modalJS.style.display = 'block';
    modalPython.style.display = 'none';
    modalPHP.style.display = 'none';
    modalSQL.style.display = 'none';
    divModalImagens.style.display = 'flex';
    modalImagemUm.src = './assets/aluralivros1.png';
    modalImagemDois.src = './assets/aluralivros2.png';
    modalImagemTres.style.display = 'none'
    modalLink.href = 'https://github.com/JgSantos12/aluralivros';
    projetoLink.style.display = 'none';
}

function tenrikyo() {
    modalTitulo.textContent = 'Bazar Tenrikyo';
    modalCapa.src = './assets/tenrikyo.png';
    modalDemandante.textContent = 'TCC - Curso Técnico de Desenvolvimento de Sistemas';
    modalDescricao.textContent = 'Sistema web para gerenciamento de doações de um bazar, permitindo o cadastro de campanhas, doações e controle de itens. Sistema desenvolvido em conjunto com Mamoru Tanio, Matheus Santos Rodrigues e Vinicius da Silva Alves de Oliveira.';
    modalHTML.style.display = 'block';
    modalCSS.style.display = 'block';
    modalJS.style.display = 'block';
    modalPython.style.display = 'none';
    modalPHP.style.display = 'block';
    modalSQL.style.display = 'block';
    divModalImagens.style.display = 'flex';
    modalImagemUm.src = './assets/tenrikyo1.png';
    modalImagemDois.src = './assets/tenrikyo2.png';
    modalImagemTres.src = './assets/tenrikyo3.png'
    modalLink.href = 'https://github.com/JgSantos12/tcc-etec';
    projetoLink.style.display = 'none';
}

function inkwell() {
    modalTitulo.textContent = 'Inkwell - Gerenciador de Notas';
    modalCapa.src = './assets/inkwell.png';
    modalDemandante.textContent = 'Projeto pessoal';
    modalDescricao.textContent = 'Um aplicativo de notas minimalista desenvolvido como projeto de portfólio. Com o Inkwell é possível criar, editar, deletar e visualizar notas, separar e filtrar por tags criadas pelo usuário, buscar notas por título entre outras funcionalidades.';
    modalHTML.style.display = 'block';
    modalCSS.style.display = 'block';
    modalJS.style.display = 'block';
    modalPython.style.display = 'block';
    modalPHP.style.display = 'none';
    modalSQL.style.display = 'block';
    divModalImagens.style.display = 'flex';
    modalImagemUm.src = './assets/inkwell1.png';
    modalImagemDois.src = './assets/inkwell2.png';
    modalImagemTres.style.display = 'none';
    modalLink.href = 'https://github.com/JgSantos12/inkwell';
    projetoLink.style.display = 'none';
}

function quiz() {
    modalTitulo.textContent = 'Quiz - Conhecimentos Gerais';
    modalCapa.src = './assets/quiz.png';
    modalDemandante.textContent = 'Projeto pessoal';
    modalDescricao.textContent = 'Quiz interativo de conhecimentos gerais desenvolvido com HTML, CSS e JavaScript puro. Possui 5 perguntas de conhecimentos gerais com 4 alternativas por pergunta. Além disso conta comfeedback visual de acerto e erro e pontuação final.';
    modalHTML.style.display = 'block';
    modalCSS.style.display = 'block';
    modalJS.style.display = 'block';
    modalPython.style.display = 'none';
    modalPHP.style.display = 'none';
    modalSQL.style.display = 'none';
    divModalImagens.style.display = 'flex';
    modalImagemUm.src = './assets/quiz1.png';
    modalImagemDois.src = './assets/quiz2.png';
    modalImagemTres.style.display = 'none';
    modalLink.href = 'https://github.com/JgSantos12/quiz';
    projetoLink.href = 'https://jgsantos12.github.io/quiz/';
}

function pomodoro() {
    modalTitulo.textContent = 'Pomodoro Timer';
    modalCapa.src = './assets/pomodoro.png';
    modalDemandante.textContent = 'Projeto pessoal';
    modalDescricao.textContent = 'Um temporizador Pomodoro desenvolvido com HTML, CSS e JavaScript puro. Possui controle de timer por botões, troca automática entre modos, aviso sonoro ao encerrar o tempo, controle manual ou automático do tempo de cada modo.';
    modalHTML.style.display = 'block';
    modalCSS.style.display = 'block';
    modalJS.style.display = 'block';
    modalPython.style.display = 'none';
    modalPHP.style.display = 'none';
    modalSQL.style.display = 'none';
    divModalImagens.style.display = 'flex';
    modalImagemUm.src = './assets/pomodoro1.png';
    modalImagemDois.src = './assets/pomodoro2.png';
    modalImagemTres.style.display = 'none';
    modalLink.href = 'https://github.com/JgSantos12/pomodoro-timer';
    projetoLink.href = 'https://pomodoro-timer-tawny-ten.vercel.app/';
}

function cep() {
    modalTitulo.textContent = 'Buscador de CEP';
    modalCapa.src = './assets/buscadorCEP.png';
    modalDemandante.textContent = 'Projeto pessoal';
    modalDescricao.textContent = 'Projeto de portfólio, desenvolvido com HTML, CSS e JavaScript puros. Consiste num site simples, que consome a API ViaCEP, nele o usuário digita o CEP a ser buscado e receberá como resposta o logradouro, bairro, localidade e UF do CEP.';
    modalHTML.style.display = 'block';
    modalCSS.style.display = 'block';
    modalJS.style.display = 'block';
    modalPython.style.display = 'none';
    modalPHP.style.display = 'none';
    modalSQL.style.display = 'none';
    divModalImagens.style.display = 'flex';
    modalImagemUm.src = './assets/buscadorCEP1.png';
    modalImagemDois.src = './assets/buscadorCEP2.png';
    modalImagemTres.style.display = 'none';
    modalLink.href = 'https://github.com/JgSantos12/Buscador-de-CEP';
    projetoLink.href = 'https://jgsantos12.github.io/Buscador-de-CEP/';
}



// Abrindo o modal

function abrirModal() {
    modalOverlay.style.display = 'flex';
}

function fecharModal() {
    modalOverlay.style.display = 'none';
}

// Eventos para fechar modal

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) fecharModal();
})
modalFechar.addEventListener('click', fecharModal);

// Eventos para abrir modal

// Buscador de CEP

divCEP.addEventListener('click', cep);
divCEP.addEventListener('click', abrirModal);

// Pomodoro Timer

divPomodoro.addEventListener('click', pomodoro);
divPomodoro.addEventListener('click', abrirModal);

// Quiz - Conhecimentos Gerais

divQuiz.addEventListener('click', quiz);
divQuiz.addEventListener('click', abrirModal);

// Inkwell - Gerenciador de Notas

divInkwell.addEventListener('click', inkwell);
divInkwell.addEventListener('click', abrirModal);

// Bazar Tenriyko Paulista - Gerenciamento de Doações

divTenrikyo.addEventListener('click', tenrikyo);
divTenrikyo.addEventListener('click', abrirModal);

// AluraBooks

divAluraLivros.addEventListener('click', aluraLivros);
divAluraLivros.addEventListener('click', abrirModal);

// Alura+

divAluraMais.addEventListener('click', aluraMais);
divAluraMais.addEventListener('click', abrirModal);
