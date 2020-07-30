import React, { useContext } from 'react';
import './header.css';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { authContext } from '../../contexts/AuthContext';

function Header(props) {
  const { setAuthData, auth } = useContext(authContext);
  const onLogOut = () => {
    setAuthData(null);
    props.history.push('/');
  };

  const name = auth.data && auth.data.user[0].name;

  return (
    <div className="header">
      <div className="title">Console Admin</div>
      <div className="logout">
        <div className="pseudo">{name}</div>
        <Button variant="primary" type="button" onClick={onLogOut}>
          Se deconnecter
        </Button>
      </div>
    </div>
  );
}

Header.propTypes = {
  history: PropTypes.func,
};

Header.defaultProps = {
  history: () => {},
};

export default withRouter(Header);
