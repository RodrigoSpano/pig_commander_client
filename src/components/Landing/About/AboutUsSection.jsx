"use client"
import React from 'react';
import { motion } from 'framer-motion';

const AboutUsSection = () => {
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
      className='flex flex-col md:flex-row items-center md:items-start justify-center space-y-8 md:space-y-0 md:space-x-8 select-none pb-12'
    >
      <motion.div
        variants={textVariants}
        className='max-w-6xl text-center md:text-center'
      >
        <motion.h1
          variants={textVariants}
          className='text-4xl font-bold mb-4 text-boldPink'
        >
          About Pig Commander
        </motion.h1>

        <motion.div variants={textVariants} className='text-gray-700 space-y-4'>
          <p>
            Simplify the management of your financial resources with Pig Commander, an innovative financial application.
          </p>

          <p>
            Record your expenses and income efficiently, and monitor savings and investments with ease.
          </p>

          <p>Pig Commander makes smart financial decisions easier than ever.</p>
        </motion.div>

      </motion.div>
    </motion.div>
  );
};

export default AboutUsSection;
