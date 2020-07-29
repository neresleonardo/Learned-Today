//Armazenando uma função dentro de uma variavel

const imprimirSoma = function (a,b)  {
    console.log(a + b)
}
imprimirSoma(2,7)

// armazenando um arro em uma variavel

const soma = (a,b) => {
    return a + b 
}
console.log(soma(4,10))

//Retorno Implicito

const subtração = (a,b) => {
    return a - b 
}

console.log(subtração(100,50))

//Retrono Implicto de uma linha

const subtracao1 = (a,b) =>  a - b

console.log(subtracao1(10,5))