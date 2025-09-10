
import React from 'react';
import { Link } from 'react-router-dom';
import './CBSE.css';

const CBSE: React.FC = () => {
  const classes = [6, 7, 8, 9, 10, 11, 12];

  return (
    <div className="cbse-container">
      <div className="sub-nav">
        {classes.map((grade) => (
          <Link key={grade} to={`/resources/cbse/class/${grade}`} className="sub-nav-link">Class {grade}</Link>
        ))}
      </div>

      <div className="class-grid row">
        {classes.map((grade) => (
          <div key={grade} className="col-md-4 mb-4">
            <Link to={`/resources/cbse/class/${grade}`} className="card class-card">
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

export default CBSE;
