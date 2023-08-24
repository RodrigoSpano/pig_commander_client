import React from 'react';
import Image from 'next/image';
import SavingsandInvestment from '../../../utils/Images/Features Images/SavingsandInvestment.png';
import { motion } from 'framer-motion';

const SavingsAndInvestment = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='flex flex-col justify-center'
      >
        <motion.h2
          whileHover={{ scale: 1.05, color: '#ff4081' }}
          className='text-regularPink text-3xl font-bold mb-4'
        >
          Savings and Investment
        </motion.h2>
        <motion.p
          // whileHover={{ color: '#ff4081' }}
          className='text-gray-700 dark:text-lightGrey'
        >
          Set savings goals and track your progress over time. With Pig Commander, you'll be able to visualize your investments and assess how they're performing to make informed decisions about your financial future.
        </motion.p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='flex items-center justify-center'
      >
        <Image src={SavingsandInvestment} alt='Savings and Investment' width={400} height={400} />
      </motion.div>
    </>
  );
};

export default SavingsAndInvestment;
