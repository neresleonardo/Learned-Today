import React, { useState, useEffect } from 'react';



export default function App() {

  const [respositiries, setRespositiries] = useState([
    { id: 1, name: 'repo-1'},
    { id: 2, name: 'repo-2'},
    { id: 3, name: 'repo-3'},
  ])

  function handleAddRepository(){
     setRespositiries([ 
       ...respositiries,
      { id: Math.random(), name:"Novo Repositorio"}
     ]);
  }

  return (
    <>
    <ul>
      { respositiries.map(repo => ( 
      <li key={repo.id}>{repo.name}</li>
      ))}
    </ul>

    <button onClick={handleAddRepository}>
      Adicionar Repostitorio
    </button>
    </>
  );
}

//Quando estamos usando o Hooks eliminamos o uso de Class no React

// Os Hooks sao indentificados quando a gente ver os useState na frente.