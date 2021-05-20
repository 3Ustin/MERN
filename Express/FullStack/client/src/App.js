import  Main from './views/Main'
import './App.css';
import {Router} from '@reach/router';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path = '/' />
      </Router>
    </div>
  );
}

export default App;
