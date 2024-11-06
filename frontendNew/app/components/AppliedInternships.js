import React, { useEffect, useState } from "react"
import Axios from "axios"
import Page from "./Page"

const studentId = localStorage.getItem("talentSyncId")

function AppliedInternships() {
  const [internships, setInternships] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchInternships = async () => {
      console.log("Fetching internships for studentId:", studentId) // Debugging log
      if (!studentId) {
        setError("Student ID not found.")
        setLoading(false)
        return
      }

      // Retrieve the Bearer token from localStorage
      const token = localStorage.getItem("talentSyncToken")
      if (!token) {
        setError("Authentication token not found.")
        setLoading(false)
        return
      }

      try {
        // Include the token in the headers
        const response = await Axios.get(`/internshipapplication/get-by-studId/${studentId}`, {
          headers: {
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
  }, [studentId])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <Page title="AppliedInternships">
      <div className="applied-internships-container">
        <h2 className="applied-internships-heading">My Applied Internships</h2>
        <ul className="applied-internships-list">
          {internships.data.map(internship => (
            <li key={internship.id} className="internship-item">
              <div className="internship-info">
                <h3 className="internship-title">
                  {internship.title} at {internship.company}
                </h3>
                <p>
                  <strong>Job ID:</strong> {internship.jobId}
                </p>
                <p>
                  <strong>Student ID:</strong> {internship.studentId}
                </p>
                <p>
                  <strong>Status:</strong> {internship.applicationStatus}
                </p>
                <p>
                  <strong>Resume:</strong>{" "}
                  <a href={internship.resumeLink} target="_blank" rel="noopener noreferrer">
                    View Resume
                  </a>
                </p>
                <p>
                  <strong>Cover Letter:</strong> {internship.coverLetter}
                </p>
                <p>
                  <strong>Notes:</strong> {internship.notes}
                </p>
                <p>
                  <strong>Interview Scheduled:</strong> {internship.interviewScheduled ? "Yes" : "No"}
                </p>
                {internship.interviewScheduled && (
                  <p>
                    <strong>Interview Date:</strong> {internship.interviewDate}
                  </p>
                )}
                <p>
                  <strong>Feedback:</strong> {internship.feedback}
                </p>
                <p>
                  <strong>Rating:</strong> {internship.rating} / 5
                </p>
                {internship.certificate && (
                  <p>
                    <strong>Certificate:</strong>{" "}
                    <a href={internship.certificate} target="_blank" rel="noopener noreferrer">
                      View Certificate
                    </a>
                  </p>
                )}
                <p>
                  <strong>Applied On:</strong> {new Date(internship.createdAt).toLocaleDateString()}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Page>
  )
}

export default AppliedInternships
