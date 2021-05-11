import logo from './logo.svg';
import './App.css';

function App() {

  fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
  .then(response => {
      return response.json();
  }).then(response => {
      console.log(response);
  }).catch(err=>{
      console.log(err);
  });


  return (
    <div className="App">

    </div>
  );
}

export default App;
