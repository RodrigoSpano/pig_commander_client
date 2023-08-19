import React, { useEffect, useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import useVisibility from '@/customHooks/useVisibility';
import { motion } from 'framer-motion';
import { getExpensesTotal, getIncomesTotal } from '@/utils/helper/monthTransactions';

const BalanceCard = ({ transactions }) => {
  const [total, setTotal] = useState(0);
  const { showPassword, togglePasswordVisibility } = useVisibility();

  const getBalance = () => {
    const expensesTotal = getExpensesTotal(transactions);
    const incomesTotal = getIncomesTotal(transactions);

    if (incomesTotal) {
      setTotal(incomesTotal);
    }
    if (expensesTotal) {
      setTotal((prevTotal) => prevTotal - expensesTotal);
    }
  };

  useEffect(() => {
    getBalance();
  }, [transactions]);

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      className='mr-0 md:mr-2'
      initial='hidden'
      animate='visible'
      variants={cardVariants}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-gradient-to-r from-regularPink rounded-2xl shadow-md">
        <div className="flex items-center justify-between p-4 xl:p-6">
          <p className="font-semibold text-white text-2xl pb-0 md:text-3xl xl:text-4xl xl:pb-4">
            My Balance
          </p>
          <span
            className="cursor-pointer font-semibold text-3xl text-[#454545]"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </span>
        </div>

        <div className="p-4">
          <span className="font-bold text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            {showPassword ? `$${total?.toLocaleString()}` : '$*****'}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default BalanceCard;
