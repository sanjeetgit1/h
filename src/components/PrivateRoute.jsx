import React from 'react';
import { Navigate } from 'react-router-dom';
import jwt from 'jsonwebtoken';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  if (!token) {
    return <Navigate to="Login" />;
  }

  try {
    jwt.verify(token, 'your_jwt_secret');
    return children;
  } catch (error) {
    localStorage.removeItem('token');
    return <Navigate to="/Login" />;
  }
};

export default PrivateRoute;
