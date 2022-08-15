type client = {
  cliente: string;
  saldoTotal: number;
  debitos: number[];
};

const clientes: client[] = [
  { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, debitos: [] },
];

//1. função que mapeia apenas o array de valores dos debitos e soma todos 
// para retornar um valor sólido com o auxilio do reduce

const debtSum = clientes.map((item) => {
  return item.debitos.reduce((a, b) => a + b, 0);
});

//2. função que mapeia o objeto iteiro da constante cliente e substitui
// os valores do saldoTotal puxaondo o valor atual subtraindo com a função 
// debtSum, logo após faz um filter verificando se o saldoTotal é menor que 
// zero, para que assim sejam retornados os clientes com valores negativados

const debtClients = clientes
  .map((item, index) => {
    return {
      cliente: item.cliente,
      saldoTotal: item.saldoTotal - debtSum[index],
      debitos: [],
    };
  })
  .filter((item) => {
    if (item.saldoTotal < 0) {
      return item;
    }
  });

console.log(debtClients);
