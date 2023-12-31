'use client'

import { orderAmount, orderNameAlphabetically } from '@/redux/features/monthTransactionsSlice';
import { orderAmount as orderAmountAllTransactions, orderNameAlphabetically as orderNameAlphabeticallyAllTransactions } from '@/redux/features/transactionsSlice';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const usePagination = (transactionsState, MOVE_PER_PAGE) => {

   MOVE_PER_PAGE = 4;
  // const transactionsState = useSelector(state => state.monthTransactions.transactions)
  const [prev, setPrev] = useState(0);
  const [next, setNext] = useState(MOVE_PER_PAGE);
  const [count, setCount] = useState(1);
  const [transactions, setTransactions] = useState([])
  const totalPages = Math.ceil(transactionsState?.length / MOVE_PER_PAGE); 

  const dispatch = useDispatch()
  
  useEffect(() => {
    firstPageHandler()
    setTransactions(transactionsState?.slice(prev,next))
  }, [transactionsState?.length]);
  
  useEffect(() => {
    setTransactions(transactionsState?.slice(prev,next))
  }, [ transactionsState, next, prev])

  const prevHandler = () => {
    if (count > 1) {
      if (prev - MOVE_PER_PAGE < 0) {
        setPrev(0);
        setNext(MOVE_PER_PAGE);
      } else if (prev - MOVE_PER_PAGE >= 0) {
        setPrev(prev - MOVE_PER_PAGE);
        setNext(next - MOVE_PER_PAGE);
      }
      setCount(count - 1);
    }
  };

  const nextHandler = () => {
    if (count < totalPages) {
      setNext(next + MOVE_PER_PAGE);
      setPrev(prev + MOVE_PER_PAGE);
      setCount(count + 1);
    }
  };

  const lastPageHandler = () => {
    setPrev((totalPages-1)*MOVE_PER_PAGE)
    setNext(totalPages * MOVE_PER_PAGE)
    setCount(totalPages)
  }

  const firstPageHandler = () => {
    setPrev(0)
    setNext(MOVE_PER_PAGE)
    setCount(1)
  }

  const handleSearch = (e) => {
    if(e.target.value === ''){
      setTransactions(transactionsState?.slice(prev, next))
    } else {
      let searchTrans = transactionsState?.filter(t => t.name.toLowerCase().startsWith(e.target.value.toLowerCase())).slice(prev, next)
      setTransactions(searchTrans)
    }
  }
  
  const handleAlphabeticallyOrder = (type) => {
      if(!type){
        dispatch(orderNameAlphabetically('zA'));
      } else dispatch(orderNameAlphabetically('aZ'))
  }

  const handleAlphabeticallyOrderAllTransactions = (type) => {
    if(!type){
      dispatch(orderNameAlphabeticallyAllTransactions('zA'));
    } else dispatch(orderNameAlphabeticallyAllTransactions('aZ'))
}
  
  const handleAmountOrder = (type) => {
    if(!type){
      dispatch(orderAmount('desc'))
    } else dispatch(orderAmount('asc'))
  }

  const handleAmountOrderAllTransactions = (type) => {
    if(!type){
      dispatch(orderAmountAllTransactions('desc'))
    } else dispatch(orderAmountAllTransactions('asc'))
  }
  
  return {
    nextHandler,
    prevHandler,
    transactions,
    count,
    totalPages,
    firstPageHandler,
    lastPageHandler,
    handleSearch,
    handleAlphabeticallyOrder,
    handleAmountOrder,
    handleAlphabeticallyOrderAllTransactions,
    handleAmountOrderAllTransactions
  };
};

export default usePagination;