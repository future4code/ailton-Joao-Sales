
const operadores = () => {
    let operacao = process.argv[2]
    let response
    if (operacao === 'add') {
        response = Number(process.argv[3]) + Number(process.argv[4])
    }
    if (operacao === 'sub') {
        response = Number(process.argv[3]) - Number(process.argv[4])
    }
    if (operacao === 'mult') {
        response = Number(process.argv[3]) * Number(process.argv[4])
    }
    if (operacao === 'div') {
        response = Number(process.argv[3]) / Number(process.argv[4])
    } 
    return response
}

console.log(operadores())