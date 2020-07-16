import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Table, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import components

// import data

// import style
import './orders.css';

function OrdersList({ orders, deleteOrder, updateOrder }) {
  const [allOrders, setAllOrders] = useState([]);
  const [sortConfig, setSortConfig] = useState(null);

  useEffect(() => {
    setAllOrders([...orders]);
    setSortConfig('');
  }, [orders]);

  useMemo(() => {
    if (sortConfig !== null) {
      allOrders.sort((a, b) => {
        // sortedOrder est un array?

        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
  }, [allOrders, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    return setSortConfig({ key, direction });
  };

  const allOrdersTable = allOrders.map((order) => {
    // const ordersByClientRL = `/admins/orders/by-client/${order.id_client}`;
    return (
      <tr key={order.id}>
        <Link to={`/admin/orders/by-client/${order.id_client}`}>
          <td>{order.id_client}</td>
        </Link>
        <td>{order.id_delivery}</td>
        <td>{order.status}</td>
        <td>{order.delivery_date}</td>
        <td>{order.shipping_fees}</td>
        <td>{order.createDate}</td>
        <td>
          <Link className="edit-link" to={`/admin/orders/update/${order.id}`}>
            <FontAwesomeIcon
              icon="edit"
              onClick={() => updateOrder(order.id)}
            />
          </Link>
        </td>
        <td>
          <FontAwesomeIcon icon="trash" onClick={() => deleteOrder(order.id)} />
        </td>
      </tr>
    );
  });

  return (
    <Container>
      <h3>Liste des commandes</h3>
      <Table responsive hover>
        <thead>
          <tr>
            <th>
              N° de client
              <FontAwesomeIcon
                icon="sort"
                onClick={() => requestSort('id_client')}
              />
            </th>
            <th>
              N° de commande
              <FontAwesomeIcon
                icon="sort"
                onClick={() => requestSort('id_delivery')}
              />
            </th>
            <th>
              Online / Offline
              <FontAwesomeIcon
                icon="sort"
                onClick={() => requestSort('status')}
              />
            </th>
            <th>
              Date de livraison
              <FontAwesomeIcon
                icon="sort"
                onClick={() => requestSort('delivery_date')}
              />
            </th>
            <th>
              Frais de port{' '}
              <FontAwesomeIcon
                icon="sort"
                onClick={() => requestSort('shipping_fees')}
              />
            </th>
            <th>
              Date de création
              <FontAwesomeIcon
                icon="sort"
                onClick={() => requestSort('createDate')}
              />
            </th>
            <th>Modifier</th>
            <th>Effacer</th>
          </tr>
        </thead>
        <tbody>{allOrdersTable}</tbody>
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
