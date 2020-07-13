import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';

import ProductNavbar from './ProductsNavbar';

import './products.css';
import '../styles.css';

const ProductsAdd = () => {
  return (
    <Container>
      <ProductNavbar />
      <div className="insideNavBar">
        <Link to="/admin/products">
          <Button variant="insideNav">Cartes Cadeaux</Button>
        </Link>
        <Link to=" ">
          <Button variant="insideNav">Abonnements</Button>
        </Link>
        <Link to=" ">
          <Button variant="insideNav">Coffrets</Button>
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
