'use client'
import usePagination from '@/customHooks/usePagination'
import React from 'react'
import PaginationComponent from '../Pagination/PaginationComponent';
import styles from "../Dashboard/dashboard.module.css";

const TransactionsComponent = () => {
    const {transactions, count, totalPages, nextHandler, prevHandler, firstPageHandler, lastPageHandler} = usePagination() 

  return (
        <div className={`${styles.mySpendings}  ${styles.shadow_background} flex flex-col items-center content-center w-[1059px] h-[380px]`}>
          <div className='h-[200px]'>
            {transactions.length && transactions.map((t, index) => (
              <div className='flex'>
                <p key={index}>{t.name}</p>
                <p>{t.amount}</p>
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