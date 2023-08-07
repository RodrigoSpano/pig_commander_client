"use client"
import React from 'react';
import Image from 'next/image';
import MockUp from '../../utils/Images/iPhone_14_Blue_PDP_Image_Position-1A_LAES.png';
import { HiFire } from 'react-icons/hi';
import { motion } from 'framer-motion';

const AdventagesSection = () => {
  return (
    <div className='py-16 flex flex-col-reverse md:flex-row justify-around select-none'>

      {/* TEXTS */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className='flex flex-col justify-center md:max-w-md md:pl-8'
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className='text-boldPink font-semibold text-lg'
        >
          ADVANTAGES
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className='font-bold text-3xl md:text-5xl mb-4 md:mb-6'
        >
          Why Choose Pig
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className='font-bold text-3xl md:text-5xl mb-4 md:mb-6'
        >
          Commander?
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className='pt-2 md:pt-4'
        >
          <span className='flex items-center'>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <HiFire className='text-boldPink text-2xl mr-2' />
            </motion.div>
            <motion.h3
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className='font-semibold text-base md:text-lg ml-2'
            >
              It's easy to use:
            </motion.h3>
          </span>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className='text-gray-500 text-sm md:text-base mt-1'
          >
            The app should be easy to use and navigate, even for people unfamiliar with personal finance.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className='pt-2 md:pt-4'
        >
          <span className='flex items-center'>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <HiFire className='text-boldPink text-2xl mr-2' />
            </motion.div>
            <motion.h3
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className='font-semibold text-base md:text-lg ml-2'
            >
              It is customizable:
            </motion.h3>
          </span>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className='text-gray-500 text-sm md:text-base mt-1'
          >
            The application must allow users to personalize their experience to suit their individual needs and goals.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.6 }}
          className='pt-2 md:pt-4'
        >
          <span className='flex items-center'>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <HiFire className='text-boldPink text-2xl mr-2' />
            </motion.div>
            <motion.h3
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className='font-semibold text-base md:text-lg ml-2'
            >
              It is educational:
            </motion.h3>
          </span>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.6, duration: 0.6 }}
            className='text-gray-500 text-sm md:text-base mt-1'
          >
            The app should provide users with personal finance information so they can learn and improve their financial skills.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* MOCKUP */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className='flex items-center justify-center md:justify-end'
      >
        <Image src={MockUp} width={260} height={505} alt='Logo' />
      </motion.div>
    </div>
  );
};

export default AdventagesSection;
