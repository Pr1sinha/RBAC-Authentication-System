import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const App = () => {
  const isAuthenticated = !!localStorage.getItem('authToken'); // Check if token exists

  return (
    <Router>
      <div>
        {/* Navigation Links using NavLink */}
        <nav>
          <ul>
            <li>
              <NavLink to="/register" activeclassName="active">
                Register
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" activeclassName="active">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard" activeclassName="active">
                Dashboard
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Routes for different components */}
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* Redirect to login if not authenticated */}
          <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
