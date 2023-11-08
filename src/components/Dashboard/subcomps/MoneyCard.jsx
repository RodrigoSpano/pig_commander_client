import React, { useEffect, useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import useVisibility from '@/customHooks/useVisibility';
import { getExpensesTotal, getIncomesTotal } from '@/utils/helper/monthTransactions';
import { motion } from 'framer-motion';

const MoneyCard = ({ title, type, array }) => {
  const [value, setValue] = useState(0);
  const { showPassword, togglePasswordVisibility } = useVisibility();

  useEffect(() => {
    let totalValue = 0;

    if (type === 'expense') {
      totalValue = getExpensesTotal(array);
    } else if (type === 'income') {
      totalValue = getIncomesTotal(array);
    } else if (type === 'saving') {
      if(array){
        array?.forEach(el => totalValue += el.amount)
      }
    }

    setValue(totalValue);
  }, [array, type]);

  const eyeVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0.5 },
  };

  return (
    <motion.div
      className="bg-white dark:bg-mediumGrayDarkMode dark:text-white rounded-2xl shadow-md p-4 mt-0 mr-0 mb-2 box-border w-full h-full hover:shadow-pink-200 hover:shadow-lg transition-shadow md:mt-2 md:mr-2 md:mb-2"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="flex items-center justify-between lg:mb-8 hover:text-boldPink cursor-pointer"
        onClick={togglePasswordVisibility}
      >
        <p className="font-semibold text-[#2B2B2B] dark:text-mediumPinkDark text-lg xl:text-2xl lg:text-xl md:text-lg sm:text-base">{title}</p>
        <motion.span
          className="font-semibold text-[#454545] dark:text-white text-base md:text-2xl lg:text-xl xl:text-2xl"
          variants={eyeVariants}
          initial="visible"
          animate={showPassword ? 'visible' : 'hidden'}
          whileHover={{ scale: 1.1 }}
        >
          {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
        </motion.span>
      </motion.div>

      <div className="font-medium text-xl xl:text-4xl lg:text-3xl md:text-lg sm:text-base">
        <span>
          {showPassword ? `$${value?.toLocaleString()}` : '$*****'}
        </span>
      </div>
    </motion.div>
  );
};

export default MoneyCard;