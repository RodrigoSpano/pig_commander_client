'use client'
import useVisibility from '@/customHooks/useVisibility';
import { getExpensesTotalWallet, getIncomesTotalWallet } from '@/utils/helper/monthTransactions';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const BalancesCard = ({ backup_transactions }) => {
  const [total, setTotal] = useState(0);

  const { showPassword, togglePasswordVisibility } = useVisibility();

  const getBalance = () => {
    const expensesTotal = getExpensesTotalWallet( backup_transactions);
    const incomesTotal = getIncomesTotalWallet( backup_transactions);
    if (expensesTotal > 0 && incomesTotal > 0) {
      setTotal(incomesTotal - expensesTotal);
    }
  };

  useEffect(() => {
    getBalance();
  }, [  backup_transactions]);

  return (
    <motion.div
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
    >
      <div className="rounded-tl-2xl rounded-bl-2xl w-3 h-full bg-pink-400"></div>
      <div className="flex flex-col justify-between py-2 w-full">
        <div className="flex justify-between items-center">
        </div>
        <div className="flex items-center">
          <span className="text-strongPink dark:text-white text-5xl font-Poppins font-bold text-right pr-5">
            {showPassword ? `$${total?.toLocaleString()}` : '$*****'}
          </span>
          <span
            className="flex items-center cursor-pointer focus:outline-none text-gray-500 text-2xl mr-7"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default BalancesCard;
