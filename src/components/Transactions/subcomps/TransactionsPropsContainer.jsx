import React from 'react';

const TransactionsPropsContainer = ({ handleAlphabetically, handleOrderByMount }) => {
  return (
    <div className='flex items-center justify-between px-6 py-3 mx-16 my-2 bg-white border border-gray-200 rounded-lg'>
      <div
        className='text-xl font-medium text-gray-700 cursor-pointer hover:text-boldPink'
        onClick={handleAlphabetically}
      >
        Name
      </div>
      <div
        className='text-xl font-medium text-gray-700 cursor-pointer hover:text-boldPink'
        onClick={handleOrderByMount}
      >
        Amount
      </div>
    </div>
  );
};

export default TransactionsPropsContainer;
