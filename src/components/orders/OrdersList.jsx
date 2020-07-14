import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Table, Container, Button } from 'react-bootstrap';

// import components

// import data

// import style

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
    return (
      <tr key={order.id}>
        <td>{order.id_client}</td>
        <td>{order.id_delivery}</td>
        <td>{order.status}</td>
        <td>{order.delivery_date}</td>
        <td>{order.shipping_fees}</td>
        <td>{order.createDate}</td>
        <td>
          <Link to={`/admin/orders/update/${order.id}`}>
            <Button
              type="submit"
              variant="editing"
              onClick={() => updateOrder(order.id)}
            >
              Editer
            </Button>
          </Link>
        </td>
        <td>
          <Button
            type="submit"
            variant="editing"
            onClick={() => deleteOrder(order.id)}
          >
            Effacer
          </Button>
        </td>
      </tr>
    );
  });

  return (
    <Container>
      <h3>Liste des commandes</h3>
      {/* <Table className="table,table-responsive" striped bordered hover> */}
      <Table responsive hover>
        <thead>
          <tr>
            <th>
              <Button size="sm" onClick={() => requestSort('id_client')}>
                filtrer
              </Button>
            </th>
            <th>
              <Button size="sm" onClick={() => requestSort('id_delivery')}>
                filtrer
              </Button>
            </th>
            <th>
              <Button size="sm" onClick={() => requestSort('status')}>
                filtrer
              </Button>
            </th>
            <th>
              <Button size="sm" onClick={() => requestSort('delivery_date')}>
                filtrer
              </Button>
            </th>
            <th>
              <Button size="sm" onClick={() => requestSort('shipping_fees')}>
                filtrer
              </Button>
            </th>
            <th>
              <Button size="sm" onClick={() => requestSort('createDate')}>
                filtrer
              </Button>
            </th>
            <th>
              <Button size="sm"> O </Button>
            </th>
            <th>
              <Button size="sm"> X </Button>
            </th>
          </tr>
          <tr>
            <th>N° de client</th>
            <th>N° de commande</th>
            <th>Online / Offline</th>
            <th>Date de livraison</th>
            <th>Frais de port</th>
            <th>Date de création</th>
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
