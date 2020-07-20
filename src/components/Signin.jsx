import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Button, Form } from 'react-bootstrap';

import './signin.css';
import '../App.css';

import Logo from './navbar/Logo';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="central">
      <div className="login">
        <Logo />
        <Form className="form" onSubmit={handleSubmit}>
          <Form.Group controlId="email" bsSize="large">
            <Form.Label>identifiant</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="password" bsSize="large">
            <Form.Label>mot de passe</Form.Label>
            <Form.Control
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </Form.Group>
          <Button
            variant="signin"
            block
            bsSize="large"
            disabled={!validateForm()}
            type="submit"
          >
            <Link to="/admin">se connecter</Link>
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Signin;
