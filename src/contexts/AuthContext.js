import React, { createContext, useEffect, useState } from 'react';
import Proptypes from 'prop-types';

export const authContext = createContext({});

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ loading: true, data: null });

  const setAuthData = (data) => {
    setAuth({ data });
  };

  useEffect(() => {
    setAuth({
      loading: false,
      data: JSON.parse(window.localStorage.getItem('authData')),
    });
  }, []);

  useEffect(() => {
    window.localStorage.setItem('authData', JSON.stringify(auth.data));
  }, [auth.data]);

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <authContext.Provider value={{ auth, setAuthData }}>
      {children}
    </authContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: Proptypes.arrayOf(Proptypes.object).isRequired,
};

export default AuthProvider;
