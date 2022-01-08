// Atualizando lista

const listaDeChamada = ["Lara","Isadora"," Clara"," Isabel", " Ariana", "Bianca",
"Íris","Rafael","António","Kelvin"]


// tenho que remover a Isabela e a Clara e colocar o Rodrigo
listaDeChamada.splice(1,2, `Rodrigo`)

console.log("lista de chamada atualizada :", listaDeChamada);

/*
Então listaDeChamda.splice, e o que esse splice vai fazer?
Vai permitir que removamos alguns elementos de qualquer lugar dentro do 
array e coloque novos elementos em qualquer lugar dentro desse array
também. Ele agora vai pedir três parâmetros. O primeiro parâmetro é em
qual índice ele vai começar.


lista de chamada atualizada : [
  'Lara',    'Rodrigo',        
  ' Isabel', ' Ariana',        
  'Bianca',  'Íris',
  'Rafael',  'António',        
  'Kelvin'
]
*/