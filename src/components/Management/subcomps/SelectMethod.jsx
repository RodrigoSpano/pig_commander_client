import React from "react";

function SelectMethod({ handleButtonClick }) {
  return (
    <div className=" shadow-lg rounded-2xl bg-white  dark:bg-mediumGrayDarkMode flex justify-center items-center mt-3 pb-4 pt-4">
      <div className="flex flex-col pl-4 pr-4 w-full justify-center items-center">
        <div className="text-center lg:text-3xl sm:text-xl font-bold text-gray-900 dark:bg-mediumGrayDarkMode dark:text-white items-center w-full mb-4 ">
          Select Method
        </div>
        <div className="flex flex-row w-full items-center justify-center gap-4">
          <button
            className="text-md  w-36 font-extrabold bg-gradient-to-r from-pink-400 to-pink-600 text-white py-2 rounded-md hover:from-pink-500 hover:to-pink-700 transition-all duration-300 tracking-widest"
            name="Investment"
            onClick={handleButtonClick}
          >
            Investment
          </button>
          <button
             className="text-md  w-36 font-extrabold bg-gradient-to-r from-pink-400 to-pink-600 text-white py-2 rounded-md hover:from-pink-500 hover:to-pink-700 transition-all duration-300 tracking-widest"
            name="Saving"
            onClick={handleButtonClick}
          >
            Saving
          </button>
        </div>
      </div>
    </div>
  );
}

export default SelectMethod;
