"use client";
import React from "react";
import TransactionsComponent from "../Transactions/TransactionsComponent";
import StatsContainer from "./subcomps/StatsContainer";
import MyGraph from './subcomps/MyGraph/MyGraph'

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllTransactions } from "@/redux/actions/monthTransactionsActions";
import { getMethodsAction } from "@/redux/actions/otherInfoActions";
import { useCookies } from "react-cookie";

export default function DashboardComponent() {
  const dispatch = useDispatch();
  const [cookies, setCookie] = useCookies();

  useEffect(() => {
    if (cookies.token) {
      dispatch(getAllTransactions(cookies.token))
      dispatch(getMethodsAction(cookies.token))
    }
  }, []);

  return (
        <div className="flex flex-col gap-5 pt-3 px-10">
          <StatsContainer />

          <div className="grid grid-cols-1 sm:grid-cols-3 h-3/5 gap-5">
            <div className="col-span-3 row-span-5 bg-white rounded-lg shadow-md h-[330px]">
              myJournal //todo hacerlo en componente aparte
            </div>
            <TransactionsComponent />
            
            <div className=" bg-white rounded-lg shadow-md "><MyGraph /></div>
          </div>
        </div>
  );
}
