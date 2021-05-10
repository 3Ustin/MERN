import {useState} from 'react';
import './App.css';
import Login from './components/Login';

function App() {
  const [ingredients,setIngredients] = useState([]);
  const [numbers, setNumbers] = useState(() => {
    let arr = [];
    for(let i =0; i<1000; i++){
      arr.push(i);
    }
    return arr;
  });
  const [form,setFrom] = useState("");


  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(event);
    setIngredients([...ingredients, form]);
  }
  // Doesn't work?
  // for(let i = 0; i<=100; i++){
  //   setNumbers = [...numbers,i];
  // }
  return (
    <div className="App">
      {/* <Login/> */}

      <div>
        <form onSubmit = {onSubmitHandler}>
          <input placeholder = "enter ingretient" onChange={(event)=>setFrom(event.target.value)}/>
          <input type='submit' value='add ingredient'/>
        </form>
      </div>


      <div>
        <ul>
          {
            ingredients.map((ingredient, i) => <li key={i}>Ingredient number {i}: {ingredient}</li>)
          }
        </ul>
        {/* <ul>
          {
            numbers.map((item) => <li>{item}</li>)
          }
        </ul> */}
      </div>
    </div>
  );
}

export default App;

