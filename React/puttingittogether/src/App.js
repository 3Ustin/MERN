import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName={'Austin'} lastName ={'Dupras'} age = {34} hairColor={'Brown'}/>
      <PersonCard firstName={'Preston'} lastName ={'Davis'}  age = {35} />
      <PersonCard firstName={'Micah'} 
        lastName ={'Wendorf'} 
        age = {24} 
        hairColor={'Brown'}
      />
      <PersonCard firstName={'Christian'} 
        lastName ={'Rovet'} 
        age = {26} 
        hairColor={'Brown'}
      />
    </div>
  );
}

export default App;
