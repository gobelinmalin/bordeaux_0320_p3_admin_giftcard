// import libs
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Form, Container, Col, Row, Button } from 'react-bootstrap';

// import data
import fields from './ordersFields';

// import components

// import data

// import style

function AddOrder() {
  const [order, setOrder] = useState([{}]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setOrder(inputValue);
  }, [inputValue]);

  const addOrder = () => {
    const url = 'http://localhost:5000/api/orders';
    Axios.post(url, order)
      .then((res) => res.config.data)
      .then((data) => setOrder(data));
  };

  const handleChange = (event) => {
    event.preventDefault();
    const { value, name } = event.target;
    const newValue = { ...inputValue, [name]: value };
    setInputValue(newValue);
  };

  // return
  return (
    <Container>
      <Row>
        <Col className="col-form-label-sm">
          <h3 id="">Identité du client</h3>
          <Form action="" className="form-group" onSubmit={() => addOrder()}>
            <Form.Group>
              <Form.Label>{fields[0].label}</Form.Label>
              <Form.Control
                name={fields[0].name}
                type="text"
                placeholder={fields[0].placeholder}
                value={inputValue.name}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>{fields[1].label}</Form.Label>
              <Form.Control
                name={fields[1].name}
                type="text"
                placeholder={fields[1].placeholder}
                value={inputValue.name}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>{fields[2].label}</Form.Label>
              <Form.Control
                name={fields[2].name}
                type="text"
                placeholder={fields[2].placeholder}
                value={inputValue.name}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>{fields[3].label}</Form.Label>
              <Form.Control
                name={fields[3].name}
                type="text"
                placeholder={fields[3].placeholder}
                value={inputValue.name}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>{fields[4].label}</Form.Label>
              <Form.Control
                name={fields[4].name}
                type="text"
                placeholder={fields[4].placeholder}
                value={inputValue.name}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>{fields[5].label}</Form.Label>
              <Form.Control
                name={fields[5].name}
                type="text"
                placeholder={fields[5].placeholder}
                value={inputValue.name}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Button type="submit" variant="warning">
              Ajouter une commande
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default AddOrder;
