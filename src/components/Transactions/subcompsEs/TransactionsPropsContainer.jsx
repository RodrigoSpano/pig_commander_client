import React from 'react';

const TransactionsPropsContainerEs = ({ handleAlphabetically, handleOrderByAmount }) => {
  return (
    <div className='flex items-center justify-between px-6 py-3 mx-16 my-2 bg-white border border-gray-200 rounded-lg'>
      <div
        className='text-xl font-medium text-gray-700 cursor-pointer hover:text-boldPink'
        onClick={handleAlphabetically}
      >
        Nombre
      </div>
      <div
        className='text-xl font-medium text-gray-700 cursor-pointer hover:text-boldPink'
        onClick={handleOrderByAmount}
      >
        Monto
      </div>
    </div>
  );
};

export default TransactionsPropsContainerEs;
