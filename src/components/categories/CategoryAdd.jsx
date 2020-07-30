// import libs
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import { Form, Container, Button } from 'react-bootstrap';

function CategoryAdd({ getCategoriesDatas }) {
  const [category, setCategory] = useState([{}]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setCategory(inputValue);
  }, [inputValue]);

  const addCategory = () => {
    const url = `${process.env.REACT_APP_HOST}/categories`;
    Axios.post(url, category).finally(() => getCategoriesDatas());
  };

  const handleChange = (event) => {
    event.preventDefault();
    const { value, name } = event.target;
    const newValue = { ...inputValue, [name]: value };
    setInputValue(newValue);
  };

  return (
    <Container>
      <h3 className="titlelist">Ajouter une catégorie</h3>
      <Form action="" className="form-group" onSubmit={() => addCategory()}>
        <Form.Group>
          <Form.Control
            name="type"
            type="text"
            value={inputValue.type}
            onChange={(event) => handleChange(event)}
            placeholder="nouvelle catégorie"
          />
        </Form.Group>
        <Button type="submit" className="admin-add">
          Ajouter
        </Button>
      </Form>
    </Container>
  );
}

CategoryAdd.defaultProps = {
  getCategoriesDatas: PropTypes.func,
};

CategoryAdd.propTypes = {
  getCategoriesDatas: PropTypes.func,
};

export default CategoryAdd;
