// Par Nome/Valor

const saudacao = 'Opa'  // Contesto lexico é o local onde a variavel foi definido

function exec(){
    const saudacao = 'Opa'  // Contesto lexico é o local onde a variavel foi definido
    return saudacao
}


// tenho saudacao na linha 1 e na linha 6 porem como estao em escopo diferente não gera conflito

const Cliente = {
    nome: 'Pedro',
    sobrenome:'Da Silva',
    idade: '23',
    peso: 80,
    cidade:'China do Piaui',
    comida_favorita: 'Pizza de camarão',
    cidades_que_ja_visitou: {
        brasilia: 'Foi em varios lugares de brasilia',
        sãopaulo: 'Gostou da praia de São Paulo',
        riodejaneiro: 'Amou ver o Crito Redentor',
        maranhao: 'Achou muito quente',
        canada: {
            viagem: 'Viagou e achou fantastico tudo que viu lá',
            comidasdocanada: {
                bolo: 'Amaou o bolo do canada',
                refri: 'Lá é um lugar onde muidas pesssoas bebe refri'
            }
        },
        NY:' gostou de mais e tirou varias fotos'
    }
}

console.log(Cliente)