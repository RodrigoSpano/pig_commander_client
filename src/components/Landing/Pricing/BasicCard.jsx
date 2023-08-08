import React from 'react';
import Link from 'next/link';
import { HiOutlineCheck } from 'react-icons/hi';
import { motion } from 'framer-motion';

const BasicCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className='rounded-md p-6 border-solid border-black w-[90%] md:w-[350px] h-[480px] flex flex-col justify-between shadow-2xl select-none'
    >
      <div>
        <h3 className='pb-4 text-black text-2xl font-semibold'>Basic</h3>

        <div className='flex justify-start items-end pb-2'>
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className='text-black text-4xl font-bold'
          >
            $14.99
          </motion.h1>
          <motion.h4
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className='text-black font-semibold'
          >
            / 3 month
          </motion.h4>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className='pb-4 leading-[1.5]'
        >
          <p className='text-black'>Ideal for getting started with our tools.</p>
        </motion.div>

        <hr className='pb-4' />

        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className='pb-4'
        >
          <motion.li
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className='flex items-center pb-2 text-black'
          >
            <HiOutlineCheck className='mr-3 text-3xl text-black' />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className='flex items-center pb-2 text-black'
          >
            <HiOutlineCheck className='mr-3 text-3xl text-black' />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className='flex items-center pb-2 text-black'
          >
            <HiOutlineCheck className='mr-3 text-3xl text-black' />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </motion.li>
        </motion.ul>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className='flex items-center justify-center'
      >
        <Link href='/login'>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className='bg-black text-white py-3 px-16 rounded-sm hover:bg-zinc-900 focus:outline-none'
          >
            Get started
          </motion.button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default BasicCard;
