import logo from './logo.svg';
import './App.css';
import { Component,useState } from 'react';
import TodoList from './components/TodoList';

function App() {
  const [temp,setTemp] = useState('');
  const [list, setlist] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setlist([...list, temp])
    console.log(list);
  }

  return (
    <div className="App">
      <h1>Enter in TodoList</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={(e) => setTemp(e.target.value)}/>
        <input type='submit'/>
      </form>
      {list.map((word) => (<TodoList text = {word}/>)) }
    </div>
  );
}

export default App;
