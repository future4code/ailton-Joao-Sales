//EXERCICIOS DE OBJETOS

//EXERCICIOS DE INTERPRETAÇÃO DE CODIGOS

//QUESTÃO 01

//A) matheus nachtergaele
//virginia cavendish
//canal globo horario 14h

//QUESTÃO 02

//A)juca
//juba
//jubo

//B)clona um objeto especifico

//QUESTÃO 03

//A)false
//undefined

//B)o priemeiro console indicou q a primeira propriedade pedida é o boolean false
//a segunda retornou undefined, pois não existe uma propriedade chamada altura


//EXERCICIOS DE ESCRITA DE CODIGO

//QUESTÃO 01

const user = {
    name: 'gabriel',
    nickName: ['gabe', 'gordo', 'bibs']
}

function print(imprimir) {

    console.log(`Eu sou ${imprimir.name}, mas pode me chamar de: ${imprimir.nickName[0]},
     ${imprimir.nickName[1]} ou ${imprimir.nickName[2]}`)

}
// print(user)

//B)

const novosApelidos = {
    ...user,
    nickName: ['jão', 'irineu', 'irineu2']
}

// print(novosApelidos)


//QUESTÃO 02
//A)
const pizzaiolo = {
    nome: 'micael',
    idade: 21,
    profissao: 'pizzaiolo'
}
const frontEnder = {
    nome: 'irineu',
    idade: 25,
    profissao: 'frontEnder'
}

//B)

function array(details) {
    return [details.nome, details.nome.length, details.idade,
    details.profissao, details.profissao.length]

}
// console.log(array(pizzaiolo))
// console.log(array(frontEnder))

//QUESTÃO 03

//A)
const emptyCar = []

//B)
const maca = {
    nome: 'maçã', disponibilidade: true
}

const banana = {
    nome: 'banana', disponibilidade: true
}

const morango = {
    nome: 'morango', disponibilidade: false
}

function add(adc) {
    return emptyCar.push(adc)
}
// add(maca)
// add(banana)
// add(morango)

// console.log(emptyCar)

//DESAFIO

//DESAFIO 01

// function perguntas() {
//     const questions = {
//         nome: prompt('digite seu nome'),
//         profissao: prompt('digite sua profissão'),
//         idade: prompt('digite sua idade')

//     }
//     console.log(questions)
// }
// perguntas()

//DESAFIO 02
const filme1 = {
    movie: 'Orgulho e Preconceito',
    year: 2005
}
const filme2 = {
    movie: 'Os Simpsons',
    year: 2007
}

function filmes(film1, film2) {
    console.log('O primeiro filme foi lançado antes do segundo?',(film1.year < film2.year))
    console.log('O primeiro filme foi lançado no mesmo ano do segundo',(film1.year === film2.year))
    return film1, film2
}
// filmes(filme1, filme2)

//DESAFIO 03

function auxilio(aux) {
    aux.disponibilidade = !aux.disponibilidade
    return console.log(aux)
}
// auxilio(maca)
// auxilio(banana)
// auxilio(morango)

// console.log(emptyCar)









