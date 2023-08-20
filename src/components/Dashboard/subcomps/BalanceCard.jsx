import React, { useEffect, useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import useVisibility from '@/customHooks/useVisibility';
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
      setTotal(-expensesTotal);
    }
    if (expensesTotal > 0 && incomesTotal > 0) {
      setTotal(incomesTotal - expensesTotal);
    }
  };

  useEffect(() => {
    getBalance();
  }, [transactions]);

  return (
    <div className='mr-2'>
      <div className="bg-white dark:bg-mediumGrayDarkMode rounded-2xl shadow-md">
        <div className="flex items-center justify-between p-4">
          <p className="font-semibold xl:text-2xl lg:text-xl md:text-lg sm:text-base dark:text-mediumPinkDark">
            My Balance
          </p>
          <span
            className="cursor-pointer font-semibold xl:text-2xl lg:text-xl md:text-lg sm:text-base"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </span>
        </div>

        <div className="p-4">
          <span className="font-bold xl:text-4xl lg:text-5xl md:text-lg sm:text-base">
            {showPassword ? `$${total?.toLocaleString()}` : '$*****'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;
