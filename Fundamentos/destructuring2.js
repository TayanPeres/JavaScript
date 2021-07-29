function rand({min = 0, max = 100}) {
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}
console.log(rand({min: 50, max: 40}))


//destructuring com array
function rand(min = 0, max = 100) {
  if(min > max) [min, max] = [max, min]
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}
console.log(rand(50, 40))