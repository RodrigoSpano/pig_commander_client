import React from 'react'
import NavBar from './NavBar';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import AdventagesSection from './AdventagesSection';
import TestimonialsSection from './TestimonialsSection';
import FaqSection from './FaqSection';
import Footer from './Footer';

const LandingPageComponent = () => {
  return (
    <>
      <NavBar/>
      <HeroSection/>
      <FeaturesSection/>
      <AdventagesSection/>
      <TestimonialsSection/>
      <FaqSection/>
      <Footer/>
    </>
  )
}

export default LandingPageComponent;