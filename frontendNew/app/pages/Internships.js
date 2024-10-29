import React from "react";
// import "./App.css";
import FilterSidebar from "../components/FilterSidebar";
import JobCard from "../components/JobCard";

function Internships() {
  return (
    <div className="app-container">
      <FilterSidebar />
      <div className="job-listings">
      <JobCard
        title="Digital Marketing"
        company="Web3Task"
        location="Noida (Hybrid)"
        duration="3 Months"
        stipend="₹4,000/month"
        posted="1 week ago"
        workType="Internship"
        companyLogo="https://via.placeholder.com/40"
      />
      <JobCard
        title="Software Engineer"
        company="Tech Innovators"
        location="Bangalore (Remote)"
        duration="Full-time"
        stipend="₹1,00,000/month"
        posted="2 days ago"
        workType="Full-time"
        companyLogo="https://via.placeholder.com/40"
      />
      <JobCard
        title="Product Designer"
        company="Creative Studio"
        location="Delhi (On-site)"
        duration="6 Months"
        stipend="₹30,000/month"
        posted="3 days ago"
        workType="Contract"
        companyLogo="https://via.placeholder.com/40"
      />
      <JobCard
        title="Data Analyst"
        company="Data Insights Co."
        location="Pune (Remote)"
        duration="1 Year"
        stipend="₹50,000/month"
        posted="5 days ago"
        workType="Full-time"
        companyLogo="https://via.placeholder.com/40"
      />
      <JobCard
        title="Web Developer"
        company="Startup Hub"
        location="Mumbai (Hybrid)"
        duration="3 Months"
        stipend="₹25,000/month"
        posted="1 week ago"
        workType="Internship"
        companyLogo="https://via.placeholder.com/40"
      />  
      </div>
    </div>
  );
}

export default Internships;