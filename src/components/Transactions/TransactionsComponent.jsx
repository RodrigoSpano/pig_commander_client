import usePagination from '@/customHooks/usePagination';
import { useState } from 'react';
import PaginationComponent from '../Pagination/PaginationComponent';
import SearchBarComponent from '../SearchBar/SearchBarComponent';
import useTransactionDetail from '../../customHooks/useTransactionDetail';

const TransactionsComponent = () => {
  const {
    transactions,
    count,
    totalPages,
    nextHandler,
    prevHandler,
    firstPageHandler,
    lastPageHandler,
    handleSearch,
    sortMonthlyTransactions,
    sortMonthlyTransactionsAmount
  } = usePagination();

  const {handelDetail} = useTransactionDetail()

  const [sortOrderMonthlyTransactionNameLocalSate, setSortOrderMonthlyTransactionNameLocalState] = useState('asc');

  const [sortMonthlyTransactionsAmountLocalSate, setsortMonthlyTransactionsAmountLocalState] = useState('asc');
  
  const handleSortMonthlyTransactionName = () => {
    const monthlyTransactionName = sortMonthlyTransactions(sortOrderMonthlyTransactionNameLocalSate);
    setSortOrderMonthlyTransactionNameLocalState(monthlyTransactionName);
  };

  const handleSortMonthlyTransactionAmount = () => {
    const monthlyTransactionAmount = sortMonthlyTransactionsAmount(sortMonthlyTransactionsAmountLocalSate);
    setsortMonthlyTransactionsAmountLocalState(monthlyTransactionAmount);
  };
  
  return (
    <div className=" flex flex-col items-center content-center select-none ">
      <div className='flex'>
        <h1 className='text-2xl font-semibold m-7'>Last Transactions</h1>
        <SearchBarComponent handleSearch={handleSearch} />
      </div>
      <div className='h-[200px]'>
        <div className='flex gap-80 m-3 items-center justify-center'>
          <div className='font-medium w-[100px] cursor-pointer' onClick={handleSortMonthlyTransactionName}>
            Name
          </div>
          <div className='font-medium cursor-pointer' onClick={handleSortMonthlyTransactionAmount}>
            Amount
          </div>
        </div>
        {transactions.length && transactions.map((t, index) => (
          <div className='flex gap-80 m-3 cursor-pointer' key={index} onClick={() => {handelDetail(t)}}>
            <p className='w-[100px] overflow-hidden' >{t.name}</p>
            <div>
              <p className={`font-bold ${t.type === 'expense' ? 'text-red-500' : 'text-green-500'}`}>{t.amount}</p>
            </div>
          </div>
        ))}
      </div>
      {transactions.length &&
        <PaginationComponent
          count={count}
          totalPages={totalPages}
          nextHandler={nextHandler}
          prevHandler={prevHandler}
          lastPageHandler={lastPageHandler}
          firstPageHandler={firstPageHandler}
        />
      }
    </div>
  );
};

export default TransactionsComponent;