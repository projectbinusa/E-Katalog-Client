import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const token = localStorage.getItem("token");

  // If no token is found, redirect to login page
  if (!token) {
    return <Navigate to="/login" />;
  }

  // If a token is found, redirect to dashboard if attempting to access login page
  // Or allow access to any other private route
  const currentPath = window.location.pathname;

  // Redirect to dashboard if trying to access login page
  if (currentPath === "/login") {
    return <Navigate to="/dashboard" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
