```javascript

function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
const comiss = 100 * qtdeCarrosVendidos
const salario = comiss + 2000
return salario + (valorTotalVendas * 0.05)
}

