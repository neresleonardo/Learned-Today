import React, { useState, useEffect } from 'react'


export default function App() {

  const [marcaGol, setmarcaGol] = useState(0);

  // Similar a componentDidMount e componentDidUpdate:
  useEffect(() => {
  // Atualiza o título do documento utilizando a API do navegador
    document.title = `You clicked ${marcaGol} times`;
  });

  return(
    <div>
    <h1>Meu Time</h1>
    <h1>Flamengo</h1>
  <h1>{marcaGol}</h1>
    <button onClick={() => setmarcaGol(marcaGol + 1)}
    >GOLLL</button>
    </div>
  )

}