// import lib
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Form, Table, Button, Container, Col, Row } from 'react-bootstrap';

// import components
import FormCustomer from './FormCustomer';
import TableCustomer from './TableCustomer';

// import data
import fields from './customerFields';

// import style
/* import '../content-section.css'; */

const Customers = () => {
  // CRUD
  // GET all customers
  const initialState = [
    {
      name: '',
      adresse: '',
      birthday: '',
    },
  ];
  const [customers, setCustomers] = useState(initialState);

  useEffect(() => {
    Axios({
      method: 'get',
      url: '',
      data: customers,
    }).then((response) => setCustomers(response));
  }, []);

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
              <TableCustomer />
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
