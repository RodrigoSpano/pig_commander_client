import React, { useEffect, useState } from "react";
import SavingsTableComponent from "./subcomps_module/SavingsTableComponentEs.jsx";
import AddSavForm from "./AddSavFormEs.jsx";
import Donut from "./DonutEs.jsx";
import { useSelector } from "react-redux";

export default function Option_two_componentEs() {
  const [selectedSaving, setSelected] = useState(-1);
  const [isLoading, setLoading] = useState(true);
  const savings = useSelector((state) => state.savings.allSavings);

  const setSelectedSaving = (data) => {
    if ((savings.length === 0)) {
      setSelected(-1);
    } else {
      setSelected(data);
    }
  };

  const titulo =
  selectedSaving >= 0 && savings[selectedSaving] ? savings[selectedSaving].name : "Selecciona un Ahorro";
const goal =
  selectedSaving >= 0 && savings[selectedSaving] ? parseFloat(savings[selectedSaving].goal) : 0.0;
const amount =
  selectedSaving >= 0 && savings[selectedSaving] ? parseFloat(savings[selectedSaving].amount) : 0.0;
const id =
  selectedSaving >= 0 && savings[selectedSaving] ? savings[selectedSaving].id : "Id";


  return (
    <div>
      <div className="text-4xl font-bold m-5 text-center">{titulo}</div>
      <div className="grid grid-cols-2">
        <div className="h-[300px] col-span-1 m-3 ml-14 ">
          <Donut index={selectedSaving} />
        </div>
        <div className="cols-span-1">
          <div className="m-3 text-2xl font-normal text-center  text-gray-500  bg-opacity-10 ">
            Meta
          </div>
          <div className="m-3 text-5xl font-bold text-center  text-boldPink">
            $ {goal}
          </div>
          <div className="m-3 text-2xl font-normal text-center  text-gray-500  bg-opacity-10 ">
            Actual
          </div>
          <div className="m-3 text-5xl font-bold text-center  text-boldPink">
            $ {amount}
          </div>
          <div className="m-3 mt-5 content-center text-xl">
            <AddSavForm id={id} index={selectedSaving} />
          </div>
        </div>
      </div>
      <div className="text-3xl font-bold m-3 text-center">Último ingreso</div>
      <div>
        <SavingsTableComponent setSelectedSaving={setSelectedSaving} />
      </div>
    </div>
  );
}
