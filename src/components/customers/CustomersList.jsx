// import lib
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Table, Container, Button } from 'react-bootstrap';

// import components

// import style
import '../content-section.css';

const CustomersList = ({ customers, deleteCustomer, editCustomer }) => {
  const allCustomers =
    customers &&
    customers.map((customer) => {
      return (
        <tr>
          <td>
            <Link to={`/admin/customers/update/${customer.id}`}>
              <Button
                type="submit"
                variant="success"
                onClick={() => editCustomer(customer.id)}
              >
                O
              </Button>
            </Link>
          </td>
          <td>
            <Button
              type="submit"
              variant="danger"
              onClick={() => deleteCustomer(customer.id)}
            >
              {' '}
              X{' '}
            </Button>
          </td>
          <td>{customer.id}</td>
          <td>{customer.civility}</td>
          <td>{customer.firstname}</td>
          <td>{customer.lastname}</td>
          <td>{customer.email}</td>
          <td>{customer.adresse}</td>
        </tr>
      );
    });

  return (
    <Container>
      <h3>Liste des clients</h3>
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
            <th>#id</th>
            <th>Civilité</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Email</th>
            <th>Adresse</th>
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
