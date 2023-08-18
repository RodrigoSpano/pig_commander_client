import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiArrowSmLeft } from 'react-icons/hi';

const BackButton = () => {
  return (
    <Link href="/">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-gradient-to-r from-pink-400 to-pink-600 text-white px-4 py-2 m-2 rounded-md shadow-md"
        type='button'
      >
        <HiArrowSmLeft className="w-6 h-6" />
      </motion.button>
    </Link>
  );
};

export default BackButton;
