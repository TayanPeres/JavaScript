/*callback => passa uma função para outra função,e quando o evento acontecer,
essa função que passou vai ser disparada e chamada de volta */
const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
  console.log(`${indice + 1}. ${nome}`)
}
// para cada elemento que encontrar, vai chamar de volta a função 
fabricantes.forEach(imprimir)
fabricantes.forEach(function(a) {
  console.log(a)
})