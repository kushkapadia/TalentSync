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
  const [jobType, setJobType] = useState("")
  const [responsibilities, setResponsibilities] = useState("")
  const [qualifications, setQualifications] = useState("")
  const [skillsRequired, setSkillsRequired] = useState("")
  const [experienceRequired, setExperienceRequired] = useState("")
  const [salaryRange, setSalaryRange] = useState("")
  const [benefits, setBenefits] = useState("")
  const [applicationDeadline, setApplicationDeadline] = useState("")
  const [contactPerson, setContactPerson] = useState("")
  const [contactEmail, setContactEmail] = useState("")
  const [contactPhone, setContactPhone] = useState("")
  const [link, setLink] = useState("")
  const [eligibility, setEligibility] = useState("")
  const [remoteWork, setRemoteWork] = useState(false)
  const [requiredLanguages, setRequiredLanguages] = useState("")
  const [travelRequirement, setTravelRequirement] = useState("")
  const [workSchedule, setWorkSchedule] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic goes here
    console.log({
      profile, company, jobDescription, location, jobType, responsibilities,
      qualifications, skillsRequired, experienceRequired, salaryRange, benefits,
      applicationDeadline, contactPerson, contactEmail, contactPhone, link, eligibility,
      remoteWork, requiredLanguages, travelRequirement, workSchedule
    })
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

        <Label>Job Type:</Label>
        <Input type="text" value={jobType} onChange={(e) => setJobType(e.target.value)} />

        <Label>Responsibilities:</Label>
        <TextArea value={responsibilities} onChange={(e) => setResponsibilities(e.target.value)} />

        <Label>Qualifications:</Label>
        <TextArea value={qualifications} onChange={(e) => setQualifications(e.target.value)} />

        <Label>Skills Required:</Label>
        <TextArea value={skillsRequired} onChange={(e) => setSkillsRequired(e.target.value)} />

        <Label>Experience Required:</Label>
        <Input type="text" value={experienceRequired} onChange={(e) => setExperienceRequired(e.target.value)} />

        <Label>Salary Range:</Label>
        <Input type="text" value={salaryRange} onChange={(e) => setSalaryRange(e.target.value)} />

        <Label>Benefits:</Label>
        <TextArea value={benefits} onChange={(e) => setBenefits(e.target.value)} />

        <Label>Application Deadline:</Label>
        <Input type="date" value={applicationDeadline} onChange={(e) => setApplicationDeadline(e.target.value)} />

        <Label>Contact Person:</Label>
        <Input type="text" value={contactPerson} onChange={(e) => setContactPerson(e.target.value)} />

        <Label>Contact Email:</Label>
        <Input type="email" value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} />

        <Label>Contact Phone:</Label>
        <Input type="tel" value={contactPhone} onChange={(e) => setContactPhone(e.target.value)} />

        <Label>Application Link:</Label>
        <Input type="text" value={link} onChange={(e) => setLink(e.target.value)} required />

        <Label>Eligibility:</Label>
        <Input type="text" value={eligibility} onChange={(e) => setEligibility(e.target.value)} />

        <Label>Remote Work:</Label>
        <Input type="checkbox" checked={remoteWork} onChange={(e) => setRemoteWork(e.target.checked)} />

        <Label>Required Languages:</Label>
        <Input type="text" value={requiredLanguages} onChange={(e) => setRequiredLanguages(e.target.value)} />

        <Label>Travel Requirement:</Label>
        <Input type="text" value={travelRequirement} onChange={(e) => setTravelRequirement(e.target.value)} />

        <Label>Work Schedule:</Label>
        <Input type="checkbox" checked={workSchedule} onChange={(e) => setWorkSchedule(e.target.checked)} />

        <SubmitButton type="submit">Submit Internship</SubmitButton>
      </Form>
    </FormContainer>
  )
}

export default UploadInternships
