// Dividindo Arrays

/*

Separar um array em partes com slice(); // cortar


*/

const nomes = ["Lara","Isadora"," Clara"," Isabel", " Ariana", "Bianca",
"Íris","Rafael","António","Kelvin"]

const sala1 = nomes.slice(0, nomes.length/2)
const sala2 = nomes.slice(nomes.length/2)

console.log(`Alunos da sala 1: ${sala1}` );
console.log(`Alunos da sala 1: ${sala2}` );

/*
Na linha da sala 1 o Léo passou para nosso slice, que é cortar em inglês,
então esse método vai cortar a array começando no índice 0, e onde ele 
termina é o segundo parâmetro que está sendo dado no slice. Nós passamos
nomes.lenght/2. Embora isso seja um pedaço de código, no final ele é um
número, porque o resultado de nomes.lenght é um número que representa a
de de elementos que tem na array.


*/