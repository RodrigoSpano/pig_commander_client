import { useEffect, useState } from 'react'

const usePagination = () => {
  const TRANSACTION_PER_PAGE = 3;

  const transactionsOrigin = [
    { name: 'McDonalds', type: 'expense', amount: '$500' },
    { name: 'Levis', type: 'income', amount: '$100' },
    { name: 'Subway', type: 'expense', amount: '$900' },
    { name: 'Coto', type: 'income', amount: '$200' },
    { name: 'Carrefour', type: 'expense', amount: '$500' },
    { name: 'Adidas', type: 'expense', amount: '$800' },
    { name: 'Nike', type: 'income', amount: '$150' },
    { name: 'Burger King', type: 'expense', amount: '$507' },
    { name: 'Puma', type: 'income', amount: '$560' },
    { name: 'YPF', type: 'expense', amount: '$780' }
  ];

  const [transactions, setTransactions] = useState([...transactionsOrigin]);
  const [prev, setPrev] = useState(0);
  const [next, setNext] = useState(TRANSACTION_PER_PAGE);
  const [count, setCount] = useState(1);

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