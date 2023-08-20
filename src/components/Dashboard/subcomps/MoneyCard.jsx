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
      <div className="bg-white dark:text-white dark:bg-mediumGrayDarkMode rounded-lg shadow-md p-4 m-2 box-border w-full">
        <div className="flex items-center justify-between lg:mb-8">
          <p className="font-semibold text-lg xl:text-2xl lg:text-xl md:text-lg dark:text-mediumPinkDark sm:text-base">{title}</p>
          <motion.span
            className="cursor-pointer font-semibold  text-lg xl:text-2xl lg:text-xl md:text-lg sm:text-base"
            onClick={togglePasswordVisibility}
            variants={eyeVariants}
            initial="visible"
            animate={showPassword ? 'visible' : 'hidden'}
            whileHover={{ scale: 1.1 }}
          >
            {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </motion.span>
        </div>

        <div className="font-medium text-xl xl:text-4xl lg:text-3xl md:text-lg sm:text-base">
          <span>
            {showPassword ? `$${value?.toLocaleString()}` : '$*****'}
          </span>
        </div>
      </div>
  );
};

export default MoneyCard;