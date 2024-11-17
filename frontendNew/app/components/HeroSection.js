import React from 'react';
import styled from 'styled-components';
import { Briefcase, Palette, TrendingUp, Database, DollarSign } from 'lucide-react';

const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #2A2438 0%, #352F44 100%);
  padding: 4rem 6rem;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0wIDAgQyA1MCAwIDUwIDUwIDEwMCA1MCBMIDEwMCAxMDAgTCAwIDEwMCBaIiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDIpIi8+PC9zdmc+');
    background-size: 100px 100px;
    opacity: 0.1;
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const HeroSec = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  padding-right: 2rem;

  @media (max-width: 768px) {
    padding-right: 0;
    margin-bottom: 2rem;
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  color: #fff;
  margin-bottom: 1rem;
  font-weight: 700;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
`;

const ExploreButton = styled.button`
  background: linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border-radius: 50px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 107, 107, 0.4);
  }
`;

const ImageSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  position: relative;
  padding: 2rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%);
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    opacity: 0.1;
    transform: scale(1.1);
    z-index: 1;
    animation: morphShape 8s linear infinite;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #FF8E8E 0%, #FF6B6B 100%);
    border-radius: 50% 50% 50% 50% / 60% 40% 60% 40%;
    opacity: 0.1;
    transform: scale(1.05);
    z-index: 1;
    animation: morphShape 8s linear infinite reverse;
  }

  @keyframes morphShape {
    0% {
      border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    }
    25% {
      border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%;
    }
    50% {
      border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%;
    }
    75% {
      border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%;
    }
    100% {
      border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    }
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 90%;
  height: 400px;
  overflow: hidden;
  border-radius: 30px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  background: linear-gradient(135deg, rgba(255, 107, 107, 0.1) 0%, rgba(255, 142, 142, 0.1) 100%);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &::before {
    content: '';
    position: absolute;
    top: -10%;
    left: -10%;
    width: 120%;
    height: 120%;
    background: linear-gradient(
      45deg,
      transparent 0%,
      rgba(255, 255, 255, 0.1) 45%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.1) 55%,
      transparent 100%
    );
    animation: shimmer 3s infinite;
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.02);
  transition: transform 0.5s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const CategoriesSection = styled.div`
  margin-top: 4rem;
`;

const CategoriesTitle = styled.h2`
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  font-weight: 600;
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const CategoryCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 1.5rem;
  text-align: center;
  transition: transform 0.3s ease, background 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.15);
  }
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  background: rgba(255, 107, 107, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: #FF6B6B;
`;

const CategoryName = styled.p`
  color: white;
  font-size: 0.9rem;
  margin: 0;
`;

const HeroSection = () => {
    return (
        <PageContainer>
            <ContentWrapper>
                <HeroSec>
                    <LeftSection>
                        <Title>FIND YOUR INTERNSHIP HERE!</Title>
                        <Subtitle>
                            Provides a wide range of internship options in various fields around the world
                        </Subtitle>
                        <ExploreButton>Explore Internships</ExploreButton>
                    </LeftSection>
                    <ImageSection>
                        <ImageWrapper>
                            <StyledImage
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjIu5vCEHhf_V84BhkNnyEPEryNNes0Ww9sQ&s"
                                alt="Business professionals"
                            />
                        </ImageWrapper>
                    </ImageSection>
                </HeroSec>

                <CategoriesSection>
                    <CategoriesTitle>POPULAR CATEGORIES</CategoriesTitle>
                    <CategoryGrid>
                        <CategoryCard>
                            <IconWrapper>
                                <Briefcase size={24} color="#ffffff"/>
                            </IconWrapper>
                            <CategoryName>Marketing & Communication</CategoryName>
                        </CategoryCard>
                        <CategoryCard>
                            <IconWrapper>
                                <Palette size={24} color="#ffffff"/>
                            </IconWrapper>
                            <CategoryName>Web/App Development</CategoryName>
                        </CategoryCard>
                        <CategoryCard>
                            <IconWrapper>
                                <TrendingUp size={24} color="#ffffff"/>
                            </IconWrapper>
                            <CategoryName>AI/ML</CategoryName>
                        </CategoryCard>
                        <CategoryCard>
                            <IconWrapper>
                            <Database size={24}color="#ffffff" />
                            </IconWrapper>
                            <CategoryName>Data Science</CategoryName>
                        </CategoryCard>
                        <CategoryCard>
                            <IconWrapper>
                                <DollarSign size={24} color="#ffffff"/>
                            </IconWrapper>
                            <CategoryName>Finance</CategoryName>
                        </CategoryCard>
                    </CategoryGrid>
                </CategoriesSection>
            </ContentWrapper>
        </PageContainer>
    );
};

export default HeroSection;