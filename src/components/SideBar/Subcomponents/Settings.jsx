'use client'
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { IoMdSettings } from "react-icons/io";

const Settings = () => {
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.6 } },
  };

  const hoverVariants = {
    hover: { scale: 1.05 },
  };

  return (
    <Link href='/home/settings'>
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        className='hover:bg-neutral-100 py-4 pl-3 rounded-sm my-1'
      >
        <motion.div
          variants={hoverVariants}
          className='flex items-center justify-start text-boldGray font-semibold cursor-pointer hover:text-neutral-700'
        >
          <motion.div whileHover={{ rotate: 5 }} className='text-2xl'>
            <IoMdSettings />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className='ml-2'>
            Settings
          </motion.div>
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default Settings;
