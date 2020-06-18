// import lib
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// import components

// import style
import './style/left-menu-style.css';

const Section = (props) => {
  const { section } = props;
  const mapSection = section.map((i) => (
    <div className="section">
      <Link to={`/admin${i.route}`}>{i.name}</Link>
    </div>
  ));

  return (
    <>
      <div className="all-sections">{mapSection}</div>
    </>
  );
};

Section.defaultProps = {
  section: PropTypes.array,
};
Section.propTypes = {
  section: PropTypes.arrayOf(PropTypes.object),
};

export default Section;
