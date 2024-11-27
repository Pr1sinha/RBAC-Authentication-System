import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  // Handle Logout
  const handleLogout = () => {
    // Remove token from localStorage
    localStorage.removeItem('authToken');
    // Redirect user to login page
    navigate('/login');
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to the RBAC Dashboard! This area is protected and requires appropriate role access.</p>
      
      {/* Logout Button */}
      <button onClick={handleLogout}>Logout</button>

      {/* Link to login page */}
      <p>Need to login again? <Link to="/login">Login</Link></p>
    </div>
  );
};

export default Dashboard;
