// Router/router.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ role }) => {
  const isAuthenticated = !!localStorage.getItem("token"); // Check if token exists
  const userRole = localStorage.getItem("role"); // Assume user role is stored in localStorage

  // Check if user is authenticated and has the correct role
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (role && userRole !== role) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default PrivateRoute;