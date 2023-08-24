"use client"
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CgProfile } from "react-icons/cg";
import { useSelector } from 'react-redux';

const Profile = () => {
  const selectedLanguage = useSelector((state) => state.language);

  const linkVariants = {
    initial: { x: -20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    hover: { scale: 1.1, },
  };

  return (
    <div className='hover:bg-pink-50 dark:hover:bg-regularPink py-4 px-6 rounded-sm'>
      <Link href='/home/profile'>
        <motion.div
          className=' flex items-center justify-start font-semibold cursor-pointer dark:text-white text-boldGray hover:text-regularPink'
          variants={linkVariants}
          initial='initial'
          animate='animate'
          whileHover='hover'
        >
          <motion.span className='mr-2'>
            <CgProfile className='text-2xl xl:text-3xl' />
          </motion.span>
          <motion.p className='font-semibold cursor-pointer text-base xl:text-lg'>
          {selectedLanguage === "en" ? "Profile" : "Perfil"}
          </motion.p>
        </motion.div>
      </Link>
    </div>
  );
};

export default Profile;
