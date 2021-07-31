const alunos = [
  {nome: 'José', nota: 7.5, bolsista: false},
  {nome: 'João', nota: 6.5, bolsista: true},
  {nome: 'Maria', nota: 9.5, bolsista: false},
  {nome: 'José', nota: 8.0, bolsista: true},
]
console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
  console.log(acumulador, atual)
  return acumulador + atual
}, 10)
console.log(resultado)