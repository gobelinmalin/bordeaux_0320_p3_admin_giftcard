import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import './products.css';
import '../styles.css';

const ProductNavbar = () => {
  return (
    <div className="insideNavBar">
      <Link to="/admin/products">
        <Button variant="insideNav">PRODUITS</Button>
      </Link>
      <Button variant="insideNav">CATEGORIES</Button>
      <Button variant="insideNav">THEMES</Button>
      <Button variant="insideNav">TAGS</Button>
    </div>
  );
};

export default ProductNavbar;
