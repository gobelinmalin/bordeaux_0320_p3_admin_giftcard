/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

import { Button, Container, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ProductsNavbar from './ProductsNavbar';

import './products.css';
import '../styles.css';

const Products = () => {
  // GET PRODUCTS
  const [products, setProducts] = useState([]);

  const getProductsData = () => {
    const url = 'http://localhost:5000/api/products';
    Axios.get(url)
      .then((response) => response.data)
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    getProductsData();
  }, []);

  // GET SHOPS NAME
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

  const getShopName = (shopId) => {
    const foundShop = shops.find((shop) => shop.id === shopId);
    return foundShop ? foundShop.name : '';
  };

  // GET CATEGORIES
  const [categories, setCategories] = useState([]);

  const getCategoriesData = () => {
    const url = 'http://localhost:5000/api/categories';
    Axios.get(url)
      .then((response) => response.data)
      .then((data) => setCategories(data));
  };

  useEffect(() => {
    getCategoriesData();
  }, []);

  const getCategory = (categoryId) => {
    const foundCategory = categories.find(
      (category) => category.id === categoryId
    );
    return foundCategory ? foundCategory.type : '';
  };

  // GET THEME
  const [themes, setThemes] = useState([]);

  const getThemesData = () => {
    const url = 'http://localhost:5000/api/themes';
    Axios.get(url)
      .then((response) => response.data)
      .then((data) => setThemes(data));
  };

  useEffect(() => {
    getThemesData();
  }, []);

  const getTheme = (themeId) => {
    const foundTheme = themes.find((theme) => theme.id === themeId);
    return foundTheme ? foundTheme.name : '';
  };

  console.log(categories);

  return (
    <Container>
      <ProductsNavbar />
      <div className="insideNavBar">
        <Link to="/admin/products/add">
          <Button variant="insideNav">Ajouter un produit</Button>
        </Link>
      </div>
      <div className="insideNavBar">
        <Link to="/admin/products/add">
          <Button variant="insideNav">Selectionner une enseigne</Button>
        </Link>
      </div>
      <div>
        <Table>
          <thead>
            <th>id</th>
            <th>Image</th>
            <th>Enseigne</th>
            <th>Categorie</th>
            <th>Produit</th>
            <th>Theme</th>
            <th>Prix</th>
            <th>Quantité</th>
            <th>Statut</th>
            <th>Actions</th>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr>
                <td>{product.id}</td>
                <td> </td>
                <td>{getShopName(product.id_shop)}</td>
                <td>{getCategory(product.id_category)}</td>
                <td>{product.name}</td>
                <td>{getTheme(product.id_theme)}</td>
                <td>{product.price}</td>
                <td> </td>
                <td>{product.sale_status}</td>
                <td className="action">
                  <FontAwesomeIcon className="action-icon" icon="tasks" />
                  <FontAwesomeIcon className="action-icon" icon="pen" />
                  <FontAwesomeIcon className="action-icon" icon="trash" />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default Products;
