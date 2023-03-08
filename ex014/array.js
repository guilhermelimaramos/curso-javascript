const num = [5, 8, 2, 7, 15]
num[5] = 28
num.push(0)



console.info(`Nosso vetor é o: ${num}`)
console.info(`O vetor tem ${num.length} elementos`)
console.log(`O vetor na posição 4 é o: ${num[3]}`)

/*for (var i = 0; i < num.length; i++) {
    console.log(`${num[i]}`)
}*/

for (const i in num) {
    console.info(` A posição ${i} recebe: ${num[i]}`)
}

const pos = num.indexOf(0) //Retorna a posição do elemento, caso não tenha, retorna -1

if (pos == -1) {
    console.error('valor não encontrado')
} else {
    console.log(`A posição dele é ${pos}`)
}