function calcular() {
    var txtvel = document.querySelector('#txtvel')
    var res = document.querySelector('#res')
    var vel = Number(txtvel.value)
    res.innerHTML = `Sua velocidade é de <strong>${vel}Km/h</strong>`
    res.innerHTML += `, Dirija sempre com o cinto de segurança`
    if (vel > 60) {
        res.innerHTML += `<p>Você excedeu o limite máximo de velocidade, <strong>Multado!!</strong></p>`
    }

}