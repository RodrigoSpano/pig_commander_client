'use client'
import usePagination from '@/customHooks/usePagination';
import { useEffect, useState } from 'react';
import PaginationComponent from '../Pagination/PaginationComponent';
import SearchBarComponent from '../SearchBar/SearchBarComponent';
import useTransactionDetail from '../../customHooks/useTransactionDetail';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTransactions } from '@/redux/actions/monthTransactionsActions';
import TransactionCard from './subcomps/TransactionCard';
import TransactionsPropsContainer from './subcomps/TransactionsPropsContainer';
import PermanentFilter from './subcomps/PermanentFilter';
import { useCookies } from 'react-cookie';

const TransactionsComponent = () => {

  const dispatch = useDispatch()
  const transactionsState = useSelector(state => state.monthTransactions.transactions)
  const [cookies, setCookie] = useCookies();

  useEffect(() => {
    if (!transactionsState?.length) {
      dispatch(getAllTransactions(cookies.token))
    }
  }, [])

  const { nextHandler, prevHandler, transactions, count, firstPageHandler, lastPageHandler, totalPages, handleSearch, handleAlphabeticallyOrder, handleAmountOrder } = usePagination(transactionsState, 4);

  const { handleDetail } = useTransactionDetail()

  const [orders, setOrders] = useState({ alphabetically: false, byAmount: false }) //estado con el cual modifico los ordenamientos por nombre o monto 

  const handleAlphabetically = () => {
    setOrders({ ...orders, alphabetically: !orders.alphabetically })
    handleAlphabeticallyOrder(orders.alphabetically)
  }

  const handleOrderByAmount = () => {
    setOrders({ ...orders, byAmount: !orders.byAmount })
    handleAmountOrder(orders.byAmount)
  }

  return (

    <div className="bg-white dark:bg-mediumGrayDarkMode rounded-md h-full flex flex-col justify-between box-border">

      <div>
        <section className='flex items-center justify-around py-4 '>
          <h1 className='font-bold text-boldPink  dark:text-mediumPinkDark text-2xl xl:text-4xl lg:text-2xl md:text-xl sm:text-lg '>Last Transactions</h1>
          <SearchBarComponent handleSearch={handleSearch} />
          <PermanentFilter />
        </section>

        <hr className='mx-16' />

        <section className=' py-4'>
          <TransactionsPropsContainer handleAlphabetically={handleAlphabetically} handleOrderByAmount={handleOrderByAmount} />
          <div>
            {transactions?.length ? transactions?.map((t, i) => (<TransactionCard handleDetail={handleDetail} transaction={t} key={i} />)) : null}
          </div>
        </section>
      </div>

      <div>
        <section className=' py-4'>
          {transactions?.length ?
            <PaginationComponent
              count={count}
              totalPages={totalPages}
              nextHandler={nextHandler}
              prevHandler={prevHandler}
              lastPageHandler={lastPageHandler}
              firstPageHandler={firstPageHandler}
            /> : null
          }
        </section>
      </div>

    </div>
  );
};

export default TransactionsComponent;