import React from 'react';
import Image from 'next/image';
import RecordofExpensesandIncome from '../../../utils/Images/Features Images/RecordofExpensesandIncome.png';
import { motion } from 'framer-motion';

const RecordOfExpensesAndIncome = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='flex items-center justify-center'
      >
        <Image src={RecordofExpensesandIncome} alt='Record Expenses' width={400} height={400} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='flex flex-col justify-center'
      >
        <motion.h2
          whileHover={{ scale: 1.05, color: '#ff4081' }}
          className='text-regularPink text-3xl font-bold mb-4'
        >
          Record of Expenses and Income
        </motion.h2>
        <motion.p
          whileHover={{ color: '#ff4081' }}
          className='text-gray-600'
        >
          With Pig Commander, keeping detailed track of your financial transactions has never been easier. Record your expenses and income quickly and categorize them to get a clear view of your financial patterns.
        </motion.p>
      </motion.div>
    </>
  );
};

export default RecordOfExpensesAndIncome;
