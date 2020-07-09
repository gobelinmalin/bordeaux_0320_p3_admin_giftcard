import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Table, Container, Button } from 'react-bootstrap';

// import components

// import data

// import style

function OrdersList({ orders, deleteOrder, updateOrder }) {
  const allOrders =
    orders &&
    orders.map((order) => {
      return (
        <tr>
          <td>
            <Link to={`/admin/orders/update/${order.id}`}>
              <Button
                type="submit"
                variant="success"
                onClick={() => updateOrder(order.id)}
              >
                O
              </Button>
            </Link>
          </td>
          <td>
            <Button
              type="submit"
              variant="danger"
              onClick={() => deleteOrder(order.id)}
            >
              X
            </Button>
          </td>
          <td>{order.id_client}</td>
          <td>{order.id_delivery}</td>
          <td>{order.status}</td>
          <td>{order.delivery_date}</td>
          <td>{order.shipping_fees}</td>
          <td>{order.createDate}</td>
        </tr>
      );
    });

  return (
    <Container>
      <h3>Liste des commandes</h3>
      <Table
        className="table,table-responsive"
        variant="dark"
        striped
        bordered
        hover
      >
        <thead>
          <tr>
            <th>Modifier</th>
            <th>Effacer</th>
            <th>N° de client</th>
            <th>N° de commande</th>
            <th>Online / Offline</th>
            <th>Date de livraison</th>
            <th>Frais de port</th>
            <th>Date de création</th>
          </tr>
        </thead>
        <tbody>{allOrders}</tbody>
      </Table>
    </Container>
  );
}
OrdersList.defaultProps = {
  orders: PropTypes.arrayOf,
  deleteOrder: PropTypes.func,
  updateOrder: PropTypes.func,
};

OrdersList.propTypes = {
  orders: PropTypes.arrayOf(PropTypes.object),
  deleteOrder: PropTypes.func,
  updateOrder: PropTypes.func,
};

export default OrdersList;
