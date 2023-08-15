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
  <div className="mt-5 ml-2 text-3xl sm:text-xl font-extrabold tracking-tight text-boldPink">
    Create New Goal:
  </div>
  <div className="grid grid-cols-1 gap-2 w-full h-full">
    <div className="col-span-1">
      <div className="ml-2 mt-2 text-black text-opacity-50 text-lg font-normal">
        Name
      </div>
      <input
        className="ml-2 pl-2 text-gray-500 bg-black bg-opacity-10 rounded-sm h-12 sm:w-2/5 w-full"
        placeholder="Enter Name"
      />
      <div className="w-5/12 sm:w-full">
        <Inputs title={"Set a goal amount"} icon={"$"} />
      </div>
      <div className="m-2 ml-2 mt-2 text-black text-opacity-50 text-lg font-normal">
        Goal deadline
      </div>

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

      <button className="mt-4 text-lg bg-gradient-to-r from-regularPink to-boldPink text-white rounded-sm px-5 py-2 mx-2 font-extrabold tracking-widest">
        Submit
      </button>
    </div>
  </div>
</div>
  );
}
