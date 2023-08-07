import React from "react";
import Inputs from "./subcomps_forms/imputs";

export default function SavingFormComponent() {
  const today = new Date();
  const year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();
  if (month < 10) {
    month = `0${month}`;
  }
  if (day < 10) {
    day = `0${day}`;
  }
  const todayFormatted = `${year}-${month}-${day}`;

  return (
    <div>
      <div className="m-5 text-lg text-boldPink font-bold">Create New:</div>
      <div className="grid grid-cols-1 gap-2 w-full h-full">
        <div className="column-span-1">
          <div className="border-1 m-2">Name</div>
          <input
            className="border-1 m-2 bg-slate-200 rounded-2xl h-10 w-11/12"
            placeholder="Enter Name"
          ></input>
          <Inputs title={"Set a goal amount"} />

          <div className="border-1 m-2">Goal deadline</div>

          <div className="mb-3">
            <input
              type="date"
              id="start"
              name="goal-start"
              value="2018-07-22"
              min={todayFormatted}
              max="2030-12-31"
            />
          </div>

          <button className="text-sm bg-gradient-to-r from-regularPink to-boldPink text-white rounded-2xl px-5 py-2 mx-2">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
