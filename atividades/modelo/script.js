function carregar() {
    var msg = document.querySelector('#msg')
    var img = document.querySelector('#foto')
    var data = new Date()
    var hora = data.getHours()
    hora = 20

    msg.innerHTML = `Agora são ${hora} hora(s)`

    if (hora < 12) {
        //BOM DIA
        img.src = 'manhã.png'
    } else if (hora < 18) {
        //BOA TARDE
        img.src = 'tarde.png'
    } else {
        //BOA NOITE
        img.src = 'noite.png'
    }
}