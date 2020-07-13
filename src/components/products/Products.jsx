import React, { useState, useEffect } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Axios from 'axios';

import ProductsNavbar from './ProductsNavbar';

import './products.css';
import '../styles.css';

const Products = () => {
  const [products, setProducts] = useState([]);

  // retrieve products
  const getProductsData = () => {
    const url = 'http://localhost:5000/api/products';
    Axios.get(url)
      .then((response) => response.data)
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <Container>
      <ProductsNavbar />
      <div className="insideNavBar">
        <Link to="/admin/products/add">
          <Button variant="insideNav">Ajouter un produit</Button>
        </Link>
      </div>
      <div>
        <Table>
          <thead>
            <th>id</th>
            <th>Image</th>
            <th>Enseigne</th>
            <th>Produit</th>
            <th>Theme</th>
            <th>Categorie</th>
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
                <td>{product.id_shop}</td>
                <td>{product.name}</td>
                <td>{product.theme}</td>
                <td> </td>
                <td>{product.price}</td>
                <td> </td>
                <td>{product.sale_status}</td>
                <td>
                  <Button variant="editing">Fiche</Button>
                  <Button variant="editing">Modifier</Button>
                  <Button variant="deleting">Supprimer</Button>
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
