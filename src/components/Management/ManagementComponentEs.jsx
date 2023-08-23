"use client";
import { useEffect, useState } from "react";
import GraphComponentEs from "./subcompsEs/GraphComponentEs";
import AdviceComponent from "./AdviceComponent";
import LoaderComponent from "../Loader/LoaderComponent";
import { useSelector } from "react-redux";
import NavComponent from "./subcomps/NavComponent";
import InvestmentFormComponentEs from "./subcompsEs/InvestmentFormComponentEs";
import SavingFormComponentEs from "./subcompsEs/SavingFormComponentEs";
import SelectMethodEs from "./subcompsEs/SelectMethodEs";

export default function ManagmentComponentEs() {
  const [form, setForm] = useState("Inversiones");
  const [isLoading, setIsLoading] = useState(true);
  const [selectOpt, setSelect] = useState("opt1");
  const user = useSelector((state) => state.user.logged);

  const handleButtonClick = (e) => {
    switch (e.target.name) {
      case "Inversiones": {
        setForm("Inversiones");
        setSelect("opt1");
        break;
      }
      case "Ahorros": {
        setForm("Ahorros");
        setSelect("opt2");
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
        <div className="flex lg:flex-row sm:flex-col gap-2.5 h-screen lg:w-full sm:w-auto">
          {/* nav component */}
          <div className="flex flex-col lg:w-2/3 sm:w-auto gap-2.5 m-3">
            <NavComponent form={form} />
            {/* graphic component */}
            <div className=" shadow-lg rounded-2xl bg-white h-full ">
              <GraphComponentEs option={selectOpt} />
            </div>
          </div>

          <div className="flex flex-col lg:w-1/3 sm:w-auto h-full gap-2.5 mr-3">
            {/* select method component */}
            <SelectMethodEs handleButtonClick={handleButtonClick} />

            <div className=" shadow-lg rounded-2xl bg-white flex flex-col p-3 object-center justify-center">
              <h1 className="lg:text-4xl md:text-2xl sm:text-xl font-extrabold text-gray-900 ml-2 tracking-wide">
                {form}
              </h1>
              {componentRender()}
            </div>
            {/* advice component */}
            <div className="shadow-lg rounded-2xl bg-white dark:bg-mediumGrayDarkMode flex flex-col justify-center items-center px-3 select-none h-full mb-3">
              <AdviceComponent />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
