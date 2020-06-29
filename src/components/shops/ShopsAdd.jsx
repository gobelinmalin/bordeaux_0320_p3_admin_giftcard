import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

import PropTypes from 'prop-types';

const ShopsAdd = (props) => {
  const initialFormState = { id: null, name: '', online: '', offline: '' };
  const [shop, setShop] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setShop({ ...shop, [name]: value });
  };

  return (
    <>
      <Link to="/admin/shops">Retour aux enseignes</Link>
      <h1>ajouter une enseigne</h1>

      <Form
        onSubmit={(event) => {
          event.preventDefault();
          props.addShop(shop);
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

export default ShopsAdd;

ShopsAdd.propTypes = {
  addShop: PropTypes.func.isRequired,
};
