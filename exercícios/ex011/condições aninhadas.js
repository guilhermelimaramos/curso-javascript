var idade = 71


if (idade < 0) {
    console.log('Idade Inválifa')
} else {
    if (idade < 16) {
        console.log(`Não vota`)
    } else if (idade < 18) {
        console.log('Voto Opcional')
    } else if (idade <= 18) {
        console.log('Voto Obrigatório')
    } else if (idade >= 60) {
        console.log('Voto Opcional')
    }
}