import FilterSidebar from "../components/FilterSidebar"
import JobCard from "../components/JobCard"
import { Link } from "react-router-dom"
import React, { useEffect, useState } from "react"
import Axios from "axios"
import styled from "styled-components"

const token = localStorage.getItem("talentSyncToken")

const AppContainer = styled.div`
  display: flex;
  ${'' /* padding: 20px; */}
  margin: 3% 20% 20%;
`

const JobListings = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`

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
        const response = await Axios.get(`/jobpost/get-all`, {
          headers: {
            "Cache-Control": "no-cache",
            Pragma: "no-cache",
            Expires: "0",
            Authorization: `Bearer ${token}`,
          },
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
    <AppContainer>
      <FilterSidebar />
      <JobListings>
        {internships.data.map((job, index) => (
          <Link to={`/internships/${job.jobId}`} key={job.jobId}>
            <JobCard
              key={index}
              id={job._id}
              title={job.jobTitle}
              company={job.companyName}
              location={job.jobLocation}
              duration={job.duration}
              stipend={job.salaryRange}
              posted={job.createdAt}
              workType={job.jobType}
              companyLogo={job.companyLogo}
            />
          </Link>
        ))}
      </JobListings>
    </AppContainer>
  )
}

export default Internships
