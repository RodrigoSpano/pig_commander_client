"use client";
import React, { useEffect, useState } from "react";
import InvestmentFormComponent from "./subcomps/InvestmentFormComponent";
import SavingFormComponent from "./subcomps/SavingFormComponent";
import GraphComponent from "./subcomps/GraphComponent";
import AdviceComponent from "./AdviceComponent";
import LoaderComponent from "../Loader/LoaderComponent";
import { useSelector } from "react-redux";

export default function ManagmentComponent() {
  const [form, setForm] = useState("Investment");
  const [isLoading, setIsLoading] = useState(true);
  const [selectOpt, setSelect] = useState("opt1");
  const user = useSelector((state) => state.user.logged);

  const handleButtonClick = (e) => {
    switch (e.target.name) {
      case "Investment": {
        setForm("Investment");
        setSelect('opt1')
        break;
      }
      case "Saving": {
        setForm("Saving");
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
      case "Investment": {
        return <InvestmentFormComponent />;
      }
      case "Saving": {
        return <SavingFormComponent />;
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
            <div className="row-span-1 col-span-2 shadow-lg rounded-2xl bg-white m-5 h-4/6">
              <div className="text-xl font-bold text-gray-900 p-4 items-center h-full grid grid-cols-3">
                <div className="inline-block mr-2 text-3xl grid-span-1">
                  Select your
                </div>

                <div className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block text-3xl grid-cols-1">
                  {/* cuadrito rosa */}
                  <div className="w-full flex flex-initial justify-center">
                    <div className="relative text-white text-5xl">{form}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* select method component */}
            <div className="row-span-1 shadow-lg rounded-2xl bg-white ml-5 mr-5 mt-5 border-1 flex justify-start items-center pb-4 pt-4">
              <div className="flex-column pl-4 pr-4 w-full">
                <div className="text-3xl font-bold text-gray-900 items-center text-left w-full mb-4 ">
                  Select Method:
                </div>
                <div className="flex flex-row w-full items-center justify-center">
                  <button
                    className="text-sm bg-gradient-to-r from-regularPink to-boldPink text-white rounded-sm px-5 py-2 mr-1 w-1/2 font-extrabold tracking-widest"
                    name="Investment"
                    onClick={handleButtonClick}
                  >
                    Investment
                  </button>
                  <button
                    className="text-sm bg-gradient-to-r from-regularPink to-boldPink text-white rounded-sm px-5 py-2  w-1/2 font-extrabold tracking-widest"
                    name="Saving"
                    onClick={handleButtonClick}
                  >
                    Saving
                  </button>
                </div>
              </div>
            </div>
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
              <div>See investment advice</div>
              <AdviceComponent />
              <div>See investment advice</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
