"use client";
import React, { useEffect, useState } from "react";
import InvestmentFormComponent from "./subcomps/InvestmentFormComponent";
import BudgetFormComponent from "./subcomps/BudgetFormComponent";
import SavingFormComponent from "./subcomps/SavingFormComponent";

import AdviceComponent from "./AdviceComponent";

export default function ManagmentComponent() {
  const [form, setForm] = useState("Investment");

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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap h-screen">
          <div className="row-span-1 col-span-2 shadow-lg rounded-2xl bg-white m-5 border-1 h-{15vh}">
            <div className="text-xl font-bold text-gray-900 p-3 flex flex-row justify-between items-center h-full">
              <div className="inline-block mr-2 text-3xl">Select your</div>
              <div className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block text-3xl">
                <div className="relative text-white text-5xl">{form}</div>
              </div>
              <div>
                <select
                  id="select"
                  name="select"
                  className="mt-1 border-gray-300 rounded-md shadow-sm focus:ring bg-gradient-to-r from-regularPink to-boldPink text-white focus:ring-opacity-50  "
                >
                  <option className="text-black" value="select-none">
                    Select
                  </option>
                  <option className="text-black" value="option3">
                    option 1
                  </option>
                  <option className="text-black" value="option3">
                    option 2
                  </option>
                  <option className="text-black" value="option3">
                    option 3
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className="row-span-1 shadow-lg rounded-2xl bg-white m-5 border-1 flex justify-center items-center h-{20vh} ">
            <div className="flex-column p-3">
              <div className="text-3xl font-bold text-gray-900 items-center text-center w-full mb-2">
                Select Method:
              </div>
              <div className="flex-row  w-full  items-center">
                <button
                  className="text-sm bg-gradient-to-r from-regularPink to-boldPink text-white rounded-2xl px-5 py-2 mx-2"
                  name="Investment"
                  onClick={handleButtonClick}
                >
                  Investment
                </button>
                <button
                  className="text-sm bg-gradient-to-r from-regularPink to-boldPink text-white rounded-2xl px-5 py-2 mx-2"
                  name="Saving"
                  onClick={handleButtonClick}
                >
                  Saving
                </button>
                <button
                  className="text-sm bg-gradient-to-r from-regularPink to-boldPink text-white rounded-2xl px-5 py-2 mx-2"
                  name="Budget"
                  onClick={handleButtonClick}
                >
                  Budget
                </button>
              </div>
            </div>
          </div>
          <div className="row-span-6 col-span-2 shadow-lg rounded-2xl bg-white m-5 border-1">
            graphs
          </div>
          <div className="row-span-3 shadow-lg rounded-2xl bg-white m-5 border-1 flex p-3">
            <div className="flex-column">
              <h1 className="text-5xl font-bold text-gray-900 justify-content-center">
                {form}
              </h1>
              <div>{componentRender()}</div>
            </div>
          </div>
          <div className="row-span-3 shadow-lg rounded-2xl bg-white m-5 border-1 flex flex-col justify-center items-center">
            <div>See investment advice</div>
            <AdviceComponent />
            <div>See investment advice</div>
          </div>
        </div>
      </div>
    </div>
  );
}
