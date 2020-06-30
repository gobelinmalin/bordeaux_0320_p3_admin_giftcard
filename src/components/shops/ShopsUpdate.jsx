import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const ShopsUpdate = ({ setEdit, currentShop, updateShop }) => {
  const [shop, setShop] = useState(currentShop);

  useEffect(() => {
    setShop(currentShop);
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setShop({ ...shop, [name]: value });
  };

  return (
    <>
      <Form
        onSubmit={(click) => {
          click.preventDefault();
          updateShop(shop.id, shop);
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
        <Button type="submit" onClick={() => setEdit(true)}>
          Modifier une enseigne
        </Button>
      </Form>
    </>
  );
};

export default ShopsUpdate;

ShopsUpdate.propTypes = {
  // currentShop: PropTypes.objectOf(PropTypes.object()).isRequired,
  setEdit: PropTypes.bool.isRequired,
  updateShop: PropTypes.func.isRequired,
};
