// import lib
import React from 'react';

// import components
import Logo from './Logo';
import NavButton from './NavButton';

// import datas
import section from './datas';

// import style
import './style/left-menu-style.css';

const LeftMenu = () => {
  return (
    <>
      <div className="left-menu">
        <Logo />
        <NavButton section={section} />
      </div>
    </>
  );
};

export default LeftMenu;
