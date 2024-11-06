import React, { useEffect, useState } from "react"
import Axios from "axios"
import { useParams } from "react-router-dom"
import styled from "styled-components"

const Container = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`

const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 0.5rem;
`

const Company = styled.p`
  font-size: 18px;
  color: #007bff;
  margin-bottom: 1rem;
`

const Description = styled.p`
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`

const ApplyButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`
const token = localStorage.getItem("talentSyncToken")
function JobDescription() {
  const [applied, setApplied] = useState(false)

  // Sample job data for demonstration purposes.
  // const job = {
  //   id: jobId,
  //   title: "Software Engineer",
  //   company: "Tech Innovators",
  //   description:
  //     "This role involves developing and maintaining software applications. Candidates should have experience in JavaScript, React, and Node.js.",
  // };
  const { jobId } = useParams()

  const [job, setJob] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchJobs = async () => {
      console.log("Fetching jobs") // Debugging log

      if (!token) {
        setError("Authentication token not found.")
        setLoading(false)
        return
      }

      try {
        // Include the token in the headers
        const response = await Axios.get(`/jobpost/get-by-id/${jobId}`, {
          headers: {
            "Cache-Control": "no-cache",
            Pragma: "no-cache",
            Expires: "0",
            Authorization: `Bearer ${token}`
          }
        })
        console.log("API Response:", response.data.data) // Debugging log
        setJob(response.data.data)
        setLoading(false)
      } catch (err) {
        console.error("Error fetching jobs:", err) // Debugging log
        setError("Failed to load jobs. Please try again later.")
        setLoading(false)
      }
    }

    fetchJobs()
  }, {})

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error}</div>
  }
  const handleApply = () => {
    setApplied(true)
    alert("You have applied for this internship.")
  }

  return (
    <Container>
      <Title>{job.jobTitle}</Title>
      <Company>{job.companyName}</Company>
      <Description>{job.jobDescription}</Description>
      {!applied ? <ApplyButton onClick={handleApply}>Apply Now</ApplyButton> : <p style={{ color: "green", fontWeight: "bold" }}>You have applied for this internship.</p>}
    </Container>
  )
}

export default JobDescription
