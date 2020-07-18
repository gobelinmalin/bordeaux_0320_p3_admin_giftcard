/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Form,
  Button,
  DropdownButton,
  Dropdown,
  Col,
  Container,
} from 'react-bootstrap';
import axios from 'axios';

import './shops.css';
import '../styles.css';

const ShopsAdd = () => {
  const initialFormState = {
    id: null,
    date: '',
    legal_status: '',
    siren: '',
    online: false,
    offline: false,
    name: '',
    logo: '',
    description: '',
    sales_conditions: '',
    status: false,
    website: '',
    store: '',
    headOffice: '',
    head_street: '',
    head_street2: '',
    head_city: '',
    head_zipcode: '',
    head_state: '',
    head_country: '',
    contact1_name: '',
    contact1_phone1: '',
    contact1_phone2: '',
    contact1_email: '',
    contact2_name: '',
    contact2_phone1: '',
    contact2_phone2: '',
    contact2_email: '',
    bank_account_name: '',
    eban: '',
    notes: '',
  };

  const [shop, setShop] = useState(initialFormState);

  // set day time
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 3600000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  // handle string input
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setShop({ ...shop, [name]: value });
  };

  // handle checkbox e-shop
  const handleCheckOnline = (event) => {
    const { name } = event.target;
    setShop({ ...shop, [name]: !shop.online });
  };

  // handle checkbox boutique
  const handleCheckOffline = (event) => {
    const { name } = event.target;
    setShop({ ...shop, [name]: !shop.offline });
  };

  // handle checkbox status
  const handleCheckStatus = (event) => {
    const { name } = event.target;
    setShop({ ...shop, [name]: !shop.status });
  };

  // CRUD operation
  const addShop = () => {
    const url = 'http://localhost:5000/api/shops';
    axios
      .post(url, shop)
      .then((response) => response.data)
      .then((data) => setShop(data));
  };

  console.log(shop);

  return (
    <Container>
      <div className="insideNavBar">
        <Link to="/admin/shops">
          <Button variant="insideNav">Retour aux enseignes</Button>
        </Link>
      </div>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          addShop(shop);
          setShop(initialFormState);
        }}
      >
        <h2>Ajout d&apos;une nouvelle enseigne</h2>

        {/* Shop identity Form */}
        <div className="formContent">
          <p>Identité de l&apos;enseigne</p>
          <Form.Group>
            <Form.Label>Date de création*</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              name="add_time"
              value={date.toLocaleDateString()}
              placeholder={date.toLocaleDateString()}
              onChange=""
            />
          </Form.Group>

          <div className="flex spaceBetween">
            <Form.Group>
              <Form.Label>Forme Juridique*</Form.Label>
              <Form.Control as="select" name="legal_status">
                <option>EURL</option>
                <option>SA</option>
                <option>SARL</option>
                <option>SAS</option>
                <option>Auto-Entrepreneur</option>
                <option>Autre</option>
              </Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>n° SIREN*</Form.Label>
              <Form.Control
                type="text"
                name="registration_number"
                value=""
                onChange=""
              />
            </Form.Group>
          </div>
          <div className="flex spaceBetween">
            <Form.Group>
              <Form.Label>Theme*</Form.Label>
              <DropdownButton
                id="dropdown-basic-button"
                name="theme"
                role="menuitem"
                title="choix du theme"
              >
                <Dropdown.Item href="#/action-1">Mode</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Bien-etre</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Maison</Dropdown.Item>
                <Dropdown.Item href="#/action-4">Sport</Dropdown.Item>
                <Dropdown.Item href="#/action-5">Gastronomie</Dropdown.Item>
                <Dropdown.Item href="#/action-5">Evasion</Dropdown.Item>
                <Dropdown.Item href="#/action-5">Culture</Dropdown.Item>
                <Dropdown.Item href="#/action-5">Education</Dropdown.Item>
                <Dropdown.Item href="#/action-5">Adulte</Dropdown.Item>
              </DropdownButton>
            </Form.Group>
            <Form.Group className="shopType">
              <Form.Label>Type d&apos;enseigne*</Form.Label>
              <div>
                <Form.Check
                  label="e-shop"
                  name="online"
                  check={shop.online}
                  onChange={(event) => handleCheckOnline(event)}
                />
                <Form.Check
                  label="boutique"
                  name="offline"
                  check={shop.offline}
                  onChange={(event) => handleCheckOffline(event)}
                />
              </div>
            </Form.Group>
          </div>
          <Form.Group>
            <Form.Label>Nom*</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={shop.name}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description*</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              type="text"
              name="description"
              value={shop.description}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Conditions de vente</Form.Label>
            <Form.Control
              as="textarea"
              rows="5"
              type="text"
              name="sales_conditions"
              value={shop.sales_conditions}
              onChange={handleInputChange}
            />
          </Form.Group>
        </div>

        {/* Shop status */}
        <div className="formContent">
          <Form.Group>
            <p>Statut de l&apos;enseigne partenaire</p>
            <Form.Check
              label="activer l'enseigne"
              name="status"
              value={shop.status}
              onChange={(event) => handleCheckStatus(event)}
            />
          </Form.Group>
        </div>

        {/* Commercial area */}
        <div className="formContent">
          <p>Présence commerciale</p>
          <Form.Group>
            <Form.Label>Website</Form.Label>
            <Form.Control
              type="text"
              name="website"
              value={shop.website}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Boutique(s)</Form.Label>
            <Form.Control
              type="text"
              name="store"
              value=""
              onChange={handleInputChange}
            />
          </Form.Group>
        </div>

        {/* Headquarters */}
        <div className="formContent">
          <p>Siège Social</p>
          <Form.Group>
            <Form.Label>Nom du siège social</Form.Label>
            <Form.Control
              type="text"
              name="headOffice"
              value={shop.headOffice}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>N° et Voie</Form.Label>
            <Form.Control
              type="text"
              name="head_street"
              value={shop.head_street}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Complement</Form.Label>
            <Form.Control
              type="text"
              name="head_street2"
              value={shop.head_street2}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Row>
              <Col xs={8}>
                <Form.Label>Ville</Form.Label>
                <Form.Control
                  type="text"
                  name="head_city"
                  value={shop.head_city}
                  onChange={handleInputChange}
                />
              </Col>
              <Col>
                <Form.Label>Code postal</Form.Label>
                <Form.Control
                  type="text"
                  name="head_zipcode"
                  value={shop.head_zipcode}
                  onChange={handleInputChange}
                />
              </Col>
            </Form.Row>
          </Form.Group>
          <Form.Group>
            <Form.Row>
              <Col>
                <Form.Label>Région/Etat</Form.Label>
                <Form.Control
                  type="text"
                  name="head_state"
                  value={shop.head_state}
                  onChange={handleInputChange}
                />
              </Col>
              <Col>
                <Form.Label>Pays</Form.Label>
                <Form.Control
                  type="text"
                  name="head_country"
                  value={shop.head_country}
                  onChange={handleInputChange}
                />
              </Col>
            </Form.Row>
          </Form.Group>
        </div>

        {/* Contacts infos */}
        <div className="formContent">
          <p>Personnes à contacter</p>
          <Form.Group>
            <Form.Label>Nom du contact 1</Form.Label>
            <Form.Control
              type="text"
              name="contact1_name"
              value={shop.contact1_name}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>email</Form.Label>
            <Form.Control
              type="email"
              name="contact1_email"
              value={shop.contact1_email}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Row>
              <Col>
                <Form.Label>tel 1</Form.Label>
                <Form.Control
                  type="text"
                  name="contact1_phone1"
                  value={shop.contact1_phone1}
                  onChange={handleInputChange}
                />
              </Col>
              <Col>
                <Form.Label>tel 2</Form.Label>
                <Form.Control
                  type="text"
                  name="contact1_phone2"
                  value={shop.contact1_phone2}
                  onChange={handleInputChange}
                />
              </Col>
            </Form.Row>
          </Form.Group>
          <Form.Group>
            <Form.Label>Nom du contact 2</Form.Label>
            <Form.Control
              type="text"
              name="contact2_name"
              value={shop.contact2_name}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>email</Form.Label>
            <Form.Control
              type="email"
              name="contact2_email"
              value={shop.contact2_email}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Row>
              <Col>
                <Form.Label>tel 1</Form.Label>
                <Form.Control
                  type="text"
                  name="contact2_phone1"
                  value={shop.contact2_phone1}
                  onChange={handleInputChange}
                />
              </Col>
              <Col>
                <Form.Label>tel 2</Form.Label>
                <Form.Control
                  type="text"
                  name="contact2_phone2"
                  value={shop.contact2_phone2}
                  onChange={handleInputChange}
                />
              </Col>
            </Form.Row>
          </Form.Group>
        </div>
      </Form>

      {/* Bank infos */}
      <div className="formContent">
        <p>Informations bancaires</p>
        <Form.Group>
          <Form.Label>Nom du compte</Form.Label>
          <Form.Control
            type="text"
            name="bank_account_name"
            value={shop.bank_account_name}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Eban</Form.Label>
          <Form.Control
            type="text"
            name="eban"
            value={shop.eban}
            onChange={handleInputChange}
          />
        </Form.Group>
      </div>

      {/* Notes */}
      <div className="formContent">
        <p>Notes</p>
        <Form.Group>
          <Form.Label>Notes</Form.Label>
          <Form.Control
            as="textarea"
            rows="5"
            type="text"
            name="notes"
            value={shop.notes}
            onChange={handleInputChange}
          />
        </Form.Group>
      </div>

      {/* Form validation button */}
      <div className="AddButton">
        <Button type="submit">Ajouter l&apos;enseigne</Button>
      </div>
    </Container>
  );
};

export default ShopsAdd;
