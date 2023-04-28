import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <ul>
      <Link to={"/"}><li>Home</li></Link>
      <Link to={"/get-jobs"}><li>ViewJobs</li></Link>
        <li>Upload Job</li>
        <li>Login</li>
        <li>Register</li>
      </ul>
    </div>
  );
};

export default Navbar;
