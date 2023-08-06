'use client'

import { getAllTransactions } from '@/redux/actions/monthTransactionsActions';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const usePagination = () => {
  
  const MOVE_PER_PAGE = 4;
  const transactionsState = useSelector(state => state.monthTransactions.transactions)
  const [prev, setPrev] = useState(0);
  const [next, setNext] = useState(MOVE_PER_PAGE);
  const [count, setCount] = useState(1);
  let transactions =  transactionsState.slice(prev, next)
  const totalPages = Math.ceil(transactionsState.length / MOVE_PER_PAGE); 
  
  useEffect(() => {
    firstPageHandler()
  }, [transactionsState.length]);

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

  
  return {
    nextHandler,
    prevHandler,
    transactions,
    count,
    totalPages,
    firstPageHandler,
    lastPageHandler
  };
};

export default usePagination;

  // const transactionsOrigin = [
  //   { name: 'McDonalds', amount: '$500', category: 'Food', date: '11/2/23', type: 'expense' },
  //   { name: 'Levis', amount: '$100', category: 'Clothes', date: '16/11/22', type: 'income' },
  //   { name: 'Subway', amount: '$900', category: 'Food', date: '1/1/21', type: 'expense' },
  //   { name: 'Coto', amount: '$200', category: 'Shopping', date: '20/2/23', type: 'income' },
  //   { name: 'Carrefour', amount: '$500', category: 'Shopping', date: '14/6/23', type: 'expense' },
  //   { name: 'Adidas', amount: '$800', category: 'Shopping', date: '22/11/23', type: 'expense' },
  //   { name: 'Cine', amount: '$150', category: 'Entertaining', date: '19/3/20', type: 'income' },
  //   { name: 'Burger King', amount: '$507', category: 'Food', date: '29/7/22', type: 'expense' },
  //   { name: 'Puma', amount: '$560', category: 'Shopping', date: '17/8/22', type: 'income' },
  //   { name: 'Taxi', amount: '$780', category: 'Transport', date: '21/8/23', type: 'expense' }
  // ];