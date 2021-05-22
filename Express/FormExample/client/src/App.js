import  Main from './components/Main'
import FormReview from './components/FormReview'
import Votes from './components/Votes'
import FormFillOut from './components/FormFillOut'
import './App.css';
import {Router,Link} from '@reach/router';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path = '/' />
        <FormReview path = '/review/:id'/>
        <Votes path = '/votes/:id'/>
        <FormFillOut path = '/fillout'/>
      </Router>
    </div>
  );
}

export default App;

