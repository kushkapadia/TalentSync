import React from "react";
import FilterSidebar from "../components/FilterSidebar";
import JobCard from "../components/JobCard";
import { Link } from "react-router-dom";

// Define an array with all job data
const jobData = [
  {
    jobId: 1,
    title: "Digital Marketing",
    company: "Web3Task",
    location: "Noida (Hybrid)",
    duration: "3 Months",
    stipend: "₹4,000/month",
    posted: "1 week ago",
    workType: "Internship",
    companyLogo: "https://via.placeholder.com/40"
  },
  {
    jobId: 2,
    title: "Software Engineer",
    company: "Tech Innovators",
    location: "Bangalore (Remote)",
    duration: "Full-time",
    stipend: "₹1,00,000/month",
    posted: "2 days ago",
    workType: "Full-time",
    companyLogo: "https://via.placeholder.com/40"
  },
  {
    jobId: 3,
    title: "Product Designer",
    company: "Creative Studio",
    location: "Delhi (On-site)",
    duration: "6 Months",
    stipend: "₹30,000/month",
    posted: "3 days ago",
    workType: "Contract",
    companyLogo: "https://via.placeholder.com/40"
  },
  {
    jobId: 4,
    title: "Data Analyst",
    company: "Data Insights Co.",
    location: "Pune (Remote)",
    duration: "1 Year",
    stipend: "₹50,000/month",
    posted: "5 days ago",
    workType: "Full-time",
    companyLogo: "https://via.placeholder.com/40"
  },
  {
    jobId: 5,
    title: "Web Developer",
    company: "Startup Hub",
    location: "Mumbai (Hybrid)",
    duration: "3 Months",
    stipend: "₹25,000/month",
    posted: "1 week ago",
    workType: "Internship",
    companyLogo: "https://via.placeholder.com/40"
  }
];

function Internships() {
  return (
    <div className="app-container">
      <FilterSidebar />
      <div className="job-listings">
        {/* Map through the jobData array to render JobCard components */}
        {jobData.map((job, index) => (
          <Link to={`/internships/${job.jobId}`} key={job.jobId}>
            <JobCard
              key={index} // use index as a unique key for each JobCard
              id={job.jobId}
              title={job.title}
              company={job.company}
              location={job.location}
              duration={job.duration}
              stipend={job.stipend}
              posted={job.posted}
              workType={job.workType}
              companyLogo={job.companyLogo}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Internships;
