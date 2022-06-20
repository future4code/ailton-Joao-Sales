// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a, b) => a - b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    return array.filter((arr) => arr % 2 === 0)
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    return array.filter((arr) => arr % 2 === 0).map(arr => arr ** 2)
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let bigger = -Infinity
    for (let arr of array) {
        if (arr > bigger) {
            bigger = arr
        }
    }
    return bigger
}


// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let bigger
    let minor
        if (num1 > num2) {
            bigger = num1
            minor = num2
        } else {
            bigger = num2
            minor = num1
        } 
    let divisor
    if (bigger % minor === 0) {
        divisor = true
    } else if(bigger % minor !== 0) {
        divisor = false
        }

    let diferencas = bigger - minor
    return {maiorNumero: bigger, maiorDivisivelPorMenor:divisor, diferenca:diferencas}
}



// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
let pair = []
for (let i =0; pair.length < n; i++){
    if (i % 2 === 0){
        pair.push(i)
    }
}return pair
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoA === ladoC) {
        return "Equilátero"
    } else if (ladoA === ladoB && ladoA !== ladoC || ladoA === ladoC && ladoA !== ladoB || ladoB === ladoC && ladoB !== ladoA) {
        return "Isósceles"
    } else if (ladoA !== ladoB && ladoA !== ladoC) {
        return "Escaleno"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let firstBig = -Infinity
    let secBig = -Infinity
    let firstMinor = +Infinity
    let secMinor = Infinity

    // let result =[secBig, secMinor]

    for (let num of array) {
        if (num > firstBig) {
            firstBig = num
        } if (num < firstMinor) {
            firstMinor = num
        }
    }
    for (let num of array) {
        if (num > secBig && num !== firstBig) {
            secBig = num
        } if (num < secMinor && num !== firstMinor) {
            secMinor = num
        }
    }
    let result = [secBig, secMinor]
    return result
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    filme = { ...filme }
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}


// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    return {
        ...pessoa,
        nome: "ANÔNIMO"
    }
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  const pessoasAut = pessoas.filter((autorizadas) =>{
      return autorizadas.altura >= 1.5 && autorizadas.idade >=15 &&
      autorizadas.idade < 60
  })
  return pessoasAut
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const pessoasNaoAuto = pessoas.filter((dados) => {
        return dados.idade <=14 || dados.idade > 60 || dados.altura < 1.5
    })
    return pessoasNaoAuto
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    let cart = contas.map((ObjCliente) => {
        for (let compra of ObjCliente.compras) {
            ObjCliente.saldoTotal = ObjCliente.saldoTotal - compra;
        }
        return {
            ...ObjCliente,
            saldoTotal: ObjCliente.saldoTotal,
            compras: []
        }
    })
    return cart;
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    consultas.sort(function(item, indice){
        let a = item.nome.toUpperCase()
        b = indice.nome.toUpperCase()
        return a ==b? 0 : a > b ? 1 : -1
    })
    return consultas;
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}