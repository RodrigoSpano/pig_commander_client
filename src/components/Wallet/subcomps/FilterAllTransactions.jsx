import { clearFilters, filterByType } from '@/redux/features/transactionsSlice'
import { useDispatch } from 'react-redux'

const FilterAllTransactions = () => {
    const dispatch = useDispatch();

    const handleOptions = (e) => {
      if (e.target.value === 'default') {
        dispatch(clearFilters())
      } else {
        dispatch(filterByType(e.target.value))
      }
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
}

export default FilterAllTransactions