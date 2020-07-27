// import modules
import React, { useState, useEffect } from 'react';
import { Table, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Axios from 'axios';

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
  const allCategories = categories.map((category) => {
    return (
      <tr>
        <td>{category.id}</td>
        <td>{category.type}</td>
        <td>
          <Link to={`/admin/categories/${category.id}`}>
            <FontAwesomeIcon type="submit" icon="user-edit" />
          </Link>
        </td>
        <td>
          <FontAwesomeIcon
            type="submit"
            icon="trash"
            onClick={() => deleteCategory(category.id)}
          />
        </td>
      </tr>
    );
  });
  return (
    <>
      <Container>
        <h3>Liste des administrateurs</h3>
        <Table hover>
          <thead>
            <tr>
              <th>#id</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>{allCategories}</tbody>
        </Table>
        <CategoryAdd />
      </Container>
    </>
  );
};

export default Category;
