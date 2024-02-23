import React from 'react';
import './Subject.css'; // Import CSS file for styling
import { Link } from 'react-router-dom';

const SubjectList = ({ subjects }) => {
  const handleClick = (subject) => {
    // Handle click event for the selected subject, e.g., navigate to subject details page
    console.log(`Clicked subject: ${subject}`);
  };

  return (
    <div className="subject-list-container">
      <h2>Subjects</h2>
      <div className="subject-list">
        {subjects.map((subject, index) => (
            <Link>
          <div key={index} className="subject-card">
            <h3>{subject.name}</h3>
            <p>{subject.description}</p>
            <p>Teacher: {subject.teacher}</p>
          </div>
            </Link>
        ))}
      </div>
    </div>
  );
};

export default SubjectList;