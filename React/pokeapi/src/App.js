import React, { useState } from 'react';
import './App.css';

function App() {
  const [pokemon,setpokemon] = useState([]);

  const fetchPokemonInfo = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then(response => {return response.json()})
    .then((res) =>{setpokemon(res.results)})
    .catch(err=>{console.log(err);
    });
  };


  return (
    <div className="App">
      <button onClick = {fetchPokemonInfo}>Click</button>
      {
        pokemon.map((item,i) => <h1 key = {i}> {item.name}</h1>)
      } 
    </div>
  );
}

export default App;
