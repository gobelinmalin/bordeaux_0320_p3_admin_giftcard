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

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleChangeEmail = (event) => setEmail(event.target.value);
  const handleChangePassword = (event) => setPassword(event.target.value);

  const { setAuthData } = useContext(authContext);

  // handle signin submit + retrieve token
  const onAuthSubmit = (event) => {
    const url = `${process.env.REACT_APP_HOST}/login/superadmin`;

    Axios.post(url, email, password)
      .then((response) => {
        setAuthData(response.data.token);
      })
      .then(() => history.push('/admin/dashboard'));

    event.preventDefault();
  };

  console.log(email, password);

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
              onChange={handleChangeEmail}
            />
          </Form.Group>

          <Form.Group controlId="password" bsSize="large">
            <Form.Label>mot de passe</Form.Label>
            <Form.Control
              type="password"
              name="password"
              onChange={handleChangePassword}
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
