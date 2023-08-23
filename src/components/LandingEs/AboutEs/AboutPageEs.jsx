import React from 'react'
import FeaturesAboutSectionEs from './/FeaturesAboutSectionEs'
import HelpAndFAQSectionEs from './HelpAndFAQSectionEs'
import NavBarEs from '../NavBarEs'
import WelcomeMessageEs from './WelcomeMessageEs'
import AboutUsSectionEs from './AboutUsSectionEs'
import MainFeaturesEs from './MainFeaturesEs'
import FooterEs from '../FooterEs'

const AboutPageEs = () => {
    return (
        <>
            <NavBarEs />
            <div className='flex flex-col items-center justify-center min-h-screen'>
                <WelcomeMessageEs />
                <AboutUsSectionEs />
                <hr />
                <MainFeaturesEs />
                <FeaturesAboutSectionEs />
                <HelpAndFAQSectionEs /> 
            </div>
            <FooterEs />
        </>
    )
}

export default AboutPageEs