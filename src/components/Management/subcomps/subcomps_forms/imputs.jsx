import React from "react";

export default function inputs({ title, icon, id, handleChange, values }) {
  return (
    <div className="column-span-1">
      <div className="ml-2 mt-2 text-black dark:text-white text-opacity-50 text-lg font-normal">
        {title}
      </div>
      <div className="flex flex-row">
        {id === "period" ? (
          <input
            className=" flex border-1 ml-2 pl-2 dark:border-0 text-gray-500 dark:text-white bg-black bg-opacity-10 rounded-sm h-12 w-[50px] justify-center items-center"
            name="dayPeriod"
            onChange={handleChange}
            value={values}
            required
          ></input>
        ) : (
          <div className=" flex border-1 ml-2 dark:border-0 bg-black bg-opacity-10 rounded-sm h-12 text-lg w-8 font-extrabold justify-center items-center">
            {icon}
          </div>
        )}
        {id === "period" ? (
          <select
            className="border-1 ml-2 pl-2 dark:border-0 text-gray-500 dark:text-white bg-black bg-opacity-10 rounded-sm h-12 w-[177px]"
            name="period"
  
            onChange={handleChange}
            required
          >
            <option value="days">Days</option>
            <option value="months">Months</option>
            <option value="years">Years</option>
          </select>
        ) : (
          <input
            className="border-1 ml-2 pl-2 dark:border-0 text-gray-500 dark:text-white bg-black bg-opacity-10 rounded-sm h-12 w-3/4"
            placeholder="Enter Amount"
            id={`${id}`}
            name={`${id}`}
            value={values}
            onChange={handleChange}
            required
          ></input>
        )}
      </div>
    </div>
  );
}
