// novo recurso do ES2015
const pessoa = {
    nome: 'Fulano',
    idade: 30,
    endereço: {
        cidade: 'São Paulo',
        bairro: 'Jardim'
    }
}
//fazendo a destructuring
const { nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)