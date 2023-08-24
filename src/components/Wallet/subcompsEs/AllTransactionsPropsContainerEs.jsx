import React from "react";

const AllTransactionsPropsContainerEs = ({ handleAlphabetically, handleOrderByAmount }) => {
  return (
    <div className="flex items-center justify-between px-6 py-3 mx-8 my-2 bg-white dark:bg-mediumGrayDarkMode border border-gray-200 rounded-lg shadow-sm">
      <div
        className="text-xl font-medium text-gray-700 cursor-pointer hover:text-boldPink dark:text-white dark:hover:text-mediumPinkDark"
        onClick={handleAlphabetically}
      >
        Nombre
      </div>
      <div
        className="text-xl font-medium text-gray-700 cursor-pointer hover:text-boldPink dark:text-white dark:hover:text-mediumPinkDark"
        onClick={handleOrderByAmount}
      >
        Cantidad
      </div>
    </div>
  );
};

export default AllTransactionsPropsContainerEs;