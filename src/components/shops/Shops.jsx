import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Container, Modal, Table } from 'react-bootstrap';

import './shops.css';
import '../styles.css';

const Shops = () => {
  const [shops, setShops] = useState([]);

  // catch shop to pass to delete Modal
  const [shopId, setShopId] = useState();

  // retrieve all shops from bdd

  const getShopsData = () => {
    const url = `${process.env.REACT_APP_HOST}/shops`;
    Axios.get(url)
      .then((response) => response.data)
      .then((data) => setShops(data));
  };

  // handle delete modal
  const [showModal, setShowModal] = useState(false);

  const handleShow = (id) => {
    setShowModal(true);
    setShopId(id);
  };

  const handleClose = () => setShowModal(false);

  const deleteShop = () => {
    const url = `${process.env.REACT_APP_HOST}/shops/${shopId}`;
    Axios.delete(url)
      .then((response) => response.data && setShowModal(false))
      .finally(() => getShopsData());
  };

  // fill table with shops data
  useEffect(() => {
    getShopsData();
  }, []);

  return (
    <Container>
      <h3 className="titlelist">Liste des enseignes</h3>
      <div className="insideNavBar">
        <Link to="/admin/shops/add">
          <Button variant="insideNav"> Ajouter une enseigne </Button>
        </Link>
      </div>

      <div>
        <Table>
          <thead>
            <tr>
              <th>id</th>
              <th>Logo</th>
              <th>Name</th>
              <th>Siège social</th>
              <th>Theme</th>
              <th>E-Shop</th>
              <th>Boutique</th>
              <th>Statut</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {shops.map((shop) => (
              <tr key={shop.id}>
                <td>{shop.id}</td>
                <td className="img_product">
                  <img src={shop.logo} alt={shop.name} />
                </td>
                <td>
                  <Link to={`/admin/shops/update/${shop.id}`}>{shop.name}</Link>
                </td>
                <td>
                  {shop.head_street}, {shop.head_zipcode} {shop.head_city},{' '}
                  {shop.head_country}
                </td>
                <td> </td>
                <td>
                  <div className={shop.online ? 'e-shop' : 'shop'}>
                    {shop.online}
                  </div>
                </td>
                <td>
                  <div className={shop.offline ? 'e-shop' : 'shop'}>
                    {shop.offline}
                  </div>
                </td>
                <th>
                  <div className={shop.status ? 'activated' : 'standby'}>
                    {shop.status}
                  </div>
                </th>
                <td className="action">
                  <Link to={`/admin/shops/details/${shop.id}`}>
                    <FontAwesomeIcon className="action-icon" icon="tasks" />
                  </Link>
                  <Link to={`/admin/shops/update/${shop.id}`}>
                    <FontAwesomeIcon className="action-icon" icon="pen" />
                  </Link>
                  <FontAwesomeIcon
                    className="action-icon"
                    icon="trash"
                    onClick={() => handleShow(shop.id)}
                  />
                  {/* Delete Modal */}
                  <Modal show={showModal} onHide={handleClose} shopId={shop.id}>
                    <Modal.Header closeButton>
                      Attention, vous ne devez pas supprimer l&apos;enseigne
                      partenaire si des produits lui sont ou lui ont été
                      associés.
                    </Modal.Header>
                    <Modal.Footer>
                      <Button onClick={handleClose}>Annuler</Button>
                      <Button onClick={() => deleteShop(shopId)}>
                        Supprimer
                      </Button>
                    </Modal.Footer>
                  </Modal>
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
