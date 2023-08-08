'use client'
import React from 'react';
import { motion } from 'framer-motion';

const WelcomeMessage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className='text-center my-8 md:my-16 select-none'
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className='font-bold text-4xl md:text-5xl mb-2'
      >
        Welcome to Pig Commander!
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <h3 className='text-sm md:text-lg text-neutral-600'>
          Pig Commander is the most secure finance app.
        </h3>
      </motion.div>
    </motion.div>
  );
};

export default WelcomeMessage;
