import React from 'react'

const TransactionsPropsContainer = ({handleAlphabetically, handleOrderByMount}) => {
  return (
    <div className='flex gap-80 m-3 items-center justify-center'>
          <span className='font-medium w-[100px] cursor-pointer' onClick={handleAlphabetically} >
            Name
          </span>
          <span className='font-medium cursor-pointer' onClick={handleOrderByMount} >
            Amount
          </span>
        </div>  
  )
}

export default TransactionsPropsContainer