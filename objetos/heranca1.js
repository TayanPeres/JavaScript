const ferrari = {
    modelo: 'Ferrari',
    velMax : 324
}
const volvo = {
  modelo: 'Volvo',
  velMax : 300
}
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(ferrari.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)

function meuObjeto() {}
console.log(typeof Object, typeof meuObjeto)
console.log(Object.prototype, meuObjeto.prototype)