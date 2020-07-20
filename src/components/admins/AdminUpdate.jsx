import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

// import components

// import data

// import style

function AdminUpdate() {
  const { id } = useParams();
  const [admin, setAdmin] = useState(null);

  const getAdminData = () => {
    Axios({
      method: 'get',
      url: `http://localhost:5000/api/admins/${id}`,
    })
      .then((response) => response.data)
      .then((data) => setAdmin(data));
  };

  useEffect(() => {
    if (!admin) {
      getAdminData(id);
    }
  });

  const updateAdmin = () => {
    const url = `http://localhost:5000/api/admins/${id}`;
    Axios.put(url, admin)
      .then((res) => res.config)
      .then((data) => setAdmin(data));
  };

  const handleChange = (event) => {
    event.preventDefault();
    const { value, name } = event.target;
    setAdmin({ ...admin, [name]: value });
  };

  if (admin) {
    return (
      <Container>
        <Row>
          <Col className="col-form-label-sm">
            <h3 id="">Identité de l&apos; administrateur</h3>
            <Form
              action=""
              className="form-group"
              onSubmit={() => updateAdmin()}
            >
              <Form.Group>
                <Form.Label>Nom</Form.Label>
                <Form.Control
                  name="name"
                  type="text"
                  value={admin.name}
                  onChange={(event) => handleChange(event)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  value={admin.email}
                  onChange={(event) => handleChange(event)}
                />
              </Form.Group>

              <Button type="submit" variant="warning">
                Modifier l&apos; administrateur
              </Button>
              <Link to="/admin/admins">
                <Button type="button" variant="success">
                  Retourner à la liste des utilisateurs
                </Button>
              </Link>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
  return null;
}

export default AdminUpdate;
