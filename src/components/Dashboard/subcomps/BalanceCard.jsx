'use client'
import { getExpensesTotal, getIncomesTotal } from '@/utils/helper/monthTransactions'
import React, {  useEffect, useState } from 'react'

const BalanceCard = ({transactions}) => {
  const [total, setTotal] = useState(0)

  
  const getBalance =  () => {
    const expensesTotal = getExpensesTotal(transactions)
    const incomesTotal = getIncomesTotal(transactions)
    if(expensesTotal > 0 && incomesTotal > 0){
      setTotal(incomesTotal-expensesTotal)
    }
  }

  useEffect(() => {
    getBalance()
  }, [transactions])

  return (
   <div className="flex flex-row bg-white rounded-lg shadow-md col-span-4 gap-10 h-[120px] ">
      <div className="rounded-tl-2xl rounded-bl-2xl w-3 h-full bg-pink-400"></div>
      <div className="flex flex-col justify-between py-2 w-full">
        <p className="text-[#AFAFAF] text-base font-Poppins font-medium">
          My Balance
        </p>
        <span className="text-strongPink text-5xl font-Poppins font-bold text-right pr-5 ">
          ${total}
        </span>
      </div>
    </div>
  )
}

export default BalanceCard