import React, { useState } from "react";
import Inputs from "./subcomps_forms/imputs";

export default function InvestmentFormComponent() {
  const [disableInput, setDisableInput] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (disable) => {
    setDisableInput(disable);
  };
  const handleButtonClick2 = (button) => {
    setSelectedButton(button);
  };

  return (
    <div>
      <div className="mt-5 ml-2 text-3xl text-boldPink font-extrabold tracking-tight sm:text-xl">
        Create New:
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full h-full sm:gap-1 ">
        <div className="column-span-1">
          <div className="ml-2 mt-2 text-black text-opacity-50 text-lg font-normal">
            Name
          </div>
          <input
            className=" ml-2 pl-2 text-gray-500 bg-black bg-opacity-10 rounded-sm h-12 w-11/12 "
            placeholder="Enter Name"
          ></input>
        </div>

        <Inputs title={"Starting Amount"} icon={"$"} id={'Start'} />
        <Inputs title={"Saving Period"} icon={""} id={'Long'} />
        <Inputs title={"Cost Effectiveness"} icon={"%"} id={"effectiveness"}/>

        <div className="col-span-2 ml-2 text-black text-opacity-50 text-lg font-normal">
          Taxes
        </div>
        <div className="column-span-1 flex flex-row">
          <button
            className={`ml-2 text-black bg-black bg-opacity-10 rounded-sm h-12 w-1/2 font-extrabold ${
              selectedButton === "Yes"
                ? "bg-gradient-to-r from-regularPink to-boldPink hover:from-boldPink hover:to-regularPink"
                : "hover:bg-opacity-20 hover:cursor-pointer"
            }`}
            onClick={() => {
              handleButtonClick(false);
              handleButtonClick2("Yes");
            }}
          >
            Yes
          </button>
          <button
            className={`ml-2 text-black bg-black bg-opacity-10 rounded-sm h-12 w-1/2 font-extrabold ${
              selectedButton === "No"
                ? "bg-gradient-to-r from-regularPink to-boldPink hover:from-boldPink hover:to-regularPink"
                : "hover:bg-opacity-20 hover:cursor-pointer"
            }`}
            onClick={() => {
              handleButtonClick(true);
              handleButtonClick2("No");
            }}
          >
            No
          </button>
        </div>
        <div className="column-span-1 relative">
          <div className="flex flex-row">
            <input
              className=" ml-2 pl-2 text-gray-500 bg-black bg-opacity-10 rounded-sm h-12  w-11/12  pr-10"
              placeholder="Enter Taxes"
              disabled={disableInput}
              required
            ></input>
            <span className="mt-4 font-extrabold text-lg absolute inset-y-0 right-4 -top-1 ">
              %
            </span>
          </div>
        </div>
        <button className=" mt-4 text-lg bg-gradient-to-r from-regularPink to-boldPink  hover:from-boldPink hover:to-regularPink text-white rounded-sm px-5 py-2 mx-2 font-extrabold tracking-widest">
          Submit
        </button>
      </div>
    </div>
  );
}
