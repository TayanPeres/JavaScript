const nome = 'Rebeca'
const sobrenome = 'Gonçalves'
const concatenacao = 'olá' + nome + '!'

//Template String
const concatenacao2 = `olá ${nome} ${sobrenome}!`
console.log(concatenacao, concatenacao2)

//UpperCase => reansformar para letra maiuscula
const up = texto => texto.toUpperCase()
console.log(`Ei.. ${up('cuidado')}!`)