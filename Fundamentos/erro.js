function tratarErrorELancar(erro) {
  //throw manda a mensagem de erro para o console
  // throw new Error('...');
  // throw 10
  // throw true
 // throw 'mensagem'
   throw {
     nome: erro.name,
     msg: erro.message,
     date: new Date
   }

}
function imprimirNome(obg) {
  //é um bloco de codigo que dentro dele tem codigo que pode gerar erro
  try {
    console.log(obg.nome.toUpperCase() + '!!!')
    //se gerou erro, cai dentro do catch e dentro do catch trata o erro,
    //vai executar a função dentro do throw
  } catch (e) {
    tratarErrorELancar(e)
    //
  } finally {
    console.log('final')
  }
}
const obj = { nome: 'Fulano' }
imprimirNome(obj)