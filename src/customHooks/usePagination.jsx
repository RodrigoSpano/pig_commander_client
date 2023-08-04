import { useEffect, useState } from 'react'

const usePagination = () => {
  const TRANSACTION_PER_PAGE = 4;

  const transactionsOrigin = [
    { name: 'McDonalds', amount: '$500', category: 'Food', date: '11/2/23', type: 'expense' },
    { name: 'Levis', amount: '$100', category: 'Clothes', date: '16/11/22', type: 'income' },
    { name: 'Subway', amount: '$900', category: 'Food', date: '1/1/21', type: 'expense' },
    { name: 'Coto', amount: '$200', category: 'Shopping', date: '20/2/23', type: 'income' },
    { name: 'Carrefour', amount: '$500', category: 'Shopping', date: '14/6/23', type: 'expense' },
    { name: 'Adidas', amount: '$800', category: 'Shopping', date: '22/11/23', type: 'expense' },
    { name: 'Cine', amount: '$150', category: 'Entertaining', date: '19/3/20', type: 'income' },
    { name: 'Burger King', amount: '$507', category: 'Food', date: '29/7/22', type: 'expense' },
    { name: 'Puma', amount: '$560', category: 'Shopping', date: '17/8/22', type: 'income' },
    { name: 'Taxi', amount: '$780', category: 'Transport', date: '21/8/23', type: 'expense' }
  ];

  const [transactions, setTransactions] = useState([...transactionsOrigin]);
  
  const handleSearch = (e) => {
    console.log('Valor del campo de búsqueda:', e.target.value);
    const filteredTransactions = transactionsOrigin.filter(t => t.name.toLowerCase().includes(e.target.value.toLowerCase()));
    console.log('Resultado de la búsqueda:', filteredTransactions);

    if (e.target.value === '') {
      setTransactions([...transactionsOrigin]);
    } else {
      setTransactions(filteredTransactions);
    }
  };

  const sortMonthlyTransactions = (sortOrderMonthlyTransactionName) => {
    if (sortOrderMonthlyTransactionName === "asc") {
      const sortedTransactions = [...transactions].sort((a, b) => b.name.localeCompare(a.name));
      setTransactions(sortedTransactions);
      return "desc";
    } else {
      const sortedTransactions = [...transactions].sort((a, b) => a.name.localeCompare(b.name));
      setTransactions(sortedTransactions);
      return "asc";
    }
  };
  
  const sortMonthlyTransactionsAmount = (sortOrderMonthlyTransactionAmount) => {
    if (sortOrderMonthlyTransactionAmount === "asc") {
      const sortedTransactions = [...transactions].sort((a, b) => parseFloat(b.amount.slice(1)) - parseFloat(a.amount.slice(1)));
      setTransactions(sortedTransactions);
      return "desc";
    } else {
      const sortedTransactions = [...transactions].sort((a, b) => parseFloat(a.amount.slice(1)) - parseFloat(b.amount.slice(1)));
      setTransactions(sortedTransactions);
      return "asc";
    }
  };

  const [prev, setPrev] = useState(0);
  const [next, setNext] = useState(TRANSACTION_PER_PAGE);
  const [count, setCount] = useState(1);
  
  const totalPages = Math.ceil(transactions.length / TRANSACTION_PER_PAGE);

  const nextHandler = () => {
    if (count < totalPages) {
      setNext(next + TRANSACTION_PER_PAGE);
      setPrev(prev + TRANSACTION_PER_PAGE);
      setCount(count + 1);
    }
  };

  const prevHandler = () => {
    if (count > 1) {
      setNext(next - TRANSACTION_PER_PAGE);
      setPrev(prev - TRANSACTION_PER_PAGE);
      setCount(count - 1);
    }
  };

  const firstPageHandler = () => {
    setPrev(0);                
    setNext(TRANSACTION_PER_PAGE);    
    setCount(1);
  }

  const lastPageHandler = () => {
    setPrev((totalPages - 1) * TRANSACTION_PER_PAGE); 
    setNext(totalPages * TRANSACTION_PER_PAGE);   
    setCount(totalPages);
  };

  useEffect(() => { 
    firstPageHandler()
  }, [transactions.length])


  return {
    transactions: transactions.slice(prev, next),
    prevHandler,
    nextHandler,
    firstPageHandler,
    lastPageHandler,
    count,
    totalPages,
    handleSearch,
    sortMonthlyTransactions,
    sortMonthlyTransactionsAmount
  };
};

export default usePagination;