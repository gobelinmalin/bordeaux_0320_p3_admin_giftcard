// import library
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import style
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import components
import Admin from './components/Admin';
import Signin from './components/Signin';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Signin} /> ;
        <Route path="/admin" component={Admin} /> ;
      </Switch>
    </div>
  );
}

export default App;
