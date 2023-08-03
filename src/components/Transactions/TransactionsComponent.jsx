'use client'
import usePagination from '@/customHooks/usePagination'
import React from 'react'
import PaginationComponent from '../Pagination/PaginationComponent';
import styles from "../Dashboard/dashboard.module.css";

const TransactionsComponent = () => {
    const {transactions, count, totalPages, nextHandler, prevHandler, firstPageHandler, lastPageHandler} = usePagination() 

  return (
        <div className={`${styles.mySpendings}  ${styles.shadow_background}`}>
            {transactions.length && transactions.map((t, index) => (
                <p key={index}>{t.name}</p>
            ))}
            
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