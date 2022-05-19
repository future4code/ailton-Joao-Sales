//EXCERCICIOS FUNÇÕES DE ARRAYS

//EXCERCICIOS DE INTERPRETAÇÃO DE CODIGO

//QUESTÃO 01

//A) Primeiro aparecerá o objeto, após isso, o indice, e então a array

//{nome: 'Amanda Rangel', apelido: 'Mandi'} 0 (3) [{…}, {…}, {…}]
//{nome: 'Laís Petra', apelido: 'Laura'} 1 (3) [{…}, {…}, {…}]
//{nome: 'Letícia Chijo', apelido: 'Chijo'} 2 (3) [{…}, {…}, {…}]

//QUESTÃO 02

//A)apenas os nomes
//['Amanda Rangel', 'Laís Petra', 'Letícia Chijo']

//QUESTÃO 03

//A)Apenas os dois primeiros objetos
//{ nome: "Amanda Rangel", apelido: "Mandi" },
//{ nome: "Laís Petra", apelido: "Laura" },

//EXERCICIOS DE ESCRITA DE CODIGO

//QUESTÃO 01

const pets = [
    { nome: "Lupin", raca: "Salsicha" },
    { nome: "Polly", raca: "Lhasa Apso" },
    { nome: "Madame", raca: "Poodle" },
    { nome: "Quentinho", raca: "Salsicha" },
    { nome: "Fluffy", raca: "Poodle" },
    { nome: "Caramelo", raca: "Vira-lata" },
]
//A)
const nomeDogs = pets.map((item, index, array) => {
    return item.nome
})
// console.log(nomeDogs)
//B)
const salsichasDogs = pets.filter((item, index, array) => {
    return item.raca === "Salsicha"
})
// console.log(salsichasDogs)
//C)

const discountPoodles = pets.filter((item, index, array) => {
    return item.raca === "Poodle"
}).map((item) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`
})

// console.log(discountPoodles)
// QUESTÃO 02

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]
//A)
const nomeProducts = produtos.map((item, index, array) => {
    return item.nome
})
//  console.log(nomeProducts)
//B)
const discountProducts5 = produtos.map((item, index, array) => {
    return { nome: item.nome, preço: (item.preco * 0.95).toFixed(2) }
})
// console.log(discountProducts5)
//C)
const drinksProducts = produtos.filter((item, index, array) => {
    return item.categoria === "Bebidas"
})
// console.log(drinksProducts)
//D)
const searchYpe = produtos.filter((item, index, array) => {
    return item.nome.includes('Ypê')
})
//  console.log(searchYpe)
//E)
const phraseYpe = produtos.filter((item, index, array) => {
    return item.nome.includes('Ypê')
}).map((item) => {
    return `Compre ${item.nome} por ${item.preco}`
})
// console.log(phraseYpe)

//DESAFIOS

//DESAFIO 01

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]
 const pokes = pokemons.map((item, index, array) => {
     return item.nome
 }).sort()
//  console.log(pokes)

 //DESAFIO 02

 