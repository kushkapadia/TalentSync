import React from 'react'
import Faq from '../components/Faq'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import HeroSection from '../components/HeroSection'
import Features from '../components/Features'
import styled from 'styled-components'

const Container = styled.div`
    background: linear-gradient(to bottom right, #f3e8ff, #dbeafe);
`
function Landing() {
  return (
    <Container>
      <HeroSection />
      <Features />
      <Faq />
      <Contact />
      <Footer />
    </Container>
  )
}

export default Landing