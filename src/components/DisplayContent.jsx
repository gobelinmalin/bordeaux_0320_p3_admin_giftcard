// import libs
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container, Col } from 'react-bootstrap';

// import components
import Header from './header/Header';
import BoardChart from './boardchart/BoardChart';
import Shops from './shops/Shops';
import Products from './products/Products';
import Deliveries from './deliveries/Deliveries';
import Customers from './customers/Customers';

const DisplayContent = () => {
  return (
    <Container>
      <Col>
        <Header />
        <Switch>
          <Route exact path="/admin" component={BoardChart} />
          <Route path="/admin/boardchart" component={BoardChart} />
          <Route path="/admin/shops" component={Shops} />
          <Route path="/admin/deliveries" component={Deliveries} />
          <Route path="/admin/products" component={Products} />
          <Route path="/admin/customers" component={Customers} />
        </Switch>
      </Col>
    </Container>
  );
};

export default DisplayContent;
