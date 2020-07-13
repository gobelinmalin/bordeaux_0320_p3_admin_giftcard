// import libs
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Form, Container, Col, Row, Button } from 'react-bootstrap';

// import data
// import fields from './customerFields';

function AdminForm() {
  const [admin, setAdmin] = useState([{}]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setAdmin(inputValue);
  }, [inputValue]);

  const addAdmin = () => {
    const url = 'http://localhost:5000/api/admins';
    Axios.post(url, admin)
      .then((res) => res.config)
      .then((data) => setAdmin(data));
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
          <h3 id="">Identité de l&apos; administrateur</h3>
          <Form action="" className="form-group" onSubmit={() => addAdmin()}>
            <Form.Group>
              <Form.Label>Nom</Form.Label>
              <Form.Control
                name="nom"
                type="text"
                value={inputValue.name}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                type="text"
                value={inputValue.name}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control
                name="password"
                type="text"
                value={inputValue.name}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>

            <Button type="submit" variant="warning">
              Ajouter un administrateur
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminForm;
