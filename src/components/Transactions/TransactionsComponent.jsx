'use client'
import usePagination from '@/customHooks/usePagination'
import React from 'react'
import PaginationComponent from '../Pagination/PaginationComponent';
import styles from "../Dashboard/dashboard.module.css";
import SearchBarComponent from '../SearchBar/SearchBarComponent';

const TransactionsComponent = () => {
  const { transactions, count, totalPages, nextHandler, prevHandler, firstPageHandler, lastPageHandler } = usePagination()

  return (
    <div className={`${styles.mySpendings}  ${styles.shadow_background} flex flex-col items-center content-center w-[1059px] h-[380px]`}>
        <SearchBarComponent/>
      <div className='h-[200px]'>
        <div className='flex gap-80 m-3'>
          <div>
            Name
          </div>
          <div>
            Amount
          </div>
        </div>
        {transactions.length && transactions.map((t, index) => (
          <div className='flex gap-80 m-3'>
            <div>
              <p key={index}>{t.name}</p>
            </div>
            <div>
              <p>{t.amount}</p>
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
          firstPageHandler={firstPageHandler}
          lastPageHandler={lastPageHandler}
        />
      }
    </div>
  )
}

export default TransactionsComponent