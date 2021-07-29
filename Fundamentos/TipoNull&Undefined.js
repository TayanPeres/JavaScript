let valor //não inicializada
console.log(valor) //undefined

valor = null //ausencia de valor
console.log(valor) //null
// console.log(valor.toString()) //Erro

const produto = {}
console.log(produto.preco) //undefined) 
console.log(produto)

produto.preco = 3.50
console.log(produto) //3.50

produto.preco = undefined //evite atribuir undeined
console.log(produto.preco) 
console.log(!!produto.preco)

console.log(produto) 

produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto)
