// import modules
import React, { useState, useEffect } from 'react';
import { Table, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Axios from 'axios';

// import component
import AdminsAdd from './AdminAdd';

const Admins = () => {
  const [admins, setAdmins] = useState([{}]);
  const getAdminsDatas = () => {
    Axios.get('http://localhost:5000/api/admins')
      .then((response) => response.data)
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

  const deleteAdmin = (id) => {
    Axios.delete(`http://localhost:5000/api/admins/${id}`, admins)
      .then((response) => response.status === 200 && admins)
      .finally(() => getAdminsDatas());
  };
  const allAdmins = admins.map((admin) => {
    return (
      <tr>
        <td>{admin.id}</td>
        <td>{admin.name}</td>
        <td>{admin.email}</td>
        <td>
          <Link to={`/admin/admins/update/${admin.id}`}>
            <FontAwesomeIcon
              type="submit"
              icon="user-edit"
              onClick={() => editAdmin(admin.id)}
            />
          </Link>
        </td>
        <td>
          <FontAwesomeIcon
            type="submit"
            icon="trash"
            onClick={() => deleteAdmin(admin.id)}
          />
        </td>
      </tr>
    );
  });
  return (
    <>
      <Container>
        <h3>Liste des administrateurs</h3>
        <Table hover>
          <thead>
            <tr>
              <th>#id</th>
              <th>Nom</th>
              <th>Email</th>
              <th>Editer</th>
              <th>Effacer</th>
            </tr>
          </thead>
          <tbody>{allAdmins}</tbody>
        </Table>
        <AdminsAdd getAdminsDatas={getAdminsDatas} />
      </Container>
    </>
  );
};

export default Admins;
