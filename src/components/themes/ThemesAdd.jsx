import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import { Form, Container, Button } from 'react-bootstrap';

function ThemeAdd({ getThemeDatas }) {
  const [theme, setTheme] = useState([{}]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setTheme(inputValue);
  }, [inputValue]);

  const addTheme = () => {
    const url = `${process.env.REACT_APP_HOST}/themes`;
    Axios.post(url, theme).finally(() => getThemeDatas());
  };

  const handleChange = (event) => {
    event.preventDefault();
    const { value, name } = event.target;
    const newValue = { ...inputValue, [name]: value };
    setInputValue(newValue);
  };

  return (
    <Container>
      <h3 className="titlelist">Ajouter un theme</h3>
      <Form action="" className="form-group" onSubmit={() => addTheme()}>
        <Form.Group>
          <Form.Control
            name="name"
            type="text"
            value={inputValue.name}
            onChange={(event) => handleChange(event)}
            placeholder="nouveau theme"
          />
        </Form.Group>
        <Button type="submit" className="admin-add">
          Ajouter
        </Button>
      </Form>
    </Container>
  );
}

ThemeAdd.defaultProps = {
  getThemeDatas: PropTypes.func,
};

ThemeAdd.propTypes = {
  getThemeDatas: PropTypes.func,
};

export default ThemeAdd;
