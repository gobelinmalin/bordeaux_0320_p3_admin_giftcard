// import lib
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Form, Table, Button, Container, Col, Row } from 'react-bootstrap';

// import components
import FormCustomer from './FormCustomer';
import AllCustomers from './AllCustomers';

// import data
import fields from './customerFields';

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
      url: 'http://givyoo.fr/api/clients',
    }).then((response) => setCustomers(response.data));
  }, []);

  // POST a customer
  // PUT a customer
  // DELETE a customer

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Form>
              <FormCustomer fields={fields} />
            </Form>
          </Col>
          <Col>
            <Table>
              <AllCustomers customers={customers} />
            </Table>
          </Col>
        </Row>
        <Button className="btn-sm" variant="warning" type="reset">
          Annuler
        </Button>
        <Button
          className="btn-sm"
          variant="success"
          type="submit"
          value="Submit"
        >
          Modifier un client
        </Button>
      </Container>
    </>
  );
};

export default Customers;
