import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddJob = () => {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [workLocation, setWorkLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [workType, setWorkType] = useState("");
  const [shift, setShift] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://yuvaraj-job-portal.onrender.com/api/create-jobs",
        {
          position,
          company,
          workLocation,
          salary,
          workType,
          shift,
          description,
        }
      );
      console.log("Job added successfully");
      console.log(response);
      toast.success(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <ToastContainer />
      <h1 className="text-center mb-5">Post a Job</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="position" className="form-label">
                Position:
              </label>
              <input
                type="text"
                className="form-control"
                id="position"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="company" className="form-label">
                Company:
              </label>
              <input
                type="text"
                className="form-control"
                id="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="workLocation" className="form-label">
                Work Location:
              </label>
              <input
                type="text"
                className="form-control"
                id="workLocation"
                value={workLocation}
                onChange={(e) => setWorkLocation(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="salary" className="form-label">
                Salary:
              </label>
              <input
                type="text"
                className="form-control"
                id="salary"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="workType" className="form-label">
                Work Type:
              </label>
              <select
                className="form-select"
                id="workType"
                value={workType}
                onChange={(e) => setWorkType(e.target.value)}
                required
              >
                <option value="">Select Work Type</option>
                <option value="full-time">Full Time</option>
                <option value="part-time">Part Time</option>
                <option value="internship">Internship</option>
                <option value="contract">Contract</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="shift" className="form-label">
                Shift:
              </label>
              <select
                className="form-select"
                id="shift"
                value={shift}
                onChange={(e) => setShift(e.target.value)}
                required
              >
                <option value="">Select Shift</option>
                <option value="Morning shift">Morning Shift</option>
                <option value="Monday to Friday">Monday to Friday</option>
                <option value="Day shift">Day Shift</option>
                <option value="Night Shift">Night Shift</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description:
              </label>
              <textarea
                className="form-control"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Add Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddJob;
