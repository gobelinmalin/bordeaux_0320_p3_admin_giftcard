// import libs
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Form, Container, Col, Row, Button } from 'react-bootstrap';

// import data
import fields from './customerFields';

function AddCustomers() {
  const [customer, setCustomer] = useState([{}]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setCustomer(inputValue);
  }, [inputValue]);

  const addCustomer = () => {
    const url = `${process.env.REACT_APP_HOST}/clients`;
    Axios.post(url, customer)
      .then((res) => res.config)
      .then((data) => setCustomer(data));
  };

  const handleChange = (event) => {
    event.preventDefault();
    const { value } = event.target;
    const { name } = event.target;
    const newValue = { ...inputValue, [name]: value };
    setInputValue(newValue);
  };

  // return
  return (
    <Container>
      <Row>
        <Col className="col-form-label-sm">
          <h3 id="">Identité du client</h3>
          <Form action="" className="form-group" onSubmit={() => addCustomer()}>
            <Form.Group>
              <Form.Label>{fields[0].label}</Form.Label>
              <Form.Control
                name={fields[0].name}
                type="text"
                value={inputValue.name}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>{fields[1].label}</Form.Label>
              <Form.Control
                name={fields[1].name}
                type="text"
                value={inputValue.name}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>{fields[2].label}</Form.Label>
              <Form.Control
                name={fields[2].name}
                type="text"
                value={inputValue.name}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>{fields[9].label}</Form.Label>
              <Form.Control
                name={fields[9].name}
                type="text"
                value={inputValue.name}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Button type="submit" variant="success">
              Ajouter un client
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default AddCustomers;
