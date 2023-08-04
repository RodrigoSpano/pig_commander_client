'use client'
import usePagination from '@/customHooks/usePagination'
import React from 'react'
import PaginationComponent from '../Pagination/PaginationComponent';
import styles from "../Dashboard/dashboard.module.css";
import SearchBarComponent from '../SearchBar/SearchBarComponent';

const TransactionsComponent = () => {
  const { transactions, count, totalPages, nextHandler, prevHandler, firstPageHandler, lastPageHandler } = usePagination()

  return (
        <div className={`${styles.mySpendings}  ${styles.shadow_background}`}>
            {
                  transactions.length && transactions.map((t, i) => (
                    <div className='flex gap-80 m-3'>
                      <div>
                        <p key={i}>{t.name}</p>
                      </div>
                      <div>
                        <p>{t.amount}</p>
                      </div>
                    </div>
                  ))
                }
            
            {transactions.length && (
                <PaginationComponent
                  count={count}
                  totalPages={totalPages}
                  nextHandler={nextHandler}
                  prevHandler={prevHandler}
                  firstPageHandler={firstPageHandler}
                  lastPageHandler={lastPageHandler}
                />)
              }
              <div>
                
              </div>
        </div>
  )
}

export default TransactionsComponent

// {transactions.length && transactions.map((t, index) => (
//   <div className='flex gap-80 m-3'>
//     <div>
//       <p key={index}>{t.name}</p>
//     </div>
//     <div>
//       <p>{t.amount}</p>
//     </div>
//   </div>
// ))}
// {transactions.length &&
// <PaginationComponent
//   count={count}
//   totalPages={totalPages}
//   nextHandler={nextHandler}
//   prevHandler={prevHandler}
//   firstPageHandler={firstPageHandler}
//   lastPageHandler={lastPageHandler}
// />
// }
