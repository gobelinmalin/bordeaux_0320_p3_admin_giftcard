// import lib
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Table, Container, Button } from 'react-bootstrap';

// import components

// import style
import './customers.css';

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
              <Button type="submit" onClick={() => editCustomer(customer.id)}>
                Editer
              </Button>
            </Link>
          </td>
          <td>
            <Button type="submit" onClick={() => deleteCustomer(customer.id)}>
              Effacer
            </Button>
          </td>
        </tr>
      );
    });

  return (
    <Container>
      <div className="table-title">
        <h3>Liste des clients</h3>
        <Link to="/admin/customers">
          <Button>Cliquer ici pour ajouter un client</Button>
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
