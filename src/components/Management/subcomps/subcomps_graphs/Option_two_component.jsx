import React, { useEffect, useState } from "react";
import SavingsTableComponent from "./subcomps_module/SavingsTableComponent.jsx";
import AddSavForm from "./AddSavForm.jsx";
import Donut from "./Donut.jsx";
import { useSelector } from "react-redux";

export default function Option_two_component() {
  const [selectedSaving, setSelected] = useState(-1);
  const [isLoading, setLoading] = useState(true);
  const savings = useSelector((state) => state.savings.allSavings);

  const setSelectedSaving = (data) => {
    if (savings.length === 0) {
      setSelected(-1);
    } else {
      setSelected(data);
    }
  };

  const titulo =
    selectedSaving >= 0 && savings[selectedSaving]
      ? savings[selectedSaving].name
      : "Select a Saving";
  const goal =
    selectedSaving >= 0 && savings[selectedSaving]
      ? parseFloat(savings[selectedSaving].goal)
      : 0.0;
  const amount =
    selectedSaving >= 0 && savings[selectedSaving]
      ? parseFloat(savings[selectedSaving].amount)
      : 0.0;
  const id =
    selectedSaving >= 0 && savings[selectedSaving]
      ? savings[selectedSaving].id
      : "Id";

  return (
    <div>
      <div className="text-center mt-8 text-boldPink dark:text-mediumPinkDark font-extrabold tracking-tight sm:text-3xl mb-2 capitalize">{titulo}</div>
      <div className="grid grid-cols-2 border-[1px] border-dashed m-4">
        <div className="h-[250px] col-span-1 m-3 ml-14 ">
          <Donut index={selectedSaving} />
        </div>
        <div className="cols-span-1">
          <div className="m-3 text-2xl font-normal text-center  text-gray-500 dark:text-white  bg-opacity-10 ">
            Goal
          </div>
          <div className="m-3 text-3xl font-bold text-center  text-boldPink dark:text-mediumPinkDark">
            $ {goal.toLocaleString()}
          </div>
          <div className="m-3 text-2xl font-normal text-center  text-gray-500 dark:text-white  bg-opacity-10 ">
            Current
          </div>
          <div className="m-3 text-3xl font-bold text-center  text-boldPink dark:text-mediumPinkDark">
            $ {amount.toLocaleString()}
          </div>
          <div className=" mt-5 content-center text-xl">
            <AddSavForm id={id} index={selectedSaving} />
          </div>
        </div>
      </div>
      <hr className="mt-2"></hr>
      <div className="text-xl font-bold mt-4 text-center text-gray-600">Last income</div>
      <div>
        <SavingsTableComponent setSelectedSaving={setSelectedSaving} />
      </div>
    </div>
  );
}
