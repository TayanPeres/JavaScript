//par nome/valor
const saudacao = 'Opa' //Contexto léxico 1

function exect() {
    const saudacao = 'falaa' //Contexto léxico 2
    return saudacao
  }

//objetos são grupos aninhados de pares name/valor
const cliente = {
  nome: 'Pedro',
  idade: 32,
  peso: 90,
  endereco: {
    lagradouro: 'Rua das rosas',
    numero: 10,
  }
}
console.log(saudacao)
console.log(exect())
console.log(cliente)