const alunos = [
  {nome: 'José', nota: 7.5, bolsista: false},
  {nome: 'João', nota: 6.5, bolsista: true},
  {nome: 'Maria', nota: 9.5, bolsista: false},
  {nome: 'José', nota: 8.0, bolsista: true},
]

//desafio 1: todos sao bolsistas?
const TodosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(TodosBolsistas))

//desafio 2: algum aluno é bolsistas?
const AlgumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(AlgumBolsista))

