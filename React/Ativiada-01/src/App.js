import React from 'react';
import './App.css';

import Placar from './Conponents/Placar'

// Criando daodos
const dados = {
  partida: {
    estadio: "Mane",
    data: "12/12/2020",
    hora: "20:12"
  },
  casa: {
    nome: "Flamengo"
  },
  visitante: {
    nome: "Vasco"
  }
}

function App() {
  return (
    <div className="App">
      <Placar
        //Pasando dados para o Componente
        partida={dados.partida}
        casa={dados.casa}
        visitante={dados.visitante}
      />
    </div>
  );
}

export default App;
