import React from "react";

export default function inputs({ title, icon, id, handleChange }) {
  return (
    <div className="column-span-1">
      <div className="ml-2 mt-2 text-black text-opacity-50 text-lg font-normal">
        {title}
      </div>
      <div className="flex flex-row">
        {id === "period" ? (
          <input
            className=" flex border-1 ml-2 pl-2 text-gray-500 bg-black bg-opacity-10 rounded-sm h-12 w-8 justify-center items-center"
            name="dayPeriod"
            onChange={handleChange}
            required
          ></input>
        ) : (
          <div className=" flex border-1 ml-2 bg-black bg-opacity-10 rounded-sm h-12 text-lg w-8 font-extrabold justify-center items-center">
            {icon}
          </div>
        )}
        {id === "period" ? (
          <select
            className="border-1 ml-2 pl-2 text-gray-500 bg-black bg-opacity-10 rounded-sm h-12 w-3/4"
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
            className="border-1 ml-2 pl-2 text-gray-500 bg-black bg-opacity-10 rounded-sm h-12 w-3/4"
            placeholder="Enter Amount"
            id={`${id}`}
            name={`${id}`}
            onChange={handleChange}
            required
          ></input>
        )}
      </div>
    </div>
  );
}
