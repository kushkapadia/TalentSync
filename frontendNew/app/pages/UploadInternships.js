import React, { useState } from "react"
import styled, { keyframes } from "styled-components"
import Axios from "axios"

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  margin: 2rem auto;
  width: 90%;
  max-width: 500px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.6s ease-in-out;
`

const Title = styled.h2`
  color: #333;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Label = styled.label`
  color: #555;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`

const Input = styled.input`
  padding: 0.8rem;
  margin-bottom: 1.2rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`

const TextArea = styled.textarea`
  padding: 0.8rem;
  margin-bottom: 1.2rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 1rem;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`

const SubmitButton = styled.button`
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
  }
`

function UploadInternships() {
  const [jobTitle, setJobTitle] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [jobDescription, setJobDescription] = useState("")
  const [jobLocation, setJobLocation] = useState("")
  const [salaryRange, setSalaryRange] = useState("")
  const [jobType, setJobType] = useState("")
  const [applicationLink, setApplicationLink] = useState("")
  const token = localStorage.getItem("talentSyncToken")

  const handleSubmit = async e => {
    e.preventDefault()

    const internshipData = {
      jobTitle,
      companyName,
      jobDescription,
      jobLocation,
      salaryRange,
      jobType,
      applicationLink
    }

    try {
      // Retrieve the Bearer token from localStorage
      if (!token) {
        console.log("Authentication token not found.")
        return
      }

      // Correct way to send Axios POST request
      const response = await Axios.post(
        "/jobpost/create", // Your API endpoint
        internshipData, // The payload (internship data)
        {
          headers: {
            "Cache-Control": "no-cache",
            Pragma: "no-cache",
            Expires: "0",
            Authorization: `Bearer ${token}`
          }
        }
      )
      console.log("Internship submitted successfully:", response.data)
    } catch (error) {
      console.error("Error submitting internship:", error)
    }
  }

  return (
    <FormContainer>
      <Title>Submit an Internship</Title>
      <Form onSubmit={handleSubmit}>
        <Label>Profile:</Label>
        <Input type="text" value={jobTitle} onChange={e => setJobTitle(e.target.value)} required />

        <Label>Company Name:</Label>
        <Input type="text" value={companyName} onChange={e => setCompanyName(e.target.value)} required />

        <Label>Job Description:</Label>
        <TextArea value={jobDescription} onChange={e => setJobDescription(e.target.value)} required />

        <Label>Location:</Label>
        <Input type="text" value={jobLocation} onChange={e => setJobLocation(e.target.value)} required />

        <Label>Stipend:</Label>
        <Input type="text" value={salaryRange} onChange={e => setSalaryRange(e.target.value)} required />

        <Label>Type:</Label>
        <Input type="text" value={jobType} onChange={e => setJobType(e.target.value)} required />

        <Label>Application Link:</Label>
        <Input type="text" value={applicationLink} onChange={e => setApplicationLink(e.target.value)} required />

        <SubmitButton type="submit">Submit Internship</SubmitButton>
      </Form>
    </FormContainer>
  )
}

export default UploadInternships
