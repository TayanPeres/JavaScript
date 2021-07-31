Array.prototype.reduce3 = function(callback, valorInicial) {
  const indeceInicial = valorInicial ? 0 : 1 
  let acomulador = valorInicial || this[0]
  for (let i = 1; i < this.length; i++) {
    acomulador = callback(acomulador, this[i], i, this)
  }
  return acomulador
}
const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6]
/console.log(nums.reduce3(soma))