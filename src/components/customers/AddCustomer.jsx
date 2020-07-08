// import libs
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Form, Container, Col, Row, Button } from 'react-bootstrap';

// import component

// import data
import fields from './customerFields';

function AddCustomers() {
  // const initialState = [
  //   { civility: 'M.', firstname: 'Cham', lastname: 'Gerg' },
  // ];
  const [customer, setCustomer] = useState([{}]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setCustomer([inputValue]);
  }, [inputValue]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCustomer = [...customer, inputValue];
    setCustomer(newCustomer);

    // console.log('NEW', customer);
    const url = 'http://localhost:5000/api/clients';
    /* LOOK à partir d'ici Emeline, la ligne 34 fonctionne sans le .then Oo */
    // Axios.post(url, customer[0]).then((res) => console.log('RES', res.config.data));
    // Axios.post(url, customer).then((res) => console.log('RES', res[0]));
    Axios.post(url, customer).then((res) => res[0]);
  };

  const handleChange = (event) => {
    event.preventDefault();
    const { value } = event.target;
    const { name } = event.target;
    const newValue = { ...inputValue, [name]: value };
    setInputValue(newValue);
  };

  // generate <label/> and <input/>
  /*  const valueOfFields = Object.values(fields);
  const createFormClient = valueOfFields.map((field, index) => (
    <Form.Group>
    <Form.Label>{field.label}</Form.Label>
    <Form.Control
        name={field.name}
        type={field.type}
        size="sm"
        value={inputValue}
        pattern={field.pattern}
        onChange={(event) => setInputValue(event.target.value)}
      />
    </Form.Group>
  )); */

  // return
  return (
    <Container>
      <Row>
        <Col className="col-form-label-sm">
          <h3 id="">Identité du client</h3>
          <Form
            action=""
            className="form-group"
            onSubmit={(event) => handleSubmit(event)}
          >
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
            <Button type="submit" variant="warning">
              Ajouter un client
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default AddCustomers;
