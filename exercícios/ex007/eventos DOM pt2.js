function soma() {
    var tn1 = window.document.querySelector('#txtn1')
    var tn2 = window.document.querySelector('#txtn2')
    var result = document.querySelector('#res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    res.innerHTML = `A Soma entre ${n1} + ${n2} = <strong>${s}</strong>`

}