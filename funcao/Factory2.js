// nome e preco é parametro
function criarProduto(nome, preco) {
  return {
    nome, 
    preco,
    desconto: 0.1
  }
}
console.log(criarProduto('Notebook', 2110))
console.log(criarProduto('Ipad', 11109))