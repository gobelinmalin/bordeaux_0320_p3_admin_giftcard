import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Table } from 'react-bootstrap';

// import components

// import data

// import style

function OrdersByCustomer() {
  const [customer, setCustomer] = useState([{}]);
  const [allOrders, setAllOrders] = useState([{}]);
  const { idClient } = useParams();

  const getCustomer = () => {
    Axios({
      method: 'get',
      url: `${process.env.REACT_APP_HOST}/clients/${idClient}`,
    })
      .then((response) => response.data)
      .then((data) => setCustomer(data));
  };

  const getAllOrdersByCustomer = () => {
    Axios({
      method: 'get',
      url: `${process.env.REACT_APP_HOST}/clients/${idClient}/orders`,
    })
      .then((response) => response.data)
      .then((data) => setAllOrders(data.orders_client));
  };

  useEffect(() => {
    getAllOrdersByCustomer();
    getCustomer();
  }, []);

  const customerName =
    customer &&
    customer.map(
      (person) => `${person.civility} ${person.firstname} ${person.lastname}`
    );

  const ordersList = allOrders.map((order) => (
    <tr>
      <td>{order.id_client}</td>
      <td>{order.createDate}</td>
      <td>{order.id_delivery}</td>
      <td>{order.delivery_date}</td>
      <td>{order.satus}</td>
    </tr>
  ));
  return (
    <Container>
      <h1>{`Commandes du client ${customerName}`}</h1>
      <Table>
        <thead>
          <tr>
            <th>N° de client </th>
            <th>Date de création </th>
            <th>N° de livraison </th>
            <th>Date de livraison</th>
            <th>E-card</th>
            <th>Carte physique</th>
          </tr>
        </thead>
        <tbody>{ordersList}</tbody>
      </Table>
    </Container>
  );
}

export default OrdersByCustomer;
