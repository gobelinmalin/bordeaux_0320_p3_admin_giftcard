// import lib
import React from 'react';
import { Link } from 'react-router-dom';

// import components
import Logo from './Logo';

// import datas
// import section from './datas';

// import style
// import './style/left-menu-style.css';

const NavBar = () => {
  return (
    <>
      <div className="left-menu">
        <Logo />
        {/* <NavButton section={section} /> */}
        <nav>
          <ul>
            <li>
              <Link to="/admin/customers">Clients</Link>
            </li>
            <li>
              <Link to="/admin/customers/customer-add">Ajouter un client</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
