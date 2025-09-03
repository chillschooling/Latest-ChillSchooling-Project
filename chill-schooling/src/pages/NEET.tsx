
import React from 'react';
import { Link } from 'react-router-dom';
import './NEET.css';

const NEET: React.FC = () => {
  const classes = [11, 12];

  return (
    <div className="neet-container">
      <div className="sub-nav">
        {classes.map((grade) => (
          <Link key={grade} to={`/resources/neet/class/${grade}`} className="sub-nav-link">Class {grade}</Link>
        ))}
      </div>

      <div className="class-grid row">
        {classes.map((grade) => (
          <div key={grade} className="col-md-4 mb-4">
            <Link to={`/resources/neet/class/${grade}`} className="card class-card">
              <div className="card-body text-center">
                <h5 className="card-title">Class {grade}</h5>
                <p className="card-text">Explore resources for Class {grade}.</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NEET;
