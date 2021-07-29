Number.prototype.entre = function(inicio, fim) {
  return this >= inicio && this <= fim
}

const imprimirResultado = function(nota) {
  if (nota.entre(5, 10)) {
    console.log('Aprovado')
    //
  } else if (nota.entre(3, 5)) {
    console.log('Recuperacao')
  } else {
    console.log('Reprovado')
  }
}
imprimirResultado(6)
imprimirResultado(3)
imprimirResultado(1)