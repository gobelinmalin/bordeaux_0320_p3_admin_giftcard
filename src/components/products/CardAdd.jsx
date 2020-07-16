import React from 'react';
import '../styles.css';
import { Form } from 'react-bootstrap';

const cardAdd = () => {
  return (
    <div>
      <Form>
        <p>Ajout de carte cadeaux</p>
        <Form.Group>
          <Form.Label>Date d&apos;ajout</Form.Label>
          <Form.Control size="sm" type="text" name="add_time" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Format de carte</Form.Label>
          <Form.Control />
        </Form.Group>
        <Form.Group>
          <Form.Label>Code EAN</Form.Label>
          <Form.Control />
        </Form.Group>
        <Form.Group>
          <Form.Label>Credit</Form.Label>
          <Form.Control />
        </Form.Group>
        <Form.Group>
          <Form.Label>Code de la carte</Form.Label>
          <Form.Control />
        </Form.Group>
        <Form.Group>
          <Form.Label>Code de sécurité</Form.Label>
          <Form.Control />
        </Form.Group>
        <Form.Group>
          <Form.Label>Validité</Form.Label>
          <Form.Control />
        </Form.Group>
        <Form.Group>
          <Form.Label>Multi-utilisation</Form.Label>
          <Form.Control />
        </Form.Group>
        <Form.Group>
          <Form.Label>Statut d&apos;activation</Form.Label>
          <Form.Control />
        </Form.Group>
      </Form>
    </div>
  );
};

export default cardAdd;
