import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Jobs from "./Components/Jobs/Jobs";
import HomePage from "./Components/HomePage/HomePage"
import Register from "./Components/Register/Register"
import Login from "./Components/Login/Login"
import EditJob from "./Components/Jobs/EditJob"
import AddJob from "./Components/PostJob/AddJob"

const App = () => {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/get-jobs" element={<Jobs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/update-job/:id" element={<EditJob />} />
        <Route path="/create-jobs" element={<AddJob />} />
      </Routes>
    </div>
  </Router>
  )
}

export default App