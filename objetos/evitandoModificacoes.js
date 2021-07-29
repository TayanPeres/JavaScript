// Object.preventExtensions
const produto = Object.preventExtensions({
  nome: 'Produto',
  valor: 100,
  tag: 'promoção'
})
console.log('Extensivel:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha é branca'
delete produto.tag
console.log(produto)

//Object.seal
const pessoa = {nome: 'juliana', idade: 35}
Object.seal(pessoa)
console.log('Sealed:', Object.isSealed(pessoa))

pessoa.sobrenome = 'silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)


//Objet.freeze = selado + valores constantes
