// import lib
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Table, Container, Col, Row } from 'react-bootstrap';

// import components
import CustomersList from './CustomersList';

function Customers() {
  const { history } = useHistory();
  const initialState = [
    {
      id: '0',
      firstname: 'John',
      lastname: 'Doh',
      email: 'jon@doh.com',
      adresse: 'Springfield',
    },
  ];

  // CRUD
  const [customers, setCustomers] = useState([]);

  const getCustomersList = () => {
    Axios({
      method: 'get',
      url: `${process.env.REACT_APP_HOST}/clients`,
    }).then((response) => setCustomers(response.data));
  };

  useEffect(() => {
    setCustomers(initialState);
    getCustomersList();
  }, []);

  const editCustomer = (id) => {
    Axios.put(`${process.env.REACT_APP_HOST}/clients/${id}`, customers).then(
      (response) => response.status === 200 && history.push('/admin/customers')
    );
  };

  const deleteCustomer = (id) => {
    Axios.delete(`${process.env.REACT_APP_HOST}/clients/${id}`, customers)
      .then((response) => response.status === 200 && customers)
      .finally(() => getCustomersList());
  };

  return (
    <Container>
      <Row>
        <Col>
          <Table>
            <CustomersList
              customers={customers}
              deleteCustomer={deleteCustomer}
              editCustomer={editCustomer}
            />
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default Customers;
