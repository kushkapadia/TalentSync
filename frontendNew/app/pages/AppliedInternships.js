import React from "react";
import styled from "styled-components";
import InternshipCard from "../components/InternshipCard";

// Styled Components
const Container = styled.div`
  min-height: 100vh;
  background-color: #f9fafb; /* Light gray for background */
  padding: 3rem 1rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  
  @media (min-width: 640px) {
    padding: 3rem 1.5rem;
  }
  
  @media (min-width: 1024px) {
    padding: 3rem 2rem;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1120px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  color: #111827; /* Gray 900 - darker for better contrast */
  margin-bottom: 1.25rem;
  letter-spacing: -0.025em;
  line-height: 1.2;
  
  @media (min-width: 640px) {
    font-size: 3.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.375rem;
  color: #4b5563; /* Gray 600 */
  font-weight: 500;
  line-height: 1.6;
  max-width: 36rem;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

// Main Component
const AppliedInternships = () => {
  const internships = [
    {
      position: "Frontend Developer",
      company: "TechCorp",
      logo: "https://r2.erweima.ai/imgcompressed/img/compressed_f0944f47a497631540d17712999f9395.webp",
      stipend: "20000",
      location: "Remote",
      duration: "6 months",
      dateApplied: "2024-03-15",
    },
    {
      position: "UI/UX Designer",
      company: "DesignLabs",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE1fxcRIqLJuUH2PyrbhMCnIYJX0L4UOZi5w&s",
      stipend: "25000",
      location: "Bangalore",
      duration: "3 months",
      dateApplied: "2024-03-14",
    },
    {
      position: "Product Manager",
      company: "StartupX",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZLOzHJ7VzIFueVOdRlaaHXpHShf8sj-hitw&s",
      stipend: "30000",
      location: "Mumbai",
      duration: "4 months",
      dateApplied: "2024-03-13",
    },
    {
      position: "Data Analyst",
      company: "Analytics Pro",
      logo: "https://yt3.googleusercontent.com/F2-ehc1tSL73bkznz2SGJw1Mo9z7DUGPcKfvJHzX6ddCKMr1KMMOy2RrWRITrEqLditFHMxPPQ=s900-c-k-c0x00ffffff-no-rj",
      stipend: "22000",
      location: "Delhi",
      duration: "6 months",
      dateApplied: "2024-03-12",
    },
  ];

  return (
    <Container>
      <ContentWrapper>
        <Header>
          <Title>Applied Internships</Title>
          <Subtitle>Track your internship applications and their status</Subtitle>
        </Header>
        
        <Grid>
          {internships.map((internship, index) => (
            <InternshipCard key={index} {...internship} />
          ))}
        </Grid>
      </ContentWrapper>
    </Container>
  );
};

export default AppliedInternships;