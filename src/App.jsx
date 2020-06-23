// import library
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import style
import 'bootstrap/dist/css/bootstrap.min.css';

// import components
import Signin from './components/Signin';
import Cockpit from './components/Cockpit';
import Customers from './components/customers/Customers';
import FormCustomer from './components/customers/FormCustomer';

function App() {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={Signin} /> ;
        <Route exact path="/admin" component={Cockpit} />
        <Route exact path="/admin/customers" component={Customers} />
        <Route
          exact
          path="/admin/customers/customer-add"
          component={FormCustomer}
        />
      </Switch>
    </div>
  );
}

export default App;
