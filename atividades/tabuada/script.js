function calcular() {
    var txtn = document.querySelector('#txtn')
    var n1 = Number(txtn.value)
    var res = document.querySelector('#res')
    var tab = document.querySelector('#seltab')



    if (txtn.value.length == 0) {
        alert('Digite um número válido')
    } else
        tab.innerHTML = ''
    for (var i = 1; i < 11; i++) {
        var item = document.createElement('option')
        item.text = `${n1} x ${i} = ${n1*i}`
        item.value = `tab${i}`
        tab.appendChild(item)
    }

}