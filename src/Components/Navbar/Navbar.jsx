import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="/">
          Job Portal
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/get-jobs">
                View Jobs
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/create-jobs">
                Upload Job
              </a>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <Link to="/Login"><button class="btn btn-primary" >
                Login
              </button></Link>
            </li>
            <li class="nav-item">
            <Link to="/register"><button class="btn btn-danger" >
                Register
              </button></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
