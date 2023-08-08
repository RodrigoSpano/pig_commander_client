'use client'
import React from 'react';
import Image from 'next/image';
import Faq from '../../../utils/Images/Features Images/Faq.png';
import News from '../../../utils/Images/Features Images/News.png';
import MissionImage from '../../../utils/Images/Features Images/Mission.png';
import { motion } from 'framer-motion';

const imageHoverVariants = {
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};


const HelpAndFAQSection = () => {
  return (
    <div className='px-4 md:px-8 py-8 md:py-16 bg-neutral-100 rounded-t-md'>
      <div className='container mx-auto'>
        <motion.div className='grid md:grid-cols-2 gap-8 items-center' initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className='text-center md:text-left'>
            <h1 className='text-5xl font-bold mb-4'>Help and FAQ Section</h1>
            <p className='text-gray-700 text-base'>
              If you have any questions or need assistance, our Help and FAQ section is here to help. Find answers to the most common questions and learn how to get the most out of all of Pig Commander's features.
            </p>
          </div>
          <div className='flex justify-center'>
            <motion.div
              variants={imageHoverVariants}
              whileHover='hover'
              className='mt-4 md:mt-0 rounded-md'
            >
              <Image src={Faq} alt='Example' className='mt-8 rounded-md' width={400} height={400} />
            </motion.div>

          </div>
        </motion.div>

        <motion.div className='grid md:grid-cols-2 gap-8 items-center mt-16' initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <div className='text-center md:text-left'>
            <h1 className='text-5xl font-bold mb-4'>Financial News</h1>
            <p className='text-gray-700 text-base'>
              Stay informed about the latest news from the financial world with our news section. We keep this section updated so that you are aware of relevant events that may impact your financial decisions.
            </p>
          </div>
          <div className='flex justify-center'>
            <motion.div
              variants={imageHoverVariants}
              whileHover='hover'
              className='mt-4 md:mt-0 rounded-md'
            >
              <Image src={News} alt='Example' className='mt-8 rounded-md' width={400} height={400} />
            </motion.div>

          </div>
        </motion.div>

        <div className='grid md:grid-cols-2 gap-8 items-center mt-16'>
          <div className='text-center md:text-left'>
            <h1 className='text-5xl font-bold mb-4'>Our Mission</h1>
            <p className='text-gray-700 text-base'>
              At Pig Commander, our mission is to provide you with a powerful and user-friendly tool to take control of your finances and get ever closer to your financial goals. Join our community and start making smart financial decisions today!
            </p>
          </div>
          <div className='flex justify-center'>
            <motion.div
              variants={imageHoverVariants}
              whileHover='hover'
              className='mt-4 md:mt-0 rounded-md'
            >
              <Image src={MissionImage} alt='Example' className='mt-8 rounded-md' width={400} height={400} />
            </motion.div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default HelpAndFAQSection;
