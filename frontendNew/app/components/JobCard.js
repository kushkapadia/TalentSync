import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`

const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin: 0;
`

const CompanyLogo = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  object-fit: cover;
`

const CompanyInfo = styled.p`
  font-size: 14px;
  color: #555;
  margin: 10px 0;
`

const HiringStatus = styled.span`
  color: #007bff;
  font-weight: bold;
`

const JobDetails = styled.div`
  display: flex;
  gap: 15px;
  font-size: 14px;
  color: #666;
  margin-top: 10px;

  span {
    display: flex;
    align-items: center;
  }
`

const JobFooter = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  color: #888;
`

const WorkType = styled.span`
  color: #28a745;
  font-weight: bold;
`

function JobCard({ id, title, company, location, duration, stipend, posted, workType, companyLogo }) {
  return (
    <Link to={`/internships/${id}`}>
      <Card>
        <Header>
          <Title>{title}</Title>
          {companyLogo && <CompanyLogo src={companyLogo} alt={`${company} logo`} />}
        </Header>
        <CompanyInfo>
          {company} <HiringStatus>Actively hiring</HiringStatus>
        </CompanyInfo>
        <JobDetails>
          {location && <span>📍 {location}</span>}
          {duration && <span>⏳ {duration}</span>}
          {stipend && <span>💰 {stipend}</span>}
        </JobDetails>
        <JobFooter>
          <span>Posted: {posted}</span>
          {workType && <WorkType>{workType}</WorkType>}
        </JobFooter>
      </Card>
    </Link>
  )
}

export default JobCard
