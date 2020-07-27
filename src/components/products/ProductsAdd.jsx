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
    shop: '',
    category: '',
    theme: '',
    name: '',
    image: '',
    description: '',
  };

  const [product, setProduct] = useState(initialFormState);

  // PRODUCT : handle input changes
  // handle string changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  // SHOPS : handle shop field
  const [shops, setShops] = useState([]);

  const getShopsData = () => {
    const url = 'http://localhost:5000/api/shops';
    Axios.get(url)
      .then((response) => response.data)
      .then((data) => setShops(data));
  };

  useEffect(() => {
    getShopsData();
  }, []);

  // Shops searchBar
  const [query, setQuery] = useState('');
  const [filterShop, setFilterShop] = useState(shops);

  const handleShopsSearch = (event) => {
    setQuery(event);
    const oldList = shops.map((shop) => {
      return { id: shop.id, name: shop.name.toLowerCase() };
    });

    if (query !== '') {
      let newList = [];

      newList = oldList.filter((shop) =>
        shop.name.startsWith(query.toLowerCase())
      );
      setFilterShop(newList);
    } else {
      setFilterShop(shops);
    }
  };

  /*   const getShopName = (shopId) => {
    const foundShop = shops.find((shop) => shop.id === shopId);
    return foundShop ? foundShop.name : '';
  }; */

  // CATEGORIES : handle categories field
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

  // THEME : handle theme field
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

  /*   console.log(shops);
  console.log(product);
  console.log(query); */

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
          setProduct(initialFormState);
        }}
      >
        <div className="formContent">
          <Form.Group>
            <Form.Label>Enseigne</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              name="shop"
              value={product.shop}
              onChange={(event) => handleShopsSearch(event.target.value)}
            />
            {filterShop.map((shop) => (
              <div>{shop.name}</div>
            ))}
          </Form.Group>

          <Form.Group>
            <Form.Label>Catégorie de produit</Form.Label>

            <Form.Control
              as="select"
              defaultValue="Choix..."
              id="dropdown-basic-button"
              title="Catégorie"
              name="category"
              value=""
            >
              <option>Choix...</option>
              {categories &&
                categories.map((category) => <option>{category.type}</option>)}
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
              as="select"
              defaultValue="Choisir un thème"
              title="Theme"
              name="theme"
              value=""
            >
              <option>Choisir un thème</option>
              {themes && themes.map((theme) => <option>{theme.name}</option>)}
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

        <div className="formContent">
          <CardAdd />
        </div>
      </Form>
    </Container>
  );
};

export default ProductsAdd;
