var corpo = window.document.body
var p1 = document.getElementsByTagName('p')[0];
var p2 = document.getElementsByTagName('p')[1];
document.write(p1.innerText)
p1.style.color = 'gray'
corpo.style.background = 'black'
document.write(`${p2.innerHTML}`)
    /* var d = document.getElementById('msg')
    d.style.background = 'blue'
    var f = document.getElementsByName(1msg1)[0]
    f.innerText = 'Olá' */
var d = document.querySelector('div#msg')
d.style.color = 'brown'
d.style.background = 'white'