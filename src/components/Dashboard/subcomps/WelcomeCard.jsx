import React from 'react';
import { motion } from 'framer-motion';

const WelcomeCard = ({ user }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className='box-border my-4 md:mt-0'
      initial='hidden'
      animate='visible'
      variants={cardVariants}
      transition={{ duration: 0.5 }}
    >
      <div className="break-all flex flex-col">
        <h1 className="font-semibold text-4xl md:text-3xl lg:text-3xl xl:text-7xl">
          Welcome Back,
        </h1>
        <div className="font-semibold text-4xl md:text-4xl lg:text-4xl xl:text-7xl">
          {user.name.replace(/^\w/, (c) => c.toUpperCase())}
        </div>
        <div className="text-gray-600 hidden md:block mt-2 xl:text-xl lg:text-base md:text-sm sm:text-xs">
          Pig Commander is the most secure finance app.
        </div>
      </div>
    </motion.div>
  );
};

export default WelcomeCard;
