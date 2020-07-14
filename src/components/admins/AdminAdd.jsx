// import libs
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import { Form, Container, Col, Row, Button } from 'react-bootstrap';

// import data

function AdminsAdd({ getAdminsDatas }) {
  const [admin, setAdmin] = useState([{}]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setAdmin(inputValue);
  }, [inputValue]);

  const addAdmin = () => {
    const url = 'http://localhost:5000/api/admins';
    Axios.post(url, admin)
      .then((response) => response.config.data)
      .finally(() => getAdminsDatas());
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
          <h3 id="">Identité de l&apos; administrateur</h3>
          <Form action="" className="form-group" onSubmit={() => addAdmin()}>
            <Form.Group>
              <Form.Label>Nom</Form.Label>
              <Form.Control
                name="fullname"
                type="text"
                value={inputValue.fullname}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                type="email"
                value={inputValue.email}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Button type="submit" variant="success">
              Ajouter un administrateur
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

AdminsAdd.defaultProps = {
  getAdminsDatas: PropTypes.func,
};

AdminsAdd.propTypes = {
  getAdminsDatas: PropTypes.func,
};

export default AdminsAdd;
