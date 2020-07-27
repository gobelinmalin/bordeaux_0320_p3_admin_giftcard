import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function CategoryUpdate() {
  const { id } = useParams();
  const [category, setCategory] = useState({});

  const getCategoryData = () => {
    Axios({
      method: 'get',
      url: `${process.env.REACT_APP_HOST}/categories/${id}`,
    })
      .then((response) => response.data)
      .then((data) => setCategory(data[0]));
  };

  useEffect(() => {
    getCategoryData();
  }, []);

  const updateCategory = () => {
    const url = `${process.env.REACT_APP_HOST}/categories/${id}`;
    Axios.put(url, category)
      .then((response) => response.status === 200)
      .finally(() => getCategoryData());
  };

  const handleChange = (event) => {
    event.preventDefault();
    const { value, name } = event.target;
    setCategory({ ...category, [name]: value });
  };

  if (category) {
    return (
      <Container>
        <Row>
          <Col className="col-form-label-sm">
            <h3 id="">Editer la catégory</h3>
            <Form
              action=""
              className="form-group"
              onSubmit={() => updateCategory()}
            >
              <Form.Group>
                <Form.Label>Type</Form.Label>
                <Form.Control
                  name="type"
                  type="text"
                  value={category.type}
                  onChange={(event) => handleChange(event)}
                />
              </Form.Group>
              <Button type="submit" variant="warning">
                Modifier la catégorie
              </Button>
              <Link to="/admin/products">
                <Button type="button" variant="success">
                  Retourner à la liste des produits
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

export default CategoryUpdate;
