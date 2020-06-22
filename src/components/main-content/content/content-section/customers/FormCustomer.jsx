// import lib
import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

// import components

// import style
import '../content-section.css';

const FormCustomer = () => {
  return (
    <div>
      <Form as={Col} className="form-client">
        <Form.Group as={Row}>
          <Form.Label column>identité du client</Form.Label>
        </Form.Group>
        <Form.Group controlId="formCreateClient">
          <Form.Label column="sm">Nom</Form.Label>
          <Form.Control type="string" size="sm" />
        </Form.Group>
        <Form.Group>
          <Form.Label column="sm">Prénom</Form.Label>
          <Form.Control type="string" size="sm" />
        </Form.Group>
        <Form.Group>
          <Form.Label column="sm">Date de naissance</Form.Label>
          <Form.Control type="date" size="sm" />
        </Form.Group>
        <Form.Group>
          <Form.Label column="sm">Email</Form.Label>
          <Form.Control type="email" size="sm" />
        </Form.Group>
        <Form.Group>
          <Form.Label column="sm">Téléphone</Form.Label>
          <Form.Control
            type="tel"
            size="sm"
            pattern="[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}"
          />
          <small>format: 06-07-08-09-10</small>
        </Form.Group>
        <Form.Group>
          <Form.Label column="sm">Adresse postale</Form.Label>
          <Form.Control type="string" size="sm" />
        </Form.Group>
        <Form.Group>
          <Form.Label column="sm">Ville</Form.Label>
          <Form.Control type="string" size="sm" />
        </Form.Group>
        <Form.Group>
          <Form.Label column="sm">Code postal</Form.Label>
          <Form.Control type="string" size="sm" />
        </Form.Group>
        <Form.Group>
          <Form.Label column="sm">Pays</Form.Label>
          <Form.Control type="string" size="sm" />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Text as={Row} className="text-muted">
            Veuillez remplir tous les champs requis avant de valider
          </Form.Text>
        </Form.Group>
        <Form.Group as={Col}>
          <Button as={Row} variant="primary" type="reset">
            Annuler
          </Button>
        </Form.Group>
        <Form.Group as={Col}>
          <Button as={Row} variant="primary" type="submit">
            Modifier le client
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default FormCustomer;
