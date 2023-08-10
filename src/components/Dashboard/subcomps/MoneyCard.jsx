import useVisibility from '@/customHooks/useVisibility';
import { getExpensesTotal, getIncomesTotal } from '@/utils/helper/monthTransactions';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const MoneyCard = ({ title, type, array }) => {
  const [value, setValue] = useState(0);

  const { showPassword, togglePasswordVisibility } = useVisibility();

  useEffect(() => {
    if (type === 'expense') {
      const total = getExpensesTotal(array);
      setValue(total);
    } else if (type === 'income') {
      const total = getIncomesTotal(array);
      setValue(total);
    } else if (type === 'saving') {
      let total = 0
      array?.map(el => total += el.amount)
      setValue(total);
    }
  }, [array]);

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md flex gap-10 flex-row col-span-3 row-span-2 h-[100px] select-none"
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
    >
      <div className="rounded-tl-2xl rounded-bl-2xl w-3 h-full bg-pink-400"></div>

      <div className="flex flex-col justify-evenly flex-grow">
        <div className="flex justify-between items-center">
          {/* TITLE */}
          <p className="text-gray-500 text-base font-Poppins font-medium">{title}</p>
          {/* EYE */}
          <span
            className="flex items-center cursor-pointer focus:outline-none text-gray-500 text-2xl mr-6"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </span>
        </div>
        <div className="mt-2">
          <span className="text-[#15223C] font-semibold text-2xl">
            {showPassword ? `$${value?.toLocaleString()}` : '$*****'}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default MoneyCard;
