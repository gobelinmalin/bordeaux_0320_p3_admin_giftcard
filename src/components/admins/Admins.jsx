// import modules
import React, { useState, useEffect } from 'react';
import { Table, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Axios from 'axios';

// import component

const Admins = () => {
  const [admins, setAdmins] = useState([{}]);

  const getAdminsDatas = () => {
    Axios.get('http://localhost:5000/api/admins')
      .then((response) => response)
      .then((data) => setAdmins(data));
  };

  useEffect(() => {
    getAdminsDatas();
  }, []);

  const editAdmin = (id) => {
    Axios.put(`http://localhost:5000/api/admin/${id}`, admins).then(
      //   (response) => response.status === 200 && history.push('/admin/admins')
      (response) => response.status === 200
    );
  };
  // DELETE a customer
  const deleteAdmin = (id) => {
    Axios.delete(`http://localhost:5000/api/admins/${id}`, admins)
      .then((response) => response.status === 200 && admins)
      .finally(() => getAdminsDatas());
  };
  const allAdmins =
    admins &&
    admins.map((admin) => {
      return (
        <tr>
          <td>
            <Link to={`/admin/admins/update/${admin.id}`}>
              <Button
                type="submit"
                variant="success"
                onClick={() => editAdmin(admin.id)}
              >
                O
              </Button>
            </Link>
          </td>
          <td>
            <Button
              type="submit"
              variant="danger"
              onClick={() => deleteAdmin(admin.id)}
            >
              X
            </Button>
          </td>
          <td>{admin.id}</td>
          <td>{admin.name}</td>
          <td>{admin.email}</td>
          <td>{admin.password}</td>
        </tr>
      );
    });
  return (
    <>
      <Container>
        <h3>Liste des administrateurs</h3>
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
              <th>Nom</th>
              <th>Email</th>
              <th>Mot de passe</th>
            </tr>
          </thead>
          <tbody>{allAdmins}</tbody>
        </Table>
      </Container>
    </>
  );
};

export default Admins;
