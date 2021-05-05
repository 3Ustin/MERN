import logo from './logo.svg';
import './App.css';
import MyNewComponent from './components/MyNewComponent'

function App() {
  return (
    <div className="App">
      <MyNewComponent firstName={'Austin'} 
        lastName ={'Dupras'} 
        age = {34} 
        hairColor={'Brown'}
      />
      <MyNewComponent firstName={'Preston'} 
        lastName ={'Davis'} 
        age = {35} 
        hairColor={'Brown'}
      />
      <MyNewComponent firstName={'Micah'} 
        lastName ={'Wendorf'} 
        age = {24} 
        hairColor={'Brown'}
      />
      <MyNewComponent firstName={'Christian'} 
        lastName ={'Rovet'} 
        age = {26} 
        hairColor={'Brown'}
      />
    </div>
  );
}

export default App;
