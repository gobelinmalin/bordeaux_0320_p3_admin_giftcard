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
    const url = `${process.env.REACT_APP_HOST}/shops/${id}`;
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

  if (shop) {
    return (
      <Container>
        <div className="insideNavBar">
          <Link to="/admin/shops">
            <Button variant="insideNav">Retour aux enseignes</Button>
          </Link>
          <Link to={`/admin/shops/update/${shop.id}`}>
            <Button variant="insideNav">Modifier l&apos;enseigne</Button>
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
                <th>Status</th>
                <td>
                  {shop.status ? 'enseigne active' : 'enseigne désactivée'}
                </td>
              </tr>
              <tr>
                <th>Date de creation</th>
                <td>{shop.add_time}</td>
              </tr>
              <tr>
                <th>Date de dernière mise à jour</th>
                <td />
              </tr>
              <tr>
                <th>Nom</th>
                <td>{shop.name}</td>
              </tr>
              <tr>
                <th>Type d&apos;enseigne</th>
                <td>
                  {shop.online ? 'eshop' : ''}
                  {shop.offline ? ' & boutique(s)' : ''}
                </td>
              </tr>
              <tr>
                <th>Theme</th>
                <td />
              </tr>
              <tr>
                <th>Type(s) de produit(s)</th>
                <td />
              </tr>
            </tbody>
          </Table>
          <Table>
            <tbody>
              <tr>
                <th>Website</th>
                <td>{shop.website}</td>
              </tr>
              <tr>
                <th>Boutiques</th>
                <td />
              </tr>
              <tr>
                <th>Forme juridique</th>
                <td>{shop.legal_status}</td>
              </tr>
              <tr>
                <th>SIREN</th>
                <td>{shop.siren}</td>
              </tr>
              <tr>
                <th>Eban</th>
                <td>{shop.eban}</td>
              </tr>
            </tbody>
          </Table>
          <Table>
            <tbody>
              <tr>
                <th>Contact 1</th>
                <td>{shop.contact1_name}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{shop.contact1_email}</td>
              </tr>
              <tr>
                <th>Telephone</th>
                <td>{shop.contact1_phone1}</td>
              </tr>
              <tr>
                <th>Telephone(autre)</th>
                <td>{shop.contact1_phone2}</td>
              </tr>
              <tr>
                <th>Contact 2</th>
                <td>{shop.contact2_name}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{shop.contact2_email}</td>
              </tr>
              <tr>
                <th>Telephone</th>
                <td>{shop.contact2_phone1}</td>
              </tr>
              <tr>
                <th>Telephone(autre)</th>
                <td>{shop.contact2_phone2}</td>
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
  }
  return null;
};

export default ShopDetail;
