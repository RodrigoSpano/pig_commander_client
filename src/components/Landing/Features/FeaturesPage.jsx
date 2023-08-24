"use client"
import React from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';
import RecordOfExpensesAndIncome from './RecordOfExpensesAndIncome';
import CustomDashboard from './CustomDashboard';
import SavingsandInvestment from './SavingsAndInvestment';
import Authomatization from './Authomatization';
import LimitPerMonth from './LimitPerMonth';
import ProfessionalSubscription from './ProfessionalSubscription';
import CustomThemes from './CustomThemes';
import Budget from './Budget';
import SavingGoals from './SavingGoals';
import HelpSection from './HelpSection';
import FinalcialNews from './FinalcialNews';
import { motion } from 'framer-motion';


const FeaturesPage = () => {
    return (
        <div className='select-none'>
            <NavBar />
            <div className='py-12'>
                <div className='container mx-auto'>

                    {/* TITULO Y SUBTITULO */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className='mb-8 text-center'
                    >
                        <h1 className='text-5xl font-bold'>Features</h1>
                        <p className='text-gray-700 dark:text-lightGrey text-base py-3'>
                            Discover all the features that make Pig Commander the most complete and versatile financial application on the market.
                        </p>
                        <p className='text-gray-700 dark:text-lightGrey mb-16 text-base'>
                            We have carefully designed each feature so that you can have full control over your financial resources and achieve your financial goals effectively. Here are the highlights:
                        </p>
                    </motion.div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        <RecordOfExpensesAndIncome />
                        <SavingsandInvestment />
                        <CustomDashboard />
                        <Authomatization />
                        <LimitPerMonth />
                        <ProfessionalSubscription />
                        <CustomThemes />
                        <Budget />
                        <SavingGoals />
                        <HelpSection />
                        <FinalcialNews />
                    </div>

                    {/* PIE DE PAGINA..*/}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className='flex-col items-center justify-center my-16'
                    >
                        <p className='text-gray-700 text-base text-center dark:text-lightGrey'>
                            At Pig Commander, we pride ourselves on offering you a wide range of features that will allow you to take control of your finances and achieve your financial goals.
                        </p>
                        <p className='text-gray-700 text-base text-center dark:text-lightGrey'>
                            Explore each of these features and start mastering your finances today!
                        </p>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default FeaturesPage;
