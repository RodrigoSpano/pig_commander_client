"use client";
import React, { useEffect } from "react";
import { FiAlertCircle } from "react-icons/fi";
import useFormWallet from "@/customHooks/useFormWallet";
import { useSelector } from "react-redux";

export default function FormWallet() {
  const categories = useSelector((state) => state.others.categories);
  const methods = useSelector((state) => state.others.methods);

  const {
    formWallet,
    inputInvalids,
    handleChange,
    someFieldEmpty,
    allowAmountErrorMessage,
    allowNameErrorMessage,
    focusedAmountInput,
    focusedNameInput,
    handleSubmitExpense,
    handleSubmitIncome,
  } = useFormWallet();

  return (
    <div className="flex flex-col items-center h-3">
      <div className="bg-mediumPink w-full rounded-t-lg pb-1 text-mediumPink">
        h
      </div>
      <h1 className="text-2xl font-bold mt-5 m-2.5">Transaction Form</h1>
      <div className="flex flex-row mt-2 h">
        <div className="flex flex-col mr-2.5">
          <p className="text-boldGray text-lg ">Name</p>
          <input
            className="bg-lightGray h-10 placeholder-black font-light rounded-lg  p-1.5 w-40 relative focus:outline-none active:outline-none"
            autoComplete="off"
            type="text"
            name="name"
            value={formWallet.name}
            onChange={handleChange}
            onFocus={allowNameErrorMessage}
            placeholder="Enter name..."
          />
        </div>
        <div className="flex flex-col">
          <p className="text-boldGray text-lg ">Amount</p>
          <input
            className="bg-lightGray h-10 placeholder-black font-light rounded-lg text-l p-1.5 w-40 relative focus:outline-none active:outline-none"
            autoComplete="off"
            type="number"
            name="amount"
            value={formWallet.amount}
            onChange={handleChange}
            onFocus={allowAmountErrorMessage}
            placeholder="$"
          />
        </div>
      </div>
      <div class={"min-h-[15px]"}>
        <p className="text-red-400 relative mt-2 text-l">
          {inputInvalids && (focusedNameInput || focusedAmountInput) ? (
            "These fields are required"
          ) : (
            <span></span>
          )}
        </p>
      </div>

      <div className="flex flex-row m-2.5 mt-5">
        <div className="flex flex-col mr-2.5 ">
          <label className="text-boldGray text-lg">Method:</label>
          <select
            className="text-l w-40 bg-lightGray font-light rounded-lg p-1.5"
            name="method_id"
            id="selects"
            onChange={handleChange}
            value={formWallet.method_id}
          >
            {methods.length
              ? methods.map((method) => (
                  <option key={method.id} value={method.id}>
                    {method.name}
                  </option>
                ))
              : null}
          </select>
        </div>
        <div className="flex flex-col ">
          <label className="text-boldGray text-lg">Categories:</label>
          <select
            className="text-l w-40 bg-lightGray font-light rounded-lg p-1.5 capitalize"
            name="category_id"
            id="selects"
            value={formWallet.category_id}
            onChange={handleChange}
          >
            {categories.length
              ? categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))
              : null}
          </select>
        </div>
      </div>

      <div className="flex flex-row mt-2">
        <div className="mt-5 self-center mr-1.5">
          <FiAlertCircle />{" "}
        </div>
        <span className="text-boldGray text-sm font-light mt-5">
          Only premium members
        </span>
      </div>
      <div className="flex flex-row mt-2.5">
        <button className="text-white h-8 w-32 mr-1.5 font-bold rounded-2xl cursor-no-drop text-sm bg-regularGray">
          Automatized
        </button>
        <button className="text-white h-8 w-32 font-bold cursor-no-drop rounded-2xl text-sm bg-regularGray">
          AutoDate
        </button>
        {/* <Switch defaultSelected color="success">Success</Switch> */}
      </div>
      <div className="mt-5">
        <button
          className={`text-white h-10 w-32 font-bold cursor-no-drop mr-5 rounded-2xl mt-8 text-base ${
            someFieldEmpty
              ? "bg-regularGray"
              : " cursor-pointer bg-gradient-to-r from-regularPink  to-boldPink"
          } `}
          disabled={someFieldEmpty}
          onClick={handleSubmitIncome}
        >
          Add Income
        </button>
        <button
          className={`text-white h-10 w-32 font-bold cursor-no-drop rounded-2xl mt-8 text-base ${
            someFieldEmpty
              ? "bg-regularGray"
              : " cursor-pointer bg-gradient-to-r from-regularPink  to-boldPink"
          } `}
          disabled={someFieldEmpty}
          onClick={handleSubmitExpense}
        >
          Add Expense
        </button>
      </div>
    </div>
  );
}
