import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 0.5rem;
`;

const Company = styled.p`
  font-size: 18px;
  color: #007bff;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

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
`;

function JobDescription() {
  const { jobId } = useParams();
  const [applied, setApplied] = useState(false);

  // Sample job data for demonstration purposes.
  const job = {
    id: jobId,
    title: "Software Engineer",
    company: "Tech Innovators",
    description:
      "This role involves developing and maintaining software applications. Candidates should have experience in JavaScript, React, and Node.js.",
  };

  const handleApply = () => {
    setApplied(true);
    alert("You have applied for this internship.");
  };

  return (
    <Container>
      <Title>{job.title}</Title>
      <Company>{job.company}</Company>
      <Description>{job.description}</Description>
      {!applied ? (
        <ApplyButton onClick={handleApply}>Apply Now</ApplyButton>
      ) : (
        <p style={{ color: "green", fontWeight: "bold" }}>You have applied for this internship.</p>
      )}
    </Container>
  );
}

export default JobDescription;
