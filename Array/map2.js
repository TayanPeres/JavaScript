const carrinho = [
  '{"nome": "Borracha", "preco": 3.45}',
  '{"nome": "Caderno", "preco": 2.50}',
  '{"nome": "Estojo", "preco": 1.25}',
  '{"nome": "Livro", "preco": 18.99}'
]
//Retonar um array apenas com os preços
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)