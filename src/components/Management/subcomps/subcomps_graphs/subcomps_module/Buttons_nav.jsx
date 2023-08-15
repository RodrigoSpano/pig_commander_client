import React, { useState } from "react";

export default function buttons_nav() {
  const [optSelected, setOptSelected] = useState("7");

  const handleButtonClick = (e) => {
    setOptSelected(e.target.value);
  };

  return (
    <div className="justify-between flex flex-row">
      <div >Select time frame...</div>
      <div className="flex flex-row">
        <button
          value={"1"}
          className={`ml-2 text-black bg-black bg-opacity-10 rounded-sm h-12 w-1/2 font-extrabold ${
            optSelected === "1"
              ? "bg-gradient-to-r from-regularPink to-boldPink hover:from-boldPink hover:to-regularPink"
              : "hover:bg-opacity-20 hover:cursor-pointer"
          }`}
          onClick={handleButtonClick}
        >
          1 Day
        </button>
        <button
          value={"2"}
          className={`ml-2 text-black bg-black bg-opacity-10 rounded-sm h-12 w-1/2 font-extrabold ${
            optSelected === "2"
              ? "bg-gradient-to-r from-regularPink to-boldPink hover:from-boldPink hover:to-regularPink"
              : "hover:bg-opacity-20 hover:cursor-pointer"
          }`}
          onClick={handleButtonClick}
        >
          1 Week
        </button>
        <button
          value={"3"}
          className={`ml-2 text-black bg-black bg-opacity-10 rounded-sm h-12 w-1/2 font-extrabold ${
            optSelected === "3"
              ? "bg-gradient-to-r from-regularPink to-boldPink hover:from-boldPink hover:to-regularPink"
              : "hover:bg-opacity-20 hover:cursor-pointer"
          }`}
          onClick={handleButtonClick}
        >
          1 Month
        </button>
        <button
          value={"4"}
          className={`ml-2 text-black bg-black bg-opacity-10 rounded-sm h-12 w-1/2 font-extrabold ${
            optSelected === "4"
              ? "bg-gradient-to-r from-regularPink to-boldPink hover:from-boldPink hover:to-regularPink"
              : "hover:bg-opacity-20 hover:cursor-pointer"
          }`}
          onClick={handleButtonClick}
        >
          1 Year
        </button>
        <button
          value={"5"}
          className={`ml-2 text-black bg-black bg-opacity-10 rounded-sm h-12 w-1/2 font-extrabold ${
            optSelected === "5"
              ? "bg-gradient-to-r from-regularPink to-boldPink hover:from-boldPink hover:to-regularPink"
              : "hover:bg-opacity-20 hover:cursor-pointer"
          }`}
          onClick={handleButtonClick}
        >
          2 Years
        </button>
        <button
          value={"6"}
          className={`ml-2 text-black bg-black bg-opacity-10 rounded-sm h-12 w-1/2 font-extrabold ${
            optSelected === "6"
              ? "bg-gradient-to-r from-regularPink to-boldPink hover:from-boldPink hover:to-regularPink"
              : "hover:bg-opacity-20 hover:cursor-pointer"
          }`}
          onClick={handleButtonClick}
        >
          5 Years
        </button>
        <button
          value={"7"}
          className={`ml-2 text-black bg-black bg-opacity-10 rounded-sm h-12 w-1/2 font-extrabold ${
            optSelected === "7"
              ? "bg-gradient-to-r from-regularPink to-boldPink hover:from-boldPink hover:to-regularPink"
              : "hover:bg-opacity-20 hover:cursor-pointer"
          }`}
          onClick={handleButtonClick}
        >
          All
        </button>
      </div>
    </div>
  );
}
