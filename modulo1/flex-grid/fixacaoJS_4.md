```js
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
   let contador = 0
    for (const numero of arrayDeNumeros) {
      if(numero === numeroEscolhido) {
          contador++
      } 
}
if (contador === 0){
    return 'Número não encontrado'
}
return `O número ${numeroEscolhido} aparece ${contador}x`
}
