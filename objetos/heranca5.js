console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverso = function() {
  return this.split('').reverse().join('')
}
console.log('Escola Cod3r'.reverse())

Array.prototype.first = function() {
  return this[0]
}
console.log(['1', '2', '3'].first())
console.log(['a', 'b', 'c'].first())

String.prototype.toString = function() {
  return 'acabou'
}
console.log('Escola'.reverse())