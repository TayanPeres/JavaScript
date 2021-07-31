console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = [ 'Bia', 'Carlos', 'Ana' ]
console.log(aprovados[0])
console.log(aprovados[1])

aprovados[3] = 'Paulo'
aprovados.push('Bruno')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = [ 'Bia', 'Carlos', 'Ana' ]
/*incluir e excluir elemento,
primeiro parametro é o indice e o segundo é a quantidade de elementos que quer excluir */
aprovados.splice(1, 1, 'Elemento1', 'Elemento2')
console.log(aprovados)