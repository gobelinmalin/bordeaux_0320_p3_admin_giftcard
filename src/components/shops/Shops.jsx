import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import ShopsList from './ShopsList';

const Shops = () => {
  const [shops, setShops] = useState([]);

  //
  const getShopsData = () => {
    const url = 'http://localhost:5000/api/shops';
    axios
      .get(url)
      .then((response) => response.data)
      .then((data) => setShops(data));
  };

  const deleteShop = (id) => {
    const url = `http://localhost:5000/api/shops/${id}`;
    axios
      .delete(url)
      .then((response) => response.status === 200 && getShopsData());
  };

  useEffect(() => {
    getShopsData();
  }, []);

  return (
    <Container>
      <Link to="/admin/shops/add">
        <Button variant="warning">Ajouter une enseigne</Button>
      </Link>

      <ShopsList shops={shops} deleteShop={deleteShop} />
    </Container>
  );
};

export default Shops;
