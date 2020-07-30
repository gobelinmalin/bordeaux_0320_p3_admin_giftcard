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

  // GET Product
  const [shops, setShops] = useState([]);

  const getShopsData = () => {
    const url = `${process.env.REACT_APP_HOST}/products/cards`;
    Axios.get(url)
      .then((response) => response.data)
      .then((data) => setShops(data));
  };

  useEffect(() => {
    getShopsData();
  }, []);

  const getShops = (orderId) => {
    const foundShop = shops.find((shop) => shop.id === orderId);
    return foundShop ? foundShop.name : '';
  };

  const ordersList = allOrders.map((order) => (
    <tr>
      <td>{order.id_client}</td>
      <td>{getShops(order.id)}</td>
      <td>{new Date(order.createDate).toLocaleDateString()}</td>
      <td>{new Date(order.delivery_date).toLocaleDateString()}</td>
      {order.status === 1 ? <td>ecard</td> : <td>physique</td>}
    </tr>
  ));
  return (
    <Container>
      <h3 className="titlelist">{`Commandes du client ${customerName}`}</h3>
      <Table>
        <thead>
          <tr>
            <th>N° de client </th>
            <th>Produit</th>
            <th>Date de création </th>
            <th>Date de livraison</th>
            <th>Format</th>
          </tr>
        </thead>
        <tbody>{ordersList}</tbody>
      </Table>
    </Container>
  );
}

export default OrdersByCustomer;
