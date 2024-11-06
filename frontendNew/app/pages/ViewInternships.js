// pages/ViewInternships.js
import React, { useState, useEffect } from "react"
import styled from "styled-components"

const PageContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: auto;
`

const Title = styled.h2`
  font-size: 1.8rem;
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
`

const InternshipCard = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
`

const InternshipTitle = styled.h3`
  font-size: 1.5rem;
  color: #007bff;
  margin-bottom: 0.5rem;
`

const InternshipDetail = styled.p`
  margin: 0.3rem 0;
  color: #555;
`

function ViewInternships() {
  const [internships, setInternships] = useState([])

  useEffect(() => {
    // Mock data for now; replace with actual API call in real implementation
    const mockInternships = [
      {
        id: 1,
        profile: "Frontend Developer",
        company: "TechCorp",
        jobDescription: "Work on frontend applications using React.",
        location: "Remote",
        stipend: "$500/month",
        duration: "3 months"
      },
      {
        id: 2,
        profile: "Backend Developer",
        company: "DataCorp",
        jobDescription: "Build REST APIs using Node.js.",
        location: "San Francisco, CA",
        stipend: "$1000/month",
        duration: "6 months"
      }
    ]
    setInternships(mockInternships)
  }, [])

  return (
    <PageContainer>
      <Title>Your Uploaded Internships</Title>
      {internships.length > 0 ? (
        internships.map((internship) => (
          <InternshipCard key={internship.id}>
            <InternshipTitle>{internship.profile}</InternshipTitle>
            <InternshipDetail><strong>Company:</strong> {internship.company}</InternshipDetail>
            <InternshipDetail><strong>Description:</strong> {internship.jobDescription}</InternshipDetail>
            <InternshipDetail><strong>Location:</strong> {internship.location}</InternshipDetail>
            <InternshipDetail><strong>Stipend:</strong> {internship.stipend}</InternshipDetail>
            <InternshipDetail><strong>Duration:</strong> {internship.duration}</InternshipDetail>
          </InternshipCard>
        ))
      ) : (
        <p>No internships uploaded yet.</p>
      )}
    </PageContainer>
  )
}

export default ViewInternships
