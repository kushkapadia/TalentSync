import React from 'react'
import './AppliedInternships.css'; // Import the CSS file

function AppliedInternships() {

  const internships = [
    { id: 1, title: 'Frontend Developer', company: 'Google' },
    { id: 2, title: 'Backend Developer', company: 'Facebook' },
    { id: 3, title: 'Full Stack Developer', company: 'Amazon' },
  ];

  return (
    <div className="applied-internships-container">
      <h2 className="applied-internships-heading">My Applied Internships</h2>
      <ul className="applied-internships-list">
        {internships.map(internship => (
          <li key={internship.id} className="internship-item">
            <div className="internship-title">{internship.title}</div>
            <div className="internship-company">{internship.company}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AppliedInternships