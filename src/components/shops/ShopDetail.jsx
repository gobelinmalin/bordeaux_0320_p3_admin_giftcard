import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Button, Container } from 'react-bootstrap';

const ShopDetail = () => {
  return (
    <Container>
      <Link to="/admin/shops">
        <Button variant="warning">Retour aux enseignes</Button>
      </Link>
      <Table>
        <thead>
          <tr>
            <th>Champ</th>
            <th>Donnée</th>
          </tr>
        </thead>
        <tbody>
          <td />
          <td />
        </tbody>
      </Table>
    </Container>
  );
};

export default ShopDetail;
