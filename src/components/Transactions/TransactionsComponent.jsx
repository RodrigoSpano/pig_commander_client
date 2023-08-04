import usePagination from '@/customHooks/usePagination';
import { useState } from 'react';
import PaginationComponent from '../Pagination/PaginationComponent';
import styles from "../Dashboard/dashboard.module.css";
import SearchBarComponent from '../SearchBar/SearchBarComponent';
import TransactionDetail from '../../customHooks/useTransactionDetail';

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

  const {handelDetail} = TransactionDetail()

  const [sortOrderMonthlyTransactionNameLocalSate, setSortOrderMonthlyTransactionNameLocalSate] = useState('asc');

  const [sortMonthlyTransactionsAmountLocalSate, setsortMonthlyTransactionsAmountLocalSate] = useState('asc');
  
  const handleSortMonthlyTransactionName = () => {
    const monthlyTransactionName = sortMonthlyTransactions(sortOrderMonthlyTransactionNameLocalSate);
    setSortOrderMonthlyTransactionNameLocalSate(monthlyTransactionName);
  };

  const handleSortMonthlyTransactionAmount = () => {
    const monthlyTransactionAmount = sortMonthlyTransactionsAmount(sortMonthlyTransactionsAmountLocalSate);
    setsortMonthlyTransactionsAmountLocalSate(monthlyTransactionAmount);
  };
  
  return (
    <div className={`${styles.mySpendings} ${styles.shadow_background} flex flex-col items-center content-center w-[1059px] h-[380px] select-none`}>
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
          <div className='flex gap-80 m-3 cursor-pointer' onClick={() => {handelDetail(t)}}>
            <p className='w-[100px] overflow-hidden' key={index}>{t.name}</p>
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