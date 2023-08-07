import React from 'react'

const TransactionCard = ({transaction, handelDetail}) => {
  return (
    <div className='flex gap-80 h-[32px] cursor-pointer border-b-2 border-slate-200' onClick={() => {handelDetail(transaction)}}>
         <p className='w-[120px] overflow-hidden' >{transaction.name}</p>
          <div>
            <p className={`font-bold ${transaction.type === 'expense' ? 'text-red-500' : 'text-green-500'}`}>
              ${transaction.mount}
              </p>
          </div>
        </div>
  )
}

export default TransactionCard