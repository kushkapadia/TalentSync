// import React from "react"
import FilterSidebar from "../components/FilterSidebar"
import JobCard from "../components/JobCard"
import { Link } from "react-router-dom"

// Define an array with all job data
// const jobData = [
//   {
//     jobId: 1,
//     title: "Digital Marketing",
//     company: "Web3Task",
//     location: "Noida (Hybrid)",
//     duration: "3 Months",
//     stipend: "₹4,000/month",
//     posted: "1 week ago",
//     workType: "Internship",
//     companyLogo: "https://via.placeholder.com/40"
//   },
//   {
//     jobId: 2,
//     title: "Software Engineer",
//     company: "Tech Innovators",
//     location: "Bangalore (Remote)",
//     duration: "Full-time",
//     stipend: "₹1,00,000/month",
//     posted: "2 days ago",
//     workType: "Full-time",
//     companyLogo: "https://via.placeholder.com/40"
//   },
//   {
//     jobId: 3,
//     title: "Product Designer",
//     company: "Creative Studio",
//     location: "Delhi (On-site)",
//     duration: "6 Months",
//     stipend: "₹30,000/month",
//     posted: "3 days ago",
//     workType: "Contract",
//     companyLogo: "https://via.placeholder.com/40"
//   },
//   {
//     jobId: 4,
//     title: "Data Analyst",
//     company: "Data Insights Co.",
//     location: "Pune (Remote)",
//     duration: "1 Year",
//     stipend: "₹50,000/month",
//     posted: "5 days ago",
//     workType: "Full-time",
//     companyLogo: "https://via.placeholder.com/40"
//   },
//   {
//     jobId: 5,
//     title: "Web Developer",
//     company: "Startup Hub",
//     location: "Mumbai (Hybrid)",
//     duration: "3 Months",
//     stipend: "₹25,000/month",
//     posted: "1 week ago",
//     workType: "Internship",
//     companyLogo: "https://via.placeholder.com/40"
//   }
// ];

import React, { useEffect, useState } from "react"
import Axios from "axios"
// import Page from "./

const studentId = localStorage.getItem("talentSyncId")
const token = localStorage.getItem("talentSyncToken")
function Internships() {
  const [internships, setInternships] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchInternships = async () => {
      console.log("Fetching internships") // Debugging log

      if (!token) {
        setError("Authentication token not found.")
        setLoading(false)
        return
      }

      try {
        // Include the token in the headers
        const response = await Axios.get(`/jobpost/get-all`, {
          headers: {
            "Cache-Control": "no-cache",
            Pragma: "no-cache",
            Expires: "0",
            Authorization: `Bearer ${token}`
          }
        })
        console.log("API Response:", response.data) // Debugging log
        setInternships(response.data)
        setLoading(false)
      } catch (err) {
        console.error("Error fetching internships:", err) // Debugging log
        setError("Failed to load internships. Please try again later.")
        setLoading(false)
      }
    }

    fetchInternships()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div className="app-container">
      <FilterSidebar />
      <div className="job-listings">
        {/* Map through the jobData array to render JobCard components */}
        {internships.data.map((job, index) => (
          <Link to={`/internships/${job.jobId}`} key={job.jobId}>
            <JobCard
              key={index} // use index as a unique key for each JobCard
              id={job._id}
              title={job.jobTitle}
              company={job.companyName}
              location={job.jobLocation}
              duration={job.duration}
              stipend={job.salaryRange}
              posted={job.createdAt}
              workType={job.jobType}
              companyLogo={job.companyLogo}
              // applicationDeadline={applicationDeadline}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Internships
