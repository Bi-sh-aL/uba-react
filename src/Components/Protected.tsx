import React from 'react';
import { Navigate } from 'react-router-dom';

// Function to get user role from token
const getUserRole = () => {
  const token = localStorage.getItem('token');
  if (!token) return null;

  const decodedToken = JSON.parse(atob(token.split('.')[1]));
  return decodedToken.role || null;
};

const Protected = ({ Component, requiredRole }: { Component: React.ComponentType; requiredRole?: string }) => {
  const isAuthenticated = !!localStorage.getItem('token');
  const userRole = getUserRole();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (requiredRole && userRole !== requiredRole) {
    return <Navigate to="/forbidden" />;
  }

  return <Component />;
};

export default Protected;
