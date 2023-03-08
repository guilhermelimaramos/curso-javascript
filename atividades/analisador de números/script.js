const vet = []

function analisar() {
    num = document.querySelector('#txtn')
    n = Number(num.value)
    ana = document.querySelector('#selana')
    var res = document.querySelector('#res')
    res.innerHTML = ''

    if (isNumber(num.value) && !inLista(num.value, vet)) {
        var item = document.createElement('option')
        item.text = `Valor ${n} Adcionado`
        vet.push(`${Number(n)}`)
        ana.appendChild(item)
        res.innerHTML = ''

    } else {
        alert('Número Inválido ou já inserido!!!')
    }

    num.value = ''
    num.focus() //deixa o mouse selecionado no input

}

function isNumber(n) {
    if (n > 0 && n <= 100) {
        return true
    } else
        return false
}

function inLista(n, l) {
    if (l.indexOf(n) != -1) {
        return true
    } else {
        return false
    }
}


function finalizar() {
    let maior = Number(vet[0])
    let menor = vet[0]
    let pos = 0
    let soma = 0
    let media = 0
    res.innerHTML = ''


    for (const pos in vet) {
        soma += Number(vet[pos])
        if (vet[pos] > maior) {
            maior = vet[pos]
        }
        if (vet[pos] < menor) {
            menor = vet[pos]
        }
    }
    media = soma / vet.length



    res.innerHTML += `<p> Ao todo, temos ${vet.length} números adicionados </p>`
    res.innerHTML += ` <p>O maior número é o: ${maior}</p>`
    res.innerHTML += ` <p>O menor número é o: ${menor}</p>`
    res.innerHTML += ` <p>A soma dos números é: ${soma}</p>`
    res.innerHTML += `<p>A média dos números é: ${media}</p>`



}