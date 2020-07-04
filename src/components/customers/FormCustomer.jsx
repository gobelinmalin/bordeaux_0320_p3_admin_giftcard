// import lib
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Col, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import components

// import style
import '../content-section.css';

const FormCustomer = ({ fields }) => {
  const valueOfFields = Object.values(fields);
  const createFormClient = valueOfFields.map((field) => (
    <Form.Group className="form-group">
      <Form.Label>{field.label}</Form.Label>
      <Form.Control type={field.type} size="sm" pattern={field.pattern} />
    </Form.Group>
  ));

  return (
    <Container>
      <Col className="col-form-label-sm">
        <Button>
          <Link to="/admin/customers/customer-add">Ajouter un client</Link>
        </Button>
        <h3 id="">Identité du client</h3>
        {createFormClient}
      </Col>
    </Container>
  );
};

FormCustomer.defaultProps = {
  fields: PropTypes.array,
};
FormCustomer.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.object),
};
export default FormCustomer;
