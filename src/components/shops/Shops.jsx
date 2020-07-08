import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table, Button, Container } from 'react-bootstrap';

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

      <div>
        <Table>
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>E-Shop</th>
              <th>Boutique</th>
            </tr>
          </thead>
          <tbody>
            {shops.map((shop) => (
              <tr>
                <td>{shop.id}</td>
                <td>
                  <Link to={`/admin/shops/update/${shop.id}`}>{shop.name}</Link>
                </td>
                <td>{shop.online}</td>
                <td>{shop.offline}</td>
                <td>
                  <Link to={`/admin/shops/details/${shop.id}`}>
                    <Button className="button muted-button">Fiche</Button>
                  </Link>
                  <Link to={`/admin/shops/update/${shop.id}`}>
                    <Button className="button muted-button">Edit</Button>
                  </Link>
                  <Button
                    onClick={() => deleteShop(shop.id)}
                    className="button muted-button"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default Shops;
