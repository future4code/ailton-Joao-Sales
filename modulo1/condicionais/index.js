//EXERCICIOS DE CONDICIONAIS

//INTERPRETAÇÃO DE CODIGOS

//QUESTÃO 01
//A) UMA CONDICIONAL COM UMA PARA DESCOBRIR SE O NUMERO É IMPAR OU PAR.

//B)NUMEROS PARES.

//C)NUMEROS IMPARES.

//QUESTÃO 02 

//A)PARA INDICAR O VALOR DA FRUTA QUE O USUARIO ESCOLHER.

//B)O preço da fruta  Maçã  é  R$  2.25.

//C)O preço da fruta  Pêra  é  R$  5.

//QUESTÃO 03

//A)pedindo um numero ao usuario.

//B)Esse número passou no teste. caso fosse -10 não retornaria nada.

//C)mensagem is not defined, esse erro foi retornado pois a variavél mensagem
//esta dentro do escopo da condicional, e não no escopo global.

//EXCERCICIOS DE INTERPRETAÇÃO DE CODIGO

//QUESTÃO 01

// let canDrive = Number(prompt('digite sua idade'))

// if (canDrive >= 18) {
//     console.log('você pode dirigir')
// } else {
//     console.log('você não pode dirigir')
// }

//QUESTÃO 02

// let turnoEstudo = prompt(`Digite M se você estuda no periodo matutino
//            V se estuda no periodo vespertino 
//            N se estuda no periodo noturno`)

// if (turnoEstudo === 'M') {
//     console.log('Bom dia!')
// } else if (turnoEstudo === 'V') {
//     console.log('Boa tarde!')
// } else if (turnoEstudo === 'N') {
//     console.log('Boa noite!')
// }

//QUESTÃO 03


// let turnoEstudo2 = prompt(`Digite M se você estuda no periodo matutino
//            V se estuda no periodo vespertino 
//            N se estuda no periodo noturno`)

// const retornaHorario = (hora) => {
//     switch (hora) {
//         case 'M':
//             return `Bom dia!`
//         case 'V':
//             return `Boa tarde!`
//         case 'N':
//             return `Boa Noite!`
//         default:
//             return `Periodo incorreto`
//     }
// }

// console.log(retornaHorario(turnoEstudo2))

//QUESTÃO 04

//fantasia
//>15

// const generoFilme = prompt('Qual o genero de filme iremos assistir?')
// const valorIngresso = Number(prompt('Digite o valor do ingresso'))

// if (generoFilme === 'fantasia' && valorIngresso < 15) {
//     console.log('Bom filme!')
// } else {
//     console.log('Escolha outro filme :(')
// }

//DESAFIOS

//DESAFIO 01

// const generoFilme = prompt('Qual o genero de filme iremos assistir?')
// const valorIngresso = Number(prompt('Digite o valor do ingresso'))
// const snack = prompt('Qual snack você quer comprar?')

// if (generoFilme === 'fantasia' && valorIngresso < 15) {
//     console.log('Bom filme!')
//     console.log(`Aproveite seu ${snack}`)
// } else {
//     console.log('Escolha outro filme :(')
// }






