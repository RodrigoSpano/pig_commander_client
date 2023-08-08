import useVisibility from '@/customHooks/useVisibility';
import { getExpensesTotal, getIncomesTotal } from '@/utils/helper/monthTransactions'
import { useEffect, useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const MoneyCard = ({ title, type, array }) => {
  const [value, setValue] = useState(0);

  const { showPassword, togglePasswordVisibility } = useVisibility();

  useEffect(() => {
    if (type === 'expense') {
      const total = getExpensesTotal(array)
      setValue(total)
    } else if (type === 'income') {
      const total = getIncomesTotal(array)
      setValue(total)
    } else if (type === 'saving') {
      const total = array?.length ? array.reduce((a, b) => a.mount + b.mount) : 0
      setValue(total)
    }
  }, [array])

  return (
    <div className=" bg-white rounded-lg shadow-md flex gap-10 flex-row col-span-3 row-span-2 h-[100px]">
      <div className="rounded-tl-2xl rounded-bl-2xl w-3 h-full bg-pink-400"></div>

      <div className="flex flex-col justify-evenly ">
        <p className="text-[#AFAFAF] text-base font-Poppins font-medium">
          {title}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-[#15223C] text-[20px] font-semibold">
            {showPassword ? `$${value?.toLocaleString()}` : "$*****"}
          </span>
          <span
            className="flex items-center cursor-pointer ml-2 focus:outline-none text-gray-500 text-2xl"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </span>
        </div>
      </div>
    </div>
  )
}

export default MoneyCard