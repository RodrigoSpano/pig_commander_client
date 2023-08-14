'use client'
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MdOutlineReviews } from "react-icons/md";

const Reviews = () => {
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.4 } },
  };

  const hoverVariants = {
    hover: { scale: 1.05 },
  };

  return (
    <Link href='/home/reviews'>
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
            <MdOutlineReviews />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className='ml-2'>
            Reviews
          </motion.div>
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default Reviews;
