// import lib
import React from 'react';
import { Nav } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// import components
import NavButton from './NavButton';
import Logo from './Logo';

// import datas
import section from './datas';

// import style
import './style/left-menu-style.css';

const NavBar = () => {
  return (
    <Nav activeKey="/admin" className="d-flex flex-column left-menu">
      <Logo />
      <NavButton section={section} className="" />
      <nav>
        <ul>
          {/* <li>
              <Link to="/admin/customers">Clients</Link>
            </li>
            <li>
              <Link to="/admin/customers/customer-add">Ajouter un client</Link>
            </li>
            <li>
              <Link to="/admin/shops">Liste des enseignes</Link>
            </li>
            <li>
              <Link to="/admin/shops/add-a-shop">Ajouter une enseigne</Link>
            </li> */}
        </ul>
      </nav>
    </Nav>
  );
};

export default NavBar;
