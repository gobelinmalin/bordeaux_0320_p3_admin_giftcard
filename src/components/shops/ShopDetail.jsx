import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Button, Container } from 'react-bootstrap';

const ShopDetail = () => {
  return (
    <Container>
      <Link to="/admin/shops/add">
        <Button variant="warning">Ajouter une enseigne</Button>
      </Link>
      <Table>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>E-Shop</th>
            <th>Boutique</th>
          </tr>
        </thead>
      </Table>
    </Container>
  );
};

export default ShopDetail;
