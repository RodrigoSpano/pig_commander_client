"use client";
import { useEffect, useState } from "react";
import GraphComponent from "./subcomps/GraphComponent";
import AdviceComponent from "./AdviceComponent";
import LoaderComponent from "../Loader/LoaderComponent";
import { useSelector } from "react-redux";
import NavComponent from "./subcomps/NavComponent";
import InvestmentFormComponentEs from "./subcompsEs/subcomps_graphsEs/InvestmentFormComponentEs";
import SavingFormComponentEs from "./subcompsEs/subcomps_graphsEs/SavingFormComponentEs";
import SelectMethodEs from "./subcompsEs/subcomps_graphsEs/SelectMethodEs";

export default function ManagmentComponentEs() {
  const [form, setForm] = useState("Inversiones");
  const [isLoading, setIsLoading] = useState(true);
  const [selectOpt, setSelect] = useState("opt1");
  const user = useSelector((state) => state.user.logged);

  const handleButtonClick = (e) => {
    switch (e.target. name) {
      case "Inversiones": {
        setForm("Inversiones");
        setSelect('opt1')
        break;
      }
      case "Ahorros": {
        setForm("Ahorros");
        setSelect('opt2')
        break;
      }
      default: {
        break;
      }
    }
  };

  const componentRender = () => {
    switch (form) {
      case "Inversiones": {
        return <InvestmentFormComponentEs />;
      }
      case "Ahorros": {
        return <SavingFormComponentEs />;
      }
      default: {
        return null;
      }
    }
  };

  useEffect(() => {
    if (user) {
      setIsLoading(false);
    }
  }, [user]);

  return (
    <>
      {isLoading ? (
        <LoaderComponent />
      ) : (
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap h-screen">
            {/* nav component */}
              <NavComponent form={form} />
            {/* select method component */}
              <SelectMethodEs handleButtonClick={handleButtonClick} />
            {/* graphic component */}
            <div className="row-span-6 col-span-2 shadow-lg rounded-2xl bg-white ml-5 mr-5 mb-5">
              <GraphComponent option={selectOpt} />
            </div>
            <div className="relative row-span-3 shadow-lg rounded-2xl bg-white mr-5 ml-5 mt-5 flex flex-col p-3 object-center justify-center">
              <h1 className="text-6xl font-extrabold text-gray-900 ml-2 tracking-wide absolute top-4">
                {form}
              </h1>
              <div>{componentRender()}</div>
            </div>
            {/* advice component */}
            <div className="row-span-3 shadow-lg rounded-2xl bg-white m-5 border-1 flex flex-col justify-center items-center">
              <AdviceComponent />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
