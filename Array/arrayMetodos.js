const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
//pop remove o ultimo elemento do array
pilotos.pop()
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

//shift remove o primeiro elemento do array
pilotos.shift()
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

//splice pode adicionar e remover elementos do array
//adiconar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)
//remover
pilotos.splice(3, 1)
console.log(pilotos)

//retorna um novo array
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

//pegar um pedaço do array
const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)