import React from "react";
import { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";

function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("https://yuvaraj-job-portal.onrender.com/api/get-jobs")
      .then((response) => response.json())
      .then((data) => {
        setJobs(data.jobs);
        console.log(data.jobs)
      });
  }, []);
  return (
    <Row>
      {jobs.map((job) => (
        <Col key={job._id} xs={12} sm={6} md={4} lg={3}>
          <Card>
            <Card.Body>
              <Card.Title>{job.company}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {job.position}
              </Card.Subtitle>
              <Card.Text>{job.jobType}</Card.Text>
              <Card.Text>{job.workLocation}</Card.Text>
              <Card.Text>{job.workType}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Jobs;
