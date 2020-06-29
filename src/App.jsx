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
import Shops from './components/shops/Shops';
import ShopsAdd from './components/shops/ShopsAdd';

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
        <Route exact path="/admin/shops" component={Shops} />
        <Route exact path="/admin/shops/add-a-shop" component={ShopsAdd} />
      </Switch>
    </div>
  );
}

export default App;
