
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ClassResources.css';

const ClassResources: React.FC = () => {
  const { grade } = useParams<{ grade: string }>();
  const classNumber = parseInt(grade || '0');

  const cbse6_10Resources = [
    { name: 'Mathematics', description: 'Comprehensive notes and practice problems.' },
    { name: 'Science', description: 'Detailed explanations and experiments.' },
    { name: 'Social Science', description: 'In-depth study of history, geography, and civics.' },
    { name: 'Hindi', description: 'Grammar, literature, and writing practice.' },
    { name: 'English', description: 'Grammar, literature, and comprehension exercises.' },
  ];

  const cbse11_12Resources = [
    { name: 'Physics', description: 'Advanced concepts and problem-solving.' },
    { name: 'Chemistry', description: 'Organic, inorganic, and physical chemistry.' },
    { name: 'Mathematics', description: 'Calculus, algebra, and geometry.' },
    { name: 'Biology', description: 'Botany and Zoology.' },
    { name: 'Economics', description: 'Principles of micro and macro economics.' },
    { name: 'Business Studies', description: 'Principles and functions of business management.' },
    { name: 'History', description: 'Study of past events and civilizations.' },
    { name: 'Geography', description: 'Physical and human geography.' },
    { name: 'Political Science', description: 'Theories and practices of government and politics.' },
    { name: 'Sociology', description: 'Study of human society and social behavior.' },
    { name: 'Psychology', description: 'Study of mind and behavior.' },
  ];

  const jeeResources = [
    { name: 'Physics', description: 'Advanced concepts and problem-solving for JEE.' },
    { name: 'Chemistry', description: 'Organic, inorganic, and physical chemistry for JEE.' },
    { name: 'Mathematics', description: 'Calculus, algebra, and geometry for JEE.' },
  ];

  const neetResources = [
    { name: 'Physics', description: 'Advanced concepts and problem-solving for NEET.' },
    { name: 'Chemistry', description: 'Organic, inorganic, and physical chemistry for NEET.' },
    { name: 'Biology', description: 'Botany and Zoology for NEET.' },
  ];

  let resourcesToDisplay: { name: string; description: string; }[] = [];
  let examType = '';

  if (window.location.hash.includes('/resources/cbse/')) {
    examType = 'CBSE';
    if (classNumber >= 6 && classNumber <= 10) {
      resourcesToDisplay = cbse6_10Resources;
    } else if (classNumber === 11 || classNumber === 12) {
      resourcesToDisplay = cbse11_12Resources;
    }
  } else if (window.location.hash.includes('/resources/jee/')) {
    examType = 'JEE';
    if (classNumber === 11 || classNumber === 12) {
      resourcesToDisplay = jeeResources;
    }
  } else if (window.location.hash.includes('/resources/neet/')) {
    examType = 'NEET';
    if (classNumber === 11 || classNumber === 12) {
      resourcesToDisplay = neetResources;
    }
  }

  return (
    <div className="class-resources-container">
      <h1 className="text-center">Resources for Class {grade} {examType}</h1>
      <div className="row">
        {resourcesToDisplay.map((resource, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card resource-card">
              <div className="card-body">
                <h5 className="card-title">{resource.name}</h5>
                <p className="card-text">{resource.description}</p>
                {examType === 'CBSE' ? (
                  <Link to={`/resources/cbse/class/${grade}/${resource.name}/chapters`} className="btn btn-primary">View Chapters</Link>
                ) : (
                  <button className="btn btn-primary" disabled>View Resource</button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassResources;
