import { filterByType } from '@/redux/features/monthTransactionsSlice'
import React from 'react'
import { useDispatch } from 'react-redux'

const PermanentFilter = () => {
  const dispatch = useDispatch();

  const handleOptions = (e) => {
    dispatch(filterByType(e.target.value))
  }

  return (
    <div>
      <select
        className='block w-full py-2 px-4 border-2 border-[#E6E9EE] rounded-lg shadow-sm outline-none'
        onChange={handleOptions}
      >
        <option value='default'>All Transactions</option>
        <option value='expense'>Expenses</option>
        <option value='income'>Incomes</option>
      </select>
    </div>
  );
};

export default PermanentFilter;
