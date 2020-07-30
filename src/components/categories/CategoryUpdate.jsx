import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router';
import { Link, useHistory } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';

import ProductsNavbar from '../products/ProductsNavbar';

import '../styles.css';

function CategoryUpdate() {
  const { id } = useParams();
  const history = useHistory();
  const [category, setCategory] = useState({});

  const getCategoryData = () => {
    Axios({
      method: 'get',
      url: `${process.env.REACT_APP_HOST}/categories/${id}`,
    })
      .then((response) => response.data)
      .then((data) => setCategory(data[0]));
  };

  useEffect(() => {
    getCategoryData();
  }, []);

  const updateCategory = () => {
    const url = `${process.env.REACT_APP_HOST}/categories/${id}`;
    Axios.put(url, category)
      .then((response) => response.data)
      .then((data) => setCategory(data))
      .then(history.push('/admin/categories'));
  };

  const handleChange = (event) => {
    event.preventDefault();
    const { value, name } = event.target;
    setCategory({ ...category, [name]: value });
  };

  if (category) {
    return (
      <Container>
        <ProductsNavbar />
        <div className="insideNavBar">
          <Link to="/admin/products">
            <Button variant="insideNav">Retour aux produits</Button>
          </Link>
        </div>
        <div className="sectionTitle">
          <h3>Modifier cette catégorie</h3>
        </div>
        <Form
          action=""
          className="form-group"
          onSubmit={() => updateCategory()}
        >
          <Form.Group>
            <Form.Control
              name="type"
              type="text"
              value={category.type}
              onChange={(event) => handleChange(event)}
            />
          </Form.Group>
          <Button type="submit" variant="insideNav">
            Modifier la catégorie
          </Button>
        </Form>
      </Container>
    );
  }
  return null;
}

export default CategoryUpdate;
