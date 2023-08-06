'use client'
import usePagination from '@/customHooks/usePagination';
import { useEffect, useState } from 'react';
import PaginationComponent from '../Pagination/PaginationComponent';
import styles from "../Dashboard/dashboard.module.css";
import SearchBarComponent from '../SearchBar/SearchBarComponent';
import useTransactionDetail from '../../customHooks/useTransactionDetail';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTransactions } from '@/redux/actions/monthTransactionsActions';

const TransactionsComponent = () => {

  const dispatch = useDispatch()
  const transactionsState = useSelector(state => state.monthTransactions.transactions)

  useEffect(()=>{
    if(!transactionsState.length){
      const token = sessionStorage.getItem('token')
      dispatch(getAllTransactions(token))
    }
  },[])

  const {
    nextHandler,prevHandler,transactions,count,firstPageHandler,lastPageHandler,totalPages
  } = usePagination();

  const {handelDetail} = useTransactionDetail()


  
  return (
    <div className={`${styles.mySpendings} ${styles.shadow_background} flex flex-col items-center content-center w-[1059px] h-[380px] select-none`}>
      <div className='flex'>
        <h1 className='text-2xl font-semibold m-7'>Last Transactions</h1>
        {/* <SearchBarComponent handleSearch={handleSearch} /> */}
      </div>
      <div className='h-[200px]'>
        <div className='flex gap-80 m-3 items-center justify-center'>
          <div className='font-medium w-[100px] cursor-pointer' >
            Name
          </div>
          <div className='font-medium cursor-pointer' >
            Amount
          </div>
        </div>
        
        {transactions.length ? transactions.map((t, index) => (
          <div className='flex gap-80 m-3 cursor-pointer' key={index} onClick={() => {handelDetail(t)}}>
            <p className='w-[100px] overflow-hidden' >{t.name}</p>
            <div>
              <p className={`font-bold ${t.type === 'expense' ? 'text-red-500' : 'text-green-500'}`}>{t.mount}</p>
            </div>
          </div>
        )): null}

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