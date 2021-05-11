import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [pokemon,setpokemon] = useState([]);


  useEffect(()=>{
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
      // .then(response => {return response.json()})
      .then((res) =>{setpokemon(res.results)})
      .catch(err=>{console.log(err);
    });
  }, []);



  return (
    <div className="App">
      <button>Click</button>
      {/* {
        pokemon.map((item,i) => <h1 key = {i}> {item.name}</h1>)
      }  */}
    </div>
  );
}

export default App;
