"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Mockup1 from '../../utils/Images/Mockups/Mockup1.png';
import { HiArrowUpRight } from "react-icons/hi2";
import { HiFire } from 'react-icons/hi';
import { motion } from 'framer-motion';

const FeaturesSection = () => {
  return (
    <div className='pb-16 flex flex-col md:flex-row justify-around items-center select-none'>
      {/* MOCKUP */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className='flex items-center justify-center md:justify-start'
      >
        <Image src={Mockup1} width={600} height={600} alt='Logo' />
      </motion.div>

      {/* TEXTS */}
      <div className='flex flex-col justify-center text-center md:text-left md:items-start max-w-md md:pl-8'>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className='text-boldPink font-semibold text-lg'
        >
          FEATURES
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className='font-bold text-3xl md:text-5xl mb-2 md:mb-4'
        >
          Pig Commander <span className='text-boldPink'>Pro</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className='pt-4'
        >
          <span className='flex items-center'>
            <HiFire className='text-boldPink text-2xl' />
            <motion.h3
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className='font-semibold text-lg ml-2'
            >
              Title
            </motion.h3>
          </span>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className='text-gray-500 text-sm md:text-base mt-1 dark:text-white'
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className='pt-4'
        >
          <span className='flex items-center'>
            <HiFire className='text-boldPink text-2xl' />
            <motion.h3
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className='font-semibold text-lg ml-2 dark:text-white'
            >
              Title
            </motion.h3>
          </span>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className='text-gray-500 text-sm md:text-base mt-1 dark:text-white'
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className='pt-4'
        >
          <span className='flex items-center'>
            <HiFire className='text-boldPink text-2xl' />
            <motion.h3
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className='font-semibold text-lg ml-2'
            >
              Title
            </motion.h3>
          </span>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className='text-gray-500 text-sm md:text-base mt-1 dark:text-white'
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className='flex justify-center my-2'
          >
          </motion.div>
            <Link href="/features">
              <motion.h4
                whileHover={{ color: '#ff4a6e', scale: 1.05 }}
                className='flex items-center text-lg text-center md:text-left text-boldPink hover:text-regularPink'
              >
                See more Features
                <span className='ml-2'>
                  <HiArrowUpRight />
                </span>
              </motion.h4>
            </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturesSection;
