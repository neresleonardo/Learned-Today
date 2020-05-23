// Função sem retorno 

function inprimirSoma(a, b) {

    console.log(a + b)
}

inprimirSoma(2,4)

// --------------------------------------------------------

// Função com retorno

function soma(a,b = 0) {
    return a + b 
}

console.log(soma(4,5))
console.log(soma(4))