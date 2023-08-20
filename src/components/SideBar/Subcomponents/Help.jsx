'use client'
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BiSolidHelpCircle } from "react-icons/bi";

const Help = () => {
  const linkVariants = {
    initial: { x: -20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    hover: { scale: 1.1, },
  };

  return (
    <div className='hover:bg-pink-50 py-4 px-6 rounded-sm'>
      <Link href='/home/help'>
        <motion.div
          className=' flex items-center justify-start font-semibold cursor-pointer dark:text-white dark:hover:text-regularPink text-boldGray hover:text-regularPink'
          variants={linkVariants}
          initial='initial'
          animate='animate'
          whileHover='hover'
        >
          <motion.span className='mr-2'>
            <BiSolidHelpCircle className='text-2xl xl:text-3xl' />
          </motion.span>
          <motion.p className='font-semibold cursor-pointer text-base xl:text-lg'>
            Help
          </motion.p>
        </motion.div>
      </Link>
    </div>
  );
};

export default Help;
