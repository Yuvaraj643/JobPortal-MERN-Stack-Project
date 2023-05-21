import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function HomePage() {
  
  return (
    <div className="container-fluid">
      <div className="row align-items-center">
        <div className="col-md-6 order-md-2">
          <img
            src="https://source.unsplash.com/800x600/?office"
            alt="Office"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 order-md-1">
          <div className="text-center">
            <h1 className="display-4 fw-bold">Welcome to JobFinder</h1>
            <p className="lead mb-4">
              We help you find the perfect job or the perfect candidate for your
              company.
            </p>
            <div className="d-grid gap-2 col-6 mx-auto">
              <Link to= "./create-jobs"><Button variant="primary" size="lg">
                Post a Job
              </Button></Link>
              <Link to= "./get-jobs"><Button variant="outline-primary" size="lg">
                Apply Now
              </Button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
