import { filterByType } from '@/redux/features/monthTransactionsSlice'
import React from 'react'
import { useDispatch } from 'react-redux'

const PermanentFilter = () => {
  const dispatch = useDispatch()

  const handleOptions = (e) => {
    dispatch(filterByType(e.target.value))
  }

  return (
    <div className='absolute top-[25px] right-[15px]'>
      <select onChange={handleOptions}>
        <option value='default'>all transactions</option>
        <option value="expense">expenses</option>
        <option value="income">incomes</option>
      </select>
    </div>
  )
}

export default PermanentFilter