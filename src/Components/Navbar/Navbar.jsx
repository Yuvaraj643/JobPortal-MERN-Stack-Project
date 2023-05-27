import React, { useState, useEffect } from 'react';
import "./style.css";
import { Link,useLocation } from "react-router-dom";
const Navbar = () => {
  const [user, setUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const user ='Yuvaraj'
        setUser(user);
      } catch (error) {
        console.error('Error decoding token:', error);
        setUser(null);
      }
    } else {
      setUser(null);
    }
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Job Portal
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/get-jobs">
                View Jobs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create-jobs">
                Upload Job
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            {user ? (
              <>
                <li className="nav-item">
                  <span className="nav-link">Welcome, {user}</span>
                </li>
                <li className="nav-item">
                  <button className="btn btn-danger" onClick={handleLogout}>
                    Sign Out
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/login">
                    <button className="btn btn-primary">Login</button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/register">
                    <button className="btn btn-danger">Register</button>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
