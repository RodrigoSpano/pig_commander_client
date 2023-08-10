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

  useEffect(()=>{
    if(!transactionsState.length){
      dispatch(getAllTransactions(cookies.token))
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
    
    <div className=" flex flex-col select-none bg-white rounded-lg shadow-md col-span-2 relative">

      <div className='flex items-center justify-around my-4'>
        <h1 className='text-2xl font-bold text-boldPink'>Last Transactions</h1>
        <SearchBarComponent handleSearch={handleSearch} />
        <PermanentFilter /> 
      </div>

      <hr  className='my-2 mx-16'/>

      <div className=''>
        <TransactionsPropsContainer handleAlphabetically={handleAlphabetically} handleOrderByMount={handleOrderByMount}/>
        <div className=''>
        {transactions?.length ? transactions?.map((t, i) => (<TransactionCard handelDetail={handelDetail} transaction={t} key={i} />)): null} 
        </div>
      </div>
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
    </div>
  );
};

export default TransactionsComponent;