import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { Table, Button, Container } from 'react-bootstrap';

import axios from 'axios';

const ShopDetail = () => {
  const { id } = useParams();

  const [shop, setShop] = useState(null);

  const getShopData = () => {
    const url = `http://localhost:5000/api/shops/${id}`;
    axios
      .get(url)
      .then((response) => response.data)
      .then((data) => setShop(data[0]));
  };

  useEffect(() => {
    if (!shop) {
      getShopData(id);
    }
  });

  return (
    <Container>
      <Link to="/admin/shops">
        <Button variant="warning">Retour aux enseignes</Button>
      </Link>
      <Table>
        <tbody>
          <tr>
            <th>id</th>
            <td>{id}</td>
          </tr>
          <tr>
            <th>Name</th>
            <td>{shop && shop.name}</td>
          </tr>
          <tr>
            <th>Date de creation</th>
            <td />
          </tr>
          <tr>
            <th>Date de dernière mise à jour</th>
            <td />
          </tr>
          <tr>
            <th>Tel 1</th>
            <td />
          </tr>
          <tr>
            <th>Tel 2</th>
            <td />
          </tr>
          <tr>
            <th>Notes</th>
            <td />
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default ShopDetail;
