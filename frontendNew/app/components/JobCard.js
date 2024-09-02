import React from "react"
import styled from "styled-components"
import Container from "./Container"

const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.h2`
  font-size: 18px;
  margin: 0;
`

const CompanyLogo = styled.img`
  height: 40px;
`

const CompanyInfo = styled.p`
  margin: 10px 0;
  color: #555;
`

const HiringStatus = styled.span`
  color: #007bff;
  font-weight: bold;
`

const JobDetails = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;
`

const JobFooter = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const WorkType = styled.span`
  color: #28a745;
  font-weight: bold;
`

function JobCard({ title, company, location, duration, stipend, posted, workType, companyLogo }) {
  return (
    // <Container>
    <Card>
      <Header>
        <Title>{title}</Title>
        <CompanyLogo src={companyLogo} alt={`${company} logo`} />
      </Header>
      <CompanyInfo>
        {company} <HiringStatus>Actively hiring</HiringStatus>
      </CompanyInfo>
      <JobDetails>
        <span>{location}</span>
        <span>{duration}</span>
        <span>{stipend}</span>
      </JobDetails>
      <JobFooter>
        <span>{posted}</span>
        {workType && <WorkType>{workType}</WorkType>}
      </JobFooter>
    </Card>
    // {/* </Container> */}
  )
}

export default JobCard
