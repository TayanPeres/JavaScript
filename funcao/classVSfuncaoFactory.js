class Pessoa {
  constructor(nome) {
    this.nome = nome
  } 
  Falar() {
    console.log(`Meu nome é {this.nome}`)
  }
}

const p1 = new Pessoa('Fulano')
p1.Falar()

const criarPessoa = nome => {
  return {
    falar: () => console.log(`Meu nome é ${nome}`)
  }
}
const p2 = criarPessoa('Beltrano')
p2.falar()
