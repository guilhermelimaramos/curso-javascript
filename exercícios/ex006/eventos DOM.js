var area = window.document.querySelector('#area')
area.addEventListener('click'.clicar)
area.addEventListener('mouseenter'.entrar)
area.addEventListener('mouseout'.sair)

function clicar() {
    var area = document.querySelector('#area')
    area.innerText = 'Clicou!!!'
    area.style.background = 'red'
}

function entrar() {
    var area = document.querySelector('#area')
    area.innerText = 'Entrou!!!'
}

function saiu() {
    var area = document.querySelector('#area')
    area.innerText = 'Saiu!!!'
    area.style.background = 'green'
}