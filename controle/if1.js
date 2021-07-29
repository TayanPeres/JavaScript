function BoaNoticia(nota) {
  if(nota >= 5) {
    console.log('Aprovado com ' + nota)
  }
}
BoaNoticia(6)
BoaNoticia(8)

function Verdade(valor) {
  if(valor) {
    console.log('é verdade..' + valor)
  }
}
Verdade()
Verdade(null)
Verdade(undefined)
Verdade(NaN)
Verdade('')
Verdade(0)
Verdade(-1)
Verdade(' ')
Verdade('?')
Verdade([])
Verdade([1, 2])
Verdade({})