import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import Axios from 'axios';

/* import PropTypes from 'prop-types'; */

const ShopsAdd = () => {
  const initialFormState = { id: null, name: '', online: '', offline: '' };

  const [shop, setShop] = useState(initialFormState);
  /*   const [submitted, setSubmitted] = useState(false); */

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setShop({ ...shop, [name]: value });
  };

  // CRUD operation
  const addShop = () => {
    Axios({
      method: 'post',
      url: 'http://localhost:3000/api/shops',
      data: shop,
    })
      .then((response) => response.data)
      .then((data) => setShop(data));
  };

  return (
    <>
      <Link to="/admin/shops">Retour aux enseignes</Link>
      <h1>ajouter une enseigne</h1>

      <Form
        onSubmit={(event) => {
          event.preventDefault();
          addShop(shop);
          setShop(initialFormState);
        }}
      >
        <Form.Group>
          <Form.Label>Nom</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={shop.name}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Online</Form.Label>
          <Form.Control
            type="text"
            name="online"
            value={shop.online}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Offline</Form.Label>
          <Form.Control
            type="text"
            name="offline"
            value={shop.offline}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button type="submit">Ajouter une enseigne</Button>
      </Form>
    </>
  );
};

/* ShopsAdd.propTypes = {
  addShop: PropTypes.func.isRequired,
}; */

export default ShopsAdd;
