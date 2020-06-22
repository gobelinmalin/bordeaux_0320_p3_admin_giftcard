// import lib
import React from 'react';
import { Form, Table, Button, Container, Col, Row } from 'react-bootstrap';

// import components
import FormCustomer from './FormCustomer';
import TableCustomer from './TableCustomer';

// import data
import fields from './customerFields';

// import style
import '../content-section.css';

const Customers = () => {
  return (
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
      <Button className="btn-sm" variant="success" type="submit" value="Submit">
        Modifier un client
      </Button>
    </Container>
  );
};

export default Customers;
