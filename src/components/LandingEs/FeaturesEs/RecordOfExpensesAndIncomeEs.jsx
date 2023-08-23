import React from 'react';
import Image from 'next/image';
import RecordofExpensesandIncome from '../../../utils/Images/Features Images/RecordofExpensesandIncome.png';
import { motion } from 'framer-motion';

const RecordOfExpensesAndIncomeEs = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='flex items-center justify-center'
      >
        <Image src={RecordofExpensesandIncome} alt='Record Expenses' width={400} height={400} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='flex flex-col justify-center'
      >
        <motion.h2
          whileHover={{ scale: 1.05, color: '#ff4081' }}
          className='text-regularPink text-3xl font-bold mb-4'
        >
          Record de Gastos y Ingresos
        </motion.h2>
        <motion.p
          whileHover={{ color: '#ff4081' }}
          className='text-gray-600'
        >
          Con Pig Commander, llevar un seguimiento detallado de tus transacciones financieras nunca ha sido tan fácil. Registra tus gastos e ingresos rápidamente y categorízalos para obtener una vista clara de tus patrones financieros.
        </motion.p>
      </motion.div>
    </>
  );
};

export default RecordOfExpensesAndIncomeEs;
