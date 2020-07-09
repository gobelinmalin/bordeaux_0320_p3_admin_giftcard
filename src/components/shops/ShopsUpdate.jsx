import React, { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';

import { Form, Button } from 'react-bootstrap';

import axios from 'axios';

const ShopsUpdate = () => {
  // catch id of the shop in params url
  const { id } = useParams();
  // useHistory to redirect after submission
  const history = useHistory();

  // null because shop isn't retrieved yet
  const [shop, setShop] = useState(null);

  const getShopData = () => {
    const url = `http://localhost:5000/api/shops/${id}`;
    axios
      .get(url)
      .then((response) => response.data)
      .then((data) => setShop(data[0]));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setShop({ ...shop, [name]: value });
  };

  const updateShop = () => {
    const url = `http://localhost:5000/api/shops/${id}`;
    axios
      .put(url, shop)
      .then(
        (response) => response.status === 200 && history.push('/admin/shops')
      );
  };

  // if ! needed for avoiding infinite setState
  useEffect(() => {
    if (!shop) {
      getShopData(id);
    }
  });

  // if because we don't have any shop before useEffect call
  if (shop) {
    return (
      <>
        <Link to="/admin/shops">
          <Button variant="warning">Retour aux enseignes</Button>
        </Link>
        <Link to={`/admin/shops/details/${shop.id}`}>
          <Button variant="warning">Imprimer la fiche</Button>
        </Link>

        <Form
          onSubmit={(click) => {
            click.preventDefault();
            updateShop();
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
          <Button type="submit">Modifier l&apos;enseigne</Button>
        </Form>
      </>
    );
  }
  return null;
};

export default ShopsUpdate;
