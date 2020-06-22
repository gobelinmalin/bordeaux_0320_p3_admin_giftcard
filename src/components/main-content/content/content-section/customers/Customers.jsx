// import lib
import React from 'react';

// import components
import FormCustomer from './FormCustomer';
import TableCustomer from './TableCustomer';

// import style
import '../content-section.css';

const Customers = () => {
  return (
    <div className="main-fake">
      <FormCustomer />
      <TableCustomer />
    </div>
  );
};

export default Customers;
