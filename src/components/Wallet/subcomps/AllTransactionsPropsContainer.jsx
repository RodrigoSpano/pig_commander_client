import React from "react";

const AllTransactionsPropsContainer = ({ handleAlphabetically, handleOrderByAmount }) => {
  return (
    <div className="flex items-center justify-between px-6 py-3 mx-8 my-2 bg-white dark:bg-mediumGrayDarkMode border border-gray-200 rounded-lg shadow-sm">
      <div
        className="text-xl font-medium text-gray-700 cursor-pointer hover:text-boldPink dark:text-white dark:hover:text-mediumPinkDark"
        onClick={handleAlphabetically}
      >
        Name
      </div>
      <div
        className="text-xl font-medium text-gray-700 cursor-pointer hover:text-boldPink dark:text-white dark:hover:text-mediumPinkDark"
        onClick={handleOrderByAmount}
      >
        Amount
      </div>
    </div>
  );
};

export default AllTransactionsPropsContainer;