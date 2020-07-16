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
  // retrieve shops names
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
  const [word, setWord] = useState('');
  const [filterShop, setFilterShop] = useState(shops);

  const handleShopsSearch = (event) => {
    setWord(event);
    const oldList = shops.map((shop) => {
      return { id: shop.id, name: shop.name.toLowerCase() };
    });

    if (word !== '') {
      let newList = [];

      newList = oldList.filter((shop) =>
        shop.name.startsWith(word.toLowerCase())
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

  /*   console.log(product);
  console.log(shops);
  console.log(word); */

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
            <Form.Control
              size="sm"
              type="text"
              value=""
              onChange={(event) => handleShopsSearch(event.target.value)}
            />
            {filterShop.map((shop) => (
              <div>{shop.name}</div>
            ))}
          </Form.Group>
          <Form.Group>
            <Form.Label>Category</Form.Label>

            <DropdownButton
              id="dropdown-basic-button"
              title="Catégorie"
              name="category"
              value=""
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
