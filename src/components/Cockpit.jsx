// import lib
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import components
import Header from './header/Header';
import NavBar from './navbar/NavBar';
import BoardChart from './boardchart/BoardChart';

import Deliveries from './deliveries/Deliveries';
import Products from './products/Products';

// import Shops from './shops/Shops';

// import style
import './main-content.css';

const Cockpit = () => {
  return (
    <div className="main-content">
      <Header />
      <NavBar />
      <Switch>
        <Route path="/admin/boardchart" component={BoardChart} />
        <Route path="/admin/deliveries" component={Deliveries} />
        <Route path="/admin/products" component={Products} />
        {/* <Route path="/admin/shops" component={Shops} /> */}
      </Switch>
    </div>
  );
};

export default Cockpit;
