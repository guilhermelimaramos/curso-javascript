let amigo = {
    nome: 'Guilherme',
    sexo: 'Masclino',
    peso: 70,
    engordar(p = 0) {
        this.peso += p
    }
}
console.info(`Nome: ${amigo.nome}`)
console.info(`Sexo: ${amigo.sexo}`)
console.info(`Peso: ${amigo.peso}kg`)

amigo.engordar(5)
console.log(`Porém depois do natal ele está pensando ${amigo.peso}kg`)
console.log(`${amigo.nome.toUpperCase()}`)