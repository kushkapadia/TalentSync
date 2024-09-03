import React from 'react';
import Page from './Page';
// import './AppliedInternships.css'; // Import the CSS file

function AppliedInternships() {

  const internships = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'Google',
      jobId: 'J12345',
      studentId: 'S67890',
      applicationStatus: 'Pending',
      resumeLink: 'https://example.com/resume.pdf',
      coverLetter: 'I am passionate about frontend development...',
      notes: 'Follow up after 1 week.',
      interviewScheduled: true,
      interviewDate: '2024-09-15',
      feedback: 'Awaiting feedback.',
      rating: 4,
      certificate: 'https://example.com/certificate.pdf',
      createdAt: new Date('2024-08-20'),
    },
    {
      id: 2,
      title: 'Backend Developer',
      company: 'Facebook',
      jobId: 'J23456',
      studentId: 'S67890',
      applicationStatus: 'Interview Scheduled',
      resumeLink: 'https://example.com/resume.pdf',
      coverLetter: 'My backend skills are extensive...',
      notes: 'Prepare for data structure questions.',
      interviewScheduled: true,
      interviewDate: '2024-09-18',
      feedback: 'Feedback positive, waiting for final decision.',
      rating: 5,
      certificate: '',
      createdAt: new Date('2024-08-22'),
    },
    {
      id: 3,
      title: 'Full Stack Developer',
      company: 'Amazon',
      jobId: 'J34567',
      studentId: 'S67890',
      applicationStatus: 'Applied',
      resumeLink: 'https://example.com/resume.pdf',
      coverLetter: 'I have a deep understanding of full stack...',
      notes: 'Research the company’s latest projects.',
      interviewScheduled: false,
      interviewDate: '',
      feedback: 'No feedback yet.',
      rating: 3,
      certificate: '',
      createdAt: new Date('2024-08-25'),
    },
  ];

  return (
    <Page title="AppliedInternships">
    <div className="applied-internships-container">
      <h2 className="applied-internships-heading">My Applied Internships</h2>
      <ul className="applied-internships-list">
        {internships.map(internship => (
          <li key={internship.id} className="internship-item">
            <div className="internship-info">
              <h3 className="internship-title">{internship.title} at {internship.company}</h3>
              <p><strong>Job ID:</strong> {internship.jobId}</p>
              <p><strong>Student ID:</strong> {internship.studentId}</p>
              <p><strong>Status:</strong> {internship.applicationStatus}</p>
              <p><strong>Resume:</strong> <a href={internship.resumeLink} target="_blank" rel="noopener noreferrer">View Resume</a></p>
              <p><strong>Cover Letter:</strong> {internship.coverLetter}</p>
              <p><strong>Notes:</strong> {internship.notes}</p>
              <p><strong>Interview Scheduled:</strong> {internship.interviewScheduled ? 'Yes' : 'No'}</p>
              {internship.interviewScheduled && (
                <p><strong>Interview Date:</strong> {internship.interviewDate}</p>
              )}
              <p><strong>Feedback:</strong> {internship.feedback}</p>
              <p><strong>Rating:</strong> {internship.rating} / 5</p>
              {internship.certificate && (
                <p><strong>Certificate:</strong> <a href={internship.certificate} target="_blank" rel="noopener noreferrer">View Certificate</a></p>
              )}
              <p><strong>Applied On:</strong> {internship.createdAt.toLocaleDateString()}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </Page>
  )
}

export default AppliedInternships;
