/* // import lib
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, Col, Button, Row } from 'react-bootstrap';

// import components

// import style
import '../content-section.css';

const FormCustomer = ({ fields, customer, onChange, onSubmit }) => {
  const valueOfFields = Object.values(fields);
  const createFormClient = valueOfFields.map((field) => (
    <>
      <Form.Label>{field.label}</Form.Label>
      <Form.Control
        name={field.name}
        type={field.type}
        size="sm"
        value={customer.name}
        pattern={field.pattern}
        onChange={(event) => onChange(event)}
      />
    </>
  ));
  console.log(customer.label);

  return (
    <Row>
      <Col className="col-form-label-sm">
        <h3 id="">Identité du client</h3>
        <Form
          action=""
          method="post"
          className="form-group"
          onSubmit={(event) => onSubmit(event)}
        >
          {createFormClient}
          <Button type="submit" variant="warning">
            Ajouter un client
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

FormCustomer.defaultProps = {
  fields: PropTypes.array,
};
FormCustomer.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.object),
};
export default FormCustomer;
 */
