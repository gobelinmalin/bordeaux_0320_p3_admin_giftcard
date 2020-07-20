import React, { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import Axios from 'axios';

import { Form, Button, Col, Container } from 'react-bootstrap';

import './shops.css';
import '../styles.css';

const ShopsUpdate = () => {
  // catch id of the shop in params url
  const { id } = useParams();
  // useHistory to redirect after submission
  const history = useHistory();

  // get shop datas
  const [shop, setShop] = useState(null);

  const getShopData = () => {
    const url = `${process.env.REACT_APP_HOST}/shops/${id}`;
    Axios.get(url)
      .then((response) => response.data)
      .then((data) => setShop(data[0]));
  };

  // handle string input
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setShop({ ...shop, [name]: value });
  };

  // handle legal form selection
  const [showOther, setShowOther] = useState(false);

  const handleLegalForm = (event) => {
    const { name, value } = event.target;

    if (value === 'other') {
      setShowOther(true);
      setShop({ ...shop, [name]: '' });
    } else {
      setShowOther(false);
      setShop({ ...shop, [name]: value });
    }
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
  const updateShop = () => {
    const url = `${process.env.REACT_APP_HOST}/shops/${id}`;
    Axios.put(url, shop).then(
      (response) => response.status === 200 && history.push('/admin/shops')
    );
  };

  // if ! needed to avoid infinite setState
  useEffect(() => {
    if (!shop) {
      getShopData(id);
    }
  });

  // if because we don't have any shop before useEffect call
  if (shop) {
    return (
      <Container>
        <div className="insideNavBar">
          <Link to="/admin/shops">
            <Button variant="insideNav">Retour aux enseignes</Button>
          </Link>
          <Link to={`/admin/shops/details/${shop.id}`}>
            <Button variant="insideNav">Fiche de l&apos;enseigne</Button>
          </Link>
        </div>

        <Form
          onSubmit={(click) => {
            click.preventDefault();
            updateShop();
          }}
        >
          {/* Shop identity Form */}
          <div className="formContent">
            <p>Identité de l&apos;enseigne</p>
            <Form.Group>
              <Form.Label>Date de création*</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                placeholder={shop.add_time}
                readOnly
              />
            </Form.Group>

            <div className="flex spaceBetween">
              <Form.Group>
                <Form.Label>Forme Juridique*</Form.Label>
                <Form.Control
                  as="select"
                  name="legal_status"
                  value={shop.legal_status}
                  onChange={handleLegalForm}
                >
                  <option value="">Choisir...</option>
                  <option value="EURL">EURL</option>
                  <option value="SA">SA</option>
                  <option value="SARL">SARL</option>
                  <option value="SAS">SAS</option>
                  <option value="Auto-Entrepreneur">Auto-Entrepreneur</option>
                  <option value="other">Autre</option>
                </Form.Control>

                {showOther ? (
                  <Form.Control
                    type="text"
                    name="legal_status"
                    placeholder="préciser la forme légale"
                    value={shop.legal_status}
                    onChange={handleInputChange}
                  />
                ) : (
                  ''
                )}
              </Form.Group>

              <Form.Group>
                <Form.Label>n° SIREN*</Form.Label>
                <Form.Control
                  type="text"
                  name="siren"
                  value={shop.siren}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </div>

            <div className="flex spaceBetween">
              <Form.Group className="shopType">
                <Form.Label>Type d&apos;enseigne*</Form.Label>
                <div>
                  <Form.Check
                    label="e-shop"
                    name="online"
                    defaultChecked={shop.online}
                    check={shop.online}
                    onChange={(event) => handleCheckOnline(event)}
                  />
                  <Form.Check
                    label="boutique(s)"
                    name="offline"
                    defaultChecked={shop.offline}
                    check={shop.offline}
                    onChange={(event) => handleCheckOffline(event)}
                  />
                </div>
              </Form.Group>
            </div>
            <Form.Group>
              <Form.Label>Nom de l&apos;enseigne*</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={shop.name}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Logo de l&apos;enseigne (en cours)</Form.Label>
              <Form.File
                id="custom-file"
                label="modifier l'image"
                name={shop.logo}
                onChange=""
                custom
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
                name="sale_conditions"
                value={shop.sale_conditions}
                onChange={handleInputChange}
              />
            </Form.Group>
          </div>

          {/* Shop status */}
          <div className="formContent">
            <Form.Group>
              <p>
                Statut de l&apos;enseigne partenaire:{' '}
                {shop.status ? 'activée' : 'désactivée'}
              </p>
              <Form.Switch
                label={
                  shop.status ? "désactiver l'enseigne" : "activer l'enseigne"
                }
                id="custom-switch"
                name="status"
                defaultChecked={shop.status}
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
              <Form.Label>Boutique(s) (en cours)</Form.Label>
              <Form.Control
                type="text"
                name=""
                value=""
                onChange={handleInputChange}
                readOnly
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

          {/* Bank infos */}
          <div className="formContent">
            <p>Informations bancaires</p>
            <Form.Group>
              <Form.Label>Nom du compte</Form.Label>
              <Form.Control
                type="text"
                name="bank_account_name"
                value={shop.account_name}
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
            <Button type="submit">Modifier l&apos;enseigne</Button>
          </div>
        </Form>
      </Container>
    );
  }
  return null;
};

export default ShopsUpdate;
