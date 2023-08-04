import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'
import WelcomeMessage from './WelcomeMessage'
import AboutUsSection from './AboutUsSection'
import MainFeatures from './MainFeatures'
import FeaturesAboutSection from '../About/FeaturesAboutSection'
import HelpAndFAQSection from './HelpAndFAQSection'

const AboutPage = () => {
    return (
        <>
            <NavBar />
            <div className='flex flex-col items-center justify-center min-h-screen'>
                <WelcomeMessage />
                <AboutUsSection />
                <MainFeatures />
                <FeaturesAboutSection />
                <HelpAndFAQSection /> 
            </div>
            <Footer />
        </>
    )
}

export default AboutPage