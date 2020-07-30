// import modules
import React, { useState, useEffect } from 'react';
import { Button, Table, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import ProductsNavbar from '../products/ProductsNavbar';

// import component
import CategoryAdd from './CategoryAdd';

const Category = () => {
  const [categories, setCategories] = useState([{}]);
  const getCategoriesDatas = () => {
    Axios.get(`${process.env.REACT_APP_HOST}/categories`)
      .then((response) => response.data)
      .then((data) => setCategories(data));
  };

  useEffect(() => {
    getCategoriesDatas();
  }, []);

  const deleteCategory = (id) => {
    Axios.delete(`${process.env.REACT_APP_HOST}/categories/${id}`, categories)
      .then((response) => response.status === 200 && categories)
      .finally(() => getCategoriesDatas());
  };

  return (
    <Container>
      <ProductsNavbar />
      <div className="insideNavBar">
        <Link to="/admin/products">
          <Button variant="insideNav">Retour aux produits</Button>
        </Link>
      </div>
      <div className="sectionTitle">
        <h3>Liste des catégories de produits</h3>
      </div>
      <Table>
        <thead>
          <tr>
            <th>#id</th>
            <th>Nom de la catégorie</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr>
              <td>{category.id}</td>
              <td>{category.type}</td>
              <td className="action">
                <Link to={`/admin/categories/${category.id}`}>
                  <FontAwesomeIcon type="submit" icon="pen" />
                </Link>
                <FontAwesomeIcon
                  type="submit"
                  icon="trash"
                  onClick={() => deleteCategory(category.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div>
        <CategoryAdd />
      </div>
    </Container>
  );
};

export default Category;
