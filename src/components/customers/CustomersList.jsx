// import lib
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Table, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import components

// import style
import './customers.css';
import '../../index.css';

const CustomersList = ({ customers, deleteCustomer, editCustomer }) => {
  const allCustomers =
    customers &&
    customers.map((customer) => {
      return (
        <tr>
          <td>{customer.id}</td>
          <td>{customer.civility}</td>
          <td>{customer.firstname}</td>
          <td>{customer.lastname}</td>
          <td>{customer.email}</td>
          <td>{customer.address}</td>
          <td>
            <Link to={`/admin/customers/update/${customer.id}`}>
              <FontAwesomeIcon
                icon="user-edit"
                onClick={() => editCustomer(customer.id)}
              />
            </Link>
          </td>
          <td>
            <FontAwesomeIcon
              icon="trash"
              onClick={() => deleteCustomer(customer.id)}
            />
          </td>
        </tr>
      );
    });

  return (
    <Container>
      <div className="table-title">
        <h3>Liste des clients</h3>
        <Link to="/admin/customers/add">
          <FontAwesomeIcon icon="user-plus" size="3x" />
        </Link>
      </div>
      <Table responsive hover>
        <thead>
          <tr>
            <th>#id</th>
            <th>Civilité</th>
            <th>Prénom</th>
            <th>Nom</th>
            <th>Email</th>
            <th>Adresse</th>
            <th>Modifier</th>
            <th>Effacer</th>
          </tr>
        </thead>
        <tbody>{allCustomers}</tbody>
      </Table>
    </Container>
  );
};
CustomersList.defaultProps = {
  customers: PropTypes.arrayOf,
  deleteCustomer: PropTypes.func,
  editCustomer: PropTypes.func,
};

CustomersList.propTypes = {
  customers: PropTypes.arrayOf(PropTypes.object),
  deleteCustomer: PropTypes.func,
  editCustomer: PropTypes.func,
};

export default CustomersList;
