import React, { useState, useEffect } from 'react';



export default function App() {

  const [respositiries, setRespositiries] = useState([ ])
 


  useEffect(async() => {
    const response = await fetch('https://api.github.com/users/neresleonardo/repos')
    const data = await response.json();

    setRespositiries(data);
    

  }, []);

  useEffect(() => {
    const filtered = respositiries.filter(repo => repo.favorite)
 
    document.title = `Voce tem ${filtered.length} favoritos`
  }, [respositiries])

    function handleFavorito(id){
      
      const newRepositories = respositiries.map(repo => {
        return repo.id === id ? {...repo ,favorite: !repo.favorite} : repo

      })
      setRespositiries(newRepositories)
    }

  return (
    <ul>

    { respositiries.map(repo => ( 
    <li key={repo.id}>
      {repo.name}
      {repo.favorite && <span>(Favorito)</span>}
      <button onClick={() => handleFavorito(repo.id)}>Favoritar</button>
      </li>
    ))}

    </ul>
  );
}

//Quando estamos usando o Hooks eliminamos o uso de Class no React

// Os Hooks sao indentificados quando a gente ver os useState na frente.