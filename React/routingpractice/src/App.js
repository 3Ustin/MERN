import React from 'react';
import {Router} from '@reach/router';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import NumberRoute from './components/NumberRoute';
import ColorHello from './components/ColorHello';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <PageOne path='/route-one'/>
        <PageTwo path ='/route-two'/>
        <NumberRoute path='/route-number/:num'/>
        <ColorHello path='/:word/:backColor/:wordColor'/>
      </Router>
    </div>
  );
}

export default App;
