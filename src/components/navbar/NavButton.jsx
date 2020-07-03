// import lib
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

// import components

// import style
// import './style/left-menu-style.css';

const NavButton = (props) => {
  const { section } = props;
  const mapSection = section.map((i) => (
    <Button
      size="sm"
      className="m-2 p-1 w-50 text-nowrap text-decoration-none"
      active
    >
      <Link to={`/admin${i.route}`}>{i.name}</Link>
    </Button>
  ));

  return <>{mapSection}</>;
};

NavButton.defaultProps = {
  section: PropTypes.array,
};
NavButton.propTypes = {
  section: PropTypes.arrayOf(PropTypes.object),
};

export default NavButton;
