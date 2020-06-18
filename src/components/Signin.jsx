import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './signin.css';

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="formContainer">
      <div className="login">
        <Form className="form" onSubmit={handleSubmit}>
          <Form.Group controlId="email" bsSize="large">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="password" bsSize="large">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </Form.Group>
          <Button block bsSize="large" disabled={!validateForm()} type="submit">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Signin;
