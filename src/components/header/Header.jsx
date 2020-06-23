import React from 'react';
import './header.css';

function Header() {
  return (
    <div className="header">
      <div className="title">Admin Console</div>
      <div className="logout">
        <div className="pseudo">Marielle</div>
        <div className="logoutLink">Logout</div>
      </div>
    </div>
  );
}

export default Header;
