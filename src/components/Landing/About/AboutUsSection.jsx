'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Logo from '../../../utils/Images/image.png';

const AboutUsSection = () => {
  return (
    <div className='flex flex-col md:flex-row items-center md:items-start justify-center space-y-8 md:space-y-0 md:space-x-8 select-none pb-12'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='text-center md:text-left max-w-md'
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className='text-3xl font-bold mb-4'
        >
          About Pig Commander
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className='text-gray-700'
        >
          <p className='mb-2'>
            Pig Commander is an innovative financial application designed to simplify the management of your financial
            resources.
          </p>

          <p className='mb-2'>
            With our platform, you will be able to record your expenses and income in a simple and efficient way, as well
            as carry out detailed monitoring of your savings and investments.
          </p>

          <p className='mb-2'>With Pig Commander, making smart financial decisions will be easier than ever.</p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='flex items-center justify-center md:justify-start rounded-md overflow-hidden max-w-xs md:max-w-none'
      >
        <Image src={Logo} width={200} height={200} alt='Logo' />
      </motion.div>
    </div>
  );
};

export default AboutUsSection;
