// pages/UploadInternships.js
import React, { useState } from "react"
import styled, { keyframes } from "styled-components"

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
  const [profile, setProfile] = useState("")
  const [company, setCompany] = useState("")
  const [jobDescription, setJobDescription] = useState("")
  const [location, setLocation] = useState("")
  const [stipend, setStipend] = useState("")
  const [duration, setDuration] = useState("")
  const [link, setLink] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic goes here
    console.log({ profile, company, jobDescription, location, stipend, duration })
  }

  return (
    <FormContainer>
      <Title>Submit an Internship</Title>
      <Form onSubmit={handleSubmit}>
        <Label>Profile:</Label>
        <Input type="text" value={profile} onChange={(e) => setProfile(e.target.value)} required />

        <Label>Company Name:</Label>
        <Input type="text" value={company} onChange={(e) => setCompany(e.target.value)} required />

        <Label>Job Description:</Label>
        <TextArea value={jobDescription} onChange={(e) => setJobDescription(e.target.value)} required />

        <Label>Location:</Label>
        <Input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />

        <Label>Stipend:</Label>
        <Input type="text" value={stipend} onChange={(e) => setStipend(e.target.value)} required />

        <Label>Duration:</Label>
        <Input type="text" value={duration} onChange={(e) => setDuration(e.target.value)} required />

        <Label>Application Link:</Label>
        <Input type="text" value={link} onChange={(e) => setLink(e.target.value)} required />

        <SubmitButton type="submit">Submit Internship</SubmitButton>
      </Form>
    </FormContainer>
  )
}

export default UploadInternships
