const aluno = [
   {nome: 'Joao', nota: 7.9},
   {nome: 'Maria', nota: 6.5},
]   

//Imperativo
let total1 = 0
for (let i = 0; i < aluno.length; i++) {
  total1 += aluno[i].nota
}
console.log(total1 / aluno.length)

//Declarativo
let getNota = aluno => aluno.nota
let soma = (total, atual) => total + atual
let total2 = aluno.map(getNota).reduce(soma)
console.log(total2 / aluno.length)

