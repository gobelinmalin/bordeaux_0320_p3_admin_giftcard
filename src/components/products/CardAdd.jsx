import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import { Link } from 'react-router-dom';
import '../styles.css';
import { Form, Button, Container } from 'react-bootstrap';

import ProductNavbar from './ProductsNavbar';

const CardAdd = () => {
  // set initial form
  const initialFormState = {
    id: null,
    creationDate: null,
    format: NaN,
    id_product: null,
    code_ean: null,
    code_card: null,
    credit: null,
    code_security: null,
    validity: '',
    multi_use: false,
    sale_status: true,
  };

  // CARD: handle product field
  const [card, setCard] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCard({ ...card, [name]: value });
  };

  // set day time
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 900000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  // handle checkbox shop
  const handleCheckUse = (event) => {
    const { name } = event.target;
    setCard({ ...card, [name]: !card.multi_use });
  };

  // handle change format
  const handleChangeFormat = (event) => {
    const { name, value } = event.target;
    if (value === 'ecard') {
      setCard({ ...card, [name]: true });
    } else {
      setCard({ ...card, [name]: false });
    }
  };

  // PRODUCT : handle product field
  const [products, setProducts] = useState([]);
  const getProductsData = () => {
    const url = `${process.env.REACT_APP_HOST}/products`;
    Axios.get(url)
      .then((response) => response.data)
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    getProductsData();
  }, []);

  const handleChangeProduct = (event) => {
    const { name, value } = event.target;
    setCard({ ...card, [name]: value });
  };

  // handleDateChange
  const handleDateChange = (event) => {
    const { name, value } = event.target;
    setCard({ ...card, [name]: value });
  };

  // ADD card to database
  const addCard = () => {
    const url = `${process.env.REACT_APP_HOST}/cards`;
    Axios.post(url, card)
      .then((response) => response.data)
      .then((data) => setCard(data));
  };

  return (
    <Container>
      <ProductNavbar />

      <div className="formContent">
        <div className="insideNavBar">
          <Link to="/admin/products/add-card">
            <Button variant="insideNav">Nouvelle carte cadeau</Button>
          </Link>
          <Link to=" ">
            <Button variant="insideNav">Nouvel abonnement</Button>
          </Link>
        </div>
      </div>

      <div className="formContent">
        <h2>Ajouter une carte cadeau</h2>
      </div>

      <Form
        onSubmit={(event) => {
          event.preventDefault();
          addCard(card);
          setCard(initialFormState);
        }}
      >
        <div className="formContent">
          <p>Ajout de carte cadeau</p>
          <Form.Group>
            <Form.Label>Date d&apos;ajout</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              name="creationDate"
              defaultValue={date.toLocaleDateString()}
              value={card.creationDate}
              placeholder={date.toLocaleDateString()}
              onChange={handleInputChange}
              readOnly
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Sélectionner le Produit Type</Form.Label>
            <Form.Control
              size="sm"
              as="select"
              name="id_product"
              value={card.id_product}
              onChange={handleChangeProduct}
            >
              <option value="choose">Choisir...</option>
              {products.map((product) => (
                <option value={product.id}>
                  {product.id}-{product.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Format de la carte</Form.Label>
            <div>
              <Form.Check
                inline
                label="Carte Physique"
                type="radio"
                name="format"
                value="card"
                onChange={handleChangeFormat}
              />
              <Form.Check
                inline
                label="E-card"
                type="radio"
                name="format"
                value="ecard"
                onChange={handleChangeFormat}
              />
            </div>
          </Form.Group>

          <Form.Group>
            <Form.Label>Code EAN de la carte</Form.Label>
            <Form.Control
              type="text"
              name="code_ean"
              value={card.code_ean}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Code de la carte</Form.Label>
            <Form.Control
              type="text"
              name="code_card"
              value={card.code_card}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Code de securité</Form.Label>
            <Form.Control
              type="text"
              name="code_security"
              value={card.code_security}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Credit de la carte</Form.Label>
            <Form.Control
              type="text"
              name="credit"
              value={card.credit}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Date d&apos;expiration de la carte</Form.Label>
            <Form.Control
              type="date"
              name="validity"
              value={card.validity}
              onChange={handleDateChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Nombre d&apos;utilisation(s)</Form.Label>
            <Form.Check
              label="Utilisable en plusieurs fois"
              name="multi_use"
              check={card.multi_use}
              onChange={handleCheckUse}
            />
          </Form.Group>
          {/* Form validation button */}
        </div>
        <div className="AddButton">
          <Button type="submit">Ajouter cette carte</Button>
        </div>
      </Form>
    </Container>
  );
};

export default CardAdd;
