"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiArrowUpRight } from "react-icons/hi2";
import ExpensesImage from '../../../utils/Images/Features Images/Expenses.png';
import SavesImage from '../../../utils/Images/Features Images/Saves.png';
import GreatImage from '../../../utils/Images/Features Images/Great.png';
import { motion } from 'framer-motion';

const imageHoverVariants = {
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};


const FeaturesAboutSection = () => {
  return (
    <div className='px-4 md:px-8'>
      <div className='flex flex-col md:flex-row justify-center md:justify-around items-center md:items-start space-y-8 md:space-y-0 md:space-x-8'>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className='flex flex-col justify-start items-center md:items-start max-w-md'
        >
          <h1 className='text-3xl font-bold mb-4 text-center md:text-left text-boldPink'>Expenses and Income</h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className='text-gray-700 text-sm md:text-base md:text-justify mb-4 dark:text-lightGrey'
          >
            With Pig Commander, keeping detailed control of your finances has never been so simple. You will be able to
            record all your expenses and income quickly and categorize them to obtain a clear vision of your financial
            patterns.
          </motion.p>
          <motion.div
            variants={imageHoverVariants}
            whileHover='hover'
            className='mt-4 md:mt-0 rounded-md'
          >
            <Image src={ExpensesImage} alt='Example' width={400} height={400} />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className='flex flex-col justify-start items-center md:items-start max-w-md'
        >
          <h1 className='text-3xl font-bold mb-4 text-center md:text-left text-boldPink'>Savings and Investments</h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className='text-gray-700 text-sm md:text-base md:text-justify mb-4 dark:text-lightGrey'
          >
            Pig Commander is the best app for setting saving goals and tracking your progress over time.
            You can also visualize your investments and evaluate how they are working in real time.
            With Pig Commander, you'll be on your way to financial freedom in no time!
          </motion.p>
          <motion.div
            variants={imageHoverVariants}
            whileHover='hover'
            className='mt-4 md:mt-0 rounded-md'
          >
            <Image src={SavesImage} alt='Example' width={400} height={400} />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className='flex flex-col justify-start items-center md:items-start max-w-md'
        >
          <h1 className='text-3xl font-bold mb-4 text-center md:text-left text-boldPink'>Custom Dashboard</h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className='text-gray-700 text-sm md:text-base md:text-justify mb-4 dark:text-lightGrey'
          >
            Pig Commander's personalized control panel gives you a complete view of your finances,
            including your spending and saving habits. Interactive graphs show you this information
            in a visual and easy-to-understand way, so you can make informed financial decisions.
          </motion.p>
          <motion.div
            variants={imageHoverVariants}
            whileHover='hover'
            className='mt-4 md:mt-0 rounded-md'
          >
            <Image src={GreatImage} alt='Example' width={400} height={400} />
          </motion.div>
        </motion.div>

      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className='flex justify-center my-4'
      >
        <Link href="/features">
          <motion.h4
            whileHover={{ color: '#ff4a6e', scale: 1.05 }}
            className='flex items-center text-lg text-center md:text-left text-regularPink hover:text-boldPink'
          >
            See more Features
            <span className='ml-2'>
              <HiArrowUpRight />
            </span>
          </motion.h4>
        </Link>
      </motion.div>

    </div>
  );
};

export default FeaturesAboutSection;
