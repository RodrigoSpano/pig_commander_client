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
      <div className="break-all flex flex-col gap-4">
        <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl xl:text-5xl">
          Bienvenido de nuevo,
        </h1>
        <div className="font-semibold text-xl md:text-2xl lg:text-3xl xl:text-5xl">
          {user.name.replace(/^\w/, (c) => c.toUpperCase())}
        </div>
        <div className="text-gray-600 dark:text-white hidden md:block mt-2 xl:text-xl lg:text-base md:text-sm sm:text-xs">
          Pig Commander es la aplicación financiera más segura.
        </div>
      </div>
    </motion.div>
  );
};

export default WelcomeCard;