// src/Router/router.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const isAuthenticated = !!localStorage.getItem('authToken'); // Adjust this logic as per your authentication mechanism

  return isAuthenticated ? <Outlet /> : <Navigate to="/dashboard" />;
};

export default PrivateRoute;
