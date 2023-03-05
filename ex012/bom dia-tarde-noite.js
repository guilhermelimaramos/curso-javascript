var agora = new Date()

var hora = agora.getHours()

console.log(`Agora são extas ${hora} hora(s)`)

if (hora < 12) {
    console.log('Bom Dia!!!')

} else if (hora < 18) {
    console.log('Bom Tarde!!')
} else {
    console.log('Boa Noite!!')
}