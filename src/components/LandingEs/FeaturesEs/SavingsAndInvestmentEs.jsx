import React from 'react';
import Image from 'next/image';
import SavingsandInvestment from '../../../utils/Images/Features Images/SavingsandInvestment.png';
import { motion } from 'framer-motion';

const SavingsAndInvestmentEs = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='flex flex-col justify-center'
      >
        <motion.h2
          whileHover={{ scale: 1.05, color: '#ff4081' }}
          className='text-regularPink text-3xl font-bold mb-4'
        >
          Ahorros e Inversiones
        </motion.h2>
        <motion.p
          // whileHover={{ color: '#ff4081' }}
          className='text-gray-700 dark:text-lightGrey'
        >
          Establece metas de ahorro y sigue tu progreso con el tiempo. Con Pig Commander, podrás visualizar tus inversiones y evaluar cómo están funcionando para tomar decisiones informadas sobre tu futuro financiero.
        </motion.p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='flex items-center justify-center'
      >
        <Image src={SavingsandInvestment} alt='Savings and Investment' width={400} height={400} />
      </motion.div>
    </>
  );
};

export default SavingsAndInvestmentEs;
