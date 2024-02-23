import React from 'react';
import './Department.css'; // Import CSS file for styling
import { Link } from 'react-router-dom';

const DepartmentList = ({ departments }) => {


  return (
    <div className="department-list-container">
      <h2>Departments</h2>
      <div className="department-list">
        {departments.map((department, index) => (
            <Link to="/Subject">
          <div key={index} className="department-item">
            <h3>{department.name}</h3>
            <div className="year-options">
              <p>Year 1</p>
              <p>Year 2</p>
              <p>Year 3</p>
              <p>Year 4</p>
            </div>

          </div>
            </Link>
        ))}
      </div>
    </div>
  );
};

export default DepartmentList;