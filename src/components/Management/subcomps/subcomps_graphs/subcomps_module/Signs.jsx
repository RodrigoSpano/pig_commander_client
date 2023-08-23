import React from "react";

export default function Signs({ title, amount }) {
  return (
    <div>
      <div className="w-full">
        <div className=" text-gray-500 dark:text-white bg-opacity-10 text-lg font-medium ">
          {title}
        </div>
        <div className="text-3xl text-boldPink dark:text-mediumPinkDark font-extrabold tracking-tight sm:text-xl">$ {amount}</div>
      </div>
    </div>
  );
}
