import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 3rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  position: relative;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`;

const IconWrapper = styled.div`
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

const BackgroundCircle = styled.div`
  position: absolute;
  top: -32px;
  right: -32px;
  width: 96px;
  height: 96px;
  border-radius: 50%;
  opacity: 0.2;
`;

const FeatureTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: #1a1a1a;
`;

const FeatureDescription = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: #666;
  margin: 0;
`;

const InternshipsHub = styled(FeatureCard)`
  ${IconWrapper}, ${BackgroundCircle} {
    background-color: #f3e8ff;
  }

  svg {
    color: #9333ea;
  }
`;

const JobFit = styled(FeatureCard)`
  ${IconWrapper}, ${BackgroundCircle} {
    background-color: #fee2e2;
  }

  svg {
    color: #e11d48;
  }
`;

const GapAnalysis = styled(FeatureCard)`
  ${IconWrapper}, ${BackgroundCircle} {
    background-color: #dcfce7;
  }

  svg {
    color: #059669;
  }
`;

const Features = () => {
  return (
    <Container>
      <FeaturesGrid>
        {/* Internships Hub Card */}
        <InternshipsHub>
          <BackgroundCircle />
          <IconWrapper>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="8" y1="6" x2="21" y2="6"></line>
              <line x1="8" y1="12" x2="21" y2="12"></line>
              <line x1="8" y1="18" x2="21" y2="18"></line>
              <line x1="3" y1="6" x2="3.01" y2="6"></line>
              <line x1="3" y1="12" x2="3.01" y2="12"></line>
              <line x1="3" y1="18" x2="3.01" y2="18"></line>
            </svg>
          </IconWrapper>
          <FeatureTitle>Campus Internships Hub</FeatureTitle>
          <FeatureDescription>
            Access all on-campus internship opportunities in one centralized platform. Browse, filter, and apply seamlessly to positions that match your interests.
          </FeatureDescription>
        </InternshipsHub>

        {/* Job Fit Card */}
        <JobFit>
          <BackgroundCircle />
          <IconWrapper>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
              <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
            </svg>
          </IconWrapper>
          <FeatureTitle>Job Fit Score</FeatureTitle>
          <FeatureDescription>
            Get personalized job fit scores based on your skills, interests, and academic background to find internships that align perfectly with your profile.
          </FeatureDescription>
        </JobFit>

        {/* Gap Analysis Card */}
        <GapAnalysis>
          <BackgroundCircle />
          <IconWrapper>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 3 21 3 21 9"></polyline>
              <polyline points="9 21 3 21 3 15"></polyline>
              <line x1="21" y1="3" x2="14" y2="10"></line>
              <line x1="3" y1="21" x2="10" y2="14"></line>
            </svg>
          </IconWrapper>
          <FeatureTitle>Gap Analysis</FeatureTitle>
          <FeatureDescription>
            Identify skill gaps between your current profile and desired internships. Receive recommendations for improvement and targeted learning resources.
          </FeatureDescription>
        </GapAnalysis>
      </FeaturesGrid>
    </Container>
  );
};

export default Features;
