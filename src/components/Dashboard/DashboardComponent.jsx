"use client";
import React from "react";
import usePagination from "@/customHooks/usePagination";
import TransactionsComponent from "../Transactions/TransactionsComponent";
import PaginationComponent from "../Pagination/PaginationComponent";
import { useSelector } from "react-redux";

export default function DashboardComponent() {
  const user = useSelector((state) => state.user);
  return (
    <>
      <div>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-12 h-2/5">
            <div className="col-span-5 flex flex-col p-3vh 0 0 2vh ml-6">
              <div className="font-bold text-4xl leading-normal text-slate-900 mt-10 ">
                Welcome Back {user.name.replace(/^\w/, (c) => c.toUpperCase())}
              </div>
              <div className="font-normal text-base leading-tight text-gray-500">
                Pig Commander is the most secure finance app.
              </div>
            </div>
            <div className="flex flex-row bg-white rounded-lg shadow-md mt-10 col-span-4 ">
              <div className="rounded-tl-2xl rounded-bl-2xl w-3 h-full bg-pink-400"></div>
              <div className="flex flex-col p-13 pl-8">
                <div className="text-slate-950  text-xl font-semibold pl-7vw">
                  My Balance
                </div>
                <div className="text-regularPink text-4xl font-semibold pl-7vw">
                  $255.000,00
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md m-5 row-span-3 col-span-3">
              <div className="flex flex-col justify-center content-center">
                <div className="w-120 h-120 rounded-full mx-auto bg-gray-950 flex items-center justify-center">
                </div>
                <div className="text-24 font-bold">Nombre del Usuario</div>
              </div>
            </div>
            <div className=" bg-white rounded-lg shadow-md ml-5 mt-5 mb-5 flex flex-row col-span-3 row-span-2  ">
              <div className="rounded-tl-2xl rounded-bl-2xl w-3 h-full bg-pink-400"></div>
              <div className="flex flex-col p-13 pl-16">
                <div className="text-slate-950  text-xl font-semibold pl-7vw">
                  Expenses
                </div>
                <div className="text-gray-950 text-25 font-semibold pt-20%">
                  $155.000
                </div>
              </div>
            </div>
            <div className=" bg-white rounded-lg shadow-md ml-5 mt-5 mb-5 flex flex-row col-span-3 row-span-2  ">
              <div className="rounded-tl-2xl rounded-bl-2xl w-3 h-full bg-pink-400"></div>
              <div className="flex flex-col p-13 pl-16">
                <div className="text-slate-950 text-xl font-semibold pl-7vw">
                  Income
                </div>
                <div className="text-gray-950  text-25 font-semibold pt-20%">
                  $75.00
                </div>
              </div>
            </div>
            <div className=" bg-white rounded-lg shadow-md ml-5 mt-5 mb-5 flex flex-row col-span-3 row-span-2  ">
              <div className="rounded-tl-2xl rounded-bl-2xl w-3 h-full bg-pink-400"></div>
              <div className="flex flex-col p-13 pl-10">
                <div className="text-gray-950 font-poppins text-xl font-semibold pl-7vw">
                  Savings
                </div>
                <div className="text-gray-950 font-poppins text-25 font-semibold pt-20%">
                  $93.222
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 h-3/5">
            <div className="col-span-3 row-span-5 bg-white rounded-lg shadow-md ml-5 pb-24">
              myJournal
            </div>
            <div className="bg-white rounded-lg shadow-md ml-5 mt-5 col-span-2 ">
            <TransactionsComponent />
            </div>
            
            <div className=" bg-white rounded-lg shadow-md ml-5 mt-5">myGraph</div>
          </div>
        </div>
      </div>
    </>
  );
}
