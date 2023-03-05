function carregar() {
    var msg = document.querySelector('#msg')
    var img = document.querySelector('#imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} hora(s).`
    if (hora < 12) {
        //BOM DIA
        img.src = 'image/manhã.png'
        document.body.style.background = '#A67841'

    } else if (hora < 18) {
        //BOA TARDE
        img.src = 'image/tarde.png'
        img.alt = 'foto tarde'
        document.body.style.background = '#512E46'
    } else {
        //BOA NOITE
        img.src = 'image/noitemavi.png'
        img.alt = 'foto noite'
        document.body.style.background = '#363473'
    }
}