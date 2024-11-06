// pages/AdminLanding.js
import React from "react";
import styled, { keyframes } from "styled-components";

// Keyframes for simple fade-in effect
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// Container for the entire page with gradient background and smooth fade-in animation
const PageContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: auto;
  background: linear-gradient(135deg, #6dd5fa, #2980b9);
  color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  animation: ${fadeIn} 0.7s ease-in-out;
  overflow: hidden;
`;

// Header section with enhanced styling
const Header = styled.header`
  text-align: center;
  margin-bottom: 2.5rem;
`;

const HeaderTitle = styled.h1`
  font-size: 3rem;
  color: #ffffff;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const HeaderDescription = styled.p`
  font-size: 1.3rem;
  color: #cce7ff;
  margin-top: 0.5rem;
`;

// Section container with a translucent background and shadow effect
const Section = styled.section`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.8rem;
`;

// Title styling with slight text-shadow and spacing
const SectionTitle = styled.h2`
  font-size: 1.9rem;
  color: #f1f1f1;
  margin-bottom: 1.2rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

// Text styling with enhanced line spacing for readability
const SectionText = styled.p`
  color: #e0e0e0;
  font-size: 1.1rem;
  line-height: 1.7;
`;

// Feature card with hover effect, gradient, and smoother transitions
const FeatureCard = styled.div`
  background: linear-gradient(135deg, #ffffff, #d9e7ff);
  padding: 1.5rem;
  border-radius: 10px;
  margin-top: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  color: #2980b9;
`;

const FeatureText = styled.p`
  font-size: 1rem;
  color: #333;
`;

// FAQ section with soft background color and shadow
const FAQSection = styled(Section)`
  background-color: #f1f7ff;
`;

// FAQ item styling with subtle spacing
const FAQItem = styled.div`
  margin-top: 1.5rem;
`;

const FAQQuestion = styled.h4`
  font-size: 1.3rem;
  color: #007bff;
  margin-bottom: 0.5rem;
  cursor: pointer;
`;

const FAQAnswer = styled.p`
  color: #555;
  font-size: 1rem;
  transition: all 0.3s ease;
`;

// Contact section with vibrant background color
const ContactSection = styled(Section)`
  text-align: center;
  background: linear-gradient(135deg, #e3f2fd, #bbdefb);
`;

const ContactLink = styled.a`
  color: #007bff;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
    color: #0056b3;
  }
`;

// Footer styling with smaller font and light color
const Footer = styled.footer`
  text-align: center;
  padding: 1rem;
  font-size: 0.9rem;
  color: #ddd;
  background: #282c34;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

function AdminLanding() {
  return (
    <PageContainer>
      <Header>
        <HeaderTitle>Welcome Admin</HeaderTitle>
        <HeaderDescription>Manage internships, view student profiles, and support their career development.</HeaderDescription>
      </Header>

      <Section>
        <SectionTitle>About this Admin Portal</SectionTitle>
        <SectionText>
          This portal provides a comprehensive platform for administrators to manage student profiles, post internship opportunities, and bridge the gap between academia and industry.
          It enables you to monitor student progress, oversee internship applications, and help guide students toward professional success.
        </SectionText>
      </Section>

      <Section>
        <FeatureCard>
          <FeatureTitle>What can admins do on this platform?</FeatureTitle>
          <FeatureText>
            Administrators have the ability to upload, update, and manage internship opportunities. They can also view detailed student profiles, making it easier to connect talented individuals with relevant mentors and industry professionals.
          </FeatureText>
        </FeatureCard>

        <FeatureCard>
          <FeatureTitle>Benefits of Using the Portal</FeatureTitle>
          <FeatureText>
            This platform streamlines the process of tracking student achievements, skills, and progress. It also serves as a reliable source of information for faculty to assess students' qualifications for potential projects, internships, or recommendations.
          </FeatureText>
        </FeatureCard>
      </Section>

      <FAQSection>
        <SectionTitle>FAQ</SectionTitle>
        <FAQItem>
          <FAQQuestion>How can I post internships?</FAQQuestion>
          <FAQAnswer>Go to the "Upload Internships" section, fill in the details, and post the opportunity for students to view and apply.</FAQAnswer>
        </FAQItem>
        <FAQItem>
          <FAQQuestion>How can I view a student’s profile?</FAQQuestion>
          <FAQAnswer>Navigate to the "View Profiles" section, where you can search and view detailed profiles of students to assess their skills and accomplishments.</FAQAnswer>
        </FAQItem>
      </FAQSection>

      <ContactSection>
        <SectionTitle>Contact Support</SectionTitle>
        <SectionText>
          If you need assistance or have any inquiries, reach out to our support team at{" "}
          <ContactLink href="mailto:admin.support@djsc.it">admin.support@djsc.it</ContactLink>
        </SectionText>
      </ContactSection>

      <Footer>© 2023 DJSC Information Technology. All rights reserved.</Footer>
    </PageContainer>
  );
}

export default AdminLanding;