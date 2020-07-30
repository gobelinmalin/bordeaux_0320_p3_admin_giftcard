/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext, useEffect } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { authContext } from '../contexts/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { setAuthData } = useContext(authContext);

  useEffect(() => {
    const url = `${process.env.REACT_APP_HOST}/auth/profile`;
    const token = localStorage.getItem('token');

    Axios.post(url, null, {
      headers: {
        Authorization: `Basic ${token}`,
      },
    })
      .then((res) => setAuthData(res.data.authdata))
      .catch(() => {
        setAuthData(null);
      });
  }, []);

  return (
    <Route
      {...rest}
      render={(routeProps) => {
        return <Component {...routeProps} />;
      }}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
