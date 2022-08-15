//exericios node.js

const red = '\033[31m'

//exercicio 01/desafio

// if (process.argv.length === 4) {
//     console.log(`Olá ${process.argv[2]}! Você tem ${Number(process.argv[3])} anos. Em sete anos você terá ${Number(process.argv[3]) + 7} anos`)
// } else {
//     console.log(red +  'Esperava 2 parâmetros só recebi um.')
// }

//exercicio 02

// let operacao = process.argv[2]
// let response

// if (process.argv.length === 5) {
//     if (operacao === 'add') {
//         response = Number(process.argv[3]) + Number(process.argv[4])
//     }
//     if (operacao === 'sub') {
//         response = Number(process.argv[3]) - Number(process.argv[4])
//     }
//     if (operacao === 'mult') {
//         response = Number(process.argv[3]) * Number(process.argv[4])
//     }
//     if (operacao === 'div') {
//         response = Number(process.argv[3]) / Number(process.argv[4])
//     }
//     console.log(response)
// } else {
//     console.log(red + 'Esperava 3 parâmetros só recebi um.')
// }

//exercicio 03

// let tarefas = ['responder emails']
// tarefas.push(process.argv[2])
// console.log(tarefas)