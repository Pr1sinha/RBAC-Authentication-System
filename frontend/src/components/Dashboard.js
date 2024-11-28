import React from 'react';
import { Navigate } from 'react-router-dom';

const Dashboard = () => {
  const authToken = localStorage.getItem('authToken');
  
  if (!authToken) {
    return <Navigate to="/login" />; // Redirect to login if no token
  }

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to the RBAC Dashboard! This area is protected and requires appropriate role access.</p>
      <button onClick={handleLogout}>Logout</button>
      <p>Need to login again? <Link to="/login">Login</Link></p>
    </div>
  );
};

export default Dashboard;
