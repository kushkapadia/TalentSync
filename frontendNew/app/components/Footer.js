import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #1c1c2b;
  color: #fff;
  padding: 2rem;
`;

const FooterWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const FooterColumn = styled.div`
  flex: 1;
  min-width: 150px;
  margin: 1rem;

  h4 {
    font-size: 1rem;
    margin-bottom: 1rem;
    color: #ccc;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 0.5rem;
    }

    a {
      text-decoration: none;
      color: #fff;
      font-size: 0.9rem;

      &:hover {
        color: #00d1b2; /* Bright color for hover effect */
      }
    }
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #fff;
  span {
    display: block;
    font-size: 0.9rem;
    color: #ccc;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        {/* Logo Section */}
        <FooterColumn>
          <Logo>
            TalentSync
            <span>© 2024. All rights reserved.</span>
          </Logo>
        </FooterColumn>

        {/* Navigation Links */}
        <FooterColumn>
          <h4>Navigation</h4>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Internships</a>
            </li>
            <li>
              <a href="#">Applied Internships</a>
            </li>
            <li>
              <a href="#">Completed Internships</a>
            </li>
          </ul>
        </FooterColumn>

        {/* Contact Info */}
        <FooterColumn>
          <h4>Contact</h4>
          <ul>
            <li>
              <a href="mailto:info@stackfindover.com">
                📧 info@djsce.in
              </a>
            </li>
            <li>
              <a href="#">🐦 @djsce</a>
            </li>
            <li>
              <a href="#">🔗 LinkedIn</a>
            </li>
          </ul>
        </FooterColumn>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
