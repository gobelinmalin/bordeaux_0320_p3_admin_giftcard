/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
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
  // set initial form
  const initialFormState = {
    id: null,
    shop: '',
    category: '',
    theme: '',
    name: '',
    image: '',
    description: '',
  };

  const [product, setProduct] = useState(initialFormState);

  // Product : handle string input
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  // get categories
  const [categories, setCategories] = useState();

  const getCategoriesData = () => {
    const url = 'http://localhost:5000/api/categories';
    Axios.get(url)
      .then((response) => response.data)
      .then((data) => setCategories(data));
  };

  useEffect(() => {
    getCategoriesData();
  }, []);

  // get theme
  const [themes, setThemes] = useState();

  const getThemesData = () => {
    const url = 'http://localhost:5000/api/themes';
    Axios.get(url)
      .then((response) => response.data)
      .then((data) => setThemes(data));
  };

  useEffect(() => {
    getThemesData();
  }, []);

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
        <Form
          onSubmit={(event) => {
            event.preventDefault();
            setProduct(initialFormState);
          }}
        >
          <Form.Group>
            <Form.Label>Enseigne</Form.Label>
            <Form.Control size="sm" type="text" placeholder="Search" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Category</Form.Label>

            <DropdownButton
              id="dropdown-basic-button"
              title="Catégorie"
              name="category"
              value=" "
            >
              {categories &&
                categories.map((category) => (
                  <Dropdown.Item as="button">{category.type}</Dropdown.Item>
                ))}
            </DropdownButton>
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

            <DropdownButton
              id="dropdown-basic-button"
              title="Theme"
              name="theme"
              value=" "
            >
              {themes &&
                themes.map((theme) => (
                  <Dropdown.Item>{theme.name}</Dropdown.Item>
                ))}
            </DropdownButton>
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
