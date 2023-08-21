import React from 'react';

const TransactionsPropsContainer = ({ handleAlphabetically, handleOrderByAmount }) => {
  return (
    <div className='flex items-center justify-between px-4 py-3 mx-8 my-2 bg-white border dark:bg-mediumGrayDarkMode border-gray-200 rounded-lg'>
      <div
        className='text-xl font-medium text-gray-700 dark:text-white cursor-pointer hover:text-boldPink'
        onClick={handleAlphabetically}
      >
        Name
      </div>
      <div
        className='text-xl font-medium text-gray-700 dark:text-white cursor-pointer hover:text-boldPink'
        onClick={handleOrderByAmount}
      >
        Amount
      </div>
    </div>
  );
};

export default TransactionsPropsContainer;
