import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';

import './products.css';
import '../styles.css';

const ProductsAdd = () => {
  return (
    <Container>
      <div className="insideNavBar">
        <Link to="/admin/products">
          <Button variant="insideNav">PRODUITS</Button>
        </Link>
        <Button variant="insideNav">CATEGORIES</Button>
        <Button variant="insideNav">THEME</Button>
        <Button variant="insideNav">TAGS</Button>
      </div>
      <div className="insideNavBar">
        <Link to="/admin/products">
          <Button variant="insideNav">Retour aux produits</Button>
        </Link>
      </div>

      <Form>
        <Form.Group>
          <Form.Label>Nom</Form.Label>
          <Form.Control size="sm" type="text" name="" value="" onchange="" />
        </Form.Group>
      </Form>
    </Container>
  );
};

export default ProductsAdd;
