/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { authContext } from '../contexts/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { auth } = useContext(authContext);

  // creer autre appel /profile

  return (
    <Route
      {...rest}
      render={(routeProps) => {
        return auth.data ? <Component {...routeProps} /> : <Redirect to="/" />;
      }}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
