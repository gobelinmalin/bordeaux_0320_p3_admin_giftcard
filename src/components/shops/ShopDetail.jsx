import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import { Table, Button, Container } from 'react-bootstrap';

import './shops.css';
import '../styles.css';

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
      <div className="insideNavBar">
        <Link to="/admin/shops">
          <Button variant="insideNav">Retour aux enseignes</Button>
        </Link>
        <Link to="/admin/shops">
          <Button variant="insideNav">Imprimer la fiche</Button>
        </Link>
      </div>
      <div className="editFormat">
        <Table>
          <tbody>
            <tr>
              <th>id</th>
              <td>{id}</td>
            </tr>
            <tr>
              <th>Nom</th>
              <td>{shop && shop.name}</td>
            </tr>
            <tr>
              <th>SIREN</th>
              <td />
            </tr>
            <tr>
              <th>Type d&apos;enseigne</th>
              <td />
            </tr>
            <tr>
              <th>Theme</th>
              <td />
            </tr>
            <tr>
              <th>Type(s) de produit(s)</th>
              <td />
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
              <th>Personne à contacter</th>
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
              <th>Email</th>
              <td />
            </tr>
            <tr>
              <th>Website</th>
              <td />
            </tr>
            <tr>
              <th>Adresse</th>
              <td />
            </tr>
            <tr>
              <th>Code postal</th>
              <td />
            </tr>
            <tr>
              <th>Ville</th>
              <td />
            </tr>
            <tr>
              <th>Notes</th>
              <td />
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default ShopDetail;
