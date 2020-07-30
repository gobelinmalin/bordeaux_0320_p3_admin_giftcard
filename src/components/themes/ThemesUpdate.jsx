import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router';
import { Link, useHistory } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';

import ProductsNavbar from '../products/ProductsNavbar';

import '../styles.css';

const ThemesUpdate = () => {
  const { id } = useParams();
  const history = useHistory();
  const [theme, setTheme] = useState(null);

  const getThemeData = () => {
    const url = `${process.env.REACT_APP_HOST}/themes/${id}`;
    Axios.get(url)
      .then((response) => response.data)
      .then((data) => setTheme(data[0]));
  };

  const updateTheme = () => {
    const url = `${process.env.REACT_APP_HOST}/themes/${id}`;
    Axios.put(url, theme)
      .then((response) => response.data)
      .then((data) => setTheme(data))
      .then(history.push('/admin/themes'));
  };

  const handleChange = (event) => {
    event.preventDefault();
    const { value, name } = event.target;
    setTheme({ ...theme, [name]: value });
  };

  useEffect(() => {
    if (!theme) {
      getThemeData(id);
    }
  });

  if (theme) {
    return (
      <Container>
        <ProductsNavbar />
        <div className="insideNavBar">
          <Link to="/admin/products">
            <Button variant="insideNav">Retour aux produits</Button>
          </Link>
        </div>
        <div className="sectionTitle">
          <h3>Modifier ce theme</h3>
        </div>
        <Form className="form-group" onSubmit={(event) => updateTheme(event)}>
          <Form.Group>
            <Form.Control
              name="name"
              type="text"
              value={theme.name}
              onChange={(event) => handleChange(event)}
            />
          </Form.Group>
          <Button type="submit" variant="insideNav">
            Modifier le thème
          </Button>
        </Form>
      </Container>
    );
  }
  return null;
};

export default ThemesUpdate;
