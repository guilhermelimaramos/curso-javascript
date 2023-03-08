const vet = []
var maior = 0
var menor = 10000
var soma = 0


function analisar() {
    num = document.querySelector('#txtn')
    n = Number(num.value)
    ana = document.querySelector('#selana')
    res.innerHTML = ''



    for (var y in vet) {
        if (n == vet[y]) {
            alert('Esse número já foi adcionado')
        }

    }
    if (n < 0 || n > 100 || num.value.length == 0) {
        alert('Digite um número válido')
    } else {
        var item = document.createElement('option')
        item.text = `Valor ${n} Adcionado`
        ana.appendChild(item)
        vet.push(`${n}`)

    }
}

function finalizar() {
    var res = document.querySelector('#res')
    res.innerHTML = ''



    for (const m in vet) {
        if (vet[m] > maior) {
            maior = vet[m]
        }
        if (vet[m] < menor) {
            menor = vet[m]
        }
    }

    for (var i; i <= vet.length; i++) {
        soma += Number(vet[i])
    }



    res.innerHTML += ` <p>Ao todo, temos ${vet.length} números adicionados</p>`
    res.innerHTML += ` <p>O maior número é o: ${maior}</p>`
    res.innerHTML += ` <p>O menor número é o: ${menor}</p>`
    res.innerHTML += ` <p>A soma dos valores é: ${soma}</p>`



}