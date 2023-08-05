import React from "react";

export default function InvestmentFormComponent() {
  return (
    <div>
      <div className="m-5 text-lg text-boldPink font-bold">Create New:</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full h-full">
        <div className="column-span-1">
          <div className="border-1 m-2">Name</div>
          <input
            className="border-1 m-2 bg-slate-200 rounded-2xl h-10 w-11/12"
            placeholder="Enter Name"
          ></input>
        </div>
        <div className="column-span-1">
          <div className="border-1 m-2">Starting Amount</div>
          <div className="flex flex-row">
            <select className="border-1 m-2 bg-slate-200 rounded-2xl h-10" ></select>
            <input
              className="border-1 m-2 bg-slate-200 rounded-2xl h-10 w-3/4"
              placeholder="Enter Amount"
            ></input>
          </div>
        </div>

        <div className="coulmn-span-1">
          <div className="border-1 m-2">Saving Period</div>
          <div className="flex flex-row">
            <select className="border-1 m-2 bg-slate-200 rounded-2xl h-10" ></select>
            <input
              className="border-1 m-2 bg-slate-200 rounded-2xl h-10 w-3/4"
              placeholder="Select Period"
            ></input>
          </div>
        </div>
        <div className="column-span-1">
          <div className="border-1 m-2">Cost Effectiveness</div>
          <div className="flex flex-row">
            <select className="border-1 m-2 bg-slate-200 rounded-2xl h-10" ></select>
            <input
              className="border-1 m-2 bg-slate-200 rounded-2xl h-10 w-3/4"
              placeholder="Select Period"
            ></input>
          </div>
        </div>

        <div className="column-span-1 flex flex-row">
          <button className="border-1 m-2 bg-slate-200 rounded-2xl h-10 w-1/2">Yes</button>
          <button className="border-1 m-2 bg-slate-200 rounded-2xl h-10 w-1/2">No</button>
        </div>
        <div className="column-span-1">
          <input
            className="border-1 m-2 bg-slate-200 rounded-2xl h-10  w-11/12"
            placeholder="Enter Taxes"
          >
          </input>
          
        </div>
        <button className="text-sm bg-gradient-to-r from-regularPink to-boldPink text-white rounded-2xl px-5 py-2 mx-2">
              Submit
            </button>
      </div>
    </div>
  );
}
