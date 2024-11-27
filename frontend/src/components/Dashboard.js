import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to the RBAC Dashboard! This area is protected and requires appropriate role access.</p>
      
      {/* Link to login page */}
      <p>Need to login again? <Link to="/login">Login</Link></p>
    </div>
  );
};

export default Dashboard;
