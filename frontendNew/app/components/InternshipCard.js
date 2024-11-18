import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.5s ease forwards;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
  }

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const CardContent = styled.div`
  padding: 1.75rem;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const LogoWrapper = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 0.75rem;
  background-color: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DetailsWrapper = styled.div`
  margin-left: 1.25rem;
`;

const Position = styled.h3`
  font-weight: 700;
  font-size: 1.375rem;
  color: #111827;
  letter-spacing: -0.02em;
  line-height: 1.3;
`;

const Company = styled.p`
  color: #4b5563;
  margin-top: 0.375rem;
  font-size: 1.125rem;
  font-weight: 500;
`;

const InfoGroup = styled.div`
  margin-top: 1.5rem;
  display: grid;
  gap: 0.875rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  color: #4b5563;
  font-size: 1rem;
  font-weight: 500;

  svg {
    width: 1.375rem;
    height: 1.375rem;
    margin-right: 0.75rem;
    color: #6366f1;
  }

  span {
    letter-spacing: -0.01em;
  }
`;

const Footer = styled.div`
  margin-top: 1.5rem;
  padding-top: 1.25rem;
  border-top: 1px solid #e5e7eb;
`;

const FooterText = styled.p`
  font-size: 0.9375rem;
  color: #6b7280;
  font-weight: 500;
`;

const InternshipCard = ({ position, company, logo, stipend, location, duration, dateApplied }) => {
  // Format date to be more readable
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Card>
      <CardContent>
        <FlexContainer>
          <LogoWrapper>
            <Logo src={logo || "/api/placeholder/48/48"} alt={`${company} logo`} />
          </LogoWrapper>
          <DetailsWrapper>
            <Position>{position}</Position>
            <Company>{company}</Company>
          </DetailsWrapper>
        </FlexContainer>

        <InfoGroup>
          <InfoItem>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{duration}</span>
          </InfoItem>

          <InfoItem>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>{location}</span>
          </InfoItem>

          <InfoItem>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>₹{stipend}/month</span>
          </InfoItem>
        </InfoGroup>

        <Footer>
          <FooterText>Applied on: {formatDate(dateApplied)}</FooterText>
        </Footer>
      </CardContent>
    </Card>
  );
};

export default InternshipCard;