'use client'
import useVisibility from '@/customHooks/useVisibility';
import { getExpensesTotal, getIncomesTotal } from '@/utils/helper/monthTransactions';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const BalanceCard = ({ transactions }) => {
  const [total, setTotal] = useState(0);

  const { showPassword, togglePasswordVisibility } = useVisibility();

  const getBalance = () => {
    const expensesTotal = getExpensesTotal(transactions);
    const incomesTotal = getIncomesTotal(transactions);
    if (expensesTotal > 0 && incomesTotal > 0) {
      setTotal(incomesTotal - expensesTotal);
    }
  };

  useEffect(() => {
    getBalance();
  }, [transactions]);

  return (
    <motion.div
      className="flex flex-row bg-white rounded-lg shadow-md col-span-4 gap-10 h-[120px] select-none"
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
    >
      <div className="rounded-tl-2xl rounded-bl-2xl w-3 h-full bg-pink-400"></div>
      <div className="flex flex-col justify-between py-2 w-full">
        <div className="flex justify-between items-center">
          {/* TITLE */}
          <p className="text-gray-500 text-base font-Poppins font-medium">My Balance</p>
          {/* EYE */}
          <span
            className="flex items-center cursor-pointer focus:outline-none text-gray-500 text-2xl mr-7"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </span>
        </div>
        <div className="flex items-center">
          <span className="text-strongPink text-5xl font-Poppins font-bold text-right pr-5">
            {showPassword ? `$${total?.toLocaleString()}` : '$*****'}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default BalanceCard;
