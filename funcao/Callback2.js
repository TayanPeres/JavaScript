const notas = [ 1, 3,  5, 6, 8, 10, 9, 7,]
// sem callback
const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)

// com callback
notasBaixas2 = notas.filter(function(nota){
    return nota < 7
})
console.log(notasBaixas2)

// com arrow e callback
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)
