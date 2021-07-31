Array.prototype.filter2 = function(callback) {
  const newArray = []
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArray.push(this[i])
    }
  }
  return newArray
}

const produtos = [
  {nome: 'Notebook', preco: 2000, fragil: true},
  {nome: 'Ipad', preco: 2200, fragil: true},
  {nome: 'Copo de vidro', preco: 100, fragil: true},
  {nome: 'Copo de plastico', preco: 20, fragil: false}
]
const caro = produto => produto.preco >= 2200
const fragil =produto => produto.fragil === true
console.log(produtos.filter2(caro).filter2(fragil))