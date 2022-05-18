//EXCERCICIO LAÇOS

//EXCERCICIO DE INTERPRETAÇÃO DE CODIGOS

//QUESTÃO 01

//somando o indice, que é zero, mais um até atingir o limite de 5 repetições. 
//o resultado é 10

//questão 02

//A)todos os numeros após o 18

//B)sim, utilizando um prompt para selecionar o indice e uma variavel para armazenar 
//o mesmo

//QUESTÃO 03

//  *
//  **
//  ***
//  ****

//EXCERCICIOS DE ESCRITA DE CODIGO

//QUESTÃO 01

// let quantidadePets = +prompt('Diga quantos pets você tem:')
// let pets = []
// if (quantidadePets === 0) {
//     console.log('Que pena! você pode adotar um pet')

// } else {
//     for (let i = 0; i < quantidadePets; i++) {
//         pets.push(prompt('Qual o nome do seu pet'))
//     }
//     console.log(pets)
// }

//QUESTÃO 02
//A)
const array = [80, 30, 75, 50, 103, 120, 150, 140]

function imprimeArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
// imprimeArray(array)
//B)
function divideArray(div) {
    for (let i = 0; i < div.length; i++) {
        console.log(div[i] / 10)
    }
}
// divideArray(array)
let arraysPar = []
function parArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            arraysPar.push(arr[i])
        }
    }
    console.log(arraysPar)
}
// parArray(array)
let arrayString = []
function stringArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        arrayString.push(`o elemento do index ${i} é ${arr[i]}`)
        console.log(arrayString[i])
    }
}
// stringArray(array)
let maior = 0
let menor = 100000000000000000
function maiorMenor(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (maior < arr[i]) { maior = arr[i]
        }
        if (menor > arr[i]) { menor = arr[i]
        }
    }
    console.log(`O maior número é ${maior} e o menor é ${menor}`)
}
// maiorMenor(array)