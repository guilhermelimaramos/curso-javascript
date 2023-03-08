function fatorial(n) {
    let fat = 1
    for (var c = n; c > 0; c--) {
        fat *= c
    }
    return fat
}

console.log(fatorial(5));