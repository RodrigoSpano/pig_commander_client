"use client";
import React, { useState } from "react";
import InvestmentFormComponent from "./subcomps/InvestmentFormComponent";
import BudgetFormComponent from "./subcomps/BudgetFormComponent";
import SavingFormComponent from "./subcomps/SavingFormComponent";
import GraphComponent from "./subcomps/GraphComponent";
import AdviceComponent from "./AdviceComponent";

export default function ManagmentComponent() {
  const [form, setForm] = useState("Investment");
  const [isOpen, setIsOpen] = useState(false);
  const [selectOpt, setSelect] = useState("opt1");

  const handleButtonClick = (e) => {
    switch (e.target.name) {
      case "Investment": {
        setForm("Investment");
        break;
      }
      case "Saving": {
        setForm("Saving");
        break;
      }
      case "Budget": {
        setForm("Budget");
        break;
      }
      default: {
        break;
      }
    }
  };

  const componentRender = () => {
    switch (form) {
      case "Investment": {
        return <InvestmentFormComponent />;
      }
      case "Saving": {
        return <SavingFormComponent />;
      }
      case "Budget": {
        return <BudgetFormComponent />;
      }
      default: {
        return null;
      }
    }
  };

  return (
    <div>
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap h-screen">
          {/* nav component */}
          <div className="row-span-1 lg:col-span-2 md:col-span-3 shadow-lg rounded-2xl bg-white lg:m-5 md:m-5 sm:m-2 h-4/6">
            <div className="text-xl font-bold text-gray-900 p-4 flex flex-row justify-between items-center h-full">
              <div className="inline-block mr-2 text-3xl">Select your</div>
              <div className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block text-3xl">
                <div className="relative text-white lg:text-5xl sm:text-2xl">
                  {form}
                </div>
              </div>
              <div>
                <select
                  id="select"
                  name="select"
                  className="mt-1  hover:from-boldPink hover:to-regularPink border-gray-300 rounded-sm shadow-sm focus:ring bg-gradient-to-r from-regularPink to-boldPink text-white focus:ring-opacity-50 p-1 "
                  onChange={(e) => setSelect(e.target.value)}
                >
                  <option className="text-black" value="select-none">
                    Select
                  </option>
                  <option className="text-black" value="opt1">
                    option 1
                  </option>
                  <option className="text-black" value="opt2">
                    option 2
                  </option>
                  <option className="text-black" value="opt3">
                    option 3
                  </option>
                </select>
              </div>
            </div>
          </div>
          {/* select method component */}
          <div className="row-span-1 md:col-span-3 lg:col-span-1 shadow-lg rounded-2xl bg-white ml-5 mr-5 mt-5 sm:mb-2 md:mb-3 lg:mb-0 border-1 flex justify-start items-center pb-4 md:pt-4 sm:pt-1">
            <div className="flex-column pl-4 pr-4 w-full">
              <div className="lg:text-3xl md:text-lg sm:text-sm font-bold text-gray-900 items-center text-left w-full mb-4 ">
                Select Method:
              </div>
              <div className="flex flex-row w-full items-center justify-center">
                <button
                  className="text-sm bg-gradient-to-r from-regularPink to-boldPink  hover:from-boldPink hover:to-regularPink text-white rounded-sm px-5 py-2 mr-1 w-1/3 font-extrabold tracking-widest"
                  name="Investment"
                  onClick={handleButtonClick}
                >
                  Investment
                </button>
                <button
                  className="text-sm bg-gradient-to-r from-regularPink to-boldPink  hover:from-boldPink hover:to-regularPink text-white rounded-sm px-5 py-2  w-1/3 font-extrabold tracking-widest"
                  name="Saving"
                  onClick={handleButtonClick}
                >
                  Saving
                </button>
                <button
                  className="text-sm bg-gradient-to-r from-regularPink to-boldPink  hover:from-boldPink hover:to-regularPink text-white rounded-sm px-5 py-2 ml-1  w-1/3 font-extrabold tracking-widest"
                  name="Budget"
                  onClick={handleButtonClick}
                >
                  Budget
                </button>
              </div>
            </div>
          </div>
          {/* graphic component */}
          <div className="lg:row-span-6 lg:col-span-2 md:row-span-4 md:col-span-3 md:mt-4 sm:col-span-3 sm:row-span-4 shadow-lg rounded-2xl bg-white ml-5 mr-5 mb-5">
            <GraphComponent option={selectOpt} />
          </div>
          <div className="relative row-span-3 shadow-lg rounded-2xl bg-white mr-5 ml-5 mt-5 flex flex-col p-3 object-center justify-center">
            <h1 className="xl:text-5xl lg:text-3xl sm:text-xl font-extrabold text-gray-900 ml-2 xl:tracking-wide lg:tracking-normal sm:tracking-tighter absolute top-4">
              {form}
            </h1>
            <div>{componentRender()}</div>
          </div>
          {/* advice component */}
          <div className="lg:row-span-3 md:row-span-3 sm:row-span-3 shadow-lg rounded-2xl bg-white m-5 border-1 flex flex-col justify-center items-center">
            <div>See investment advice</div>
            <AdviceComponent />
            <div>See investment advice</div>
          </div>
        </div>
      </div>
    </div>
  );
}
