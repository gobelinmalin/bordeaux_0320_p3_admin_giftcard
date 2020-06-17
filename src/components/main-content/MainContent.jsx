// import lib
import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import components
import BoardChart from '../left-menu/components/BoardChart';
import Shops from '../left-menu/components/Shops';
import Products from '../left-menu/components/Products';
import Customers from '../left-menu/components/Customers';
import Delivery from '../left-menu/components/Delivery';

// import style
import './main-content.css';

const MainContent = () => {
  return (
    <Switch>
      <Route path="/admin/boardchart" component={BoardChart} />
      <Route path="/admin/shops" component={Shops} />
      <Route path="/admin/products" component={Products} />
      <Route path="/admin/customers" component={Customers} />
      <Route path="/admin/delivery" component={Delivery} />
    </Switch>
  );
};

export default MainContent;
