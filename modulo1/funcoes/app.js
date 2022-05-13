//Exercicios de interpretação de codigo

// QUESTÃO 01

//A. 10, 50

//B. não aparece nada no console.

//QUESTÃO 02

//A. retorna true caso o usuario escreva "cenoura", e falso, caso não escreva

//B. true, true, true


//////////////////////////////////////////////////////////////////////////////////
//     Exercicios de escrita de codigo
/////////////////////////////////////////////////////////////////////////////////

//QUESTÃO 01

//A.
// function phrase(){
// console.log(Eu sou gabriel, tenho 20 anos, moro em recife e sou estudante)

// }
// phrase()

//B.
// function phrase(){

// function phrase(name, age, city, work){
//      name = prompt("Qual é o seu nome?")
//      age = Number(prompt("Qual a sua idade?"))
//      city = prompt("Onde você mora?")
//      work = prompt("Qual a sua profissão?")

// console.log(`Eu sou ${name}, tenho ${age} anos, moro em ${city} e sou ${work}`)
   
// }
//  phrase(name, age, city, work)

//QUESTÃO 02

//A.
// function soma(num1, num2) {
//     num1 = 15
//     num2 = 45
//     soma = num1 + num2
//     console.log(soma)
// }

// soma()

//B.
// function biggerNumber(num1, num2) {
//     num1 = 65
//     num2 = 45
//     biggerNumber = num1 >= num2
//     console.log(biggerNumber)
// }

// biggerNumber()

//C.
// function pairNumber(num1, num2) {
//     num1 = 60
//     num2 = 2
//     pairNumber = num1 % num2 === 0
//     console.log(pairNumber)

//     return pairNumber
// }

// pairNumber()

//D.

// const fraseMaiuscula = (texto) => {

//     let tamanhoFrase =  texto.length
// //vai contar os numeros
//     let fraseMaiuscula = texto.toUpperCase()
// //deixa em maiusculo
//     return `A frase ${fraseMaiuscula} tem o tamanho de ${tamanhoFrase} letras`
// }
//  console.log(fraseMaiuscula('O rato roeu a roupa do rei de roma'))

//QUESTÃO 03

const num1 = Number(prompt("digite um numero"))
const num2 = Number(prompt("digite outro numero"))

function soma(num1, num2) {

    const soma = num1 + num2
 
    return soma
    }
    
    console.log(soma(num1, num2))

    function subtracao(num1, num2) {

     const  subtracao = num1 - num2
     
        return subtracao
        }
        
        console.log(subtracao(num1, num2))
    
        function multiplicação(num1, num2) {

            multiplicação = num1 * num2
         
            return multiplicação
            }
            
            console.log(multiplicação(num1, num2))

            function divisao(num1, num2) {

               const divisão = num1 / num2
             
                return divisão
                }
                
                console.log(divisao(num1, num2))
