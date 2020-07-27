import React, { useState } from 'react';

import '../styles.css';
import { Form } from 'react-bootstrap';

const CardAdd = () => {
  // set initial form
  const initialFormState = {
    id: null,
    creation_date: '',
    id_product: '',
    code_ean: '',
    code_card: '',
    credit: '',
    code_security: '',
    validity: '',
    multi_use: '',
    sale_status: '',
    id_order: null,
  };

  // CARD: handle product field
  const [card, setCard] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCard({ ...card, [name]: value });
  };

  return (
    <div>
      <div className="formContent">
        <Form>
          <p>Ajout de carte cadeau</p>
          <Form.Group>
            <Form.Label>Date d&apos;ajout</Form.Label>
            <Form.Control size="sm" type="text" name="add_time" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Nom du produit type</Form.Label>
            <Form.Control
              type="text"
              name="id_product"
              value={card.type_product}
              onChange=""
            />
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
              onChange=""
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Nombre d&apos;utilisation(s)</Form.Label>
            <Form.Check
              label="Utilisable en plusieurs fois"
              name="multi_use"
              check={card.multi_use}
              onChange=""
            />
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default CardAdd;
