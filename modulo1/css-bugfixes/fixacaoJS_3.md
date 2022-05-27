```js
function calculaNota(ex, p1, p2) {
  let pesos = (ex * 1 + p1 * 2 + p2 * 3) / (1 + 2 + 3);
  if (pesos >= 9) {
    return "A";
  }
  if (pesos < 9 && soma >= 7.5) {
    return "B";
  }
  if (pesos < 7.5 && soma >= 6) {
    return "C";
  }
  if (pesos < 6) {
    return "D";
  }
}
