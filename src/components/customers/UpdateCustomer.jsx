import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

// import components

// import data
import fields from './customerFields';

// import style

function UpdateCustomer() {
  const { id } = useParams();
  const [customer, setCustomer] = useState(null);

  const refreshCustomer = () => {
    Axios({
      method: 'get',
      // url: 'http://givyoo.fr/api/clients',
      url: `http://localhost:5000/api/clients/${id}`,
    })
      .then((response) => response.data)
      .then((data) => setCustomer(data[0]));
  };

  const updateCustomer = () => {
    const url = `http://localhost:5000/api/clients/${id}`;
    Axios.put(url, customer)
      .then((res) => res.config)
      .then((data) => setCustomer(data));
  };

  const handleChange = (event) => {
    event.preventDefault();
    const { value, name } = event.target;
    setCustomer({ ...customer, [name]: value });
  };

  useEffect(() => {
    if (!customer) {
      refreshCustomer(id);
    }
  });

  if (customer) {
    return (
      <Container>
        <Row>
          <Col className="col-form-label-sm">
            <h3 id="">Identité du client</h3>
            <Form
              action=""
              className="form-group"
              onSubmit={() => updateCustomer()}
            >
              <Form.Group>
                <Form.Label>{fields[0].label}</Form.Label>
                <Form.Control
                  name={fields[0].name}
                  type="text"
                  value={customer.civility}
                  onChange={(event) => handleChange(event)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>{fields[1].label}</Form.Label>
                <Form.Control
                  name={fields[1].name}
                  type="text"
                  value={customer.firstname}
                  onChange={(event) => handleChange(event)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>{fields[2].label}</Form.Label>
                <Form.Control
                  name={fields[2].name}
                  type="text"
                  value={customer.lastname}
                  onChange={(event) => handleChange(event)}
                />
              </Form.Group>
              <Button type="submit" variant="warning">
                Modifier le client
              </Button>
              <Link to="/admin/customers">
                <Button type="button" variant="success">
                  Retourner à la liste des clients
                </Button>
              </Link>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
  return null;
}

export default UpdateCustomer;
