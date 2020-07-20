// import libs
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import { Form, Container, Col, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import style
import './admins.css';

function AdminsAdd({ getAdminsDatas }) {
  const [admin, setAdmin] = useState([{}]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setAdmin(inputValue);
  }, [inputValue]);

  const addAdmin = () => {
    const url = `${process.env.REACT_APP_HOST}/admins`;
    Axios.post(url, admin).finally(() => getAdminsDatas());
  };

  const handleChange = (event) => {
    event.preventDefault();
    const { value, name } = event.target;
    const newValue = { ...inputValue, [name]: value };
    setInputValue(newValue);
  };

  return (
    <Container>
      <Row>
        <Col className="col-form-label-sm">
          <h3 id="">Identité de l&apos; administrateur</h3>
          <Form action="" className="form-group" onSubmit={() => addAdmin()}>
            <Form.Group>
              <Form.Label>Nom complet / pseudo</Form.Label>
              <Form.Control
                name="name"
                type="text"
                value={inputValue.name}
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
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                value={inputValue.password}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Confirmer le password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="work in progress"
              />
            </Form.Group>
            <Button type="submit" className="admin-add">
              <FontAwesomeIcon className="admin-add" icon="user-plus" />
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
