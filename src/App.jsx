// import library
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

// import style
import 'bootstrap/dist/css/bootstrap.min.css';

// import components
import Signin from './components/Signin';
import Header from './components/header/Header';
import NavBar from './components/navbar/NavBar';
import Customers from './components/customers/Customers';
import UpdateCustomer from './components/customers/UpdateCustomer';
import Orders from './components/orders/Orders';
import UpdateOrder from './components/orders/UpdateOrder';
import Products from './components/products/Products';
import Shops from './components/shops/Shops';
import ShopsAdd from './components/shops/ShopsAdd';
import ShopsUpdate from './components/shops/ShopsUpdate';
import ShopDetails from './components/shops/ShopDetail';

function App() {
  return (
    <Container fluid className=" parent-container flex-column ">
      <Row>
        <Switch>
          <Route exact path="/" component={Signin} />
          <Route path="/admin">
            <Col sm={2}>
              <NavBar />
            </Col>
            <Col sm={8}>
              <Header />
              <Route exact path="/admin/products" component={Products} />
              <Route exact path="/admin/shops" component={Shops} />
              <Route exact path="/admin/shops/add" component={ShopsAdd} />
              <Route
                exact
                path="/admin/shops/details/:id"
                component={ShopDetails}
              />
              <Route
                exact
                path="/admin/shops/update/:id"
                component={ShopsUpdate}
              />
              <Route exact path="/admin/customers" component={Customers} />
              <Route
                path="/admin/customers/update/:id"
                component={UpdateCustomer}
              />
              <Route exact path="/admin/orders" component={Orders} />
              <Route path="/admin/orders/update/:id" component={UpdateOrder} />
            </Col>
          </Route>
        </Switch>
      </Row>
    </Container>
  );
}

export default App;
