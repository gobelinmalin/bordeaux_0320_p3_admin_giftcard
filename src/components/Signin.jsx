/* eslint-disable no-alert */
/* eslint-disable no-console */

import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { Button, Form } from 'react-bootstrap';

import { authContext } from '../contexts/AuthContext';

import './signin.css';
import '../App.css';

import Logo from './navbar/Logo';

const Axios = require('axios');

const SignIn = () => {
  const history = useHistory();

  // handle form user inputs
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const handleInputs = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  // handle authentification
  const { setAuthData } = useContext(authContext);

  const onAuthSubmit = (event) => {
    event.preventDefault();
    if (inputs.email === '' || inputs.password === '') {
      history.push('/');
    } else {
      const url = `${process.env.REACT_APP_HOST}/auth/login/superadmin`;
      Axios.post(url, inputs)
        .then((response) => {
          setAuthData(response.data.token);
        })
        .then(() => history.push('/admin/dashboard'));
    }
  };

  return (
    <div className="central">
      <div className="login">
        <Logo />

        <Form className="form" onSubmit={onAuthSubmit}>
          <Form.Group controlId="email" bsSize="large">
            <Form.Label>identifiant</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={inputs.email}
              onChange={handleInputs}
            />
          </Form.Group>

          <Form.Group controlId="password" bsSize="large">
            <Form.Label>mot de passe</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={inputs.password}
              onChange={handleInputs}
            />
          </Form.Group>
          <Button variant="signin" block bsSize="large" type="submit">
            se connecter
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
