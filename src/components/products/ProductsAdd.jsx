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
import CardAdd from './CardAdd';

import './products.css';
import '../styles.css';

const ProductsAdd = () => {
  // set initial form
  const initialFormState = {
    id: null,
    id_shop: '',
    id_category: '',
    id_theme: '',
    name: '',
    image: '',
    description: '',
  };

  // PRODUCT : handle product field
  const [product, setProduct] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  // POST operation
  const addProduct = () => {
    const url = `${process.env.REACT_APP_HOST}/products`;
    Axios.post(url, product)
      .then((response) => response.data)
      .then((data) => setProduct(data));
  };

  // SHOPS : handle shops field
  const [shops, setShops] = useState([]);
  const getShopsData = () => {
    const url = `${process.env.REACT_APP_HOST}/shops`;
    Axios.get(url)
      .then((response) => response.data)
      .then((data) => setShops(data));
  };

  useEffect(() => {
    getShopsData();
  }, []);

  const handleChangeShop = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  // CATEGORIES : handle theme field
  const [categories, setCategories] = useState([]);
  const getCategoriesData = () => {
    const url = `${process.env.REACT_APP_HOST}/categories`;
    Axios.get(url)
      .then((response) => response.data)
      .then((data) => setCategories(data));
  };

  useEffect(() => {
    getCategoriesData();
  }, []);

  const handleChangeCategory = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  // THEME : handle theme field
  const [themes, setThemes] = useState([]);
  const getThemesData = () => {
    const url = `${process.env.REACT_APP_HOST}/themes`;
    Axios.get(url)
      .then((response) => response.data)
      .then((data) => setThemes(data));
  };

  useEffect(() => {
    getThemesData();
  }, []);

  const handleChangeTheme = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

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

      <Form
        onSubmit={(event) => {
          event.preventDefault();
          addProduct(product);
          setProduct(initialFormState);
        }}
      >
        <div className="formContent">
          <Form.Group>
            <Form.Label>Enseigne</Form.Label>
            <Form.Control
              as="select"
              size="sm"
              name="id_shop"
              value={product.id_shop}
              onChange={handleChangeShop}
            >
              <option value="choose">Choisir...</option>
              {shops.map((shop) => (
                <option value={shop.id}>{shop.name}</option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Catégorie de produit</Form.Label>
            <Form.Control
              size="sm"
              as="select"
              name="id_category"
              value={product.id_category}
              onChange={handleChangeCategory}
            >
              <option value="choose">Choisir...</option>
              {categories.map((category) => (
                <option value={category.id}>{category.type}</option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Nom</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              name="name"
              value={product.name}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.File id="productImg" label="Image" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Theme</Form.Label>
            <Form.Control
              size="sm"
              as="select"
              name="id_theme"
              value={product.id_theme}
              onChange={handleChangeTheme}
            >
              <option value="choose">Choisir...</option>
              {themes.map((theme) => (
                <option value={theme.id}>{theme.name}</option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              name="description"
              value={product.description}
              onChange={handleInputChange}
            />
          </Form.Group>
        </div>
      </Form>
    </Container>
  );
};

export default ProductsAdd;
