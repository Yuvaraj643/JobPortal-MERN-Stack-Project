import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../Loader/Loader";
import "./style.css";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://yuvaraj-job-portal.onrender.com/api/get-jobs")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const jobsWithDaysAgo = data.jobs.map((job) => {
          const now = new Date().getTime();
          const createdTime = new Date(job.createdAt).getTime();
          const diff = now - createdTime;
          const daysAgo = Math.floor(diff / 86400000);
          const key = job._id;
          return { ...job, daysAgo };
        });
        setJobs(jobsWithDaysAgo);
        setLoading(false);
        console.log(jobs);
      });
  }, []);

  const handleDeleteJob = (id) => {
    fetch(`https://yuvaraj-job-portal.onrender.com/api/delete-job/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        toast.success(data.message);
        const updatedJobs = jobs.filter((job) => job._id !== id);
        setJobs(updatedJobs);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <ToastContainer />
          <h2 className="text-center mb-4">
            There are {jobs.length} jobs Available
          </h2>
          <div className="container">
            <div className="row row-cols-1 row-cols-md-2 g-1">
              {jobs.map((job) => (
                <div className="col" key={job._id}>
                  <div className="card text-dark bg-light mb-3">
                    <div className="card-body">
                      <Link
                        to={`/update-job/${job._id}`}
                        className="float-end text-decoration-none text-dark"
                      >
                        <i className="fas fa-edit"></i>
                      </Link>
                      <h5 className="card-title fw-bold">{job.position}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">
                        {job.company}
                      </h6>
                      <p className="card-text mb-2">
                        <strong>Type:</strong> {job.workType}
                      </p>
                      <p className="card-text mb-2">
                        <strong>Location:</strong> {job.workLocation}
                      </p>
                      <p className="card-text mb-2">
                        <strong>Work Type:</strong> {job.workType}
                      </p>
                      <p className="card-text mb-2">
                        <strong>Description:</strong> {job.description}
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <a href="/" className="btn btn-primary">
                          Apply
                        </a>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => handleDeleteJob(job._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">
                        {job.daysAgo} days ago
                      </small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Jobs;
