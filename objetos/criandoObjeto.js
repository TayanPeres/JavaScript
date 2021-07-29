// usando a notação literal
const obj1 = {}
console.log(obj1)

//Objeto em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// função construtoras
function Produto(nome, preco, desc) {
  this.nome = nome
  this.getPrecoComDesconto = () => {
    return preco * (1 - desc) 
  }
}
const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Borracha', 5.99, 0.10)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// função factory
function criarFuncionario(nome, salarioBase, faltas) {
  return {
    nome, 
    salarioBase,
    faltas,
    getSalarioTotal () {
      return (salarioBase / 30) * (30 - faltas)
    }
  }
}
const f1 = criarFuncionario('Fulano', 7000, 10)
const f2 = criarFuncionario('Beltrano', 11000, 20)
console.log(f1.getSalarioTotal(), f2.getSalarioTotal())

//Objet.create
const filha = Object.create(null)
filha.nome = 'Maria'
console.log(filha)

//transformar o json em objeto
const fromJSON =  JSON.parse('{"info": "Sou um json"}')
console.log(fromJSON.info)