const Pessoa = {
  saudacao: 'bom dia! ',
  falar() {
    console.log(this.saudacao)
  }
}
Pessoa.falar() // => bom dia!

const falar = Pessoa.falar
falar()

const falarDePessoa = Pessoa.falar.bind(Pessoa)
falarDePessoa() // => bom dia!