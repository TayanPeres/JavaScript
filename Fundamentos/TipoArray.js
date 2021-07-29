const valores = [1, 2, 3, 4, 5]
console.log(valores[0], valores[2])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)
//push => adicionar um novo valor
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

//pop => remove o ultimo valor
console.log(valores.pop())
delete valores[0]
console.log(valores)
console.log(typeof valores)
