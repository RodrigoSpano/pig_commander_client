'use client'
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BiSolidDashboard } from 'react-icons/bi';

const Dashboard = () => {
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.1, delay: 0.1 } },
  };

  const hoverVariants = {
    hover: { scale: 1.05 },
  };

  return (
    <Link href='/home/dashboard'>
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        className='hover:bg-pink-100 py-4 pl-3 rounded-sm my-1'
      >
        <motion.div
          variants={hoverVariants}
          className='flex items-center justify-start text-boldGray font-semibold cursor-pointer hover:text-boldPink'
        >
          <motion.div whileHover={{ rotate: 5 }} className='text-2xl'>
            <BiSolidDashboard />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className='ml-2'>
            Dashboard
          </motion.div>
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default Dashboard;
