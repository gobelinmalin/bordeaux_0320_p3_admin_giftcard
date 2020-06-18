// import lib
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import components
import Header from './header/Header';
import EditBar from './editBar/EditBar';
import BoardChart from './content/content-section/BoardChart';
import Shops from './content/content-section/Shops';
import Products from './content/content-section/Products';
import Customers from './content/content-section/Customers';
import Delivery from './content/content-section/Delivery';

// import style
import './main-content.css';

const MainContent = () => {
  return (
    <div className="main-content">
      <Header />
      <EditBar />
      <Switch>
        <Route path="/admin/boardchart" component={BoardChart} />
        <Route path="/admin/shops" component={Shops} />
        <Route path="/admin/products" component={Products} />
        <Route path="/admin/customers" component={Customers} />
        <Route path="/admin/delivery" component={Delivery} />
      </Switch>
    </div>
  );
};

export default MainContent;
