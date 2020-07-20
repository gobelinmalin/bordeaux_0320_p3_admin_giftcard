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
import './NavBar.css';

const NavBar = () => {
  return (
    <Nav activeKey="/admin" className="d-flex flex-column left-menu">
      <Logo />
      <NavButton section={section} className="" />
    </Nav>
  );
};

export default NavBar;
