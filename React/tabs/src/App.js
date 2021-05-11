import './App.css';
import Town from './components/Town';
import Map from './components/Map';
import Farm from './components/Farm';
import React, { useState } from 'react';

function App() {
  const [location, setLocation] = useState("");

  const changeBool = (str) => {
    setLocation(str);
  };

  const goToLocation = () => {
    console.log('goToLocation');
    if(location === 'Farm'){
      console.log('<Farm/>');
      return(<Farm/>)
    }
    if(location === 'Town'){
      return(<Town/>)
    }
    if(location === 'Map'){
      return(<Map/>)
    }
  }

  return (
    <div className="App">
      <button id = 'farm' onClick ={ (e) => changeBool('Farm') }>farm</button>
      <button id = 'town' onClick ={ (e) => changeBool('Town') }>town</button>
      <button id = 'map' onClick ={ (e) => changeBool('Map') }>map</button>
      {goToLocation()}
    </div>
  );
}

export default App;
