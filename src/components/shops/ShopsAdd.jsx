import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form, Button, DropdownButton, Dropdown, Col } from 'react-bootstrap';
import axios from 'axios';

import '../styles.css';

const ShopsAdd = () => {
  // useHistory to redirect after submission
  const history = useHistory();
  const initialFormState = { id: null, name: '', online: '', offline: '' };

  const [shop, setShop] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setShop({ ...shop, [name]: value });
  };

  // CRUD operation
  const addShop = (id) => {
    const url = 'http://localhost:5000/api/shops';
    axios
      .post(url, shop)
      .then((response) => response.data)
      .then((data) => setShop(data))
      .then(history.push(`/admin/shops/details/${id}`));
  };

  return (
    <>
      <Link to="/admin/shops">
        <Button variant="warning">Retour aux enseignes</Button>
      </Link>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          addShop(shop);
          setShop(initialFormState);
        }}
      >
        <h1>ajouter une nouvelle enseigne</h1>

        {/* Shop identity Form */}
        <div className="formContent">
          <p>Identité de l&apos;enseigne</p>
          <Form.Group>
            <Form.Label>Date de création*</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              name="add_time"
              value=""
              onChange={handleInputChange}
            />
          </Form.Group>

          <div className="flex spaceBetween">
            <Form.Group>
              <Form.Label>Forme Juridique*</Form.Label>
              <DropdownButton
                id="dropdown-basic-button"
                title="statut" /* onSelect={handleSelect} */
              >
                <Dropdown.Item href="#/action-1">SAS</Dropdown.Item>
                <Dropdown.Item href="#/action-2">SARL</Dropdown.Item>
                <Dropdown.Item href="#/action-3">SA</Dropdown.Item>
                <Dropdown.Item href="#/action-4">EURL</Dropdown.Item>
                <Dropdown.Item href="#/action-5">
                  Auto-Entrepreneur
                </Dropdown.Item>
              </DropdownButton>
            </Form.Group>
            <Form.Group>
              <Form.Label>n° SIREN*</Form.Label>
              <Form.Control
                type="text"
                name="registration_number"
                value=""
                onChange={handleInputChange}
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
                title="choix du theme" /* onSelect={handleSelect} */
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
                  value={shop.online}
                  onChange={handleInputChange}
                />
                <Form.Check
                  label="boutique"
                  value={shop.offline}
                  onChange={handleInputChange}
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
        </div>

        {/* Commercial area */}
        <div className="formContent">
          <p>Présence commerciale</p>
          <Form.Group>
            <Form.Label>Website</Form.Label>
            <Form.Control
              type="text"
              name="website"
              value=""
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Liste des boutiques</Form.Label>
            <Form.Control
              type="text"
              name="shopslist_link"
              value=""
              onChange={handleInputChange}
            />
          </Form.Group>
        </div>

        {/* Headquarters */}
        <div className="formContent">
          <p>Siège Social</p>
          <Form.Group>
            <Form.Label>N° et Voie</Form.Label>
            <Form.Control
              type="text"
              name="street"
              value=""
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Complement</Form.Label>
            <Form.Control
              type="text"
              name="street2"
              value=""
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Row>
              <Col xs={7}>
                <Form.Label>Ville</Form.Label>
                <Form.Control name="city" />
              </Col>
              <Col>
                <Form.Label>Code postal</Form.Label>
                <Form.Control name="zip code" />
              </Col>
              <Col>
                <Form.Label>Pays</Form.Label>
                <Form.Control name="country" />
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
              name="contact_name"
              value=""
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Row>
              <Col xs={5}>
                <Form.Label>email</Form.Label>
                <Form.Control name="mail_contact1" />
              </Col>
              <Col>
                <Form.Label>tel 1</Form.Label>
                <Form.Control name="phone1_contact1" />
              </Col>
              <Col>
                <Form.Label>tel 2</Form.Label>
                <Form.Control name="phone2_contact2" />
              </Col>
            </Form.Row>
          </Form.Group>
          <Form.Group>
            <Form.Label>Nom du contact 2</Form.Label>
            <Form.Control
              type="text"
              name="contact_name"
              value=""
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Row>
              <Col xs={5}>
                <Form.Label>email</Form.Label>
                <Form.Control name="mail_contact2" />
              </Col>
              <Col>
                <Form.Label>tel 1</Form.Label>
                <Form.Control name="phone1_contact2" />
              </Col>
              <Col>
                <Form.Label>tel 2</Form.Label>
                <Form.Control name="phone2_contact2" />
              </Col>
            </Form.Row>
          </Form.Group>
        </div>
        <div className="validationButton">
          <Button type="submit">Ajouter une enseigne</Button>
        </div>
      </Form>
      {/* Shop admin infos Form */}
    </>
  );
};

/* ShopsAdd.propTypes = {
  addShop: PropTypes.func.isRequired,
}; */

export default ShopsAdd;
