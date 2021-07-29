const valor = 'Global'

function minhaFuncao() {
  const valor = 'Local'
  minhaFuncao()
}
exec()