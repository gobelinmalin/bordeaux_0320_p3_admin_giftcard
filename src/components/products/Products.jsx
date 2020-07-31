import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

import { Button, Container, Modal, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ProductsNavbar from './ProductsNavbar';

import '../styles.css';

const Products = () => {
  // GET PRODUCTS
  const [products, setProducts] = useState([]);

  const getProductsData = () => {
    const url = `${process.env.REACT_APP_HOST}/products`;
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
    const url = `${process.env.REACT_APP_HOST}/shops`;
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
    const url = `${process.env.REACT_APP_HOST}/categories`;
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
    const url = `${process.env.REACT_APP_HOST}/themes`;
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

  // Delete modal
  // handle delete modal
  const [productId, setProductId] = useState();
  const [showModal, setShowModal] = useState(false);

  const handleShow = (id) => {
    setShowModal(true);
    setProductId(id);
  };

  const handleClose = () => setShowModal(false);

  const deleteProduct = () => {
    const url = `${process.env.REACT_APP_HOST}/products/${productId}`;
    Axios.delete(url)
      .then((response) => response.data && setShowModal(false))
      .finally(() => getProductsData());
  };

  return (
    <Container>
      <ProductsNavbar />
      <hr />
      <h3>Liste des produits types</h3>
      <div className="insideNavBar">
        <Link to="/admin/products/add">
          <Button variant="insideNav">Ajouter un produit type</Button>
        </Link>
        <Link to="/admin/products/cards">
          <Button variant="insideNav">Voir les cartes cadeaux</Button>
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
            <th>Actions</th>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr>
                <td>{product.id}</td>
                <td className="img_product">
                  <img src={product.image} alt={product.name} />
                </td>
                <td>{getShopName(product.id_shop)}</td>
                <td>{getCategory(product.id_category)}</td>
                <td>{product.name}</td>
                <td>{getTheme(product.id_theme)}</td>
                <td className="action">
                  <FontAwesomeIcon className="action-icon" icon="tasks" />
                  <FontAwesomeIcon className="action-icon" icon="pen" />

                  <FontAwesomeIcon
                    className="action-icon"
                    icon="trash"
                    onClick={() => handleShow(product.id)}
                  />
                  {/* Delete Modal */}
                  <Modal show={showModal} onHide={handleClose}>
                    <Modal.Header closeButton>
                      Attention, vous ne pouvez pas supprimer ce produit-type si
                      des produits lui sont associés.
                    </Modal.Header>
                    <Modal.Footer>
                      <Button onClick={handleClose}>Annuler</Button>
                      <Button onClick={() => deleteProduct()}>Supprimer</Button>
                    </Modal.Footer>
                  </Modal>
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
