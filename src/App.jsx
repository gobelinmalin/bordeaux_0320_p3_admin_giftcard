// import library
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

// import style
import 'bootstrap/dist/css/bootstrap.min.css';

// import components
import Signin from './components/Signin';
import Header from './components/header/Header';
import Shops from './components/shops/Shops';
import NavBar from './components/navbar/NavBar';
import Customers from './components/customers/Customers';
import ShopsAdd from './components/shops/ShopsAdd';
import ShopsUpdate from './components/shops/ShopsUpdate';
/* import FormCustomer from './components/customers/FormCustomer';
import BoardChart from './components/boardchart/BoardChart';
import DisplayContent from './components/DisplayContent';
import Products from './components/products/Products';
import Deliveries from './components/deliveries/Deliveries'; */

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
              <Route exact path="/admin/shops" component={Shops} />
              <Route exact path="/admin/shops/add" component={ShopsAdd} />
              <Route
                exact
                path="/admin/shops/update/:id"
                component={ShopsUpdate}
              />
              <Route path="/admin/customers" component={Customers} />
            </Col>
          </Route>
        </Switch>
      </Row>
    </Container>
  );
}

export default App;
