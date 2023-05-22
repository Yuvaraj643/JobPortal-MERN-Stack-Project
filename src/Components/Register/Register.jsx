import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://yuvaraj-job-portal.onrender.com/api/register",
        { name, email, password }
      );
      console.log(response.data);
      toast.success(response.data.message);
      toast.success(response.data.err);
    } catch (err) {
      console.error(err);
      setError(err.response.data.message);
    }
  };



  return (
    <div className="container d-flex justify-content-center ">
      <ToastContainer />
      <div className="card p-4 border border-1 border-radius-20 w-40">
        <form onSubmit={handleSubmit}>
          {error && <p>{error}</p>}
          <h2 class="card-title text-center mb-4">Register</h2>
          <div class="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label for="name">Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              required
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label for="email">Email</label>
          </div>
          <div className="form-floating mb-3">
            <input
              required
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label for="password">Password</label>
          </div>
          <button type="submit" class="btn btn-primary w-100 mb-3">
            Submit
          </button>
          <p class="text-center">
            Already have an account? <Link to={"/login"}>Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default Register;
