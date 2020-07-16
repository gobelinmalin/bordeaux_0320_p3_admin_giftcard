/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Form,
  Button,
  DropdownButton,
  Dropdown,
  Col,
  Container,
} from 'react-bootstrap';

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

      <div className="formContent">
        <Form>
          <Form.Group>
            <Form.Label>Enseigne</Form.Label>
            <Form.Control size="sm" type="text" placeholder="Search" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Category</Form.Label>
            <Form.Control size="sm" type="text" placeholder="Search" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Nom</Form.Label>
            <Form.Control size="sm" type="text" />
          </Form.Group>
          <Form.Group>
            <Form.Label>image</Form.Label>
            <Form.Control size="sm" type="text" placeholder="Upload" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Theme</Form.Label>
            <Form.Control size="sm" type="text" placeholder="Search" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control size="sm" type="text" />
          </Form.Group>
        </Form>
      </div>

      <div className="formContent">
        <p> ici le composant du produit selectionné</p>
      </div>
    </Container>
  );
};

export default ProductsAdd;
