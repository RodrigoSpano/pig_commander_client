"use client"
import React from 'react';
import NavBar from '../NavBar';
import BasicCard from './BasicCard';
import ProfessionalCard from './ProfessionalCard';
import Footer from '../Footer';
import { motion } from 'framer-motion';

const Pricing = () => {
  return (
    <>
      <NavBar />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className='flex flex-col items-center justify-center min-h-screen pt-4'
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className='text-center mb-16 select-none'
        >
          <h1 className='font-bold text-3xl mb-4'>Convenient Pricing</h1>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className='text-lg'>Choose the right plan for you and get started controlling your capital.</h3>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className='flex flex-col items-center md:flex-row space-y-8 md:space-y-0 md:space-x-8'
        >
          <BasicCard />
          <ProfessionalCard />
        </motion.div>
      </motion.div>
      <Footer/>
    </>
  );
};

export default Pricing;
