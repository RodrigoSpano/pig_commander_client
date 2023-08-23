"use client"
import React from 'react';
import { motion } from 'framer-motion';

const MainFeaturesEs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, delay: 0.2 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className='flex flex-col md:flex-row items-start justify-start space-y-8 md:space-y-0 md:space-x-8 select-none py-12'
    >
      <motion.div
        variants={textVariants}
        className='max-w-md text-left'
      >
        <motion.h1
          variants={textVariants}
          className='text-5xl font-bold mb-4'
        >
          Funcionalidades Principales
        </motion.h1>
      </motion.div>
    </motion.div>
  );
};

export default MainFeaturesEs;
