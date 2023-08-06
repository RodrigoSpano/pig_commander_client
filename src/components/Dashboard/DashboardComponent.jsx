"use client";
import React from "react";
import TransactionsComponent from "../Transactions/TransactionsComponent";
import {  useSelector } from "react-redux";


export default function DashboardComponent() {
  const user = useSelector((state) => state.user);
  return (
        <div className="flex flex-col gap-5 pt-3 px-10">
          <div className="grid grid-cols-1 sm:grid-cols-12 h-2/5 gap-5">
            <div className="col-span-5 flex flex-col pl-6">
              <div className="font-bold text-4xl leading-normal text-slate-900 mt-10 ">
                Welcome Back {user.name.replace(/^\w/, (c) => c.toUpperCase())}
              </div>
              <div className="font-normal text-base leading-tight text-gray-500">
                Pig Commander is the most secure finance app.
              </div>
            </div>
            <div className="flex flex-row bg-white rounded-lg shadow-md col-span-4 gap-10 h-[120px] ">
              <div className="rounded-tl-2xl rounded-bl-2xl w-3 h-full bg-pink-400"></div>
              <div className="flex flex-col justify-between py-2 w-full">
                <p className="text-[#AFAFAF] text-base font-Poppins font-medium">
                  My Balance
                </p>
                <span className="text-strongPink text-5xl font-Poppins font-bold text-right pr-5 ">
                  $255.000,00
                </span>
              </div>
            </div>
              <div className="bg-white rounded-lg shadow-md row-span-3 col-span-3  flex flex-col justify-center items-center">
                <div className="w-[120px] h-[120px] rounded-full mx-auto bg-gray-950 flex items-center justify-center">
                </div>
                <span className="text-24 font-bold">Nombre del Usuario</span>
              </div>
            <div className=" bg-white rounded-lg shadow-md flex gap-10 flex-row col-span-3 row-span-2 h-[100px]">
              <div className="rounded-tl-2xl rounded-bl-2xl w-3 h-full bg-pink-400"></div>

              <div className="flex flex-col justify-evenly ">
              <p className="text-[#AFAFAF] text-base font-Poppins font-medium">
                  Expenses
                </p>
                <span className="text-[#15223C] text-[20px] font-semibold">
                  $155.000
                </span>
              </div>
            </div>
            <div className=" bg-white rounded-lg shadow-md gap-10 flex flex-row col-span-3 row-span-2 h-[100px]">
              <div className="rounded-tl-2xl rounded-bl-2xl w-3 h-full bg-pink-400"></div>
              <div className="flex flex-col justify-evenly">
                <p className="text-[#AFAFAF] text-base font-Poppins font-medium">
                  Income
                </p>
                <span className="text-[#15223C] text-[20px] font-semibold">
                  $75.00
                </span>
              </div>
            </div>
            
            <div className=" bg-white rounded-lg shadow-md gap-10 flex flex-row col-span-3 row-span-2  h-[100px]">
              <div className="rounded-tl-2xl rounded-bl-2xl w-3 h-full bg-pink-400"></div>
              <div className="flex flex-col justify-evenly">
                <p className="text-[#AFAFAF] text-base font-Poppins font-medium">
                  Savings
                </p>
                <span className="text-[#15223C] text-[20px] font-semibold">
                  $93.222
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 h-3/5 gap-5">
            <div className="col-span-3 row-span-5 bg-white rounded-lg shadow-md h-[330px]">
              myJournal
            </div>
            <TransactionsComponent />
            
            <div className=" bg-white rounded-lg shadow-md ">myGraph</div>
          </div>
        </div>
  );
}
