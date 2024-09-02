import React from 'react';
import JobCard from '../components/JobCard';
import logo1 from "../../Images/logo1.jpg"
import logo2 from "../../Images/logo2.webp"
import logo3 from "../../Images/logo3.jpeg"

const jobsData = [
  {
    title: 'Backend Development',
    company: 'Neuralbits Technologies Private Limited',
    location: 'Mumbai',
    duration: '3 Months',
    stipend: '₹ 8,000-12,000 /month',
    posted: 'Today',
    workType: '',
    companyLogo: logo1 
  },
  {
    title: 'Machine Learning',
    company: 'APSV TECHNOLOGIES',
    location: 'Work from home',
    duration: '1 Month',
    stipend: '₹ 1,000 /month',
    posted: 'Few hours ago',
    workType: 'Part time',
    companyLogo: logo2
  },
  {
    title: 'Technical Analyst',
    company: 'Aryaamedh Enterprises',
    location: 'Work from home',
    duration: '6 Months',
    stipend: '₹ 10,000-15,000 /month',
    posted: 'Few hours ago',
    workType: '',
    companyLogo: logo3
  },
];

function Internships() {
  return (
    <div className="jobs-list">
      {jobsData.map((job, index) => (
        <JobCard
          key={index}
          title={job.title}
          company={job.company}
          location={job.location}
          duration={job.duration}
          stipend={job.stipend}
          posted={job.posted}
          workType={job.workType}
          companyLogo={job.companyLogo}
        />
      ))}
    </div>
  );
}

export default Internships;
