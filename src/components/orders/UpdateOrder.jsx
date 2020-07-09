import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

// import components

// import data
import fields from './ordersFields';

// import style

function UpdateOrder() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  const getOrder = () => {
    Axios({
      method: 'get',
      // url: 'http://givyoo.fr/api/clients',
      url: `http://localhost:5000/api/orders/${id}`,
    })
      .then((response) => response.data)
      .then((data) => setOrder(data));
  };

  const updateOrder = () => {
    const url = `http://localhost:5000/api/orders/${id}`;
    Axios.put(url, order)
      .then((res) => res.config)
      .then((data) => setOrder(data));
  };

  const handleChange = (event) => {
    event.preventDefault();
    const { value, name } = event.target;
    setOrder({ ...order, [name]: value });
  };

  useEffect(() => {
    if (!order) {
      getOrder(id);
    }
  });

  if (order) {
    return (
      <Container>
        <Row>
          <Col className="col-form-label-sm">
            <h3 id="">Identité du client</h3>
            <Form
              action=""
              className="form-group"
              onSubmit={() => updateOrder()}
            >
              <Form.Group>
                <Form.Label>{fields[0].label}</Form.Label>
                <Form.Control
                  name={fields[0].name}
                  type="text"
                  value={order.id_client}
                  onChange={(event) => handleChange(event)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>{fields[1].label}</Form.Label>
                <Form.Control
                  name={fields[1].name}
                  type="text"
                  value={order.id_delivery}
                  onChange={(event) => handleChange(event)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>{fields[2].label}</Form.Label>
                <Form.Control
                  name={fields[2].name}
                  type="text"
                  value={order.status}
                  onChange={(event) => handleChange(event)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>{fields[3].label}</Form.Label>
                <Form.Control
                  name={fields[3].name}
                  type="text"
                  value={order.delivery_date}
                  onChange={(event) => handleChange(event)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>{fields[4].label}</Form.Label>
                <Form.Control
                  name={fields[4].name}
                  type="text"
                  value={order.shipping_fees}
                  onChange={(event) => handleChange(event)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>{fields[5].label}</Form.Label>
                <Form.Control
                  name={fields[5].name}
                  type="text"
                  value={order.createDate}
                  onChange={(event) => handleChange(event)}
                />
              </Form.Group>
              <Button type="submit" variant="warning">
                Modifier la commande
              </Button>
              <Link to="/admin/orders">
                <Button type="button" variant="success">
                  Retourner à la liste des commandes
                </Button>
              </Link>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
  return null;
}

export default UpdateOrder;
