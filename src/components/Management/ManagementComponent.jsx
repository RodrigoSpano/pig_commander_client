import React from "react";
import InvestmentFormComponent from "./InvestmentFormComponent";
import AdviceComponent from "./AdviceComponent";

export default function ManagmentComponent() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 h-screen">
          <div className="row-span-1 col-span-2 shadow-lg rounded-2xl bg-white m-5 border-1 h-fit">
            <div className="text-xl font-bold text-gray-900 p-3">
              <div className="inline-block mr-2 ">Select your</div>
              <div className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
                <div className="relative text-white">Investment</div>
              </div>
              <div>
                <select
                  id="select"
                  name="select"
                  className="mt-1 border-gray-300 rounded-md shadow-sm focus:ring bg-gradient-to-r from-regularPink to-boldPink text-white focus:ring-opacity-50 inline-block"
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
          <div className="row-span-1 shadow-lg rounded-2xl bg-white m-5 border-1 h-fit flex ">
            <div className="flex-column p-3">
              <div className="text-xl font-bold text-gray-900 items-center text-center w-full">
                Select Method:
              </div>
              <div className="flex-row  w-full  items-center">
                <button className="text-sm bg-gradient-to-r from-regularPink to-boldPink text-white rounded-2xl px-5 py-2 mx-2">
                  Investment
                </button>
                <button className="text-sm bg-gradient-to-r from-regularPink to-boldPink text-white rounded-2xl px-5 py-2 mx-2">
                  Saving
                </button>
                <button className="text-sm bg-gradient-to-r from-regularPink to-boldPink text-white rounded-2xl px-5 py-2 mx-2">
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
              <h1 className="text-xl font-bold text-gray-900 justify-content-center">
                Investment
              </h1>
              <div>
                <InvestmentFormComponent />
              </div>
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
