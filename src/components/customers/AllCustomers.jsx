// import lib
import React from 'react';
import PropTypes from 'prop-types';
import { Table, Container } from 'react-bootstrap';

// import components

// import style
import '../content-section.css';

const AllCustomers = ({ customers }) => {
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
AllCustomers.defaultProps = {
  customers: PropTypes.arrayOf,
};

AllCustomers.propTypes = {
  customers: PropTypes.arrayOf(PropTypes.object),
};

export default AllCustomers;
