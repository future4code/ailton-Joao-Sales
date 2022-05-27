``` javascript
function calculaPrecoTotal(quantidade) {
 let apples = 1.30 * quantidade
 let applesDisc = 1 * quantidade
  if(quantidade < 12) {
    return apples
  }if(quantidade >= 12){
    return applesDisc
  }
}