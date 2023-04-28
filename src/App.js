import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Jobs from "./Components/Jobs/Jobs";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/get-jobs" element={<Jobs />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App