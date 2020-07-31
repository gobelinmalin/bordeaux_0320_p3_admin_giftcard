import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

import { Button, Container, Modal, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ProductsNavbar from './ProductsNavbar';

import '../styles.css';

const CardsProducts = () => {
  // GET cards
  const [cards, setCards] = useState([]);

  const getCardsData = () => {
    const url = `${process.env.REACT_APP_HOST}/products/cards`;
    Axios.get(url)
      .then((response) => response.data)
      .then((data) => setCards(data));
  };

  useEffect(() => {
    getCardsData();
  }, []);

  // GET THEME
  const [themes, setThemes] = useState([]);

  const getThemesData = () => {
    const url = `${process.env.REACT_APP_HOST}/themes`;
    Axios.get(url)
      .then((response) => response.data)
      .then((data) => setThemes(data));
  };

  useEffect(() => {
    getThemesData();
  }, []);

  const getTheme = (themeId) => {
    const foundTheme = themes.find((theme) => theme.id === themeId);
    return foundTheme ? foundTheme.name : '';
  };

  // GET SHOP
  const [shops, setShops] = useState([]);

  const getShopsData = () => {
    const url = `${process.env.REACT_APP_HOST}/shops`;
    Axios.get(url)
      .then((response) => response.data)
      .then((data) => setShops(data));
  };

  useEffect(() => {
    getShopsData();
  }, []);

  const getShops = (shopId) => {
    const foundShop = shops.find((shop) => shop.id === shopId);
    return foundShop ? foundShop.name : '';
  };

  // Delete modal
  // handle delete modal
  const [cardId, setCardId] = useState();
  const [showModal, setShowModal] = useState(false);

  const handleShow = (idcard) => {
    setShowModal(true);
    setCardId(idcard);
  };

  const handleClose = () => setShowModal(false);

  const deleteCard = () => {
    const url = `${process.env.REACT_APP_HOST}/product/cards/${cardId}`;
    Axios.delete(url)
      .then((response) => response.data && setShowModal(false))
      .finally(() => getCardsData());
  };

  return (
    <Container>
      <ProductsNavbar />
      <hr />
      <h3>Liste des cartes cadeaux</h3>
      <div className="insideNavBar">
        <Link to="/admin/products/add-card">
          <Button variant="insideNav">Ajouter une carte cadeau</Button>
        </Link>
      </div>
      <div>
        <Table>
          <thead>
            <th>id</th>
            <th>Image</th>
            <th>Nom</th>
            <th>Enseigne</th>
            <th>Theme</th>
            <th>Format</th>
            <th>Prix</th>
            <th>Statut</th>
            <th>Actions</th>
          </thead>
          <tbody>
            {cards.map((card) => (
              <tr key={card.idcard}>
                <td>{card.idcard}</td>
                <td className="img_product">
                  <img src={card.image} alt={card.name} />
                </td>
                <td>{card.name}</td>
                <td>{getShops(card.id_shop)}</td>
                <td>{getTheme(card.id_theme)}</td>
                {card.format === 1 ? <td>e-card</td> : <td>carte physique</td>}
                <td>{card.credit}€</td>
                <td>
                  <div className={card.sale_status ? 'notsale' : 'sale'}>
                    {card.sale_status}
                  </div>
                </td>
                <td className="action">
                  <FontAwesomeIcon className="action-icon" icon="tasks" />
                  <FontAwesomeIcon className="action-icon" icon="pen" />

                  <FontAwesomeIcon
                    className="action-icon"
                    icon="trash"
                    onClick={() => handleShow(card.id)}
                  />
                  {/* Delete Modal */}
                  <Modal show={showModal} onHide={handleClose}>
                    <Modal.Header closeButton>
                      Etes vous sûre de vouloir supprimer ce produit ?
                    </Modal.Header>
                    <Modal.Footer>
                      <Button onClick={handleClose}>Annuler</Button>
                      <Button onClick={() => deleteCard()}>
                        Supprimer ce produit
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

export default CardsProducts;
