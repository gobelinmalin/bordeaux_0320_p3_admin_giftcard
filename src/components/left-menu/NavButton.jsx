// import lib
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// import components

// import style
import './style/left-menu-style.css';

const NavButton = (props) => {
  const { section } = props;
  const mapSection = section.map((i) => (
    <div className="nav-button">
      <Link to={`/admin${i.route}`}>{i.name}</Link>
    </div>
  ));

  return (
    <>
      <div className="all-button">{mapSection}</div>
    </>
  );
};

NavButton.defaultProps = {
  section: PropTypes.array,
};
NavButton.propTypes = {
  section: PropTypes.arrayOf(PropTypes.object),
};

export default NavButton;
