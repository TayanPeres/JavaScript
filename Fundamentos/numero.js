const peso1 = 1.0
const peso2 = Number('2.0')

const avaliacao1 = 9.00
const avaliacao2 = 6.00

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

//toFixed => Como queremos deixar a resposta com duas casas decimais após a vírgula
//toString => para converter para string 
//type => para saber o tipo da variável
console.log(media.toFixed(2))
console.log(media.toString())
