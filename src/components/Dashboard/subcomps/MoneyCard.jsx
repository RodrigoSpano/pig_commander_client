import { getExpensesTotal, getIncomesTotal } from '@/utils/helper/monthTransactions'
import React, { useEffect, useState } from 'react'

const MoneyCard = ({title, type, array}) => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if(type === 'expense'){
      const total = getExpensesTotal(array)
      setValue(total)
    } else if(type === 'income'){
      const total = getIncomesTotal(array)
      setValue(total)
    } else if(type==='saving'){
      const total = array.length && array.reduce((a, b) => a.mount + b.mount)
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
      <span className="text-[#15223C] text-[20px] font-semibold">
        ${value.toLocaleString()}
      </span>
    </div>
  </div>
  )
}

export default MoneyCard