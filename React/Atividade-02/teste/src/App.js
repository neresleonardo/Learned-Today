import React from 'react';

import {Router , Route } from 'react-router';

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
        <Route>

          <Route path="/" />

        </Route>

        
    </div>
  );
}

export default App;