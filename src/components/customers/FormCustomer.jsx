// import lib
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Col } from 'react-bootstrap';

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
    <Col className="col-form-label-sm">
      <h3 id="">Identité du client</h3>
      {createFormClient}
    </Col>
  );
};

FormCustomer.defaultProps = {
  fields: PropTypes.array,
};
FormCustomer.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.object),
};
export default FormCustomer;
