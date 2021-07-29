function Carro(velocidadeMaxima = 200, delta = 5) {
  //atributo privado
  let velicidadeAtual = 0
  //metodo público
  this.acelerar = function () {
    if (velicidadeAtual+ delta <= velocidadeMaxima) {
      velicidadeAtual += delta
    } else {
      velicidadeAtual = velocidadeMaxima
    }
  }
  //metodo público
  this.getVelocidadeAtual = function () {
    return velicidadeAtual
  }
}
const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(300, 10)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())