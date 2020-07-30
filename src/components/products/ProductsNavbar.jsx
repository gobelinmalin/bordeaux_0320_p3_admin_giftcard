import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import '../styles.css';

const ProductNavbar = () => {
  return (
    <div className="insideNavBar">
      <Link to="/admin/products">
        <Button variant="insideNav yellow1">PRODUITS</Button>
      </Link>
      <Link to="/admin/categories">
        <Button variant="insideNav yellow2">CATEGORIES</Button>
      </Link>
      <Button variant="insideNav yellow3">THEME</Button>
      <Button variant="insideNav yellow4">TAGS</Button>
    </div>
  );
};

export default ProductNavbar;
