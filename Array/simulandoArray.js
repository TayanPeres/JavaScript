const quaseArray = {0: 'Rafael', 1: 'Pedro', 2: 'João'}
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', {
  value: function () {return Object.values(this) },
  enumerable: false
})
console.log(quaseArray[0])

const meuArray = ['Rafael', 'Pedro', 'João']
console.log(quaseArray.toString(), meuArray)