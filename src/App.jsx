/* eslint-disable prettier/prettier */
// import library
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

// import style
import 'bootstrap/dist/css/bootstrap.min.css';

// import fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faUserPlus,
  faUserEdit,
  faTrash,
  faSort,
  faEdit,
  faTasks,
  faStore,
  faPen,
} from '@fortawesome/free-solid-svg-icons';

// import components
import PrivateRoute from './components/PrivateRoutes';

import Signin from './components/Signin';
import Admins from './components/admins/Admins';
import AdminUpdate from './components/admins/AdminUpdate';
import Header from './components/header/Header';
import NavBar from './components/navbar/NavBar';

import Customers from './components/customers/Customers';
import AddCustomer from './components/customers/AddCustomer';
import UpdateCustomer from './components/customers/UpdateCustomer';
import Dashboard from './components/dashboard/Dashboard';
import Orders from './components/orders/Orders';
import OrdersByCustomer from './components/orders/OrdersByCustomer';
import UpdateOrder from './components/orders/UpdateOrder';
import Products from './components/products/Products';
import ProductsAdd from './components/products/ProductsAdd';
import Shops from './components/shops/Shops';
import ShopsAdd from './components/shops/ShopsAdd';
import ShopsUpdate from './components/shops/ShopsUpdate';
import ShopDetails from './components/shops/ShopDetail';

function App() {
  library.add(
    fab,
    faUserPlus,
    faUserEdit,
    faTrash,
    faSort,
    faEdit,
    faTasks,
    faStore,
    faPen
  );
  return (
    <Container fluid className=" parent-container flex-column ">
      <Row>
        <Switch>
          <Route path="/" component={Signin} />
          <PrivateRoute exact path="/admin">
            <Col sm={2}>
              <NavBar />
            </Col>
            <Col sm={8}>
              <Header />
              <PrivateRoute
                exact
                path="/admin/dashboard"
                component={Dashboard}
              />
              <PrivateRoute exact path="/admin/products" component={Products} />
              <PrivateRoute
                exact
                path="/admin/products/add"
                component={ProductsAdd}
              />
              <PrivateRoute exact path="/admin/shops" component={Shops} />
              <PrivateRoute
                exact
                path="/admin/shops/add"
                component={ShopsAdd}
              />
              <PrivateRoute
                exact
                path="/admin/shops/details/:id"
                component={ShopDetails}
              />
              <PrivateRoute
                exact
                path="/admin/shops/update/:id"
                component={ShopsUpdate}
              />
              <PrivateRoute
                exact
                path="/admin/customers"
                component={Customers}
              />
              <PrivateRoute
                exact
                path="/admin/customers/add"
                component={AddCustomer}
              />
              <PrivateRoute
                path="/admin/customers/update/:id"
                component={UpdateCustomer}
              />
              <PrivateRoute exact path="/admin/orders" component={Orders} />
              <PrivateRoute
                path="/admin/orders/update/:id"
                component={UpdateOrder}
              />
              <PrivateRoute
                path="/admin/orders/by-client/:idClient"
                component={OrdersByCustomer}
              />

              <PrivateRoute exact path="/admin/admins" component={Admins} />
              <PrivateRoute
                exact
                path="/admin/admins/update/:id"
                component={AdminUpdate}
              />
            </Col>
          </PrivateRoute>
        </Switch>
      </Row>
    </Container>
  );
}

export default App;
