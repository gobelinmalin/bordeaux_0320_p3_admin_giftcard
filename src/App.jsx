// import library
import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import style
import './App.css';

// import components
import Admin from './components/Admin';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} /> ;
        <Route path="/admin" component={Admin} /> ;
      </Switch>
    </div>
  );
}

export default App;
