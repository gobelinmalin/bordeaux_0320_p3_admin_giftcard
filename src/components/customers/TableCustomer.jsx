// import lib
import React from 'react';
import { Table } from 'react-bootstrap';

// import components

// import style
import '../content-section.css';

const TableCustomer = () => {
  return (
    <div>
      <h3>Historique des commandes</h3>
      <Table className="table,table-responsive" striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Email</th>
            <th>Adresse</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default TableCustomer;
