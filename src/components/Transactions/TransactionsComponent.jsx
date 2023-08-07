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

const TransactionsComponent = () => {

  const dispatch = useDispatch()
  const transactionsState = useSelector(state => state.monthTransactions.transactions)

  useEffect(()=>{
    if(!transactionsState.length){
      const token = localStorage.getItem('token')
      dispatch(getAllTransactions(token))
    }
  },[])

  const { nextHandler,prevHandler,transactions,count,firstPageHandler,lastPageHandler,totalPages,handleSearch, handleAlphabeticallyOrder, handleMountOrder } = usePagination();

  const {handelDetail} = useTransactionDetail()

  const [orders, setOrders] = useState({ alphabetically: false, byMount: false }) //estado con el cual modifico los ordenamientos por nombre o monto 

  const handleAlphabetically = () => {
    setOrders({...orders, alphabetically:!orders.alphabetically})
    handleAlphabeticallyOrder(orders.alphabetically)
  }

  const handleOrderByMount = () => {
    setOrders({...orders, byMount: !orders.byMount})
    handleMountOrder(orders.byMount)
  }
  
  return (
    
    <div className=" flex flex-col items-center content-center select-none bg-white rounded-lg shadow-md col-span-2 relative">
      <PermanentFilter /> 
      <div className='flex'>
        <h1 className='text-2xl font-semibold m-7'>Last Transactions</h1>
        <SearchBarComponent handleSearch={handleSearch} />
      </div>

      <div className='h-[200px] flex flex-col'>
        <TransactionsPropsContainer handleAlphabetically={handleAlphabetically} handleOrderByMount={handleOrderByMount}/>
        <div className='flex flex-col gap-2'>
        {transactions?.length ? transactions?.map((t, i) => (<TransactionCard handelDetail={handelDetail} transaction={t} key={i} />)): null} 
        </div>
      </div>
      {transactions?.length &&
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