// import lib
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Table, Container, Col, Row } from 'react-bootstrap';

// import components

import AllCustomers from './AllCustomers';
import AddCustomers from './AddCustomer';

// import data
// import fields from './customerFields';

// import style
/* import '../content-section.css'; */

const Customers = () => {
  // CRUD
  // GET all customers
  const initialState = [
    {
      id: '0',
      firstname: 'John',
      lastname: 'Doh',
      email: 'jon@doh.com',
      adresse: 'Springfield',
    },
  ];

  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    setCustomers(initialState);
    Axios({
      method: 'get',
      // url: 'http://givyoo.fr/api/clients',
      url: 'http://localhost:5000/api/clients',
    }).then((response) => setCustomers(response.data));
  }, []);

  // POST a customer

  // PUT a customer
  // DELETE a customer

  return (
    <Container>
      <Row>
        <Col>
          <AddCustomers />
        </Col>
        <Col>
          <Table>
            <AllCustomers customers={customers} />
          </Table>
        </Col>
      </Row>
      {/* <Button className="btn-sm" variant="warning" type="reset">
        Annuler
      </Button>
      <Button className="btn-sm" variant="success" type="submit" value="Submit">
        Modifier un client
      </Button> */}
    </Container>
  );
};

export default Customers;
