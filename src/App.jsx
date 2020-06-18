// import library
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import style
import './App.css';

// import components
import Admin from './components/Admin';
import Login from './components/Login';
import Header from './components/mainContent/header/Header';
import Signin from './components/Signin';

function App() {
  return (
    <div className="App">
      <Header />
      <Signin />
      <Switch>
        <Route exact path="/" component={Login} /> ;
        <Route path="/admin" component={Admin} /> ;
      </Switch>
    </div>
  );
}

export default App;
