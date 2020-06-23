// import lib
import React from 'react';
import logo from '../../img/logo-givyoo.jpg';

// import components

// import style
import './style/left-menu-style.css';

const Logo = () => {
  return (
    <div className="logo-givyoo">
      <img src={logo} alt="logo Givyoo" height="70px" />
    </div>
  );
};

export default Logo;
