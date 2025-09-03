
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ChapterContent.css';

const ChapterContent: React.FC = () => {
  const { grade, subject, chapterName } = useParams<{ grade: string; subject: string; chapterName: string }>();

  return (
    <div className="chapter-content-container">
      <h1 className="text-center">Class {grade} - {subject} - {chapterName}</h1>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card resource-card">
            <div className="card-body">
              <h5 className="card-title">Notes</h5>
              <p className="card-text">Detailed notes for {chapterName}.</p>
                            <Link to={`/resources/cbse/class/${grade}/${subject}/${chapterName}/notes`} className="btn btn-primary">View Notes</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card resource-card">
            <div className="card-body">
              <h5 className="card-title">Assignments</h5>
              <p className="card-text">Practice assignments for {chapterName}.</p>
              <a href="#" className="btn btn-primary">View Assignments</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card resource-card">
            <div className="card-body">
              <h5 className="card-title">Quiz</h5>
              <p className="card-text">Test your knowledge with a quiz on {chapterName}.</p>
              <a href="#" className="btn btn-primary">Start Quiz</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChapterContent;
