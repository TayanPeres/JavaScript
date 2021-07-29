function soma() {
  let soma = 0
  for(i in arguments) {
    soma += arguments[i]
  }
  return soma
}
console.log(soma())
console.log(soma(1,2,3,4,5))
console.log(soma(1,6,7, 8,  10))
console.log(soma(1,7, 8, 11, "Teste"))