import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./style.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://yuvaraj-job-portal.onrender.com/api/login",
        { email, password }
      );
      console.log(response.data);
      if (response.data.message) {
        navigate("/get-jobs");
      } else if (response.data.error) {
        toast.error(response.data.error);
        console.log(error)
      }
    } catch (error) {
      console.error(error);
      setError(err.response.data.message);
    }
  };

  return (
    <section class="d-flex align-items-center justify-content-center mt-5">
      <form class="form needs-validation" onSubmit={handleSubmit} novalidate>
        <h2 class="title mb-4">Login</h2>
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            id="emailInput"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label for="emailInput">Email address</label>
          <div class="invalid-feedback">
            Please enter a valid email address.
          </div>
        </div>

        <div class="form-floating mb-3">
          <input
            type="password"
            class="form-control"
            id="passwordInput"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label for="passwordInput">Password</label>
          <div class="invalid-feedback">Please enter a password.</div>
        </div>

        <button class="btn btn-primary btn-block mb-3" type="submit">
          Login
        </button>
        <p class="message text-center mb-0">
          Don't have an account? <Link to={"/register"}>Register Now</Link>
        </p>
      </form>
      <ToastContainer />
    </section>
  );
};

export default Login;
