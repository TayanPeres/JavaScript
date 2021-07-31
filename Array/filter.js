const produtos = [
  {nome: 'Notebook', preco: 2000, fragil: true},
  {nome: 'Ipad', preco: 2200, fragil: true},
  {nome: 'Copo de vidro', preco: 100, fragil: true},
  {nome: 'Copo de plastico', preco: 20, fragil: false}
]
console.log(produtos.filter(function(p){
  //return p.fragil === true
 // return p.preco < 1000
  return false
}))
const caro = produto => produto.preco >= 500
const fragil =produto => produto.fragil === true
console.log(produtos.filter(caro))