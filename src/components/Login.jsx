// import modules
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <Link to="/admin/boardchart">login</Link>
      <input type="text" placeholder="email" />
      <input type="text" placeholder="password" />
    </div>
  );
};

export default Login;
