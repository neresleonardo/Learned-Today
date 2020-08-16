import React from 'react';

//import Painel from './Components/Painel'
import PlacaContainer from './Components/Painel/Painel'
import DraggableDialog from './Components/Dialog/Dialog'

/*const dados = {
    partida: {
         estadio:"Maracana/DF",
         data: "12/12/23",
         horario: "19h"
    },
    casa: {
         nome:"Flamengo"
    },
    visitante:{
         nome:"Vasco"
    }
};
-----------------------------------------------------------------
<PlacaContainer {...dados} /> 
*/

function App() {
  return (
    <div className="App">
        <DraggableDialog/>
    </div>
  );
}

export default App;