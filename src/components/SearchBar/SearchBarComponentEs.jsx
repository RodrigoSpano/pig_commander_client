import React from "react";

const SearchBarComponentEs = ({ handleSearch }) => {
  return (
    <form className="flex items-center bg-white dark:bg-mediumGrayDarkMode overflow-hidden border rounded-lg shadow-sm outline-none">
      <input
        type="search"
        placeholder="Buscar..."
        onChange={handleSearch}
        className="flex-grow p-2 border-none outline-none dark:placeholder-text-white text-gray-800 dark:text-white bg-transparent"
      />
    </form>
  );
};

export default SearchBarComponentEs;