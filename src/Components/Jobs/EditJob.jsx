import { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditJob = () => {
  const { id } = useParams();
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [workLocation, setWorkLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [workType, setWorkType] = useState("");
  const [shift, setShift] = useState("");
  const [description, setDescription] = useState("");
  const [navigate, setNavigate] = useState(false);

  useEffect(() => {
    getJob();
  }, []);

  const getJob = async () => {
    try {
      const response = await axios.get(
        `https://yuvaraj-job-portal.onrender.com/api/update-job/${id}`
      );
      const {
        company,
        position,
        workLocation,
        salary,
        workType,
        shift,
        description,
      } = response.data.job;
      setCompany(company);
      setPosition(position);
      setWorkLocation(workLocation);
      setSalary(salary);
      setWorkType(workType);
      setShift(shift);
      setDescription(description);
    } catch (err) {
      console.error(err.message);
    }
  };

  const editJob = async (e) => {
    e.preventDefault();
    try {
      const body = {
        position,
        company,
        workLocation,
        salary,
        workType,
        shift,
        description,
      };
      const updatedJob = await axios.patch(
        `https://yuvaraj-job-portal.onrender.com/api/update-job/${id}`,
        body
      ); // Replace with your backend API endpoint
      console.log(updatedJob.data);
      toast.success(updatedJob.data.message);
      setNavigate(true);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="container">
      <ToastContainer />
      <h1>Edit Job</h1>
      <form onSubmit={editJob}>
        <div className="row">
          <div className="col-md-6">
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
          </div>
          <div className="col-md-6">
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
              <input
                type="text"
                className="form-control"
                id="workType"
                value={workType}
                onChange={(e) => setWorkType(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="shift" className="form-label">
                Shift:
              </label>
              <input
                type="text"
                className="form-control"
                id="shift"
                value={shift}
                onChange={(e) => setShift(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description:
            </label>
            <textarea
              className="form-control "
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditJob;
