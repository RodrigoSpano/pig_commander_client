import React from "react";

export default function inputs({ title, icon }) {
  return (
    <div className="column-span-1">
      <div className="ml-2 mt-2 text-black text-opacity-50 text-lg font-normal">
        {title}
      </div>
      <div className="flex flex-row">
        <div className=" flex border-1 ml-2 bg-black bg-opacity-10 rounded-sm h-12 text-lg w-8 font-extrabold justify-center items-center">
          {icon}
        </div>
        <input
          className="border-1 ml-2 pl-2 text-gray-500 bg-black bg-opacity-10 rounded-sm h-12 w-3/4"
          placeholder="Enter Amount"
        ></input>
      </div>
    </div>
  );
}
